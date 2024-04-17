/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@humanmade/block-editor-components/dist/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@humanmade/block-editor-components/dist/index.js ***!
  \***********************************************************************/
/***/ ((module) => {

/*! For license information please see index.js.LICENSE.txt */
!function(e,t){ true?module.exports=t():0}(self,(()=>(()=>{var e={184:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var i=r.apply(null,n);i&&e.push(i)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)o.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},703:(e,t,n)=>{"use strict";var o=n(414);function r(){}function l(){}l.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,l,i){if(i!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:r};return n.PropTypes=n,n}},697:(e,t,n)=>{e.exports=n(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";n.r(o),n.d(o,{ConditionalComponent:()=>t,FetchAllTermSelectControl:()=>m,FileControls:()=>b,GenericServerSideEdit:()=>k,ImageControl:()=>_,InnerBlockSlider:()=>L,InnerBlocksDisplaySingle:()=>I,LinkToolbar:()=>D,PlainTextWithLimit:()=>q,PostPickerButton:()=>X,PostPickerModal:()=>J,PostPickerToolbarButton:()=>K,PostTitleControl:()=>W,PostTypeCheck:()=>$,RichTextWithLimit:()=>H,TermSelector:()=>V,createOptionFromPost:()=>be,createOptionFromTerm:()=>fe,createOptionsFromPosts:()=>ge,createOptionsFromPostsWithHierarchy:()=>ke,createOptionsFromTerms:()=>he,createOptionsFromTermsWithHierarchy:()=>ye,findBlockByName:()=>ce,findInvalidBlock:()=>se,findInvalidBlocks:()=>ue,findValidBlock:()=>de,findValidBlocks:()=>me,getImageDataForSize:()=>h,useActiveBlockStyle:()=>ee,useBlockStyles:()=>te,useDisallowedBlocks:()=>ne,useMeta:()=>oe,usePostThumbnail:()=>re,useRenderAppenderWithBlockLimit:()=>le,useSelectBlock:()=>ie,useSetAttribute:()=>ae,withActiveVariation:()=>ve});const e=window.React;function t(t){const{children:n=null,ComponentFalse:o=(()=>null),ComponentTrue:r=(()=>n),predicate:l,...i}=t,a=l(i)?r:o;return(0,e.createElement)(a,{...i})}const r=window.wp.apiFetch;var l=n.n(r);const i=window.wp.components,a=window.wp.data,c=window.wp.i18n,s=window.wp.url,u={label:"",value:""},d={disabled:!0,label:(0,c.__)("No items found!","block-editor-components"),value:""};const m=function(t){const{defaultOption:n=u,fallbackOption:o=d,taxonomy:r,...m}=t,[p,b]=(0,e.useState)(),[f,g]=(0,e.useState)(),k=(0,a.useSelect)((e=>e("core").getTaxonomy(r)?.rest_base),[r]);return(0,e.useEffect)((()=>{k&&(async()=>{try{const e=await l()({path:(0,s.addQueryArgs)(`/wp/v2/${k}`,{_fields:"id,name",context:"view",per_page:-1})});if(!e?.length)return void g(o?[o]:[]);g([...n?[n]:[],...he(e)])}catch(t){var e;b(null!==(e=t.message)&&void 0!==e?e:(0,c.__)("Unknown error.","block-editor-components"))}})()}),[k,n,o]),p?(0,e.createElement)(i.Notice,{isDismissible:!1,status:"error"},(0,e.createElement)("p",null,p)):f?(0,e.createElement)(i.SelectControl,{...m,options:f}):(0,e.createElement)(i.Spinner,null)},p=window.wp.blockEditor;function b(t){const{value:n,onChange:o,...r}=t;return(0,e.createElement)(p.MediaUploadCheck,null,(0,e.createElement)(p.MediaUpload,{title:(0,c.__)("Select or Upload File","block-editor-components"),...r,multiple:!1,render:({open:t})=>(0,e.createElement)(i.ToolbarGroup,null,(0,e.createElement)(i.ToolbarButton,{icon:"admin-links",label:n?(0,c.__)("Edit file","block-editor-components"):(0,c.__)("Select file","block-editor-components"),onClick:t}),n&&(0,e.createElement)(i.ToolbarButton,{icon:"editor-unlink",label:(0,c.__)("Deselect file","block-editor-components"),onClick:()=>o(null)})),value:n,onSelect:o}))}const f=window.wp.serverSideRender;var g=n.n(f);const k=function({attributes:t,context:n,name:o}){return(0,e.createElement)("div",{...(0,p.useBlockProps)()},(0,e.createElement)(i.Disabled,null,(0,e.createElement)(g(),{attributes:t,block:o,EmptyResponsePlaceholder:()=>(0,e.createElement)("div",{className:`wp-block-${o.replace("/","-")}`},o," ",(0,c.__)("Block rendered as empty.")),urlQueryArgs:"object"==typeof n&&Object.hasOwn(n,"postId")?{post_id:n.postId}:{}})))};function h(e,t){var n;const o=null!==(n=e?.sizes)&&void 0!==n?n:e?.media_details?.sizes,r=o?.[t];return r?{src:r.url||r.source_url,width:r.width,height:r.height}:null}const y=["image"],v=(0,c.__)("Select Image","block-editor-components"),E=(0,c.__)("Select Image","block-editor-components"),S=(0,c.__)("Remove image","block-editor-components"),w=(0,c.__)("Replace Image","block-editor-components");function _(t){const{buttonText:n=v,className:o,help:r,id:l,label:c,modalTitle:s=E,removeButtonText:u=S,replaceButtonText:d=w,size:m,value:b,onChange:f}=t,g=(0,a.useSelect)((e=>{const t=e("core").getMedia(b,{context:"view"});return t?t.alt_text:""}),[b]),k=(0,a.useSelect)((e=>{const t=e("core").getMedia(b,{context:"view"});if(t){if(m){const e=h(t,m);if(e)return e.src}return t.source_url}}),[m,b]);return(0,e.createElement)(i.BaseControl,{className:o,help:r,id:l,label:c},(0,e.createElement)(p.MediaUploadCheck,null,(0,e.createElement)(p.MediaUpload,{allowedTypes:y,render:({open:t})=>(0,e.createElement)("div",null,b?k?(0,e.createElement)(i.Button,{isLink:!0,onClick:t},(0,e.createElement)("img",{alt:g,src:k})):(0,e.createElement)(i.Spinner,null):null,(0,e.createElement)(i.Button,{isSecondary:!0,onClick:t},b?d:n)),title:s,onSelect:f})),(0,e.createElement)("br",null),b?(0,e.createElement)(i.Button,{isDestructive:!0,isLink:!0,onClick:()=>f(null)},u):null)}var T=n(697),C=n.n(T);const B=window.wp.blocks;function x({className:t,allowedBlocks:n,template:o,currentItemIndex:r,parentBlockId:l,renderAppender:i,captureToolbars:a}){const c=(0,e.useRef)(),s=(0,p.useInnerBlocksProps)({id:`inner-block-display-single-${l}`,className:t},{__experimentalCaptureToolbars:a,allowedBlocks:n,orientation:"horizontal",renderAppender:i,template:o,templateLock:!1});return(0,e.useEffect)((()=>{c.current&&(c.current.innerHTML=`#inner-block-display-single-${l} > *:not(:nth-child(${r+1}) ) { display: none; }`)}),[r,c,l]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)("style",{ref:c}),(0,e.createElement)("div",{...s}))}x.defaultProps={currentItemIndex:0,renderAppender:!1,captureToolbars:!0},x.propTypes={parentBlockId:C().string.isRequired,allowedBlocks:C().arrayOf(C().string).isRequired,template:C().array,className:C().string,currentItemIndex:C().number,renderAppender:C().oneOfType([C().bool,C().element])};const I=x;var P=n(184),R=n.n(P);function O({totalPages:t,currentPage:n,setCurrentPage:o,prevEnabled:r,nextEnabled:l,addSlide:a=(()=>{}),addSlideEnabled:c=!1}){return(0,e.createElement)("div",{className:"inner-block-slider__navigation"},(0,e.createElement)(i.IconButton,{disabled:!r,icon:"arrow-left-alt2",isSecondary:!0,isSmall:!0,onClick:()=>{r&&o(n-1)}}),[...Array(t).keys()].map((t=>(0,e.createElement)(i.Button,{key:t+1,"aria-label":`Slide ${t+1}`,className:R()("components-button","is-not-small",{"is-primary":n===t+1,"is-secondary":n!==t+1}),type:"button",onClick:()=>{o(t+1)}},t+1))),(0,e.createElement)(i.IconButton,{disabled:!l,icon:"arrow-right-alt2",isSecondary:!0,isSmall:!0,onClick:()=>{l&&o(n+1)}}),(0,e.createElement)(i.IconButton,{disabled:!c,icon:"plus-alt2",isSecondary:!0,isSmall:!0,onClick:()=>a()}))}O.propTypes={totalPages:C().number.isRequired,currentPage:C().number.isRequired,setCurrentPage:C().func.isRequired,prevEnabled:C().bool.isRequired,nextEnabled:C().bool.isRequired,addSlide:C().func,addSlideEnabled:C().bool};const N=O,M=({parentBlockId:t,allowedBlock:n,template:o,slideLimit:r,currentItemIndex:l,setCurrentItemIndex:i,showNavigation:c})=>{const s=o||[[n]],{slideBlocks:u,selectedBlockId:d,getLowestCommonAncestorWithSelectedBlock:m}=(0,a.useSelect)((e=>{const n=e("core/block-editor");return{slideBlocks:n.getBlock(t).innerBlocks,selectedBlockId:n.getSelectedBlockClientId(),getLowestCommonAncestorWithSelectedBlock:n.getLowestCommonAncestorWithSelectedBlock}})),{selectBlock:p}=(0,a.useDispatch)("core/block-editor"),b=(0,e.useRef)(u.length),{insertBlock:f}=(0,a.useDispatch)("core/block-editor");return(0,e.useEffect)((()=>{if(u.length>b.current){const e=u.length-1;i(e),p(u[e].clientId)}else if(u.length<b.current&&l+1>u.length){const e=u.length-1;i(e),p(u[e].clientId)}b.current=u.length}),[u.length,l,b,i,p,u]),(0,e.useEffect)((()=>{const e=u.findIndex((e=>m(e.clientId)===e.clientId));e>=0&&i(e)}),[d,u,i,m]),(0,e.createElement)("div",{className:"inner-block-slider"},(0,e.createElement)(I,{allowedBlocks:[n],className:"slides",currentItemIndex:l,parentBlockId:t,template:s}),c&&(0,e.createElement)(N,{addSlide:()=>{const e=(0,B.createBlock)(n);f(e,void 0,t)},addSlideEnabled:u.length<r,currentPage:l+1,nextEnabled:l+1<u.length,prevEnabled:l+1>1,setCurrentPage:e=>{i(e-1),p(u[e-1].clientId)},totalPages:u.length}))};M.defaultProps={slideLimit:10,template:null,showNavigation:!0},M.propTypes={parentBlockId:C().string.isRequired,allowedBlock:C().string.isRequired,template:C().array,showNavigation:C().bool,currentItemIndex:C().number.isRequired,setCurrentItemIndex:C().func.isRequired};const A=M,F=t=>{const[n,o]=(0,e.useState)(0);return(0,e.createElement)(A,{...t,currentItemIndex:n,setCurrentItemIndex:o})};F.Controlled=A;const L=F;function D(t){const{onChange:n,opensInNewTab:o,url:r}=t,[l,a]=(0,e.useState)(!1),s=(0,e.useMemo)((()=>[{icon:"admin-links",title:(0,c.__)("Link","block-editor-components"),isActive:r?.length>0,onClick:()=>a(!l)}]),[a,l,r]),u=(0,e.useMemo)((()=>({url:r,opensInNewTab:o})),[o,r]);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(i.ToolbarGroup,{controls:s}),l&&(0,e.createElement)(i.Popover,null,(0,e.createElement)(p.__experimentalLinkControl,{forceIsEditingLink:l,opensInNewTab:o,value:u,onChange:n})))}function q(t){const{className:n,limit:o=0,onChange:r,...l}=t,[i,a]=(0,e.useState)(o&&t.value?.length>o);return(0,e.createElement)(p.PlainText,{className:`${n} limit-text ${i?"invalid":""}`.trim(),onChange:e=>{o&&e.length>o?i||a(!0):(i&&a(!1),r(e))},...l})}const j=/[\r\n]+/g;function W(t){const{editPost:n}=(0,a.useDispatch)("core/editor"),o=(0,a.useSelect)((e=>e("core/editor").getEditedPostAttribute("title")),[]),r=(0,e.useCallback)((e=>n({title:e.replace(j," ")})),[n]);return(0,e.createElement)(p.RichText,{...t,allowedFormats:[],value:o,onChange:r})}function $(e){var t;const{postType:n}=e;return(0,a.useSelect)((e=>e("core/editor").getCurrentPostType()),[])===n?e.children:null!==(t=e.fallback)&&void 0!==t?t:null}const U=window.wp.dom,z=e=>{const t=document.createRange();t.selectNodeContents(e),t.collapse(!1);const n=window.getSelection();n.removeAllRanges(),n.addRange(t)};function H(t){const{className:n,limit:o=0,onChange:r,...l}=t,i=(0,e.useRef)(),[a,c]=(0,e.useState)(o&&t.value?.length>o),[s,u]=(0,e.useState)(!1);return(0,e.createElement)(p.RichText,{ref:i,className:`${n} limit-text ${a?"invalid":""}`.trim(),onChange:e=>{if(o&&(0,U.__unstableStripHTML)(e).length>o)return u(!1),i.current.innerHTML=t.value,z(i.current),void(a||c(!0));s&&a&&c(!1),u(!0),r(e)},...l})}const V=function(t){const{taxonomy:n,value:o=[],onChange:r}=t,l=(0,a.useSelect)((e=>e("core").getTaxonomy(n)),[n]),{taxonomyTermsById:s,taxonomyTermsByTitle:u}=(0,a.useSelect)((e=>{var t;const o=null!==(t=e("core").getEntityRecords("taxonomy",n,{per_page:100}))&&void 0!==t?t:[],r=function(e){return e?e.reduce(((e,t)=>(e[t.id]=t.name,e)),{}):[]}(o),l=function(e){return e?e.reduce(((e,t)=>(e[t.name]=t.id,e)),{}):[]}(o);return{taxonomyTermsById:r,taxonomyTermsByTitle:l}}),[n]),d=o.map((e=>s[e])).filter(Boolean);return(0,e.createElement)(i.FormTokenField,{label:(0,c.sprintf)((0,c.__)("Filter by %s","block-editor-components"),l?l.labels.singular_name:""),suggestions:Object.values(s),value:d,onChange:e=>{r(e.map((e=>u[e])))}})},G=window.wp.element;function Q(t){const{postType:n,queryArgs:o,onChange:r,values:l=[],isSortable:s=!1}=t,u=(0,a.useSelect)((e=>{var t;return null!==(t=e("core").getEntityRecords("postType",n,o))&&void 0!==t?t:[]}),[n,o]),d=(0,a.useSelect)((e=>e("core/data").isResolving("core","getEntityRecords",["postType",n,o])));return(0,e.createElement)("div",{style:{marginTop:-24,paddingTop:24,paddingLeft:4,marginLeft:-4}},d&&(0,e.createElement)(i.Spinner,null)||u.length<1&&(0,e.createElement)(i.Notice,{isDismissible:!1},(0,c.__)("No results found","block-editor-components"))||u.map((t=>(0,e.createElement)("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",marginRight:-2,paddingRight:2}},(0,e.createElement)(i.CheckboxControl,{key:t.id,checked:l.includes(t.id),label:t.title?.rendered||(0,c.__)("(No title)","block-editor-components"),onChange:e=>{r(e?[...l,t.id]:l.filter((e=>e!==t.id)))}}),s&&(0,e.createElement)(i.ButtonGroup,null,(0,e.createElement)(i.Button,{icon:"arrow-up-alt2",iconSize:12,isSmall:!0,label:(0,c.__)("Move up","block-editor-components"),variant:"secondary",onClick:()=>(e=>{const t=l.indexOf(e);-1!==t&&0!==t&&r([...l.slice(0,t-1),l[t],l[t-1],...l.slice(t+1)])})(t.id)}),(0,e.createElement)(i.Button,{icon:"arrow-down-alt2",iconSize:12,isSmall:!0,label:(0,c.__)("Move down","block-editor-components"),variant:"secondary",onClick:()=>(e=>{const t=l.indexOf(e);-1!==t&&t!==l.length-1&&r([...l.slice(0,t),l[t+1],l[t],...l.slice(t+2)])})(t.id)}))))))}function Y(t){const{postType:n,onChange:o,values:r,taxonomies:l}=t,[s,u]=(0,G.useState)(""),d=(0,a.useSelect)((e=>l.map((t=>e("core").getTaxonomy(t)))),[l]),[m,p]=(0,G.useState)([]),b=(0,e.useCallback)(((e,t)=>{const n=d.find((t=>t&&t.slug===e));n&&p({...m,[`${n.rest_base}`]:t})}),[m,d]);(0,e.useEffect)((()=>{d.forEach((e=>{e&&!m[e.rest_base]&&b(e.rest_base,[])}))}),[d,b,m]);const f={search:s||void 0,per_page:30,...m,context:"view"};return(0,e.createElement)(i.Flex,{align:"flex-start",style:{gap:24}},(0,e.createElement)(i.FlexItem,{style:{width:"35%"}},(0,e.createElement)(i.SearchControl,{label:(0,c.__)("Search Posts","block-editor-components"),style:{marginBottom:24},value:s,onChange:e=>u(e)}),l.map((t=>{const n=d.find((e=>e&&e.slug===t));return n?(0,e.createElement)(V,{taxonomy:t,value:m[n.rest_base],onChange:e=>b(t,e)}):null}))),(0,e.createElement)(i.FlexItem,{style:{width:"65%"}},(0,e.createElement)(Q,{postType:n,queryArgs:f,values:r,onChange:o})))}function J(t){const{title:n,postType:o="post",taxonomies:r=[],values:l=[],onChange:a,setModalOpen:s}=t;return(0,e.createElement)(i.Modal,{style:{width:"800px",maxWidth:"100%"},title:n,onRequestClose:()=>s(!1)},(0,e.createElement)("div",{style:{marginTop:-16}},(0,e.createElement)(i.TabPanel,{tabs:[{name:"browse",title:(0,c.__)("Browse Posts","block-editor-components"),content:()=>(0,e.createElement)(e.Fragment,null,"Foo")},{name:"selection",title:(0,c.__)("Current Selection","block-editor-components")}]},(t=>(0,e.createElement)("div",{style:{marginTop:"calc( var(--wp-admin-border-width-focus) * -1 )",borderStyle:"none",borderTop:"var( --wp-admin-border-width-focus ) solid #ddd",paddingTop:24}},"browse"===t.name&&(0,e.createElement)(Y,{postType:o,taxonomies:r,values:l,onChange:a}),"selection"===t.name&&(0,e.createElement)(Q,{isSortable:!0,postType:o,queryArgs:{include:l,orderby:"include",per_page:l.length},values:l,onChange:a}))))))}function K(t){const{title:n=(0,c.__)("Select posts","block-editor-components"),icon:o="edit"}=t,[r,l]=(0,G.useState)(!1);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(i.ToolbarButton,{icon:o,label:n,onClick:()=>l(!0)},n),r&&(0,e.createElement)(J,{...t,setModalOpen:l,title:n}))}function X(t){const{title:n=(0,c.__)("Select posts","block-editor-components")}=t,[o,r]=(0,G.useState)(!1);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(i.Button,{variant:"primary",onClick:()=>r(!0)},n),o&&(0,e.createElement)(J,{...t,setModalOpen:r,title:n}))}const Z=/^is-style-/;function ee(t){const{blockName:n,className:o}=(0,a.useSelect)((e=>{var n,o;const r=e("core/block-editor").getBlock(t);return{blockName:null!==(n=r?.name)&&void 0!==n?n:"",className:null!==(o=r?.attributes?.className)&&void 0!==o?o:""}}),[t]),{blockStyles:r,defaultStyle:l}=te(n),i=(0,e.useMemo)((()=>r.map((({name:e})=>e))),[r]),c=(0,e.useMemo)((()=>function(e=""){return e.trim().replace(/\s+/," ").split(" ").map((e=>Z.test(e)?e.replace(Z,""):"")).filter(Boolean)}(o)),[o]);return(0,e.useMemo)((()=>{var e;return null!==(e=c.find((e=>i.includes(e))))&&void 0!==e?e:l}),[i,c,l])}function te(t){const n=(0,a.useSelect)((e=>e("core/blocks").getBlockStyles(t)),[t]);return(0,e.useMemo)((()=>{var e;return{blockStyles:n,defaultStyle:null!==(e=n.find((({isDefault:e})=>e))?.name)&&void 0!==e?e:""}}),[n])}function ne(t){return(0,e.useMemo)((()=>{const e=(0,B.getBlockTypes)();return e?.length?e.filter((({name:e,parent:n})=>!n&&!t.includes(e))).map((({name:e})=>e)):[]}),[t])}function oe(t,n){var o;const{editPost:r}=(0,a.useDispatch)("core/editor"),l=(0,a.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta"))),i=(0,e.useCallback)((e=>r({meta:{[t]:e}})),[r,t]);return[null!==(o=l?.[t])&&void 0!==o?o:n,i]}function re(){const{editPost:e}=(0,a.useDispatch)("core/editor"),t=(0,a.useSelect)((e=>e("core/editor").getEditedPostAttribute("featured_media"))),n=(0,a.useSelect)((e=>t?e("core").getMedia(t):null),[t]),o=(0,G.useCallback)((t=>{e({featured_media:t})}),[e]);return{postThumbnail:n,postThumbnailId:t,setPostThumbnail:o}}function le(e,t,n){return(0,a.useSelect)((o=>{const{innerBlocks:r}=o("core/block-editor").getBlock(e);return r?.length<t&&n}),[])}function ie(){const{selectBlock:t}=(0,a.useDispatch)("core/block-editor");return(0,e.useCallback)((e=>{const n=document.getElementById(`block-${e}`);n&&(t(e),setTimeout((()=>n.scrollIntoView({behavior:"smooth"})),200))}),[t])}function ae(t,n,o){return(0,e.useCallback)(((e=o)=>n({[t]:e})),[t,o,n])}function ce(e){const{getBlocks:t}=(0,a.select)("core/block-editor");return t().find((({name:t})=>t===e))}function se(e,t){return e.find((e=>!t(e)))}function ue(e,t){return e.filter((e=>!t(e)))}function de(e,t){return e.find((e=>t(e)))}function me(e,t){return e.filter((e=>t(e)))}const pe=window.wp.htmlEntities;function be(e,t=""){const{id:n,title:o}=e;return{label:t+(0,pe.decodeEntities)(o.rendered||(0,c.sprintf)((0,c.__)("#%d (no title)","block-editor-components"),n)),value:n}}function fe(e,t=""){const{id:n,name:o}=e;return{label:t+(0,pe.decodeEntities)(o||(0,c.sprintf)((0,c.__)("#%d (no name)","block-editor-components"),n)),value:n}}function ge(e){return e.map((e=>be(e)))}function ke(e,t="\u2014 ",n=0){return e.map((({children:e=[],...o})=>[be(o,t.repeat(n)),...ke(e,t,n+1)])).flat()}function he(e){return e.map((e=>fe(e)))}function ye(e,t="\u2014 ",n=0){return e.map((({children:e=[],...o})=>[fe(o,t.repeat(n)),...ye(e,t,n+1)])).flat()}function ve(e,...t){if(e.variations?.length){const n=function(e){return(t,n)=>e.every((e=>t[e]===n[e]))}(t);e.variations=e.variations.map((e=>(e.isActive=n,e)))}return e}})(),o})()));

/***/ }),

/***/ "./src/certificate/edit.js":
/*!*********************************!*\
  !*** ./src/certificate/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _humanmade_block_editor_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @humanmade/block-editor-components */ "./node_modules/@humanmade/block-editor-components/dist/index.js");
/* harmony import */ var _humanmade_block_editor_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_humanmade_block_editor_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/certificate/editor.scss");
/* harmony import */ var _assets_img_fake_signature_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/img/fake-signature.png */ "./src/assets/img/fake-signature.png");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */






/**
 * See https://github.com/humanmade/block-editor-components/tree/main/src/components/ImageControl
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit({
  attributes,
  setAttributes
}) {
  const {
    backgroundImage,
    textAlign
  } = attributes;
  const postId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('core/editor').getCurrentPostId());
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.useEntityProp)('postType', 'cya_certificate', 'meta', postId);
  const [currentCertified, setCurrentCertified] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: '',
    email: '',
    id: ''
  });
  const [controls, setControls] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    modalOpen: false,
    addButtonDisabled: true,
    saveEditButtonDisabled: true
  });
  const clearFields = () => {
    setCurrentCertified({
      name: '',
      email: '',
      id: ''
    });
  };
  const addCertified = () => {
    setMeta({
      ...meta,
      _cya_participant_list: [...meta['_cya_participant_list'], {
        ...currentCertified,
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])()
      }]
    });
    clearFields();
  };
  const openModal = index => {
    setCurrentCertified(meta['_cya_participant_list'][index]);
    setControls({
      ...controls,
      modalOpen: true
    });
  };
  const closeModal = () => {
    setControls({
      ...controls,
      modalOpen: false
    });
    clearFields();
  };
  const saveEdit = () => {
    const indexOfCertified = meta['_cya_participant_list'].findIndex(certified => certified.id === currentCertified.id);
    const modifiedList = meta['_cya_participant_list'].map((certified, index) => {
      if (index === indexOfCertified) return currentCertified;
      return certified;
    });
    setMeta({
      ...meta,
      _cya_participant_list: modifiedList
    });
    closeModal();
  };
  const removeCertified = () => {
    const indexOfCertified = meta['_cya_participant_list'].findIndex(certified => certified.id === currentCertified.id);
    const modifiedList = [...meta['_cya_participant_list']];
    modifiedList.splice(indexOfCertified, 1);
    setMeta({
      ...meta,
      _cya_participant_list: modifiedList
    });
    closeModal();
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      style: {
        textAlign: textAlign,
        backgroundImage: `url(${backgroundImage.url})`,
        backgroundSize: '100% 100%'
      }
    }),
    className: "alignwide"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose background image', 'certify-your-audience'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_humanmade_block_editor_components__WEBPACK_IMPORTED_MODULE_6__.ImageControl, {
    buttonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Image', 'certify-your-audience'),
    modalTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Image', 'certify-your-audience'),
    removeButtonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Image', 'certify-your-audience'),
    replaceButtonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace Image', 'certify-your-audience'),
    value: backgroundImage.id,
    onChange: image => setAttributes({
      backgroundImage: {
        id: image?.id,
        url: image?.url
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Certified List', 'certify-your-audience'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", null, meta['_cya_participant_list'].map((certified, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      style: {
        display: 'grid',
        gridTemplateColumns: '4fr 2fr'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, certified.name + ' - ' + certified.email), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      variant: "secondary",
      onClick: () => openModal(index)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dashicon, {
      icon: "admin-generic"
    })));
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Update/Publish the post for saving the list.', 'certify-your-audience'))), controls['modalOpen'] && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit participant data", 'certify-your-audience'),
    onRequestClose: closeModal
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Name", 'certify-your-audience'),
    value: currentCertified.name,
    onChange: value => {
      setControls({
        ...controls,
        saveEditButtonDisabled: !(value && currentCertified.email)
      });
      setCurrentCertified({
        ...currentCertified,
        name: value
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    type: "email",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Email", 'certify-your-audience'),
    value: currentCertified.email,
    onChange: value => {
      setControls({
        ...controls,
        saveEditButtonDisabled: !(value && currentCertified.name)
      });
      setCurrentCertified({
        ...currentCertified,
        email: value
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "secondary",
    onClick: saveEdit,
    disabled: controls['saveEditButtonDisabled']
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save Edit', 'certify-your-audience')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "tertiary",
    onClick: removeCertified
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove', 'certify-your-audience')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      color: 'red'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Warning! Participants removed from this list won't possesses a certificate", 'certify-your-audience')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Certified Individual', 'certify-your-audience'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Name", 'certify-your-audience'),
    value: currentCertified.name,
    onChange: value => {
      setCurrentCertified({
        ...currentCertified,
        name: value
      });
      setControls({
        ...controls,
        addButtonDisabled: !(value && currentCertified.email)
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    type: "email",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Email", 'certify-your-audience'),
    value: currentCertified.email,
    onChange: value => {
      setCurrentCertified({
        ...currentCertified,
        email: value
      });
      setControls({
        ...controls,
        addButtonDisabled: !(value && currentCertified.name)
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "primary",
    onClick: addCertified,
    disabled: controls['addButtonDisabled']
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add', 'certify-your-audience')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "secondary",
    onClick: clearFields
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear Fields', 'certify-your-audience'))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {
    value: textAlign,
    onChange: nextAlign => setAttributes({
      textAlign: nextAlign
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalSpacer, {
    paddingX: '2em',
    paddingY: '1em'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    template: [['core/heading', {
      content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Certificate', 'certify-your-audience'),
      level: 1
    }], ['core/paragraph', {
      content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Our institution have the pleasure of award', 'certify-your-audience')
    }], ['cya/certificate-participant-name', {
      lock: {
        remove: true
      }
    }], ['core/paragraph', {
      content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('with this certificate for the event occurred here.', 'certify-your-audience')
    }], ['core/columns', {}, [['core/column', {
      verticalAlignment: 'center'
    }, [['core/image', {
      url: _assets_img_fake_signature_png__WEBPACK_IMPORTED_MODULE_8__
    }], ['core/paragraph', {
      content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Random Person', 'certify-your-audience')
    }]]], ['core/column', {
      verticalAlignment: 'center'
    }, [['cya/certificate-qrcode']]], ['core/column', {
      verticalAlignment: 'center'
    }, [['core/image', {
      url: _assets_img_fake_signature_png__WEBPACK_IMPORTED_MODULE_8__
    }], ['core/paragraph', {
      content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Random Person', 'certify-your-audience')
    }]]]]], ['cya/certificate-url']]
  })));
}

/***/ }),

