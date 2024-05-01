// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var t,r="";for(t=0;t<e;t++)r+="0";return r}function o(e,t,r){var n=!1,o=t-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=r?e+i(o):i(o)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function l(e){var t,r,i;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(r=e.arg,i=parseInt(r,10),!isFinite(i)){if(!n(r))throw new Error("invalid integer. Value: "+r);i=0}return i<0&&("u"===e.specifier||10!==t)&&(i=4294967295+i+1),i<0?(r=(-i).toString(t),e.precision&&(r=o(r,e.precision,e.padRight)),r="-"+r):(r=i.toString(t),i||e.precision?e.precision&&(r=o(r,e.precision,e.padRight)):r="",e.sign&&(r=e.sign+r)),16===t&&(e.alternate&&(r="0x"+r),r=e.specifier===s.call(e.specifier)?s.call(r):a.call(r)),8===t&&e.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}var p=Math.abs,c=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,v=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var t,r,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+r);i=e.arg}switch(e.specifier){case"e":case"E":r=i.toExponential(e.precision);break;case"f":case"F":r=i.toFixed(e.precision);break;case"g":case"G":p(i)<1e-4?((t=e.precision)>0&&(t-=1),r=i.toExponential(t)):r=i.toPrecision(e.precision),e.alternate||(r=f.call(r,w,"$1e"),r=f.call(r,y,"e"),r=f.call(r,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return r=f.call(r,g,"e+0$1"),r=f.call(r,d,"e-0$1"),e.alternate&&(r=f.call(r,h,"$1."),r=f.call(r,v,"$1.e")),i>=0&&e.sign&&(r=e.sign+r),r=e.specifier===u.call(e.specifier)?u.call(r):c.call(r)}function k(e){var t,r="";for(t=0;t<e;t++)r+=" ";return r}var E=String.fromCharCode,_=isNaN,x=Array.isArray;function j(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function O(e){var t,r,n,i,a,s,p,c,u,f,g,d,h;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",p=1,c=0;c<e.length;c++)if("string"==typeof(n=e[c]))s+=n;else{if(t=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(p=n.mapping),r=n.flags,u=0;u<r.length;u++)switch(i=r.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[p],10),p+=1,_(n.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[p],10),p+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[p],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+k(h):k(h)+f)),s+=n.arg||"",p+=1}return s}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function F(e){var t,r,n,i;for(r=[],i=0,n=T.exec(e);n;)(t=e.slice(i,T.lastIndex-n[0].length)).length&&r.push(t),r.push($(n)),i=T.lastIndex,n=T.exec(e);return(t=e.slice(i)).length&&r.push(t),r}function S(e){var t,r;if("string"!=typeof e)throw new TypeError(S("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=[F(e)],r=1;r<arguments.length;r++)t.push(arguments[r]);return O.apply(null,t)}var V,A=Object.prototype,I=A.toString,C=A.__defineGetter__,P=A.__defineSetter__,Z=A.__lookupGetter__,N=A.__lookupSetter__;V=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(S("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(S("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(Z.call(e,t)||N.call(e,t)?(n=e.__proto__,e.__proto__=A,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(e,t,r.get),a&&P&&P.call(e,t,r.set),e};var R=V;function B(e){return"number"==typeof e||!!/^0x[0-9a-f]+$/i.test(e)||/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(e)}function W(e,t){return"constructor"===t&&"function"==typeof e[t]||"__proto__"===t}var G="",L=!0,M="",z=!0,q=null;function U(e){return Math.floor(e)===e}var X,D=Object.prototype.hasOwnProperty,H=Array.isArray,J=e,K=console,Q=J.versions.node;function Y(e,t){var r;(r=Q.split("."))[0]=parseInt(r[0],10),r[1]=parseInt(r[1],10),r[0]>0||r[1]>10?e.exitCode=t:(e.exitCode=t,setTimeout((function(){e.exit(t)}),10))}function ee(){return this instanceof ee?this:new ee}X=ee.prototype,R(X,"notify",{configurable:!1,enumerable:!1,writable:!1,value:function(){}});var te=function(e,t){t||(t={});var r={bools:{},strings:{},unknownFn:null};"function"==typeof t.unknown&&(r.unknownFn=t.unknown),"boolean"==typeof t.boolean&&t.boolean?r.allBools=!0:[].concat(t.boolean).filter(Boolean).forEach((function(e){r.bools[e]=!0}));var n={};function i(e){return n[e].some((function(e){return r.bools[e]}))}Object.keys(t.alias||{}).forEach((function(e){n[e]=[].concat(t.alias[e]),n[e].forEach((function(t){n[t]=[e].concat(n[e].filter((function(e){return t!==e})))}))})),[].concat(t.string).filter(Boolean).forEach((function(e){r.strings[e]=!0,n[e]&&[].concat(n[e]).forEach((function(e){r.strings[e]=!0}))}));var o=t.default||{},a={_:[]};function s(e,t,n){for(var i=e,o=0;o<t.length-1;o++){var a=t[o];if(W(i,a))return;void 0===i[a]&&(i[a]={}),i[a]!==Object.prototype&&i[a]!==Number.prototype&&i[a]!==String.prototype||(i[a]={}),i[a]===Array.prototype&&(i[a]=[]),i=i[a]}var s=t[t.length-1];W(i,s)||(i!==Object.prototype&&i!==Number.prototype&&i!==String.prototype||(i={}),i===Array.prototype&&(i=[]),void 0===i[s]||r.bools[s]||"boolean"==typeof i[s]?i[s]=n:Array.isArray(i[s])?i[s].push(n):i[s]=[i[s],n])}function l(e,t,i){if(!i||!r.unknownFn||function(e,t){return r.allBools&&/^--[^=]+$/.test(t)||r.strings[e]||r.bools[e]||n[e]}(e,i)||!1!==r.unknownFn(i)){var o=!r.strings[e]&&B(t)?Number(t):t;s(a,e.split("."),o),(n[e]||[]).forEach((function(e){s(a,e.split("."),o)}))}}Object.keys(r.bools).forEach((function(e){l(e,void 0!==o[e]&&o[e])}));var p=[];-1!==e.indexOf("--")&&(p=e.slice(e.indexOf("--")+1),e=e.slice(0,e.indexOf("--")));for(var c=0;c<e.length;c++){var u,f,g=e[c];if(/^--.+=/.test(g)){var d=g.match(/^--([^=]+)=([\s\S]*)$/);u=d[1];var h=d[2];r.bools[u]&&(h="false"!==h),l(u,h,g)}else if(/^--no-.+/.test(g))l(u=g.match(/^--no-(.+)/)[1],!1,g);else if(/^--.+/.test(g))u=g.match(/^--(.+)/)[1],void 0===(f=e[c+1])||/^(-|--)[^-]/.test(f)||r.bools[u]||r.allBools||n[u]&&i(u)?/^(true|false)$/.test(f)?(l(u,"true"===f,g),c+=1):l(u,!r.strings[u]||"",g):(l(u,f,g),c+=1);else if(/^-[^-]+/.test(g)){for(var v=g.slice(1,-1).split(""),b=!1,y=0;y<v.length;y++)if("-"!==(f=g.slice(y+2))){if(/[A-Za-z]/.test(v[y])&&"="===f[0]){l(v[y],f.slice(1),g),b=!0;break}if(/[A-Za-z]/.test(v[y])&&/-?\d+(\.\d*)?(e-?\d+)?$/.test(f)){l(v[y],f,g),b=!0;break}if(v[y+1]&&v[y+1].match(/\W/)){l(v[y],g.slice(y+2),g),b=!0;break}l(v[y],!r.strings[v[y]]||"",g)}else l(v[y],f,g);u=g.slice(-1)[0],b||"-"===u||(!e[c+1]||/^(-|--)[^-]/.test(e[c+1])||r.bools[u]||n[u]&&i(u)?e[c+1]&&/^(true|false)$/.test(e[c+1])?(l(u,"true"===e[c+1],g),c+=1):l(u,!r.strings[u]||"",g):(l(u,e[c+1],g),c+=1))}else if(r.unknownFn&&!1===r.unknownFn(g)||a._.push(r.strings._||!B(g)?g:Number(g)),t.stopEarly){a._.push.apply(a._,e.slice(c+1));break}}return Object.keys(o).forEach((function(e){var t,r,i;t=a,r=e.split("."),i=t,r.slice(0,-1).forEach((function(e){i=i[e]||{}})),r[r.length-1]in i||(s(a,e.split("."),o[e]),(n[e]||[]).forEach((function(t){s(a,t.split("."),o[e])})))})),t["--"]?a["--"]=p.slice():p.forEach((function(e){a._.push(e)})),a},re=Object.defineProperty,ne=Object.keys;function ie(e,t,r){re(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function oe(e){var t,r,n,i,o,a,s;if(!(this instanceof oe))return arguments.length?new oe(e):new oe;if(n={pkg:{},help:G,title:L,version:M,updates:z,argv:q,options:{}},arguments.length&&(s=function(e,t){return"object"!=typeof t||null===t||H(t)?new TypeError(S("invalid argument. Options argument must be an object. Value: `%s`.",t)):D.call(t,"pkg")&&(e.pkg=t.pkg,"object"!=typeof e.pkg||null===e.pkg||H(e.pkg))?new TypeError(S("invalid option. `%s` option must be an object. Option: `%s`.","pkg",e.pkg)):D.call(t,"help")&&(e.help=t.help,"string"!=typeof e.help)?new TypeError(S("invalid option. `%s` option must be a string. Option: `%s`.","help",e.help)):D.call(t,"version")&&(e.version=t.version,"string"!=typeof e.version)?new TypeError(S("invalid option. `%s` option must be a string. Option: `%s`.","version",e.version)):D.call(t,"title")&&(e.title=t.title,"string"!=typeof e.title&&"boolean"!=typeof e.title)?new TypeError(S("invalid option. `%s` option must be either a string or boolean primitive. Option: `%s`.","title",e.title)):D.call(t,"updates")&&(e.updates=t.updates,"boolean"!=typeof e.updates)?new TypeError(S("invalid option. `%s` option must be a boolean. Option: `%s`.","updates",e.updates)):D.call(t,"argv")&&(e.argv=t.argv,!H(e.argv))?new TypeError(S("invalid option. `%s` option must be an array. Option: `%s`.","argv",e.argv)):D.call(t,"options")&&(e.options=t.options,"object"!=typeof e.options||null===e.options||H(e.options))?new TypeError(S("invalid option. `%s` option must be a plain object. Option: `%s`.","options",e.options)):null}(n,e),s))throw s;return a=this,J.stdout.on("error",J.exit),J.stderr.on("error",J.exit),ie(this,"args",(function(){return o.slice()})),ie(this,"flags",(function(){var e,r,n,i;for(e=ne(t),r={},i=0;i<e.length;i++)r[n=e[i]]=t[n];return r})),ie(this,"help",(function(e){K.error(n.help),a.close(e||0)})),ie(this,"version",(function(){K.error(n.version),a.close()})),!0===n.title&&n.pkg?"object"==typeof n.pkg.bin&&null!==n.pkg.bin?(r=ne(n.pkg.bin),J.title=r[0]):n.pkg.name&&(J.title=n.pkg.name):n.title&&(J.title=n.title),n.updates&&n.pkg&&n.pkg.name&&n.pkg.version&&(n.pkg,ee().notify()),!n.version&&n.pkg&&n.pkg.version&&(n.version=n.pkg.version),n.argv?n.argv=n.argv.slice(2):n.argv=J.argv.slice(2),i=te(n.argv,n.options),o=i._,delete i._,(t=i).help?this.help(0):t.version?this.version():this}ie(oe.prototype,"close",(function(e){if(0!==arguments.length){if("number"!=typeof e||!U(e)||e<0)throw new TypeError(S("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));Y(J,e)}else Y(J,0)})),ie(oe.prototype,"error",(function(e,t){var r;if(!(e instanceof Error))throw new TypeError(S("invalid argument. First argument must be an error object. Value: `%s`.",e));if(arguments.length>1){if("number"!=typeof t||!U(t)||t<0)throw new TypeError(S("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));r=t}else r=1;K.error("Error: %s",e.message),Y(J,r)})),ie(oe.prototype,"exit",(function(e){if(0===arguments.length)return J.exit(0);if("number"!=typeof e||!U(e)||e<0)throw new TypeError(S("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));J.exit(e)}));var ae={};return function(e,t,r){R(e,t,{configurable:!1,enumerable:!0,writable:!1,value:r})}(ae,"CLI",oe),ae},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("process")):"function"==typeof define&&define.amd?define(["process"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=t(e.require$$0);
//# sourceMappingURL=index.js.map
