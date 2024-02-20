"use strict";(self.webpackChunkNo_React=self.webpackChunkNo_React||[]).push([[683],{2065:function(e,n,t){t.d(n,{A:function(){return s}});var r=t(9379),o="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),a="aria-",l="data-";function i(e,n){return 0===e.indexOf(n)}function s(e){var n,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:(0,r.A)({},t);var s={};return Object.keys(e).forEach((function(t){(n.aria&&("role"===t||i(t,a))||n.data&&i(t,l)||n.attr&&o.includes(t))&&(s[t]=e[t])})),s}},9683:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var r=t(6540),o=t(7767),a=t(3751),l=t(6942),i=t.n(l),s=t(2546),c=t(2065),u=t(682),p=t(2279),d=t(4103),m=t(4078);const f=e=>{let{children:n}=e;const{getPrefixCls:t}=r.useContext(p.QO),o=t("breadcrumb");return r.createElement("li",{className:`${o}-separator`,"aria-hidden":"true"},""===n?n:n||"/")};f.__ANT_BREADCRUMB_SEPARATOR=!0;var g=f,b=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};function h(e,n,t,o){if(null==t)return null;const{className:a,onClick:l}=n,s=b(n,["className","onClick"]),u=Object.assign(Object.assign({},(0,c.A)(s,{data:!0,aria:!0})),{onClick:l});return void 0!==o?r.createElement("a",Object.assign({},u,{className:i()(`${e}-link`,a),href:o}),t):r.createElement("span",Object.assign({},u,{className:i()(`${e}-link`,a)}),t)}function y(e,n){return(t,r,o,a,l)=>{if(n)return n(t,r,o,a);const i=function(e,n){if(void 0===e.title||null===e.title)return null;const t=Object.keys(n).join("|");return"object"==typeof e.title?e.title:String(e.title).replace(new RegExp(`:(${t})`,"g"),((e,t)=>n[t]||e))}(t,r);return h(e,t,i,l)}}var O=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};const C=e=>{const{prefixCls:n,separator:t="/",children:o,menu:a,overlay:l,dropdownProps:i,href:s}=e;const c=(e=>{if(a||l){const t=Object.assign({},i);if(a){const e=a||{},{items:n}=e,o=O(e,["items"]);t.menu=Object.assign(Object.assign({},o),{items:null==n?void 0:n.map(((e,n)=>{var{key:t,title:o,label:a,path:l}=e,i=O(e,["key","title","label","path"]);let c=null!=a?a:o;return l&&(c=r.createElement("a",{href:`${s}${l}`},c)),Object.assign(Object.assign({},i),{key:null!=t?t:n,label:c})}))})}else l&&(t.overlay=l);return r.createElement(m.A,Object.assign({placement:"bottom"},t),r.createElement("span",{className:`${n}-overlay-link`},e,r.createElement(d.A,null)))}return e})(o);return null!=c?r.createElement(r.Fragment,null,r.createElement("li",null,c),t&&r.createElement(g,null,t)):null},v=e=>{const{prefixCls:n,children:t,href:o}=e,a=O(e,["prefixCls","children","href"]),{getPrefixCls:l}=r.useContext(p.QO),i=l("breadcrumb",n);return r.createElement(C,Object.assign({},a,{prefixCls:i}),h(i,a,t,o))};v.__ANT_BREADCRUMB_ITEM=!0;var S=v,k=t(4552),j=t(5905),E=t(106),x=t(336);var w=(0,E.OF)("Breadcrumb",(e=>(e=>{const{componentCls:n,iconCls:t,calc:r}=e;return{[n]:Object.assign(Object.assign({},(0,j.dF)(e)),{color:e.itemColor,fontSize:e.fontSize,[t]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${(0,k.zA)(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:r(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},(0,j.K8)(e)),"li:last-child":{color:e.lastItemColor},[`${n}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${n}-link`]:{[`\n          > ${t} + span,\n          > ${t} + a\n        `]:{marginInlineStart:e.marginXXS}},[`${n}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${(0,k.zA)(e.paddingXXS)}`,marginInline:r(e.marginXXS).mul(-1).equal(),[`> ${t}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}})((0,x.h1)(e,{}))),(e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS}))),P=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};function N(e){const{breadcrumbName:n,children:t}=e,r=P(e,["breadcrumbName","children"]),o=Object.assign({title:n},r);return t&&(o.menu={items:t.map((e=>{var{breadcrumbName:n}=e,t=P(e,["breadcrumbName"]);return Object.assign(Object.assign({},t),{title:n})}))}),o}var M=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};const T=e=>{const{prefixCls:n,separator:t="/",style:o,className:a,rootClassName:l,routes:d,items:m,children:f,itemRender:b,params:h={}}=e,O=M(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:v,direction:S,breadcrumb:k}=r.useContext(p.QO);let j;const E=v("breadcrumb",n),[x,P,T]=w(E),D=function(e,n){return(0,r.useMemo)((()=>e||(n?n.map(N):null)),[e,n])}(m,d);const $=y(E,b);if(D&&D.length>0){const e=[],n=m||d;j=D.map(((o,a)=>{const{path:l,key:i,type:s,menu:u,overlay:p,onClick:d,className:m,separator:f,dropdownProps:b}=o,y=((e,n)=>{if(void 0===n)return n;let t=(n||"").replace(/^\//,"");return Object.keys(e).forEach((n=>{t=t.replace(`:${n}`,e[n])})),t})(h,l);void 0!==y&&e.push(y);const O=null!=i?i:a;if("separator"===s)return r.createElement(g,{key:O},f);const v={},S=a===D.length-1;u?v.menu=u:p&&(v.overlay=p);let{href:k}=o;return e.length&&void 0!==y&&(k=`#/${e.join("/")}`),r.createElement(C,Object.assign({key:O},v,(0,c.A)(o,{data:!0,aria:!0}),{className:m,dropdownProps:b,href:k,separator:S?"":t,onClick:d,prefixCls:E}),$(o,h,n,e,k))}))}else if(f){const e=(0,s.A)(f).length;j=(0,s.A)(f).map(((n,r)=>{if(!n)return n;const o=r===e-1;return(0,u.Ob)(n,{separator:o?"":t,key:r})}))}const A=i()(E,null==k?void 0:k.className,{[`${E}-rtl`]:"rtl"===S},a,l,P,T),I=Object.assign(Object.assign({},null==k?void 0:k.style),o);return x(r.createElement("nav",Object.assign({className:A,style:I},O),r.createElement("ol",null,j)))};T.Item=S,T.Separator=g;var D=T;function $(){const e=(0,o.zy)(),[n,t]=(0,r.useState)([]),l=(0,a.X5)(),{t:i}=(0,a.Bd)();return(0,r.useEffect)((()=>{if("/404"===e.pathname||"/"===e.pathname)t([]);else{const n=e.pathname.split("/").filter((e=>e)),r=[],o=(e,n,t,r=0)=>{const a=n.at(r);if(a){const l=e.filter((e=>{const n=e.path.split("/").filter((e=>e));return!!n.includes(":")||n.at(r)===a})).at(0);l&&t.push(l),o(l?.children||[],n,t,r+1)}else if(r===n.length&&e.length){const n=e.filter((e=>""===e.path)).at(0);t.push(n)}};o(l,n,r),t(r)}}),[e.pathname]),r.createElement(D,{className:"breadcrumb-component",items:n.map((e=>({title:e?.meta.code?i(e.meta.code+".code"):e.meta.label})))})}}}]);