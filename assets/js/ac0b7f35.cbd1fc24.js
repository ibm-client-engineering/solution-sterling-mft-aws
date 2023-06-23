"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6756],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||g[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7625:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(4137));const i={title:"Log - Sprint 16 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-16",tags:["log","sprint"]},o=void 0,l={permalink:"/solution-sfg-aws/blog/flight-log-16",editUrl:"https://github.com/ibm-client-engineering/solution-sfg-aws/edit/main/website/flight-logs/2023-06-14-cocreate.md",source:"@site/flight-logs/2023-06-14-cocreate.md",title:"Log - Sprint 16 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2023-06-14T00:00:00.000Z",formattedDate:"June 14, 2023",tags:[{label:"log",permalink:"/solution-sfg-aws/blog/tags/log"},{label:"sprint",permalink:"/solution-sfg-aws/blog/tags/sprint"}],readingTime:.6,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log - Sprint 16 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-16",tags:["log","sprint"]},prevItem:{title:"Log - Sprint 17 \ud83d\udeeb",permalink:"/solution-sfg-aws/blog/flight-log-17"},nextItem:{title:"Log - Sprint 15 \ud83d\udeeb",permalink:"/solution-sfg-aws/blog/flight-log-15"}},s={authorsImageUrls:[]},p=[{value:"Work In Progress",id:"work-in-progress",level:2},{value:"Tracking",id:"tracking",level:2}],c={toc:p},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"work-in-progress"},"Work In Progress"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The KMS encryption with S3 is not currently supported and should be available by the end of the year or early next year. In the meantime, the team can focus on testing SFTP.")),(0,a.kt)("h2",{id:"tracking"},"Tracking"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The Customer needs to set up an SFTP server and create an SFTP user with private keys for testing.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The Customer will speak to his team about getting an exception for S3 bucket storage to use standard AWS SSE instead of KMS.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Cases open: 0"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Cases closed: 5")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"case TS012906539"),(0,a.kt)("li",{parentName:"ul"},"case TS013042929"),(0,a.kt)("li",{parentName:"ul"},"case TS012831699"),(0,a.kt)("li",{parentName:"ul"},"case TS012704616"),(0,a.kt)("li",{parentName:"ul"},"case TS012702956  "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://zenhub.ibm.com/workspaces/st5-action-information-center-64343620d0cfd0000f03a114/issues/ibm-client-engineering/solution-sfg-aws/17"},"ibm-client-engineering/solution-sfg-aws#17"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'This flight log is being submitted via PR "06/14/2023 Documentation".'))))}g.isMDXComponent=!0}}]);