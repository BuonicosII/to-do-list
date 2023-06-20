(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,"body {\n    display: grid;\n    grid-template-rows: 6vh auto;\n    grid-template-columns: 12vw auto;\n    height: 100vh;\n    margin: 0;\n}\n\n#header {\n    background-color: blue;\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n#leftShoulder {\n    background-color: brown;\n    grid-row-start: 2;\n}\n\n#mainBody {\n    background-color: greenyellow;\n    grid-row-start: 2;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}",""]);const u=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var d=this[u][0];null!=d&&(i[d]=!0)}for(var l=0;l<t.length;l++){var s=[].concat(t[l]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),e.push(s))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],u=0;u<t.length;u++){var d=t[u],l=r.base?d[0]+r.base:d[0],s=o[l]||0,c="".concat(l," ").concat(s);o[l]=s+1;var m=n(c),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(h);else{var f=a(h,r);r.byIndex=u,e.splice(u,0,{identifier:c,updater:f,references:1})}i.push(c)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var u=n(o[i]);e[u].references--}for(var d=r(t,a),l=0;l<o.length;l++){var s=n(o[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}o=d}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),o=n(569),i=n.n(o),u=n(565),d=n.n(u),l=n(216),s=n.n(l),c=n(589),m=n.n(c),h=n(426),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=s(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;class p{constructor(t,e,n,r,a){this.title=t,this.description=e,this.dueDate=new Date(n),this.priority=r,this.project=a}set setTitle(t){this.title=t}set setDescription(t){this.description=t}set setDueDate(t){this.dueDate=t}set setPriority(t){this.priority=t}set setProject(t){this.project=t}}const g=[],v=[];let b;const w=new p("Ghost Walking","A Lamb of God song","2011-12-06",1,"Resolution"),y=new p("The Undertow","Another Lamb of God song","2012-01-24",2,"Resolution"),C=new p("Deutschland","A Rammstein song","2019-01-03",3,"Rammstein"),T=new Array;Object.defineProperty(T,"id",{value:"Resolution"});const x=new Array;function E(t){t.preventDefault();let e,n=document.getElementById("title").value,r=document.getElementById("description").value,a=document.getElementById("dueDate").value,o=document.getElementById("priority").value;e=void 0===b?document.getElementById("projectSelection").value:b;const i=new p(n,r,a,o,e);g.push(i),-1!==v.findIndex((t=>t.id===`${e}`))&&v.find((t=>t.id===`${e}`)).push(i)}function M(t){t.preventDefault();let e=document.getElementById("projectTitle").value;e=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase();const n=new Array;Object.defineProperty(n,"id",{value:e}),v.push(n),console.log(v)}function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function k(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function S(t){k(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===D(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function P(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function A(t){k(1,arguments);var e=S(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function U(t){k(1,arguments);var e=S(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=A(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=A(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}Object.defineProperty(x,"id",{value:"Rammstein"}),g.push(w,y,C),T.push(w,y),x.push(C),v.push(T,x);var W={};function j(){return W}function N(t,e){var n,r,a,o,i,u,d,l;k(1,arguments);var s=j(),c=P(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.weekStartsOn)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:s.weekStartsOn)&&void 0!==r?r:null===(d=s.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==n?n:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=S(t),h=m.getUTCDay(),f=(h<c?7:0)+h-c;return m.setUTCDate(m.getUTCDate()-f),m.setUTCHours(0,0,0,0),m}function Y(t,e){var n,r,a,o,i,u,d,l;k(1,arguments);var s=S(t),c=s.getUTCFullYear(),m=j(),h=P(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:m.firstWeekContainsDate)&&void 0!==r?r:null===(d=m.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==n?n:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=new Date(0);f.setUTCFullYear(c+1,0,h),f.setUTCHours(0,0,0,0);var p=N(f,e),g=new Date(0);g.setUTCFullYear(c,0,h),g.setUTCHours(0,0,0,0);var v=N(g,e);return s.getTime()>=p.getTime()?c+1:s.getTime()>=v.getTime()?c:c-1}function O(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const L=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return O("yy"===e?r%100:r,e.length)},q=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):O(n+1,2)},B=function(t,e){return O(t.getUTCDate(),e.length)},F=function(t,e){return O(t.getUTCHours()%12||12,e.length)},H=function(t,e){return O(t.getUTCHours(),e.length)},I=function(t,e){return O(t.getUTCMinutes(),e.length)},R=function(t,e){return O(t.getUTCSeconds(),e.length)},z=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return O(Math.floor(r*Math.pow(10,n-3)),e.length)};var G={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return L(t,e)},Y:function(t,e,n,r){var a=Y(t,r),o=a>0?a:1-a;return"YY"===e?O(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):O(o,e.length)},R:function(t,e){return O(U(t),e.length)},u:function(t,e){return O(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return O(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return O(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return q(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return O(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){k(1,arguments);var n=S(t),r=N(n,e).getTime()-function(t,e){var n,r,a,o,i,u,d,l;k(1,arguments);var s=j(),c=P(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:s.firstWeekContainsDate)&&void 0!==r?r:null===(d=s.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==n?n:1),m=Y(t,e),h=new Date(0);return h.setUTCFullYear(m,0,c),h.setUTCHours(0,0,0,0),N(h,e)}(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):O(a,e.length)},I:function(t,e,n){var r=function(t){k(1,arguments);var e=S(t),n=A(e).getTime()-function(t){k(1,arguments);var e=U(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),A(n)}(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):O(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):B(t,e)},D:function(t,e,n){var r=function(t){k(1,arguments);var e=S(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):O(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return O(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return O(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return O(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return F(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):O(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):O(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):I(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):R(t,e)},S:function(t,e){return z(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return X(a);case"XXXX":case"XX":return J(a);default:return J(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return X(a);case"xxxx":case"xx":return J(a);default:return J(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Q(a,":");default:return"GMT"+J(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Q(a,":");default:return"GMT"+J(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return O(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return O((r._originalDate||t).getTime(),e.length)}};function Q(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+O(o,2)}function X(t,e){return t%60==0?(t>0?"-":"+")+O(Math.abs(t)/60,2):J(t,e)}function J(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+O(Math.floor(a/60),2)+n+O(a%60,2)}const $=G;var _=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},Z=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const V={p:Z,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return _(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",_(a,e)).replace("{{time}}",Z(o,e))}};var K=["D","DD"],tt=["YY","YYYY"];function et(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var nt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function rt(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const at={date:rt({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:rt({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:rt({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var ot={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function it(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const ut={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:it({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:it({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:it({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:it({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:it({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function dt(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],d=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(d);return i=t.valueCallback?t.valueCallback(l):l,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(u.length)}}}var lt,st={ordinalNumber:(lt={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(lt.matchPattern);if(!n)return null;var r=n[0],a=t.match(lt.parsePattern);if(!a)return null;var o=lt.valueCallback?lt.valueCallback(a[0]):a[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:dt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:dt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:dt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:dt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:dt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const ct={code:"en-US",formatDistance:function(t,e,n){var r,a=nt[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:at,formatRelative:function(t,e,n,r){return ot[t]},localize:ut,match:st,options:{weekStartsOn:0,firstWeekContainsDate:1}};var mt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ht=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ft=/^'([^]*?)'?$/,pt=/''/g,gt=/[a-zA-Z]/;function vt(t,e,n){var r,a,o,i,u,d,l,s,c,m,h,f,p,g,v,b,w,y;k(2,arguments);var C=String(e),T=j(),x=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:T.locale)&&void 0!==r?r:ct,E=P(null!==(o=null!==(i=null!==(u=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(l=n.locale)||void 0===l||null===(s=l.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==u?u:T.firstWeekContainsDate)&&void 0!==i?i:null===(c=T.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==o?o:1);if(!(E>=1&&E<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var M=P(null!==(h=null!==(f=null!==(p=null!==(g=null==n?void 0:n.weekStartsOn)&&void 0!==g?g:null==n||null===(v=n.locale)||void 0===v||null===(b=v.options)||void 0===b?void 0:b.weekStartsOn)&&void 0!==p?p:T.weekStartsOn)&&void 0!==f?f:null===(w=T.locale)||void 0===w||null===(y=w.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==h?h:0);if(!(M>=0&&M<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!x.localize)throw new RangeError("locale must contain localize property");if(!x.formatLong)throw new RangeError("locale must contain formatLong property");var A=S(t);if(!function(t){if(k(1,arguments),!function(t){return k(1,arguments),t instanceof Date||"object"===D(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=S(t);return!isNaN(Number(e))}(A))throw new RangeError("Invalid time value");var U=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(A),W=function(t,e){return k(2,arguments),function(t,e){k(2,arguments);var n=S(t).getTime(),r=P(e);return new Date(n+r)}(t,-P(e))}(A,U),N={firstWeekContainsDate:E,weekStartsOn:M,locale:x,_originalDate:A};return C.match(ht).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,V[e])(t,x.formatLong):t})).join("").match(mt).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(ft))?o[1].replace(pt,"'"):a;var u,d=$[i];if(d)return null!=n&&n.useAdditionalWeekYearTokens||(u=r,-1===tt.indexOf(u))||et(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return-1!==K.indexOf(t)}(r)||et(r,e,String(t)),d(W,r,x.localize,N);if(i.match(gt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}function bt(){let t=document.getElementById("mainBody");for(;t.hasChildNodes();)t.removeChild(t.firstChild);let e=document.createElement("form");e.setAttribute("action",""),e.setAttribute("id","toDoForm");let n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("id","title"),n.setAttribute("name","title"),n.required=!0;let r=document.createElement("label");r.setAttribute("for","title"),r.textContent="Title";let a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("id","description"),a.setAttribute("name","description");let o=document.createElement("label");o.setAttribute("for","description"),o.textContent="Description";let i=document.createElement("input");i.setAttribute("type","date"),i.setAttribute("id","dueDate"),i.setAttribute("name","dueDate"),i.required=!0;let u=document.createElement("label");u.setAttribute("for","dueDate"),u.textContent="Due Date";let d=document.createElement("select");d.setAttribute("id","priority"),d.required=!0;let l=document.createElement("label");l.setAttribute("for","priority"),l.textContent="Priority";let s=document.createElement("option");s.setAttribute("value","1"),s.textContent="High";let c=document.createElement("option");c.setAttribute("value","2"),c.textContent="Medium";let m=document.createElement("option");m.setAttribute("value","3"),m.textContent="Low",d.appendChild(s),d.appendChild(c),d.appendChild(m);let h=document.createElement("button");if(h.setAttribute("type","submit"),h.setAttribute("id","submitButton"),h.setAttribute("form","toDoForm"),h.textContent="Add",h.addEventListener("click",E),h.addEventListener("click",(()=>{void 0!==b?xt():yt()})),t.appendChild(e),e.appendChild(r),e.appendChild(n),e.appendChild(o),e.appendChild(a),e.appendChild(u),e.appendChild(i),e.appendChild(l),e.appendChild(d),void 0===b){let t=document.createElement("select");t.setAttribute("id","projectSelection");let n=document.createElement("label");n.setAttribute("for","projectSelection"),n.textContent="Project";let r=document.createElement("option");r.textContent=" - ",t.appendChild(r);for(const e of v){let n=document.createElement("option");n.setAttribute("value",`${e.id}`),n.textContent=`${e.id}`,t.appendChild(n)}e.appendChild(n),e.appendChild(t)}e.appendChild(h)}function wt(){let t=document.getElementById("projectList");for(;t.hasChildNodes();)t.removeChild(t.firstChild);let e=document.createElement("form");e.setAttribute("action",""),e.setAttribute("id","projectForm");let n=document.createElement("input");n.setAttribute("id","projectTitle");let r=document.createElement("label");r.setAttribute("for","projectTitle");let a=document.createElement("button");a.setAttribute("type","submit"),a.setAttribute("id","submitButton"),a.setAttribute("form","projectForm"),a.textContent="Add",a.addEventListener("click",M),a.addEventListener("click",Ct),e.appendChild(r),e.appendChild(n),e.appendChild(a),t.appendChild(e)}function yt(){let t=document.getElementById("mainBody");for(b=void 0;t.hasChildNodes();)t.removeChild(t.firstChild);let e=document.createElement("button");e.textContent="New toDo",e.addEventListener("click",bt),t.appendChild(e);for(const e of g){let n=document.createElement("div"),r=document.createElement("p");r.textContent=e.title,n.appendChild(r);let a=document.createElement("p");a.textContent=e.description,n.appendChild(a);let o=document.createElement("p");o.textContent=`${vt(e.dueDate,"EEEE d MMMM yyyy")}`,n.appendChild(o);let i=document.createElement("p");1===e.priority?(i.textContent="High",n.appendChild(i)):2===e.priority?(i.textContent="Medium",n.appendChild(i)):(i.textContent="Low",n.appendChild(i));let u=document.createElement("p");u.textContent=e.project,n.appendChild(u),t.appendChild(n)}}function Ct(){let t=document.getElementById("projectList");for(;t.hasChildNodes();)t.removeChild(t.firstChild);let e=document.createElement("button");e.textContent="Add Project",e.addEventListener("click",wt),t.appendChild(e);for(const e of v){let n=document.createElement("p");n.textContent=e.id,t.appendChild(n),n.addEventListener("click",Tt)}}function Tt(t){b=t.target.textContent,xt()}function xt(){let t=document.getElementById("mainBody");for(;t.hasChildNodes();)t.removeChild(t.firstChild);let e=document.createElement("button");e.textContent="New toDo",e.addEventListener("click",bt),t.appendChild(e);let n=v.find((({id:t})=>t===b));for(const e of n){let n=document.createElement("div"),r=document.createElement("p");r.textContent=e.title,n.appendChild(r);let a=document.createElement("p");a.textContent=e.description,n.appendChild(a);let o=document.createElement("p");o.textContent=`${vt(e.dueDate,"EEEE d MMMM yyyy")}`,n.appendChild(o);let i=document.createElement("p");1===e.priority?(i.textContent="High",n.appendChild(i)):2===e.priority?(i.textContent="Medium",n.appendChild(i)):(i.textContent="Low",n.appendChild(i));let u=document.createElement("p");u.textContent=e.project,n.appendChild(u),t.appendChild(n)}}document.getElementById("loadtask").addEventListener("click",yt),Ct()})()})();