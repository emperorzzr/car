(this["webpackJsonprouter-example"]=this["webpackJsonprouter-example"]||[]).push([[0],{19:function(e,t,a){e.exports=a(35)},24:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),o=(a(24),a(7)),i=a(1),s=a(2),m=function(e){var t=e.label,a=e.to,n=e.styles,r=Object(i.h)({path:a,extact:!0});return c.a.createElement(o.b,{to:a,className:Object(s.css)(n.a,r&&n.active)},t)},u=["Mercedes","Porsche"],d=s.StyleSheet.create({ul:{listStyle:"none",padding:"0",width:"100%",height:"60px",margin:"auto",position:"relative",backgroundColor:"#2c3e50"},li:{display:"inline-block",width:"25%",height:"100%",margin:"0",padding:"0"},a:{display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",color:"#fff",textDecoration:"none",position:"relative",fontSize:"18px",transition:"left .4s, background-color .4s",":hover":{backgroundColor:"#3498db"}},active:{backgroundColor:"#e74c3c"}}),p=function(){return c.a.createElement("div",null,c.a.createElement("ul",{className:Object(s.css)(d.ul)},u.map((function(e){return c.a.createElement("li",{className:Object(s.css)(d.li),key:e},c.a.createElement(m,{label:e,to:"/".concat(e),styles:d}))}))))},h=s.StyleSheet.create({container:{},h3:{fontWeight:"400",fontSize:"24px",margin:"0px"},p:{fontWeight:"300",fontSize:"16px"}}),b=function(){var e=Object(i.g)().model;return c.a.createElement("div",{className:Object(s.css)(h.container)},c.a.createElement("h3",{className:Object(s.css)(h.h3)},e),c.a.createElement("p",{className:Object(s.css)(h.p)},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit unde nemo cum veniam esse non accusamus a aliquid. Maiores possimus nam doloribus labore in sequi! Officia quasi eveniet corrupti!"))},g={Mercedes:["A-Class","C-Class","E-Class","S-Class"],Porsche:["Cayman","911","Panamera","Taycan"]},f=s.StyleSheet.create({ul:{listStyle:"none",padding:"0px",margin:"0px"},li:{margin:"2.5px 0",width:"100px"},a:{display:"flex",height:"100%",padding:"8px",justifyContent:"left",alignItems:"center",color:"#fff",textDecoration:"none",fontSize:"14px",backgroundColor:"#6b7784",transition:"left .4s, background-color .4s",":hover":{backgroundColor:"#70b6e5"}},active:{backgroundColor:"#ee8176"}}),E=function(){var e=Object(i.g)().brand,t=Object(i.h)().url;return g[e]?c.a.createElement("ul",{className:Object(s.css)(f.ul)},g[e].map((function(e){return c.a.createElement("li",{key:e,className:Object(s.css)(f.li)},c.a.createElement(m,{label:e,to:"".concat(t,"/").concat(e),styles:f}))}))):c.a.createElement(i.a,{to:"/error"})},v=s.StyleSheet.create({conatiner:{display:"flex"},row:{padding:"5px"},h1:{fontWeight:"300",margin:"10px 20px",fontSize:"45px",color:"#a1352a"}}),x=function(){var e=Object(i.g)().brand,t=Object(i.h)().url;return c.a.createElement(n.Fragment,null,c.a.createElement("h1",{className:Object(s.css)(v.h1)},e),c.a.createElement("div",{className:Object(s.css)(v.conatiner)},c.a.createElement(E,null),c.a.createElement("div",{className:Object(s.css)(v.row)},c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"".concat(t,"/:model")},c.a.createElement(b,null))))))};var y=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(o.a,null,c.a.createElement(p,null),c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/error"},c.a.createElement(x,null)),c.a.createElement(i.b,{path:"/:brand"},c.a.createElement(x,null)),c.a.createElement(i.b,{path:"./"},"Please select brand..."))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.9558e347.chunk.js.map