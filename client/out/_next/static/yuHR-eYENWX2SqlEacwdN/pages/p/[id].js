(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{VFWX:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("wx14"),i=a("Ff2n"),c=(a("17x9"),a("iuhU")),s=a("H2TA"),l=a("mVKy");function d(e){var t,a,n;return t=e,a=0,n=1,e=(Math.min(Math.max(a,t),n)-a)/(n-a),e=(e-=1)*e*e+1}var u=r.a.forwardRef(function(e,t){var a,n=e.classes,s=e.className,u=e.color,f=void 0===u?"primary":u,m=e.disableShrink,p=void 0!==m&&m,h=e.size,g=void 0===h?40:h,x=e.style,y=e.thickness,b=void 0===y?3.6:y,v=e.value,k=void 0===v?0:v,w=e.variant,j=void 0===w?"indeterminate":w,N=Object(i.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),O={},C={},D={};if("determinate"===j||"static"===j){var I=2*Math.PI*((44-b)/2);O.strokeDasharray=I.toFixed(3),D["aria-valuenow"]=Math.round(k),"static"===j?(O.strokeDashoffset="".concat(((100-k)/100*I).toFixed(3),"px"),C.transform="rotate(-90deg)"):(O.strokeDashoffset="".concat((a=(100-k)/100,a*a*I).toFixed(3),"px"),C.transform="rotate(".concat((270*d(k/70)).toFixed(3),"deg)"))}return r.a.createElement("div",Object(o.a)({className:Object(c.a)(n.root,s,"inherit"!==f&&n["color".concat(Object(l.a)(f))],{indeterminate:n.indeterminate,static:n.static}[j]),style:Object(o.a)({width:g,height:g},C,{},x),ref:t,role:"progressbar"},D,N),r.a.createElement("svg",{className:n.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},r.a.createElement("circle",{className:Object(c.a)(n.circle,p&&n.circleDisableShrink,{indeterminate:n.circleIndeterminate,static:n.circleStatic}[j]),style:O,cx:44,cy:44,r:(44-b)/2,fill:"none",strokeWidth:b})))}),f=Object(s.a)(function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}},{name:"MuiCircularProgress",flip:!1})(u),m=a("R/WZ"),p=a("ZBNC"),h=r.a.createElement,g=Object(m.a)(function(){return Object(p.a)({root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",margin:"0 auto"}})});t.a=function(){var e=g();return h("div",{className:e.root},h(f,null))}},d5Yn:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/p/[id]",function(){return a("nOj+")}])},"nOj+":function(e,t,a){"use strict";a.r(t);var n=a("pLtp"),r=a.n(n),o=a("doui"),i=a("q1tI"),c=a.n(i),s=a("nOHt"),l=a.n(s),d=a("VFWX"),u=a("5Yp1"),f=a("9Jkg"),m=a.n(f),p=a("R/WZ"),h=a("ZBNC"),g=a("r9w1"),x=a("Z3vd"),y=a("bXiM"),b=a("lO0E"),v=a("p46w"),k=a.n(v),w=a("c8I3"),j=c.a.createElement,N=Object(p.a)(function(){return Object(h.a)({chatButton:{width:"10%"},chatBox:{width:"90%"},type:{display:"flex",width:"100%",alignItems:"center",justifyContent:"center"},bar:{backgroundColor:"rgb(255,255,255)",top:"auto",bottom:0}})}),O=function(){var e=N(),t=c.a.useContext(w.b).sendChatAction,a=c.a.useState(""),n=Object(o.a)(a,2),r=n[0],i=n[1],s=function(e){e.preventDefault(),fetch("/api/postChat",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:m()({topic:window.localStorage.getItem("topic"),msg:r})}).then(function(e){return e.json()}).then(function(e){401===e.code?(alert("error "+e.message),i("")):(t({id:e.id[0],sender:k.a.get("user"),msg:r,topic:JSON.parse(window.localStorage.getItem("topic"))}),i(""))}).catch(function(e){return alert("error "+e.message)})};return j(y.a,{position:"fixed",className:e.bar},j(b.a,{className:e.type},j(g.a,{className:e.chatBox,label:"Send a chat",onKeyDown:function(e){13==e.keyCode&&s(e)},value:r,onChange:function(e){return i(e.target.value)}}),j(x.a,{className:e.chatButton,variant:"contained",color:"secondary",onClick:s},"Send")))},C=a("eD//"),D=a("tVbE"),I=a("IsqK"),S=a("zgjP"),E=a.n(S),F=a("ofer"),B=c.a.createElement,M=Object(p.a)(function(e){return Object(h.a)({root:{display:"flex",flexDirection:"column",flexGrow:1,paddingBottom:50},chatContainer:{padding:"1rem",display:"flex",flexDirection:"column",minHeight:"85vh",background:"#292d3e"},chatItems:{paddingLeft:0,paddingRight:"25vw",color:"#ffcb6b"},chatItemsUser:{paddingLeft:"25vw",paddingRight:0,textAlign:"right",color:"#84ffff"},senderName:{color:"#f07178"},chat:{flexGrow:1},text:{padding:e.spacing(2,2,0)}})});t.default=function(){var e=M(),t=c.a.useContext(w.b),a=t.allChats,n=t.dispatch,i=t.topic,s=t.setTopic,f=k.a.get("user"),m=c.a.useRef(null),p=c.a.useState(!0),h=Object(o.a)(p,2),g=h[0],x=h[1];return c.a.useEffect(function(){m.current.scrollIntoView()},[g]),c.a.useEffect(function(){m.current.scrollIntoView()},[a]),c.a.useEffect(function(){E()("/api/getChats/".concat(window.localStorage.getItem("topic")),{credentials:"include"}).then(function(e){return e.json()}).then(function(e){200===e.code?(n({type:"FETCH MESSAGE",payload:e.chats}),x(!1)):(s(""),l.a.push("/signin"))})},[i]),g?B(u.a,null,B(d.a,null),B("div",{ref:m})):B(u.a,null,B("div",{className:e.root},B(C.a,{className:e.chatContainer},r()(a).map(function(t){return f===a[t].sender?B(D.a,{className:e.chatItemsUser,key:a[t].id},B(I.a,{primary:"".concat(a[t].msg)})):B(D.a,{className:e.chatItems,key:a[t].id},B(I.a,{primary:B(c.a.Fragment,null,B(F.a,{className:e.senderName,component:"span"},"".concat(a[t].sender)+" : "),B(F.a,{component:"span"},"".concat(a[t].msg)))}))})),B("div",{ref:m}),B(O,null)))}}},[["d5Yn",1,0]]]);