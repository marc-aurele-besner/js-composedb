"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5976],{4852:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,y=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2004:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(9231),r=n(9841);const o={tabItem:"tabItem_Z7jx"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},6081:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(5675),r=n(9231),o=n(9841),l=n(1556),i=n(9409),u=n(6449),s=n(828),p=n(621);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=y({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=u??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),h(e)}),[s,h,o]),tabValues:o}}var g=n(8213);const v={tabList:"tabList_YkLP",tabItem:"tabItem_dswv"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=s[n].value;a!==i&&(c(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function f(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(f,(0,a.Z)({key:String(t)},e))}},6216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(5675),r=(n(9231),n(4852)),o=n(6081),l=n(2004);const i={},u="Set up your environment",s={unversionedId:"set-up-your-environment",id:"version-0.4.x/set-up-your-environment",title:"Set up your environment",description:"The first step to build with ComposeDB is setting up your development environment. This guide will show you how to install and configure relevant packages and tools.",source:"@site/versioned_docs/version-0.4.x/set-up-your-environment.mdx",sourceDirName:".",slug:"/set-up-your-environment",permalink:"/docs/0.4.x/set-up-your-environment",draft:!1,tags:[],version:"0.4.x",frontMatter:{},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/0.4.x/getting-started"},next:{title:"Create your composite",permalink:"/docs/0.4.x/create-your-composite"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"Create your project directory",id:"create-your-project-directory",level:3},{value:"Node.js",id:"nodejs",level:3},{value:"Ceramic",id:"ceramic",level:3},{value:"ComposeDB",id:"composedb",level:3},{value:"Setup",id:"setup",level:2},{value:"Run a Ceramic node",id:"run-a-ceramic-node",level:3},{value:"Developer Account",id:"developer-account",level:2},{value:"Generate your private key",id:"generate-your-private-key",level:3},{value:"Generate your account",id:"generate-your-account",level:3},{value:"Using your account",id:"using-your-account",level:3},{value:"Confirmation",id:"confirmation",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:c},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"set-up-your-environment"},"Set up your environment"),(0,r.kt)("p",null,"The first step to build with ComposeDB is setting up your development environment. This guide will show you how to install and configure relevant packages and tools."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"create-your-project-directory"},"Create your project directory"),(0,r.kt)("p",null,"Start with creating the project directory. Here you\u2019ll store all your app\u2019s local files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my-project #creates a new directory\ncd my-project #targets the created directory\n")),(0,r.kt)("h3",{id:"nodejs"},"Node.js"),(0,r.kt)("p",null,"If you don\u2019t already have them installed, you will need to install Node.js v16 and a package manager. We primarily use ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),", but ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," are supported as well."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"NodeJS v16")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pnpm.io/installation"},"pnpm v7"))),(0,r.kt)("p",null,"Use this command to make sure you have the correct versions installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\npnpm -v\n")),(0,r.kt)("h3",{id:"ceramic"},"Ceramic"),(0,r.kt)("p",null,"ComposeDB runs on Ceramic, so you will need to run a Ceramic node. To get started, we recommend running a local Ceramic node. If you're interested in running the production node, you can follow the ",(0,r.kt)("a",{parentName:"p",href:"https://blog.ceramic.network/configuring-a-ceramic-node-using-aws/"},"tutorial here"),"."),(0,r.kt)("p",null,"The Ceramic CLI provides a set of commands that make it easier to run and manage Ceramic nodes. We will start by installing the Ceramic CLI:"),(0,r.kt)(o.Z,{defaultValue:"pnpm",groupId:"npm-or-pnpm-or-yarnr",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --location=global @ceramicnetwork/cli\n"))),(0,r.kt)(l.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm install -g @ceramicnetwork/cli\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Global packages are only supported for yarn 2.x and older. For yarn 3.x and newer, use ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn dlx")," to run composedb cli commands")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add @ceramicnetwork/cli\n")))),(0,r.kt)("h3",{id:"composedb"},"ComposeDB"),(0,r.kt)("p",null,"Next install the ComposeDB CLI, which enables you to interact with ComposeDB data from your terminal. Install ComposeDB CLI using the following command:"),(0,r.kt)(o.Z,{defaultValue:"pnpm",groupId:"npm-or-pnpm-or-yarnr",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --location=global @composedb/cli@^0.4.0\n"))),(0,r.kt)(l.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add -g @composedb/cli@^0.4.0\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Global packages are only supported for yarn 2.x and older. For yarn 3.x and newer, use ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn dlx")," to run composedb cli commands")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add @composedb/cli@^0.4.0\n")))),(0,r.kt)("p",null,"ComposeDB provides two additional libraries that support development:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.4.x/api/modules/devtools"},"@composedb/devtools")," containing utilities related to managing composites"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.4.x/api/modules/devtools_node"},"@composedb/devtools-node")," which contains utilities for interacting with the local file system and starting a local HTTP server.")),(0,r.kt)("p",null,"To install the development packages, run:"),(0,r.kt)(o.Z,{defaultValue:"pnpm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D @composedb/devtools@^0.4.0 @composedb/devtools-node@^0.4.0\n"))),(0,r.kt)(l.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add -D @composedb/devtools@^0.4.0 @composedb/devtools-node@^0.4.0\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D @composedb/devtools@^0.4.0 @composedb/devtools-node@^0.4.0\n")))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"run-a-ceramic-node"},"Run a Ceramic node"),(0,r.kt)("p",null,"You can check that everything was installed correctly by spinning up a Ceramic node. Running the command below will start the Ceramic node in local mode and connect to Clay testnet.\nIndexing is a key component of ComposeDB, which syncs data across nodes. Enable indexing by toggling:"),(0,r.kt)(o.Z,{defaultValue:"pnpm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CERAMIC_ENABLE_EXPERIMENTAL_COMPOSE_DB='true' npx @ceramicnetwork/cli daemon\n"))),(0,r.kt)(l.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CERAMIC_ENABLE_EXPERIMENTAL_COMPOSE_DB='true' pnpm dlx @ceramicnetwork/cli daemon\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CERAMIC_ENABLE_EXPERIMENTAL_COMPOSE_DB='true' yarn dlx @ceramicnetwork/cli daemon\n")))),(0,r.kt)("p",null,"If you see the following output in your terminal, that means you have successfully started a local node and connected to Clay testnet \ud83d\ude80"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"IMPORTANT: Ceramic API running on 0.0.0.0:7007'\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"After you start a node, a node configuration file is created. Later in this guide, you\u2019ll be editing this file. You can find it at the following path: ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ceramic/daemon.config.json"))),(0,r.kt)("h2",{id:"developer-account"},"Developer Account"),(0,r.kt)("h3",{id:"generate-your-private-key"},"Generate your private key"),(0,r.kt)("p",null,"You will need a private key for authorizing ComposeDB CLI commands in the later stages of development. You can generate it using the command below. Save it for later use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composedb did:generate-private-key\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Important:")," Store your private key securely - the key allows changes to be made to you app. In addition, you will need it throughout the app development process.")),(0,r.kt)("h3",{id:"generate-your-account"},"Generate your account"),(0,r.kt)("p",null,"Indexing is one of the key features of ComposeDB. In order to notify the Ceramic node which models have to be indexed, the ComposeDB tools have to interact with the restricted Admin API. Calling the API requires an authenticated Decentralized Identifier (DID) to be provided in the node configuration file. Create a DID by running the following command, using the private key generated previously:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composedb did:from-private-key your-private-key\n")),(0,r.kt)("p",null,"\u26a0\ufe0f Copy this authenticated DID key and store it in a secure place, just like with your private key above. This DID key will have to be provided in your Ceramic node\u2019s configuration file which will ensure that only authorized users can make changes to your application, e.g. deploy models on your Ceramic node."),(0,r.kt)("h3",{id:"using-your-account"},"Using your account"),(0,r.kt)("p",null,"Provide the authenticated DID by opening the node configuration file which defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ceramic/daemon.config.json")," and specifying it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"admin-dids")," section of the file as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "http-api": {\n    ...\n    "admin-dids": ["did:key:..."]\n  },\n  "indexing": {\n    ...\n    "allow-queries-before-historical-sync": true\n  }\n}\n')),(0,r.kt)("p",null,"Save this file. By this point you should have your development environment and all configurations in place to get started working on your application."),(0,r.kt)("h2",{id:"confirmation"},"Confirmation"),(0,r.kt)("p",null,"As a final test, spin up the Ceramic local node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ceramic daemon --network=testnet-clay\n")),(0,r.kt)("p",null,"Once again, you should see your local Ceramic node up and running as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"IMPORTANT: Ceramic API running on 0.0.0.0:7007'\n")),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"After setting up your environment, the next step is to ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.4.x/create-your-composite"},(0,r.kt)("strong",{parentName:"a"},"Create your composite \u2192"))))}y.isMDXComponent=!0}}]);