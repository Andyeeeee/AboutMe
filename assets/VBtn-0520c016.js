import{ab as X,r as T,ac as je,n as A,F as D,ad as re,P as Fe,b as c,ae as R,af as be,ag as ue,ah as Ue,ai as Xe,aj as Ye,p as h,ak as B,e as x,X as Y,A as G,g as P,B as H,al as Ke,M as I,am as Je,an as Qe,v as m,ao as Ze,N as pe,K as et,ap as ce,f as M,k as tt,j as Ce,i as nt,d as st,Q as at,o as it,_ as Se,aq as ot,q as lt,E as rt,s as ut,S as ct,U as dt,C as vt,ar as ft,as as de,H as mt,at as gt,au as ve,I as ht,J as yt}from"./index-63c7196a.js";import{m as W,b as q,u as N}from"./VRow-cb5ccd6c.js";const bt=["top","bottom"],pt=["start","end","left","right"];function Ct(e,t){let[s,n]=e.split(" ");return n||(n=X(bt,s)?"start":X(pt,s)?"top":"center"),{side:fe(s,t),align:fe(n,t)}}function fe(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function St(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const s=T(),n=T();if(je){const i=new ResizeObserver(a=>{e==null||e(a,i),a.length&&(t==="content"?n.value=a[0].contentRect:n.value=a[0].target.getBoundingClientRect())});A(()=>{i.disconnect()}),D(s,(a,o)=>{o&&(i.unobserve(re(o)),n.value=void 0),a&&i.observe(re(a))},{flush:"post"})}return{resizeRef:s,contentRect:Fe(n)}}function Z(e){return be(()=>{const t=[],s={};if(e.value.background)if(ue(e.value.background)){if(s.backgroundColor=e.value.background,!e.value.text&&Ue(e.value.background)){const n=Xe(e.value.background);if(n.a==null||n.a===1){const i=Ye(n);s.color=i,s.caretColor=i}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(ue(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:s}})}function K(e,t){const s=c(()=>({text:R(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=Z(s);return{textColorClasses:n,textColorStyles:i}}function rn(e,t){const s=c(()=>({background:R(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=Z(s);return{backgroundColorClasses:n,backgroundColorStyles:i}}const kt=["x-small","small","default","large","x-large"],ee=h({size:{type:[String,Number],default:"default"}},"size");function te(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return be(()=>{let s,n;return X(kt,e.size)?s=`${t}--size-${e.size}`:e.size&&(n={width:x(e.size),height:x(e.size)}),{sizeClasses:s,sizeStyles:n}})}const _t=h({color:String,start:Boolean,end:Boolean,icon:Y,...W(),...ee(),...q({tag:"i"}),...G()},"VIcon"),F=P()({name:"VIcon",props:_t(),setup(e,t){let{attrs:s,slots:n}=t;const i=T(),{themeClasses:a}=H(e),{iconData:o}=Ke(c(()=>i.value||e.icon)),{sizeClasses:d}=te(e),{textColorClasses:l,textColorStyles:g}=K(I(e,"color"));return N(()=>{var p,r;const y=(p=n.default)==null?void 0:p.call(n);return y&&(i.value=(r=Je(y).filter(u=>u.type===Qe&&u.children&&typeof u.children=="string")[0])==null?void 0:r.children),m(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",a.value,d.value,l.value,{"v-icon--clickable":!!s.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[d.value?void 0:{fontSize:x(e.size),height:x(e.size),width:x(e.size)},g.value,e.style],role:s.onClick?"button":void 0,"aria-hidden":!s.onClick},{default:()=>[y]})}),{}}}),xt=h({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),U=P(!1)({name:"VDefaultsProvider",props:xt(),setup(e,t){let{slots:s}=t;const{defaults:n,disabled:i,reset:a,root:o,scoped:d}=Ze(e);return pe(n,{reset:a,root:o,scoped:d,disabled:i}),()=>{var l;return(l=s.default)==null?void 0:l.call(s)}}}),wt=h({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function It(e){return{dimensionStyles:c(()=>({height:x(e.height),maxHeight:x(e.maxHeight),maxWidth:x(e.maxWidth),minHeight:x(e.minHeight),minWidth:x(e.minWidth),width:x(e.width)}))}}const ke=h({border:[Boolean,Number,String]},"border");function _e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{borderClasses:c(()=>{const n=R(e)?e.value:e.border,i=[];if(n===!0||n==="")i.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const a of String(n).split(" "))i.push(`border-${a}`);return i})}}const xe=h({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function we(e){return{elevationClasses:c(()=>{const s=R(e)?e.value:e.elevation,n=[];return s==null||n.push(`elevation-${s}`),n})}}const Ie=h({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ee(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{roundedClasses:c(()=>{const n=R(e)?e.value:e.rounded,i=[];if(n===!0||n==="")i.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const a of String(n).split(" "))i.push(`rounded-${a}`);return i})}}const Et=[null,"default","comfortable","compact"],Be=h({density:{type:String,default:"default",validator:e=>Et.includes(e)}},"density");function Pe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{densityClasses:c(()=>`${t}--density-${e.density}`)}}const Bt=["elevated","flat","tonal","outlined","text","plain"];function Pt(e,t){return m(et,null,[e&&m("span",{key:"overlay",class:`${t}__overlay`},null),m("span",{key:"underlay",class:`${t}__underlay`},null)])}const Ve=h({color:String,variant:{type:String,default:"elevated",validator:e=>Bt.includes(e)}},"variant");function Vt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();const s=c(()=>{const{variant:a}=ce(e);return`${t}--variant-${a}`}),{colorClasses:n,colorStyles:i}=Z(c(()=>{const{variant:a,color:o}=ce(e);return{[["elevated","flat"].includes(a)?"background":"text"]:o}}));return{colorClasses:n,colorStyles:i,variantClasses:s}}const Te=h({divided:Boolean,...ke(),...W(),...Be(),...xe(),...Ie(),...q(),...G(),...Ve()},"VBtnGroup"),me=P()({name:"VBtnGroup",props:Te(),setup(e,t){let{slots:s}=t;const{themeClasses:n}=H(e),{densityClasses:i}=Pe(e),{borderClasses:a}=_e(e),{elevationClasses:o}=we(e),{roundedClasses:d}=Ee(e);pe({VBtn:{height:"auto",color:I(e,"color"),density:I(e,"density"),flat:!0,variant:I(e,"variant")}}),N(()=>m(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,a.value,i.value,o.value,d.value,e.class],style:e.style},s))}}),Tt=h({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Lt=h({value:null,disabled:Boolean,selectedClass:String},"group-item");function $t(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=M("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=tt();Ce(Symbol.for(`${t.description}:id`),i);const a=nt(t,null);if(!a){if(!s)return a;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const o=I(e,"value"),d=c(()=>!!(a.disabled.value||e.disabled));a.register({id:i,value:o,disabled:d},n),A(()=>{a.unregister(i)});const l=c(()=>a.isSelected(i)),g=c(()=>l.value&&[a.selectedClass.value,e.selectedClass]);return D(l,y=>{n.emit("group:selected",{value:y})}),{id:i,isSelected:l,toggle:()=>a.select(i,!l.value),select:y=>a.select(i,y),selectedClass:g,value:o,disabled:d,group:a}}function Rt(e,t){let s=!1;const n=st([]),i=at(e,"modelValue",[],r=>r==null?[]:Le(n,ot(r)),r=>{const u=zt(n,r);return e.multiple?u:u[0]}),a=M("useGroup");function o(r,u){const b=r,f=Symbol.for(`${t.description}:id`),k=lt(f,a==null?void 0:a.vnode).indexOf(u);k>-1?n.splice(k,0,b):n.push(b)}function d(r){if(s)return;l();const u=n.findIndex(b=>b.id===r);n.splice(u,1)}function l(){const r=n.find(u=>!u.disabled);r&&e.mandatory==="force"&&!i.value.length&&(i.value=[r.id])}it(()=>{l()}),A(()=>{s=!0});function g(r,u){const b=n.find(f=>f.id===r);if(!(u&&(b!=null&&b.disabled)))if(e.multiple){const f=i.value.slice(),S=f.findIndex(v=>v===r),k=~S;if(u=u??!k,k&&e.mandatory&&f.length<=1||!k&&e.max!=null&&f.length+1>e.max)return;S<0&&u?f.push(r):S>=0&&!u&&f.splice(S,1),i.value=f}else{const f=i.value.includes(r);if(e.mandatory&&f)return;i.value=u??!f?[r]:[]}}function y(r){if(e.multiple,i.value.length){const u=i.value[0],b=n.findIndex(k=>k.id===u);let f=(b+r)%n.length,S=n[f];for(;S.disabled&&f!==b;)f=(f+r)%n.length,S=n[f];if(S.disabled)return;i.value=[n[f].id]}else{const u=n.find(b=>!b.disabled);u&&(i.value=[u.id])}}const p={register:o,unregister:d,selected:i,select:g,disabled:I(e,"disabled"),prev:()=>y(n.length-1),next:()=>y(1),isSelected:r=>i.value.includes(r),selectedClass:c(()=>e.selectedClass),items:c(()=>n),getItemIndex:r=>Nt(n,r)};return Ce(t,p),p}function Nt(e,t){const s=Le(e,[t]);return s.length?e.findIndex(n=>n.id===s[0]):-1}function Le(e,t){const s=[];return t.forEach(n=>{const i=e.find(o=>Se(n,o.value)),a=e[n];(i==null?void 0:i.value)!=null?s.push(i.id):a!=null&&s.push(a.id)}),s}function zt(e,t){const s=[];return t.forEach(n=>{const i=e.findIndex(a=>a.id===n);if(~i){const a=e[i];s.push(a.value!=null?a.value:i)}}),s}const $e=Symbol.for("vuetify:v-btn-toggle"),Ot=h({...Te(),...Tt()},"VBtnToggle");P()({name:"VBtnToggle",props:Ot(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;const{isSelected:n,next:i,prev:a,select:o,selected:d}=Rt(e,$e);return N(()=>{const l=me.filterProps(e);return m(me,rt({class:["v-btn-toggle",e.class]},l,{style:e.style}),{default:()=>{var g;return[(g=s.default)==null?void 0:g.call(s,{isSelected:n,next:i,prev:a,select:o,selected:d})]}})}),{next:i,prev:a,select:o}}});function At(e,t){const s=T(),n=ut(!1);if(ct){const i=new IntersectionObserver(a=>{e==null||e(a,i),n.value=!!a.find(o=>o.isIntersecting)},t);A(()=>{i.disconnect()}),D(s,(a,o)=>{o&&(i.unobserve(o),n.value=!1),a&&i.observe(a)},{flush:"post"})}return{intersectionRef:s,isIntersecting:n}}const Dt=h({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...W(),...ee(),...q({tag:"div"}),...G()},"VProgressCircular"),Gt=P()({name:"VProgressCircular",props:Dt(),setup(e,t){let{slots:s}=t;const n=20,i=2*Math.PI*n,a=T(),{themeClasses:o}=H(e),{sizeClasses:d,sizeStyles:l}=te(e),{textColorClasses:g,textColorStyles:y}=K(I(e,"color")),{textColorClasses:p,textColorStyles:r}=K(I(e,"bgColor")),{intersectionRef:u,isIntersecting:b}=At(),{resizeRef:f,contentRect:S}=St(),k=c(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),v=c(()=>Number(e.width)),C=c(()=>l.value?Number(e.size):S.value?S.value.width:Math.max(v.value,32)),V=c(()=>n/(1-v.value/C.value)*2),E=c(()=>v.value/C.value*V.value),j=c(()=>x((100-k.value)/100*i));return dt(()=>{u.value=a.value,f.value=a.value}),N(()=>m(e.tag,{ref:a,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":b.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},o.value,d.value,g.value,e.class],style:[l.value,y.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:k.value},{default:()=>[m("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${V.value} ${V.value}`},[m("circle",{class:["v-progress-circular__underlay",p.value],style:r.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":E.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),m("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":E.value,"stroke-dasharray":i,"stroke-dashoffset":j.value},null)]),s.default&&m("div",{class:"v-progress-circular__content"},[s.default({value:k.value})])]})),{}}}),ge={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Ht=h({location:String},"location");function Mt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=vt();return{locationStyles:c(()=>{if(!e.location)return{};const{side:a,align:o}=Ct(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function d(g){return s?s(g):0}const l={};return a!=="center"&&(t?l[ge[a]]=`calc(100% - ${d(a)}px)`:l[a]=0),o!=="center"?t?l[ge[o]]=`calc(100% - ${d(o)}px)`:l[o]=0:(a==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[a]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[a]),l})}}const Wt=h({loading:[Boolean,String]},"loader");function qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{loaderClasses:c(()=>({[`${t}--loading`]:e.loading}))}}const jt=["static","relative","fixed","absolute","sticky"],Ft=h({position:{type:String,validator:e=>jt.includes(e)}},"position");function Ut(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{positionClasses:c(()=>e.position?`${t}--${e.position}`:void 0)}}function Xt(){const e=M("useRoute");return c(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function un(){var e,t;return(t=(e=M("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function Yt(e,t){const s=ft("RouterLink"),n=c(()=>!!(e.href||e.to)),i=c(()=>(n==null?void 0:n.value)||de(t,"click")||de(e,"click"));if(typeof s=="string")return{isLink:n,isClickable:i,href:I(e,"href")};const a=e.to?s.useLink(e):void 0,o=Xt();return{isLink:n,isClickable:i,route:a==null?void 0:a.route,navigate:a==null?void 0:a.navigate,isActive:a&&c(()=>{var d,l,g;return e.exact?o.value?((g=a.isExactActive)==null?void 0:g.value)&&Se(a.route.value.query,o.value.query):(l=a.isExactActive)==null?void 0:l.value:(d=a.isActive)==null?void 0:d.value}),href:c(()=>e.to?a==null?void 0:a.route.value.href:e.href)}}const Kt=h({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function Jt(e,t){D(()=>{var s;return(s=e.isActive)==null?void 0:s.value},s=>{e.isLink.value&&s&&t&&mt(()=>{t(!0)})},{immediate:!0})}const J=Symbol("rippleStop"),Qt=80;function he(e,t){e.style.transform=t,e.style.webkitTransform=t}function Q(e){return e.constructor.name==="TouchEvent"}function Re(e){return e.constructor.name==="KeyboardEvent"}const Zt=function(e,t){var p;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,i=0;if(!Re(e)){const r=t.getBoundingClientRect(),u=Q(e)?e.touches[e.touches.length-1]:e;n=u.clientX-r.left,i=u.clientY-r.top}let a=0,o=.3;(p=t._ripple)!=null&&p.circle?(o=.15,a=t.clientWidth/2,a=s.center?a:a+Math.sqrt((n-a)**2+(i-a)**2)/4):a=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const d=`${(t.clientWidth-a*2)/2}px`,l=`${(t.clientHeight-a*2)/2}px`,g=s.center?d:`${n-a}px`,y=s.center?l:`${i-a}px`;return{radius:a,scale:o,x:g,y,centerX:d,centerY:l}},O={show(e,t){var u;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((u=t==null?void 0:t._ripple)!=null&&u.enabled))return;const n=document.createElement("span"),i=document.createElement("span");n.appendChild(i),n.className="v-ripple__container",s.class&&(n.className+=` ${s.class}`);const{radius:a,scale:o,x:d,y:l,centerX:g,centerY:y}=Zt(e,t,s),p=`${a*2}px`;i.className="v-ripple__animation",i.style.width=p,i.style.height=p,t.appendChild(n);const r=window.getComputedStyle(t);r&&r.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),he(i,`translate(${d}, ${l}) scale3d(${o},${o},${o})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),he(i,`translate(${g}, ${y}) scale3d(1,1,1)`)},0)},hide(e){var a;if(!((a=e==null?void 0:e._ripple)!=null&&a.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const s=t[t.length-1];if(s.dataset.isHiding)return;s.dataset.isHiding="true";const n=performance.now()-Number(s.dataset.activated),i=Math.max(250-n,0);setTimeout(()=>{s.classList.remove("v-ripple__animation--in"),s.classList.add("v-ripple__animation--out"),setTimeout(()=>{var d;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((d=s.parentNode)==null?void 0:d.parentNode)===e&&e.removeChild(s.parentNode)},300)},i)}};function Ne(e){return typeof e>"u"||!!e}function L(e){const t={},s=e.currentTarget;if(!(!(s!=null&&s._ripple)||s._ripple.touched||e[J])){if(e[J]=!0,Q(e))s._ripple.touched=!0,s._ripple.isTouch=!0;else if(s._ripple.isTouch)return;if(t.center=s._ripple.centered||Re(e),s._ripple.class&&(t.class=s._ripple.class),Q(e)){if(s._ripple.showTimerCommit)return;s._ripple.showTimerCommit=()=>{O.show(e,s,t)},s._ripple.showTimer=window.setTimeout(()=>{var n;(n=s==null?void 0:s._ripple)!=null&&n.showTimerCommit&&(s._ripple.showTimerCommit(),s._ripple.showTimerCommit=null)},Qt)}else O.show(e,s,t)}}function ye(e){e[J]=!0}function _(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{_(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),O.hide(t)}}function ze(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let $=!1;function Oe(e){!$&&(e.keyCode===ve.enter||e.keyCode===ve.space)&&($=!0,L(e))}function Ae(e){$=!1,_(e)}function De(e){$&&($=!1,_(e))}function Ge(e,t,s){const{value:n,modifiers:i}=t,a=Ne(n);if(a||O.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=a,e._ripple.centered=i.center,e._ripple.circle=i.circle,gt(n)&&n.class&&(e._ripple.class=n.class),a&&!s){if(i.stop){e.addEventListener("touchstart",ye,{passive:!0}),e.addEventListener("mousedown",ye);return}e.addEventListener("touchstart",L,{passive:!0}),e.addEventListener("touchend",_,{passive:!0}),e.addEventListener("touchmove",ze,{passive:!0}),e.addEventListener("touchcancel",_),e.addEventListener("mousedown",L),e.addEventListener("mouseup",_),e.addEventListener("mouseleave",_),e.addEventListener("keydown",Oe),e.addEventListener("keyup",Ae),e.addEventListener("blur",De),e.addEventListener("dragstart",_,{passive:!0})}else!a&&s&&He(e)}function He(e){e.removeEventListener("mousedown",L),e.removeEventListener("touchstart",L),e.removeEventListener("touchend",_),e.removeEventListener("touchmove",ze),e.removeEventListener("touchcancel",_),e.removeEventListener("mouseup",_),e.removeEventListener("mouseleave",_),e.removeEventListener("keydown",Oe),e.removeEventListener("keyup",Ae),e.removeEventListener("dragstart",_),e.removeEventListener("blur",De)}function en(e,t){Ge(e,t,!1)}function tn(e){delete e._ripple,He(e)}function nn(e,t){if(t.value===t.oldValue)return;const s=Ne(t.oldValue);Ge(e,t,s)}const sn={mounted:en,unmounted:tn,updated:nn},an=h({active:{type:Boolean,default:void 0},symbol:{type:null,default:$e},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Y,appendIcon:Y,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...ke(),...W(),...Be(),...wt(),...xe(),...Lt(),...Wt(),...Ht(),...Ft(),...Ie(),...Kt(),...ee(),...q({tag:"button"}),...G(),...Ve({variant:"elevated"})},"VBtn"),cn=P()({name:"VBtn",directives:{Ripple:sn},props:an(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:s,slots:n}=t;const{themeClasses:i}=H(e),{borderClasses:a}=_e(e),{colorClasses:o,colorStyles:d,variantClasses:l}=Vt(e),{densityClasses:g}=Pe(e),{dimensionStyles:y}=It(e),{elevationClasses:p}=we(e),{loaderClasses:r}=qt(e),{locationStyles:u}=Mt(e),{positionClasses:b}=Ut(e),{roundedClasses:f}=Ee(e),{sizeClasses:S,sizeStyles:k}=te(e),v=$t(e,e.symbol,!1),C=Yt(e,s),V=c(()=>{var w;return e.active!==void 0?e.active:C.isLink.value?(w=C.isActive)==null?void 0:w.value:v==null?void 0:v.isSelected.value}),E=c(()=>(v==null?void 0:v.disabled.value)||e.disabled),j=c(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),Me=c(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function We(w){var z;E.value||C.isLink.value&&(w.metaKey||w.ctrlKey||w.shiftKey||w.button!==0||s.target==="_blank")||((z=C.navigate)==null||z.call(C,w),v==null||v.toggle())}return Jt(C,v==null?void 0:v.select),N(()=>{var ae,ie;const w=C.isLink.value?"a":e.tag,z=!!(e.prependIcon||n.prepend),qe=!!(e.appendIcon||n.append),ne=!!(e.icon&&e.icon!==!0),se=(v==null?void 0:v.isSelected.value)&&(!C.isLink.value||((ae=C.isActive)==null?void 0:ae.value))||!v||((ie=C.isActive)==null?void 0:ie.value);return ht(m(w,{type:w==="a"?void 0:"button",class:["v-btn",v==null?void 0:v.selectedClass.value,{"v-btn--active":V.value,"v-btn--block":e.block,"v-btn--disabled":E.value,"v-btn--elevated":j.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},i.value,a.value,se?o.value:void 0,g.value,p.value,r.value,b.value,f.value,S.value,l.value,e.class],style:[se?d.value:void 0,y.value,u.value,k.value,e.style],disabled:E.value||void 0,href:C.href.value,onClick:We,value:Me.value},{default:()=>{var oe;return[Pt(!0,"v-btn"),!e.icon&&z&&m("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?m(U,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):m(F,{key:"prepend-icon",icon:e.prependIcon},null)]),m("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&ne?m(F,{key:"content-icon",icon:e.icon},null):m(U,{key:"content-defaults",disabled:!ne,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var le;return[((le=n.default)==null?void 0:le.call(n))??e.text]}})]),!e.icon&&qe&&m("span",{key:"append",class:"v-btn__append"},[n.append?m(U,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):m(F,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&m("span",{key:"loader",class:"v-btn__loader"},[((oe=n.loader)==null?void 0:oe.call(n))??m(Gt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[yt("ripple"),!E.value&&e.ripple,null]])}),{}}});export{sn as R,F as V,It as a,ke as b,xe as c,Ie as d,rn as e,_e as f,we as g,Ee as h,U as i,an as j,cn as k,Be as l,wt as m,ee as n,Ve as o,Vt as p,Pe as q,te as r,Pt as s,Kt as t,St as u,Yt as v,K as w,un as x,fe as y};
