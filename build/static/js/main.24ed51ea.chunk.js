(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(75)},62:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(32),c=a.n(l),u=a(9),o=a(33),i=a.n(o),m=(a(62),a(11)),s=(a(74),function(e){var t=e.values,a=e.isPerCapita,l=e.countries,c=e.range,o=Object(n.useState)([]),i=Object(u.a)(o,2),s=i[0],d=i[1],f=function(){for(var e=[],n=0;n<t.length;n++)e.push(t[n].map(function(e){return{x:e.year,y:a?Number(e.value):Number(e.value)/1e3}}).filter(function(e){return e.x>=c.start&&e.x<=c.end}));return e},h=function(e,t){d([e])};return r.a.createElement(m.b,{onMouseLeave:function(){d([])},margin:{left:50,right:10,top:10,bottom:40},height:400},r.a.createElement(m.e,null),r.a.createElement(m.c,null),r.a.createElement(m.f,{title:"Year",tickFormat:function(e){return e}}),r.a.createElement(m.g,{title:"Value",tickFormat:function(e){return a?e:e+"k"}}),function(e){for(var t=[],a=0;a<e;a++)t.push(r.a.createElement(m.d,{key:a.toString(),onNearestX:h,getNull:function(e){return 0!==e.y||e.x>2100},data:f()[a],color:l[a].color}));return t}(f().length),r.a.createElement(m.a,{values:s}))}),d=a(78),f=a(76),h=a(37),E=a(79),b=function(e){var t=e.handleChange,a=e.search,n=e.handleCheckbox,l=e.checkboxDefault,c=e.reset,u=e.checkboxDisabled,o=e.handleRangeStart,i=e.handleRangeEnd,m=e.range;return r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement(h.a,null,r.a.createElement(d.a.Control,{type:"text",onChange:t}))),r.a.createElement(f.a,null,r.a.createElement(h.a,null,r.a.createElement(E.a,{onClick:a,variant:"primary",type:"submit"},"Add"),r.a.createElement(E.a,{onClick:c,variant:"danger"},"Reset")),r.a.createElement(h.a,null,r.a.createElement(d.a.Label,null,"Range Start"),r.a.createElement(d.a.Control,{type:"text",onChange:o,value:m.start})),r.a.createElement(h.a,null,r.a.createElement(d.a.Label,null,"End"),r.a.createElement(d.a.Control,{type:"text",onChange:i,value:m.end}))),r.a.createElement(d.a.Check,{disabled:u,type:"checkbox",onChange:n,defaultChecked:l,label:"Per Capita"}))},v=a(77),g=function(e){var t=e.countries,a=e.handleRemove,n=function(e){var n=e.value,l=e.i;return r.a.createElement("tr",null,r.a.createElement("td",{style:{color:t[l].color}},n.country),r.a.createElement("td",null,r.a.createElement(E.a,{variant:"danger",onClick:function(){return a(l)}},"Remove")))},l=t.map(function(e,t){return r.a.createElement(n,{key:t.toString(),value:e,i:t})});return r.a.createElement(v.a,{hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Country name"))),r.a.createElement("tbody",null,l))},p=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),m=o[0],d=o[1],f=Object(n.useState)("-"),h=Object(u.a)(f,2),E=h[0],v=h[1],p=Object(n.useState)(!0),C=Object(u.a)(p,2),y=C[0],k=C[1],O=Object(n.useState)([]),j=Object(u.a)(O,2),x=j[0],S=j[1],R=Object(n.useState)({start:1960,end:2017}),w=Object(u.a)(R,2),D=w[0],N=w[1];return Object(n.useEffect)(function(){i.a.get(E).then(function(e){for(var t=[],n=0;n<a.length;n++)t.push(a[n]);if(void 0!==e.data.values){t.push(e.data.values);var r={};r.country=e.data.country,r.color=function(e){for(var t=0,a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<5)-t);for(var n="#",r=0;r<3;r++)n+=("00"+(t>>8*r&255).toString(16)).substr(-2);return n}(e.data.country),x.push(r)}l(t)})},[E]),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"WBApi CO2"),r.a.createElement("br",null),r.a.createElement(b,{handleChange:function(e){d(e.target.value)},search:function(e){e.preventDefault(),v("/api/co2/country/"+m+"/1960/2017/"+y)},handleCheckbox:function(e){k(!y)},checkboxDefault:y,reset:function(e){l([]),v(""),S([]),N({start:1960,end:2017})},checkboxDisabled:!(a.length<1),handleRangeStart:function(e){N({start:e.target.value,end:D.end})},handleRangeEnd:function(e){N({start:D.start,end:e.target.value})},range:D}),r.a.createElement("div",null,r.a.createElement(s,{values:a,isPerCapita:y,countries:x,range:D})),r.a.createElement(g,{countries:x,handleRemove:function(e){l(a.filter(function(t,a){return e!==a})),S(x.filter(function(t,a){return e!==a}))}}))};c.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.24ed51ea.chunk.js.map