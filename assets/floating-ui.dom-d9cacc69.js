import{R as jt,r as z}from"./index-3b0a30fd.js";import{m as Ee}from"./emotion-memoize.esm-f5713a00.js";function Yt(){return Yt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yt.apply(this,arguments)}function Ae(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Oe(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Re=function(){function t(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Oe(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Ae(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),T="-ms-",bt="-moz-",v="-webkit-",ne="comm",Mt="rule",Ft="decl",Se="@import",re="@keyframes",Te="@layer",ke=Math.abs,At=String.fromCharCode,Pe=Object.assign;function Le(t,e){return S(t,0)^45?(((e<<2^S(t,0))<<2^S(t,1))<<2^S(t,2))<<2^S(t,3):0}function ie(t){return t.trim()}function $e(t,e){return(t=e.exec(t))?t[0]:t}function C(t,e,n){return t.replace(e,n)}function Lt(t,e){return t.indexOf(e)}function S(t,e){return t.charCodeAt(e)|0}function at(t,e,n){return t.slice(e,n)}function W(t){return t.length}function Wt(t){return t.length}function gt(t,e){return e.push(t),t}function Ne(t,e){return t.map(e).join("")}var Ot=1,J=1,oe=0,k=0,R=0,nt="";function Rt(t,e,n,r,i,o,s){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:Ot,column:J,length:s,return:""}}function ct(t,e){return Pe(Rt("",null,null,"",null,null,0),t,{length:-t.length},e)}function De(){return R}function Me(){return R=k>0?S(nt,--k):0,J--,R===10&&(J=1,Ot--),R}function L(){return R=k<oe?S(nt,k++):0,J++,R===10&&(J=1,Ot++),R}function _(){return S(nt,k)}function wt(){return k}function dt(t,e){return at(nt,t,e)}function ft(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function se(t){return Ot=J=1,oe=W(nt=t),k=0,[]}function ce(t){return nt="",t}function yt(t){return ie(dt(k-1,$t(t===91?t+2:t===40?t+1:t)))}function Fe(t){for(;(R=_())&&R<33;)L();return ft(t)>2||ft(R)>3?"":" "}function We(t,e){for(;--e&&L()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return dt(t,wt()+(e<6&&_()==32&&L()==32))}function $t(t){for(;L();)switch(R){case t:return k;case 34:case 39:t!==34&&t!==39&&$t(R);break;case 40:t===41&&$t(t);break;case 92:L();break}return k}function Ie(t,e){for(;L()&&t+R!==47+10;)if(t+R===42+42&&_()===47)break;return"/*"+dt(e,k-1)+"*"+At(t===47?t:L())}function _e(t){for(;!ft(_());)L();return dt(t,k)}function Ve(t){return ce(xt("",null,null,null,[""],t=se(t),0,[0],t))}function xt(t,e,n,r,i,o,s,c,a){for(var f=0,u=0,l=s,p=0,d=0,g=0,h=1,w=1,m=1,y=0,b="",O=i,E=o,A=r,x=b;w;)switch(g=y,y=L()){case 40:if(g!=108&&S(x,l-1)==58){Lt(x+=C(yt(y),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:x+=yt(y);break;case 9:case 10:case 13:case 32:x+=Fe(g);break;case 92:x+=We(wt()-1,7);continue;case 47:switch(_()){case 42:case 47:gt(Be(Ie(L(),wt()),e,n),a);break;default:x+="/"}break;case 123*h:c[f++]=W(x)*m;case 125*h:case 59:case 0:switch(y){case 0:case 125:w=0;case 59+u:m==-1&&(x=C(x,/\f/g,"")),d>0&&W(x)-l&&gt(d>32?Xt(x+";",r,n,l-1):Xt(C(x," ","")+";",r,n,l-2),a);break;case 59:x+=";";default:if(gt(A=Gt(x,e,n,f,u,i,c,b,O=[],E=[],l),o),y===123)if(u===0)xt(x,e,A,A,O,o,l,c,E);else switch(p===99&&S(x,3)===110?100:p){case 100:case 108:case 109:case 115:xt(t,A,A,r&&gt(Gt(t,A,A,0,0,i,c,b,i,O=[],l),E),i,E,l,c,r?O:E);break;default:xt(x,A,A,A,[""],E,0,c,E)}}f=u=d=0,h=m=1,b=x="",l=s;break;case 58:l=1+W(x),d=g;default:if(h<1){if(y==123)--h;else if(y==125&&h++==0&&Me()==125)continue}switch(x+=At(y),y*h){case 38:m=u>0?1:(x+="\f",-1);break;case 44:c[f++]=(W(x)-1)*m,m=1;break;case 64:_()===45&&(x+=yt(L())),p=_(),u=l=W(b=x+=_e(wt())),y++;break;case 45:g===45&&W(x)==2&&(h=0)}}return o}function Gt(t,e,n,r,i,o,s,c,a,f,u){for(var l=i-1,p=i===0?o:[""],d=Wt(p),g=0,h=0,w=0;g<r;++g)for(var m=0,y=at(t,l+1,l=ke(h=s[g])),b=t;m<d;++m)(b=ie(h>0?p[m]+" "+y:C(y,/&\f/g,p[m])))&&(a[w++]=b);return Rt(t,e,n,i===0?Mt:c,a,f,u)}function Be(t,e,n){return Rt(t,e,n,ne,At(De()),at(t,2,-2),0)}function Xt(t,e,n,r){return Rt(t,e,n,Ft,at(t,0,r),at(t,r+1,-1),r)}function U(t,e){for(var n="",r=Wt(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function ze(t,e,n,r){switch(t.type){case Te:if(t.children.length)break;case Se:case Ft:return t.return=t.return||t.value;case ne:return"";case re:return t.return=t.value+"{"+U(t.children,r)+"}";case Mt:t.value=t.props.join(",")}return W(n=U(t.children,r))?t.return=t.value+"{"+n+"}":""}function He(t){var e=Wt(t);return function(n,r,i,o){for(var s="",c=0;c<e;c++)s+=t[c](n,r,i,o)||"";return s}}function je(t){return function(e){e.root||(e=e.return)&&t(e)}}var Ye=function(e,n,r){for(var i=0,o=0;i=o,o=_(),i===38&&o===12&&(n[r]=1),!ft(o);)L();return dt(e,k)},Ge=function(e,n){var r=-1,i=44;do switch(ft(i)){case 0:i===38&&_()===12&&(n[r]=1),e[r]+=Ye(k-1,n,r);break;case 2:e[r]+=yt(i);break;case 4:if(i===44){e[++r]=_()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=At(i)}while(i=L());return e},Xe=function(e,n){return ce(Ge(se(e),n))},qt=new WeakMap,qe=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!qt.get(r))&&!i){qt.set(e,!0);for(var o=[],s=Xe(n,o),c=r.props,a=0,f=0;a<s.length;a++)for(var u=0;u<c.length;u++,f++)e.props[f]=o[a]?s[a].replace(/&\f/g,c[u]):c[u]+" "+s[a]}}},Ke=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function ae(t,e){switch(Le(t,e)){case 5103:return v+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return v+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return v+t+bt+t+T+t+t;case 6828:case 4268:return v+t+T+t+t;case 6165:return v+t+T+"flex-"+t+t;case 5187:return v+t+C(t,/(\w+).+(:[^]+)/,v+"box-$1$2"+T+"flex-$1$2")+t;case 5443:return v+t+T+"flex-item-"+C(t,/flex-|-self/,"")+t;case 4675:return v+t+T+"flex-line-pack"+C(t,/align-content|flex-|-self/,"")+t;case 5548:return v+t+T+C(t,"shrink","negative")+t;case 5292:return v+t+T+C(t,"basis","preferred-size")+t;case 6060:return v+"box-"+C(t,"-grow","")+v+t+T+C(t,"grow","positive")+t;case 4554:return v+C(t,/([^-])(transform)/g,"$1"+v+"$2")+t;case 6187:return C(C(C(t,/(zoom-|grab)/,v+"$1"),/(image-set)/,v+"$1"),t,"")+t;case 5495:case 3959:return C(t,/(image-set\([^]*)/,v+"$1$`$1");case 4968:return C(C(t,/(.+:)(flex-)?(.*)/,v+"box-pack:$3"+T+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+v+t+t;case 4095:case 3583:case 4068:case 2532:return C(t,/(.+)-inline(.+)/,v+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(W(t)-1-e>6)switch(S(t,e+1)){case 109:if(S(t,e+4)!==45)break;case 102:return C(t,/(.+:)(.+)-([^]+)/,"$1"+v+"$2-$3$1"+bt+(S(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Lt(t,"stretch")?ae(C(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(S(t,e+1)!==115)break;case 6444:switch(S(t,W(t)-3-(~Lt(t,"!important")&&10))){case 107:return C(t,":",":"+v)+t;case 101:return C(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+v+(S(t,14)===45?"inline-":"")+"box$3$1"+v+"$2$3$1"+T+"$2box$3")+t}break;case 5936:switch(S(t,e+11)){case 114:return v+t+T+C(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return v+t+T+C(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return v+t+T+C(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return v+t+T+t+t}return t}var Ue=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case Ft:e.return=ae(e.value,e.length);break;case re:return U([ct(e,{value:C(e.value,"@","@"+v)})],i);case Mt:if(e.length)return Ne(e.props,function(o){switch($e(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return U([ct(e,{props:[C(o,/:(read-\w+)/,":"+bt+"$1")]})],i);case"::placeholder":return U([ct(e,{props:[C(o,/:(plac\w+)/,":"+v+"input-$1")]}),ct(e,{props:[C(o,/:(plac\w+)/,":"+bt+"$1")]}),ct(e,{props:[C(o,/:(plac\w+)/,T+"input-$1")]})],i)}return""})}},Ze=[Ue],Je=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(h){var w=h.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var i=e.stylisPlugins||Ze,o={},s,c=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(h){for(var w=h.getAttribute("data-emotion").split(" "),m=1;m<w.length;m++)o[w[m]]=!0;c.push(h)});var a,f=[qe,Ke];{var u,l=[ze,je(function(h){u.insert(h)})],p=He(f.concat(i,l)),d=function(w){return U(Ve(w),p)};a=function(w,m,y,b){u=y,d(w?w+"{"+m.styles+"}":m.styles),b&&(g.inserted[m.name]=!0)}}var g={key:n,sheet:new Re({key:n,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:a};return g.sheet.hydrate(c),g},Qe=!0;function tn(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var fe=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||Qe===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},en=function(e,n,r){fe(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+i:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function nn(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var rn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},on=/[A-Z]|^ms/g,sn=/_EMO_([^_]+?)_([^]*?)_EMO_/g,le=function(e){return e.charCodeAt(1)===45},Kt=function(e){return e!=null&&typeof e!="boolean"},Pt=Ee(function(t){return le(t)?t:t.replace(on,"-$&").toLowerCase()}),Ut=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(sn,function(r,i,o){return I={name:i,styles:o,next:I},i})}return rn[e]!==1&&!le(e)&&typeof n=="number"&&n!==0?n+"px":n};function lt(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return I={name:n.name,styles:n.styles,next:I},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)I={name:r.name,styles:r.styles,next:I},r=r.next;var i=n.styles+";";return i}return cn(t,e,n)}case"function":{if(t!==void 0){var o=I,s=n(t);return I=o,lt(t,e,s)}break}}if(e==null)return n;var c=e[n];return c!==void 0?c:n}function cn(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=lt(t,e,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")e!=null&&e[s]!==void 0?r+=o+"{"+e[s]+"}":Kt(s)&&(r+=Pt(o)+":"+Ut(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var c=0;c<s.length;c++)Kt(s[c])&&(r+=Pt(o)+":"+Ut(o,s[c])+";");else{var a=lt(t,e,s);switch(o){case"animation":case"animationName":{r+=Pt(o)+":"+a+";";break}default:r+=o+"{"+a+"}"}}}return r}var Zt=/label:\s*([^\s;\n{]+)\s*(;|$)/g,I,an=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,o="";I=void 0;var s=e[0];s==null||s.raw===void 0?(i=!1,o+=lt(r,n,s)):o+=s[0];for(var c=1;c<e.length;c++)o+=lt(r,n,e[c]),i&&(o+=s[c]);Zt.lastIndex=0;for(var a="",f;(f=Zt.exec(o))!==null;)a+="-"+f[1];var u=nn(o)+a;return{name:u,styles:o,next:I}},fn=function(e){return e()},ln=jt["useInsertionEffect"]?jt["useInsertionEffect"]:!1,un=ln||fn,ue={}.hasOwnProperty,de=z.createContext(typeof HTMLElement<"u"?Je({key:"css"}):null);de.Provider;var dn=function(e){return z.forwardRef(function(n,r){var i=z.useContext(de);return e(n,i,r)})},hn=z.createContext({}),Nt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Un=function(e,n){var r={};for(var i in n)ue.call(n,i)&&(r[i]=n[i]);return r[Nt]=e,r},mn=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return fe(n,r,i),un(function(){return en(n,r,i)}),null},gn=dn(function(t,e,n){var r=t.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var i=t[Nt],o=[r],s="";typeof t.className=="string"?s=tn(e.registered,o,t.className):t.className!=null&&(s=t.className+" ");var c=an(o,void 0,z.useContext(hn));s+=e.key+"-"+c.name;var a={};for(var f in t)ue.call(t,f)&&f!=="css"&&f!==Nt&&(a[f]=t[f]);return a.ref=n,a.className=s,z.createElement(z.Fragment,null,z.createElement(mn,{cache:e,serialized:c,isStringTag:typeof i=="string"}),z.createElement(i,a))}),Zn=gn;function Y(t){return he(t)?(t.nodeName||"").toLowerCase():"#document"}function $(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function j(t){var e;return(e=(he(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function he(t){return t instanceof Node||t instanceof $(t).Node}function H(t){return t instanceof Element||t instanceof $(t).Element}function V(t){return t instanceof HTMLElement||t instanceof $(t).HTMLElement}function Jt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof $(t).ShadowRoot}function ht(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=D(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function pn(t){return["table","td","th"].includes(Y(t))}function It(t){const e=_t(),n=D(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function wn(t){let e=Q(t);for(;V(e)&&!St(e);){if(It(e))return e;e=Q(e)}return null}function _t(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function St(t){return["html","body","#document"].includes(Y(t))}function D(t){return $(t).getComputedStyle(t)}function Tt(t){return H(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Q(t){if(Y(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Jt(t)&&t.host||j(t);return Jt(e)?e.host:e}function me(t){const e=Q(t);return St(e)?t.ownerDocument?t.ownerDocument.body:t.body:V(e)&&ht(e)?e:me(e)}function ut(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=me(t),o=i===((r=t.ownerDocument)==null?void 0:r.body),s=$(i);return o?e.concat(s,s.visualViewport||[],ht(i)?i:[],s.frameElement&&n?ut(s.frameElement):[]):e.concat(i,ut(i,[],n))}const tt=Math.min,q=Math.max,vt=Math.round,pt=Math.floor,G=t=>({x:t,y:t}),yn={left:"right",right:"left",bottom:"top",top:"bottom"},xn={start:"end",end:"start"};function bn(t,e,n){return q(t,tt(e,n))}function kt(t,e){return typeof t=="function"?t(e):t}function et(t){return t.split("-")[0]}function mt(t){return t.split("-")[1]}function vn(t){return t==="x"?"y":"x"}function Vt(t){return t==="y"?"height":"width"}function Bt(t){return["top","bottom"].includes(et(t))?"y":"x"}function zt(t){return vn(Bt(t))}function Cn(t,e,n){n===void 0&&(n=!1);const r=mt(t),i=zt(t),o=Vt(i);let s=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(s=Ct(s)),[s,Ct(s)]}function En(t){const e=Ct(t);return[Dt(t),e,Dt(e)]}function Dt(t){return t.replace(/start|end/g,e=>xn[e])}function An(t,e,n){const r=["left","right"],i=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:r:e?r:i;case"left":case"right":return e?o:s;default:return[]}}function On(t,e,n,r){const i=mt(t);let o=An(et(t),n==="start",r);return i&&(o=o.map(s=>s+"-"+i),e&&(o=o.concat(o.map(Dt)))),o}function Ct(t){return t.replace(/left|right|bottom|top/g,e=>yn[e])}function Rn(t){return{top:0,right:0,bottom:0,left:0,...t}}function ge(t){return typeof t!="number"?Rn(t):{top:t,right:t,bottom:t,left:t}}function Et(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Qt(t,e,n){let{reference:r,floating:i}=t;const o=Bt(e),s=zt(e),c=Vt(s),a=et(e),f=o==="y",u=r.x+r.width/2-i.width/2,l=r.y+r.height/2-i.height/2,p=r[c]/2-i[c]/2;let d;switch(a){case"top":d={x:u,y:r.y-i.height};break;case"bottom":d={x:u,y:r.y+r.height};break;case"right":d={x:r.x+r.width,y:l};break;case"left":d={x:r.x-i.width,y:l};break;default:d={x:r.x,y:r.y}}switch(mt(e)){case"start":d[s]-=p*(n&&f?-1:1);break;case"end":d[s]+=p*(n&&f?-1:1);break}return d}const Sn=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:s}=n,c=o.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:l}=Qt(f,r,a),p=r,d={},g=0;for(let h=0;h<c.length;h++){const{name:w,fn:m}=c[h],{x:y,y:b,data:O,reset:E}=await m({x:u,y:l,initialPlacement:r,placement:p,strategy:i,middlewareData:d,rects:f,platform:s,elements:{reference:t,floating:e}});u=y??u,l=b??l,d={...d,[w]:{...d[w],...O}},E&&g<=50&&(g++,typeof E=="object"&&(E.placement&&(p=E.placement),E.rects&&(f=E.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):E.rects),{x:u,y:l}=Qt(f,p,a)),h=-1)}return{x:u,y:l,placement:p,strategy:i,middlewareData:d}};async function Tn(t,e){var n;e===void 0&&(e={});const{x:r,y:i,platform:o,rects:s,elements:c,strategy:a}=t,{boundary:f="clippingAncestors",rootBoundary:u="viewport",elementContext:l="floating",altBoundary:p=!1,padding:d=0}=kt(e,t),g=ge(d),w=c[p?l==="floating"?"reference":"floating":l],m=Et(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(w)))==null||n?w:w.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(c.floating)),boundary:f,rootBoundary:u,strategy:a})),y=l==="floating"?{...s.floating,x:r,y:i}:s.reference,b=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c.floating)),O=await(o.isElement==null?void 0:o.isElement(b))?await(o.getScale==null?void 0:o.getScale(b))||{x:1,y:1}:{x:1,y:1},E=Et(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:b,strategy:a}):y);return{top:(m.top-E.top+g.top)/O.y,bottom:(E.bottom-m.bottom+g.bottom)/O.y,left:(m.left-E.left+g.left)/O.x,right:(E.right-m.right+g.right)/O.x}}const kn=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:r,placement:i,rects:o,platform:s,elements:c,middlewareData:a}=e,{element:f,padding:u=0}=kt(t,e)||{};if(f==null)return{};const l=ge(u),p={x:n,y:r},d=zt(i),g=Vt(d),h=await s.getDimensions(f),w=d==="y",m=w?"top":"left",y=w?"bottom":"right",b=w?"clientHeight":"clientWidth",O=o.reference[g]+o.reference[d]-p[d]-o.floating[g],E=p[d]-o.reference[d],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(f));let x=A?A[b]:0;(!x||!await(s.isElement==null?void 0:s.isElement(A)))&&(x=c.floating[b]||o.floating[g]);const X=O/2-E/2,rt=x/2-h[g]/2-1,it=tt(l[m],rt),ot=tt(l[y],rt),N=it,st=x-h[g]-ot,P=x/2-h[g]/2+X,M=bn(N,P,st),F=!a.arrow&&mt(i)!=null&&P!==M&&o.reference[g]/2-(P<N?it:ot)-h[g]/2<0,B=F?P<N?P-N:P-st:0;return{[d]:p[d]+B,data:{[d]:M,centerOffset:P-M-B,...F&&{alignmentOffset:B}},reset:F}}}),Pn=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,r;const{placement:i,middlewareData:o,rects:s,initialPlacement:c,platform:a,elements:f}=e,{mainAxis:u=!0,crossAxis:l=!0,fallbackPlacements:p,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:h=!0,...w}=kt(t,e);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const m=et(i),y=et(c)===c,b=await(a.isRTL==null?void 0:a.isRTL(f.floating)),O=p||(y||!h?[Ct(c)]:En(c));!p&&g!=="none"&&O.push(...On(c,h,g,b));const E=[c,...O],A=await Tn(e,w),x=[];let X=((r=o.flip)==null?void 0:r.overflows)||[];if(u&&x.push(A[m]),l){const N=Cn(i,s,b);x.push(A[N[0]],A[N[1]])}if(X=[...X,{placement:i,overflows:x}],!x.every(N=>N<=0)){var rt,it;const N=(((rt=o.flip)==null?void 0:rt.index)||0)+1,st=E[N];if(st)return{data:{index:N,overflows:X},reset:{placement:st}};let P=(it=X.filter(M=>M.overflows[0]<=0).sort((M,F)=>M.overflows[1]-F.overflows[1])[0])==null?void 0:it.placement;if(!P)switch(d){case"bestFit":{var ot;const M=(ot=X.map(F=>[F.placement,F.overflows.filter(B=>B>0).reduce((B,Ce)=>B+Ce,0)]).sort((F,B)=>F[1]-B[1])[0])==null?void 0:ot[0];M&&(P=M);break}case"initialPlacement":P=c;break}if(i!==P)return{reset:{placement:P}}}return{}}}};async function Ln(t,e){const{placement:n,platform:r,elements:i}=t,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=et(n),c=mt(n),a=Bt(n)==="y",f=["left","top"].includes(s)?-1:1,u=o&&a?-1:1,l=kt(e,t);let{mainAxis:p,crossAxis:d,alignmentAxis:g}=typeof l=="number"?{mainAxis:l,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...l};return c&&typeof g=="number"&&(d=c==="end"?g*-1:g),a?{x:d*u,y:p*f}:{x:p*f,y:d*u}}const Jn=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,r;const{x:i,y:o,placement:s,middlewareData:c}=e,a=await Ln(e,t);return s===((n=c.offset)==null?void 0:n.placement)&&(r=c.arrow)!=null&&r.alignmentOffset?{}:{x:i+a.x,y:o+a.y,data:{...a,placement:s}}}}};function pe(t){const e=D(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=V(t),o=i?t.offsetWidth:n,s=i?t.offsetHeight:r,c=vt(n)!==o||vt(r)!==s;return c&&(n=o,r=s),{width:n,height:r,$:c}}function Ht(t){return H(t)?t:t.contextElement}function Z(t){const e=Ht(t);if(!V(e))return G(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:o}=pe(e);let s=(o?vt(n.width):n.width)/r,c=(o?vt(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const $n=G(0);function we(t){const e=$(t);return!_t()||!e.visualViewport?$n:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Nn(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==$(t)?!1:e}function K(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),o=Ht(t);let s=G(1);e&&(r?H(r)&&(s=Z(r)):s=Z(t));const c=Nn(o,n,r)?we(o):G(0);let a=(i.left+c.x)/s.x,f=(i.top+c.y)/s.y,u=i.width/s.x,l=i.height/s.y;if(o){const p=$(o),d=r&&H(r)?$(r):r;let g=p,h=g.frameElement;for(;h&&r&&d!==g;){const w=Z(h),m=h.getBoundingClientRect(),y=D(h),b=m.left+(h.clientLeft+parseFloat(y.paddingLeft))*w.x,O=m.top+(h.clientTop+parseFloat(y.paddingTop))*w.y;a*=w.x,f*=w.y,u*=w.x,l*=w.y,a+=b,f+=O,g=$(h),h=g.frameElement}}return Et({width:u,height:l,x:a,y:f})}const Dn=[":popover-open",":modal"];function ye(t){return Dn.some(e=>{try{return t.matches(e)}catch{return!1}})}function Mn(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const o=i==="fixed",s=j(r),c=e?ye(e.floating):!1;if(r===s||c&&o)return n;let a={scrollLeft:0,scrollTop:0},f=G(1);const u=G(0),l=V(r);if((l||!l&&!o)&&((Y(r)!=="body"||ht(s))&&(a=Tt(r)),V(r))){const p=K(r);f=Z(r),u.x=p.x+r.clientLeft,u.y=p.y+r.clientTop}return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-a.scrollLeft*f.x+u.x,y:n.y*f.y-a.scrollTop*f.y+u.y}}function Fn(t){return Array.from(t.getClientRects())}function xe(t){return K(j(t)).left+Tt(t).scrollLeft}function Wn(t){const e=j(t),n=Tt(t),r=t.ownerDocument.body,i=q(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=q(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+xe(t);const c=-n.scrollTop;return D(r).direction==="rtl"&&(s+=q(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:s,y:c}}function In(t,e){const n=$(t),r=j(t),i=n.visualViewport;let o=r.clientWidth,s=r.clientHeight,c=0,a=0;if(i){o=i.width,s=i.height;const f=_t();(!f||f&&e==="fixed")&&(c=i.offsetLeft,a=i.offsetTop)}return{width:o,height:s,x:c,y:a}}function _n(t,e){const n=K(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=V(t)?Z(t):G(1),s=t.clientWidth*o.x,c=t.clientHeight*o.y,a=i*o.x,f=r*o.y;return{width:s,height:c,x:a,y:f}}function te(t,e,n){let r;if(e==="viewport")r=In(t,n);else if(e==="document")r=Wn(j(t));else if(H(e))r=_n(e,n);else{const i=we(t);r={...e,x:e.x-i.x,y:e.y-i.y}}return Et(r)}function be(t,e){const n=Q(t);return n===e||!H(n)||St(n)?!1:D(n).position==="fixed"||be(n,e)}function Vn(t,e){const n=e.get(t);if(n)return n;let r=ut(t,[],!1).filter(c=>H(c)&&Y(c)!=="body"),i=null;const o=D(t).position==="fixed";let s=o?Q(t):t;for(;H(s)&&!St(s);){const c=D(s),a=It(s);!a&&c.position==="fixed"&&(i=null),(o?!a&&!i:!a&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ht(s)&&!a&&be(t,s))?r=r.filter(u=>u!==s):i=c,s=Q(s)}return e.set(t,r),r}function Bn(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const s=[...n==="clippingAncestors"?Vn(e,this._c):[].concat(n),r],c=s[0],a=s.reduce((f,u)=>{const l=te(e,u,i);return f.top=q(l.top,f.top),f.right=tt(l.right,f.right),f.bottom=tt(l.bottom,f.bottom),f.left=q(l.left,f.left),f},te(e,c,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function zn(t){const{width:e,height:n}=pe(t);return{width:e,height:n}}function Hn(t,e,n){const r=V(e),i=j(e),o=n==="fixed",s=K(t,!0,o,e);let c={scrollLeft:0,scrollTop:0};const a=G(0);if(r||!r&&!o)if((Y(e)!=="body"||ht(i))&&(c=Tt(e)),r){const l=K(e,!0,o,e);a.x=l.x+e.clientLeft,a.y=l.y+e.clientTop}else i&&(a.x=xe(i));const f=s.left+c.scrollLeft-a.x,u=s.top+c.scrollTop-a.y;return{x:f,y:u,width:s.width,height:s.height}}function ee(t,e){return!V(t)||D(t).position==="fixed"?null:e?e(t):t.offsetParent}function ve(t,e){const n=$(t);if(!V(t)||ye(t))return n;let r=ee(t,e);for(;r&&pn(r)&&D(r).position==="static";)r=ee(r,e);return r&&(Y(r)==="html"||Y(r)==="body"&&D(r).position==="static"&&!It(r))?n:r||wn(t)||n}const jn=async function(t){const e=this.getOffsetParent||ve,n=this.getDimensions;return{reference:Hn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await n(t.floating)}}};function Yn(t){return D(t).direction==="rtl"}const Gn={convertOffsetParentRelativeRectToViewportRelativeRect:Mn,getDocumentElement:j,getClippingRect:Bn,getOffsetParent:ve,getElementRects:jn,getClientRects:Fn,getDimensions:zn,getScale:Z,isElement:H,isRTL:Yn};function Xn(t,e){let n=null,r;const i=j(t);function o(){var c;clearTimeout(r),(c=n)==null||c.disconnect(),n=null}function s(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),o();const{left:f,top:u,width:l,height:p}=t.getBoundingClientRect();if(c||e(),!l||!p)return;const d=pt(u),g=pt(i.clientWidth-(f+l)),h=pt(i.clientHeight-(u+p)),w=pt(f),y={rootMargin:-d+"px "+-g+"px "+-h+"px "+-w+"px",threshold:q(0,tt(1,a))||1};let b=!0;function O(E){const A=E[0].intersectionRatio;if(A!==a){if(!b)return s();A?s(!1,A):r=setTimeout(()=>{s(!1,1e-7)},100)}b=!1}try{n=new IntersectionObserver(O,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(O,y)}n.observe(t)}return s(!0),o}function Qn(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,f=Ht(t),u=i||o?[...f?ut(f):[],...ut(e)]:[];u.forEach(m=>{i&&m.addEventListener("scroll",n,{passive:!0}),o&&m.addEventListener("resize",n)});const l=f&&c?Xn(f,n):null;let p=-1,d=null;s&&(d=new ResizeObserver(m=>{let[y]=m;y&&y.target===f&&d&&(d.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var b;(b=d)==null||b.observe(e)})),n()}),f&&!a&&d.observe(f),d.observe(e));let g,h=a?K(t):null;a&&w();function w(){const m=K(t);h&&(m.x!==h.x||m.y!==h.y||m.width!==h.width||m.height!==h.height)&&n(),h=m,g=requestAnimationFrame(w)}return n(),()=>{var m;u.forEach(y=>{i&&y.removeEventListener("scroll",n),o&&y.removeEventListener("resize",n)}),l==null||l(),(m=d)==null||m.disconnect(),d=null,a&&cancelAnimationFrame(g)}}const tr=Pn,er=kn,nr=(t,e,n)=>{const r=new Map,i={platform:Gn,...n},o={...i.platform,_c:r};return Sn(t,e,{...i,platform:o})};export{Zn as E,hn as T,Yt as _,er as a,H as b,nr as c,Qn as d,Un as e,tr as f,tn as g,ue as h,en as i,Jn as o,Gn as p,fe as r,an as s,un as u,dn as w};