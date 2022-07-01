// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=t()}(this,(function(){"use strict";function e(e){var t=e.default;if("function"==typeof t){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return t({},"x",{}),!0}catch(e){return!1}},n=Object.defineProperty;var o=function(e){return"number"==typeof e};function i(e){var t,r="";for(t=0;t<e;t++)r+="0";return r}var a=function(e,t,r){var n=!1,o=t-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=r?e+i(o):i(o)+e,n&&(e="-"+e)),e},s=o,l=a,c=String.prototype.toLowerCase,p=String.prototype.toUpperCase;var u=function(e){var t,r,n;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(r=e.arg,n=parseInt(r,10),!isFinite(n)){if(!s(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===e.specifier||10!==t)&&(n=4294967295+n+1),n<0?(r=(-n).toString(t),e.precision&&(r=l(r,e.precision,e.padRight)),r="-"+r):(r=n.toString(t),n||e.precision?e.precision&&(r=l(r,e.precision,e.padRight)):r="",e.sign&&(r=e.sign+r)),16===t&&(e.alternate&&(r="0x"+r),r=e.specifier===p.call(e.specifier)?p.call(r):c.call(r)),8===t&&e.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r};var f=function(e){return"string"==typeof e},g=o,h=Math.abs,d=String.prototype.toLowerCase,v=String.prototype.toUpperCase,b=String.prototype.replace,y=/e\+(\d)$/,w=/e-(\d)$/,m=/^(\d+)$/,k=/^(\d+)e/,E=/\.0$/,_=/\.0*e/,T=/(\..*[^0])0*e/;function x(e){var t,r="";for(t=0;t<e;t++)r+=" ";return r}var j=u,O=f,A=function(e){var t,r,n=parseFloat(e.arg);if(!isFinite(n)){if(!g(e.arg))throw new Error("invalid floating-point number. Value: "+r);n=e.arg}switch(e.specifier){case"e":case"E":r=n.toExponential(e.precision);break;case"f":case"F":r=n.toFixed(e.precision);break;case"g":case"G":h(n)<1e-4?((t=e.precision)>0&&(t-=1),r=n.toExponential(t)):r=n.toPrecision(e.precision),e.alternate||(r=b.call(r,T,"$1e"),r=b.call(r,_,"e"),r=b.call(r,E,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return r=b.call(r,y,"e+0$1"),r=b.call(r,w,"e-0$1"),e.alternate&&(r=b.call(r,m,"$1."),r=b.call(r,k,"$1.e")),n>=0&&e.sign&&(r=e.sign+r),r=e.specifier===v.call(e.specifier)?v.call(r):d.call(r)},$=function(e,t,r){var n=t-e.length;return n<0?e:e=r?e+x(n):x(n)+e},F=a,S=String.fromCharCode,V=isNaN,I=Array.isArray;function C(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}var L=function(e){var t,r,n,o,i,a,s,l,c;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",s=1,l=0;l<e.length;l++)if(n=e[l],O(n))a+=n;else{if(t=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),r=n.flags,c=0;c<r.length;c++)switch(o=r.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,V(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,V(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=j(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!V(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=V(i)?String(n.arg):S(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=F(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=$(n.arg,n.width,n.padRight)),a+=n.arg||"",s+=1}return a},N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}var M=L,Z=function(e){var t,r,n,o;for(r=[],o=0,n=N.exec(e);n;)(t=e.slice(o,N.lastIndex-n[0].length)).length&&r.push(t),r.push(P(n)),o=N.lastIndex,n=N.exec(e);return(t=e.slice(o)).length&&r.push(t),r},R=function(e){return"string"==typeof e};var z=function e(t){var r,n,o;if(!R(t))throw new TypeError(e("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=Z(t),(n=new Array(arguments.length))[0]=r,o=1;o<n.length;o++)n[o]=arguments[o];return M.apply(null,n)},B=z,W=B,D=Object.prototype,G=D.toString,U=D.__defineGetter__,X=D.__defineSetter__,q=D.__lookupGetter__,H=D.__lookupSetter__;var J=n,K=function(e,t,r){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===G.call(e))throw new TypeError(W("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===G.call(r))throw new TypeError(W("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(q.call(e,t)||H.call(e,t)?(n=e.__proto__,e.__proto__=D,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&U&&U.call(e,t,r.get),a&&X&&X.call(e,t,r.set),e},Q=r()?J:K,Y=Q;var ee=function(e,t,r){Y(e,t,{configurable:!1,enumerable:!0,writable:!1,value:r})};function te(e){return"number"==typeof e||(!!/^0x[0-9a-f]+$/i.test(e)||/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(e))}function re(e,t){return"constructor"===t&&"function"==typeof e[t]||"__proto__"===t}var ne={pkg:{},help:"",title:!0,version:"",updates:!0,argv:null,options:{}};var oe=function(e){return Math.floor(e)===e},ie=B,ae=Object.prototype.hasOwnProperty,se=Array.isArray;var le=function(e,t){return"object"!=typeof t||null===t||se(t)?new TypeError(ie("invalid argument. Options argument must be an object. Value: `%s`.",t)):ae.call(t,"pkg")&&(e.pkg=t.pkg,"object"!=typeof e.pkg||null===e.pkg||se(e.pkg))?new TypeError(ie("invalid option. `%s` option must be an object. Option: `%s`.","pkg",e.pkg)):ae.call(t,"help")&&(e.help=t.help,"string"!=typeof e.help)?new TypeError(ie("invalid option. `%s` option must be a string. Option: `%s`.","help",e.help)):ae.call(t,"version")&&(e.version=t.version,"string"!=typeof e.version)?new TypeError(ie("invalid option. `%s` option must be a string. Option: `%s`.","version",e.version)):ae.call(t,"title")&&(e.title=t.title,"string"!=typeof e.title&&"boolean"!=typeof e.title)?new TypeError(ie("invalid option. `%s` option must be either a string or boolean primitive. Option: `%s`.","title",e.title)):ae.call(t,"updates")&&(e.updates=t.updates,"boolean"!=typeof e.updates)?new TypeError(ie("invalid option. `%s` option must be a boolean. Option: `%s`.","updates",e.updates)):ae.call(t,"argv")&&(e.argv=t.argv,!se(e.argv))?new TypeError(ie("invalid option. `%s` option must be an array. Option: `%s`.","argv",e.argv)):ae.call(t,"options")&&(e.options=t.options,"object"!=typeof e.options||null===e.options||se(e.options))?new TypeError(ie("invalid option. `%s` option must be a plain object. Option: `%s`.","options",e.options)):null},ce="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function pe(){throw new Error("setTimeout has not been defined")}function ue(){throw new Error("clearTimeout has not been defined")}var fe=pe,ge=ue;function he(e){if(fe===setTimeout)return setTimeout(e,0);if((fe===pe||!fe)&&setTimeout)return fe=setTimeout,setTimeout(e,0);try{return fe(e,0)}catch(t){try{return fe.call(null,e,0)}catch(t){return fe.call(this,e,0)}}}"function"==typeof ce.setTimeout&&(fe=setTimeout),"function"==typeof ce.clearTimeout&&(ge=clearTimeout);var de,ve=[],be=!1,ye=-1;function we(){be&&de&&(be=!1,de.length?ve=de.concat(ve):ye=-1,ve.length&&me())}function me(){if(!be){var e=he(we);be=!0;for(var t=ve.length;t;){for(de=ve,ve=[];++ye<t;)de&&de[ye].run();ye=-1,t=ve.length}de=null,be=!1,function(e){if(ge===clearTimeout)return clearTimeout(e);if((ge===ue||!ge)&&clearTimeout)return ge=clearTimeout,clearTimeout(e);try{ge(e)}catch(t){try{return ge.call(null,e)}catch(t){return ge.call(this,e)}}}(e)}}function ke(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];ve.push(new Ee(e,t)),1!==ve.length||be||he(me)}function Ee(e,t){this.fun=e,this.array=t}Ee.prototype.run=function(){this.fun.apply(null,this.array)};var _e="browser",Te="browser",xe={},je=[],Oe={},Ae={},$e={};function Fe(){}var Se=Fe,Ve=Fe,Ie=Fe,Ce=Fe,Le=Fe,Ne=Fe,Pe=Fe;function Me(e){throw new Error("process.binding is not supported")}function Ze(){return"/"}function Re(e){throw new Error("process.chdir is not supported")}function ze(){return 0}var Be=ce.performance||{},We=Be.now||Be.mozNow||Be.msNow||Be.oNow||Be.webkitNow||function(){return(new Date).getTime()};function De(e){var t=.001*We.call(Be),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]}var Ge=new Date;function Ue(){return(new Date-Ge)/1e3}var Xe={nextTick:ke,title:_e,browser:true,env:xe,argv:je,version:"",versions:Oe,on:Se,addListener:Ve,once:Ie,off:Ce,removeListener:Le,removeAllListeners:Ne,emit:Pe,binding:Me,cwd:Ze,chdir:Re,umask:ze,hrtime:De,platform:Te,release:Ae,config:$e,uptime:Ue},qe=e(Object.freeze({__proto__:null,addListener:Ve,argv:je,binding:Me,browser:true,chdir:Re,config:$e,cwd:Ze,default:Xe,emit:Pe,env:xe,hrtime:De,nextTick:ke,off:Ce,on:Se,once:Ie,platform:Te,release:Ae,removeAllListeners:Ne,removeListener:Le,title:_e,umask:ze,uptime:Ue,version:"",versions:Oe})),He=console,Je=qe.versions.node;var Ke=function(e,t){var r;(r=Je.split("."))[0]=parseInt(r[0],10),r[1]=parseInt(r[1],10),r[0]>0||r[1]>10?e.exitCode=t:(e.exitCode=t,setTimeout((function(){e.exit(t)}),10))},Qe=Q;var Ye=function(){};function et(){return this instanceof et?this:new et}(function(e,t,r){Qe(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})})(et.prototype,"notify",Ye);var tt=function(e,t){t||(t={});var r={bools:{},strings:{},unknownFn:null};"function"==typeof t.unknown&&(r.unknownFn=t.unknown),"boolean"==typeof t.boolean&&t.boolean?r.allBools=!0:[].concat(t.boolean).filter(Boolean).forEach((function(e){r.bools[e]=!0}));var n={};Object.keys(t.alias||{}).forEach((function(e){n[e]=[].concat(t.alias[e]),n[e].forEach((function(t){n[t]=[e].concat(n[e].filter((function(e){return t!==e})))}))})),[].concat(t.string).filter(Boolean).forEach((function(e){r.strings[e]=!0,n[e]&&(r.strings[n[e]]=!0)}));var o=t.default||{},i={_:[]};Object.keys(r.bools).forEach((function(e){s(e,void 0!==o[e]&&o[e])}));var a=[];function s(e,t,o){if(!o||!r.unknownFn||function(e,t){return r.allBools&&/^--[^=]+$/.test(t)||r.strings[e]||r.bools[e]||n[e]}(e,o)||!1!==r.unknownFn(o)){var a=!r.strings[e]&&te(t)?Number(t):t;l(i,e.split("."),a),(n[e]||[]).forEach((function(e){l(i,e.split("."),a)}))}}function l(e,t,n){for(var o=e,i=0;i<t.length-1;i++){if(re(o,a=t[i]))return;void 0===o[a]&&(o[a]={}),o[a]!==Object.prototype&&o[a]!==Number.prototype&&o[a]!==String.prototype||(o[a]={}),o[a]===Array.prototype&&(o[a]=[]),o=o[a]}var a;re(o,a=t[t.length-1])||(o!==Object.prototype&&o!==Number.prototype&&o!==String.prototype||(o={}),o===Array.prototype&&(o=[]),void 0===o[a]||r.bools[a]||"boolean"==typeof o[a]?o[a]=n:Array.isArray(o[a])?o[a].push(n):o[a]=[o[a],n])}function c(e){return n[e].some((function(e){return r.bools[e]}))}-1!==e.indexOf("--")&&(a=e.slice(e.indexOf("--")+1),e=e.slice(0,e.indexOf("--")));for(var p=0;p<e.length;p++){var u=e[p];if(/^--.+=/.test(u)){var f=u.match(/^--([^=]+)=([\s\S]*)$/),g=f[1],h=f[2];r.bools[g]&&(h="false"!==h),s(g,h,u)}else if(/^--no-.+/.test(u)){s(g=u.match(/^--no-(.+)/)[1],!1,u)}else if(/^--.+/.test(u)){g=u.match(/^--(.+)/)[1];void 0===(y=e[p+1])||/^-/.test(y)||r.bools[g]||r.allBools||n[g]&&c(g)?/^(true|false)$/.test(y)?(s(g,"true"===y,u),p++):s(g,!r.strings[g]||"",u):(s(g,y,u),p++)}else if(/^-[^-]+/.test(u)){for(var d=u.slice(1,-1).split(""),v=!1,b=0;b<d.length;b++){var y;if("-"!==(y=u.slice(b+2))){if(/[A-Za-z]/.test(d[b])&&/=/.test(y)){s(d[b],y.split("=")[1],u),v=!0;break}if(/[A-Za-z]/.test(d[b])&&/-?\d+(\.\d*)?(e-?\d+)?$/.test(y)){s(d[b],y,u),v=!0;break}if(d[b+1]&&d[b+1].match(/\W/)){s(d[b],u.slice(b+2),u),v=!0;break}s(d[b],!r.strings[d[b]]||"",u)}else s(d[b],y,u)}g=u.slice(-1)[0];v||"-"===g||(!e[p+1]||/^(-|--)[^-]/.test(e[p+1])||r.bools[g]||n[g]&&c(g)?e[p+1]&&/^(true|false)$/.test(e[p+1])?(s(g,"true"===e[p+1],u),p++):s(g,!r.strings[g]||"",u):(s(g,e[p+1],u),p++))}else if(r.unknownFn&&!1===r.unknownFn(u)||i._.push(r.strings._||!te(u)?u:Number(u)),t.stopEarly){i._.push.apply(i._,e.slice(p+1));break}}return Object.keys(o).forEach((function(e){var t,r,a;t=i,r=e.split("."),a=t,r.slice(0,-1).forEach((function(e){a=a[e]||{}})),r[r.length-1]in a||(l(i,e.split("."),o[e]),(n[e]||[]).forEach((function(t){l(i,t.split("."),o[e])})))})),t["--"]?(i["--"]=new Array,a.forEach((function(e){i["--"].push(e)}))):a.forEach((function(e){i._.push(e)})),i},rt=B,nt=ne,ot=oe,it=le,at=qe,st=He,lt=Ke,ct=et,pt=Object.defineProperty,ut=Object.keys;function ft(e,t,r){pt(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function gt(e){var t,r,n,o,i,a,s;if(!(this instanceof gt))return arguments.length?new gt(e):new gt;if(n={pkg:{},help:nt.help,title:nt.title,version:nt.version,updates:nt.updates,argv:nt.argv,options:{}},arguments.length&&(s=it(n,e)))throw s;return a=this,at.stdout.on("error",at.exit),at.stderr.on("error",at.exit),ft(this,"args",l),ft(this,"flags",c),ft(this,"help",p),ft(this,"version",u),!0===n.title&&n.pkg?"object"==typeof n.pkg.bin&&null!==n.pkg.bin?(r=ut(n.pkg.bin),at.title=r[0]):n.pkg.name&&(at.title=n.pkg.name):n.title&&(at.title=n.title),n.updates&&n.pkg&&n.pkg.name&&n.pkg.version&&(n.pkg,ct().notify()),!n.version&&n.pkg&&n.pkg.version&&(n.version=n.pkg.version),n.argv?n.argv=n.argv.slice(2):n.argv=at.argv.slice(2),o=tt(n.argv,n.options),i=o._,delete o._,(t=o).help?this.help(0):t.version?this.version():this;function l(){return i.slice()}function c(){var e,r,n,o;for(e=ut(t),r={},o=0;o<e.length;o++)r[n=e[o]]=t[n];return r}function p(e){st.error(n.help),a.close(e||0)}function u(){st.error(n.version),a.close()}}ft(gt.prototype,"close",(function(e){if(0!==arguments.length){if("number"!=typeof e||!ot(e)||e<0)throw new TypeError(rt("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));lt(at,e)}else lt(at,0)})),ft(gt.prototype,"error",(function(e,t){var r;if(!(e instanceof Error))throw new TypeError(rt("invalid argument. First argument must be an error object. Value: `%s`.",e));if(arguments.length>1){if("number"!=typeof t||!ot(t)||t<0)throw new TypeError(rt("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));r=t}else r=1;st.error("Error: %s",e.message),lt(at,r)})),ft(gt.prototype,"exit",(function(e){if(0===arguments.length)return at.exit(0);if("number"!=typeof e||!ot(e)||e<0)throw new TypeError(rt("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));at.exit(e)}));var ht={};return ee(ht,"CLI",gt),ht}));
//# sourceMappingURL=index.js.map
