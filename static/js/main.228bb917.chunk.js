(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(53)},29:function(e,t,a){e.exports={colorBlack:"black",creamYellow:"#ffee70"}},32:function(e,t,a){},33:function(e,t,a){e.exports={colorBlack:"black",creamYellow:"#ffee70"}},34:function(e,t,a){e.exports={colorBlack:"black",creamYellow:"#ffee70"}},37:function(e,t,a){e.exports={colorBlack:"black",creamYellow:"#ffee70"}},38:function(e,t,a){},45:function(e,t,a){e.exports={colorBlack:"black",creamYellow:"#ffee70"}},46:function(e,t,a){e.exports={colorBlack:"black",creamYellow:"#ffee70"}},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),o=a.n(i),c=a(4),l=(a(29),a(5)),s=a.n(l),u=a(9),d=[{name:"Movie",exportName:"movie"},{name:"TV Movie",exportName:"tvMovie"},{name:"Series",exportName:"tvSeries"},{name:"Mini Series",exportName:"tvMiniSeries"},{name:"Episode",exportName:"tvEpisode"},{name:"Video",exportName:"video"},{name:"Short",exportName:"short"},{name:"TV Short",exportName:"tvShort"},{name:"TV Special",exportName:"tvSpecial"},{name:"Video Game",exportName:"videoGame"}],m="***";function p(e){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return a=e.sent,e.abrupt("return",v(a));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function g(e){return new Promise(function(t,a){var n=new FileReader;n.onloadend=function(e){var a=e.target.result;t(a)},n.onerror=function(e){a(e)},n.readAsText(e,"Windows-1252")})}function v(e){var t=function(e){return function(e){return e.replace("Const,","id,").replace("Your Rating,","rating,").replace("Title,","title,").replace("Date Rated,","dateRatedString,").replace("Genres,","genres,").replace("Title Type,","mediaType,").replace("Num Votes,","votes,").replace("Runtime (mins),","runtime,").replace("Release Date,","releaseDate,").replace("URL,","url,").replace("Year,","year,").replace("IMDb Rating,","imdbRating,").replace(",Directors",",directors")}(e).replace(/"[^"]+"/g,function(e){return e.replace(/,/g,"###")}).replace(/,/g,m).replace(/###/g,",").replace(/"/g,"")}(e).split("\n");console.log(t[0]);var a,n=[],r=t[0].split(m);return t.map(function(e,t){if(t<1)return n;var a={},i=e.split(m);return r.map(function(e,t){return a[e]=i[t],a}),n.push(a),n}),n.pop(),(a=n).map(function(e){var t=d.findIndex(function(t){return t.exportName===e.mediaType});return e.rating=parseInt(e.rating),e.runtime=parseInt(e.runtime),e.votes=parseInt(e.votes),e.year=parseInt(e.year),e.imdbRating=parseFloat(e.imdbRating),e.dateRated=new Date(e.dateRatedString),e.mediaTypeId=t,e.mediaType=d[t].name,e.genres=e.genres.split(", "),e.directors=e.directors.split(", "),e.deviation=parseFloat((e.rating-e.imdbRating).toFixed(1)),e}),n=a,console.log(n),n}var h=a(15);var b=function(e){var t=Object(h.a)(new Set(e.map(function(e){return e.mediaTypeId})));return t=t.sort()},E=(a(32),function(e){var t=e.setLoaded,a=e.setRatings,n=e.setLoadedMediaTypes,i=function(){var e=Object(u.a)(s.a.mark(function e(){var r,i,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.getElementById("fileUpload").files[0],e.next=3,p(r);case 3:i=e.sent,o=b(i),console.log(o),a(i),n(o),t(!0),sessionStorage.setItem("ratings",JSON.stringify(i)),sessionStorage.setItem("mediaTypes",o);case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"uploader"},r.a.createElement("h1",null,"Upload IMDb Ratings CSV"),r.a.createElement("input",{type:"file",id:"fileUpload",onChange:i}))}),y=(a(33),function(){return r.a.createElement("div",{className:"title-bar"},r.a.createElement("span",{className:"app-name"},"IMDb Ratings Visualizer"))}),w=(a(34),a(14)),x=a(23),N=(a(37),r.a.createElement("span",null,r.a.createElement("span",{style:{verticalAlign:"middle"}},"Next"),r.a.createElement("i",{className:"material-icons pagination-icon"},"keyboard_arrow_right"))),k=r.a.createElement("span",null,r.a.createElement("i",{className:"material-icons pagination-icon left-pagination-icon"},"keyboard_arrow_left"),r.a.createElement("span",null,"Previous")),S=function(e){var t=e.data,a=e.columns,n=e.defaultSorted,i=e.defaultPageSize;return r.a.createElement(x.a,{data:t,columns:a,className:"-striped -highlight",defaultSorted:n,defaultPageSize:i,pageSizeOptions:[5,10,15,25,50,100,250,1e3],nextText:N,previousText:k,minRows:0})},R=(a(38),function(e){var t=e.ratings;return r.a.createElement("div",{className:"main-component"},r.a.createElement(S,{data:t,columns:[{Header:"ID",accessor:"id"},{Header:"Title",accessor:"title"},{Header:"Rating",accessor:"rating"},{Header:"Type",accessor:"mediaType"},{Header:"Date Rated",accessor:"dateRatedString"},{Header:"Genres",accessor:"genres"}],defaultSorted:[{id:"rating",desc:!0}],defaultPageSize:50}))}),O=a(13),T=a.n(O),I=function(e){var t=e.title,a=e.categories,n=e.data,i=e.dataCount,o=e.seriesName,c=e.height,l=e.width,s={colors:["#FFEE70"],plotOptions:{bar:{dataLabels:{position:"top"},distributed:!0,colors:{backgroundBarOpacity:1}}},dataLabels:{offsetY:-22,enabled:!0,formatter:function(e){return Math.round(e/i*100)+"%"},style:{fontSize:"12px",colors:void 0}},xaxis:{categories:a,labels:{}},fill:{type:"gradient",gradient:{shade:"light",type:"vertical",shadeIntensity:.4,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[50,100]}},title:{text:t,floating:!0,align:"center",style:{color:"#ffffff"}},tooltip:{theme:"dark",x:{show:!1}},grid:{show:!1},chart:{toolbar:{tools:{download:!1}}}},u=[{name:o,data:n}];return r.a.createElement("div",{className:"chart-container"},r.a.createElement(T.a,{options:s,series:u,type:"bar",height:c,width:l}))},j=function(e){var t=e.ratingsData,a=e.ratingsCount;return r.a.createElement(I,{title:"Ratings per Stars",categories:["1","2","3","4","5","6","7","8","9","10"],data:t,dataCount:a,seriesName:"Ratings",height:350,width:600})};a(45);var D=function(e){var t=e.description,a=e.value;return r.a.createElement("tr",null,r.a.createElement("td",{className:"info-value"},a),r.a.createElement("td",{className:"info-key"},t))},F=function(e){var t=e.ratings,a=e.ratingsCount,n=function(e,t){var a=e.reduce(function(e,t){return e+(t.rating||0)},0),n=parseFloat((a/t).toFixed(1)),r=e.reduce(function(e,t){return e+(t.imdbRating||0)},0),i=parseFloat((r/t).toFixed(1)),o=e.reduce(function(e,t){return e+(t.runtime||0)},0);return[n,i,parseFloat((o/60/24).toFixed(1))]}(t,a),i=Object(c.a)(n,3),o=i[0],l=i[1],s=i[2];return r.a.createElement("div",{className:"chart-container"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement(D,{description:"ratings",value:a}),r.a.createElement(D,{description:"your avg rating",value:o}),r.a.createElement(D,{description:"public avg rating",value:l}),r.a.createElement(D,{description:"days watched",value:s}))))},M=(a(46),function(e){for(var t=e.map(function(e){return e.rating}),a=Array(10).fill(0),n=0;n<t.length;n++){var r=t[n]-1;a[r]=a[r]?a[r]+1:1}return a}),C=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];var Y=function(e){var t=e.ratings,a=t.length,n=function(e){var t=e.reduce(function(e,t){return e[t.dateRated.getDay()]++,e},[0,0,0,0,0,0,0]);return t.push(t.shift()),t}(t);return console.log("ratingsPerWeekday =>",n),r.a.createElement("div",null,r.a.createElement(I,{title:"Ratings per Weekday",categories:C,data:n,dataCount:a,seriesName:"Weekday",width:600,height:350}))};var z=function(e){var t=e.ratings,a=t.length,n=function(e){var t=Object(h.a)(new Set(e.map(function(e){return e.dateRated.getFullYear()})));return t.sort(),t}(t),i=function(e,t){for(var a=e.map(function(e){return e.dateRated.getFullYear()}),n=Array(t).fill(0),r=0;r<a.length;r++){var i=a[r],o=t.indexOf(i);n[o]=n[o]?n[o]+1:1}return n}(t,n);return r.a.createElement(I,{title:"Ratings per Year",categories:n,data:i,dataCount:a,seriesName:"Year",width:600,height:350})},B=function(e){var t=e.title,a=e.categories,n=e.columnName,i=e.columnData,o=e.lineName,c=e.lineData,l=e.height,s=e.width,u={stroke:{width:[0,4]},title:{text:t,floating:!0,align:"center",style:{color:"#ffffff"}},labels:a,yaxis:[{title:{text:n},decimalsInFloat:0},{opposite:!0,title:{text:o},decimalsInFloat:1}],grid:{yaxis:{lines:{show:!1}}},chart:{toolbar:{tools:{download:!1}}},tooltip:{theme:"dark"}},d=[{name:n,type:"column",data:i},{name:o,type:"line",data:c}];return r.a.createElement("div",{className:"chart-container"},r.a.createElement(T.a,{series:d,options:u,type:"line",height:l,width:s}))};function H(e){return 10*Math.floor(e/10)}var A=function(e){var t=e.ratings,a=function(){for(var e=new Date,t=[],a=1870;a<=H(e.getFullYear());a+=10)t.push(a);return t}();console.log("decades =>",a);var n=function(e,t){for(var a=t.length,n=Array(a).fill(0),r=Array(a).fill(0),i=0;i<e.length;i++){var o=e[i].rating,c=H(e[i].year),l=t.indexOf(c);n[l]=n[l]+1,r[l]=r[l]+o}for(var s=0;s<r.length;s++)r[s]=r[s]?parseFloat((r[s]/n[s]).toFixed(1)):0;return console.log("counts =>",n),console.log("avgRating =>",r),[n,r]}(t,a),i=Object(c.a)(n,2),o=i[0],l=i[1];return r.a.createElement("div",null,r.a.createElement(B,{title:"Ratings per Decade",categories:a,columnName:"Amount of Ratings",columnData:o,lineName:"Average Rating",lineData:l,width:1200,height:378}))};var P=[{name:"Dashboard",icon:"bubble_chart",path:"/",component:function(e){var t=e.ratings,a=t.length;return r.a.createElement("div",{className:"main-component"},r.a.createElement(F,{ratings:t,ratingsCount:a}),r.a.createElement(j,{ratingsData:M(t),ratingsCount:a}))}},{name:"Ratings",icon:"list",path:"/ratings",component:R},{name:"Time",icon:"calendar_today",path:"/time",component:function(e){var t=e.ratings;return r.a.createElement("div",{className:"main-component"},r.a.createElement(Y,{ratings:t}),r.a.createElement(z,{ratings:t}),r.a.createElement(A,{ratings:t}))}},{name:"Deviations",icon:"call_split",path:"/deviations",component:function(e){var t=function(e){var t=e.filter(function(e){return e.deviation>0}),a=e.filter(function(e){return e.deviation<0});return t.sort(function(e,t){return t.deviation-e.deviation}),a.sort(function(e,t){return e.deviation-t.deviation}),[t,a]}(e.ratings),a=Object(c.a)(t,2),n=a[0],i=a[1];console.log("positives =>",n),console.log("negatives =>",i);var o=[{Header:"Title",accessor:"title"},{Header:"Your Rating",accessor:"rating"},{Header:"IMDb Rating",accessor:"imdbRating"},{Header:"Deviation",accessor:"deviation"}];return r.a.createElement("div",{className:"main-component"},r.a.createElement("div",{style:{float:"left",width:"45%"}},r.a.createElement("h3",null,"Positive"),r.a.createElement(S,{data:n,columns:o,defaultPageSize:15})),r.a.createElement("div",{style:{float:"right",width:"45%"}},r.a.createElement("h3",null,"Negative"),r.a.createElement(S,{data:i,columns:o,defaultPageSize:15})))}}],L=function(){var e,t=Object(n.useState)((e=P,console.log(e),e.find(function(e){var t=window.location.pathname.substr(window.location.pathname.lastIndexOf("/"));return e.path===t}).name)),a=Object(c.a)(t,2),i=a[0],o=a[1];return P?r.a.createElement("div",null,P.map(function(e){return r.a.createElement("div",{key:e.name},r.a.createElement(w.b,{to:"".concat("/imdb-ratings-visualizer").concat(e.path),className:"sidebar-link"},r.a.createElement("div",{className:(t=e.name,i===t?"active-tab":"")},r.a.createElement("div",{onClick:function(){return o(e.name)},className:"sidebar-box"},r.a.createElement("i",{className:"material-icons sidebar-icon"},e.icon),r.a.createElement("span",{className:"sidebar-text"},e.name)))));var t})):"Loading"},V=function(e){var t=e.id,a=e.name,n=e.checked,i=e.onChange;return r.a.createElement("label",{className:"filter-checkbox-label"},r.a.createElement("input",{type:"checkbox",className:"custom-checkbox",value:t,name:a,checked:n,onChange:i}),r.a.createElement("span",{className:"checkmark"}),a)},W=function(e){var t=e.loadedMediaTypes,a=e.filterMovies,i=t.map(function(e){return[e,!0]}),o=Object(n.useState)(1),l=Object(c.a)(o,2),s=l[0],u=l[1],m=Object(n.useState)(new Map(i)),p=Object(c.a)(m,2),f=p[0],g=p[1],v=function(e){var t=parseInt(e.target.value),n=e.target.checked;g(f.set(t,n)),u(s+1),a(f)};return r.a.createElement("div",{className:"sidebar"},r.a.createElement(L,null),r.a.createElement("div",null,r.a.createElement("h3",{className:"filter-heading"},"Filter"),f?t.map(function(e){return r.a.createElement(V,{key:e,id:e,name:d[e].name,checked:f.get(e),onChange:v})}):"loading"))},_=a(10);function G(){return(G=Object(u.a)(s.a.mark(function e(t,a,n){var r,i,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=sessionStorage.getItem("ratings"))){e.next=12;break}return e.next=4,JSON.parse(r);case 4:return i=e.sent,e.next=7,J(i);case 7:o=e.sent,t(o),console.log(o),a(sessionStorage.getItem("mediaTypes").split(",").map(function(e){return parseInt(e)})),n(!0);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}function J(e){return U.apply(this,arguments)}function U(){return(U=Object(u.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.map(function(e){return e.dateRated=new Date(e.dateRated),e}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}var $=function(e,t,a){return G.apply(this,arguments)},q=function(e){var t=e.ratings,a=e.loadedMediaTypes,i=Object(n.useState)(t),o=Object(c.a)(i,2),l=o[0],s=o[1],u=P.map(function(e){var t=e.path,a=e.component,n=e.name;return r.a.createElement(_.a,{exact:!0,path:"".concat("/imdb-ratings-visualizer").concat(t),render:function(){return r.a.createElement(a,{ratings:l})},key:n})});return r.a.createElement("div",null,r.a.createElement(W,{loadedMediaTypes:a,filterMovies:function(e){var a=t.filter(function(t){return!0===e.get(t.mediaTypeId)});s(a)}}),u)},K=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(),l=Object(c.a)(o,2),s=l[0],u=l[1],d=Object(n.useState)(),m=Object(c.a)(d,2),p=m[0],f=m[1];return Object(n.useEffect)(function(){a||$(u,f,i)},[a]),r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement("div",{className:"main-content"},a?r.a.createElement(w.a,null,r.a.createElement(q,{ratings:s,loadedMediaTypes:p})):r.a.createElement(E,{setLoaded:i,setRatings:u,setLoadedMediaTypes:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.228bb917.chunk.js.map