var PixelCat=(()=>{var K=Object.create;var j=Object.defineProperty;var tt=Object.getOwnPropertyDescriptor;var et=Object.getOwnPropertyNames;var nt=Object.getPrototypeOf,rt=Object.prototype.hasOwnProperty;var H=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),ot=(t,e)=>{for(var n in e)j(t,n,{get:e[n],enumerable:!0})},Z=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of et(e))!rt.call(t,o)&&o!==n&&j(t,o,{get:()=>e[o],enumerable:!(r=tt(e,o))||r.enumerable});return t};var it=(t,e,n)=>(n=t!=null?K(nt(t)):{},Z(e||!t||!t.__esModule?j(n,"default",{value:t,enumerable:!0}):n,t)),st=t=>Z(j({},"__esModule",{value:!0}),t);var M=H(i=>{"use strict";var w=Symbol.for("react.transitional.element"),ut=Symbol.for("react.portal"),at=Symbol.for("react.fragment"),ct=Symbol.for("react.strict_mode"),ft=Symbol.for("react.profiler"),pt=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),dt=Symbol.for("react.forward_ref"),gt=Symbol.for("react.suspense"),ht=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),X=Symbol.iterator;function mt(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,F={};function x(t,e,n){this.props=t,this.context=e,this.refs=F,this.updater=n||U}x.prototype.isReactComponent={};x.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};x.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function z(){}z.prototype=x.prototype;function T(t,e,n){this.props=t,this.context=e,this.refs=F,this.updater=n||U}var R=T.prototype=new z;R.constructor=T;$(R,x.prototype);R.isPureReactComponent=!0;var Y=Array.isArray,c={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function N(t,e,n,r,o,a){return n=a.ref,{$$typeof:w,type:t,key:e,ref:n!==void 0?n:null,props:a}}function xt(t,e){return N(t.type,e,void 0,void 0,void 0,t.props)}function L(t){return typeof t=="object"&&t!==null&&t.$$typeof===w}function yt(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var k=/\/+/g;function C(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yt(""+t.key):e.toString(36)}function D(){}function vt(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(D,D):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function m(t,e,n,r,o){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case w:case ut:s=!0;break;case S:return s=t._init,m(s(t._payload),e,n,r,o)}}if(s)return o=o(t),s=r===""?"."+C(t,0):r,Y(o)?(n="",s!=null&&(n=s.replace(k,"$&/")+"/"),m(o,e,n,"",function(y){return y})):o!=null&&(L(o)&&(o=xt(o,n+(o.key==null||t&&t.key===o.key?"":(""+o.key).replace(k,"$&/")+"/")+s)),e.push(o)),1;s=0;var p=r===""?".":r+":";if(Y(t))for(var u=0;u<t.length;u++)r=t[u],a=p+C(r,u),s+=m(r,e,n,a,o);else if(u=mt(t),typeof u=="function")for(t=u.call(t),u=0;!(r=t.next()).done;)r=r.value,a=p+C(r,u++),s+=m(r,e,n,a,o);else if(a==="object"){if(typeof t.then=="function")return m(vt(t),e,n,r,o);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function _(t,e,n){if(t==null)return t;var r=[],o=0;return m(t,r,"","",function(a){return e.call(n,a,o++)}),r}function jt(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var P=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function _t(){}i.Children={map:_,forEach:function(t,e,n){_(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _(t,function(){e++}),e},toArray:function(t){return _(t,function(e){return e})||[]},only:function(t){if(!L(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};i.Component=x;i.Fragment=at;i.Profiler=ft;i.PureComponent=T;i.StrictMode=ct;i.Suspense=gt;i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c;i.act=function(){throw Error("act(...) is not supported in production builds of React.")};i.cache=function(t){return function(){return t.apply(null,arguments)}};i.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var r=$({},t.props),o=t.key,a=void 0;if(e!=null)for(s in e.ref!==void 0&&(a=void 0),e.key!==void 0&&(o=""+e.key),e)!V.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(r[s]=e[s]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var p=Array(s),u=0;u<s;u++)p[u]=arguments[u+2];r.children=p}return N(t.type,o,void 0,void 0,a,r)};i.createContext=function(t){return t={$$typeof:lt,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:pt,_context:t},t};i.createElement=function(t,e,n){var r,o={},a=null;if(e!=null)for(r in e.key!==void 0&&(a=""+e.key),e)V.call(e,r)&&r!=="key"&&r!=="__self"&&r!=="__source"&&(o[r]=e[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var p=Array(s),u=0;u<s;u++)p[u]=arguments[u+2];o.children=p}if(t&&t.defaultProps)for(r in s=t.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return N(t,a,void 0,void 0,null,o)};i.createRef=function(){return{current:null}};i.forwardRef=function(t){return{$$typeof:dt,render:t}};i.isValidElement=L;i.lazy=function(t){return{$$typeof:S,_payload:{_status:-1,_result:t},_init:jt}};i.memo=function(t,e){return{$$typeof:ht,type:t,compare:e===void 0?null:e}};i.startTransition=function(t){var e=c.T,n={};c.T=n;try{var r=t(),o=c.S;o!==null&&o(n,r),typeof r=="object"&&r!==null&&typeof r.then=="function"&&r.then(_t,P)}catch(a){P(a)}finally{c.T=e}};i.unstable_useCacheRefresh=function(){return c.H.useCacheRefresh()};i.use=function(t){return c.H.use(t)};i.useActionState=function(t,e,n){return c.H.useActionState(t,e,n)};i.useCallback=function(t,e){return c.H.useCallback(t,e)};i.useContext=function(t){return c.H.useContext(t)};i.useDebugValue=function(){};i.useDeferredValue=function(t,e){return c.H.useDeferredValue(t,e)};i.useEffect=function(t,e){return c.H.useEffect(t,e)};i.useId=function(){return c.H.useId()};i.useImperativeHandle=function(t,e,n){return c.H.useImperativeHandle(t,e,n)};i.useInsertionEffect=function(t,e){return c.H.useInsertionEffect(t,e)};i.useLayoutEffect=function(t,e){return c.H.useLayoutEffect(t,e)};i.useMemo=function(t,e){return c.H.useMemo(t,e)};i.useOptimistic=function(t,e){return c.H.useOptimistic(t,e)};i.useReducer=function(t,e,n){return c.H.useReducer(t,e,n)};i.useRef=function(t){return c.H.useRef(t)};i.useState=function(t){return c.H.useState(t)};i.useSyncExternalStore=function(t,e,n){return c.H.useSyncExternalStore(t,e,n)};i.useTransition=function(){return c.H.useTransition()};i.version="19.0.0"});var W=H((Xt,A)=>{"use strict";A.exports=M()});var Jt={};ot(Jt,{default:()=>It});var f=it(W(),1);var I="./idle-ZBQRFCXO.gif";var q="./run-WL3JCXXY.gif";var B="./swipe-ZVH2SMOK.gif";var wt={idle:I,chasing:q,eating:B,sleeping:I},J=150,Tt=5,Rt=.03,Nt=()=>{let[t,e]=(0,f.useState)("idle"),[n,r]=(0,f.useState)({x:0,y:0}),[o,a]=(0,f.useState)(0),[s,p]=(0,f.useState)(!1),u=(0,f.useRef)(null),y=(0,f.useRef)({x:window.innerWidth/2,y:0}),d=(0,f.useRef)(),E=(0,f.useCallback)(g=>{if(t==="sleeping"||t==="eating")return;let v=g.clientX,l=window.innerWidth/2;if(Math.abs(v-l)<=J){if(y.current={x:v,y:0},u.current){let h=u.current.getBoundingClientRect(),Q=h.left+h.width/2;p(v<Q)}e("chasing")}else{let h=v>l?l+J:l-J;y.current={x:h,y:0}}},[t]),O=()=>{a(g=>g+1),e("eating"),setTimeout(()=>{e("idle")},2e3)},b=(0,f.useCallback)(()=>{if(!u.current||t==="sleeping"||t==="eating")return;let g=u.current.getBoundingClientRect(),l=y.current.x-(g.left+g.width/2);Math.abs(l)>Tt?r(h=>({x:h.x+l*Rt,y:0})):t==="chasing"&&e("idle"),d.current=requestAnimationFrame(b)},[t]);return(0,f.useEffect)(()=>(window.addEventListener("mousemove",E),()=>{window.removeEventListener("mousemove",E),d.current&&cancelAnimationFrame(d.current)}),[E]),(0,f.useEffect)(()=>(t==="chasing"&&(d.current=requestAnimationFrame(b)),()=>{d.current&&cancelAnimationFrame(d.current)}),[t,b]),React.createElement("div",{ref:u,className:`pixel-cat ${t} ${s?"facing-left":""}`,style:{transform:`translate(calc(-50% + ${n.x}px), 0)`},onClick:O},React.createElement("img",{src:wt[t],alt:"Pixel Cat",className:"cat-sprite"}),o>0&&React.createElement("div",{className:"treats-count"},"\u{1F363} \xD7 ",o))},Lt=t=>{let e=document.createElement("div");e.id="pixel-cat-root",t.appendChild(e);let n=document.createElement("style");n.textContent=`
    .pixel-cat {
      position: fixed;
      left: 50%;
      bottom: 100px;
      width: 48px;
      height: 48px;
      cursor: pointer;
      z-index: 1000;
      image-rendering: pixelated;
      transform: translateX(-50%);
      will-change: transform;
    }

    .cat-sprite {
      width: 100%;
      height: 100%;
      object-fit: contain;
      pointer-events: none;
      image-rendering: pixelated;
    }

    .facing-left .cat-sprite {
      transform: scaleX(-1);
    }

    .treats-count {
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 14px;
      background-color: rgba(255, 255, 255, 0.9);
      padding: 2px 6px;
      border-radius: 10px;
      white-space: nowrap;
      pointer-events: none;
    }

    .pixel-cat::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 10%;
      width: 80%;
      height: 10px;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      filter: blur(3px);
      pointer-events: none;
    }
  `,document.head.appendChild(n);let r=document.getElementById("pixel-cat-root");r&&window.ReactDOM.render(React.createElement(Nt,null),r)},It=Lt;return st(Jt);})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
