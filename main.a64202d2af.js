/* See third-party-licenses.txt for licenses of any bundled software. */
(()=>{"use strict";var e,t,n,r={6570:(e,t,n)=>{var r=n(3696),a=n(7470),o=n(46),i=n.n(o);const c="bubblePastDay",s="bubbleToday",l="bubbleSelected",u="bubbleNotSelected",d="bubbleDisabledDay";var f=n(2540);function p(){const e=new Date;e.setHours(0,0,0,0),e.setDate(e.getDate()+2);const[t,n]=(0,r.useState)(e),a=new Date;a.setDate(1),a.setHours(0,0,0,0);const[o,p]=(0,r.useState)(a);return(0,f.jsx)("div",{className:"center","data-testid":"app-container",children:(0,f.jsx)(i(),{selected:t,onChange:function(e){let r;if(null===e)r=new Date;else{const n=new Date(o);n.setMonth(o.getMonth()+1),r=e<o||e>=n?t:e}r.setHours(0,0,0,0),n(r)},dayClassName:function(e){const n=new Date;n.setHours(0,0,0,0);const r=new Date(n);if(r.setDate(n.getDate()+1),e<o)return d;if(e<n)return c;if(e<r)return e.getTime()===t.getTime()?l:s;if(e>=r){const n=new Date(o);return n.setMonth(o.getMonth()+1),e>=n?d:e.getTime()===t.getTime()?l:u}return u},renderDayContents:function(e,t){return t.getMonth()!==o.getMonth()?null:e},minDate:new Date,onMonthChange:function(e){const t=new Date(e);t.setDate(1),t.setHours(0,0,0,0),p(t)},renderCustomHeader:function(e){return(0,f.jsxs)("div",{children:[e.prevMonthButtonDisabled?null:(0,f.jsx)("button",{className:"react-datepicker__navigation react-datepicker__navigation--previous",onClick:e.decreaseMonth,children:(0,f.jsx)("span",{className:"react-datepicker__navigation-icon react-datepicker__navigation-icon--previous",children:"<"})}),(0,f.jsxs)("span",{className:"react-datepicker__current-month","data-testid":"month-header",children:[e.monthDate.toLocaleString("en-US",{month:"short",year:"numeric"})," "]}),e.nextMonthButtonDisabled?null:(0,f.jsx)("button",{className:"react-datepicker__navigation react-datepicker__navigation--next",onClick:e.increaseMonth,children:(0,f.jsx)("span",{className:"react-datepicker__navigation-icon react-datepicker__navigation-icon--next",children:">"})})]})},inline:!0})})}const b=document.createElement("div");document.body.appendChild(b);a.createRoot(b).render((0,f.jsx)(r.StrictMode,{children:(0,f.jsx)(p,{})}))}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return r[e].call(n.exports,n,n.exports,o),n.exports}o.m=r,e=[],o.O=(t,n,r,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,r,a]=e[u],c=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var a=Object.create(null);o.r(a);var i={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,o.d(a,i),a},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[i,c,s]=n,l=0;if(i.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(s)var u=s(o)}for(t&&t(n);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=globalThis.webpackChunk=globalThis.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[552],(()=>o(6570)));i=o.O(i)})();