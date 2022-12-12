"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6611],{4852:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(i,".").concat(m)]||d[m]||l[m]||o;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8098:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(9675),a=(r(9231),r(4852));const o={},c="Graph Structure",s={unversionedId:"graph-structure",id:"graph-structure",title:"Graph Structure",description:"ComposeDB provides a\xa0graph structure\xa0for interacting with data on\xa0Ceramic. The ComposeDB content graph supports two types of nodes:\xa0accounts\xa0that are able to able to create & edit data in the graph, and\xa0documents\xa0containing mutable data of a given shape.",source:"@site/docs/graph-structure.mdx",sourceDirName:".",slug:"/graph-structure",permalink:"/docs/preview/graph-structure",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Core Concepts",permalink:"/docs/preview/core-concepts"},next:{title:"Data Modeling Concepts",permalink:"/docs/preview/data-modeling-concepts"}},i={},p=[{value:"Accounts",id:"accounts",level:2},{value:"Documents",id:"documents",level:2}],u={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"graph-structure"},"Graph Structure"),(0,a.kt)("p",null,"ComposeDB provides a\xa0",(0,a.kt)("strong",{parentName:"p"},"graph structure"),"\xa0for interacting with data on\xa0",(0,a.kt)("a",{parentName:"p",href:"https://ceramic.network/"},"Ceramic"),". The ComposeDB content graph supports two types of nodes:\xa0",(0,a.kt)("strong",{parentName:"p"},"accounts"),"\xa0that are able to able to create & edit data in the graph, and\xa0",(0,a.kt)("strong",{parentName:"p"},"documents"),"\xa0containing mutable data of a given shape."),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("strong",{parentName:"p"},"nodes"),"\xa0in the graph can be\xa0",(0,a.kt)("strong",{parentName:"p"},"accounts"),"\xa0or\xa0",(0,a.kt)("strong",{parentName:"p"},"documents"),", while the\xa0",(0,a.kt)("strong",{parentName:"p"},"edges"),"\xa0in the graph represent relations between\xa0",(0,a.kt)("strong",{parentName:"p"},"nodes"),". All nodes in the ComposeDB graph use a globally unique identifier, allowing direct access to any known node."),(0,a.kt)("p",null,"ComposeDB is is designed similar to a property graph database."),(0,a.kt)("h2",{id:"accounts"},"Accounts"),(0,a.kt)("p",null,"Ceramic uses\xa0",(0,a.kt)("a",{parentName:"p",href:"https://w3c.github.io/did-core/"},"Decentralized Identifiers (DIDs)"),"\xa0for accounts, which get translated to\xa0CeramicAccount\xa0objects\xa0by the ComposeDB client."),(0,a.kt)("p",null,"DIDs can represent any entity that is able to write data on Ceramic and therefore in ComposeDB, which can be end-users of an application, groups, applications or any kind of authenticated service."),(0,a.kt)("p",null,"In order to write data in DB, a DID must be attached to the client instance. "),(0,a.kt)("h2",{id:"documents"},"Documents"),(0,a.kt)("p",null,"Documents are\xa0",(0,a.kt)("a",{parentName:"p",href:"https://developers.ceramic.network/learn/advanced/overview/#streams"},"Ceramic streams"),"\xa0that store structured data as defined by a\xa0model."),(0,a.kt)("p",null,"Ceramic nodes can be configured to index specific models, storing all the documents using a model in a local database in order to provide fast access and query capabilities."),(0,a.kt)("p",null,"Using\xa0",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL"),", the ComposeDB client allows to query documents indexed by a Ceramic node, as well as creating new documents and updating existing ones when mutations are enabled.\xa0"))}l.isMDXComponent=!0}}]);