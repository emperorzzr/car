(this["webpackJsonprouter-example"]=this["webpackJsonprouter-example"]||[]).push([[0],{26:function(e,t,n){e.exports=n(43)},31:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(24),c=n.n(l),o=(n(31),n(1)),u=n(16),i=n(11),s=function(e){var t=e.label,n=e.to,a=e.styles,l=Object(o.h)({path:n,extact:!0});return r.a.createElement(u.b,{to:n,className:Object(i.css)(a.a,l&&a.active)},t)},m=["Dashboard","Highlighted Car"],d=i.StyleSheet.create({ul:{listStyle:"none",padding:"0",width:"100%",height:"60px",margin:"auto",position:"relative",backgroundColor:"#2c3e50"},li:{display:"inline-block",width:"50%",height:"100%",margin:"0",padding:"0"},a:{display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",color:"#fff",textDecoration:"none",position:"relative",fontSize:"18px",transition:"left .4s, background-color .4s",":hover":{backgroundColor:"#3498db"}},active:{backgroundColor:"#e74c3c"}}),b=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:Object(i.css)(d.ul)},m.map((function(e){return r.a.createElement("li",{className:Object(i.css)(d.li),key:e},r.a.createElement(s,{label:e,to:"/".concat(e),styles:d}))}))))},h=n(8),f=n.n(h),E=n(13),p=n(4),g=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!0),o=Object(p.a)(c,2),u=o[0],i=o[1],s=Object(a.useState)(null),m=Object(p.a)(s,2),d=m[0],b=m[1];return Object(a.useEffect)((function(){(function(){var e=Object(E.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/data.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Network response was not ok");case 6:return e.next=8,t.json();case 8:n=e.sent,l(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),b(e.t0.message);case 15:return e.prev=15,i(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(){return e.apply(this,arguments)}})()()}),[]),u?r.a.createElement("div",null,"Loading..."):d?r.a.createElement("div",null,"Error: ",d):r.a.createElement("div",null,r.a.createElement("h1",null,"Dashboard"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Brand"),r.a.createElement("th",null,"Model"),r.a.createElement("th",null,"Number of Cars"),r.a.createElement("th",null,"Value (Baht)"))),r.a.createElement("tbody",null,n.map((function(e,t){return e.models.map((function(n,a){return r.a.createElement("tr",{key:"".concat(t,"-").concat(a)},r.a.createElement("td",null,e.brand),r.a.createElement("td",null,n.model),r.a.createElement("td",null,n.numberOfCars),r.a.createElement("td",null,n.valueInBaht.toLocaleString()))}))})))))},v=n(2),j=n(15);j.a.register.apply(j.a,Object(v.a)(j.b));var O=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),o=Object(p.a)(c,2),u=o[0],i=o[1],s=Object(a.useState)("pie"),m=Object(p.a)(s,2),d=m[0],b=m[1],h=Object(a.useRef)(null),f=Object(a.useRef)(null);Object(a.useEffect)((function(){fetch("/data.json").then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return console.error("Error fetching data:",e)}))}),[]);var E=""!==u?n[parseInt(u,10)].models.reduce((function(e,t){return e+t.numberOfCars}),0):0;return Object(a.useEffect)((function(){if(""!==u&&n.length>0){var e=parseInt(u,10),t=n[e],a=h.current;if(a){var r=a.getContext("2d");f.current&&f.current.destroy(),f.current=new j.a(r,{type:d,data:{labels:t.models.map((function(e){return e.model})),datasets:[{label:"Number of Cars",data:t.models.map((function(e){return e.numberOfCars})),backgroundColor:["rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)"],borderColor:["rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)"],borderWidth:1}]},options:{responsive:!0,plugins:{legend:{position:"top"},tooltip:{callbacks:{label:function(e){return e.label+": "+e.raw+" cars"}}}},scales:"bar"===d?{x:{stacked:!0},y:{stacked:!0}}:{}}})}}return function(){f.current&&f.current.destroy()}}),[u,n,d]),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{style:{marginBottom:"20px"}},r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"brandSelect"},"Choose a brand: "),r.a.createElement("select",{id:"brandSelect",onChange:function(e){return i(e.target.value)},value:u},r.a.createElement("option",{value:""},"Select a brand"),n.map((function(e,t){return r.a.createElement("option",{key:t,value:t},e.brand)})))),r.a.createElement("div",{style:{marginBottom:"20px"}},r.a.createElement("button",{onClick:function(){return b("pie")}},"Pie Chart"),"\xa0",r.a.createElement("button",{onClick:function(){return b("bar")}},"Stacked Bar Chart")),""!==u&&r.a.createElement("div",{style:{width:"600px",margin:"0 auto"}},r.a.createElement("h3",null,n[u].brand),r.a.createElement("p",null,"Total number of cars: ",r.a.createElement("strong",null,E)),r.a.createElement("canvas",{ref:h})))},y=function(){var e=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/data.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("HTTP error! status: ".concat(t.status));case 6:return e.next=8,t.json();case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(0),console.error("Error fetching car data:",e.t0),e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)((function(){var e=localStorage.getItem("highlightedCars");return e?JSON.parse(e):[]})),o=Object(p.a)(c,2),u=o[0],i=o[1];Object(a.useEffect)((function(){(function(){var e=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Car List"),r.a.createElement("div",null,n.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h2",null,e.brand),r.a.createElement("ul",null,e.models.map((function(e,t){return r.a.createElement("li",{key:t,style:{display:"flex",alignItems:"center",marginBottom:"10px"}},r.a.createElement("img",{src:e.image,alt:e.model,style:{width:"100px",height:"auto",marginRight:"15px"}}),r.a.createElement("div",null,r.a.createElement("span",null,e.model," - ",e.numberOfCars," cars - ",e.valueInBaht," Baht"),r.a.createElement("button",{onClick:function(){return function(e){i((function(t){var n=t.find((function(t){return t.model===e.model}))?t.filter((function(t){return t.model!==e.model})):[].concat(Object(v.a)(t),[e]);return localStorage.setItem("highlightedCars",JSON.stringify(n)),n}))}(e)},style:{backgroundColor:u.find((function(t){return t.model===e.model}))?"green":"grey",color:"white",marginLeft:"10px",padding:"5px 10px",border:"none",cursor:"pointer"}},u.find((function(t){return t.model===e.model}))?"Unhighlight":"Highlight")))}))))}))),r.a.createElement("h2",null,"Highlighted Cars"),r.a.createElement("table",{border:"1"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Model"),r.a.createElement("th",null,"Value (Baht)"),r.a.createElement("th",null,"Image"))),r.a.createElement("tbody",null,u.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.model),r.a.createElement("td",null,e.valueInBaht),r.a.createElement("td",null,r.a.createElement("img",{src:e.image,alt:e.model,style:{width:"100px",height:"auto"}})))})))))};function x(){var e=Object(o.g)().menu;return r.a.createElement("div",null,"Dashboard"===e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(O,null)),"Highlighted Car"===e&&r.a.createElement(k,null))}var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement(b,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/error"},r.a.createElement("div",null,"Error Page")),r.a.createElement(o.b,{path:"/:menu"},r.a.createElement(x,null)),r.a.createElement(o.b,{path:"/"},r.a.createElement(o.a,{to:"/Dashboard"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.1ae1107b.chunk.js.map