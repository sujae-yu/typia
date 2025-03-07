"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5544],{19941:(e,t,r)=>{r.d(t,{P:()=>u});var n=r(37876),a=r(69241),l=r(30087);let o={default:"\uD83D\uDCA1",error:"\uD83D\uDEAB",info:(0,n.jsx)(l.KS,{className:"_mt-1"}),warning:"⚠️"},s={default:(0,a.A)("_border-orange-100 _bg-orange-50 _text-orange-800 dark:_border-orange-400/30 dark:_bg-orange-400/20 dark:_text-orange-300"),error:(0,a.A)("_border-red-200 _bg-red-100 _text-red-900 dark:_border-red-200/30 dark:_bg-red-900/30 dark:_text-red-200"),info:(0,a.A)("_border-blue-200 _bg-blue-100 _text-blue-900 dark:_border-blue-200/30 dark:_bg-blue-900/30 dark:_text-blue-200"),warning:(0,a.A)("_border-yellow-100 _bg-yellow-50 _text-yellow-900 dark:_border-yellow-200/30 dark:_bg-yellow-700/30 dark:_text-yellow-200")};function u({children:e,type:t="default",emoji:r=o[t]}){return(0,n.jsxs)("div",{className:(0,a.A)("nextra-callout _overflow-x-auto _mt-6 _flex _rounded-lg _border _py-2 ltr:_pr-4 rtl:_pl-4","contrast-more:_border-current contrast-more:dark:_border-current",s[t]),children:[(0,n.jsx)("div",{className:"_select-none _text-xl ltr:_pl-3 ltr:_pr-2 rtl:_pr-3 rtl:_pl-2",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},children:r}),(0,n.jsx)("div",{className:"_w-full _min-w-0 _leading-7",children:e})]})}},95044:(e,t,r)=>{r.d(t,{t:()=>X});var n=r(37876),a=r(81893),l=r(36607),o=r(14232),s=r(28327),u=r(27721),i=r(44727),d=r(26352),c=r(87159),b=r(63333),f=r(4874);function p(e){let t,{onFocus:r}=e,[n,a]=(0,o.useState)(!0),l=(t=(0,o.useRef)(!1),(0,i.s)(()=>(t.current=!0,()=>{t.current=!1}),[]),t);return n?o.createElement(f.j,{as:"button",type:"button",features:f.u.Focusable,onFocus:e=>{e.preventDefault();let t,n=50;t=requestAnimationFrame(function e(){if(n--<=0){t&&cancelAnimationFrame(t);return}if(r()){if(cancelAnimationFrame(t),!l.current)return;a(!1);return}t=requestAnimationFrame(e)})}}):null}var x=r(52778),_=r(92815),g=r(40720),m=r(94517),v=r(32589);let w=o.createContext(null);function y(e){let{children:t}=e,r=o.useRef({groups:new Map,get(e,t){var r;let n=this.groups.get(e);n||(n=new Map,this.groups.set(e,n));let a=null!=(r=n.get(t))?r:0;return n.set(t,a+1),[Array.from(n.keys()).indexOf(t),function(){let e=n.get(t);e>1?n.set(t,e-1):n.delete(t)}]}});return o.createElement(w.Provider,{value:r},t)}function h(e){let t=o.useContext(w);if(!t)throw Error("You must wrap your component in a <StableCollection>");let r=o.useId(),[n,a]=t.current.get(e,r);return o.useEffect(()=>a,[]),n}var P=r(62048),k=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(k||{}),I=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(I||{}),T=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(T||{});let D={0(e,t){var r;let n=(0,x.wl)(e.tabs,e=>e.current),a=(0,x.wl)(e.panels,e=>e.current),l=n.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),o={...e,tabs:n,panels:a};if(t.index<0||t.index>n.length-1){let r=(0,_.Y)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,_.Y)(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(0===l.length)return o;let a=(0,_.Y)(r,{0:()=>n.indexOf(l[0]),1:()=>n.indexOf(l[l.length-1])});return{...o,selectedIndex:-1===a?e.selectedIndex:a}}let s=n.slice(0,t.index),u=[...n.slice(t.index),...s].find(e=>l.includes(e));if(!u)return o;let i=null!=(r=n.indexOf(u))?r:e.selectedIndex;return -1===i&&(i=e.selectedIndex),{...o,selectedIndex:i}},1(e,t){if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],n=(0,x.wl)([...e.tabs,t.tab],e=>e.current),a=e.selectedIndex;return e.info.current.isControlled||-1===(a=n.indexOf(r))&&(a=e.selectedIndex),{...e,tabs:n,selectedIndex:a}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,x.wl)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},E=(0,o.createContext)(null);function C(e){let t=(0,o.useContext)(E);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Tab.Group /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,C),t}return t}E.displayName="TabsDataContext";let A=(0,o.createContext)(null);function S(e){let t=(0,o.useContext)(A);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Tab.Group /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,S),t}return t}function F(e,t){return(0,_.Y)(t.type,D,e,t)}A.displayName="TabsActionsContext";let N=v.Ac.RenderStrategy|v.Ac.Static,j=(0,v.FX)(function(e,t){var r,n;let d=(0,o.useId)(),{id:f="headlessui-tabs-tab-".concat(d),disabled:p=!1,autoFocus:w=!1,...y}=e,{orientation:k,activation:I,selectedIndex:T,tabs:D,panels:E}=C("Tab"),A=S("Tab"),F=C("Tab"),[N,j]=(0,o.useState)(null),M=(0,o.useRef)(null),U=(0,b.P)(M,t,j);(0,i.s)(()=>A.registerTab(M),[A,M]);let B=h("tabs"),R=D.indexOf(M);-1===R&&(R=B);let O=R===T,Y=(0,u._)(e=>{var t;let r=e();if(r===x.Me.Success&&"auto"===I){let e=null==(t=(0,m.T)(M))?void 0:t.activeElement,r=F.tabs.findIndex(t=>t.current===e);-1!==r&&A.change(r)}return r}),L=(0,u._)(e=>{let t=D.map(e=>e.current).filter(Boolean);if(e.key===P.D.Space||e.key===P.D.Enter){e.preventDefault(),e.stopPropagation(),A.change(R);return}switch(e.key){case P.D.Home:case P.D.PageUp:return e.preventDefault(),e.stopPropagation(),Y(()=>(0,x.CU)(t,x.BD.First));case P.D.End:case P.D.PageDown:return e.preventDefault(),e.stopPropagation(),Y(()=>(0,x.CU)(t,x.BD.Last))}if(Y(()=>(0,_.Y)(k,{vertical:()=>e.key===P.D.ArrowUp?(0,x.CU)(t,x.BD.Previous|x.BD.WrapAround):e.key===P.D.ArrowDown?(0,x.CU)(t,x.BD.Next|x.BD.WrapAround):x.Me.Error,horizontal:()=>e.key===P.D.ArrowLeft?(0,x.CU)(t,x.BD.Previous|x.BD.WrapAround):e.key===P.D.ArrowRight?(0,x.CU)(t,x.BD.Next|x.BD.WrapAround):x.Me.Error}))===x.Me.Success)return e.preventDefault()}),G=(0,o.useRef)(!1),X=(0,u._)(()=>{var e;G.current||(G.current=!0,null==(e=M.current)||e.focus({preventScroll:!0}),A.change(R),(0,g._)(()=>{G.current=!1}))}),q=(0,u._)(e=>{e.preventDefault()}),{isFocusVisible:W,focusProps:V}=(0,a.o)({autoFocus:w}),{isHovered:z,hoverProps:H}=(0,l.M)({isDisabled:p}),{pressed:K,pressProps:Z}=(0,s.Z)({disabled:p}),J=(0,o.useMemo)(()=>({selected:O,hover:z,active:K,focus:W,autofocus:w,disabled:p}),[O,z,W,K,w,p]),Q=(0,v.v6)({ref:U,onKeyDown:L,onMouseDown:q,onClick:X,id:f,role:"tab",type:(0,c.c)(e,N),"aria-controls":null==(n=null==(r=E[R])?void 0:r.current)?void 0:n.id,"aria-selected":O,tabIndex:O?0:-1,disabled:p||void 0,autoFocus:w},V,H,Z);return(0,v.Ci)()({ourProps:Q,theirProps:y,slot:J,defaultTag:"button",name:"Tabs.Tab"})}),M=(0,v.FX)(function(e,t){let{defaultIndex:r=0,vertical:n=!1,manual:a=!1,onChange:l,selectedIndex:s=null,...c}=e,f=n?"vertical":"horizontal",_=a?"manual":"auto",g=null!==s,m=(0,d.Y)({isControlled:g}),w=(0,b.P)(t),[h,P]=(0,o.useReducer)(F,{info:m,selectedIndex:null!=s?s:r,tabs:[],panels:[]}),k=(0,o.useMemo)(()=>({selectedIndex:h.selectedIndex}),[h.selectedIndex]),I=(0,d.Y)(l||(()=>{})),T=(0,d.Y)(h.tabs),D=(0,o.useMemo)(()=>({orientation:f,activation:_,...h}),[f,_,h]),C=(0,u._)(e=>(P({type:1,tab:e}),()=>P({type:2,tab:e}))),S=(0,u._)(e=>(P({type:3,panel:e}),()=>P({type:4,panel:e}))),N=(0,u._)(e=>{j.current!==e&&I.current(e),g||P({type:0,index:e})}),j=(0,d.Y)(g?e.selectedIndex:h.selectedIndex),M=(0,o.useMemo)(()=>({registerTab:C,registerPanel:S,change:N}),[]);(0,i.s)(()=>{P({type:0,index:null!=s?s:r})},[s]),(0,i.s)(()=>{if(void 0===j.current||h.tabs.length<=0)return;let e=(0,x.wl)(h.tabs,e=>e.current);e.some((e,t)=>h.tabs[t]!==e)&&N(e.indexOf(h.tabs[j.current]))});let U=(0,v.Ci)();return o.createElement(y,null,o.createElement(A.Provider,{value:M},o.createElement(E.Provider,{value:D},D.tabs.length<=0&&o.createElement(p,{onFocus:()=>{var e,t;for(let r of T.current)if((null==(e=r.current)?void 0:e.tabIndex)===0)return null==(t=r.current)||t.focus(),!0;return!1}}),U({ourProps:{ref:w},theirProps:c,slot:k,defaultTag:"div",name:"Tabs"}))))}),U=(0,v.FX)(function(e,t){let{orientation:r,selectedIndex:n}=C("Tab.List"),a=(0,b.P)(t),l=(0,o.useMemo)(()=>({selectedIndex:n}),[n]);return(0,v.Ci)()({ourProps:{ref:a,role:"tablist","aria-orientation":r},theirProps:e,slot:l,defaultTag:"div",name:"Tabs.List"})}),B=(0,v.FX)(function(e,t){let{selectedIndex:r}=C("Tab.Panels"),n=(0,b.P)(t),a=(0,o.useMemo)(()=>({selectedIndex:r}),[r]);return(0,v.Ci)()({ourProps:{ref:n},theirProps:e,slot:a,defaultTag:"div",name:"Tabs.Panels"})}),R=(0,v.FX)(function(e,t){var r,n,l,s;let u=(0,o.useId)(),{id:d="headlessui-tabs-panel-".concat(u),tabIndex:c=0,...p}=e,{selectedIndex:x,tabs:_,panels:g}=C("Tab.Panel"),m=S("Tab.Panel"),w=(0,o.useRef)(null),y=(0,b.P)(w,t);(0,i.s)(()=>m.registerPanel(w),[m,w]);let P=h("panels"),k=g.indexOf(w);-1===k&&(k=P);let I=k===x,{isFocusVisible:T,focusProps:D}=(0,a.o)(),E=(0,o.useMemo)(()=>({selected:I,focus:T}),[I,T]),A=(0,v.v6)({ref:y,id:d,role:"tabpanel","aria-labelledby":null==(n=null==(r=_[k])?void 0:r.current)?void 0:n.id,tabIndex:I?c:-1},D),F=(0,v.Ci)();return I||null!=(l=p.unmount)&&!l||null!=(s=p.static)&&s?F({ourProps:A,theirProps:p,slot:E,defaultTag:"div",features:N,visible:I,name:"Tabs.Panel"}):o.createElement(f.j,{"aria-hidden":"true",...A})}),O=Object.assign(j,{Group:M,List:U,Panels:B,Panel:R});var Y=r(69241);function L(e){return!!e&&"object"==typeof e&&"label"in e}let G=({items:e,children:t,storageKey:r,defaultIndex:a=0,selectedIndex:l,onChange:s,className:u,tabClassName:i})=>{let[d,c]=(0,o.useState)(a);(0,o.useEffect)(()=>{void 0!==l&&c(l)},[l]),(0,o.useEffect)(()=>{if(!r)return;function e(e){e.key===r&&c(Number(e.newValue))}let t=Number(localStorage.getItem(r));return c(Number.isNaN(t)?0:t),window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}},[]);let b=(0,o.useCallback)(e=>{if(r){let t=String(e);localStorage.setItem(r,t),window.dispatchEvent(new StorageEvent("storage",{key:r,newValue:t}));return}c(e),s?.(e)},[]);return(0,n.jsxs)(M,{selectedIndex:d,defaultIndex:a,onChange:b,tabIndex:-1,children:[(0,n.jsx)(U,{className:e=>(0,Y.A)("nextra-scrollbar _overflow-x-auto _overscroll-x-contain _overflow-y-hidden","_mt-4 _flex _w-full _gap-2 _border-b _border-gray-200 _pb-px dark:_border-neutral-800","nextra-focus","function"==typeof u?u(e):u),children:e.map((e,t)=>(0,n.jsx)(O,{disabled:L(e)&&e.disabled,className:e=>{let{selected:t,disabled:r,hover:n,focus:a}=e;return(0,Y.A)(a&&"nextra-focusable _ring-inset",t&&"_outline-none","_whitespace-nowrap","_rounded-t _p-2 _font-medium _leading-5 _transition-colors","_-mb-0.5 _select-none _border-b-2",t?"_border-current":n?"_border-gray-200 dark:_border-neutral-800":"_border-transparent",t?"_text-primary-600":r?"_text-gray-400 dark:_text-neutral-600 _pointer-events-none":n?"_text-black dark:_text-white":"_text-gray-600 dark:_text-gray-200","function"==typeof i?i(e):i)},children:L(e)?e.label:e},t))}),(0,n.jsx)(B,{children:t})]})},X=Object.assign(e=>(0,n.jsx)(G,{...e}),{Tab:({children:e,unmount:t=!1,className:r,...a})=>(0,n.jsx)(R,{...a,unmount:t,className:e=>(0,Y.A)("_rounded _mt-6",e.focus&&"nextra-focusable","function"==typeof r?r(e):r),children:e})})}}]);