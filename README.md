## Furion

一个没有历史包袱的 .NET/C# 应用程序框架，你可以用它构建任何 .NET/C# 应用程序。

## 安装

- Package Manager

```cs
Install-Package Furion
```

- .NET CLI

```cs
dotnet add package Furion
```

## 例子

我们在 [主页](https://dotnetchina.gitee.io/furion) 上有不少例子，这是让您入门的第一个：

```cs
var services = Inject.Create();
services.AddRemoteRequest();
services.Build();

var content = await "https://www.baidu.com".GetAsStringAsync();
Console.WriteLine(content);
```

## 文档

你可以在 [主页](https://furion.pro) 或 [备份主页](https://dotnetchina.gitee.io/furion) 找到 Furion 文档。

## 贡献

该存储库的主要目的是继续发展 Furion 核心，使其更快、更易于使用。 Furion 的开发在 [Gitee](https://gitee.com/dotnetchina/Furion) 上公开进行，我们感谢社区贡献错误修复和改进。Furion 遵循 [MulanPSL-2.0](https://gitee.com/dotnetchina/Furion/blob/master/LICENSE) 开源协议，阅读 [贡献指南](https://dotnetchina.gitee.io/furion/docs/contribute) 内容，了解如何参与改进 Furion。
