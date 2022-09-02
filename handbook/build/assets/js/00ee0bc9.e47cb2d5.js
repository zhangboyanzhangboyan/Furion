"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6792],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,k=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(k,a(a({ref:t},d),{},{components:n})):r.createElement(k,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7173:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=n(4996),p=["components"],l={id:"net5-to-net6",title:"2.5 .NET5 \u5347\u7ea7 .NET6",sidebar_label:"2.5 .NET5 \u5347\u7ea7 .NET6"},c=void 0,d={unversionedId:"net5-to-net6",id:"net5-to-net6",title:"2.5 .NET5 \u5347\u7ea7 .NET6",description:"",source:"@site/docs/net5-to-net6.mdx",sourceDirName:".",slug:"/net5-to-net6",permalink:"/furion/docs/net5-to-net6",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/net5-to-net6.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1662012638,formattedLastUpdatedAt:"Sep 1, 2022",frontMatter:{id:"net5-to-net6",title:"2.5 .NET5 \u5347\u7ea7 .NET6",sidebar_label:"2.5 .NET5 \u5347\u7ea7 .NET6"},sidebar:"docs",previous:{title:"2.4 \u795e\u5947\u7684 Inject",permalink:"/furion/docs/inject"},next:{title:"2.6 GlobalUsing \u4f7f\u7528",permalink:"/furion/docs/globalusing"}},u={},s=[{value:"2.5.1 \u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",id:"251-\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",level:2},{value:"2.5.1.1 \u5b89\u88c5 <code>.NET6 SDK</code>",id:"2511-\u5b89\u88c5-net6-sdk",level:3},{value:"2.5.1.2 \u7f16\u8f91 <code>.csproj</code> \u6587\u4ef6",id:"2512-\u7f16\u8f91-csproj-\u6587\u4ef6",level:3},{value:"2.5.1.3 \u5347\u7ea7 <code>Nuget</code> \u5305",id:"2513-\u5347\u7ea7-nuget-\u5305",level:3},{value:"2.5.1.4 \u5220\u9664 <code>Startup.cs</code> \u6587\u4ef6",id:"2514-\u5220\u9664-startupcs-\u6587\u4ef6",level:3},{value:"2.5.1.5 \u7f16\u8f91 <code>Web</code> \u542f\u52a8\u5c42 <code>.csproj</code>",id:"2515-\u7f16\u8f91-web-\u542f\u52a8\u5c42-csproj",level:3},{value:"2.5.1.6 \u66ff\u6362 <code>Program.cs</code> \u5185\u5bb9\u4e3a\uff1a",id:"2516-\u66ff\u6362-programcs-\u5185\u5bb9\u4e3a",level:3},{value:"2.5.1.7 \u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848",id:"2517-\u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848",level:3}],m={toc:s};function k(e){var t=e.components,n=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"251-\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879"},"2.5.1 \u5347\u7ea7\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u76ee\u524d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Furion v2.x")," \u7248\u672c\u7684\u7528\u6237\u5747\u53ef\u4ee5\u5feb\u901f\u65e0\u7f1d\u5347\u7ea7\u81f3 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Furion v4.x")," \u7248\u672c\uff0c\u53ea\u9700\u8981\u505a\u5c11\u91cf\u66f4\u6539\u5373\u53ef\u3002")),(0,i.kt)("h3",{id:"2511-\u5b89\u88c5-net6-sdk"},"2.5.1.1 \u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"h3"},".NET6 SDK")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download/dotnet/6.0"},"https://dotnet.microsoft.com/download/dotnet/6.0")),(0,i.kt)("h3",{id:"2512-\u7f16\u8f91-csproj-\u6587\u4ef6"},"2.5.1.2 \u7f16\u8f91 ",(0,i.kt)("inlineCode",{parentName:"h3"},".csproj")," \u6587\u4ef6"),(0,i.kt)("p",null,"\u7f16\u8f91\u89e3\u51b3\u65b9\u6848\u6240\u6709\u9879\u76ee\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},".csproj")," \u6587\u4ef6\uff0c\u5e76\u66ff\u6362 ",(0,i.kt)("inlineCode",{parentName:"p"},"<TargetFramework>net5.0</TargetFramework>")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"<TargetFramework>net6.0</TargetFramework>"),"\uff0c\u5982\uff1a"),(0,i.kt)("img",{src:(0,a.Z)("img/sjl1.png")}),(0,i.kt)("p",null,"\u5f53\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + F")," \u5168\u5c40\u66ff\u6362"),(0,i.kt)("img",{src:(0,a.Z)("img/sjl2.png")}),(0,i.kt)("h3",{id:"2513-\u5347\u7ea7-nuget-\u5305"},"2.5.1.3 \u5347\u7ea7 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Nuget")," \u5305"),(0,i.kt)("p",null,"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6240\u6709\u5305\u5347\u7ea7\u81f3 ",(0,i.kt)("inlineCode",{parentName:"p"},"v4.3.7")," \u7248\u672c\uff0c\u540c\u65f6 ",(0,i.kt)("inlineCode",{parentName:"p"},"Microsoft")," \u6240\u6709\u5305\u5347\u7ea7\u81f3 ",(0,i.kt)("inlineCode",{parentName:"p"},"v6.0.8")," \u7248\u672c\uff0c\u5982\uff1a"),(0,i.kt)("img",{src:(0,a.Z)("img/sjl3.png")}),(0,i.kt)("h3",{id:"2514-\u5220\u9664-startupcs-\u6587\u4ef6"},"2.5.1.4 \u5220\u9664 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Startup.cs")," \u6587\u4ef6"),(0,i.kt)("p",null,"\u5220\u9664 ",(0,i.kt)("inlineCode",{parentName:"p"},"Web \u542f\u52a8\u5c42")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u6587\u4ef6\uff0c\u5982\uff1a"),(0,i.kt)("img",{src:(0,a.Z)("img/sjl4.png")}),(0,i.kt)("h3",{id:"2515-\u7f16\u8f91-web-\u542f\u52a8\u5c42-csproj"},"2.5.1.5 \u7f16\u8f91 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Web")," \u542f\u52a8\u5c42 ",(0,i.kt)("inlineCode",{parentName:"h3"},".csproj")),(0,i.kt)("p",null,"\u7f16\u8f91 ",(0,i.kt)("inlineCode",{parentName:"p"},"Web")," \u542f\u52a8\u5c42 ",(0,i.kt)("inlineCode",{parentName:"p"},".csproj")," \u6587\u4ef6\uff0c\u5e76\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"<ImplicitUsings>enable</ImplicitUsings>"),"\uff0c\u5982\uff1a"),(0,i.kt)("img",{src:(0,a.Z)("img/sjl5.png")}),(0,i.kt)("h3",{id:"2516-\u66ff\u6362-programcs-\u5185\u5bb9\u4e3a"},"2.5.1.6 \u66ff\u6362 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Program.cs")," \u5185\u5bb9\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var builder = WebApplication.CreateBuilder(args).Inject();\nvar app = builder.Build();\napp.Run();\n")),(0,i.kt)("admonition",{title:"v3.6.4+ \u7248\u672c",type:"important"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion 3.6.4+")," \u7248\u672c\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Serve.Run(RunOptions.Default);")," \u66ff\u4ee3\u4e0a\u9762\u5373\u53ef\u3002")),(0,i.kt)("admonition",{title:"\u5c0f\u63d0\u9192",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Serilog")," \u65e5\u5fd7\u7ec4\u4ef6\uff0c\u53ef\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"builder.UseSerilogDefault();")),(0,i.kt)("p",{parentName:"admonition"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Serve.Run(RunOptions.Default.ConfigureBuilder(builder => builder.UseSerilogDefault()));"),"\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"pgsql")," \u6570\u636e\u5e93\uff0c\u4f60\u8fd8\u53ef\u80fd\u9700\u8981\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},'AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);'),"\n=> ",(0,i.kt)("a",{parentName:"p",href:"https://www.npgsql.org/doc/types/datetime.html"},"\u76f8\u5173\u8bf4\u660e\uff1a\u5728 .NET6 \u4e2d Npgsql 6.0 \u5bf9\u65f6\u95f4\u6233\u7684\u6620\u5c04\u65b9\u5f0f\u8fdb\u884c\u4e86\u4e00\u4e9b\u91cd\u8981\u7684\u66f4\u6539\u3002"))),(0,i.kt)("img",{src:(0,a.Z)("img/sjl6.png")}),(0,i.kt)("h3",{id:"2517-\u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848"},"2.5.1.7 \u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("p",null,"\u5347\u7ea7\u5b8c\u6210\uff01\uff01\uff01"))}k.isMDXComponent=!0}}]);