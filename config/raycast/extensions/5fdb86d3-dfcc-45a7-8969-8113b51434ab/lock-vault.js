"use strict";var Sr=Object.create;var H=Object.defineProperty;var gr=Object.getOwnPropertyDescriptor;var Er=Object.getOwnPropertyNames;var yr=Object.getPrototypeOf,Tr=Object.prototype.hasOwnProperty;var m=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),wr=(e,t)=>{for(var r in t)H(e,r,{get:t[r],enumerable:!0})},Ne=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Er(t))!Tr.call(e,o)&&o!==r&&H(e,o,{get:()=>t[o],enumerable:!(n=gr(t,o))||n.enumerable});return e};var x=(e,t,r)=>(r=e!=null?Sr(yr(e)):{},Ne(t||!e||!e.__esModule?H(r,"default",{value:e,enumerable:!0}):r,e)),xr=e=>Ne(H({},"__esModule",{value:!0}),e);var Ue=m((Hn,Ge)=>{Ge.exports=Me;Me.sync=Pr;var Le=require("fs");function Ir(e,t){var r=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!r||(r=r.split(";"),r.indexOf("")!==-1))return!0;for(var n=0;n<r.length;n++){var o=r[n].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function ke(e,t,r){return!e.isSymbolicLink()&&!e.isFile()?!1:Ir(t,r)}function Me(e,t,r){Le.stat(e,function(n,o){r(n,n?!1:ke(o,e,t))})}function Pr(e,t){return ke(Le.statSync(e),e,t)}});var He=m((jn,Be)=>{Be.exports=Ve;Ve.sync=br;var De=require("fs");function Ve(e,t,r){De.stat(e,function(n,o){r(n,n?!1:Fe(o,t))})}function br(e,t){return Fe(De.statSync(e),t)}function Fe(e,t){return e.isFile()&&Or(e,t)}function Or(e,t){var r=e.mode,n=e.uid,o=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),c=parseInt("010",8),l=parseInt("001",8),f=a|c,g=r&l||r&c&&o===i||r&a&&n===s||r&f&&s===0;return g}});var $e=m((Kn,je)=>{var $n=require("fs"),j;process.platform==="win32"||global.TESTING_WINDOWS?j=Ue():j=He();je.exports=ne;ne.sync=Ar;function ne(e,t,r){if(typeof t=="function"&&(r=t,t={}),!r){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(n,o){ne(e,t||{},function(s,i){s?o(s):n(i)})})}j(e,t||{},function(n,o){n&&(n.code==="EACCES"||t&&t.ignoreErrors)&&(n=null,o=!1),r(n,o)})}function Ar(e,t){try{return j.sync(e,t||{})}catch(r){if(t&&t.ignoreErrors||r.code==="EACCES")return!1;throw r}}});var Qe=m((Yn,ze)=>{var R=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Ke=require("path"),Rr=R?";":":",Ye=$e(),We=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),qe=(e,t)=>{let r=t.colon||Rr,n=e.match(/\//)||R&&e.match(/\\/)?[""]:[...R?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)],o=R?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=R?o.split(r):[""];return R&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:n,pathExt:s,pathExtExe:o}},Xe=(e,t,r)=>{typeof t=="function"&&(r=t,t={}),t||(t={});let{pathEnv:n,pathExt:o,pathExtExe:s}=qe(e,t),i=[],a=l=>new Promise((f,g)=>{if(l===n.length)return t.all&&i.length?f(i):g(We(e));let S=n[l],y=/^".*"$/.test(S)?S.slice(1,-1):S,T=Ke.join(y,e),w=!y&&/^\.[\\\/]/.test(e)?e.slice(0,2)+T:T;f(c(w,l,0))}),c=(l,f,g)=>new Promise((S,y)=>{if(g===o.length)return S(a(f+1));let T=o[g];Ye(l+T,{pathExt:s},(w,A)=>{if(!w&&A)if(t.all)i.push(l+T);else return S(l+T);return S(c(l,f,g+1))})});return r?a(0).then(l=>r(null,l),r):a(0)},_r=(e,t)=>{t=t||{};let{pathEnv:r,pathExt:n,pathExtExe:o}=qe(e,t),s=[];for(let i=0;i<r.length;i++){let a=r[i],c=/^".*"$/.test(a)?a.slice(1,-1):a,l=Ke.join(c,e),f=!c&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let g=0;g<n.length;g++){let S=f+n[g];try{if(Ye.sync(S,{pathExt:o}))if(t.all)s.push(S);else return S}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw We(e)};ze.exports=Xe;Xe.sync=_r});var Ze=m((Wn,oe)=>{"use strict";var Je=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(n=>n.toUpperCase()==="PATH")||"Path"};oe.exports=Je;oe.exports.default=Je});var nt=m((qn,rt)=>{"use strict";var et=require("path"),vr=Qe(),Cr=Ze();function tt(e,t){let r=e.options.env||process.env,n=process.cwd(),o=e.options.cwd!=null,s=o&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let i;try{i=vr.sync(e.command,{path:r[Cr({env:r})],pathExt:t?et.delimiter:void 0})}catch{}finally{s&&process.chdir(n)}return i&&(i=et.resolve(o?e.options.cwd:"",i)),i}function Nr(e){return tt(e)||tt(e,!0)}rt.exports=Nr});var ot=m((Xn,ie)=>{"use strict";var se=/([()\][%!^"`<>&|;, *?])/g;function Lr(e){return e=e.replace(se,"^$1"),e}function kr(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(se,"^$1"),t&&(e=e.replace(se,"^$1")),e}ie.exports.command=Lr;ie.exports.argument=kr});var it=m((zn,st)=>{"use strict";st.exports=/^#!(.*)/});var ct=m((Qn,at)=>{"use strict";var Mr=it();at.exports=(e="")=>{let t=e.match(Mr);if(!t)return null;let[r,n]=t[0].replace(/#! ?/,"").split(" "),o=r.split("/").pop();return o==="env"?n:n?`${o} ${n}`:o}});var lt=m((Jn,ut)=>{"use strict";var ae=require("fs"),Gr=ct();function Ur(e){let r=Buffer.alloc(150),n;try{n=ae.openSync(e,"r"),ae.readSync(n,r,0,150,0),ae.closeSync(n)}catch{}return Gr(r.toString())}ut.exports=Ur});var pt=m((Zn,mt)=>{"use strict";var Dr=require("path"),dt=nt(),ft=ot(),Vr=lt(),Fr=process.platform==="win32",Br=/\.(?:com|exe)$/i,Hr=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function jr(e){e.file=dt(e);let t=e.file&&Vr(e.file);return t?(e.args.unshift(e.file),e.command=t,dt(e)):e.file}function $r(e){if(!Fr)return e;let t=jr(e),r=!Br.test(t);if(e.options.forceShell||r){let n=Hr.test(t);e.command=Dr.normalize(e.command),e.command=ft.command(e.command),e.args=e.args.map(s=>ft.argument(s,n));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Kr(e,t,r){t&&!Array.isArray(t)&&(r=t,t=null),t=t?t.slice(0):[],r=Object.assign({},r);let n={command:e,args:t,options:r,file:void 0,original:{command:e,args:t}};return r.shell?n:$r(n)}mt.exports=Kr});var gt=m((eo,St)=>{"use strict";var ce=process.platform==="win32";function ue(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Yr(e,t){if(!ce)return;let r=e.emit;e.emit=function(n,o){if(n==="exit"){let s=ht(o,t,"spawn");if(s)return r.call(e,"error",s)}return r.apply(e,arguments)}}function ht(e,t){return ce&&e===1&&!t.file?ue(t.original,"spawn"):null}function Wr(e,t){return ce&&e===1&&!t.file?ue(t.original,"spawnSync"):null}St.exports={hookChildProcess:Yr,verifyENOENT:ht,verifyENOENTSync:Wr,notFoundError:ue}});var Tt=m((to,_)=>{"use strict";var Et=require("child_process"),le=pt(),de=gt();function yt(e,t,r){let n=le(e,t,r),o=Et.spawn(n.command,n.args,n.options);return de.hookChildProcess(o,n),o}function qr(e,t,r){let n=le(e,t,r),o=Et.spawnSync(n.command,n.args,n.options);return o.error=o.error||de.verifyENOENTSync(o.status,n),o}_.exports=yt;_.exports.spawn=yt;_.exports.sync=qr;_.exports._parse=le;_.exports._enoent=de});var Lt=m((wo,W)=>{W.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&W.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&W.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Dt=m((xo,L)=>{var u=global.process,b=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};b(u)?(kt=require("assert"),C=Lt(),Mt=/^win/i.test(u.platform),M=require("events"),typeof M!="function"&&(M=M.EventEmitter),u.__signal_exit_emitter__?p=u.__signal_exit_emitter__:(p=u.__signal_exit_emitter__=new M,p.count=0,p.emitted={}),p.infinite||(p.setMaxListeners(1/0),p.infinite=!0),L.exports=function(e,t){if(!b(global.process))return function(){};kt.equal(typeof e,"function","a callback must be provided for exit handler"),N===!1&&Se();var r="exit";t&&t.alwaysLast&&(r="afterexit");var n=function(){p.removeListener(r,e),p.listeners("exit").length===0&&p.listeners("afterexit").length===0&&q()};return p.on(r,e),n},q=function(){!N||!b(global.process)||(N=!1,C.forEach(function(t){try{u.removeListener(t,X[t])}catch{}}),u.emit=z,u.reallyExit=ge,p.count-=1)},L.exports.unload=q,O=function(t,r,n){p.emitted[t]||(p.emitted[t]=!0,p.emit(t,r,n))},X={},C.forEach(function(e){X[e]=function(){if(b(global.process)){var r=u.listeners(e);r.length===p.count&&(q(),O("exit",null,e),O("afterexit",null,e),Mt&&e==="SIGHUP"&&(e="SIGINT"),u.kill(u.pid,e))}}}),L.exports.signals=function(){return C},N=!1,Se=function(){N||!b(global.process)||(N=!0,p.count+=1,C=C.filter(function(t){try{return u.on(t,X[t]),!0}catch{return!1}}),u.emit=Ut,u.reallyExit=Gt)},L.exports.load=Se,ge=u.reallyExit,Gt=function(t){b(global.process)&&(u.exitCode=t||0,O("exit",u.exitCode,null),O("afterexit",u.exitCode,null),ge.call(u,u.exitCode))},z=u.emit,Ut=function(t,r){if(t==="exit"&&b(global.process)){r!==void 0&&(u.exitCode=r);var n=z.apply(this,arguments);return O("exit",u.exitCode,null),O("afterexit",u.exitCode,null),n}else return z.apply(this,arguments)}):L.exports=function(){return function(){}};var kt,C,Mt,M,p,q,O,X,N,Se,ge,Gt,z,Ut});var qt=m((bo,Wt)=>{"use strict";var{PassThrough:yn}=require("stream");Wt.exports=e=>{e={...e};let{array:t}=e,{encoding:r}=e,n=r==="buffer",o=!1;t?o=!(r||n):r=r||"utf8",n&&(r=null);let s=new yn({objectMode:o});r&&s.setEncoding(r);let i=0,a=[];return s.on("data",c=>{a.push(c),o?i=a.length:i+=c.length}),s.getBufferedValue=()=>t?a:n?Buffer.concat(a,i):a.join(""),s.getBufferedLength=()=>i,s}});var Xt=m((Oo,G)=>{"use strict";var{constants:Tn}=require("buffer"),wn=require("stream"),{promisify:xn}=require("util"),In=qt(),Pn=xn(wn.pipeline),Q=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function Ee(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:r}=t,n=In(t);return await new Promise((o,s)=>{let i=a=>{a&&n.getBufferedLength()<=Tn.MAX_LENGTH&&(a.bufferedData=n.getBufferedValue()),s(a)};(async()=>{try{await Pn(e,n),o()}catch(a){i(a)}})(),n.on("data",()=>{n.getBufferedLength()>r&&i(new Q)})}),n.getBufferedValue()}G.exports=Ee;G.exports.buffer=(e,t)=>Ee(e,{...t,encoding:"buffer"});G.exports.array=(e,t)=>Ee(e,{...t,array:!0});G.exports.MaxBufferError=Q});var Qt=m((Ao,zt)=>{"use strict";var{PassThrough:bn}=require("stream");zt.exports=function(){var e=[],t=new bn({objectMode:!0});return t.setMaxListeners(0),t.add=r,t.isEmpty=n,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(r),t;function r(s){return Array.isArray(s)?(s.forEach(r),this):(e.push(s),s.once("end",o.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function n(){return e.length==0}function o(s){e=e.filter(function(i){return i!==s}),!e.length&&t.readable&&t.end()}}});var Fn={};wr(Fn,{default:()=>Vn});module.exports=xr(Fn);var P=require("@raycast/api");var h=require("@raycast/api");var ir=require("node:buffer"),ar=x(require("node:path"),1),Pe=x(require("node:child_process"),1),U=x(require("node:process"),1),cr=x(Tt(),1);function fe(e){let t=typeof e=="string"?`
`:`
`.charCodeAt(),r=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===r&&(e=e.slice(0,-1)),e}var k=x(require("node:process"),1),v=x(require("node:path"),1),wt=x(require("node:url"),1);function $(e={}){let{env:t=process.env,platform:r=process.platform}=e;return r!=="win32"?"PATH":Object.keys(t).reverse().find(n=>n.toUpperCase()==="PATH")||"Path"}function Xr(e={}){let{cwd:t=k.default.cwd(),path:r=k.default.env[$()],execPath:n=k.default.execPath}=e,o,s=t instanceof URL?wt.default.fileURLToPath(t):t,i=v.default.resolve(s),a=[];for(;o!==i;)a.push(v.default.join(i,"node_modules/.bin")),o=i,i=v.default.resolve(i,"..");return a.push(v.default.resolve(s,n,"..")),[...a,r].join(v.default.delimiter)}function xt({env:e=k.default.env,...t}={}){e={...e};let r=$({env:e});return t.path=e[r],e[r]=Xr(t),e}var zr=(e,t,r,n)=>{if(r==="length"||r==="prototype"||r==="arguments"||r==="caller")return;let o=Object.getOwnPropertyDescriptor(e,r),s=Object.getOwnPropertyDescriptor(t,r);!Qr(o,s)&&n||Object.defineProperty(e,r,s)},Qr=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},Jr=(e,t)=>{let r=Object.getPrototypeOf(t);r!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,r)},Zr=(e,t)=>`/* Wrapped ${e}*/
${t}`,en=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),tn=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),rn=(e,t,r)=>{let n=r===""?"":`with ${r.trim()}() `,o=Zr.bind(null,n,t.toString());Object.defineProperty(o,"name",tn),Object.defineProperty(e,"toString",{...en,value:o})};function me(e,t,{ignoreNonConfigurable:r=!1}={}){let{name:n}=e;for(let o of Reflect.ownKeys(t))zr(e,t,o,r);return Jr(e,t),rn(e,t,n),e}var K=new WeakMap,It=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let r,n=0,o=e.displayName||e.name||"<anonymous>",s=function(...i){if(K.set(s,++n),n===1)r=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return r};return me(s,e),K.set(s,n),s};It.callCount=e=>{if(!K.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return K.get(e)};var Pt=It;var vt=require("node:os");var bt=function(){let e=At-Ot+1;return Array.from({length:e},nn)},nn=function(e,t){return{name:`SIGRT${t+1}`,number:Ot+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Ot=34,At=64;var _t=require("node:os");var Rt=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];var pe=function(){let e=bt();return[...Rt,...e].map(on)},on=function({name:e,number:t,description:r,action:n,forced:o=!1,standard:s}){let{signals:{[e]:i}}=_t.constants,a=i!==void 0;return{name:e,number:a?i:t,description:r,supported:a,action:n,forced:o,standard:s}};var sn=function(){let e=pe();return Object.fromEntries(e.map(an))},an=function({name:e,number:t,description:r,supported:n,action:o,forced:s,standard:i}){return[e,{name:e,number:t,description:r,supported:n,action:o,forced:s,standard:i}]},Ct=sn(),cn=function(){let e=pe(),t=64+1,r=Array.from({length:t},(n,o)=>un(o,e));return Object.assign({},...r)},un=function(e,t){let r=ln(e,t);if(r===void 0)return{};let{name:n,description:o,supported:s,action:i,forced:a,standard:c}=r;return{[e]:{name:n,number:e,description:o,supported:s,action:i,forced:a,standard:c}}},ln=function(e,t){let r=t.find(({name:n})=>vt.constants.signals[n]===e);return r!==void 0?r:t.find(n=>n.number===e)},So=cn();var dn=({timedOut:e,timeout:t,errorCode:r,signal:n,signalDescription:o,exitCode:s,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":r!==void 0?`failed with ${r}`:n!==void 0?`was killed with ${n} (${o})`:s!==void 0?`failed with exit code ${s}`:"failed",he=({stdout:e,stderr:t,all:r,error:n,signal:o,exitCode:s,command:i,escapedCommand:a,timedOut:c,isCanceled:l,killed:f,parsed:{options:{timeout:g}}})=>{s=s===null?void 0:s,o=o===null?void 0:o;let S=o===void 0?void 0:Ct[o].description,y=n&&n.code,w=`Command ${dn({timedOut:c,timeout:g,errorCode:y,signal:o,signalDescription:S,exitCode:s,isCanceled:l})}: ${i}`,A=Object.prototype.toString.call(n)==="[object Error]",F=A?`${w}
${n.message}`:w,B=[F,t,e].filter(Boolean).join(`
`);return A?(n.originalMessage=n.message,n.message=B):n=new Error(B),n.shortMessage=F,n.command=i,n.escapedCommand=a,n.exitCode=s,n.signal=o,n.signalDescription=S,n.stdout=e,n.stderr=t,r!==void 0&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=!!c,n.isCanceled=l,n.killed=f&&!c,n};var Y=["stdin","stdout","stderr"],fn=e=>Y.some(t=>e[t]!==void 0),Nt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return Y.map(n=>e[n]);if(fn(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${Y.map(n=>`\`${n}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let r=Math.max(t.length,Y.length);return Array.from({length:r},(n,o)=>t[o])};var Vt=x(require("node:os"),1),Ft=x(Dt(),1),mn=1e3*5,Bt=(e,t="SIGTERM",r={})=>{let n=e(t);return pn(e,t,r,n),n},pn=(e,t,r,n)=>{if(!hn(t,r,n))return;let o=gn(r),s=setTimeout(()=>{e("SIGKILL")},o);s.unref&&s.unref()},hn=(e,{forceKillAfterTimeout:t},r)=>Sn(e)&&t!==!1&&r,Sn=e=>e===Vt.default.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",gn=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return mn;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Ht=(e,t)=>{e.kill()&&(t.isCanceled=!0)},En=(e,t,r)=>{e.kill(t),r(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},jt=(e,{timeout:t,killSignal:r="SIGTERM"},n)=>{if(t===0||t===void 0)return n;let o,s=new Promise((a,c)=>{o=setTimeout(()=>{En(e,r,c)},t)}),i=n.finally(()=>{clearTimeout(o)});return Promise.race([s,i])},$t=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Kt=async(e,{cleanup:t,detached:r},n)=>{if(!t||r)return n;let o=(0,Ft.default)(()=>{e.kill()});return n.finally(()=>{o()})};function Yt(e){return e!==null&&typeof e=="object"&&typeof e.pipe=="function"}var we=x(Xt(),1),Jt=x(Qt(),1),Zt=(e,t)=>{t!==void 0&&(Yt(t)?t.pipe(e.stdin):e.stdin.end(t))},er=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let r=(0,Jt.default)();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r},ye=async(e,t)=>{if(!(!e||t===void 0)){e.destroy();try{return await t}catch(r){return r.bufferedData}}},Te=(e,{encoding:t,buffer:r,maxBuffer:n})=>{if(!(!e||!r))return t?(0,we.default)(e,{encoding:t,maxBuffer:n}):we.default.buffer(e,{maxBuffer:n})},tr=async({stdout:e,stderr:t,all:r},{encoding:n,buffer:o,maxBuffer:s},i)=>{let a=Te(e,{encoding:n,buffer:o,maxBuffer:s}),c=Te(t,{encoding:n,buffer:o,maxBuffer:s}),l=Te(r,{encoding:n,buffer:o,maxBuffer:s*2});try{return await Promise.all([i,a,c,l])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},ye(e,a),ye(t,c),ye(r,l)])}};var On=(async()=>{})().constructor.prototype,An=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(On,e)]),xe=(e,t)=>{for(let[r,n]of An){let o=typeof t=="function"?(...s)=>Reflect.apply(n.value,t(),s):n.value.bind(t);Reflect.defineProperty(e,r,{...n,value:o})}return e},rr=e=>new Promise((t,r)=>{e.on("exit",(n,o)=>{t({exitCode:n,signal:o})}),e.on("error",n=>{r(n)}),e.stdin&&e.stdin.on("error",n=>{r(n)})});var nr=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Rn=/^[\w.-]+$/,_n=/"/g,vn=e=>typeof e!="string"||Rn.test(e)?e:`"${e.replace(_n,'\\"')}"`,or=(e,t)=>nr(e,t).join(" "),sr=(e,t)=>nr(e,t).map(r=>vn(r)).join(" ");var Cn=1e3*1e3*100,Nn=({env:e,extendEnv:t,preferLocal:r,localDir:n,execPath:o})=>{let s=t?{...U.default.env,...e}:e;return r?xt({env:s,cwd:n,execPath:o}):s},Ln=(e,t,r={})=>{let n=cr.default._parse(e,t,r);return e=n.command,t=n.args,r=n.options,r={maxBuffer:Cn,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:r.cwd||U.default.cwd(),execPath:U.default.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...r},r.env=Nn(r),r.stdio=Nt(r),U.default.platform==="win32"&&ar.default.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:r,parsed:n}},Ie=(e,t,r)=>typeof t!="string"&&!ir.Buffer.isBuffer(t)?r===void 0?void 0:"":e.stripFinalNewline?fe(t):t;function ur(e,t,r){let n=Ln(e,t,r),o=or(e,t),s=sr(e,t);$t(n.options);let i;try{i=Pe.default.spawn(n.file,n.args,n.options)}catch(y){let T=new Pe.default.ChildProcess,w=Promise.reject(he({error:y,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:n,timedOut:!1,isCanceled:!1,killed:!1}));return xe(T,w)}let a=rr(i),c=jt(i,n.options,a),l=Kt(i,n.options,c),f={isCanceled:!1};i.kill=Bt.bind(null,i.kill.bind(i)),i.cancel=Ht.bind(null,i,f);let S=Pt(async()=>{let[{error:y,exitCode:T,signal:w,timedOut:A},F,B,hr]=await tr(i,n.options,l),Re=Ie(n.options,F),_e=Ie(n.options,B),ve=Ie(n.options,hr);if(y||T!==0||w!==null){let Ce=he({error:y,exitCode:T,signal:w,stdout:Re,stderr:_e,all:ve,command:o,escapedCommand:s,parsed:n,timedOut:A,isCanceled:f.isCanceled||(n.options.signal?n.options.signal.aborted:!1),killed:i.killed});if(!n.options.reject)return Ce;throw Ce}return{command:o,escapedCommand:s,exitCode:0,stdout:Re,stderr:_e,all:ve,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return Zt(i,n.options.input),i.all=er(i,n.options),xe(i,S)}var mr=require("fs"),pr=require("path/posix");var D=require("@raycast/api");var lr="https://bitwarden.com";var d={PASSWORD_OPTIONS:"bw-generate-password-options",PASSWORD_ONE_TIME_WARNING:"bw-generate-password-warning-accepted",SESSION_TOKEN:"sessionToken",REPROMPT_HASH:"sessionRepromptHash",SERVER_URL:"cliServer",LAST_ACTIVITY_TIME:"lastActivityTime",VAULT_LOCK_REASON:"vaultLockReason",VAULT_FAVORITE_ORDER:"vaultFavoriteOrder"},be={TIMEOUT:"Vault timed out due to inactivity",MANUAL:"Manually locked by the user"};var qo={[1]:D.Icon.Globe,[3]:D.Icon.CreditCard,[4]:D.Icon.Person,[2]:D.Icon.Document};var Mn=require("@raycast/api");function dr(e){return Object.entries(e).flatMap(([t,r])=>r?[`--${t}`,r]:[])}var Oe=require("@raycast/api");var Gn={IMMEDIATELY:"0",ONE_MINUTE:"60000",FIVE_MINUTES:"300000",FIFTEEN_MINUTES:"900000",THIRTY_MINUTES:"1800000",ONE_HOUR:"3600000",FOUR_HOURS:"14400000",EIGHT_HOURS:"28800000",ONE_DAY:"86400000",NEVER:"-1"},I=Object.entries(Gn).reduce((e,[t,r])=>(e[t]=parseInt(r),e),{});var Un={[I.IMMEDIATELY]:"Immediately",[I.ONE_MINUTE]:"1 Minute",[I.FIVE_MINUTES]:"5 Minutes",[I.FIFTEEN_MINUTES]:"15 Minutes",[I.THIRTY_MINUTES]:"30 Minutes",[I.ONE_HOUR]:"1 Hour",[I.FOUR_HOURS]:"4 Hours",[I.EIGHT_HOURS]:"8 Hours",[I.ONE_DAY]:"1 Day"};var as={[1]:"Login",[3]:"Card",[4]:"Identity",[2]:"Secure Note"};function fr(){let{serverUrl:e}=(0,Oe.getPreferenceValues)();return e===""||e==="bitwarden.com"||e==="https://bitwarden.com"?"":e}var J=class extends Error{constructor(t){super(t)}},Z=class extends J{constructor(t){super(t)}};var ee=class extends Z{constructor(t){super(t??"Bitwarden CLI not found"),this.name="CLINotFoundError"}};var te=class extends Z{constructor(t){super(t??"Vault is locked"),this.name="VaultIsLockedError"}},V=class extends J{constructor(t){super(t??"Not logged in"),this.name="NotLoggedInError"}};var re=class{constructor(){this.callbacks={};let{cliPath:t,clientId:r,clientSecret:n,serverCertsPath:o}=(0,h.getPreferenceValues)(),s=fr();if(this.cliPath=t||(process.arch=="arm64"?"/opt/homebrew/bin/bw":"/usr/local/bin/bw"),!(0,mr.existsSync)(this.cliPath))throw new ee(`Bitwarden CLI not found at ${this.cliPath}`);this.env={BITWARDENCLI_APPDATA_DIR:h.environment.supportPath,BW_CLIENTSECRET:n.trim(),BW_CLIENTID:r.trim(),PATH:(0,pr.dirname)(process.execPath),...s&&o?{NODE_EXTRA_CA_CERTS:o}:{}},this.initPromise=(async()=>{await this.checkServerUrl(s),this.lockReason=await h.LocalStorage.getItem(d.VAULT_LOCK_REASON)})()}setActionCallback(t,r){return this.callbacks[t]=r,this}setSessionToken(t){this.env={...this.env,BW_SESSION:t}}clearSessionToken(){delete this.env.BW_SESSION}withSession(t){return this.tempSessionToken=t,this}async initialize(){return await this.initPromise,this}async checkServerUrl(t){if((await h.LocalStorage.getItem(d.SERVER_URL)||"")===t)return;let n=await(0,h.showToast)({style:h.Toast.Style.Animated,title:"Switching server...",message:"Bitwarden server preference changed"});try{try{await this.logout()}catch{}await this.exec(["config","server",t||lr]),await h.LocalStorage.setItem(d.SERVER_URL,t),n.style=h.Toast.Style.Success,n.title="Success",n.message="Bitwarden server changed"}catch(o){n.style=h.Toast.Style.Failure,n.title="Failed to switch server",o instanceof Error?n.message=o.message:n.message="Unknown error occurred"}}async setLockReason(t){this.lockReason=t,await h.LocalStorage.setItem(d.VAULT_LOCK_REASON,t)}async clearLockReason(){this.lockReason&&(await h.LocalStorage.removeItem(d.VAULT_LOCK_REASON),this.lockReason=void 0)}async exec(t,r){let{abortController:n,input:o="",skipLastActivityUpdate:s=!1}=r??{},i=this.env;this.tempSessionToken&&(i={...i,BW_SESSION:this.tempSessionToken});let a=await ur(this.cliPath,t,{env:i,input:o,signal:n?.signal});if(s||await h.LocalStorage.setItem(d.LAST_ACTIVITY_TIME,new Date().toISOString()),this.tempSessionToken&&(this.tempSessionToken=void 0),this.isPromptWaitingForMasterPassword(a))throw await this.lock(),new te;return a}async login(){try{return await this.exec(["login","--apikey"]),await this.clearLockReason(),await this.callbacks.login?.(),{result:void 0}}catch(t){let{error:r}=await this.handleCommonErrors(t);if(!r)throw t;return{error:r}}}async logout(){try{return await this.exec(["logout"]),await this.handlePostLogout(),{result:void 0}}catch(t){let{error:r}=await this.handleCommonErrors(t);if(!r)throw t;return{error:r}}}async lock(t,r){try{if(r){let{error:n,result:o}=await this.status();if(n)throw n;if(o.status!=="unauthenticated")return{error:new V("Not logged in")}}return t&&await this.setLockReason(t),await this.exec(["lock"]),await this.callbacks.lock?.(t),{result:void 0}}catch(n){let{error:o}=await this.handleCommonErrors(n);if(!o)throw n;return{error:o}}}async unlock(t){try{let{stdout:r}=await this.exec(["unlock",t,"--raw"]);return this.setSessionToken(r),await this.clearLockReason(),await this.callbacks.unlock?.(t,r),{result:r}}catch(r){let{error:n}=await this.handleCommonErrors(r);if(!n)throw r;return{error:n}}}async sync(){try{return await this.exec(["sync"]),{result:void 0}}catch(t){let{error:r}=await this.handleCommonErrors(t);if(!r)throw t;return{error:r}}}async listItems(){try{let{stdout:t}=await this.exec(["list","items"]);return{result:JSON.parse(t).filter(n=>!!n.name)}}catch(t){let{error:r}=await this.handleCommonErrors(t);if(!r)throw t;return{error:r}}}async listFolders(){try{let{stdout:t}=await this.exec(["list","folders"]);return{result:JSON.parse(t)}}catch(t){let{error:r}=await this.handleCommonErrors(t);if(!r)throw t;return{error:r}}}async getTotp(t){try{let{stdout:r}=await this.exec(["get","totp",t]);return{result:r}}catch(r){let{error:n}=await this.handleCommonErrors(r);if(!n)throw r;return{error:n}}}async status(){try{let{stdout:t}=await this.exec(["status"]);return{result:JSON.parse(t)}}catch(t){let{error:r}=await this.handleCommonErrors(t);if(!r)throw t;return{error:r}}}async checkLockStatus(){try{return await this.exec(["unlock","--check"]),"unlocked"}catch(t){return t.stderr==="Vault is locked."?"locked":"unauthenticated"}}async generatePassword(t,r){let n=t?dr(t):[],{stdout:o}=await this.exec(["generate",...n],{abortController:r});return o}isPromptWaitingForMasterPassword(t){return!!(t.stderr&&t.stderr.includes("Master password"))}async handlePostLogout(){this.clearSessionToken(),await this.callbacks.logout?.()}async handleCommonErrors(t){let r=t.stderr;return r?/not logged in/i.test(r)?(await this.handlePostLogout(),{error:new V("Not logged in")}):{}:{}}};var E=require("@raycast/api");var Ae={getSavedSession:()=>Promise.all([E.LocalStorage.getItem(d.SESSION_TOKEN),E.LocalStorage.getItem(d.REPROMPT_HASH),E.LocalStorage.getItem(d.LAST_ACTIVITY_TIME)]),clearSession:async()=>{await Promise.all([E.LocalStorage.removeItem(d.SESSION_TOKEN),E.LocalStorage.removeItem(d.REPROMPT_HASH)])},saveSession:async(e,t)=>{await Promise.all([E.LocalStorage.setItem(d.SESSION_TOKEN,e),E.LocalStorage.setItem(d.REPROMPT_HASH,t)])},logoutClearSession:async()=>{await Promise.all([E.LocalStorage.removeItem(d.SESSION_TOKEN),E.LocalStorage.removeItem(d.REPROMPT_HASH),E.LocalStorage.removeItem(d.LAST_ACTIVITY_TIME),E.LocalStorage.removeItem(d.VAULT_LOCK_REASON)])}};async function Dn(){try{await(0,P.showToast)(P.Toast.Style.Animated,"Locking vault...","Please wait");let[e]=await Ae.getSavedSession();if(!e){await(0,P.showToast)(P.Toast.Style.Failure,"No session found","Already locked or not logged in");return}await(await new re().initialize()).withSession(e).lock(be.MANUAL),await Ae.clearSession(),await(0,P.showToast)(P.Toast.Style.Success,"Vault successfully locked")}catch{await(0,P.showToast)(P.Toast.Style.Failure,"Failed to lock vault")}}var Vn=Dn;