(this["webpackJsonprouter-example"]=this["webpackJsonprouter-example"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"brand":"Toyota","models":[{"model":"Yaris","numberOfCars":20,"valueInBaht":600000,"image":"yaris.jpg"},{"model":"Corolla Cross","numberOfCars":30,"valueInBaht":900000,"image":"corolla.jpg"},{"model":"Corolla Altis","numberOfCars":50,"valueInBaht":900000,"image":"altis.jpg"},{"model":"Camry","numberOfCars":100,"valueInBaht":1600000,"image":"camry.jpg"}]},{"brand":"Honda","models":[{"model":"Accord","numberOfCars":20,"valueInBaht":1600000,"image":"accord.jpg"},{"model":"Civic","numberOfCars":30,"valueInBaht":1000000,"image":"civic.jpg"},{"model":"City","numberOfCars":50,"valueInBaht":600000,"image":"city.jpg"}]}]')},25:function(e,t,a){e.exports=a(49)},30:function(e,t,a){},41:function(e,t,a){var n={"./accord.jpg":42,"./altis.jpg":43,"./camry.jpg":44,"./city.jpg":45,"./civic.jpg":46,"./corolla.jpg":47,"./yaris.jpg":48};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=41},42:function(e,t,a){e.exports=a.p+"static/media/accord.1efc88a6.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/altis.9567468e.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/camry.16dfea29.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/city.a03cef2b.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/civic.63f5ef8c.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/corolla.8e72cbd4.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/yaris.d35c89b4.jpg"},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),o=(a(30),a(1)),i=a(15),u=a(11),m=function(e){var t=e.label,a=e.to,n=e.styles,l=Object(o.g)({path:a,extact:!0});return r.a.createElement(i.b,{to:a,className:Object(u.css)(n.a,l&&n.active)},t)},s=["Dashboard","Highlighted Car"],d=u.StyleSheet.create({ul:{listStyle:"none",padding:"0",width:"100%",height:"60px",margin:"auto",position:"relative",backgroundColor:"#2c3e50"},li:{display:"inline-block",width:"50%",height:"100%",margin:"0",padding:"0"},a:{display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",color:"#fff",textDecoration:"none",position:"relative",fontSize:"18px",transition:"left .4s, background-color .4s",":hover":{backgroundColor:"#3498db"}},active:{backgroundColor:"#e74c3c"}}),g=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:Object(u.css)(d.ul)},s.map((function(e){return r.a.createElement("li",{className:Object(u.css)(d.li),key:e},r.a.createElement(m,{label:e,to:"/".concat(e),styles:d}))}))))},p=a(6),b=a(10),f=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){l(b)}),[]),r.a.createElement("div",null,r.a.createElement("h1",null,"Dashboard"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Brand"),r.a.createElement("th",null,"Model"),r.a.createElement("th",null,"Number of Cars"),r.a.createElement("th",null,"Value (Baht)"))),r.a.createElement("tbody",null,a.map((function(e){return e.models.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,e.brand),r.a.createElement("td",null,t.model),r.a.createElement("td",null,t.numberOfCars),r.a.createElement("td",null,t.valueInBaht.toLocaleString()))}))})))))},h=a(2),E=a(14);E.a.register.apply(E.a,Object(h.a)(E.b));var v=function(){var e=Object(n.useState)(b),t=Object(p.a)(e,1)[0],a=Object(n.useState)(""),l=Object(p.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)("pie"),u=Object(p.a)(i,2),m=u[0],s=u[1],d=Object(n.useRef)(null),g=Object(n.useRef)(null),f=""!==c?t[parseInt(c,10)].models.reduce((function(e,t){return e+t.numberOfCars}),0):0;return Object(n.useEffect)((function(){if(""!==c&&t.length>0){var e=parseInt(c,10),a=t[e],n=d.current;if(n){var r=n.getContext("2d");g.current&&g.current.destroy(),g.current=new E.a(r,{type:m,data:{labels:a.models.map((function(e){return e.model})),datasets:[{label:"Number of Cars",data:a.models.map((function(e){return e.numberOfCars})),backgroundColor:["rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)"],borderColor:["rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)"],borderWidth:1}]},options:{responsive:!0,plugins:{legend:{position:"top"},tooltip:{callbacks:{label:function(e){return e.label+": "+e.raw+" cars"}}}},scales:"bar"===m?{x:{stacked:!0},y:{stacked:!0}}:{}}})}}return function(){g.current&&g.current.destroy()}}),[c,t,m]),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{style:{marginBottom:"20px"}},r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"brandSelect"},"Choose a brand: "),r.a.createElement("select",{id:"brandSelect",onChange:function(e){return o(e.target.value)},value:c},r.a.createElement("option",{value:""},"Select a brand"),t.map((function(e,t){return r.a.createElement("option",{key:t,value:t},e.brand)})))),r.a.createElement("div",{style:{marginBottom:"20px"}},r.a.createElement("button",{onClick:function(){return s("pie")}},"Pie Chart"),"\xa0",r.a.createElement("button",{onClick:function(){return s("bar")}},"Stacked Bar Chart")),""!==c&&r.a.createElement("div",{style:{width:"600px",margin:"0 auto"}},r.a.createElement("h3",null,t[c].brand),r.a.createElement("p",null,"Total number of cars: ",r.a.createElement("strong",null,f)),r.a.createElement("canvas",{ref:d})))},y=function(e){var t={};return e.keys().map((function(a,n){t[a.replace("./","")]=e(a)})),t}(a(41)),j=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)((function(){var e=localStorage.getItem("highlightedCars");return e?JSON.parse(e):[]})),o=Object(p.a)(c,2),i=o[0],u=o[1];Object(n.useEffect)((function(){l(b)}),[]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Car List"),r.a.createElement("div",null,a.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h2",null,e.brand),r.a.createElement("ul",null,e.models.map((function(e,t){return r.a.createElement("li",{key:t,style:{display:"flex",alignItems:"center",marginBottom:"10px"}},r.a.createElement("img",{src:y[e.image],alt:e.model,style:{width:"100px",height:"auto",marginRight:"15px"}}),r.a.createElement("div",null,r.a.createElement("span",null,e.model," - ",e.numberOfCars," cars - ",e.valueInBaht," Baht"),r.a.createElement("button",{onClick:function(){return function(e){u((function(t){var a=t.find((function(t){return t.model===e.model}))?t.filter((function(t){return t.model!==e.model})):[].concat(Object(h.a)(t),[e]);return localStorage.setItem("highlightedCars",JSON.stringify(a)),a}))}(e)},style:{backgroundColor:i.find((function(t){return t.model===e.model}))?"green":"grey",color:"white",marginLeft:"10px",padding:"5px 10px",border:"none",cursor:"pointer"}},i.find((function(t){return t.model===e.model}))?"Unhighlight":"Highlight")))}))))}))),r.a.createElement("h2",null,"Highlighted Cars"),r.a.createElement("table",{border:"1"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Model"),r.a.createElement("th",null,"Value (Baht)"),r.a.createElement("th",null,"Image"))),r.a.createElement("tbody",null,i.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.model),r.a.createElement("td",null,e.valueInBaht),r.a.createElement("td",null,r.a.createElement("img",{src:y[e.image],alt:e.model,style:{width:"100px",height:"auto"}})))})))))};function O(){var e=Object(o.f)().menu;return r.a.createElement("div",null,"Dashboard"===e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(v,null)),"Highlighted Car"===e&&r.a.createElement(j,null))}var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(g,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/error"},r.a.createElement("div",null,"Error Page")),r.a.createElement(o.a,{path:"/:menu"},r.a.createElement(O,null)),r.a.createElement(o.a,{path:"/"},r.a.createElement(O,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.35f0731c.chunk.js.map