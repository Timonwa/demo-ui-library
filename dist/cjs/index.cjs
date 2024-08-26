"use strict";var e,r=Object.create,t=Object.defineProperty,o=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,a=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,i=(e,r,a,i)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let p of l(r))d.call(e,p)||p===a||t(e,p,{get:()=>r[p],enumerable:!(i=o(r,p))||i.enumerable});return e},p=(e,o,l)=>(l=null!=e?r(a(e)):{},i(!o&&e&&e.__esModule?l:t(l,"default",{value:e,enumerable:!0}),e)),n={};((e,r)=>{for(var o in r)t(e,o,{get:r[o],enumerable:!0})})(n,{Button:()=>b,Input:()=>v}),module.exports=(e=n,i(t({},"__esModule",{value:!0}),e));var s=p(require("react"),1),u=p(require("styled-components"),1).default.button`
	border: 0;
	line-height: 1;
	font-size: 15px;
	cursor: pointer;
	font-weight: 700;
	font-weight: bold;
	border-radius: 3px;
	display: inline-block;
	padding: ${e=>"small"===e.size?"7px 25px 8px":"medium"===e.size?"9px 30px 11px":"14px 30px 16px"};
	color: ${e=>e.primary?"#1b116e":"#ffffff"};
	background-color: ${e=>e.primary?"#6bedb5":"#1b116e"};
	opacity: ${e=>e.disabled?.5:1};
	&:hover {
		background-color: ${e=>e.primary?"#55bd90":"#6bedb5"};
	}
	&:active {
		border: solid 2px #1b116e;
		padding: ${e=>"small"===e.size?"5px 23px 6px":"medium"===e.size?"7px 28px 9px":"12px 28px 14px"};
	}
`,c=({size:e,primary:r,disabled:t,text:o,onClick:l,...a})=>s.default.createElement(u,{type:"button",onClick:l,primary:r,disabled:t,size:e,...a},o),b=c,f=p(require("react"),1),x=p(require("styled-components"),1),m=x.default.input`
	height: 40px;
	width: 300px;
	border-radius: 3px;
	border: solid 2px
		${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":e.success?"#067d68":"#353637"};
	background-color: #fff;
	&:focus {
		border: solid 2px #1b116e;
	}
`,g=x.default.div`
	font-size: 14px;
	color: ${e=>e.disabled?"#e4e3ea":"#080808"};
	padding-bottom: 6px;
`,y=x.default.div`
	font-size: 14px;
	color: #a9150b8;
	padding-top: 4px;
`,h=x.default.p`
	margin: 0px;
	color: ${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":"#080808"};
`,O=({id:e,disabled:r,label:t,message:o,error:l,success:a,onChange:d,placeholder:i,...p})=>f.default.createElement(f.Fragment,null,f.default.createElement(g,null,f.default.createElement(h,{disabled:r,error:l},t)),f.default.createElement(m,{id:e,type:"text",onChange:d,disabled:r,error:l,success:a,placeholder:i,...p}),f.default.createElement(y,null,f.default.createElement(h,{error:l},o))),v=O;//# sourceMappingURL=index.cjs.map