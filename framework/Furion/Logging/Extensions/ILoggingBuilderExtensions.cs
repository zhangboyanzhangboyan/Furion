﻿// MIT License
//
// Copyright (c) 2020-2023 百小僧, Baiqian Co.,Ltd and Contributors
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

using Furion.Logging;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;

namespace Microsoft.Extensions.Logging;

/// <summary>
/// 日志构建器拓展类
/// </summary>
[SuppressSniffer]
public static class ILoggingBuilderExtensions
{
    /// <summary>
    /// 添加控制台默认格式化器
    /// </summary>
    /// <param name="builder"></param>
    /// <param name="configure"></param>
    /// <returns></returns>
    public static ILoggingBuilder AddConsoleFormatter(this ILoggingBuilder builder, Action<ConsoleFormatterExtendOptions> configure = default)
    {
        configure ??= (options) => { };

        return builder.AddConsole(options => options.FormatterName = "console-format")
                      .AddConsoleFormatter<ConsoleFormatterExtend, ConsoleFormatterExtendOptions>(configure);
    }

    /// <summary>
    /// 添加文件日志记录器
    /// </summary>
    /// <param name="builder">日志构建器</param>
    /// <param name="fileName">日志文件完整路径或文件名，推荐 .log 作为拓展名</param>
    /// <param name="append">追加到已存在日志文件或覆盖它们</param>
    /// <returns><see cref="ILoggingBuilder"/></returns>
    public static ILoggingBuilder AddFile(this ILoggingBuilder builder, string fileName, bool append = true)
    {
        // 注册文件日志记录器提供器
        builder.Services.Add(ServiceDescriptor.Singleton<ILoggerProvider, FileLoggerProvider>((serviceProvider) =>
        {
            return new FileLoggerProvider(fileName ?? "application.log", append);
        }));

        return builder;
    }

    /// <summary>
    /// 添加文件日志记录器
    /// </summary>
    /// <param name="builder">日志构建器</param>
    /// <param name="fileName">日志文件完整路径或文件名，推荐 .log 作为拓展名</param>
    /// <param name="configure">文件日志记录器配置选项委托</param>
    /// <returns><see cref="ILoggingBuilder"/></returns>
    public static ILoggingBuilder AddFile(this ILoggingBuilder builder, string fileName, Action<FileLoggerOptions> configure)
    {
        // 注册文件日志记录器提供器
        builder.Services.Add(ServiceDescriptor.Singleton<ILoggerProvider, FileLoggerProvider>((serviceProvider) =>
        {
            var options = new FileLoggerOptions();
            configure?.Invoke(options);

            return new FileLoggerProvider(fileName ?? "application.log", options);
        }));

        return builder;
    }

    /// <summary>
    /// 添加文件日志记录器（从配置文件中）默认 Key 为："Logging:File"
    /// </summary>
    /// <param name="builder">日志构建器</param>
    /// <param name="configure">文件日志记录器配置选项委托</param>
    /// <returns><see cref="ILoggingBuilder"/></returns>
    public static ILoggingBuilder AddFile(this ILoggingBuilder builder, Action<FileLoggerOptions> configure = default)
    {
        return builder.AddFile(() => "Logging:File", configure);
    }

    /// <summary>
    /// 添加文件日志记录器（从配置文件中）
    /// </summary>
    /// <param name="builder">日志构建器</param>
    /// <param name="configuraionKey">获取配置文件对应的 Key</param>
    /// <param name="configure">文件日志记录器配置选项委托</param>
    /// <returns><see cref="ILoggingBuilder"/></returns>
    public static ILoggingBuilder AddFile(this ILoggingBuilder builder, Func<string> configuraionKey, Action<FileLoggerOptions> configure = default)
    {
        // 注册文件日志记录器提供器
        builder.Services.AddSingleton<ILoggerProvider, FileLoggerProvider>((serviceProvider) =>
        {
            return Penetrates.CreateFromConfiguration(configuraionKey, configure);
        });

        return builder;
    }

