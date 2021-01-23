(this["webpackJsonpmeta-weather"]=this["webpackJsonpmeta-weather"]||[]).push([[0],{211:function(t,e,n){"use strict";var i=n(0),a=n(37),r=n(98);e.a=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var c=Object(r.c)();return Object(i.useMemo)((function(){return e.map((function(t){return Object(a.bindActionCreators)(t,c)}))}),[c].concat(e))}},212:function(t,e,n){"use strict";var i=n(98);e.a=function(t){return Object(i.d)(t,i.b)}},213:function(t,e,n){"use strict";var i=n(34),a=n(0),r=function(t){return Object(a.useEffect)(t,[])},c=function(t){return r(t)};e.a=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],r=e[1];return c((function(){r(!0)})),n}},215:function(t,e,n){"use strict";var i=n(34),a=n(0),r=n(97),c=n(211),s=n(212),o=function(t){return t.metaWeather.weatherAtLocation};e.a=function(t){var e=Object(c.a)(r.b.getWeatherAtLocation),n=Object(i.a)(e,1)[0];return Object(a.useEffect)((function(){t&&/^\d+$/.test(t.toString())&&n(t)}),[t,n]),Object(s.a)(o)}},216:function(t,e,n){"use strict";var i=n(34),a=n(0),r=n(211),c=n(97);e.a=function(){var t=Object(r.a)(c.b.resetWeatherAtLocation),e=Object(i.a)(t,1)[0];Object(a.useEffect)((function(){e()}),[e])}},217:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var i=function(t){return"https://www.metaweather.com/static/img/weather/{abbr}.svg".replace("{abbr}",t)},a=function(t){return/^\d+$/.test(t.toString())}},218:function(t,e,n){"use strict";var i=n(6),a=n(0),r=n(207),c=n(224),s=n(201),o=n(110),u=n.n(o),f=n(220),d=n.n(f),l=n(221),m=n.n(l),h=n(222),x=n.n(h),j=n(223),g=n.n(j),p=n(38);u.a.extend(g.a),u.a.extend(x.a),u.a.extend(d.a),u.a.extend(m.a);var b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.a;return u()(t).format(e)},v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.h,i=u.a.tz(t,n);return i.isToday()?"Today":i.isTomorrow()?"Tomorrow":b(i,e)},O=n(4),w=n(43),y=n(217),$=function(t){var e=t.name,n=Object(w.a)(t,["name"]);return Object(i.jsx)("img",Object(O.a)(Object(O.a)({},n),{},{alt:"weather icon",src:Object(y.a)(e)}))},D=Object(a.memo)($);D.displayName="WeatherIcon";var S=D,W=function(t){var e=t.min,n=t.max;return Object(i.jsxs)(s.a,{variant:"caption",children:[Object(i.jsxs)("span",{children:["Min: ",e.toFixed(0),"\xb0C"]}),Object(i.jsx)("br",{}),Object(i.jsxs)("span",{children:["Max: ",n.toFixed(0),"\xb0C"]})]})},C=Object(a.memo)(W);C.displayName="WeatherTemperature";var M=C,Y=n(209),z=n(197),N={"dir-nne":22.5,"dir-ne":45,"dir-ene":67.5,"dir-e":90,"dir-ese":112.5,"dir-se":135,"dir-sse":157.5,"dir-s":180,"dir-ssw":202.5,"dir-sw":225,"dir-wsw":247.5,"dir-w":270,"dir-wnw":292.5,"dir-nw":315,"dir-nnw":337.5},T=Object(z.a)((function(t){return Object(Y.a)({dir:{background:'url("https://www.metaweather.com/static/img/windarrow.svg")',width:"1em",height:"1em",display:"inline-block",backgroundSize:"100% 100%",transform:function(t){var e=t.direction,n=N["dir-".concat(e.toLowerCase())];return"rotate(".concat(n,"deg)")}},speed:{paddingLeft:t.spacing(.5)}})}),{classNamePrefix:"WindSpeed"}),_=function(t){var e=T(t),n=t.speed;return Object(i.jsxs)(s.a,{variant:"caption",component:"span",children:[Object(i.jsx)("span",{className:e.dir}),Object(i.jsxs)("span",{className:e.speed,children:[n.toFixed(0),"mph"]})]})},I=Object(a.memo)(_);I.displayName="WindSpeed";var k=I,U=n(32),F=Object(z.a)((function(t){return Object(Y.a)({weatherIconSection:Object(U.a)({margin:t.spacing(0,10)},t.breakpoints.down("xs"),{margin:t.spacing(3,0)})})}),{classNamePrefix:"WeatherWidget"}),L=function(t){var e=t.title,n=t.date,a=t.weather,o=F();return Object(i.jsxs)(c.a,{"data-testid":"WeatherWidget",container:!0,justify:"flex-start",alignItems:"center",children:[Object(i.jsx)(c.a,{item:!0,sm:!0,xs:12,md:"auto",children:Object(i.jsx)(c.a,{container:!0,direction:"column",alignItems:"center",children:Object(i.jsxs)(r.a,{textAlign:"center",children:[Object(i.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:e}),Object(i.jsx)(s.a,{variant:"h5",gutterBottom:!0,children:b(n)})]})})}),Object(i.jsx)(c.a,{item:!0,sm:!0,xs:12,md:"auto",className:o.weatherIconSection,children:Object(i.jsxs)(c.a,{container:!0,direction:"column",alignItems:"center",children:[Object(i.jsx)(S,{width:96,height:96,name:a.weather_state_abbr}),Object(i.jsx)(s.a,{children:a.weather_state_name})]})}),Object(i.jsx)(c.a,{item:!0,sm:!0,xs:12,md:"auto",children:Object(i.jsxs)(c.a,{container:!0,direction:"column",alignItems:"center",children:[Object(i.jsx)(M,{max:a.max_temp,min:a.min_temp}),Object(i.jsx)(k,{speed:a.wind_speed,direction:a.wind_direction_compass})]})})]})},H=Object(a.memo)(L);H.displayName="WeatherWidget";var A=H,B=n(179),P=n(86),Z=Object(z.a)((function(t){return Object(Y.a)({root:{padding:t.spacing(2,3),"&:hover":{backgroundColor:Object(P.c)(t.palette.common.black,.05)}},link:{textDecoration:"none","&:hover":{textDecoration:"underline"}}})}),{classNamePrefix:"DailyWeather"}),E=function(t){var e=t.weather,n=t.tz,a=Z();return Object(i.jsx)(B.a,{"data-testid":"DailyWeather",className:a.root,elevation:3,children:Object(i.jsxs)(c.a,{container:!0,direction:"column",spacing:1,children:[Object(i.jsx)(c.a,{item:!0,children:Object(i.jsx)(s.a,{component:"h6",variant:"h6",gutterBottom:!0,children:v(e.applicable_date,void 0,n)})}),Object(i.jsx)(c.a,{item:!0,children:Object(i.jsx)(S,{width:48,height:48,name:e.weather_state_abbr})}),Object(i.jsx)(c.a,{item:!0,children:Object(i.jsx)(M,{min:e.min_temp,max:e.max_temp})}),Object(i.jsx)(c.a,{item:!0,children:Object(i.jsx)(k,{speed:e.wind_speed,direction:e.wind_direction_compass})})]})})},G=Object(a.memo)(E);G.displayName="DailyWeather";var J=G,R=Object(z.a)((function(t){return Object(Y.a)({forecastGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:t.spacing(2)}})}),{classNamePrefix:"WeatherForecasts"}),q=function(t){var e=t.forecasts,n=t.tz,a=R();return Object(i.jsx)(c.a,{container:!0,justify:"flex-start",className:a.forecastGrid,children:e.map((function(t){return Object(i.jsx)(c.a,{item:!0,children:Object(i.jsx)(J,{weather:t,tz:n})},t.id)}))})},K=Object(a.memo)(q);K.displayName="WeatherForecasts";var Q=K,V=Object(z.a)((function(t){return Object(Y.a)({root:{position:"relative"},loadingPage:{height:"calc(100vh - 64px)"},forecastSection:{marginTop:t.spacing(4)}})}),{classNamePrefix:"WeatherCity"}),X=function(t){var e=t.data,n=V(),a=e.consolidated_weather[0],o=e.consolidated_weather.slice(1);return Object(i.jsxs)(r.a,{"data-testid":"CityWeather",className:n.root,children:[Object(i.jsx)(A,{title:e.title,date:e.time,weather:a}),Object(i.jsxs)(c.a,{container:!0,justify:"space-around",className:n.forecastSection,children:[Object(i.jsx)(c.a,{item:!0,xs:"auto",children:Object(i.jsx)(r.a,{textAlign:"center",children:Object(i.jsx)(s.a,{variant:"h5",component:"h5",gutterBottom:!0,children:"The next 5 days forecast"})})}),Object(i.jsx)(c.a,{item:!0,xs:!0})]}),Object(i.jsx)(Q,{forecasts:o,tz:e.timezone})]})},tt=Object(a.memo)(X);tt.displayName="CityWeather";e.a=tt},220:function(t,e,n){t.exports=function(){"use strict";return function(t,e,n){var i=e.prototype;n.utc=function(t){return new e({date:t,utc:!0,args:arguments})},i.utc=function(t){var e=n(this.toDate(),{locale:this.$L,utc:!0});return t?e.add(this.utcOffset(),"minute"):e},i.local=function(){return n(this.toDate(),{locale:this.$L,utc:!1})};var a=i.parse;i.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var r=i.init;i.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else r.call(this)};var c=i.utcOffset;i.utcOffset=function(t,e){var n=this.$utils().u;if(n(t))return this.$u?0:n(this.$offset)?c.call(this):this.$offset;var i=Math.abs(t)<=16?60*t:t,a=this;if(e)return a.$offset=i,a.$u=0===t,a;if(0!==t){var r=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(i+r,"minute")).$offset=i,a.$x.$localOffset=r}else a=this.utc();return a};var s=i.format;i.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return s.call(this,e)},i.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},i.isUTC=function(){return!!this.$u},i.toISOString=function(){return this.toDate().toISOString()},i.toString=function(){return this.toDate().toUTCString()};var o=i.toDate;i.toDate=function(t){return"s"===t&&this.$offset?n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():o.call(this)};var u=i.diff;i.diff=function(t,e,i){if(t&&this.$u===t.$u)return u.call(this,t,e,i);var a=this.local(),r=n(t).local();return u.call(a,r,e,i)}}}()},221:function(t,e,n){t.exports=function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(n,i,a){var r,c=a().utcOffset(),s=function(t,n,i){void 0===i&&(i={});var a=new Date(t);return function(t,n){void 0===n&&(n={});var i=n.timeZoneName||"short",a=t+"|"+i,r=e[a];return r||(r=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),e[a]=r),r}(n,i).formatToParts(a)},o=function(e,n){for(var i=s(e,n),r=[],c=0;c<i.length;c+=1){var o=i[c],u=o.type,f=o.value,d=t[u];d>=0&&(r[d]=parseInt(f,10))}var l=r[3],m=24===l?0:l,h=r[0]+"-"+r[1]+"-"+r[2]+" "+m+":"+r[4]+":"+r[5]+":000",x=+e;return(a.utc(h).valueOf()-(x-=x%1e3))/6e4},u=i.prototype;u.tz=function(t,e){void 0===t&&(t=r);var n=this.utcOffset(),i=this.toDate().toLocaleString("en-US",{timeZone:t}),s=Math.round((this.toDate()-new Date(i))/1e3/60),o=a(i).$set("millisecond",this.$ms).utcOffset(c-s,!0);if(e){var u=o.utcOffset();o=o.add(n-u,"minute")}return o.$x.$timezone=t,o},u.offsetName=function(t){var e=this.$x.$timezone||a.tz.guess(),n=s(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return n&&n.value};var f=u.startOf;u.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return f.call(this,t,e);var n=a(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return f.call(n,t,e).tz(this.$x.$timezone,!0)},a.tz=function(t,e,n){var i=n&&e,c=n||e||r,s=o(+a(),c);if("string"!=typeof t)return a(t).tz(c);var u=function(t,e,n){var i=t-60*e*1e3,a=o(i,n);if(e===a)return[i,e];var r=o(i-=60*(a-e)*1e3,n);return a===r?[i,a]:[t-60*Math.min(a,r)*1e3,Math.max(a,r)]}(a.utc(t,i).valueOf(),s,c),f=u[0],d=u[1],l=a(f).utcOffset(d);return l.$x.$timezone=c,l},a.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},a.tz.setDefault=function(t){r=t}}}()},222:function(t,e,n){t.exports=function(){"use strict";return function(t,e,n){e.prototype.isToday=function(){var t=n();return this.format("YYYY-MM-DD")===t.format("YYYY-MM-DD")}}}()},223:function(t,e,n){t.exports=function(){"use strict";return function(t,e,n){e.prototype.isTomorrow=function(){var t=n().add(1,"day");return this.format("YYYY-MM-DD")===t.format("YYYY-MM-DD")}}}()},224:function(t,e,n){"use strict";var i=n(7),a=n(2),r=n(0),c=(n(15),n(11)),s=n(22),o=[0,1,2,3,4,5,6,7,8,9,10],u=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(t);return"".concat(n/e).concat(String(t).replace(String(n),"")||"px")}var d=r.forwardRef((function(t,e){var n=t.alignContent,s=void 0===n?"stretch":n,o=t.alignItems,u=void 0===o?"stretch":o,f=t.classes,d=t.className,l=t.component,m=void 0===l?"div":l,h=t.container,x=void 0!==h&&h,j=t.direction,g=void 0===j?"row":j,p=t.item,b=void 0!==p&&p,v=t.justify,O=void 0===v?"flex-start":v,w=t.lg,y=void 0!==w&&w,$=t.md,D=void 0!==$&&$,S=t.sm,W=void 0!==S&&S,C=t.spacing,M=void 0===C?0:C,Y=t.wrap,z=void 0===Y?"wrap":Y,N=t.xl,T=void 0!==N&&N,_=t.xs,I=void 0!==_&&_,k=t.zeroMinWidth,U=void 0!==k&&k,F=Object(i.a)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),L=Object(c.a)(f.root,d,x&&[f.container,0!==M&&f["spacing-xs-".concat(String(M))]],b&&f.item,U&&f.zeroMinWidth,"row"!==g&&f["direction-xs-".concat(String(g))],"wrap"!==z&&f["wrap-xs-".concat(String(z))],"stretch"!==u&&f["align-items-xs-".concat(String(u))],"stretch"!==s&&f["align-content-xs-".concat(String(s))],"flex-start"!==O&&f["justify-xs-".concat(String(O))],!1!==I&&f["grid-xs-".concat(String(I))],!1!==W&&f["grid-sm-".concat(String(W))],!1!==D&&f["grid-md-".concat(String(D))],!1!==y&&f["grid-lg-".concat(String(y))],!1!==T&&f["grid-xl-".concat(String(T))]);return r.createElement(m,Object(a.a)({className:L,ref:e},F))})),l=Object(s.a)((function(t){return Object(a.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return o.forEach((function(i){var a=t.spacing(i);0!==a&&(n["spacing-".concat(e,"-").concat(i)]={margin:"-".concat(f(a,2)),width:"calc(100% + ".concat(f(a),")"),"& > $item":{padding:f(a,2)}})})),n}(t,"xs"),t.breakpoints.keys.reduce((function(e,n){return function(t,e,n){var i={};u.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var a="".concat(Math.round(t/12*1e8)/1e6,"%");i[e]={flexBasis:a,flexGrow:0,maxWidth:a}}else i[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(a.a)(t,i):t[e.breakpoints.up(n)]=i}(e,t,n),e}),{}))}),{name:"MuiGrid"})(d);e.a=l}}]);
//# sourceMappingURL=0.14e3383b.chunk.js.map