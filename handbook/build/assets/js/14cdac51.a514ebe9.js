"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4474],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,C=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return n?a.createElement(C,r(r({ref:t},m),{},{components:n})):a.createElement(C,r({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7315:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={id:"entity",title:"9.3 \u6570\u636e\u5e93\u5b9e\u4f53",sidebar_label:"9.3 \u6570\u636e\u5e93\u5b9e\u4f53"},s=void 0,c={unversionedId:"entity",id:"entity",title:"9.3 \u6570\u636e\u5e93\u5b9e\u4f53",description:"\u4e00\u65e6\u5b9a\u4e49\u4e86\u5b9e\u4f53\u6216\u6539\u53d8\u4e86\u5b9e\u4f53\u7ed3\u6784\u6216\u5b9e\u4f53\u914d\u7f6e\uff0c\u9700\u8981\u91cd\u65b0\u6267\u884c Add-Migration \u548c Update-Database \u547d\u4ee4\u3002",source:"@site/docs/entity.mdx",sourceDirName:".",slug:"/entity",permalink:"/furion/docs/entity",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/entity.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1651894493,formattedLastUpdatedAt:"5/7/2022",frontMatter:{id:"entity",title:"9.3 \u6570\u636e\u5e93\u5b9e\u4f53",sidebar_label:"9.3 \u6570\u636e\u5e93\u5b9e\u4f53"},sidebar:"docs",previous:{title:"9.2 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668",permalink:"/furion/docs/dbcontext-locator"},next:{title:"9.4 \u4ed3\u50a8\u6a21\u5f0f (Repository)",permalink:"/furion/docs/dbcontext-repository"}},m={},p=[{value:"9.3.1 \u6570\u636e\u5e93\u5b9e\u4f53",id:"931-\u6570\u636e\u5e93\u5b9e\u4f53",level:2},{value:"9.3.2 \u5982\u4f55\u5b9a\u4e49\u5b9e\u4f53",id:"932-\u5982\u4f55\u5b9a\u4e49\u5b9e\u4f53",level:2},{value:"9.3.2.1 \u5b9e\u4f53\u7ee7\u627f\u9009\u7528\u539f\u5219",id:"9321-\u5b9e\u4f53\u7ee7\u627f\u9009\u7528\u539f\u5219",level:3},{value:"9.3.2.2 <code>IEntity</code> \u793a\u8303\uff1a",id:"9322-ientity-\u793a\u8303",level:3},{value:"9.3.2.3 <code>EntityBase</code> \u793a\u8303\uff1a",id:"9323-entitybase-\u793a\u8303",level:3},{value:"9.3.2.4 <code>Entity</code> \u793a\u8303\uff1a",id:"9324-entity-\u793a\u8303",level:3},{value:"9.3.2.5 <code>EntityNotKey</code> \u793a\u8303\uff1a",id:"9325-entitynotkey-\u793a\u8303",level:3},{value:"9.3.3 \u81ea\u5b9a\u4e49\u516c\u5171\u5b9e\u4f53",id:"933-\u81ea\u5b9a\u4e49\u516c\u5171\u5b9e\u4f53",level:2},{value:"9.3.4 \u6570\u636e\u5e93\u5b9e\u4f53\u914d\u7f6e",id:"934-\u6570\u636e\u5e93\u5b9e\u4f53\u914d\u7f6e",level:2},{value:"9.3.4.1 \u5728\u6570\u636e\u5e93\u5b9e\u4f53\u4e2d\u914d\u7f6e",id:"9341-\u5728\u6570\u636e\u5e93\u5b9e\u4f53\u4e2d\u914d\u7f6e",level:3},{value:"9.3.4.2 \u5728\u4efb\u4f55\u5b9e\u4f8b\u7c7b\u4e2d\u914d\u7f6e",id:"9342-\u5728\u4efb\u4f55\u5b9e\u4f8b\u7c7b\u4e2d\u914d\u7f6e",level:3},{value:"9.3.5 \u6570\u636e\u5e93\u5b9e\u4f53\u914d\u7f6e\u8bf4\u660e",id:"935-\u6570\u636e\u5e93\u5b9e\u4f53\u914d\u7f6e\u8bf4\u660e",level:2},{value:"9.3.6 \u914d\u7f6e\u5217\u540d\u53ca\u5217\u7c7b\u578b",id:"936-\u914d\u7f6e\u5217\u540d\u53ca\u5217\u7c7b\u578b",level:2},{value:"9.3.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"937-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u63d0\u9192")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e00\u65e6\u5b9a\u4e49\u4e86\u5b9e\u4f53\u6216\u6539\u53d8\u4e86\u5b9e\u4f53\u7ed3\u6784\u6216\u5b9e\u4f53\u914d\u7f6e\uff0c\u9700\u8981\u91cd\u65b0\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"Add-Migration")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Update-Database")," \u547d\u4ee4\u3002"))),(0,i.kt)("h2",{id:"931-\u6570\u636e\u5e93\u5b9e\u4f53"},"9.3.1 \u6570\u636e\u5e93\u5b9e\u4f53"),(0,i.kt)("p",null,"\u5728\u9762\u5411\u5bf9\u8c61\u5f00\u53d1\u601d\u60f3\u4e2d\uff0c\u6700\u91cd\u8981\u5c24\u4e3a",(0,i.kt)("strong",{parentName:"p"},"\u5bf9\u8c61"),"\u4e8c\u5b57\uff0c\u5728 .NET \u5f00\u53d1\u8fc7\u53bb\uff0c\u64cd\u4f5c\u6570\u636e\u5e93\u5f80\u5f80\u91c7\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"DataTable")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"DataSet")," \u6765\u63a5\u6536\u6570\u636e\u5e93\u8fd4\u56de\u7ed3\u679c\u96c6\uff0c\u800c\u64cd\u4f5c\u6570\u636e\u5e93\u4e5f\u79bb\u4e0d\u5f00\u624b\u5199 ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," \u8bed\u53e5\u3002"),(0,i.kt)("p",null,"\u5728\u8fc7\u53bb\u9762\u5411\u8fc7\u7a0b\u548c\u5e94\u7528\u4e0d\u53d1\u8fbe\u7684\u65f6\u4ee3\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u786e\u5b9e\u597d\u4f7f\u3002\u7136\u540e\u968f\u7740\u4e2d\u56fd\u4e92\u8054\u7f51\u7f51\u6c11\u7684\u6fc0\u589e\uff0c\u7535\u5b50\u5316\u65f6\u4ee3\u7684\u5230\u6765\uff0c\u5404\u884c\u5404\u4e1a\u5bf9\u5e94\u7528\u9700\u6c42\u4e5f\u8fbe\u5230\u4e86\u524d\u6240\u672a\u6709\u7684\u91cf\u7ea7\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\uff0c\u5728\u8fc7\u53bb\u624b\u5199 ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," \u7684\u65f6\u4ee3\u5404\u79cd\u95ee\u9898\u663e\u9732\u65e0\u7591\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7a0b\u5e8f\u5458\u80fd\u529b\u53c2\u5dee\u4e0d\u9f50\uff0c\u5199\u51fa\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"sql")," \u6027\u80fd\u81ea\u7136\u4e5f\u5929\u5dee\u5730\u522b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sql")," \u5c5e\u4e8e\u5b57\u7b26\u4e32\u786c\u7f16\u7a0b\uff0c\u540e\u671f\u7ef4\u62a4\u96be\u4e0a\u52a0\u96be"),(0,i.kt)("li",{parentName:"ul"},"\u8bb8\u591a\u5355\u8868\u751a\u81f3\u591a\u8868\u7ed3\u6784\u4e00\u81f4\uff0c\u51fa\u73b0\u5927\u91cf\u91cd\u590d ",(0,i.kt)("inlineCode",{parentName:"li"},"sql")," \u4ee3\u7801"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sql")," \u672c\u8eab\u5728\u4e0d\u540c\u7684\u6570\u636e\u5e93\u63d0\u4f9b\u5668\u4e2d\u5199\u6cd5\u6709\u5dee\uff0c\u540e\u7eed\u8fc1\u79fb\u5934\u75db\u4e0d\u5df2")),(0,i.kt)("p",null,"\u5f53\u7136\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," \u662f\u65f6\u4ee3\u7684\u4ea7\u7269\uff0c\u6211\u4eec\u4e5f\u79bb\u4e0d\u5f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"sql"),"\uff0c\u4f46\u5bf9\u4e8e\u5927\u591a\u6570\u7a0b\u5e8f\u5458\u548c\u9879\u76ee\u6765\u8bf4\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," \u672a\u5fc5\u80fd\u591f\u5e26\u7ed9\u4ed6\u4eec\u591a\u5927\u7684\u6548\u76ca\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"ORM")," \u5c31\u8bde\u751f\u4e86\uff0c\u6240\u8c13\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"ORM")," \u5c31\u662f\u5bf9\u8c61\u5173\u7cfb\u6620\u5c04\uff0c\u82f1\u6587\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"Object Relational Mapping"),"\uff0c\u7b80\u5355\u70b9\u8bf4\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"ORM")," \u6839\u636e\u7279\u6709\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"POCO \u8d2b\u8840\u6a21\u578b")," \u89c4\u5219\u751f\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," \u8bed\u53e5\u3002\u5927\u5927\u907f\u514d\u4e86\u91cd\u590d ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," \u80fd\u529b\u53c2\u5dee\u4e0d\u9f50\u7b49\u95ee\u9898\u3002\uff08\u5f53\u7136 ",(0,i.kt)("inlineCode",{parentName:"p"},"ORM")," \u4f5c\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," \u80fd\u529b\u4e5f\u4f1a\u5f71\u54cd\u6700\u7ec8\u6027\u80fd\uff09"),(0,i.kt)("p",null,"\u4e0a\u9762\u6240\u8bf4\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"POCO")," \u8d2b\u8840\u6a21\u578b\u6b63\u662f\u6211\u4eec\u672c\u7ae0\u8282\u7684 ",(0,i.kt)("strong",{parentName:"p"},"\u6570\u636e\u5e93\u5b9e\u4f53"),"\u3002"),(0,i.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u6570\u636e\u5e93\u5b9e\u4f53\u5c31\u662f\u6570\u636e\u5e93\u8868\u7684\u7c7b\u8868\u73b0\uff0c\u901a\u8fc7\u4e00\u5b9a\u7684\u89c4\u5219\u4f7f\u8fd9\u4e2a\u7c7b\u80fd\u591f\u4e00\u4e00\u5bf9\u5e94\u8868\u7ed3\u6784\u3002\u901a\u5e38\u8fd9\u6837\u7684\u7c7b\u4e5f\u79f0\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"POCO")," \u8d2b\u8840\u6a21\u578b\uff0c\u4e5f\u5c31\u662f\u53ea\u6709\u5b9a\u4e49\uff0c\u6ca1\u6709\u884c\u4e3a\u3002"),(0,i.kt)("h2",{id:"932-\u5982\u4f55\u5b9a\u4e49\u5b9e\u4f53"},"9.3.2 \u5982\u4f55\u5b9a\u4e49\u5b9e\u4f53"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u591a\u79cd\u5b9a\u4e49\u5b9e\u4f53\u7684\u63a5\u53e3\u4f9d\u8d56\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IEntity"),"\uff1a\u5b9e\u4f53\u57fa\u63a5\u53e3\uff0c\u662f\u6240\u6709\u5b9e\u4f53\u7684\u57fa\u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IEntityNotKey"),"\uff1a\u65e0\u952e\u5b9e\u4f53\u63a5\u53e3\uff0c\u4e5f\u5c31\u662f\u89c6\u56fe\u3001\u5b58\u50a8\u8fc7\u7a0b\u3001\u51fd\u6570\u4f9d\u8d56\u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EntityBase"),"\uff1a\u5b9e\u4f53\u57fa\u62bd\u8c61\u7c7b\uff0c\u5185\u7f6e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"Id"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"TenantId")," \u5b57\u6bb5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Entity"),"\uff1a\u5b9e\u4f53\u901a\u7528\u62bd\u8c61\u7c7b\uff0c\u7ee7\u627f\u81ea ",(0,i.kt)("inlineCode",{parentName:"li"},"EntityBase"),"\uff0c\u540c\u65f6\u5185\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"CreatedTime"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"UpdatedTime")," \u5b57\u6bb5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EntityNotKey"),"\uff1a\u65e0\u952e\u5b9e\u4f53\u62bd\u8c61\u7c7b\uff0c\u89c6\u56fe\u3001\u5b58\u50a8\u8fc7\u7a0b\u3001\u51fd\u6570\u4f9d\u8d56\u62bd\u8c61\u7c7b")),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5b9e\u4f53\u5b9a\u4e49\u4f4d\u7f6e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\u6709\u7ea6\u5b9a\uff0c\u5b9e\u4f53\u7edf\u4e00\u5b9a\u4e49\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion.Core")," \u5c42\u3002"))),(0,i.kt)("h3",{id:"9321-\u5b9e\u4f53\u7ee7\u627f\u9009\u7528\u539f\u5219"},"9.3.2.1 \u5b9e\u4f53\u7ee7\u627f\u9009\u7528\u539f\u5219"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u4e0d\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"li"},"Furion")," \u4e3a\u5b9e\u4f53\u6dfb\u52a0\u4efb\u4f55\u5185\u7f6e\u7279\u6027\uff0c\u9009\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"IEntity"),"\uff0c\u65e0\u952e\u5b9e\u4f53\u9009\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"IEntityNotKey")),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u53ea\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"li"},"Id")," \u5c5e\u6027\uff0c\u9009\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"EntityBase")),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"li"},"Furion")," \u4e3a\u4f60\u81ea\u52a8\u6dfb\u52a0\u5e38\u7528\u5b57\u6bb5\uff0c\u5219\u9009\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"Entity")),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u9700\u8981\u89c6\u56fe\u3001\u5b58\u50a8\u8fc7\u7a0b\u3001\u51fd\u6570\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"DbSet")," \u64cd\u4f5c\uff0c\u5219\u7ee7\u627f ",(0,i.kt)("inlineCode",{parentName:"li"},"EntityNotKey"))),(0,i.kt)("h3",{id:"9322-ientity-\u793a\u8303"},"9.3.2.2 ",(0,i.kt)("inlineCode",{parentName:"h3"},"IEntity")," \u793a\u8303\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,5}",showLineNumbers:!0,"":!0,"{1,5}":!0},"using Furion.DatabaseAccessor;\n\nnamespace Furion.Core\n{\n    public class User : IEntity\n    {\n        /// <summary>\n        /// \u624b\u5de5\u5b9a\u4e49 Id\n        /// </summary>\n        public int Id { get; set; }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n    }\n}\n")),(0,i.kt)("h3",{id:"9323-entitybase-\u793a\u8303"},"9.3.2.3 ",(0,i.kt)("inlineCode",{parentName:"h3"},"EntityBase")," \u793a\u8303\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,5}",showLineNumbers:!0,"":!0,"{1,5}":!0},"using Furion.DatabaseAccessor;\n\nnamespace Furion.Core\n{\n    public class User : EntityBase\n    {\n        // \u65e0\u9700\u5b9a\u4e49 Id \u5c5e\u6027\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n    }\n}\n")),(0,i.kt)("h3",{id:"9324-entity-\u793a\u8303"},"9.3.2.4 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Entity")," \u793a\u8303\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,5}",showLineNumbers:!0,"":!0,"{1,5}":!0},"using Furion.DatabaseAccessor;\n\nnamespace Furion.Core\n{\n    public class User : Entity\n    {\n        // \u65e0\u9700\u5b9a\u4e49 Id \u5c5e\u6027\n        // \u5e76\u81ea\u52a8\u6dfb\u52a0 CreatedTime\uff0cUpdatedTime \u5c5e\u6027\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n    }\n}\n")),(0,i.kt)("h3",{id:"9325-entitynotkey-\u793a\u8303"},"9.3.2.5 ",(0,i.kt)("inlineCode",{parentName:"h3"},"EntityNotKey")," \u793a\u8303\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,5,7-9}",showLineNumbers:!0,"":!0,"{1,5,7-9}":!0},'using Furion.DatabaseAccessor;\n\nnamespace Furion.Core\n{\n    public class UserView : EntityNotKey\n    {\n        public UserView() : base("\u89c6\u56fe\u540d\u79f0")\n        {\n        }\n\n        /// <summary>\n        /// Id\n        /// </summary>\n        public int Id { get; set; }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n    }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u7279\u522b\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u6570\u636e\u5e93\u5b9e\u4f53\u5fc5\u987b\u76f4\u63a5\u6216\u95f4\u63a5\u7ee7\u627f ",(0,i.kt)("inlineCode",{parentName:"p"},"IEntity")," \u624d\u80fd\u8fdb\u884c\u4ed3\u50a8\u7b49\u64cd\u4f5c\u3002"))),(0,i.kt)("h2",{id:"933-\u81ea\u5b9a\u4e49\u516c\u5171\u5b9e\u4f53"},"9.3.3 \u81ea\u5b9a\u4e49\u516c\u5171\u5b9e\u4f53"),(0,i.kt)("p",null,"\u5728\u5b9e\u9645\u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u6bcf\u4e2a\u5e94\u7528\u7684\u6570\u636e\u5e93\u8868\u90fd\u6709\u4e00\u4e9b\u516c\u5171\u7684\u7c7b\uff0c\u6bd4\u5982\u521b\u5efa\u4eba\uff0c\u521b\u5efa\u65f6\u95f4\u7b49\uff0c\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u5c31\u9700\u8981\u81ea\u5b9a\u4e49\u516c\u5171\u5b9e\u4f53\u7c7b\u4e86\u3002"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u521b\u5efa\u516c\u5171\u5b9e\u4f53\u7c7b\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u516c\u5171\u5b9e\u4f53\u7c7b",(0,i.kt)("strong",{parentName:"li"},"\u5fc5\u987b\u662f\u516c\u5f00\u4e14\u662f\u62bd\u8c61\u7c7b")),(0,i.kt)("li",{parentName:"ul"},"\u516c\u5171\u5b9e\u4f53\u7c7b\u5fc5\u987b\u542b\u6709\u65e0\u53c2\u6784\u9020\u51fd\u6570"),(0,i.kt)("li",{parentName:"ul"},"\u516c\u5171\u5b9e\u4f53\u7c7b\u5fc5\u987b\u63d0\u4f9b\u6570\u636e\u5e93\u5b9a\u4f4d\u5668\u7684\u652f\u6301")),(0,i.kt)("p",null,"\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {83-91}",showLineNumbers:!0,"":!0,"{83-91}":!0},"using System;\nusing System.ComponentModel.DataAnnotations;\nusing System.ComponentModel.DataAnnotations.Schema;\n\nnamespace Your.Namespace\n{\n    public abstract class CommonEntity : CommonEntity<int, MasterDbContextLocator>\n    {\n    }\n\n    public abstract class CommonEntity<TKey> : CommonEntity<TKey, MasterDbContextLocator>\n    {\n    }\n\n    public abstract class CommonEntity<TKey, TDbContextLocator1> : PrivateCommonEntity<TKey>\n        where TDbContextLocator1 : class, IDbContextLocator\n    {\n    }\n\n    public abstract class CommonEntity<TKey, TDbContextLocator1, TDbContextLocator2> : PrivateCommonEntity<TKey>\n        where TDbContextLocator1 : class, IDbContextLocator\n        where TDbContextLocator2 : class, IDbContextLocator\n    {\n    }\n\n    public abstract class CommonEntity<TKey, TDbContextLocator1, TDbContextLocator2, TDbContextLocator3> : PrivateCommonEntity<TKey>\n        where TDbContextLocator1 : class, IDbContextLocator\n        where TDbContextLocator2 : class, IDbContextLocator\n        where TDbContextLocator3 : class, IDbContextLocator\n    {\n    }\n\n    public abstract class CommonEntity<TKey, TDbContextLocator1, TDbContextLocator2, TDbContextLocator3, TDbContextLocator4> : PrivateCommonEntity<TKey>\n        where TDbContextLocator1 : class, IDbContextLocator\n        where TDbContextLocator2 : class, IDbContextLocator\n        where TDbContextLocator3 : class, IDbContextLocator\n        where TDbContextLocator4 : class, IDbContextLocator\n    {\n    }\n\n    public abstract class CommonEntity<TKey, TDbContextLocator1, TDbContextLocator2, TDbContextLocator3, TDbContextLocator4, TDbContextLocator5> : PrivateCommonEntity<TKey>\n        where TDbContextLocator1 : class, IDbContextLocator\n        where TDbContextLocator2 : class, IDbContextLocator\n        where TDbContextLocator3 : class, IDbContextLocator\n        where TDbContextLocator4 : class, IDbContextLocator\n        where TDbContextLocator5 : class, IDbContextLocator\n    {\n    }\n\n    public abstract class CommonEntity<TKey, TDbContextLocator1, TDbContextLocator2, TDbContextLocator3, TDbContextLocator4, TDbContextLocator5, TDbContextLocator6> : PrivateCommonEntity<TKey>\n        where TDbContextLocator1 : class, IDbContextLocator\n        where TDbContextLocator2 : class, IDbContextLocator\n        where TDbContextLocator3 : class, IDbContextLocator\n        where TDbContextLocator4 : class, IDbContextLocator\n        where TDbContextLocator5 : class, IDbContextLocator\n        where TDbContextLocator6 : class, IDbContextLocator\n    {\n    }\n\n    public abstract class CommonEntity<TKey, TDbContextLocator1, TDbContextLocator2, TDbContextLocator3, TDbContextLocator4, TDbContextLocator5, TDbContextLocator6, TDbContextLocator7> : PrivateCommonEntity<TKey>\n        where TDbContextLocator1 : class, IDbContextLocator\n        where TDbContextLocator2 : class, IDbContextLocator\n        where TDbContextLocator3 : class, IDbContextLocator\n        where TDbContextLocator4 : class, IDbContextLocator\n        where TDbContextLocator5 : class, IDbContextLocator\n        where TDbContextLocator6 : class, IDbContextLocator\n        where TDbContextLocator7 : class, IDbContextLocator\n    {\n    }\n\n    public abstract class CommonEntity<TKey, TDbContextLocator1, TDbContextLocator2, TDbContextLocator3, TDbContextLocator4, TDbContextLocator5, TDbContextLocator6, TDbContextLocator7, TDbContextLocator8> : PrivateCommonEntity<TKey>\n        where TDbContextLocator1 : class, IDbContextLocator\n        where TDbContextLocator2 : class, IDbContextLocator\n        where TDbContextLocator3 : class, IDbContextLocator\n        where TDbContextLocator4 : class, IDbContextLocator\n        where TDbContextLocator5 : class, IDbContextLocator\n        where TDbContextLocator6 : class, IDbContextLocator\n        where TDbContextLocator7 : class, IDbContextLocator\n        where TDbContextLocator8 : class, IDbContextLocator\n    {\n    }\n\n    public abstract class PrivateCommonEntity<TKey> : IPrivateEntity\n    {\n        // \u6ce8\u610f\u662f\u5728\u8fd9\u91cc\u5b9a\u4e49\u4f60\u7684\u516c\u5171\u5b9e\u4f53\n        public virtual TKey Id { get; set; }\n\n        public virtual DateTime CreatedTime { get; set; }\n\n        // \u66f4\u591a\u5c5e\u6027\u5b9a\u4e49\n    }\n}\n")),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u8bf4\u660e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u901a\u8fc7\u4e0a\u9762\u7684\u683c\u5f0f\u5b9a\u4e49\u53ef\u4ee5\u5b8c\u7f8e\u7684\u652f\u6301\u591a\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u5efa\u8bae\u91c7\u7528\u8fd9\u79cd\u683c\u5f0f\uff0c\u800c\u4e14\u6240\u6709\u7684\u516c\u5171\u5c5e\u6027\u90fd\u5e94\u8be5\u5b9a\u4e49\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"PrivateXXXX")," ",(0,i.kt)("inlineCode",{parentName:"p"},"\u79c1"),"\u6709\u7c7b\u4e2d\u3002"))),(0,i.kt)("h2",{id:"934-\u6570\u636e\u5e93\u5b9e\u4f53\u914d\u7f6e"},"9.3.4 \u6570\u636e\u5e93\u5b9e\u4f53\u914d\u7f6e"),(0,i.kt)("p",null,"\u5728\u8fc7\u53bb\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"EF Core")," \u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u6570\u636e\u5e93\u5b9e\u4f53\u914d\u7f6e\u9700\u8981\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"DbContext")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"OnModelCreating")," \u4e2d\u914d\u7f6e\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u4e3a\u4e86\u7b80\u5316\u914d\u7f6e\u548c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0c\u62bd\u8c61\u51fa\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"IEntityTypeBuilder<TEntity>")," \u63a5\u53e3\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"IEntityTypeBuilder<TEntity>")," \u63a5\u53e3\uff0c\u6211\u4eec\u65e0\u9700\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"DbContext")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"OnModelCreating")," \u4e2d\u914d\u7f6e\uff0c\u53ef\u5728\u4efb\u610f\u5730\u65b9\u914d\u7f6e\u3002"),(0,i.kt)("h3",{id:"9341-\u5728\u6570\u636e\u5e93\u5b9e\u4f53\u4e2d\u914d\u7f6e"},"9.3.4.1 \u5728\u6570\u636e\u5e93\u5b9e\u4f53\u4e2d\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,5,20-25}",showLineNumbers:!0,"":!0,"{1,5,20-25}":!0},"using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\n\nnamespace Furion.Core\n{\n    public class User : Entity, IEntityTypeBuilder<User>\n    {\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5e74\u9f84\n        /// </summary>\n        public int Age { get; set; }\n\n        // \u914d\u7f6e\u6570\u636e\u5e93\u5b9e\u4f53\n        public void Configure(EntityTypeBuilder<User> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n            entityBuilder.HasKey(u => u.Id);\n            entityBuilder.HasIndex(u => u.Name);\n        }\n    }\n}\n")),(0,i.kt)("h3",{id:"9342-\u5728\u4efb\u4f55\u5b9e\u4f8b\u7c7b\u4e2d\u914d\u7f6e"},"9.3.4.2 \u5728\u4efb\u4f55\u5b9e\u4f8b\u7c7b\u4e2d\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,8,10-14}",showLineNumbers:!0,"":!0,"{1,8,10-14}":!0},"using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\n\nnamespace Furion.Core\n{\n    public class SomeClass : IEntityTypeBuilder<User>\n    {\n        public void Configure(EntityTypeBuilder<User> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n            entityBuilder.HasKey(u => u.Id);\n            entityBuilder.HasIndex(u => u.Name);\n        }\n    }\n}\n")),(0,i.kt)("p",null,"\u5982\u4e0a\u9762\u4f8b\u5b50\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"SomeClass")," \u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," \u6570\u636e\u5e93\u5b9e\u4f53\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u7279\u522b\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," ",(0,i.kt)("inlineCode",{parentName:"p"},"SomeClass"),"\u5fc5\u987b\u58f0\u660e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"public"),"\uff0c\u5426\u5219\u65e0\u6cd5\u81ea\u52a8\u6ce8\u518c\u3002"))),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u66f4\u591a\u77e5\u8bc6")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u9700\u4e86\u89e3\u5b9e\u4f53\u914d\u7f6e\u652f\u6301\u54ea\u4e9b\u914d\u7f6e\u53ef\u67e5\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/ef/core/modeling/"},"\u3010EFCore - \u521b\u5efa\u6a21\u578b\u3011")," \u7ae0\u8282\u3002"))),(0,i.kt)("h2",{id:"935-\u6570\u636e\u5e93\u5b9e\u4f53\u914d\u7f6e\u8bf4\u660e"},"9.3.5 \u6570\u636e\u5e93\u5b9e\u4f53\u914d\u7f6e\u8bf4\u660e"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4f1a\u81ea\u52a8\u626b\u63cf\u6240\u6709\u7ee7\u627f ",(0,i.kt)("inlineCode",{parentName:"p"},"IEntity")," \u63a5\u53e3\u7684\u7c7b\u8fdb\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"DbSet<TEntity>")," \u6ce8\u518c\uff0c\u4e5f\u5c31\u662f\u5b9e\u73b0\u81ea\u52a8\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"DbContext")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"OnModelCreating"),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u9700\u8981\u8df3\u8fc7\u81ea\u52a8\u6ce8\u518c\uff0c\u53ea\u9700\u8981\u8d34 ",(0,i.kt)("inlineCode",{parentName:"p"},"[Manual]")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"[SuppressSniffer]")," \u7279\u6027\u5373\u53ef\u3002\u4e00\u65e6\u8d34\u4e86\u6b64\u7279\u6027\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u624b\u52a8\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"DbContext")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"OnModelCreating")),(0,i.kt)("h2",{id:"936-\u914d\u7f6e\u5217\u540d\u53ca\u5217\u7c7b\u578b"},"9.3.6 \u914d\u7f6e\u5217\u540d\u53ca\u5217\u7c7b\u578b"),(0,i.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u624b\u52a8\u8bbe\u7f6e\u5217\u540d\u6216\u5217\u7c7b\u578b\uff0c\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"decimal(18,2)"),"\uff0c\u8fd9\u65f6\u5019\u53ea\u9700\u8981\u5728\u5c5e\u6027\u4e0a\u9762\u8d34 ",(0,i.kt)("inlineCode",{parentName:"p"},'[Column("\u5217\u540d", TypeName="decimal(18,2)")]')," \u5373\u53ef\u3002"),(0,i.kt)("h2",{id:"937-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.3.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}u.isMDXComponent=!0}}]);