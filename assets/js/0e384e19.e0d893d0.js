"use strict";(self.webpackChunkapollo_docs=self.webpackChunkapollo_docs||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={"sidebar-position":0,slug:"/"},s="Apollo",u={unversionedId:"intro",id:"intro",title:"Apollo",description:"Program for easily querying and collecting EVM chaindata based on a schema.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",frontMatter:{"sidebar-position":0,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Schema",permalink:"/category/schema"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Usage",id:"usage",level:2},{value:"Setting up",id:"setting-up",level:3},{value:"Running",id:"running",level:3},{value:"Schema",id:"schema",level:2},{value:"Save Context",id:"save-context",level:3},{value:"Methods Example",id:"methods-example",level:3},{value:"Events Example",id:"events-example",level:3},{value:"Output",id:"output",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"apollo"},"Apollo"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Program for easily querying and collecting EVM chaindata based on a schema.\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/84743718/169578316-65abf2bd-9dab-49c9-9a2b-fb762b571977.png",alt:"apollo-diagram drawio"}))),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"apollo")," is a program for querying and collecting EVM chaindata based on a ",(0,l.kt)("a",{parentName:"p",href:"#schema"},"schema"),". Chaindata in this case is\none of these things:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Contract methods"),(0,l.kt)("li",{parentName:"ul"},"Contract events")),(0,l.kt)("p",null,"It can run in 2 modes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Historical mode"),": here we define a block range and interval for method calls, or just a block range for events. ",(0,l.kt)("inlineCode",{parentName:"li"},"apollo"),"\nwill run through all the blocks and collect the data we've defined in the schema. This can be useful for backtesting etc."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Realtime mode"),": we define a time interval at which we want to collect data. This is useful for building a backend database\nfor stuff like dashboards for live strategies.")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"setting-up"},"Setting up"),(0,l.kt)("p",null,"First, generate the config directory and files:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"apollo init\n")),(0,l.kt)("p",null,"This will generate the configuration files (",(0,l.kt)("inlineCode",{parentName:"p"},"config.yml")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"schema.hcl"),") and put it into your configuration\ndirectory, which will either be ",(0,l.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME/apollo")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.config/apollo"),". This is the directory\nin which you have to configure ",(0,l.kt)("inlineCode",{parentName:"p"},"apollo"),", and it's also the directory where ",(0,l.kt)("inlineCode",{parentName:"p"},"apollo")," will try to find the specified\ncontract ABIs."),(0,l.kt)("h3",{id:"running"},"Running"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Realtime mode"),"\nIn realtime mode, we only have to define the interval if we're doing a method calling schema (in seconds) and the chain,\nand an optional output option (either ",(0,l.kt)("inlineCode",{parentName:"li"},"--csv"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--db")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"--stdout"),"). See the ",(0,l.kt)("a",{parentName:"li",href:"##Output"},"Output")," for more info on that.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Examples")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run a method calling schema every 5 seconds in realtime on Arbitrum, and save the results in a csv")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"apollo --realtime --interval 5 --csv\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run an event collecting schema in realtime on Ethereum, save the results in a database")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"apollo --realtime --db\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Historical mode"),"\nIn historical mode, we define the start and end blocks, the chain, the interval (when we're doing method calls),\nand an optional output option.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Examples")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run a method calling schema every 100 blocks with a start and end block on Arbitrum, and save the results in a DB and a csv")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"apollo --start-block 1000000 --end-block 1200000 --interval 100 --csv --db\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run an event collecting schema over a range of blocks on Polygon, and output the results to ",(0,l.kt)("inlineCode",{parentName:"li"},"stdout"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"apollo --start-block 1000000 --end-block 1500000 --stdout\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"All Options")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GLOBAL OPTIONS:\n   --realtime, -R                 Run apollo in realtime (default: false)\n   --db                           Save results in database (default: false)\n   --csv                          Save results in csv file (default: false)\n   --stdout                       Print to stdout (default: false)\n   --interval BLOCKS, -i BLOCKS   Interval in BLOCKS or SECONDS (realtime: seconds, historic: blocks) (default: 0)\n   --start-block value, -s value  Starting block number for historical analysis (default: 0)\n   --end-block value, -e value    End block number for historical analysis (default: 0)\n   --chain value, -c value        The chain name\n   --rate-limit LEVEL             Rate limit LEVEL, from 1 - 5 (default: 0)\n   --help, -h                     show help (default: false)\n")),(0,l.kt)("h2",{id:"schema"},"Schema"),(0,l.kt)("p",null,"The schema is in the form of a DSL implemented with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/hcl"},"HCL")," to define the data\nwe're interested in. This means that basic arithmetic operations and ternary operators\nfor control flow are supported by default. The top-level elements are ",(0,l.kt)("inlineCode",{parentName:"p"},"chain")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"contract"),".\nIn the ",(0,l.kt)("inlineCode",{parentName:"p"},"contract")," block we provide the ABI file, along with which ",(0,l.kt)("inlineCode",{parentName:"p"},"methods")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"events")," we want to get the data for."),(0,l.kt)("p",null,"In the case of a ",(0,l.kt)("inlineCode",{parentName:"p"},"method"),", we first define ",(0,l.kt)("inlineCode",{parentName:"p"},"inputs")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"outputs"),". For an ",(0,l.kt)("inlineCode",{parentName:"p"},"event"),", it's only ",(0,l.kt)("inlineCode",{parentName:"p"},"outputs"),".\nThe names of the methods, events, inputs and outputs should correspond exactly to what's in the provided\nABI file."),(0,l.kt)("p",null,"The last block in ",(0,l.kt)("inlineCode",{parentName:"p"},"contract")," is the ",(0,l.kt)("inlineCode",{parentName:"p"},"save")," block. In this block we can do some basic transformations\nbefore saving our output, and it provides access to variables and functions that we might need. "),(0,l.kt)("h3",{id:"save-context"},"Save Context"),(0,l.kt)("p",null,"Any ",(0,l.kt)("inlineCode",{parentName:"p"},"input")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"output")," is provided as a variable by default.\nOther variables available are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestamp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"blocknumber")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contract_address"))),(0,l.kt)("p",null,"And for ",(0,l.kt)("inlineCode",{parentName:"p"},"events"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tx_hash"))),(0,l.kt)("p",null,"The available functions are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lower(str)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"upper(str)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"parse_decimals(raw, decimals)"))),(0,l.kt)("p",null,"Below are some annotated examples to help you get started. There are some more examples in the ",(0,l.kt)("a",{parentName:"p",href:"/schema/schema-examples"},"docs"),"."),(0,l.kt)("h3",{id:"methods-example"},"Methods Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hcl"},'// Define the chain to run on\nchain = "arbitrum"\n\ncontract usdc_eth_reserves "0x905dfCD5649217c42684f23958568e533C711Aa3" {\n  // Will search in the Apollo config directory\n  abi = "unipair.abi.json"\n\n  // Call methods\n  method getReserves {\n    // These are the outputs we\'re interested in. They are available \n    // to transform as variables in the "save" block below. Outputs should\n    // be provided as a list.\n    outputs = ["_reserve0", "_reserve1"]\n  }\n\n  // The "save" block will give us access to more context, including variables\n  // like "timestamp", "blocknumber", "contract_address", and any inputs or outputs\n  // defined earlier.\n  save {\n    timestamp = timestamp\n    block = blocknumber\n    contract = contract_address\n    eth_reserve = parse_decimals(_reserve0, 18)\n    usdc_reserve = parse_decimals(_reserve1, 6)\n\n    // Example: we want to calculate the mid price from the 2 reserves.\n    // Cannot reuse variables that are defined in the same "save" block.\n    // We have to reuse variables that were defined in advance, i.e.\n    // in "inputs" or "outputs"\n    mid_price = parse_decimals(_reserve1, 6) / parse_decimals(_reserve0, 18)\n\n  }\n}\n')),(0,l.kt)("h3",{id:"events-example"},"Events Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hcl"},'// Define the chain to run on\nchain = "arbitrum"\n\ncontract usdc_to_eth_swaps "0x905dfCD5649217c42684f23958568e533C711Aa3" {\n  // Will search in the Apollo config directory\n  abi = "unipair.abi.json"\n\n  // Listen for events\n  event Swap {\n    // The outputs we\'re interested in, same way as with methods.\n    outputs = ["amount1In", "amount0Out", "amount0In", "amount1Out"]\n  }\n\n\n  // Besides the normal context, the "save" block for events provides an additional\n  // variable "tx_hash". This is the transaction hash of the originating transaction.\n  save {\n    timestamp = timestamp\n    block = blocknumber\n    contract = contract_address\n    tx_hash = tx_hash\n\n    // Example: we want to calculate the price of the swap.\n    price = amount0Out != 0 ? (parse_decimals(amount1In, 6) / parse_decimals(amount0Out, 18)) : (parse_decimals(amount1Out, 6) / parse_decimals(amount0In, 18))\n    dir = amount0Out != 0 ? upper("buy") : upper("sell")\n    size = amount1In != 0 ? parse_decimals(amount1In, 6) : parse_decimals(amount1Out, 6)\n  }\n}\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("p",null,"There are 3 output options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stdout"),": this will just print the results to your terminal."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"csv"),": this will save your output into a csv file. The name of your file corresponds to the ",(0,l.kt)("inlineCode",{parentName:"li"},"name")," field of your contract schema definition. The other columns are going to be the inputs and outputs fields, also with the names corresponding to the schema."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"db"),": this will save your output into a Postgres SQL table. The settings are defined in ",(0,l.kt)("inlineCode",{parentName:"li"},"config.yml")," in your ",(0,l.kt)("inlineCode",{parentName:"li"},"apollo"),"\nconfig directory.")))}m.isMDXComponent=!0}}]);