(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,t,r){e.exports=r(242)},143:function(e,t,r){},237:function(e,t,r){},242:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(7),c=r.n(o),s=(r(143),r(15)),u=r.n(s),i=r(24),l=r(57),p=r(31),h=r(32),d=r(34),f=r(33),m=r(35),b=r(243),y=r(249),v=r(11),g=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return a.a.createElement(b.a,null,a.a.createElement(b.a.Header,null,a.a.createElement(y.b,{theme:"dark",mode:"horizontal",style:{lineHeight:"64px"}},a.a.createElement(y.b.Item,{key:"mail"},a.a.createElement(v.a,{type:"appstore"}),"Torch"))))}}]),t}(n.Component),x=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return a.a.createElement(b.a,null,a.a.createElement(b.a.Footer,{style:{textAlign:"center"}},a.a.createElement("a",{href:"https://github.com/Indexyz/Torch-Web"},"Torch"),", \xa92018 Created by ",a.a.createElement("a",{href:"https://blog.indexyz.me"},"Indexyz")))}}]),t}(n.Component),k=r(92),w=r(251),E=r(245),C=r(244),S=r(51),O=r(72),j=r(68),A=r.n(j);function _(e,t,r){return T.apply(this,arguments)}function T(){return(T=Object(i.a)(u.a.mark(function e(t,r,n){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("".concat(t,"/").concat(r,"/").concat(n));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var P=function(e){function t(){var e,r;Object(p.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state=function(){var e={},t=!0,r=!1,n=void 0;try{for(var a,o=O[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var c=a.value;e[c.name]={type:"loading",name:c.name}}}catch(s){r=!0,n=s}finally{try{t||null==o.return||o.return()}finally{if(r)throw n}}return e}(),r}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark(function e(){var t,r,n,a,o,c,s=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=!0,r=!1,n=void 0,e.prev=3,a=function(){var e=c.value;_(e.address,s.props.host,s.props.port).then(function(t){s.setState(Object(k.a)({},e.name,{type:!0===t.status?t.time:"offline",name:e.name}))}).catch(function(){s.setState(Object(k.a)({},e.name,{type:"error",name:e.name}))})},o=O[Symbol.iterator]();!(t=(c=o.next()).done);t=!0)a();e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),r=!0,n=e.t0;case 12:e.prev=12,e.prev=13,t||null==o.return||o.return();case 15:if(e.prev=15,!r){e.next=18;break}throw n;case 18:return e.finish(15);case 19:return e.finish(12);case 20:case"end":return e.stop()}},e,null,[[3,8,12,20],[13,,15,19]])}));return function(){return e.apply(this,arguments)}}()},{key:"getTag",value:function(e){return"loading"===e.type?a.a.createElement(w.a,{key:e.name,color:"#2db7f5"},e.name,": Loading"):"offline"===e.type?a.a.createElement(w.a,{key:e.name,color:"#f50"},e.name,": Down"):"error"===e.type?a.a.createElement(w.a,{key:e.name,color:"#808080"},e.name,": Error"):a.a.createElement(w.a,{key:e.name,color:"#87d068"},e.name,": ",null===e.type?"???":e.type.toFixed(2)," ms")}},{key:"render",value:function(){var e=this;return a.a.createElement(E.a,{title:void 0===e.props.title?e.props.host+":"+e.props.port:e.props.title},a.a.createElement(S.Row,null,O.map(function(t){return a.a.createElement(S.Col,{style:{padding:"4px 0px"}},a.a.createElement(C.a,{content:t.info,title:"\u8d5e\u52a9\u5546\u4fe1\u606f"},e.getTag(e.state[t.name])))})))}}]),t}(n.Component),N={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,r,n,a,o,c,s,u="",i=0;for(e=N._utf8_encode(e);i<e.length;)a=(t=e.charCodeAt(i++))>>2,o=(3&t)<<4|(r=e.charCodeAt(i++))>>4,c=(15&r)<<2|(n=e.charCodeAt(i++))>>6,s=63&n,isNaN(r)?c=s=64:isNaN(n)&&(s=64),u=u+this._keyStr.charAt(a)+this._keyStr.charAt(o)+this._keyStr.charAt(c)+this._keyStr.charAt(s);return u},decode:function(e){var t,r,n,a,o,c,s="",u=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");u<e.length;)t=this._keyStr.indexOf(e.charAt(u++))<<2|(a=this._keyStr.indexOf(e.charAt(u++)))>>4,r=(15&a)<<4|(o=this._keyStr.indexOf(e.charAt(u++)))>>2,n=(3&o)<<6|(c=this._keyStr.indexOf(e.charAt(u++))),s+=String.fromCharCode(t),64!==o&&(s+=String.fromCharCode(r)),64!==c&&(s+=String.fromCharCode(n));return s=N._utf8_decode(s)},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t},_utf8_decode:function(e){for(var t="",r=0,n=0,a=0,o=0;r<e.length;)(n=e.charCodeAt(r))<128?(t+=String.fromCharCode(n),r++):n>191&&n<224?(o=e.charCodeAt(r+1),t+=String.fromCharCode((31&n)<<6|63&o),r+=2):(o=e.charCodeAt(r+1),a=e.charCodeAt(r+2),t+=String.fromCharCode((15&n)<<12|(63&o)<<6|63&a),r+=3);return t}},M=N;function H(e){if(e.length%4!==0){for(var t="",r=0;r<e.length%4;r++)t+="=";return e+t}return e}function z(e){return M.decode(H(e.replace(/_/g,"/").replace(/-/g,"+")))}function I(e){return R.apply(this,arguments)}function R(){return(R=Object(i.a)(u.a.mark(function e(t){var r,n,a,o,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.split("#"),n=z(r[0].substr(5)),a=n.split(":"),o=Number(a[2]),c=a[1].split("@")[1],!(o>=1&&o<=65535&&c)){e.next=7;break}return e.abrupt("return",{title:""===r[1]?c:r[1],host:c,port:Number(o)});case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function W(e){var t=JSON.parse(z(e.substr(8)));return{title:t.ps,host:t.add,port:Number(t.port)}}function D(e){for(var t=z(e.substr(6)),r={},n=0,a=["server","server_port","portocol","method","obfs","password"];n<a.length;n++){r[a[n]]=t.substr(0,t.indexOf(":")),t=t.substr(t.indexOf(":")+1)}return{title:z(JSON.parse('{"'+decodeURI(t.substr(2)).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}').remarks),host:r.server,port:Number(r.server_port)}}function L(e){var t=e.split(":");return 2===t.length?{host:t[0],port:Number(t[1])}:""===e.trim()?null:{host:e,port:22}}var J=["ssr://","vmess://"];function U(e){return J.filter(function(t){return e.startsWith(t)}).length>0}function B(e){return F.apply(this,arguments)}function F(){return(F=Object(i.a)(u.a.mark(function e(t){var r,n,a,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.substr(4),n="https://cors-anywhere.herokuapp.com/".concat(r),e.next=4,A.a.get(n);case 4:return a=e.sent,o=z(H(a.data)).split("\n").map(function(e){return e.trim()}).filter(U),e.abrupt("return",Promise.all(o.map(G)));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function G(e){return V.apply(this,arguments)}function V(){return(V=Object(i.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t.startsWith("ss://")){e.next=3;break}return e.abrupt("return",I(t));case 3:if(!t.startsWith("ssr://")){e.next=5;break}return e.abrupt("return",D(t));case 5:if(!t.startsWith("sub:")){e.next=9;break}return e.next=8,B(t);case 8:return e.abrupt("return",e.sent);case 9:if(!t.startsWith("vmess://")){e.next=11;break}return e.abrupt("return",W(t));case 11:return e.abrupt("return",L(t));case 14:e.prev=14,e.t0=e.catch(0);case 16:return e.abrupt("return",null);case 17:case"end":return e.stop()}},e,null,[[0,14]])}))).apply(this,arguments)}var Z=r(246),q=r(250),K=r(248),Q=r(27),X=r(247),Y=r(133),$=r.n(Y),ee=(r(237),r(134)),te=Z.a.TextArea,re=function(e){function t(){var e,r;Object(p.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={hosts:[],input:{host:"www.baidu.com",port:443},text:"",displayModal:!1},r.addHost=function(e){r.setState(function(t){return t.hosts=[Object.assign({},e,{uuid:$.a.v4()})].concat(Object(l.a)(t.hosts)),t})},r.showModal=function(){r.setState({displayModal:!0})},r.reTest=function(){(function(){var e=Object(i.a)(u.a.mark(function e(){var t,n,a,o,c,s,i,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=r.state.hosts,n=0,r.setState(function(e){return e.hosts=[],e}),a=!0,o=!1,c=void 0,e.prev=6,s=t.reverse()[Symbol.iterator]();case 8:if(a=(i=s.next()).done){e.next=19;break}return l=i.value,n+=1,l.uuid=null,r.addHost(l),q.a.loading("Processing ".concat(n," of ").concat(t.length),.9),e.next=16,new Promise(function(e){return setTimeout(e,1e3)});case 16:a=!0,e.next=8;break;case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(6),o=!0,c=e.t0;case 25:e.prev=25,e.prev=26,a||null==s.return||s.return();case 28:if(e.prev=28,!o){e.next=31;break}throw c;case 31:return e.finish(28);case 32:return e.finish(25);case 33:case"end":return e.stop()}},e,null,[[6,21,25,33],[26,,28,32]])}));return function(){return e.apply(this,arguments)}})()().catch(function(e){console.log(e)})},r.handleCancel=function(){r.setState({displayModal:!1})},r.handleMultiAdd=function(){r.handleCancel(),q.a.info("Processing links, please wait"),function(){var e=Object(i.a)(u.a.mark(function e(){var t,n,a,o,c,s,i,p;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,e.next=3,Promise.all(r.state.text.split("\n").map(function(e){return e.trim()}).map(G));case 3:e.t0=function(e,t){return console.log(t),null===t&&q.a.error("\u5728\u89e3\u6790\u90e8\u5206\u94fe\u63a5\u65f6\u51fa\u73b0\u95ee\u9898\uff0c\u8bf7\u68c0\u67e5\u952e\u5165\u4fe1\u606f",5),Array.isArray(t)?[].concat(Object(l.a)(t),Object(l.a)(e)):[t].concat(Object(l.a)(e))},e.t1=[],e.t2=function(e){return null!==e},n=e.sent.reduce(e.t0,e.t1).filter(e.t2),a=!0,o=!1,c=void 0,e.prev=10,s=n[Symbol.iterator]();case 12:if(a=(i=s.next()).done){e.next=22;break}return p=i.value,t+=1,r.addHost(p),q.a.loading("Processing ".concat(t," of ").concat(n.length),.9),e.next=19,new Promise(function(e){return setTimeout(e,1e3)});case 19:a=!0,e.next=12;break;case 22:e.next=28;break;case 24:e.prev=24,e.t3=e.catch(10),o=!0,c=e.t3;case 28:e.prev=28,e.prev=29,a||null==s.return||s.return();case 31:if(e.prev=31,!o){e.next=34;break}throw c;case 34:return e.finish(31);case 35:return e.finish(28);case 36:q.a.success("\u8282\u70b9\u6dfb\u52a0\u5b8c\u6bd5\uff01\u90e8\u5206\u68c0\u6d4b\u53ef\u80fd\u5c1a\u672a\u5b8c\u6210\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u2026\u2026",3);case 37:case"end":return e.stop()}},e,null,[[10,24,28,36],[29,,31,35]])}));return function(){return e.apply(this,arguments)}}()()},r}return Object(m.a)(t,e),Object(h.a)(t,[{key:"updateHost",value:function(e){var t=e.target.value;this.setState(function(e){return e.input.host=t,e})}},{key:"updateText",value:function(e){var t=e.target.value;this.setState(function(e){return e.text=t,e})}},{key:"updatePort",value:function(e){this.setState(function(t){return t.input.port=e,t})}},{key:"render",value:function(){var e=this;function t(){window.dataLayer.push(arguments)}return window.dataLayer=window.dataLayer||[],t("js",new Date),t("config","UA-97074604-2"),a.a.createElement("div",null,a.a.createElement(ee.Helmet,null,a.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-97074604-2"})),a.a.createElement(g,null),a.a.createElement(b.a,{className:"siteContext"},a.a.createElement(b.a.Content,{style:{padding:"16px 32px"}},a.a.createElement(Z.a.Group,{compact:!0},a.a.createElement(Z.a,{value:this.state.input.host,onChange:this.updateHost.bind(this),placeholder:"Host",style:{width:"60%"}}),a.a.createElement(K.a,{value:this.state.input.port,onChange:this.updatePort.bind(this),placeholder:"Port",style:{width:"20%"}}),a.a.createElement(Q.a,{icon:"search",onClick:function(){return e.addHost(e.state.input)},style:{width:"20%"},type:"primary"},"Ping")),a.a.createElement("br",null),a.a.createElement(Z.a.Group,{compact:!0},a.a.createElement(Q.a,{onClick:this.showModal,style:{width:"50%"},icon:"database",type:"primary"},"\u6279\u91cf\u6d4b\u8bd5"),a.a.createElement(Q.a,{onClick:this.reTest,style:{width:"50%"},icon:"retweet",type:"normal"},"\u91cd\u65b0\u6d4b\u8bd5")),a.a.createElement(S.Row,null,this.state.hosts.map(function(e){return a.a.createElement(S.Col,{key:e.uuid,xs:12,sm:6,md:6,lg:4,style:{padding:"16px"}},a.a.createElement(P,{host:e.host,port:e.port,title:e.title}))})))),a.a.createElement(X.a,{title:"\u6279\u91cf\u6dfb\u52a0",visible:this.state.displayModal,onCancel:this.handleCancel,onOk:this.handleMultiAdd},a.a.createElement(te,{placeholder:"Input context",autosize:{minRows:6},onChange:this.updateText.bind(this)}),a.a.createElement("small",null,"\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u94fe\u63a5\u683c\u5f0f\uff1a"),a.a.createElement("small",null,a.a.createElement("li",null,a.a.createElement("ul",null,a.a.createElement("code",null,"\u57df\u540d:\u7aef\u53e3 (IP:PORT)")),a.a.createElement("ul",null,a.a.createElement("code",null,"SSR \u94fe\u63a5 (ssr://)")),a.a.createElement("ul",null,a.a.createElement("code",null,"VMESS \u94fe\u63a5 (vmess://)")),a.a.createElement("ul",null,a.a.createElement("code",null,"sub:\u8ba2\u9605\u5730\u5740 (sub:https://ADDRESS)")),a.a.createElement("ul",null,a.a.createElement("code",null,"SS \u94fe\u63a5 (ss://)"))),"arn"),a.a.createElement("small",null,"\u4e00\u884c\u4e00\u4e2a\u94fe\u63a5\uff0c\u4e00\u6b21\u53ef\u6df7\u5408\u591a\u79cd\u94fe\u63a5\u68c0\u6d4b")),a.a.createElement(x,null))}}]),t}(n.Component);c.a.render(a.a.createElement(re,null),document.getElementById("root"))},72:function(e){e.exports=[{name:"USA-LOS",address:"https://usa-los-tcping.torch.njs.app",info:"Indexyz"},{name:"China-\u4e0a\u6d77\u963f\u91cc\u4e91",address:"https://torch.biu.best",info:"Biu https://t.me/MCT_boom"},{name:"China-\u591a\u70b9\u540c\u6d4b",address:"https://ping.regend.xyz",info:"\u5c0f\u7070 https://bio.regend.xyz"}]}},[[138,1,2]]]);
//# sourceMappingURL=main.b06b354d.chunk.js.map