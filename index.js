// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function l(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===s.call(e.specifier)?s.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function p(e){return"string"==typeof e}var c=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,v=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function k(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":c(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),e.alternate&&(t=g.call(t,v,"$1."),t=g.call(t,b,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):u.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var x=String.fromCharCode,j=isNaN,O=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $(e){var r,t,n,i,a,s,c,u,f;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",c=1,u=0;u<e.length;u++)if(p(n=e[u]))s+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,j(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):x(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=k(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),s+=n.arg||"",c+=1}return s}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,i;for(t=[],i=0,n=F.exec(e);n;)(r=e.slice(i,F.lastIndex-n[0].length)).length&&t.push(r),t.push(S(n)),i=F.lastIndex,n=F.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function A(e){return"string"==typeof e}function I(e){var r,t;if(!A(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return $.apply(null,r)}var C,P=Object.prototype,Z=P.toString,N=P.__defineGetter__,R=P.__defineSetter__,B=P.__lookupGetter__,W=P.__lookupSetter__;C=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(e,r)||W.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};var G=C;function L(e){return"number"==typeof e||!!/^0x[0-9a-f]+$/i.test(e)||/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(e)}function M(e,r){return"constructor"===r&&"function"==typeof e[r]||"__proto__"===r}var z="",q=!0,U="",X=!0,D=null;function H(e){return Math.floor(e)===e}var J=Object.prototype.hasOwnProperty,K=Array.isArray;function Q(e,r){return"object"!=typeof r||null===r||K(r)?new TypeError(I("invalid argument. Options argument must be an object. Value: `%s`.",r)):J.call(r,"pkg")&&(e.pkg=r.pkg,"object"!=typeof e.pkg||null===e.pkg||K(e.pkg))?new TypeError(I("invalid option. `%s` option must be an object. Option: `%s`.","pkg",e.pkg)):J.call(r,"help")&&(e.help=r.help,"string"!=typeof e.help)?new TypeError(I("invalid option. `%s` option must be a string. Option: `%s`.","help",e.help)):J.call(r,"version")&&(e.version=r.version,"string"!=typeof e.version)?new TypeError(I("invalid option. `%s` option must be a string. Option: `%s`.","version",e.version)):J.call(r,"title")&&(e.title=r.title,"string"!=typeof e.title&&"boolean"!=typeof e.title)?new TypeError(I("invalid option. `%s` option must be either a string or boolean primitive. Option: `%s`.","title",e.title)):J.call(r,"updates")&&(e.updates=r.updates,"boolean"!=typeof e.updates)?new TypeError(I("invalid option. `%s` option must be a boolean. Option: `%s`.","updates",e.updates)):J.call(r,"argv")&&(e.argv=r.argv,!K(e.argv))?new TypeError(I("invalid option. `%s` option must be an array. Option: `%s`.","argv",e.argv)):J.call(r,"options")&&(e.options=r.options,"object"!=typeof e.options||null===e.options||K(e.options))?new TypeError(I("invalid option. `%s` option must be a plain object. Option: `%s`.","options",e.options)):null}var Y,ee=e,re=console,te=ee.versions.node;function ne(e,r){var t;(t=te.split("."))[0]=parseInt(t[0],10),t[1]=parseInt(t[1],10),t[0]>0||t[1]>10?e.exitCode=r:(e.exitCode=r,setTimeout((function(){e.exit(r)}),10))}function ie(){return this instanceof ie?this:new ie}Y=ie.prototype,G(Y,"notify",{configurable:!1,enumerable:!1,writable:!1,value:function(){}});var oe=function(e,r){r||(r={});var t={bools:{},strings:{},unknownFn:null};"function"==typeof r.unknown&&(t.unknownFn=r.unknown),"boolean"==typeof r.boolean&&r.boolean?t.allBools=!0:[].concat(r.boolean).filter(Boolean).forEach((function(e){t.bools[e]=!0}));var n={};function i(e){return n[e].some((function(e){return t.bools[e]}))}Object.keys(r.alias||{}).forEach((function(e){n[e]=[].concat(r.alias[e]),n[e].forEach((function(r){n[r]=[e].concat(n[e].filter((function(e){return r!==e})))}))})),[].concat(r.string).filter(Boolean).forEach((function(e){t.strings[e]=!0,n[e]&&[].concat(n[e]).forEach((function(e){t.strings[e]=!0}))}));var o=r.default||{},a={_:[]};function s(e,r,n){for(var i=e,o=0;o<r.length-1;o++){var a=r[o];if(M(i,a))return;void 0===i[a]&&(i[a]={}),i[a]!==Object.prototype&&i[a]!==Number.prototype&&i[a]!==String.prototype||(i[a]={}),i[a]===Array.prototype&&(i[a]=[]),i=i[a]}var s=r[r.length-1];M(i,s)||(i!==Object.prototype&&i!==Number.prototype&&i!==String.prototype||(i={}),i===Array.prototype&&(i=[]),void 0===i[s]||t.bools[s]||"boolean"==typeof i[s]?i[s]=n:Array.isArray(i[s])?i[s].push(n):i[s]=[i[s],n])}function l(e,r,i){if(!i||!t.unknownFn||function(e,r){return t.allBools&&/^--[^=]+$/.test(r)||t.strings[e]||t.bools[e]||n[e]}(e,i)||!1!==t.unknownFn(i)){var o=!t.strings[e]&&L(r)?Number(r):r;s(a,e.split("."),o),(n[e]||[]).forEach((function(e){s(a,e.split("."),o)}))}}Object.keys(t.bools).forEach((function(e){l(e,void 0!==o[e]&&o[e])}));var p=[];-1!==e.indexOf("--")&&(p=e.slice(e.indexOf("--")+1),e=e.slice(0,e.indexOf("--")));for(var c=0;c<e.length;c++){var u,f,g=e[c];if(/^--.+=/.test(g)){var d=g.match(/^--([^=]+)=([\s\S]*)$/);u=d[1];var h=d[2];t.bools[u]&&(h="false"!==h),l(u,h,g)}else if(/^--no-.+/.test(g))l(u=g.match(/^--no-(.+)/)[1],!1,g);else if(/^--.+/.test(g))u=g.match(/^--(.+)/)[1],void 0===(f=e[c+1])||/^(-|--)[^-]/.test(f)||t.bools[u]||t.allBools||n[u]&&i(u)?/^(true|false)$/.test(f)?(l(u,"true"===f,g),c+=1):l(u,!t.strings[u]||"",g):(l(u,f,g),c+=1);else if(/^-[^-]+/.test(g)){for(var v=g.slice(1,-1).split(""),b=!1,y=0;y<v.length;y++)if("-"!==(f=g.slice(y+2))){if(/[A-Za-z]/.test(v[y])&&"="===f[0]){l(v[y],f.slice(1),g),b=!0;break}if(/[A-Za-z]/.test(v[y])&&/-?\d+(\.\d*)?(e-?\d+)?$/.test(f)){l(v[y],f,g),b=!0;break}if(v[y+1]&&v[y+1].match(/\W/)){l(v[y],g.slice(y+2),g),b=!0;break}l(v[y],!t.strings[v[y]]||"",g)}else l(v[y],f,g);u=g.slice(-1)[0],b||"-"===u||(!e[c+1]||/^(-|--)[^-]/.test(e[c+1])||t.bools[u]||n[u]&&i(u)?e[c+1]&&/^(true|false)$/.test(e[c+1])?(l(u,"true"===e[c+1],g),c+=1):l(u,!t.strings[u]||"",g):(l(u,e[c+1],g),c+=1))}else if(t.unknownFn&&!1===t.unknownFn(g)||a._.push(t.strings._||!L(g)?g:Number(g)),r.stopEarly){a._.push.apply(a._,e.slice(c+1));break}}return Object.keys(o).forEach((function(e){var r,t,i;r=a,t=e.split("."),i=r,t.slice(0,-1).forEach((function(e){i=i[e]||{}})),t[t.length-1]in i||(s(a,e.split("."),o[e]),(n[e]||[]).forEach((function(r){s(a,r.split("."),o[e])})))})),r["--"]?a["--"]=p.slice():p.forEach((function(e){a._.push(e)})),a},ae=Object.defineProperty,se=Object.keys;function le(e,r,t){ae(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function pe(e){var r,t,n,i,o,a,s;if(!(this instanceof pe))return arguments.length?new pe(e):new pe;if(n={pkg:{},help:z,title:q,version:U,updates:X,argv:D,options:{}},arguments.length&&(s=Q(n,e)))throw s;return a=this,ee.stdout.on("error",ee.exit),ee.stderr.on("error",ee.exit),le(this,"args",l),le(this,"flags",p),le(this,"help",c),le(this,"version",u),!0===n.title&&n.pkg?"object"==typeof n.pkg.bin&&null!==n.pkg.bin?(t=se(n.pkg.bin),ee.title=t[0]):n.pkg.name&&(ee.title=n.pkg.name):n.title&&(ee.title=n.title),n.updates&&n.pkg&&n.pkg.name&&n.pkg.version&&(n.pkg,ie().notify()),!n.version&&n.pkg&&n.pkg.version&&(n.version=n.pkg.version),n.argv?n.argv=n.argv.slice(2):n.argv=ee.argv.slice(2),i=oe(n.argv,n.options),o=i._,delete i._,(r=i).help?this.help(0):r.version?this.version():this;function l(){return o.slice()}function p(){var e,t,n,i;for(e=se(r),t={},i=0;i<e.length;i++)t[n=e[i]]=r[n];return t}function c(e){re.error(n.help),a.close(e||0)}function u(){re.error(n.version),a.close()}}le(pe.prototype,"close",(function(e){if(0!==arguments.length){if("number"!=typeof e||!H(e)||e<0)throw new TypeError(I("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));ne(ee,e)}else ne(ee,0)})),le(pe.prototype,"error",(function(e,r){var t;if(!(e instanceof Error))throw new TypeError(I("invalid argument. First argument must be an error object. Value: `%s`.",e));if(arguments.length>1){if("number"!=typeof r||!H(r)||r<0)throw new TypeError(I("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));t=r}else t=1;re.error("Error: %s",e.message),ne(ee,t)})),le(pe.prototype,"exit",(function(e){if(0===arguments.length)return ee.exit(0);if("number"!=typeof e||!H(e)||e<0)throw new TypeError(I("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));ee.exit(e)}));var ce={};return function(e,r,t){G(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}(ce,"CLI",pe),ce},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("process")):"function"==typeof define&&define.amd?define(["process"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r(e.require$$0);
//# sourceMappingURL=index.js.map
