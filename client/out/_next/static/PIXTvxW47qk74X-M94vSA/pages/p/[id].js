(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{d5Yn:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/p/[id]",function(){return n("nOj+")}])},"nOj+":function(e,t,n){"use strict";n.r(t);var a=n("pLtp"),o=n.n(a),c=n("doui"),i=n("q1tI"),r=n.n(i),s=n("nOHt"),l=n.n(s),u=n("5Yp1"),d=n("9Jkg"),f=n.n(d),p=n("R/WZ"),m=n("ZBNC"),h=n("r9w1"),g=n("Z3vd"),w=n("bXiM"),b=n("lO0E"),y=n("p46w"),C=n.n(y),N=n("c8I3"),v=r.a.createElement,x=Object(p.a)(function(){return Object(m.a)({chatButton:{width:"10%"},chatBox:{width:"90%"},type:{display:"flex",width:"100%",alignItems:"center",justifyContent:"center"},bar:{backgroundColor:"rgb(255,255,255)",top:"auto",bottom:0}})}),j=function(){var e=x(),t=r.a.useContext(N.b).sendChatAction,n=r.a.useState(""),a=Object(c.a)(n,2),o=a[0],i=a[1],s=function(e){e.preventDefault(),fetch("/api/postChat",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:f()({topic:window.localStorage.getItem("topic"),msg:o})}).then(function(e){return e.json()}).then(function(e){401===e.code?(alert("error "+e.message),i("")):(t({id:e.id[0],sender:C.a.get("user"),msg:o}),i(""))}).catch(function(e){return alert("error "+e.message)})};return v(w.a,{position:"fixed",className:e.bar},v(b.a,{className:e.type},v(h.a,{className:e.chatBox,label:"Send a chat",onKeyDown:function(e){13==e.keyCode&&s(e)},value:o,onChange:function(e){return i(e.target.value)}}),v(g.a,{className:e.chatButton,variant:"contained",color:"secondary",onClick:s},"Send")))},E=n("eD//"),I=n("tVbE"),O=n("IsqK"),k=n("zgjP"),S=n.n(k),B=n("ofer"),T=r.a.createElement,_=Object(p.a)(function(e){return Object(m.a)({root:{display:"flex",flexDirection:"column",flexGrow:1,paddingBottom:50},chatContainer:{padding:"1rem",display:"flex",flexDirection:"column",minHeight:"85vh",background:"#292d3e"},chatItems:{paddingLeft:0,paddingRight:"25vw",color:"#ffcb6b"},chatItemsUser:{paddingLeft:"25vw",paddingRight:0,textAlign:"right",color:"#84ffff"},senderName:{color:"#f07178"},chat:{flexGrow:1},text:{padding:e.spacing(2,2,0)}})});t.default=function(){var e,t=_(),n=r.a.useContext(N.b),a=n.allChats,i=n.dispatch,s=n.topic,d=n.setTopic,f=r.a.useState(!1),p=Object(c.a)(f,2),m=p[0],h=p[1],g=C.a.get("user"),w=r.a.useRef(null);return r.a.useEffect(function(){w.current.scrollIntoView()}),r.a.useEffect(function(){w.current.scrollIntoView()},[a]),r.a.useEffect(function(){S()("/api/getChats/".concat(window.localStorage.getItem("topic")),{credentials:"include"}).then(function(e){return e.json()}).then(function(e){200===e.code?(i({type:"FETCH MESSAGE",payload:e.chats}),h(!0)):(d(""),l.a.push("/signin"))})},[s]),e=m?T(r.a.Fragment,null,T(E.a,{className:t.chatContainer},o()(a).map(function(e){return g===a[e].sender?T(I.a,{className:t.chatItemsUser,key:a[e].id},T(O.a,{primary:"".concat(a[e].msg)})):T(I.a,{className:t.chatItems,key:a[e].id},T(O.a,{primary:T(r.a.Fragment,null,T(B.a,{className:t.senderName,component:"span"},"".concat(a[e].sender)+" : "),T(B.a,{component:"span"},"".concat(a[e].msg)))}))}))):T("div",{className:t.chatContainer}),T(r.a.Fragment,null,T(u.a,null,T("div",{className:t.root},e,T("div",{ref:w}),T(j,null))))}}},[["d5Yn",1,0]]]);