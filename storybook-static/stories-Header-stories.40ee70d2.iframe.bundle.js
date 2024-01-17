"use strict";(self.webpackChunkstorybook_aera=self.webpackChunkstorybook_aera||[]).push([[758],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(m,s,r)=>{r.r(s),r.d(s,{default:()=>d});function d(){return d=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(a[o]=n[o])}return a},d.apply(this,arguments)}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(m,s,r)=>{r.r(s),r.d(s,{default:()=>a});function d(e,n){if(e==null)return{};var o={},t=Object.keys(e),l,c;for(c=0;c<t.length;c++)l=t[c],!(n.indexOf(l)>=0)&&(o[l]=e[l]);return o}function a(e,n){if(e==null)return{};var o=d(e,n),t,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)t=c[l],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}},"./src/stories/Header.stories.ts":(m,s,r)=>{r.r(s),r.d(s,{LoggedIn:()=>n,LoggedOut:()=>o,__namedExportsOrder:()=>t,default:()=>e});var d=r("./src/stories/Header.tsx"),a={title:"Example/Header",component:d.Header,tags:["autodocs"],parameters:{layout:"fullscreen"}};const e=a;var n={args:{user:{name:"Jane Doe"}}},o={};const t=["LoggedIn","LoggedOut"]},"./src/stories/Header.tsx":(m,s,r)=>{r.r(s),r.d(s,{Header:()=>b});var d=r("./node_modules/next/dist/compiled/react/index.js"),a=r("./src/stories/button/Button.tsx"),e=r("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=r.n(e),o=r("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),t=r.n(o),l=r("./node_modules/style-loader/dist/runtime/insertBySelector.js"),c=r.n(l),y=r("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),p=r.n(y),u=r("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),g=r.n(u),x=r("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),f=r.n(x),i=r("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/header.css"),h={};h.styleTagTransform=f(),h.setAttributes=p(),h.insert=c().bind(null,"head"),h.domAPI=t(),h.insertStyleElement=g();var C=n()(i.default,h);const S=i.default&&i.default.locals?i.default.locals:void 0;var v=d.createElement,b=function(P){var A=P.user,F=P.onLogin,E=P.onLogout,D=P.onCreateAccount;return v("header",null,v("div",{className:"storybook-header"},v("div",null,v("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},v("g",{fill:"none",fillRule:"evenodd"},v("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),v("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),v("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"}))),v("h1",null,"Acme")),v("div",null,A?v(d.Fragment,null,v("span",{className:"welcome"},"Welcome, ",v("b",null,A.name),"!"),v(a.Button,{size:"small",onClick:E,label:"Log out"})):v(d.Fragment,null,v(a.Button,{size:"small",onClick:F,label:"Log in"}),v(a.Button,{primary:!0,size:"small",onClick:D,label:"Sign up"})))))};b.displayName="Header"},"./src/stories/button/Button.tsx":(m,s,r)=>{r.r(s),r.d(s,{Button:()=>g});var d=r("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),a=r("./node_modules/@babel/runtime/helpers/esm/extends.js"),e=r("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=r("./node_modules/next/dist/compiled/react/index.js"),o=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),t={aeraPrimaryGreen:"#00AF41",aeraPrimaryDarkGreen:"#007B3C",aeraPrimaryGrey:"#808285",aeraPrimaryLightGrey:"#F1F0F3",aeraPrimaryLightestGrey:"#FAFAFA",aeraSecondaryLightGreen:"#D6FBDB",aeraSecondaryDarkBlue:"#010023",aeraSecondaryLightBlue:"#94E0FF",aeraSecondaryLightestBlue:"#EFFAFC",aeraSecondaryYellow:"#FFD400",aeraBlack:"#1C1C1C",aeraDark:"#292e30",aeraWhite:"#FFFFFF",aeraInputBorder:"#dfdde2",primaryColor:"#00A33D",secondaryColor:"#04A13D",darkAera:"#027b3b",black:"#000000",white:"#FFFFFF",grey:"#CACACA",placeHolderGrey:"#8C8C8C",radioButtonPlaceholder:"#898989",errorText:"#CC0011",errorTextDark:"#BB1E10",inactive:"#D80023",heartbeat:"#E83D3D",light:"#F1F0F3",warning:"#FFD202",jumbotron:"#F8F8F9",transparent:"transparent",disabled:"#b2b2b2",checkboxBorder:"#c8ced3",divBorder:"#979797",blueLink:"#0052cc"},l={backGround:{default:{primary:"".concat(t.aeraPrimaryDarkGreen),secondary:"".concat(t.aeraWhite),text:"".concat(t.transparent),danger:"".concat(t.errorText),warning:"".concat(t.aeraSecondaryYellow)},hover:{primary:"".concat(t.aeraPrimaryGreen),secondary:"".concat(t.aeraSecondaryLightGreen),text:"".concat(t.transparent),danger:"".concat(t.errorTextDark)},active:{primary:"".concat(t.aeraPrimaryGreen),secondary:"".concat(t.aeraSecondaryLightGreen),text:"".concat(t.aeraPrimaryLightGrey),danger:"".concat(t.errorTextDark)},disabled:{primary:"rgba(0, 123, 60, 0.5)",secondary:"".concat(t.aeraWhite),text:"".concat(t.transparent),danger:"rgba(204, 0, 17, 0.5)"}},border:{default:{primary:"none",secondary:"1px solid ".concat(t.aeraPrimaryGreen),text:"none",danger:"none"},hover:{primary:"none",secondary:"1px solid ".concat(t.aeraPrimaryGreen),text:"none",danger:"none"},active:{primary:"none",secondary:" 1px solid".concat(t.aeraPrimaryGreen),text:"none",danger:"none"},disabled:{primary:"none",secondary:"1px solid ".concat(t.aeraPrimaryGrey),text:"none",danger:"none"}},text:{default:{primary:"".concat(t.aeraWhite),secondary:"".concat(t.aeraPrimaryDarkGreen),text:"".concat(t.aeraBlack),danger:"".concat(t.aeraWhite)},active:{primary:"".concat(t.aeraWhite),secondary:"".concat(t.aeraPrimaryGrey),text:"".concat(t.aeraBlack),danger:"rgb(0 0 0 / 0.87)"},disabled:{primary:"".concat(t.aeraWhite),secondary:"".concat(t.aeraPrimaryGrey),text:"".concat(t.aeraPrimaryGrey),danger:"".concat(t.aeraWhite)}}},c={backGround:{default:{primary:"".concat(t.aeraPrimaryDarkGreen),secondary:"".concat(t.aeraPrimaryLightGrey),text:"".concat(t.transparent),danger:"".concat(t.errorText),warning:"".concat(t.aeraSecondaryYellow)}},border:{default:{primary:"none",secondary:"none",text:"none",danger:"none",warning:"none"}},text:{default:{primary:"".concat(t.aeraWhite),secondary:"".concat(t.aeraBlack),text:"".concat(t.aeraBlack),danger:"".concat(t.aeraWhite)}}},y,p=["variant","backgroundColor","size","label","disabled","children"],u=n.createElement,g=function(i){var h=i.variant,C=i.backgroundColor,S=i.size,v=S===void 0?"medium":S,b=i.label,B=i.disabled,P=i.children,A=(0,e.default)(i,p);return u(x,(0,a.default)({type:"button",label:b,disabled:B,variant:h},A),b)};g.displayName="Button";var x=o.default.button(y||(y=(0,d.default)([`
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    height: 40px;
    gap: 8px;
    font-weight: 700;
    font-size: 18px;
    padding-right: 24px;
    padding-left: 24px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 24px;
    line-height: 21.78px;
    border: `,`;
    color: `,`;
    background-color: `,`;
    :focus {
        background-color: `,`;
        outline: 4px solid `,`;
        text-decoration: `,`;
        text-underline-offset: 3px;
    }
    :hover {
        background-color: `,`;
        text-decoration: `,`;
        text-underline-offset: 3px;
    }
    :active {
        background-color: `,`;
        text-decoration: `,`;
        text-underline-offset: 3px;
    }
    :disabled {
        background-color: `,`;
        color: `,`;
    }
    @media (min-width: 640px) {
        min-width: fit-content;
        max-width: 100%;
    }
    @media (max-width: 640px) {
        flex: auto;
    }
`])),function(f){var i,h=f.variant;return(i=l.border.default[h])!==null&&i!==void 0?i:"none"},function(f){var i=f.variant;return l.text.default[i]},function(f){var i=f.variant;return l.backGround.default[i]},function(f){var i=f.variant;return l.backGround.default[i]},t.aeraSecondaryLightBlue,function(f){var i=f.variant;return i==="text"&&"underline"},function(f){var i=f.variant;return l.backGround.hover[i]},function(f){var i=f.variant;return i==="text"&&"underline"},function(f){var i=f.variant;return l.backGround.active[i]},function(f){var i=f.variant;return i==="text"&&"underline"},function(f){var i=f.variant;return l.backGround.disabled[i]},function(f){var i=f.variant;return l.text.disabled[i]})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/header.css":(m,s,r)=>{r.r(s),r.d(s,{default:()=>t});var d=r("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=r.n(d),e=r("./node_modules/css-loader/dist/runtime/api.js"),n=r.n(e),o=n()(a());o.push([m.id,`.storybook-header {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.storybook-header svg {
  display: inline-block;
  vertical-align: top;
}

.storybook-header h1 {
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
}

.storybook-header button + button {
  margin-left: 10px;
}

.storybook-header .welcome {
  color: #333;
  font-size: 14px;
  margin-right: 10px;
}
`,""]);const t=o},"./node_modules/css-loader/dist/runtime/api.js":m=>{m.exports=function(s){var r=[];return r.toString=function(){return this.map(function(a){var e="",n=typeof a[5]<"u";return a[4]&&(e+="@supports (".concat(a[4],") {")),a[2]&&(e+="@media ".concat(a[2]," {")),n&&(e+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),e+=s(a),n&&(e+="}"),a[2]&&(e+="}"),a[4]&&(e+="}"),e}).join("")},r.i=function(a,e,n,o,t){typeof a=="string"&&(a=[[null,a,void 0]]);var l={};if(n)for(var c=0;c<this.length;c++){var y=this[c][0];y!=null&&(l[y]=!0)}for(var p=0;p<a.length;p++){var u=[].concat(a[p]);n&&l[u[0]]||(typeof t<"u"&&(typeof u[5]>"u"||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=t),e&&(u[2]&&(u[1]="@media ".concat(u[2]," {").concat(u[1],"}")),u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":m=>{m.exports=function(s){return s[1]}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":m=>{var s=[];function r(e){for(var n=-1,o=0;o<s.length;o++)if(s[o].identifier===e){n=o;break}return n}function d(e,n){for(var o={},t=[],l=0;l<e.length;l++){var c=e[l],y=n.base?c[0]+n.base:c[0],p=o[y]||0,u="".concat(y," ").concat(p);o[y]=p+1;var g=r(u),x={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(g!==-1)s[g].references++,s[g].updater(x);else{var f=a(x,n);n.byIndex=l,s.splice(l,0,{identifier:u,updater:f,references:1})}t.push(u)}return t}function a(e,n){var o=n.domAPI(n);o.update(e);var t=function(c){if(c){if(c.css===e.css&&c.media===e.media&&c.sourceMap===e.sourceMap&&c.supports===e.supports&&c.layer===e.layer)return;o.update(e=c)}else o.remove()};return t}m.exports=function(e,n){n=n||{},e=e||[];var o=d(e,n);return function(l){l=l||[];for(var c=0;c<o.length;c++){var y=o[c],p=r(y);s[p].references--}for(var u=d(l,n),g=0;g<o.length;g++){var x=o[g],f=r(x);s[f].references===0&&(s[f].updater(),s.splice(f,1))}o=u}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":m=>{var s={};function r(a){if(typeof s[a]>"u"){var e=document.querySelector(a);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch{e=null}s[a]=e}return s[a]}function d(a,e){var n=r(a);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}m.exports=d},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":m=>{function s(r){var d=document.createElement("style");return r.setAttributes(d,r.attributes),r.insert(d,r.options),d}m.exports=s},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(m,s,r)=>{function d(a){var e=r.nc;e&&a.setAttribute("nonce",e)}m.exports=d},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":m=>{function s(a,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var t=typeof n.layer<"u";t&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,t&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var l=n.sourceMap;l&&typeof btoa<"u"&&(o+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),e.styleTagTransform(o,a,e.options)}function r(a){if(a.parentNode===null)return!1;a.parentNode.removeChild(a)}function d(a){if(typeof document>"u")return{update:function(){},remove:function(){}};var e=a.insertStyleElement(a);return{update:function(o){s(e,a,o)},remove:function(){r(e)}}}m.exports=d},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":m=>{function s(r,d){if(d.styleSheet)d.styleSheet.cssText=r;else{for(;d.firstChild;)d.removeChild(d.firstChild);d.appendChild(document.createTextNode(r))}}m.exports=s}}]);
