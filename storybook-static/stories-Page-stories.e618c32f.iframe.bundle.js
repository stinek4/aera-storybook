(self.webpackChunkstorybook_aera=self.webpackChunkstorybook_aera||[]).push([[62],{"./src/stories/Page.stories.ts":(g,a,e)=>{"use strict";e.r(a),e.d(a,{LoggedIn:()=>H,LoggedOut:()=>R,__namedExportsOrder:()=>U,default:()=>z});var l=e("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),u=e("./node_modules/@babel/runtime/regenerator/index.js"),y=e.n(u),d=e("./node_modules/@storybook/test/dist/index.mjs"),m=e("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),t=e("./node_modules/next/dist/compiled/react/index.js"),i=e("./src/stories/Header.tsx"),C=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(C),E=e("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),S=e.n(E),x=e("./node_modules/style-loader/dist/runtime/insertBySelector.js"),B=e.n(x),r=e("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),n=e.n(r),c=e("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),k=e.n(c),P=e("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),s=e.n(P),v=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/page.css"),p={};p.styleTagTransform=s(),p.setAttributes=n(),p.insert=B().bind(null,"head"),p.domAPI=S(),p.insertStyleElement=k();var b=f()(v.default,p);const T=v.default&&v.default.locals?v.default.locals:void 0;var o=t.createElement,L=function(){var G=t.useState(),D=(0,m.default)(G,2),I=D[0],j=D[1];return o("article",null,o(i.Header,{user:I,onLogin:function(){return j({name:"Jane Doe"})},onLogout:function(){return j(void 0)},onCreateAccount:function(){return j({name:"Jane Doe"})}}),o("section",{className:"storybook-page"},o("h2",null,"Pages in Storybook"),o("p",null,"We recommend building UIs with a"," ",o("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer"},o("strong",null,"component-driven"))," ","process starting with atomic components and ending with pages."),o("p",null,"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"),o("ul",null,o("li",null,'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'),o("li",null,"Assemble data in the page component from your services. You can mock these services out using Storybook.")),o("p",null,"Get a guided tutorial on component-driven development at"," ",o("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer"},"Storybook tutorials"),". Read more in the"," ",o("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer"},"docs"),"."),o("div",{className:"tip-wrapper"},o("span",{className:"tip"},"Tip")," Adjust the width of the canvas with the"," ",o("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},o("g",{fill:"none",fillRule:"evenodd"},o("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"}))),"Viewports addon in the toolbar")))};L.displayName="Page";var O={title:"Example/Page",component:L,parameters:{layout:"fullscreen"}};const z=O;var R={},H={play:function(){var W=(0,l.default)(y().mark(function D(I){var j,A,F,M;return y().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return j=I.canvasElement,A=(0,d.within)(j),F=A.getByRole("button",{name:/Log in/i}),h.next=5,(0,d.expect)(F).toBeInTheDocument();case 5:return h.next=7,d.userEvent.click(F);case 7:return h.next=9,(0,d.expect)(F).not.toBeInTheDocument();case 9:return M=A.getByRole("button",{name:/Log out/i}),h.next=12,(0,d.expect)(M).toBeInTheDocument();case 12:case"end":return h.stop()}},D)}));function G(D){return W.apply(this,arguments)}return G}()};const U=["LoggedOut","LoggedIn"]},"./node_modules/@storybook/instrumenter/dist sync recursive":g=>{function a(e){var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}a.keys=()=>[],a.resolve=a,a.id="./node_modules/@storybook/instrumenter/dist sync recursive",g.exports=a},"./node_modules/@storybook/test/dist sync recursive":g=>{function a(e){var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}a.keys=()=>[],a.resolve=a,a.id="./node_modules/@storybook/test/dist sync recursive",g.exports=a},"./src/stories/Header.tsx":(g,a,e)=>{"use strict";e.r(a),e.d(a,{Header:()=>v});var l=e("./node_modules/next/dist/compiled/react/index.js"),u=e("./src/stories/button/Button.tsx"),y=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(y),m=e("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),t=e.n(m),i=e("./node_modules/style-loader/dist/runtime/insertBySelector.js"),C=e.n(i),f=e("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),E=e.n(f),S=e("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),x=e.n(S),B=e("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),r=e.n(B),n=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/header.css"),c={};c.styleTagTransform=r(),c.setAttributes=E(),c.insert=C().bind(null,"head"),c.domAPI=t(),c.insertStyleElement=x();var k=d()(n.default,c);const P=n.default&&n.default.locals?n.default.locals:void 0;var s=l.createElement,v=function(b){var T=b.user,o=b.onLogin,L=b.onLogout,O=b.onCreateAccount;return s("header",null,s("div",{className:"storybook-header"},s("div",null,s("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},s("g",{fill:"none",fillRule:"evenodd"},s("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),s("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),s("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"}))),s("h1",null,"Acme")),s("div",null,T?s(l.Fragment,null,s("span",{className:"welcome"},"Welcome, ",s("b",null,T.name),"!"),s(u.Button,{size:"small",onClick:L,label:"Log out"})):s(l.Fragment,null,s(u.Button,{size:"small",onClick:o,label:"Log in"}),s(u.Button,{primary:!0,size:"small",onClick:O,label:"Sign up"})))))};v.displayName="Header"},"./src/stories/button/Button.tsx":(g,a,e)=>{"use strict";e.r(a),e.d(a,{Button:()=>x});var l=e("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),u=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),y=e("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),d=e("./node_modules/next/dist/compiled/react/index.js"),m=e("./node_modules/styled-components/dist/styled-components.browser.esm.js"),t={aeraPrimaryGreen:"#00AF41",aeraPrimaryDarkGreen:"#007B3C",aeraPrimaryGrey:"#808285",aeraPrimaryLightGrey:"#F1F0F3",aeraPrimaryLightestGrey:"#FAFAFA",aeraSecondaryLightGreen:"#D6FBDB",aeraSecondaryDarkBlue:"#010023",aeraSecondaryLightBlue:"#94E0FF",aeraSecondaryLightestBlue:"#EFFAFC",aeraSecondaryYellow:"#FFD400",aeraBlack:"#1C1C1C",aeraDark:"#292e30",aeraWhite:"#FFFFFF",aeraInputBorder:"#dfdde2",primaryColor:"#00A33D",secondaryColor:"#04A13D",darkAera:"#027b3b",black:"#000000",white:"#FFFFFF",grey:"#CACACA",placeHolderGrey:"#8C8C8C",radioButtonPlaceholder:"#898989",errorText:"#CC0011",errorTextDark:"#BB1E10",inactive:"#D80023",heartbeat:"#E83D3D",light:"#F1F0F3",warning:"#FFD202",jumbotron:"#F8F8F9",transparent:"transparent",disabled:"#b2b2b2",checkboxBorder:"#c8ced3",divBorder:"#979797",blueLink:"#0052cc"},i={backGround:{default:{primary:"".concat(t.aeraPrimaryDarkGreen),secondary:"".concat(t.aeraWhite),text:"".concat(t.transparent),danger:"".concat(t.errorText),warning:"".concat(t.aeraSecondaryYellow)},hover:{primary:"".concat(t.aeraPrimaryGreen),secondary:"".concat(t.aeraSecondaryLightGreen),text:"".concat(t.transparent),danger:"".concat(t.errorTextDark)},active:{primary:"".concat(t.aeraPrimaryGreen),secondary:"".concat(t.aeraSecondaryLightGreen),text:"".concat(t.aeraPrimaryLightGrey),danger:"".concat(t.errorTextDark)},disabled:{primary:"rgba(0, 123, 60, 0.5)",secondary:"".concat(t.aeraWhite),text:"".concat(t.transparent),danger:"rgba(204, 0, 17, 0.5)"}},border:{default:{primary:"none",secondary:"1px solid ".concat(t.aeraPrimaryGreen),text:"none",danger:"none"},hover:{primary:"none",secondary:"1px solid ".concat(t.aeraPrimaryGreen),text:"none",danger:"none"},active:{primary:"none",secondary:" 1px solid".concat(t.aeraPrimaryGreen),text:"none",danger:"none"},disabled:{primary:"none",secondary:"1px solid ".concat(t.aeraPrimaryGrey),text:"none",danger:"none"}},text:{default:{primary:"".concat(t.aeraWhite),secondary:"".concat(t.aeraPrimaryDarkGreen),text:"".concat(t.aeraBlack),danger:"".concat(t.aeraWhite)},active:{primary:"".concat(t.aeraWhite),secondary:"".concat(t.aeraPrimaryGrey),text:"".concat(t.aeraBlack),danger:"rgb(0 0 0 / 0.87)"},disabled:{primary:"".concat(t.aeraWhite),secondary:"".concat(t.aeraPrimaryGrey),text:"".concat(t.aeraPrimaryGrey),danger:"".concat(t.aeraWhite)}}},C={backGround:{default:{primary:"".concat(t.aeraPrimaryDarkGreen),secondary:"".concat(t.aeraPrimaryLightGrey),text:"".concat(t.transparent),danger:"".concat(t.errorText),warning:"".concat(t.aeraSecondaryYellow)}},border:{default:{primary:"none",secondary:"none",text:"none",danger:"none",warning:"none"}},text:{default:{primary:"".concat(t.aeraWhite),secondary:"".concat(t.aeraBlack),text:"".concat(t.aeraBlack),danger:"".concat(t.aeraWhite)}}},f,E=["variant","backgroundColor","size","label","disabled","children"],S=d.createElement,x=function(n){var c=n.variant,k=n.backgroundColor,P=n.size,s=P===void 0?"medium":P,v=n.label,p=n.disabled,b=n.children,T=(0,y.default)(n,E);return S(B,(0,u.default)({type:"button",label:v,disabled:p,variant:c},T),v)};x.displayName="Button";var B=m.default.button(f||(f=(0,l.default)([`
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
`])),function(r){var n,c=r.variant;return(n=i.border.default[c])!==null&&n!==void 0?n:"none"},function(r){var n=r.variant;return i.text.default[n]},function(r){var n=r.variant;return i.backGround.default[n]},function(r){var n=r.variant;return i.backGround.default[n]},t.aeraSecondaryLightBlue,function(r){var n=r.variant;return n==="text"&&"underline"},function(r){var n=r.variant;return i.backGround.hover[n]},function(r){var n=r.variant;return n==="text"&&"underline"},function(r){var n=r.variant;return i.backGround.active[n]},function(r){var n=r.variant;return n==="text"&&"underline"},function(r){var n=r.variant;return i.backGround.disabled[n]},function(r){var n=r.variant;return i.text.disabled[n]})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/header.css":(g,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>t});var l=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(l),y=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(y),m=d()(u());m.push([g.id,`.storybook-header {
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
`,""]);const t=m},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/page.css":(g,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>t});var l=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(l),y=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(y),m=d()(u());m.push([g.id,`.storybook-page {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 24px;
  padding: 48px 20px;
  margin: 0 auto;
  max-width: 600px;
  color: #333;
}

.storybook-page h2 {
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  margin: 0 0 4px;
  display: inline-block;
  vertical-align: top;
}

.storybook-page p {
  margin: 1em 0;
}

.storybook-page a {
  text-decoration: none;
  color: #1ea7fd;
}

.storybook-page ul {
  padding-left: 30px;
  margin: 1em 0;
}

.storybook-page li {
  margin-bottom: 8px;
}

.storybook-page .tip {
  display: inline-block;
  border-radius: 1em;
  font-size: 11px;
  line-height: 12px;
  font-weight: 700;
  background: #e7fdd8;
  color: #66bf3c;
  padding: 4px 12px;
  margin-right: 10px;
  vertical-align: top;
}

.storybook-page .tip-wrapper {
  font-size: 13px;
  line-height: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.storybook-page .tip-wrapper svg {
  display: inline-block;
  height: 12px;
  width: 12px;
  margin-right: 4px;
  vertical-align: top;
  margin-top: 3px;
}

.storybook-page .tip-wrapper svg path {
  fill: #1ea7fd;
}
`,""]);const t=m}}]);
