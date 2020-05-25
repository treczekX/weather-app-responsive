(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{19:function(e,a,t){e.exports=t(42)},2:function(e,a,t){},24:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),l=t.n(c),m=(t(24),t(13)),o=t(14),s=t(17),i=t(15),u=t(18),p=(t(2),function(e){return r.a.createElement("form",{className:"container",onSubmit:e.submit},r.a.createElement("div",{className:"row mb-5 px-5"},r.a.createElement("div",{className:"col-9"},r.a.createElement("input",{type:"text",className:"w-75 h-100 px-2 input-font-size",value:e.value,onChange:e.change,placeholder:"Prosz\u0119 wpisa\u0107 miasto..."})),r.a.createElement("div",{className:"col-3"},r.a.createElement("button",{className:"btn btn-primary btn-lg"},"Sprawd\u017a pogod\u0119"))))}),d=function(e){var a=e.weather,t=a.city,n=a.country,c=a.date,l=a.temp,m=a.minTemp,o=a.maxTemp,s=a.pressure,i=a.humidity,u=a.wind,p=a.weather,d=a.coord_lat,h=a.coord_lon,v=a.error,E=r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"col-12 p-3 text-warning bg-secondary text-center"},"Nie posiadamy w bazie danych miasta ",r.a.createElement("span",{className:"text-danger px-2"},t.toUpperCase()))),w=null;return!v&&t&&(w=r.a.createElement("div",{className:"container text-center"},r.a.createElement("div",{className:"cards py-5 p-5 card-color"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:"col-6 text-center text-success"},t.toUpperCase()),r.a.createElement("h1",{className:"col-6"},n.toUpperCase())),r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"py-4 col-6"},c),r.a.createElement("h2",{className:"py-4 col-6"},"Temperatura: ",l,"\xb0C")),r.a.createElement("div",null,p),r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",null,"Minimalna temperatura: ",r.a.createElement("span",{className:"text-danger"},m,"\xb0C"))),r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",null,"Maksymalna temperatura: ",r.a.createElement("span",{className:"text-success"},o,"\xb0C")))),r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",null,"Ci\u015bnienie atmosferyczne: ",s,"HPa")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",null,"Wilgotno\u015b\u0107 powietrza: ",i,"%"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",null,"Si\u0142a wiatru: ",u,"m/s")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",null,"Koordynaty: ",d,"N, ",h,"E")))))),r.a.createElement("div",null,v?E:w)},h=t(16),v=t.n(h),E=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={value:"",date:"",country:"",city:"",temp:"",minTemp:"",maxTemp:"",pressure:"",humidity:"",wind:"",coord_lat:"",coord_lon:"",error:!1},t.handleChange=function(e){t.setState({value:e.target.value})},t.handleSubmit=function(e){e.preventDefault();var a="https://api.openweathermap.org/data/2.5/weather?q=".concat(t.state.value,"&appid=05508bb378ad891b493b0c886cca7a57&units=metric&lang=pl");v.a.get(a).then((function(e){return e.data})).then((function(e){var a=(new Date).toLocaleString(),n=t.state.value;t.setState({error:!1,date:a,city:n,country:e.sys.country,temp:e.main.temp,minTemp:e.main.temp_min,maxTemp:e.main.temp_max,pressure:e.main.pressure,humidity:e.main.humidity,wind:e.wind.speed,coord_lat:e.coord.lat,coord_lon:e.coord.lon,value:""})})).catch((function(e){console.log(e);var a=t.state.value;t.setState({error:!0,city:a})}))},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-container p-4 "},r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:"col-12 my-5 text-center"},"Aplikacja pogodowa 2019")),r.a.createElement(p,{value:e,change:this.handleChange,submit:this.handleSubmit}),r.a.createElement(d,{weather:this.state})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.55c2e4cf.chunk.js.map