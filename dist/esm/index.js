import e,{Fragment as r}from"react";import o from"styled-components";var d=o.button`
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
`,i=({size:r,primary:o,disabled:i,text:p,onClick:a,...l})=>e.createElement(d,{type:"button",onClick:a,primary:o,disabled:i,size:r,...l},p),p=o.input`
	height: 40px;
	width: 300px;
	border-radius: 3px;
	border: solid 2px
		${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":e.success?"#067d68":"#353637"};
	background-color: #fff;
	&:focus {
		border: solid 2px #1b116e;
	}
`,a=o.div`
	font-size: 14px;
	color: ${e=>e.disabled?"#e4e3ea":"#080808"};
	padding-bottom: 6px;
`,l=o.div`
	font-size: 14px;
	color: #a9150b8;
	padding-top: 4px;
`,t=o.p`
	margin: 0px;
	color: ${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":"#080808"};
`,s=({id:o,disabled:d,label:i,message:s,error:n,success:b,onChange:c,placeholder:x,...m})=>e.createElement(r,null,e.createElement(a,null,e.createElement(t,{disabled:d,error:n},i)),e.createElement(p,{id:o,type:"text",onChange:c,disabled:d,error:n,success:b,placeholder:x,...m}),e.createElement(l,null,e.createElement(t,{error:n},s)));export{i as Button,s as Input};//# sourceMappingURL=index.js.map