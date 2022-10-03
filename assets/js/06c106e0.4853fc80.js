"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4720],{4852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4300:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(9231),a=n(9841);const r="tabItem_PkC0";function l(e){let{children:t,hidden:n,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,l),hidden:n},t)}},5327:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(2203),a=n(9231),r=n(9841),l=n(5775),i=n(535),s=n(2925),c=n(8910);const u="tabList_OF_g",d="tabItem_Krmg";function p(e){var t;const{lazy:n,block:l,defaultValue:p,values:m,groupId:f,className:b}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??h.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[C,O]=(0,a.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=f){const e=k[f];null!=e&&e!==C&&g.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,n=x.indexOf(t),o=g[n].value;o!==C&&(T(t),O(o),null!=f&&w(f,String(o)))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},b)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>x.push(e),onKeyDown:N,onFocus:E,onClick:E},l,{className:(0,r.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,l.Z)();return a.createElement(p,(0,o.Z)({key:String(t)},e))}},1656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(2203),a=(n(9231),n(4852)),r=n(5327),l=n(4300);const i={},s="Composites deployment",c={unversionedId:"guides/using-composites/deployment",id:"guides/using-composites/deployment",title:"Composites deployment",description:"Valid composites can be deployed to any supporting Ceramic node, by ensuring the model streams described in the composite are available on the node, and that the node is configured to index theses models.",source:"@site/docs/guides/using-composites/deployment.mdx",sourceDirName:"guides/using-composites",slug:"/guides/using-composites/deployment",permalink:"/docs/0.3.x/guides/using-composites/deployment",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Composites discovery",permalink:"/docs/0.3.x/guides/using-composites/discovery"},next:{title:"Composites customization",permalink:"/docs/0.3.x/guides/using-composites/customization"}},u={},d=[{value:"Models deployment",id:"models-deployment",level:2},{value:"Ceramic node configuration",id:"ceramic-node-configuration",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"composites-deployment"},"Composites deployment"),(0,a.kt)("p",null,"Valid composites can be deployed to any supporting Ceramic node, by ensuring the model streams described in the composite are available on the node, and that the node is configured to index theses models."),(0,a.kt)("h2",{id:"models-deployment"},"Models deployment"),(0,a.kt)(r.Z,{defaultValue:"api",groupId:"api-or-cli",values:[{label:"Using the CLI",value:"cli"},{label:"Using the API",value:"api"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"api",mdxType:"TabItem"},(0,a.kt)("p",null,"Make sure you have the ",(0,a.kt)("inlineCode",{parentName:"p"},"composedb")," packages ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.3.x/installation"},"installed"),", before running the code below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { readEncodedComposite } from '@composedb/devtools-node'\n\n// Replace by the URL of the Ceramic node you want to deploy the models to\nconst ceramic = new CeramicClient('http://localhost:7007')\n\n// Replace by the path to the local encoded composite file\nconst composite = await readEncodedComposite(ceramic, 'my-composite.json')\n\nconsole.log('Model IDs to set in configuration:', composite.modelIDs)\n"))),(0,a.kt)(l.Z,{value:"cli",mdxType:"TabItem"},(0,a.kt)("p",null,"First, we need to ensure the model streams are available on the target Ceramic node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:deploy my-composite.json --ceramic-url=http://localhost:7007\n")),(0,a.kt)("p",null,"Then, we need to get the list of models that need to be set for indexing in the Ceramic node configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:models my-composite.json\n")))),(0,a.kt)("h2",{id:"ceramic-node-configuration"},"Ceramic node configuration"),(0,a.kt)("p",null,"The local Ceramic node then needs to be configured to index documents using the models listed in the previous step."),(0,a.kt)("p",null,"This can be done by editing Ceramic's config file, which defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.ceramic/daemon.config.json")," on Linux, macOS and WSL (Windows Subsystem for Linux), adding the necessary model stream IDs to the ",(0,a.kt)("inlineCode",{parentName:"p"},"indexing.models")," array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "indexing": {\n    ...\n    "models": ["..."]\n  }\n}\n')))}m.isMDXComponent=!0}}]);