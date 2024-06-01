// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function r(e){return"number"==typeof e}function n(e){var t,r="";for(t=0;t<e;t++)r+="0";return r}function o(e,t,r){var o=!1,i=t-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=r?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function s(e){var t,n,s;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=e.arg,s=parseInt(n,10),!isFinite(s)){if(!r(n))throw new Error("invalid integer. Value: "+n);s=0}return s<0&&("u"===e.specifier||10!==t)&&(s=4294967295+s+1),s<0?(n=(-s).toString(t),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=s.toString(t),s||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===t&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===t&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var l=Math.abs,c=String.prototype.toLowerCase,p=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function w(e){var t,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!r(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":l(o)<1e-4?((t=e.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(e.precision),e.alternate||(n=u.call(n,y,"$1e"),n=u.call(n,b,"e"),n=u.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=u.call(n,f,"e+0$1"),n=u.call(n,g,"e-0$1"),e.alternate&&(n=u.call(n,h,"$1."),n=u.call(n,d,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===p.call(e.specifier)?p.call(n):c.call(n)}function m(e){var t,r="";for(t=0;t<e;t++)r+=" ";return r}var k=String.fromCharCode,E=Array.isArray;function _(e){return e!=e}function T(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function x(e){var t,r,n,i,a,l,c,p,u,f,g,h,d;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,p=0;p<e.length;p++)if(n=e[p],"string"==typeof n)l+=n;else{if(t=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),r=n.flags,u=0;u<r.length;u++)switch(i=r.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=t?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):k(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,h=n.padRight,d=void 0,(d=g-f.length)<0?f:f=h?f+m(d):m(d)+f)),l+=n.arg||"",c+=1}return l}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function A(e){var t,r,n,o;for(r=[],o=0,n=j.exec(e);n;)(t=e.slice(o,j.lastIndex-n[0].length)).length&&r.push(t),r.push(O(n)),o=j.lastIndex,n=j.exec(e);return(t=e.slice(o)).length&&r.push(t),r}function S(e){var t,r;if("string"!=typeof e)throw new TypeError(S("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=[A(e)],r=1;r<arguments.length;r++)t.push(arguments[r]);return x.apply(null,t)}var $,F=Object.prototype,V=F.toString,I=F.__defineGetter__,C=F.__defineSetter__,L=F.__lookupGetter__,P=F.__lookupSetter__;$=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,r){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(S("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(S("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(L.call(e,t)||P.call(e,t)?(n=e.__proto__,e.__proto__=F,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&I&&I.call(e,t,r.get),a&&C&&C.call(e,t,r.set),e};var M=$;function N(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}function R(e){return"number"==typeof e||(!!/^0x[0-9a-f]+$/i.test(e)||/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(e))}function Z(e,t){return"constructor"===t&&"function"==typeof e[t]||"__proto__"===t}var z="",B=!0,W="",D=!0,G=null;function U(e){return Math.floor(e)===e}var X=Object.prototype.hasOwnProperty,q=Array.isArray;var H="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function J(){throw new Error("setTimeout has not been defined")}function K(){throw new Error("clearTimeout has not been defined")}var Q=J,Y=K;function ee(e){if(Q===setTimeout)return setTimeout(e,0);if((Q===J||!Q)&&setTimeout)return Q=setTimeout,setTimeout(e,0);try{return Q(e,0)}catch(t){try{return Q.call(null,e,0)}catch(t){return Q.call(this,e,0)}}}"function"==typeof H.setTimeout&&(Q=setTimeout),"function"==typeof H.clearTimeout&&(Y=clearTimeout);var te,re=[],ne=!1,oe=-1;function ie(){ne&&te&&(ne=!1,te.length?re=te.concat(re):oe=-1,re.length&&ae())}function ae(){if(!ne){var e=ee(ie);ne=!0;for(var t=re.length;t;){for(te=re,re=[];++oe<t;)te&&te[oe].run();oe=-1,t=re.length}te=null,ne=!1,function(e){if(Y===clearTimeout)return clearTimeout(e);if((Y===K||!Y)&&clearTimeout)return Y=clearTimeout,clearTimeout(e);try{return Y(e)}catch(t){try{return Y.call(null,e)}catch(t){return Y.call(this,e)}}}(e)}}function se(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];re.push(new le(e,t)),1!==re.length||ne||ee(ae)}function le(e,t){this.fun=e,this.array=t}le.prototype.run=function(){this.fun.apply(null,this.array)};var ce="browser",pe="browser",ue={},fe=[],ge={},he={},de={};function ve(){}var be=ve,ye=ve,we=ve,me=ve,ke=ve,Ee=ve,_e=ve;function Te(e){throw new Error("process.binding is not supported")}function xe(){return"/"}function je(e){throw new Error("process.chdir is not supported")}function Oe(){return 0}var Ae=H.performance||{},Se=Ae.now||Ae.mozNow||Ae.msNow||Ae.oNow||Ae.webkitNow||function(){return(new Date).getTime()};function $e(e){var t=.001*Se.call(Ae),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]}var Fe=new Date;function Ve(){return(new Date-Fe)/1e3}var Ie,Ce={nextTick:se,title:ce,browser:true,env:ue,argv:fe,version:"",versions:ge,on:be,addListener:ye,once:we,off:me,removeListener:ke,removeAllListeners:Ee,emit:_e,binding:Te,cwd:xe,chdir:je,umask:Oe,hrtime:$e,platform:pe,release:he,config:de,uptime:Ve},Le=N(Object.freeze({__proto__:null,addListener:ye,argv:fe,binding:Te,browser:true,chdir:je,config:de,cwd:xe,default:Ce,emit:_e,env:ue,hrtime:$e,nextTick:se,off:me,on:be,once:we,platform:pe,release:he,removeAllListeners:Ee,removeListener:ke,title:ce,umask:Oe,uptime:Ve,version:"",versions:ge})),Pe=console,Me=Le.versions.node;function Ne(e,t){var r;(r=Me.split("."))[0]=parseInt(r[0],10),r[1]=parseInt(r[1],10),r[0]>0||r[1]>10?e.exitCode=t:(e.exitCode=t,setTimeout((function(){e.exit(t)}),10))}function Re(){return this instanceof Re?this:new Re}Ie=Re.prototype,M(Ie,"notify",{configurable:!1,enumerable:!1,writable:!1,value:function(){}});var Ze=function(e,t){t||(t={});var r={bools:{},strings:{},unknownFn:null};"function"==typeof t.unknown&&(r.unknownFn=t.unknown),"boolean"==typeof t.boolean&&t.boolean?r.allBools=!0:[].concat(t.boolean).filter(Boolean).forEach((function(e){r.bools[e]=!0}));var n={};function o(e){return n[e].some((function(e){return r.bools[e]}))}Object.keys(t.alias||{}).forEach((function(e){n[e]=[].concat(t.alias[e]),n[e].forEach((function(t){n[t]=[e].concat(n[e].filter((function(e){return t!==e})))}))})),[].concat(t.string).filter(Boolean).forEach((function(e){r.strings[e]=!0,n[e]&&[].concat(n[e]).forEach((function(e){r.strings[e]=!0}))}));var i=t.default||{},a={_:[]};function s(e,t,n){for(var o=e,i=0;i<t.length-1;i++){var a=t[i];if(Z(o,a))return;void 0===o[a]&&(o[a]={}),o[a]!==Object.prototype&&o[a]!==Number.prototype&&o[a]!==String.prototype||(o[a]={}),o[a]===Array.prototype&&(o[a]=[]),o=o[a]}var s=t[t.length-1];Z(o,s)||(o!==Object.prototype&&o!==Number.prototype&&o!==String.prototype||(o={}),o===Array.prototype&&(o=[]),void 0===o[s]||r.bools[s]||"boolean"==typeof o[s]?o[s]=n:Array.isArray(o[s])?o[s].push(n):o[s]=[o[s],n])}function l(e,t,o){if(!o||!r.unknownFn||function(e,t){return r.allBools&&/^--[^=]+$/.test(t)||r.strings[e]||r.bools[e]||n[e]}(e,o)||!1!==r.unknownFn(o)){var i=!r.strings[e]&&R(t)?Number(t):t;s(a,e.split("."),i),(n[e]||[]).forEach((function(e){s(a,e.split("."),i)}))}}Object.keys(r.bools).forEach((function(e){l(e,void 0!==i[e]&&i[e])}));var c=[];-1!==e.indexOf("--")&&(c=e.slice(e.indexOf("--")+1),e=e.slice(0,e.indexOf("--")));for(var p=0;p<e.length;p++){var u,f,g=e[p];if(/^--.+=/.test(g)){var h=g.match(/^--([^=]+)=([\s\S]*)$/);u=h[1];var d=h[2];r.bools[u]&&(d="false"!==d),l(u,d,g)}else if(/^--no-.+/.test(g))l(u=g.match(/^--no-(.+)/)[1],!1,g);else if(/^--.+/.test(g))u=g.match(/^--(.+)/)[1],void 0===(f=e[p+1])||/^(-|--)[^-]/.test(f)||r.bools[u]||r.allBools||n[u]&&o(u)?/^(true|false)$/.test(f)?(l(u,"true"===f,g),p+=1):l(u,!r.strings[u]||"",g):(l(u,f,g),p+=1);else if(/^-[^-]+/.test(g)){for(var v=g.slice(1,-1).split(""),b=!1,y=0;y<v.length;y++)if("-"!==(f=g.slice(y+2))){if(/[A-Za-z]/.test(v[y])&&"="===f[0]){l(v[y],f.slice(1),g),b=!0;break}if(/[A-Za-z]/.test(v[y])&&/-?\d+(\.\d*)?(e-?\d+)?$/.test(f)){l(v[y],f,g),b=!0;break}if(v[y+1]&&v[y+1].match(/\W/)){l(v[y],g.slice(y+2),g),b=!0;break}l(v[y],!r.strings[v[y]]||"",g)}else l(v[y],f,g);u=g.slice(-1)[0],b||"-"===u||(!e[p+1]||/^(-|--)[^-]/.test(e[p+1])||r.bools[u]||n[u]&&o(u)?e[p+1]&&/^(true|false)$/.test(e[p+1])?(l(u,"true"===e[p+1],g),p+=1):l(u,!r.strings[u]||"",g):(l(u,e[p+1],g),p+=1))}else if(r.unknownFn&&!1===r.unknownFn(g)||a._.push(r.strings._||!R(g)?g:Number(g)),t.stopEarly){a._.push.apply(a._,e.slice(p+1));break}}return Object.keys(i).forEach((function(e){var t,r,o;t=a,r=e.split("."),o=t,r.slice(0,-1).forEach((function(e){o=o[e]||{}})),r[r.length-1]in o||(s(a,e.split("."),i[e]),(n[e]||[]).forEach((function(t){s(a,t.split("."),i[e])})))})),t["--"]?a["--"]=c.slice():c.forEach((function(e){a._.push(e)})),a},ze=Object.defineProperty,Be=Object.keys;function We(e,t,r){ze(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function De(e){var t,r,n,o,i,a,s;if(!(this instanceof De))return arguments.length?new De(e):new De;if(n={pkg:{},help:z,title:B,version:W,updates:D,argv:G,options:{}},arguments.length&&(s=function(e,t){return"object"!=typeof t||null===t||q(t)?new TypeError(S("invalid argument. Options argument must be an object. Value: `%s`.",t)):X.call(t,"pkg")&&(e.pkg=t.pkg,"object"!=typeof e.pkg||null===e.pkg||q(e.pkg))?new TypeError(S("invalid option. `%s` option must be an object. Option: `%s`.","pkg",e.pkg)):X.call(t,"help")&&(e.help=t.help,"string"!=typeof e.help)?new TypeError(S("invalid option. `%s` option must be a string. Option: `%s`.","help",e.help)):X.call(t,"version")&&(e.version=t.version,"string"!=typeof e.version)?new TypeError(S("invalid option. `%s` option must be a string. Option: `%s`.","version",e.version)):X.call(t,"title")&&(e.title=t.title,"string"!=typeof e.title&&"boolean"!=typeof e.title)?new TypeError(S("invalid option. `%s` option must be either a string or boolean primitive. Option: `%s`.","title",e.title)):X.call(t,"updates")&&(e.updates=t.updates,"boolean"!=typeof e.updates)?new TypeError(S("invalid option. `%s` option must be a boolean. Option: `%s`.","updates",e.updates)):X.call(t,"argv")&&(e.argv=t.argv,!q(e.argv))?new TypeError(S("invalid option. `%s` option must be an array. Option: `%s`.","argv",e.argv)):X.call(t,"options")&&(e.options=t.options,"object"!=typeof e.options||null===e.options||q(e.options))?new TypeError(S("invalid option. `%s` option must be a plain object. Option: `%s`.","options",e.options)):null}(n,e),s))throw s;return a=this,Le.stdout.on("error",Le.exit),Le.stderr.on("error",Le.exit),We(this,"args",(function(){return i.slice()})),We(this,"flags",(function(){var e,r,n,o;for(e=Be(t),r={},o=0;o<e.length;o++)r[n=e[o]]=t[n];return r})),We(this,"help",(function(e){Pe.error(n.help),a.close(e||0)})),We(this,"version",(function(){Pe.error(n.version),a.close()})),!0===n.title&&n.pkg?"object"==typeof n.pkg.bin&&null!==n.pkg.bin?(r=Be(n.pkg.bin),Le.title=r[0]):n.pkg.name&&(Le.title=n.pkg.name):n.title&&(Le.title=n.title),n.updates&&n.pkg&&n.pkg.name&&n.pkg.version&&(n.pkg,Re().notify()),!n.version&&n.pkg&&n.pkg.version&&(n.version=n.pkg.version),n.argv?n.argv=n.argv.slice(2):n.argv=Le.argv.slice(2),o=Ze(n.argv,n.options),i=o._,delete o._,(t=o).help?this.help(0):t.version?this.version():this}We(De.prototype,"close",(function(e){if(0!==arguments.length){if("number"!=typeof e||!U(e)||e<0)throw new TypeError(S("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));Ne(Le,e)}else Ne(Le,0)})),We(De.prototype,"error",(function(e,t){var r;if(!(e instanceof Error))throw new TypeError(S("invalid argument. First argument must be an error object. Value: `%s`.",e));if(arguments.length>1){if("number"!=typeof t||!U(t)||t<0)throw new TypeError(S("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));r=t}else r=1;Pe.error("Error: %s",e.message),Ne(Le,r)})),We(De.prototype,"exit",(function(e){if(0===arguments.length)return Le.exit(0);if("number"!=typeof e||!U(e)||e<0)throw new TypeError(S("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));Le.exit(e)}));var Ge={};!function(e,t,r){M(e,t,{configurable:!1,enumerable:!0,writable:!1,value:r})}(Ge,"CLI",De);export{De as CLI,Ge as default};
//# sourceMappingURL=mod.js.map