/***/ "./src/certificate/index.js":
/*!**********************************!*\
  !*** ./src/certificate/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/certificate/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/certificate/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/certificate/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/certificate/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/certificate/save.js":
/*!*********************************!*\
  !*** ./src/certificate/save.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save({
  attributes
}) {
  const {
    backgroundImage,
    textAlign
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      style: {
        textAlign: textAlign
      }
    }),
    className: "alignwide"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cya_certificate_wrapper",
    style: {
      backgroundImage: backgroundImage.url ? `url(${backgroundImage.url})` : ''
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cya_certificate"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
}

/***/ }),

/***/ "./src/certificate/editor.scss":
/*!*************************************!*\
  !*** ./src/certificate/editor.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/certificate/style.scss":
/*!************************************!*\
  !*** ./src/certificate/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/assets/img/fake-signature.png":
/*!*******************************************!*\
  !*** ./src/assets/img/fake-signature.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/fake-signature.736da14f.png";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/certificate/block.json":
/*!************************************!*\
  !*** ./src/certificate/block.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"cya/certificate","version":"0.1.0","title":"CYA Certificate","category":"widgets","icon":"welcome-learn-more","description":"The actual certificate block that holds the content.","example":{},"supports":{"html":false,"lock":false},"attributes":{"textAlign":{"type":"string","default":"center"},"backgroundImage":{"type":"object","default":{"id":0,"url":""}}},"textdomain":"certify-your-audience","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"certificate/index": 0,
/******/ 			"certificate/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcertificate"] = globalThis["webpackChunkcertificate"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["certificate/style-index"], () => (__webpack_require__("./src/certificate/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map