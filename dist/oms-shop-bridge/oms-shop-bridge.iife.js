/**
 * name: oms-shop-bridge
 * version: v0.1.0
 */
var cn=Object.defineProperty;var un=(y,w,E)=>w in y?cn(y,w,{enumerable:!0,configurable:!0,writable:!0,value:E}):y[w]=E;var q=(y,w,E)=>(un(y,typeof w!="symbol"?w+"":w,E),E),pe=(y,w,E)=>{if(!w.has(y))throw TypeError("Cannot "+E)};var T=(y,w,E)=>(pe(y,w,"read from private field"),E?E.call(y):w.get(y)),me=(y,w,E)=>{if(w.has(y))throw TypeError("Cannot add the same private member more than once");w instanceof WeakSet?w.add(y):w.set(y,E)},M=(y,w,E,U)=>(pe(y,w,"write to private field"),U?U.call(y,E):w.set(y,E),E);var z=(y,w,E)=>(pe(y,w,"access private method"),E);var OmsShopBridge=function(){var S,L,J;"use strict";function y(e,t){return function(){return e.apply(t,arguments)}}const{toString:w}=Object.prototype,{getPrototypeOf:E}=Object,U=(e=>t=>{const n=w.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),C=e=>(e=e.toLowerCase(),t=>U(t)===e),V=e=>t=>typeof t===e,{isArray:D}=Array,k=V("undefined");function Ge(e){return e!==null&&!k(e)&&e.constructor!==null&&!k(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ye=C("ArrayBuffer");function Xe(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ye(e.buffer),t}const Qe=V("string"),x=V("function"),we=V("number"),W=e=>e!==null&&typeof e=="object",Ze=e=>e===!0||e===!1,K=e=>{if(U(e)!=="object")return!1;const t=E(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ye=C("Date"),et=C("File"),tt=C("Blob"),nt=C("FileList"),rt=e=>W(e)&&x(e.pipe),st=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||x(e.append)&&((t=U(e))==="formdata"||t==="object"&&x(e.toString)&&e.toString()==="[object FormData]"))},ot=C("URLSearchParams"),it=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function I(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),D(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Ee(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const be=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Se=e=>!k(e)&&e!==be;function Y(){const{caseless:e}=Se(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ee(t,s)||s;K(t[o])&&K(r)?t[o]=Y(t[o],r):K(r)?t[o]=Y({},r):D(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&I(arguments[r],n);return t}const at=(e,t,n,{allOwnKeys:r}={})=>(I(t,(s,o)=>{n&&x(s)?e[o]=y(s,n):e[o]=s},{allOwnKeys:r}),e),ct=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ut=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},lt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&E(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ft=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},dt=e=>{if(!e)return null;if(D(e))return e;let t=e.length;if(!we(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ht=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&E(Uint8Array)),pt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},mt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},yt=C("HTMLFormElement"),wt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ae=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Et=C("RegExp"),Re=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},bt=e=>{Re(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(x(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},St=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return D(e)?r(e):r(String(e).split(t)),n},At=()=>{},Rt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ee="abcdefghijklmnopqrstuvwxyz",Oe="0123456789",Te={DIGIT:Oe,ALPHA:ee,ALPHA_DIGIT:ee+ee.toUpperCase()+Oe},Ot=(e=16,t=Te.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Tt(e){return!!(e&&x(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const xt=e=>{const t=new Array(10),n=(r,s)=>{if(W(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=D(r)?[]:{};return I(r,(i,c)=>{const h=n(i,s+1);!k(h)&&(o[c]=h)}),t[s]=void 0,o}}return r};return n(e,0)},gt=C("AsyncFunction"),a={isArray:D,isArrayBuffer:ye,isBuffer:Ge,isFormData:st,isArrayBufferView:Xe,isString:Qe,isNumber:we,isBoolean:Ze,isObject:W,isPlainObject:K,isUndefined:k,isDate:Ye,isFile:et,isBlob:tt,isRegExp:Et,isFunction:x,isStream:rt,isURLSearchParams:ot,isTypedArray:ht,isFileList:nt,forEach:I,merge:Y,extend:at,trim:it,stripBOM:ct,inherits:ut,toFlatObject:lt,kindOf:U,kindOfTest:C,endsWith:ft,toArray:dt,forEachEntry:pt,matchAll:mt,isHTMLForm:yt,hasOwnProperty:Ae,hasOwnProp:Ae,reduceDescriptors:Re,freezeMethods:bt,toObjectSet:St,toCamelCase:wt,noop:At,toFiniteNumber:Rt,findKey:Ee,global:be,isContextDefined:Se,ALPHABET:Te,generateString:Ot,isSpecCompliantForm:Tt,toJSONObject:xt,isAsyncFn:gt,isThenable:e=>e&&(W(e)||x(e))&&x(e.then)&&x(e.catch)};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const xe=m.prototype,ge={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ge[e]={value:e}}),Object.defineProperties(m,ge),Object.defineProperty(xe,"isAxiosError",{value:!0}),m.from=(e,t,n,r,s,o)=>{const i=Object.create(xe);return a.toFlatObject(e,i,function(h){return h!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Ct=null;function te(e){return a.isPlainObject(e)||a.isArray(e)}function Ce(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Pe(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ce(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Pt(e){return a.isArray(e)&&!e.some(te)}const Nt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function v(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,R){return!a.isUndefined(R[d])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,h=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function p(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!h&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?h&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,d,R){let O=f;if(f&&!R&&typeof f=="object"){if(a.endsWith(d,"{}"))d=r?d:d.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Pt(f)||(a.isFileList(f)||a.endsWith(d,"[]"))&&(O=a.toArray(f)))return d=Ce(d),O.forEach(function(F,an){!(a.isUndefined(F)||F===null)&&t.append(i===!0?Pe([d],an,o):i===null?d:d+"[]",p(F))}),!1}return te(f)?!0:(t.append(Pe(R,d,o),p(f)),!1)}const u=[],A=Object.assign(Nt,{defaultVisitor:l,convertValue:p,isVisitable:te});function g(f,d){if(!a.isUndefined(f)){if(u.indexOf(f)!==-1)throw Error("Circular reference detected in "+d.join("."));u.push(f),a.forEach(f,function(O,B){(!(a.isUndefined(O)||O===null)&&s.call(t,O,a.isString(B)?B.trim():B,d,A))===!0&&g(O,d?d.concat(B):[B])}),u.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Ne(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ne(e,t){this._pairs=[],e&&v(e,this,t)}const _e=ne.prototype;_e.append=function(t,n){this._pairs.push([t,n])},_e.toString=function(t){const n=t?function(r){return t.call(this,r,Ne)}:Ne;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function _t(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Be(e,t,n){if(!t)return e;const r=n&&n.encode||_t,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ne(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Bt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Fe=Bt,Ue={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ft={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<"u"?URLSearchParams:ne,FormData:typeof FormData<"u"?FormData:null,Blob:typeof Blob<"u"?Blob:null},protocols:["http","https","file","blob","url","data"]},Le=typeof window<"u"&&typeof document<"u",Ut=(e=>Le&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Lt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),P={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Le,hasStandardBrowserEnv:Ut,hasStandardBrowserWebWorkerEnv:Lt},Symbol.toStringTag,{value:"Module"})),...Ft};function Dt(e,t){return v(e,new P.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return P.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function jt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function kt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function De(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),h=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,h?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=kt(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(jt(r),s,n,0)}),n}return null}function It(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const re={transitional:Ue,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(De(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Dt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return v(c?{"files[]":t}:t,h&&new h,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),It(t)):t}],transformResponse:[function(t){const n=this.transitional||re.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:P.classes.FormData,Blob:P.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{re.headers[e]={}});const se=re,Ht=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),$t=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Ht[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},je=Symbol("internals");function H(e){return e&&String(e).trim().toLowerCase()}function G(e){return e===!1||e==null?e:a.isArray(e)?e.map(G):String(e)}function qt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Mt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function oe(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function zt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Jt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}let X=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,h,p){const l=H(h);if(!l)throw new Error("header name must be a non-empty string");const u=a.findKey(s,l);(!u||s[u]===void 0||p===!0||p===void 0&&s[u]!==!1)&&(s[u||h]=G(c))}const i=(c,h)=>a.forEach(c,(p,l)=>o(p,l,h));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Mt(t)?i($t(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=H(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return qt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=H(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||oe(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=H(i),i){const c=a.findKey(r,i);c&&(!n||oe(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||oe(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=G(s),delete n[o];return}const c=t?zt(o):String(o).trim();c!==o&&delete n[o],n[c]=G(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[je]=this[je]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=H(i);r[c]||(Jt(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}};X.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),a.reduceDescriptors(X.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}}),a.freezeMethods(X);const N=X;function ie(e,t){const n=this||se,r=t||n,s=N.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ke(e){return!!(e&&e.__CANCEL__)}function $(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits($,m,{__CANCEL__:!0});function Vt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Wt=P.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Kt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function vt(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ie(e,t){return e&&!Kt(t)?vt(e,t):t}const Gt=P.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Xt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Qt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(h){const p=Date.now(),l=r[o];i||(i=p),n[s]=h,r[s]=p;let u=o,A=0;for(;u!==s;)A+=n[u++],u=u%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),p-i<t)return;const g=l&&p-l;return g?Math.round(A*1e3/g):void 0}}function He(e,t){let n=0;const r=Qt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,h=r(c),p=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:h||void 0,estimated:h&&i&&p?(i-o)/h:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const ae={http:Ct,xhr:typeof XMLHttpRequest<"u"&&function(e){return new Promise(function(n,r){let s=e.data;const o=N.from(e.headers).normalize();let{responseType:i,withXSRFToken:c}=e,h;function p(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}let l;if(a.isFormData(s)){if(P.hasStandardBrowserEnv||P.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((l=o.getContentType())!==!1){const[d,...R]=l?l.split(";").map(O=>O.trim()).filter(Boolean):[];o.setContentType([d||"multipart/form-data",...R].join("; "))}}let u=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",R=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(d+":"+R))}const A=Ie(e.baseURL,e.url);u.open(e.method.toUpperCase(),Be(A,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function g(){if(!u)return;const d=N.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),O={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:d,config:e,request:u};Vt(function(F){n(F),p()},function(F){r(F),p()},O),u=null}if("onloadend"in u?u.onloadend=g:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(g)},u.onabort=function(){u&&(r(new m("Request aborted",m.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let R=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const O=e.transitional||Ue;e.timeoutErrorMessage&&(R=e.timeoutErrorMessage),r(new m(R,O.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,u)),u=null},P.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&Gt(A))){const d=e.xsrfHeaderName&&e.xsrfCookieName&&Wt.read(e.xsrfCookieName);d&&o.set(e.xsrfHeaderName,d)}s===void 0&&o.setContentType(null),"setRequestHeader"in u&&a.forEach(o.toJSON(),function(R,O){u.setRequestHeader(O,R)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",He(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",He(e.onUploadProgress)),(e.cancelToken||e.signal)&&(h=d=>{u&&(r(!d||d.type?new $(null,e,u):d),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h)));const f=Xt(A);if(f&&P.protocols.indexOf(f)===-1){r(new m("Unsupported protocol "+f+":",m.ERR_BAD_REQUEST,e));return}u.send(s||null)})}};a.forEach(ae,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const $e=e=>`- ${e}`,Zt=e=>a.isFunction(e)||e===null||e===!1,qe={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Zt(n)&&(r=ae[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,h])=>`adapter ${c} `+(h===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map($e).join(`
`):" "+$e(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ae};function ce(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new $(null,e)}function Me(e){return ce(e),e.headers=N.from(e.headers),e.data=ie.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),qe.getAdapter(e.adapter||se.adapter)(e).then(function(r){return ce(e),r.data=ie.call(e,e.transformResponse,r),r.headers=N.from(r.headers),r},function(r){return ke(r)||(ce(e),r&&r.response&&(r.response.data=ie.call(e,e.transformResponse,r.response),r.response.headers=N.from(r.response.headers))),Promise.reject(r)})}const ze=e=>e instanceof N?e.toJSON():e;function j(e,t){t=t||{};const n={};function r(p,l,u){return a.isPlainObject(p)&&a.isPlainObject(l)?a.merge.call({caseless:u},p,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(p,l,u){if(a.isUndefined(l)){if(!a.isUndefined(p))return r(void 0,p,u)}else return r(p,l,u)}function o(p,l){if(!a.isUndefined(l))return r(void 0,l)}function i(p,l){if(a.isUndefined(l)){if(!a.isUndefined(p))return r(void 0,p)}else return r(void 0,l)}function c(p,l,u){if(u in t)return r(p,l);if(u in e)return r(void 0,p)}const h={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(p,l)=>s(ze(p),ze(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const u=h[l]||s,A=u(e[l],t[l],l);a.isUndefined(A)&&u!==c||(n[l]=A)}),n}const Je="1.6.5",ue={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ue[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ve={};ue.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Je+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ve[i]&&(Ve[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Yt(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],h=c===void 0||i(c,o,e);if(h!==!0)throw new m("option "+o+" must be "+h,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const le={assertOptions:Yt,validators:ue},_=le.validators;let Q=class{constructor(t){this.defaults=t,this.interceptors={request:new Fe,response:new Fe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=j(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&le.assertOptions(r,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:le.assertOptions(s,{encode:_.function,serialize:_.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=N.concat(i,o);const c=[];let h=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(n)===!1||(h=h&&d.synchronous,c.unshift(d.fulfilled,d.rejected))});const p=[];this.interceptors.response.forEach(function(d){p.push(d.fulfilled,d.rejected)});let l,u=0,A;if(!h){const f=[Me.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,p),A=f.length,l=Promise.resolve(n);u<A;)l=l.then(f[u++],f[u++]);return l}A=c.length;let g=n;for(u=0;u<A;){const f=c[u++],d=c[u++];try{g=f(g)}catch(R){d.call(this,R);break}}try{l=Me.call(this,g)}catch(f){return Promise.reject(f)}for(u=0,A=p.length;u<A;)l=l.then(p[u++],p[u++]);return l}getUri(t){t=j(this.defaults,t);const n=Ie(t.baseURL,t.url);return Be(n,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){Q.prototype[t]=function(n,r){return this.request(j(r||{},{method:t,url:n,data:(r||{}).data}))}}),a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(j(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}Q.prototype[t]=n(),Q.prototype[t+"Form"]=n(!0)});const Z=Q,en=class ve{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new $(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ve(function(s){t=s}),cancel:t}}};function tn(e){return function(n){return e.apply(null,n)}}function nn(e){return a.isObject(e)&&e.isAxiosError===!0}const fe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(fe).forEach(([e,t])=>{fe[t]=e});const rn=fe;function We(e){const t=new Z(e),n=y(Z.prototype.request,t);return a.extend(n,Z.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return We(j(e,s))},n}const b=We(se);b.Axios=Z,b.CanceledError=$,b.CancelToken=en,b.isCancel=ke,b.VERSION=Je,b.toFormData=v,b.AxiosError=m,b.Cancel=b.CanceledError,b.all=function(t){return Promise.all(t)},b.spread=tn,b.isAxiosError=nn,b.mergeConfig=j,b.AxiosHeaders=N,b.formToJSON=e=>De(a.isHTMLForm(e)?new FormData(e):e),b.getAdapter=qe.getAdapter,b.HttpStatusCode=rn,b.default=b;const de=b,{Axios:En,AxiosError:bn,CanceledError:Sn,isCancel:An,CancelToken:Rn,VERSION:On,all:Tn,Cancel:xn,isAxiosError:Ke,spread:gn,toFormData:Cn,AxiosHeaders:Pn,HttpStatusCode:Nn,formToJSON:_n,getAdapter:Bn,mergeConfig:Fn}=de;function sn(e){const t=new TextDecoder,n=window.atob(e),r=new Uint8Array(new ArrayBuffer(n.length));for(let s=0;s<n.length;s+=1)r[s]=n.charCodeAt(s);return JSON.parse(t.decode(r))}function on(e){const n=new TextEncoder().encode(JSON.stringify(e));let r="";for(let s=0;s<n.byteLength;s+=1)r+=String.fromCharCode(n[s]);return window.btoa(r)}class he{constructor(){me(this,L);q(this,"c3AxiosInstance");me(this,S,null);q(this,"onC3ApiFulfilledBeforeRequest",async t=>(T(this,S)===null?t.headers.Authorization="Bearer "+await z(this,L,J).call(this):t.headers.Authorization="Bearer "+T(this,S),t));q(this,"onC3ApiFulfilledAfterResponse",async t=>t);q(this,"onC3ApiRejectedAfterResponse",async t=>{if(Ke(t)&&typeof t.config<"u"){const n=t.config;return M(this,S,await z(this,L,J).call(this)),typeof n.__retried>"u"?(n.__retried=!0,n.headers.Authorization="Bearer "+await z(this,L,J).call(this,!0),n.data=sn(n.data),this.c3AxiosInstance.request(n)):t.response}return console.error("Unexpected error on FO Shop Service",t),Promise.reject(t)});M(this,S,null),this.c3AxiosInstance=de.create({baseURL:new URL("/ajax",window.origin).href,headers:{Authorization:T(this,S)===null?void 0:`Bearer ${T(this,S)}`},method:"POST",transformRequest:[on],validateStatus:t=>t!==403}),this.c3AxiosInstance.interceptors.request.use(this.onC3ApiFulfilledBeforeRequest),this.c3AxiosInstance.interceptors.response.use(this.onC3ApiFulfilledAfterResponse,this.onC3ApiRejectedAfterResponse),z(this,L,J).call(this)}get(...t){const n=new URLSearchParams;return n.set("path",t[0]),this.c3AxiosInstance.post("/oms/OMS_shop_bridge.cm?"+n.toString(),{method:"GET",path:t[0],headers:{Authorization:T(this,S)===null?void 0:`Bearer ${T(this,S)}`}},{...t[1],headers:{"Content-Type":"text/plain"}})}post(...t){const n=new URLSearchParams;return n.set("path",t[0]),this.c3AxiosInstance.post("/oms/OMS_shop_bridge.cm?"+n.toString(),{method:"POST",path:t[0],headers:{Authorization:T(this,S)===null?void 0:`Bearer ${T(this,S)}`},body:t[1]},{...t[2],headers:{"Content-Type":"text/plain"}})}patch(...t){const n=new URLSearchParams;return n.set("path",t[0]),this.c3AxiosInstance.post("/oms/OMS_shop_bridge.cm?"+n.toString(),{method:"PATCH",path:t[0],headers:{Authorization:T(this,S)===null?void 0:`Bearer ${T(this,S)}`},body:t[1]},{...t[2],headers:{"Content-Type":"text/plain"}})}delete(...t){const n=new URLSearchParams;return n.set("path",t[0]),this.c3AxiosInstance.post("/oms/OMS_shop_bridge.cm?"+n.toString(),{method:"DELETE",path:t[0],headers:{Authorization:T(this,S)===null?void 0:`Bearer ${T(this,S)}`},body:t[1]},{...t[2],headers:{"Content-Type":"text/plain"}})}}return S=new WeakMap,L=new WeakSet,J=async function(t=!0){try{const n=await de.get("/ajax/oms/OMS_auth.cm",{withCredentials:!0});if(n.data.msg!=="SUCCESS"||typeof n.data.token!="string")throw new Error("AuthenticationException");return t&&M(this,S,n.data.token),n.data.token}catch(n){return Ke(n)?console.warn("AxiosException: "+n.message+" on C3"):n instanceof Error&&(n.message==="AuthenticationException"&&console.warn("AuthenticationException on C3"),console.warn("UnknownException on C3")),M(this,S,null),null}},window.omsShopBridge=window.omsShopBridge||new he,window.OmsShopBridge=window.OmsShopBridge||he,he}();