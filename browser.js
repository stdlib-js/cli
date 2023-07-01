// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function r(e){return"number"==typeof e}function n(e){var t,r="";for(t=0;t<e;t++)r+="0";return r}function i(e,t,r){var i=!1,o=t-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=r?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function s(e){var t,n,s;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=e.arg,s=parseInt(n,10),!isFinite(s)){if(!r(n))throw new Error("invalid integer. Value: "+n);s=0}return s<0&&("u"===e.specifier||10!==t)&&(s=4294967295+s+1),s<0?(n=(-s).toString(t),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=s.toString(t),s||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===t&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===t&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(e){return"string"==typeof e}var c=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var t,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!r(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":c(i)<1e-4?((t=e.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,w,"$1e"),n=f.call(n,y,"e"),n=f.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,g,"e+0$1"),n=f.call(n,h,"e-0$1"),e.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,v,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===u.call(e.specifier)?u.call(n):p.call(n)}function k(e){var t,r="";for(t=0;t<e;t++)r+=" ";return r}function E(e,t,r){var n=t-e.length;return n<0?e:e=r?e+k(n):k(n)+e}var _=String.fromCharCode,T=isNaN,x=Array.isArray;function j(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function O(e){var t,r,n,o,a,c,p,u,f;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,u=0;u<e.length;u++)if(l(n=e[u]))c+=n;else{if(t=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(p=n.mapping),r=n.flags,f=0;f<r.length;f++)switch(o=r.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[p],10),p+=1,T(n.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[p],10),p+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[p],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),c+=n.arg||"",p+=1}return c}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function $(e){var t,r,n,i;for(r=[],i=0,n=A.exec(e);n;)(t=e.slice(i,A.lastIndex-n[0].length)).length&&r.push(t),r.push(F(n)),i=A.lastIndex,n=A.exec(e);return(t=e.slice(i)).length&&r.push(t),r}function S(e){return"string"==typeof e}function V(e){var t,r,n;if(!S(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=$(e),(r=new Array(arguments.length))[0]=t,n=1;n<r.length;n++)r[n]=arguments[n];return O.apply(null,r)}var I,C=Object.prototype,L=C.toString,N=C.__defineGetter__,P=C.__defineSetter__,M=C.__lookupGetter__,Z=C.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,r){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===L.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===L.call(r))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(M.call(e,t)||Z.call(e,t)?(n=e.__proto__,e.__proto__=C,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(e,t,r.get),a&&P&&P.call(e,t,r.set),e};var R=I;function z(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];r.push.apply(r,arguments);var n=Function.bind.apply(t,r);return new n}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}function B(e){return"number"==typeof e||(!!/^0x[0-9a-f]+$/i.test(e)||/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(e))}function W(e,t){return"constructor"===t&&"function"==typeof e[t]||"__proto__"===t}var D="",G=!0,U="",X=!0,q=null;function H(e){return Math.floor(e)===e}var J=Object.prototype.hasOwnProperty,K=Array.isArray;function Q(e,t){return"object"!=typeof t||null===t||K(t)?new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",t)):J.call(t,"pkg")&&(e.pkg=t.pkg,"object"!=typeof e.pkg||null===e.pkg||K(e.pkg))?new TypeError(V("invalid option. `%s` option must be an object. Option: `%s`.","pkg",e.pkg)):J.call(t,"help")&&(e.help=t.help,"string"!=typeof e.help)?new TypeError(V("invalid option. `%s` option must be a string. Option: `%s`.","help",e.help)):J.call(t,"version")&&(e.version=t.version,"string"!=typeof e.version)?new TypeError(V("invalid option. `%s` option must be a string. Option: `%s`.","version",e.version)):J.call(t,"title")&&(e.title=t.title,"string"!=typeof e.title&&"boolean"!=typeof e.title)?new TypeError(V("invalid option. `%s` option must be either a string or boolean primitive. Option: `%s`.","title",e.title)):J.call(t,"updates")&&(e.updates=t.updates,"boolean"!=typeof e.updates)?new TypeError(V("invalid option. `%s` option must be a boolean. Option: `%s`.","updates",e.updates)):J.call(t,"argv")&&(e.argv=t.argv,!K(e.argv))?new TypeError(V("invalid option. `%s` option must be an array. Option: `%s`.","argv",e.argv)):J.call(t,"options")&&(e.options=t.options,"object"!=typeof e.options||null===e.options||K(e.options))?new TypeError(V("invalid option. `%s` option must be a plain object. Option: `%s`.","options",e.options)):null}var Y="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function ee(){throw new Error("setTimeout has not been defined")}function te(){throw new Error("clearTimeout has not been defined")}var re=ee,ne=te;function ie(e){if(re===setTimeout)return setTimeout(e,0);if((re===ee||!re)&&setTimeout)return re=setTimeout,setTimeout(e,0);try{return re(e,0)}catch(t){try{return re.call(null,e,0)}catch(t){return re.call(this,e,0)}}}"function"==typeof Y.setTimeout&&(re=setTimeout),"function"==typeof Y.clearTimeout&&(ne=clearTimeout);var oe,ae=[],se=!1,le=-1;function ce(){se&&oe&&(se=!1,oe.length?ae=oe.concat(ae):le=-1,ae.length&&pe())}function pe(){if(!se){var e=ie(ce);se=!0;for(var t=ae.length;t;){for(oe=ae,ae=[];++le<t;)oe&&oe[le].run();le=-1,t=ae.length}oe=null,se=!1,function(e){if(ne===clearTimeout)return clearTimeout(e);if((ne===te||!ne)&&clearTimeout)return ne=clearTimeout,clearTimeout(e);try{ne(e)}catch(t){try{return ne.call(null,e)}catch(t){return ne.call(this,e)}}}(e)}}function ue(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];ae.push(new fe(e,t)),1!==ae.length||se||ie(pe)}function fe(e,t){this.fun=e,this.array=t}fe.prototype.run=function(){this.fun.apply(null,this.array)};var ge="browser",he="browser",de={},ve=[],be={},ye={},we={};function me(){}var ke=me,Ee=me,_e=me,Te=me,xe=me,je=me,Oe=me;function Ae(e){throw new Error("process.binding is not supported")}function Fe(){return"/"}function $e(e){throw new Error("process.chdir is not supported")}function Se(){return 0}var Ve=Y.performance||{},Ie=Ve.now||Ve.mozNow||Ve.msNow||Ve.oNow||Ve.webkitNow||function(){return(new Date).getTime()};function Ce(e){var t=.001*Ie.call(Ve),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]}var Le=new Date;function Ne(){return(new Date-Le)/1e3}var Pe,Me={nextTick:ue,title:ge,browser:true,env:de,argv:ve,version:"",versions:be,on:ke,addListener:Ee,once:_e,off:Te,removeListener:xe,removeAllListeners:je,emit:Oe,binding:Ae,cwd:Fe,chdir:$e,umask:Se,hrtime:Ce,platform:he,release:ye,config:we,uptime:Ne},Ze=z(Object.freeze({__proto__:null,addListener:Ee,argv:ve,binding:Ae,browser:true,chdir:$e,config:we,cwd:Fe,default:Me,emit:Oe,env:de,hrtime:Ce,nextTick:ue,off:Te,on:ke,once:_e,platform:he,release:ye,removeAllListeners:je,removeListener:xe,title:ge,umask:Se,uptime:Ne,version:"",versions:be})),Re=console,ze=Ze.versions.node;function Be(e,t){var r;(r=ze.split("."))[0]=parseInt(r[0],10),r[1]=parseInt(r[1],10),r[0]>0||r[1]>10?e.exitCode=t:(e.exitCode=t,setTimeout((function(){e.exit(t)}),10))}function We(){return this instanceof We?this:new We}Pe=We.prototype,R(Pe,"notify",{configurable:!1,enumerable:!1,writable:!1,value:function(){}});var De=function(e,t){t||(t={});var r={bools:{},strings:{},unknownFn:null};"function"==typeof t.unknown&&(r.unknownFn=t.unknown),"boolean"==typeof t.boolean&&t.boolean?r.allBools=!0:[].concat(t.boolean).filter(Boolean).forEach((function(e){r.bools[e]=!0}));var n={};function i(e){return n[e].some((function(e){return r.bools[e]}))}Object.keys(t.alias||{}).forEach((function(e){n[e]=[].concat(t.alias[e]),n[e].forEach((function(t){n[t]=[e].concat(n[e].filter((function(e){return t!==e})))}))})),[].concat(t.string).filter(Boolean).forEach((function(e){r.strings[e]=!0,n[e]&&[].concat(n[e]).forEach((function(e){r.strings[e]=!0}))}));var o=t.default||{},a={_:[]};function s(e,t,n){for(var i=e,o=0;o<t.length-1;o++){var a=t[o];if(W(i,a))return;void 0===i[a]&&(i[a]={}),i[a]!==Object.prototype&&i[a]!==Number.prototype&&i[a]!==String.prototype||(i[a]={}),i[a]===Array.prototype&&(i[a]=[]),i=i[a]}var s=t[t.length-1];W(i,s)||(i!==Object.prototype&&i!==Number.prototype&&i!==String.prototype||(i={}),i===Array.prototype&&(i=[]),void 0===i[s]||r.bools[s]||"boolean"==typeof i[s]?i[s]=n:Array.isArray(i[s])?i[s].push(n):i[s]=[i[s],n])}function l(e,t,i){if(!i||!r.unknownFn||function(e,t){return r.allBools&&/^--[^=]+$/.test(t)||r.strings[e]||r.bools[e]||n[e]}(e,i)||!1!==r.unknownFn(i)){var o=!r.strings[e]&&B(t)?Number(t):t;s(a,e.split("."),o),(n[e]||[]).forEach((function(e){s(a,e.split("."),o)}))}}Object.keys(r.bools).forEach((function(e){l(e,void 0!==o[e]&&o[e])}));var c=[];-1!==e.indexOf("--")&&(c=e.slice(e.indexOf("--")+1),e=e.slice(0,e.indexOf("--")));for(var p=0;p<e.length;p++){var u,f,g=e[p];if(/^--.+=/.test(g)){var h=g.match(/^--([^=]+)=([\s\S]*)$/);u=h[1];var d=h[2];r.bools[u]&&(d="false"!==d),l(u,d,g)}else if(/^--no-.+/.test(g))l(u=g.match(/^--no-(.+)/)[1],!1,g);else if(/^--.+/.test(g))u=g.match(/^--(.+)/)[1],void 0===(f=e[p+1])||/^(-|--)[^-]/.test(f)||r.bools[u]||r.allBools||n[u]&&i(u)?/^(true|false)$/.test(f)?(l(u,"true"===f,g),p+=1):l(u,!r.strings[u]||"",g):(l(u,f,g),p+=1);else if(/^-[^-]+/.test(g)){for(var v=g.slice(1,-1).split(""),b=!1,y=0;y<v.length;y++)if("-"!==(f=g.slice(y+2))){if(/[A-Za-z]/.test(v[y])&&"="===f[0]){l(v[y],f.slice(1),g),b=!0;break}if(/[A-Za-z]/.test(v[y])&&/-?\d+(\.\d*)?(e-?\d+)?$/.test(f)){l(v[y],f,g),b=!0;break}if(v[y+1]&&v[y+1].match(/\W/)){l(v[y],g.slice(y+2),g),b=!0;break}l(v[y],!r.strings[v[y]]||"",g)}else l(v[y],f,g);u=g.slice(-1)[0],b||"-"===u||(!e[p+1]||/^(-|--)[^-]/.test(e[p+1])||r.bools[u]||n[u]&&i(u)?e[p+1]&&/^(true|false)$/.test(e[p+1])?(l(u,"true"===e[p+1],g),p+=1):l(u,!r.strings[u]||"",g):(l(u,e[p+1],g),p+=1))}else if(r.unknownFn&&!1===r.unknownFn(g)||a._.push(r.strings._||!B(g)?g:Number(g)),t.stopEarly){a._.push.apply(a._,e.slice(p+1));break}}return Object.keys(o).forEach((function(e){var t,r,i;t=a,r=e.split("."),i=t,r.slice(0,-1).forEach((function(e){i=i[e]||{}})),r[r.length-1]in i||(s(a,e.split("."),o[e]),(n[e]||[]).forEach((function(t){s(a,t.split("."),o[e])})))})),t["--"]?a["--"]=c.slice():c.forEach((function(e){a._.push(e)})),a},Ge=Object.defineProperty,Ue=Object.keys;function Xe(e,t,r){Ge(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function qe(e){var t,r,n,i,o,a,s;if(!(this instanceof qe))return arguments.length?new qe(e):new qe;if(n={pkg:{},help:D,title:G,version:U,updates:X,argv:q,options:{}},arguments.length&&(s=Q(n,e)))throw s;return a=this,Ze.stdout.on("error",Ze.exit),Ze.stderr.on("error",Ze.exit),Xe(this,"args",l),Xe(this,"flags",c),Xe(this,"help",p),Xe(this,"version",u),!0===n.title&&n.pkg?"object"==typeof n.pkg.bin&&null!==n.pkg.bin?(r=Ue(n.pkg.bin),Ze.title=r[0]):n.pkg.name&&(Ze.title=n.pkg.name):n.title&&(Ze.title=n.title),n.updates&&n.pkg&&n.pkg.name&&n.pkg.version&&(n.pkg,We().notify()),!n.version&&n.pkg&&n.pkg.version&&(n.version=n.pkg.version),n.argv?n.argv=n.argv.slice(2):n.argv=Ze.argv.slice(2),i=De(n.argv,n.options),o=i._,delete i._,(t=i).help?this.help(0):t.version?this.version():this;function l(){return o.slice()}function c(){var e,r,n,i;for(e=Ue(t),r={},i=0;i<e.length;i++)r[n=e[i]]=t[n];return r}function p(e){Re.error(n.help),a.close(e||0)}function u(){Re.error(n.version),a.close()}}Xe(qe.prototype,"close",(function(e){if(0!==arguments.length){if("number"!=typeof e||!H(e)||e<0)throw new TypeError(V("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));Be(Ze,e)}else Be(Ze,0)})),Xe(qe.prototype,"error",(function(e,t){var r;if(!(e instanceof Error))throw new TypeError(V("invalid argument. First argument must be an error object. Value: `%s`.",e));if(arguments.length>1){if("number"!=typeof t||!H(t)||t<0)throw new TypeError(V("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));r=t}else r=1;Re.error("Error: %s",e.message),Be(Ze,r)})),Xe(qe.prototype,"exit",(function(e){if(0===arguments.length)return Ze.exit(0);if("number"!=typeof e||!H(e)||e<0)throw new TypeError(V("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));Ze.exit(e)}));var He={};return function(e,t,r){R(e,t,{configurable:!1,enumerable:!0,writable:!1,value:r})}(He,"CLI",qe),He}));
//# sourceMappingURL=browser.js.map
