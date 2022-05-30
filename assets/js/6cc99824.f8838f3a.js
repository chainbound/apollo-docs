"use strict";(self.webpackChunkapollo_docs=self.webpackChunkapollo_docs||[]).push([[892],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<s;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3564:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var a=t(7462),r=t(3366),s=(t(7294),t(3905)),o=["components"],c={},i="Schema examples",l={unversionedId:"schema/schema-examples",id:"schema/schema-examples",title:"Schema examples",description:"Here you can find some example schemas to get you started.",source:"@site/docs/schema/schema-examples.md",sourceDirName:"schema",slug:"/schema/schema-examples",permalink:"/apollo-docs/schema/schema-examples",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced features",permalink:"/apollo-docs/schema/advanced-features"}},u={},p=[{value:"Events",id:"events",level:2},{value:"Uniswap V2 ETH-USDC swap price vs. mid price",id:"uniswap-v2-eth-usdc-swap-price-vs-mid-price",level:3},{value:"Uniswap V3 ETH-USDC fee per swap",id:"uniswap-v3-eth-usdc-fee-per-swap",level:3},{value:"Record every ERC20 transfer",id:"record-every-erc20-transfer",level:3},{value:"Methods",id:"methods",level:2},{value:"Calculate the mid price of a Uniswap V2 pool",id:"calculate-the-mid-price-of-a-uniswap-v2-pool",level:3},{value:"Get your USDC balance over a period of time",id:"get-your-usdc-balance-over-a-period-of-time",level:3}],d={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"schema-examples"},"Schema examples"),(0,s.kt)("p",null,"Here you can find some example schemas to get you started."),(0,s.kt)("h2",{id:"events"},"Events"),(0,s.kt)("h3",{id:"uniswap-v2-eth-usdc-swap-price-vs-mid-price"},"Uniswap V2 ETH-USDC swap price vs. mid price"),(0,s.kt)("p",null,"This example gets the swap price of every Swap event on the ETH-USDC\nSushiswap pool. It also fetches the reserves at the previous block, to\ncalculate the mid price before the swap. Note that events are at the transaction level,\nwhile calling methods is at the block level (the state we get is the state at the end\nof the target block)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'// query defines the name of your query -> name of your output files and SQL tables\nquery usdc_eth_swaps {\n  chain = "arbitrum"\n\n  // specify the contract address\n  contract "0x905dfCD5649217c42684f23958568e533C711Aa3" {\n    // contract needs an ABI\n    abi = "unipair.abi.json"\n\n    // Listen for events\n    event Swap {\n      // The outputs we\'re interested in, same way as with methods.\n      outputs = ["amount1In", "amount0Out", "amount0In", "amount1Out"]\n\n      // We can call methods on the occurence of the Swap event\n      method getReserves {\n        // Call at the previous block\n        block_offset = -1\n        // These are the outputs we\'re interested in. They are available \n        // to transform as variables in the "transform" block below. Outputs should\n        // be provided as a list.\n        outputs = ["_reserve0", "_reserve1"]\n      }\n    }\n\n    // "transform" blocks are at the contract-level,\n    // they allow you to do some preliminary cleaning of the outputs\n    // before moving on.\n    transform {\n      eth_reserve = parse_decimals(_reserve0, 18)\n      usdc_reserve = parse_decimals(_reserve1, 6)\n\n      usdc_sold = parse_decimals(amount1In, 6)\n      eth_sold = parse_decimals(amount0In, 18)\n\n      usdc_bought = parse_decimals(amount1Out, 6)\n      eth_bought = parse_decimals(amount0Out, 18)\n\n      buy = amount0Out != 0\n    }\n  }\n\n  // Besides the normal context, the "save" block for events provides an additional\n  // variable "tx_hash". "save" blocks are at the query-level and have access to variables\n  // defined in the "transform" block\n  save {\n    timestamp = timestamp\n    block = blocknumber\n    contract = contract_address\n    tx_hash = tx_hash\n\n    eth_reserve = eth_reserve\n    usdc_reserve = usdc_reserve\n    mid_price = usdc_reserve / eth_reserve\n\n    // Example: we want to calculate the price of the swap.\n    // We have to make sure we don\'t divide by 0, so we use the ternary operator.\n    swap_price = eth_bought != 0 ? (usdc_sold / eth_bought) : (usdc_bought / eth_sold)\n    direction = buy ? b : s\n    size_in_udsc = eth_bought != 0 ? usdc_sold : usdc_bought\n  }\n}\n')),(0,s.kt)("h3",{id:"uniswap-v3-eth-usdc-fee-per-swap"},"Uniswap V3 ETH-USDC fee per swap"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'query "usdc_eth_fees_3000" {\n  chain = "ethereum"\n\n  contract "0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8" {\n    abi = "uni_v3_pool.abi.json"\n\n    event "Swap" {\n      outputs = ["sender", "recipient", "amount0", "amount1", "liquidity", "tick"]\n    }\n\n    transform {\n      eth_amount = parse_decimals(amount1, 18)\n      usdc_amount = parse_decimals(amount0, 6)\n    }\n  }\n\n  save {\n    timestamp = timestamp\n    block = blocknumber\n    tx = tx_hash\n\n    eth_amount = eth_amount\n    usdc_amount = usdc_amount\n    liquidity = liquidity\n    tick = tick\n\n    sender = sender\n    recipient = recipient\n\n    // Calculate the swap fee in USDC (0.3% fee tier)\n    lp_fee = abs(0.003 * usdc_amount)\n\n    type = eth_amount < 0 ? "ETH_SELL" : "ETH_BUY"\n  }\n}\n')),(0,s.kt)("h3",{id:"record-every-erc20-transfer"},"Record every ERC20 transfer"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'query arbitrum_transfers {\n  chain = "arbitrum"\n\n  event Transfer {\n    abi = "erc20.abi.json"\n\n    outputs = [\n      "from",\n      "to",\n      "value"\n    ]\n\n    // Because it could be any ERC20 transfer, we don\'t\n    // know the decimals in advance and need to call them.\n    // The code would somehow need to know that it should call this on\n    // the contract that emitted the event.\n    method decimals {\n      outputs = ["decimals"]\n    }\n\n\n    transform {\n      amount_parsed = parse_decimals(value, decimals)\n    }\n  }\n\n  save {\n    sender = from\n    receiver = to\n    amount = amount_parsed\n  }\n}\n')),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"calculate-the-mid-price-of-a-uniswap-v2-pool"},"Calculate the mid price of a Uniswap V2 pool"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'query usdc_eth_mid_price {\n  chain = "arbitrum"\n\n  contract "0x905dfCD5649217c42684f23958568e533C711Aa3" {\n    abi = "unipair.abi.json"\n\n    // Call methods\n    method getReserves {\n      // These are the outputs we\'re interested in. They are available \n      // to transform as variables in the "save" block below. Outputs should\n      // be provided as a list.\n      outputs = ["_reserve0", "_reserve1"]\n    }\n\n\n    transform {\n      eth_reserve = parse_decimals(_reserve0, 18)\n      usdc_reserve = parse_decimals(_reserve1, 6)\n    }\n  }\n\n  save {\n    block = blocknumber\n    timestamp = timestamp\n    mid_price = usdc_reserve / eth_reserve\n  }\n}\n')),(0,s.kt)("h3",{id:"get-your-usdc-balance-over-a-period-of-time"},"Get your USDC balance over a period of time"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'query usdc_balance {\n  chain = "ethereum"\n  \n  contract "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8" {\n    abi = "erc20.abi.json"\n\n    method balanceOf {\n      // Inputs should be defined as a map.\n      inputs = {\n        address = "0xD3ADBEEF"\n      }\n\n      outputs = ["balance"]\n    }\n  }\n\n  // Transform block is optional, we can also proceed straight to the save block\n  save {\n    block = blocknumber\n    time = timestamp\n    account = address\n    account_balance = parse_decimals(balance, 18)\n  }\n}\n')))}m.isMDXComponent=!0}}]);