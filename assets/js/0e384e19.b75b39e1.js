"use strict";(self.webpackChunkapollo_docs=self.webpackChunkapollo_docs||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,slug:"/"},s="Introduction",p={unversionedId:"intro",id:"intro",title:"Introduction",description:"Collecting blockchain data is no easy task. As DeFi researchers, we've spent countless hours building infrastructure",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Getting started",permalink:"/getting-started"}},c={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Collecting blockchain data is no easy task"),". As DeFi researchers, we've spent countless hours building infrastructure\nthat would allow us to get the data we need for a specific application: generating ABI bindings with\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dethcrypto/TypeChain"},"Typechain")," or ",(0,o.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/docs/dapp/native-bindings"},"abigen"),",\nbuilding the application logic for fetching historical data, transforming and parsing the raw call results, filtering logs, creating SQL tables for saving that data..."),(0,o.kt)("p",null,"We've built ",(0,o.kt)("inlineCode",{parentName:"p"},"apollo")," to change and simplify all that. With ",(0,o.kt)("inlineCode",{parentName:"p"},"apollo"),", you can ",(0,o.kt)("strong",{parentName:"p"},"query"),", ",(0,o.kt)("strong",{parentName:"p"},"filter"),", ",(0,o.kt)("strong",{parentName:"p"},"transform")," and ",(0,o.kt)("strong",{parentName:"p"},"save"),"\nEVM ",(0,o.kt)("strong",{parentName:"p"},"chaindata")," based on a ",(0,o.kt)("a",{parentName:"p",href:"./category/schema"},"schema")," (more on that later).\nWhen we talk about ",(0,o.kt)("strong",{parentName:"p"},"chaindata"),", what we mean is one of the following things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contract methods")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Events")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Transactions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Native Balances"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"apollo")," has 2 main modes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Historical mode"),": ideal for fetching historical data and building datasets. Based on a specified time range, ",(0,o.kt)("inlineCode",{parentName:"li"},"apollo"),"\nwill process your schema with these historical states, and build up big datasets in no time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Real-time mode"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"apollo")," can also work in real-time. For ",(0,o.kt)("strong",{parentName:"li"},"methods")," and ",(0,o.kt)("strong",{parentName:"li"},"balances")," this would mean querying\nthe latest state every ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," seconds, which could be useful for dashboards or other time-sensitive products.\nFor ",(0,o.kt)("strong",{parentName:"li"},"events")," and ",(0,o.kt)("strong",{parentName:"li"},"transactions"),", we provide real-time feeds which can be used for alerts, mempool monitoring, and anything\nelse you can come up with.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For now, ",(0,o.kt)("inlineCode",{parentName:"p"},"apollo")," only works with EVM-based chains. This will change in the future."))))}m.isMDXComponent=!0}}]);