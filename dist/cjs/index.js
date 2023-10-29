"use strict";var n=require("react"),e=require("styled-components"),r=function(){return r=Object.assign||function(n){for(var e,r=1,o=arguments.length;r<o;r++)for(var t in e=arguments[r])Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n},r.apply(this,arguments)};function o(n,e){var r={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(r[o]=n[o]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(o=Object.getOwnPropertySymbols(n);t<o.length;t++)e.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(n,o[t])&&(r[o[t]]=n[o[t]])}return r}function t(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var i,p,a,d,l,c=e.button(i||(i=t(["\n  border: 0;\n  line-height: 1;\n  font-size: 15px;\n  cursor: pointer;\n  font-weight: 700;\n  font-weight: bold;\n  border-radius: 3px;\n  display: inline-block;\n  padding: ",";\n  color: ",";\n  background-color: ",";\n  opacity: ",";\n  &:hover {\n    background-color: ",";\n  }\n  &:active {\n    border: solid 2px #1b116e;\n    padding: ",";\n  }\n"],["\n  border: 0;\n  line-height: 1;\n  font-size: 15px;\n  cursor: pointer;\n  font-weight: 700;\n  font-weight: bold;\n  border-radius: 3px;\n  display: inline-block;\n  padding: ",";\n  color: ",";\n  background-color: ",";\n  opacity: ",";\n  &:hover {\n    background-color: ",";\n  }\n  &:active {\n    border: solid 2px #1b116e;\n    padding: ",";\n  }\n"])),(function(n){return"small"===n.size?"7px 25px 8px":"medium"===n.size?"9px 30px 11px":"14px 30px 16px"}),(function(n){return n.primary?"#1b116e":"#ffffff"}),(function(n){return n.primary?"#6bedb5":"#1b116e"}),(function(n){return n.disabled?.5:1}),(function(n){return n.primary?"#55bd90":"#6bedb5"}),(function(n){return"small"===n.size?"5px 23px 6px":"medium"===n.size?"7px 28px 9px":"12px 28px 14px"})),s=e.input(p||(p=t(["\n  height: 40px;\n  width: 300px;\n  border-radius: 3px;\n  border: solid 2px\n    ",";\n  background-color: #fff;\n  &:focus {\n    border: solid 2px #1b116e;\n  }\n"],["\n  height: 40px;\n  width: 300px;\n  border-radius: 3px;\n  border: solid 2px\n    ",";\n  background-color: #fff;\n  &:focus {\n    border: solid 2px #1b116e;\n  }\n"])),(function(n){return n.disabled?"#e4e3ea":n.error?"#a9150b":n.success?"#067d68":"#353637"})),b=e.div(a||(a=t(["\n  font-size: 14px;\n  color: ",";\n  padding-bottom: 6px;\n"],["\n  font-size: 14px;\n  color: ",";\n  padding-bottom: 6px;\n"])),(function(n){return n.disabled?"#e4e3ea":"#080808"})),u=e.div(d||(d=t(["\n  font-size: 14px;\n  color: #a9150b8;\n  padding-top: 4px;\n"],["\n  font-size: 14px;\n  color: #a9150b8;\n  padding-top: 4px;\n"]))),x=e.p(l||(l=t(["\n  margin: 0px;\n  color: ",";\n"],["\n  margin: 0px;\n  color: ",";\n"])),(function(n){return n.disabled?"#e4e3ea":n.error?"#a9150b":"#080808"}));exports.Button=function(e){var t=e.size,i=e.primary,p=e.disabled,a=e.text,d=e.onClick,l=o(e,["size","primary","disabled","text","onClick"]);return n.createElement(c,r({type:"button",onClick:d,primary:i,disabled:p,size:t},l),a)},exports.Input=function(e){var t=e.id,i=e.disabled,p=e.label,a=e.message,d=e.error,l=e.success,c=e.onChange,f=e.placeholder,g=o(e,["id","disabled","label","message","error","success","onChange","placeholder"]);return n.createElement(n.Fragment,null,n.createElement(b,null,n.createElement(x,{disabled:i,error:d},p)),n.createElement(s,r({id:t,type:"text",onChange:c,disabled:i,error:d,success:l,placeholder:f},g)),n.createElement(u,null,n.createElement(x,{error:d},a)))};
//# sourceMappingURL=index.js.map
