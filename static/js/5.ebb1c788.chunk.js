(this["webpackJsonpmeta-weather"]=this["webpackJsonpmeta-weather"]||[]).push([[5],{215:function(t,e,a){"use strict";var o=a(34),n=a(0),c=a(97),i=a(212),r=a(213),l=function(t){return t.metaWeather.weatherSearchLocation};e.a=function(t,e){var a=Object(i.a)(c.b.searchWeatherLocation),u=Object(o.a)(a,1)[0];return Object(n.useEffect)((function(){e&&t&&u({field:e,value:t})}),[t,e,u]),Object(r.a)(l)}},220:function(t,e,a){"use strict";(function(t){var o=a(34),n=a(0),c=a(58);e.a=function(){var e=Object(n.useState)(),a=Object(o.a)(e,2),i=a[0],r=a[1],l=Object(n.useState)(),u=Object(o.a)(l,2),b=u[0],d=u[1],s=Object(n.useCallback)((function(t){r({latt:t.coords.latitude,long:t.coords.longitude})}),[]),f=Object(n.useCallback)((function(t){d(t),c.a.notify(t.message,"error")}),[]);return Object(n.useEffect)((function(){t.navigator.geolocation&&(c.a.notify("Detecting local location","info"),t.navigator.geolocation.getCurrentPosition(s,f,{enableHighAccuracy:!0,timeout:5e3,maximumAge:0}))}),[f,s]),{location:i,error:b}}}).call(this,a(70))},229:function(t,e,a){"use strict";a.r(e),a.d(e,"DashboardComponent",(function(){return C}));var o=a(0),n=a(208),c=a(4),i=a(34),r=a(220),l=a(116),u=a(212),b=a(213),d=function(t){var e=t.ip,a=e.loading,o=e.data,n=e.message;return{loading:a,ip:null===o||void 0===o?void 0:o.ip,message:n}},s=function(){var t=Object(u.a)(l.b.detectIp),e=Object(i.a)(t,1)[0],a=Object(b.a)(d);return Object(c.a)(Object(c.a)({},a),{},{detectIp:e})},f=a(117),j=function(t){var e=t.geoLocation,a=e.loading,o=e.data,n=e.message;return{loading:a,location:null===o||void 0===o?void 0:o.location,message:n}},O=function(){var t=Object(u.a)(f.b.detectGeoLocation),e=Object(i.a)(t,1)[0],a=Object(b.a)(j);return Object(c.a)(Object(c.a)({},a),{},{detectLocationByIP:e})},g=a(58),v=function(){var t=Object(r.a)(),e=t.location,a=t.error,n=s(),c=n.ip,l=n.detectIp,u=n.loading,b=O(),d=b.detectLocationByIP,f=b.location,j=Object(o.useState)(),v=Object(i.a)(j,2),m=v[0],p=v[1];return Object(o.useEffect)((function(){e&&p({field:"lattlong",value:"".concat(e.latt,",").concat(e.long)}),a&&void 0===u&&(l(),g.a.notify("Detecting location by IP","info")),c&&d(c)}),[l,d,c,u,e,a]),Object(o.useEffect)((function(){f&&!e&&p({field:"lattlong",value:"".concat(f.lat,",").concat(f.lng)})}),[e,f]),m},m=a(215),p=a(216),h=function(t){var e=t.ip,a=t.geoLocation;return[e.loading,a.loading].some(Boolean)},y=function(){var t=v(),e=Object(m.a)(null===t||void 0===t?void 0:t.value,null===t||void 0===t?void 0:t.field),a=e.data,n=e.loading,i=Object(o.useMemo)((function(){var t;return null===a||void 0===a||null===(t=a[0])||void 0===t?void 0:t.woeid}),[a]),r=Object(p.a)(i),l=Object(b.a)(h);return Object(c.a)(Object(c.a)({},r),{},{loading:[n,r.loading,l].some(Boolean)})},L=a(217),w=a(219),I=a(71),x=a(210),D=a(198),P=Object(D.a)((function(t){return Object(x.a)({root:{position:"relative"}})}),{classNamePrefix:"WeatherApp"}),k=a(214),B=a(6),C=function(){var t=y(),e=t.loading,a=t.data,o=Object(k.a)(),c=P();return Object(L.a)(),Object(B.jsxs)(n.a,{"data-testid":"Dashboard",className:c.root,children:[(e||!o)&&Object(B.jsx)(I.a,{}),a&&Object(B.jsx)(w.a,{data:a})]})},E=Object(o.memo)(C);E.displayName="Dashboard";e.default=E}}]);
//# sourceMappingURL=5.ebb1c788.chunk.js.map