    /// <summary>
    /// 添加数据库日志记录器
    /// </summary>
    /// <typeparam name="TDatabaseLoggingWriter">实现自 <see cref="IDatabaseLoggingWriter"/></typeparam>
    /// <param name="builder">日志构建器</param>
    /// <param name="configure">数据库日志记录器配置选项委托</param>
    /// <returns><see cref="ILoggingBuilder"/></returns>
    public static ILoggingBuilder AddDatabase<TDatabaseLoggingWriter>(this ILoggingBuilder builder, Action<DatabaseLoggerOptions> configure)
        where TDatabaseLoggingWriter : class, IDatabaseLoggingWriter
    {
        // 注册数据库日志写入器
        builder.Services.TryAddTransient<TDatabaseLoggingWriter, TDatabaseLoggingWriter>();

        DatabaseLoggerProvider databaseLoggerProvider = null;

        // 注册数据库日志记录器提供器
        builder.Services.Add(ServiceDescriptor.Singleton<ILoggerProvider, DatabaseLoggerProvider>((serviceProvider) =>
        {
            var options = new DatabaseLoggerOptions();
            configure?.Invoke(options);

            // 数据库日志记录器提供程序
            var instance = new DatabaseLoggerProvider(options);
            databaseLoggerProvider ??= instance;

            // 解决数据库写入器中循环引用数据库仓储问题
            if (databaseLoggerProvider._serviceScope == null)
            {
                databaseLoggerProvider.SetServiceProvider(serviceProvider, typeof(TDatabaseLoggingWriter));
            }

            return instance;
        }));

        return builder;
    }

    /// <summary>
    /// 添加数据库日志记录器
    /// </summary>
    /// <typeparam name="TDatabaseLoggingWriter">实现自 <see cref="IDatabaseLoggingWriter"/></typeparam>
    /// <param name="builder">日志构建器</param>
    /// <param name="configuraionKey">配置文件对于的 Key</param>
    /// <param name="configure">数据库日志记录器配置选项委托</param>
    /// <returns><see cref="ILoggingBuilder"/></returns>
    public static ILoggingBuilder AddDatabase<TDatabaseLoggingWriter>(this ILoggingBuilder builder, string configuraionKey = default, Action<DatabaseLoggerOptions> configure = default)
        where TDatabaseLoggingWriter : class, IDatabaseLoggingWriter
    {
        return builder.AddDatabase<TDatabaseLoggingWriter>(() => configuraionKey ?? "Logging:Database", configure);
    }

    /// <summary>
    /// 添加数据库日志记录器（从配置文件中）
    /// </summary>
    /// <typeparam name="TDatabaseLoggingWriter">实现自 <see cref="IDatabaseLoggingWriter"/></typeparam>
    /// <param name="builder">日志构建器</param>
    /// <param name="configuraionKey">获取配置文件对于的 Key</param>
    /// <param name="configure">数据库日志记录器配置选项委托</param>
    /// <returns><see cref="ILoggingBuilder"/></returns>
    public static ILoggingBuilder AddDatabase<TDatabaseLoggingWriter>(this ILoggingBuilder builder, Func<string> configuraionKey, Action<DatabaseLoggerOptions> configure = default)
        where TDatabaseLoggingWriter : class, IDatabaseLoggingWriter
    {
        // 注册数据库日志写入器
        builder.Services.TryAddTransient<TDatabaseLoggingWriter, TDatabaseLoggingWriter>();

        DatabaseLoggerProvider databaseLoggerProvider = null;

        // 注册数据库日志记录器提供器
        builder.Services.AddSingleton<ILoggerProvider, DatabaseLoggerProvider>((serviceProvider) =>
        {
            // 创建数据库日志记录器提供程序
            var instance = Penetrates.CreateFromConfiguration(configuraionKey, configure);
            databaseLoggerProvider ??= instance;

            // 解决数据库写入器中循环引用数据库仓储问题
            if (databaseLoggerProvider._serviceScope == null)
            {
                databaseLoggerProvider.SetServiceProvider(serviceProvider, typeof(TDatabaseLoggingWriter));
            }

            return instance;
        });

        return builder;
    }
}