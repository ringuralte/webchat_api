(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RNiq:function(t,e,a){"use strict";a.r(e);var n=a("9Jkg"),i=a.n(n),r=a("pLtp"),o=a.n(r),c=a("doui"),s=a("vYYK"),l=a("q1tI"),u=a.n(l),f=a("nOHt"),m=a.n(f),d=a("YFqc"),p=a.n(d),h=a("VFWX"),v=a("5Yp1"),k=a("c8I3"),b=a("Ji2X"),x=a("R/WZ"),y=a("ZBNC"),g=a("eD//"),w=a("tVbE"),j=a("IsqK"),D=a("zgjP"),O=a.n(D),N=a("ofer"),E=u.a.createElement,I=Object(x.a)(function(t){var e;return Object(y.a)({root:{width:"100vw",position:"relative",minHeight:"100vh"},main:(e={},Object(s.a)(e,t.breakpoints.down("sm"),{marginTop:t.spacing(2)}),Object(s.a)(e,"marginTop",t.spacing(8)),Object(s.a)(e,"display","flex"),Object(s.a)(e,"flexDirection","column"),Object(s.a)(e,"alignItems","center"),e)})});e.default=function(){var t=I(),e=u.a.useContext(k.b),a=e.newLink,n=e.setTopic,r=u.a.useState(!0),s=Object(c.a)(r,2),l=s[0],f=s[1];return u.a.useEffect(function(){O()("/api/checkToken",{credentials:"include"}).then(function(t){return t.json()}).then(function(t){200!==t.code?m.a.push("/signin"):f(!1)})},[]),u.a.useEffect(function(){n("")},[]),E(v.a,null,l?E(h.a,null):E("div",{className:t.root},E(b.a,{className:t.main,component:"main",maxWidth:"xs"},E(N.a,{className:t.title,component:"h1",variant:"h5"},"Just Another Chat App"),E(g.a,null,o()(a).map(function(t){return E(w.a,{button:!0,key:t,onClick:function(){window.localStorage.setItem("topic",i()(a[t].title))}},E(p.a,{href:"/p/[id]",as:"/p/".concat(a[t].title)},E(j.a,{primary:a[t].title})))})))," "))}},VFWX:function(t,e,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("wx14"),o=a("Ff2n"),c=(a("17x9"),a("iuhU")),s=a("H2TA"),l=a("mVKy");function u(t){var e,a,n;return e=t,a=0,n=1,t=(Math.min(Math.max(a,e),n)-a)/(n-a),t=(t-=1)*t*t+1}var f=i.a.forwardRef(function(t,e){var a,n=t.classes,s=t.className,f=t.color,m=void 0===f?"primary":f,d=t.disableShrink,p=void 0!==d&&d,h=t.size,v=void 0===h?40:h,k=t.style,b=t.thickness,x=void 0===b?3.6:b,y=t.value,g=void 0===y?0:y,w=t.variant,j=void 0===w?"indeterminate":w,D=Object(o.a)(t,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),O={},N={},E={};if("determinate"===j||"static"===j){var I=2*Math.PI*((44-x)/2);O.strokeDasharray=I.toFixed(3),E["aria-valuenow"]=Math.round(g),"static"===j?(O.strokeDashoffset="".concat(((100-g)/100*I).toFixed(3),"px"),N.transform="rotate(-90deg)"):(O.strokeDashoffset="".concat((a=(100-g)/100,a*a*I).toFixed(3),"px"),N.transform="rotate(".concat((270*u(g/70)).toFixed(3),"deg)"))}return i.a.createElement("div",Object(r.a)({className:Object(c.a)(n.root,s,"inherit"!==m&&n["color".concat(Object(l.a)(m))],{indeterminate:n.indeterminate,static:n.static}[j]),style:Object(r.a)({width:v,height:v},N,{},k),ref:e,role:"progressbar"},E,D),i.a.createElement("svg",{className:n.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},i.a.createElement("circle",{className:Object(c.a)(n.circle,p&&n.circleDisableShrink,{indeterminate:n.circleIndeterminate,static:n.circleStatic}[j]),style:O,cx:44,cy:44,r:(44-x)/2,fill:"none",strokeWidth:x})))}),m=Object(s.a)(function(t){return{root:{display:"inline-block"},static:{transition:t.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:t.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}},{name:"MuiCircularProgress",flip:!1})(f),d=a("R/WZ"),p=a("ZBNC"),h=i.a.createElement,v=Object(d.a)(function(){return Object(p.a)({root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",margin:"0 auto"}})});e.a=function(){var t=v();return h("div",{className:t.root},h(m,null))}},vlRD:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",1,0]]]);