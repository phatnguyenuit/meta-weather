(this["webpackJsonpmeta-weather"]=this["webpackJsonpmeta-weather"]||[]).push([[1],{111:function(e,t,a){"use strict";var n=a(0),r=a(14);t.a=function(){var e=Object(r.i)();return Object(n.useMemo)((function(){var t=new URLSearchParams(e.search);return Object.fromEntries(t.entries())}),[e.search])}},116:function(e,t,a){"use strict";a.d(t,"b",(function(){return h}));var n=a(17),r=a.n(n),c=a(4),i=a(18),o=a(35),s=a(63),u=a(60),d=new(function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this,{baseURL:"https://api.ipify.org"})).detect=function(){return e.requestData({url:"/?format=json",method:"GET"})},e}return a}(a(59).a)),l=a(53),b=a(61),j=Object(b.a)({name:"ip",initialState:{},reducers:{detectIp:function(e){return Object(c.a)(Object(c.a)({},e),{},{loading:!0})},detectSuccess:function(e,t){return Object(c.a)(Object(c.a)({},e),{},{data:t,loading:!1})},detectFailed:function(e,t){return Object(c.a)(Object(c.a)(Object(c.a)({},e),t),{},{data:void 0,loading:!1})}},workers:{detectIp:function(e){var t=e.detectSuccess,a=e.detectFailed;return r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.b)(d.detect);case 2:if(n=e.sent,!Object(l.a)(n)){e.next=8;break}return e.next=6,Object(i.d)(t(n.data));case 6:e.next=10;break;case 8:return e.next=10,Object(i.d)(a(n.data));case 10:case"end":return e.stop()}}),e)}))}}}),h=(t.a=j,j.actions)},117:function(e,t,a){"use strict";a.d(t,"b",(function(){return p}));var n=a(17),r=a.n(n),c=a(4),i=a(18),o=a(35),s=a(63),u=a(60),d=a(38),l=new(function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this,{baseURL:"https://ip-geolocation.whoisxmlapi.com"})).detect=function(t){var a=new URLSearchParams({apiKey:d.b,ipAddress:t});return e.requestData({url:"/api/v1?".concat(a),method:"GET",cacheKey:t})},e}return a}(a(59).a)),b=a(53),j=a(61),h=Object(j.a)({name:"geoLocation",initialState:{},reducers:{detectGeoLocation:function(e,t){return Object(c.a)(Object(c.a)({},e),{},{loading:!0})},detectSuccess:function(e,t){return Object(c.a)(Object(c.a)({},e),{},{data:t,loading:!1})},detectFailed:function(e,t){return Object(c.a)(Object(c.a)(Object(c.a)({},e),t),{},{data:void 0,loading:!1})}},workers:{detectGeoLocation:function(e){var t=e.detectSuccess,a=e.detectFailed;return r.a.mark((function e(n){var c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.payload,e.next=3,Object(i.b)(l.detect,c);case 3:if(o=e.sent,!Object(b.a)(o)){e.next=9;break}return e.next=7,Object(i.d)(t(o.data));case 7:e.next=11;break;case 9:return e.next=11,Object(i.d)(a(o.data));case 11:case"end":return e.stop()}}),e)}))}}}),p=(t.a=h,h.actions)},175:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(0),c=a.n(r),i=a(26),o=a.n(i),s=a(129),u=a(204),d=a(206),l=a(202),b=a(203),j=a(98),h=a(14),p=a(84),f=a(17),O=a.n(f),m=a(34),v=a(37),g=a(131),x=a(18),y=(a(155),function(e){return e&&!!e.saga}),w=function(e){var t=function(e){return Object(v.combineReducers)(Object.fromEntries(Object.entries(e).map((function(e){var t=Object(m.a)(e,2);return[t[0],t[1].reducer]}))))}(e),a=function(e){return Object.fromEntries(Object.entries(e).map((function(e){var t=Object(m.a)(e,2);return[t[0],t[1].initialState]})))}(e),n=function(e){return O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(x.a)(Object.values(e).filter(y).map((function(e){var t=e.saga;return Object(x.c)(t)})));case 2:case"end":return t.stop()}}),t)}))}(e),r=Object(g.a)(),c=(0,v.compose)(Object(v.applyMiddleware)(r)),i=Object(v.createStore)(t,a,c);return r.run(n),i},k=a(116),L=a(117),S=a(97),E=w({ip:k.a,geoLocation:L.a,metaWeather:S.a}),N=a(130),A=a(124),W=a.n(A),R=a(125),C=a.n(R),I=Object(N.a)({palette:{primary:{main:W.a[500]},secondary:{main:C.a.A400}},typography:{caption:{fontSize:"0.8125rem"}}}),P=a(28),z=Object(P.a)({basename:"/meta-weather"}),T=a(4),D={preventDuplicate:!0,anchorOrigin:{vertical:"top",horizontal:"center"}},F=function(){var e=Object(p.b)(),t=e.enqueueSnackbar,a=e.closeSnackbar;return{showToast:Object(r.useCallback)((function(e,a){return t(e,(n={variant:a},Object(T.a)(Object(T.a)({},D),n)));var n}),[t]),hideToast:Object(r.useCallback)((function(e){return a(e)}),[a])}},M=a(58),q=function(){return function(){var e=F().showToast;Object(r.useEffect)((function(){return M.a.addListener(e),function(){return M.a.removeListener(e)}}),[])}(),null},G=Object(r.memo)(q);G.displayName="Toast";var U=G,_=a(73),K=a(207),B=a(199),J=a(200),V=a(201),H=a(208),$=a(126),X=a.n($),Y=a(47),Z=[Object(T.a)(Object(T.a)({},Y.a.dashboard()),{},{component:Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,228))}))}),Object(T.a)(Object(T.a)({},Y.a.dashboard()),{},{childRoutes:[Object(T.a)(Object(T.a)({},Y.a.weatherSearch()),{},{component:Object(r.lazy)((function(){return a.e(4).then(a.bind(null,229))}))}),Object(T.a)(Object(T.a)({},Y.a.weatherCity(":woeid")),{},{component:Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,230))}))})]})],Q=a(43),ee=a(71),te=function e(t,a){t.forEach((function(t){t.childRoutes?e(t.childRoutes,a):a.push(t)}))},ae=function(e){var t=e.routes,a=[];return te(t,a),Object(n.jsx)(r.Suspense,{fallback:Object(n.jsx)(ee.a,{}),children:Object(n.jsxs)(h.d,{children:[a.map((function(e){var t=e.path,a=e.exact,n=void 0===a||a,c=Object(Q.a)(e,["path","exact"]);return Object(r.createElement)(h.b,Object(T.a)(Object(T.a)({},c),{},{key:t,path:t,exact:n}))})),Object(n.jsx)(h.a,{from:"/*",to:"/not-found"})]})})},ne=Object(r.memo)(ae);ne.displayName="Routes";var re=ne,ce=a(111),ie=a(32),oe=a(209),se=a(86),ue=a(197),de=Object(ue.a)((function(e){var t;return Object(oe.a)({root:{position:"relative",margin:e.spacing(2,0),flexGrow:1},title:Object(ie.a)({textDecoration:"none",color:e.palette.common.white,display:"none"},e.breakpoints.up("sm"),{display:"block"}),grow:Object(ie.a)({flexGrow:1},e.breakpoints.down("xs"),{display:"none"}),search:Object(ie.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(se.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(se.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:(t={padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},Object(ie.a)(t,e.breakpoints.up("sm"),{width:"8em","&:focus":{width:"14em"}}),Object(ie.a)(t,e.breakpoints.down("xs"),{width:"100%"}),t)})}),{classNamePrefix:"WeatherApp"}),le=function(){var e=c.a.createRef(),t=de(),a=Object(h.h)(),i=Object(ce.a)(),o=Object(r.useCallback)((function(t){t.preventDefault();var n=Y.a.weatherSearch({query:e.current.value}).path;a.push(n)}),[a,e]);return Object(r.useEffect)((function(){e.current&&!a.location.pathname.includes("search")&&(e.current.value="")}),[a.location.pathname,e]),Object(n.jsxs)(K.a,{"data-testid":"WeatherApp",className:t.root,children:[Object(n.jsx)(B.a,{position:"fixed",children:Object(n.jsxs)(J.a,{children:[Object(n.jsx)(_.a,{className:t.title,to:Object(h.f)(Y.a.dashboard().path),children:Object(n.jsx)(V.a,{variant:"h6",noWrap:!0,children:"Meta Weather"})}),Object(n.jsx)("div",{className:t.grow}),Object(n.jsx)("div",{className:t.search,children:Object(n.jsxs)("form",{"data-testid":"searchForm",onSubmit:o,children:[Object(n.jsx)("div",{className:t.searchIcon,children:Object(n.jsx)(X.a,{})}),Object(n.jsx)(H.a,{autoComplete:"off",placeholder:"Search city\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search","data-testid":"searchInput"},name:"query",defaultValue:i.query,inputRef:e})]})})]})}),Object(n.jsx)(re,{routes:Z})]})},be=Object(r.memo)(le);be.displayName="WeatherApp";var je=be,he=Object(ue.a)((function(e){return Object(oe.a)({root:{padding:e.spacing(8,3,3)}})}),{classNamePrefix:"App"}),pe=Object(r.lazy)((function(){return a.e(6).then(a.bind(null,226))})),fe=function(){var e=he();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(l.a,{theme:I,children:Object(n.jsx)(p.a,{maxSnack:3,children:Object(n.jsxs)(j.a,{store:E,children:[Object(n.jsx)(b.a,{}),Object(n.jsx)(U,{}),Object(n.jsx)(h.c,{history:z,children:Object(n.jsx)(r.Suspense,{fallback:Object(n.jsx)(ee.a,{}),children:Object(n.jsxs)(h.d,{children:[Object(n.jsx)(h.b,{path:"/weathers",children:Object(n.jsx)(je,{})}),Object(n.jsx)(h.a,{from:"/",to:"/weathers",exact:!0}),Object(n.jsx)(h.b,{component:pe})]})})})]})})})})},Oe=a(38),me=function(e){e&&e instanceof Function&&a.e(8).then(a.bind(null,227)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},ve=a(94);a(175);u.a({dsn:Oe.g,autoSessionTracking:!0,release:"".concat(ve.name,"-").concat(ve.version),integrations:[new s.a.BrowserTracing],tracesSampleRate:.2}),o.a.render(Object(n.jsx)(d.a,{fallback:"An error occurs",showDialog:!0,children:Object(n.jsx)(fe,{})}),document.getElementById("root")),me()},38:function(e,t,a){"use strict";var n,r,c;a.d(t,"e",(function(){return i})),a.d(t,"f",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"h",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return l})),a.d(t,"d",(function(){return b})),a.d(t,"g",(function(){return j}));var i=3e4,o="Network Timeout",s="ddd D MMM",u="Asia/Ho_Chi_Minh",d="Invalid location ID",l=null!==(n="at_wjtTdBSIrjLLhxRE8JwXdk47jDMVC")?n:"",b=null!==(r="https://meta-weather-proxy.herokuapp.com/meta-weather")?r:"",j=null!==(c="https://511a8341b6ab4133a15c9739387e516a@o496727.ingest.sentry.io/5603971")?c:""},47:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n,r,c,i,o,s=a(34),u=a(4),d=a(43),l=(n=/[\s_-]|(?=[A-Z0-9])/,r="-",c=function(e){return e.toLowerCase()},function(e){return e.split(n).map(c).join(r)}),b=(i="weathers",o={dashboard:{title:"Dashboard",path:""},weatherSearch:{title:"Weather Search",path:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object.fromEntries(Object.entries(t).filter((function(e){var t=Object(s.a)(e,2)[1];return void 0!==t&&null!==t&&""!==t})).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return[a,String(n)]}))),n=new URLSearchParams(a).toString();return n?"".concat(e,"?").concat(n):e}("search",e)}},weatherCity:{title:"Weather City",path:function(e){return"".concat(e)}}},Object.fromEntries(Object.entries(o).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1],r=n.title,c=n.path,o=Object(d.a)(n,["title","path"]);return[a,Object.assign((function(){var e;switch(typeof c){case"function":e=c.apply(void 0,arguments);break;case"string":e=c;break;default:e=l(a)}return Object(u.a)(Object(u.a)({},o),{},{title:r,path:"/".concat(i,"/").concat(e)})}),n)]}))))},53:function(e,t,a){"use strict";function n(e){return"success"===e.kind}a.d(t,"a",(function(){return n}))},58:function(e,t,a){"use strict";var n=a(35),r=a(81),c=function(){function e(){Object(n.a)(this,e),this.listeners=[]}return Object(r.a)(e,[{key:"addListener",value:function(e){this.listeners.push(e)}},{key:"raiseEvent",value:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];this.listeners.forEach((function(e){return null===e||void 0===e?void 0:e.apply(void 0,t)}))}},{key:"removeListener",value:function(e){var t=this.listeners.findIndex((function(t){return t===e}));t>-1&&this.listeners.splice(t,1)}}]),e}(),i=new(function(){function e(){Object(n.a)(this,e),this.updateEventListener=new c}return Object(r.a)(e,[{key:"addListener",value:function(e){this.updateEventListener.addListener(e)}},{key:"removeListener",value:function(e){this.updateEventListener.removeListener(e)}},{key:"notify",value:function(e,t){this.updateEventListener.raiseEvent(e,t)}}]),e}());t.a=i},59:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(17),r=a.n(n),c=a(4),i=a(43),o=a(122),s=a(35),u=a(123),d=a.n(u),l=a(38),b=a(58),j=function(e){var t,a,n;return{code:(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status)||0,message:(null===(a=e.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)||(null===e||void 0===e?void 0:e.message)||"Unknown error"}},h=function e(t){var a=this;Object(s.a)(this,e),this.instance=void 0,this.cachedResponses={},this.requestData=function(){var e=Object(o.a)(r.a.mark((function e(t,n){var o,s,u,d,h,p,f,O,m,v,g,x,y,w,k,L,S,E,N;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.cacheKey,s=t.shouldNotifyError,u=void 0===s||s,d=t.shouldNotifySuccess,h=void 0!==d&&d,p=t.timeout,f=void 0===p?l.e:p,O=t.timeoutErrorMessage,m=void 0===O?l.f:O,v=Object(i.a)(t,["cacheKey","shouldNotifyError","shouldNotifySuccess","timeout","timeoutErrorMessage"]),!o){e.next=5;break}if(!(g=a.cachedResponses[o])){e.next=5;break}return e.abrupt("return",g);case 5:return e.prev=5,e.next=8,a.instance.request(Object(c.a)({timeout:f,timeoutErrorMessage:m},v));case 8:if(k=e.sent,x=k.status,w=k.data,!x.toString().match(/^2\d{2,5}/)){e.next=25;break}if(L=k.data,!n){e.next=19;break}return e.next=16,n(L);case 16:e.t0=e.sent,e.next=20;break;case 19:e.t0=L;case 20:return S=e.t0,h&&b.a.notify("Success!","success"),E={kind:"success",data:S},o&&(a.cachedResponses[o]=E),e.abrupt("return",E);case 25:e.next=34;break;case 27:e.prev=27,e.t1=e.catch(5),N=j(e.t1),x=N.code,y=N.message,w={code:x,message:y},u&&b.a.notify(y,"error");case 34:return e.abrupt("return",{kind:"failed",data:w});case 35:case"end":return e.stop()}}),e,null,[[5,27]])})));return function(t,a){return e.apply(this,arguments)}}(),this.instance=d.a.create(t)}},61:function(e,t,a){"use strict";var n=a(17),r=a.n(n),c=a(34),i=a(18),o=function(e,t){return"".concat(e,"/").concat(t)},s=function(e){var t=e.name,a=e.initialState,n=e.reducers,s=e.workers,u=void 0===s?{}:s,d=e.extraReducer,l=Object.fromEntries(Object.keys(n).map((function(e){var a=o(t,e);return[e,Object.assign((function(e){return{type:a,payload:e}}),{type:a})]}))),b=Object.fromEntries(Object.entries(n).map((function(e){var a=Object(c.a)(e,2),n=a[0],r=a[1];return[o(t,n),r]})));return{name:t,initialState:a,actions:l,reducer:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments.length>1?arguments[1]:void 0,r=n.type,c=n.payload,i=b[r],o=i?i(t,c):t;return null!==(e=null===d||void 0===d?void 0:d(o,n))&&void 0!==e?e:o},saga:r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.a)(Object.entries(u).filter((function(e){var t=Object(c.a)(e,2)[1];return Boolean(t)})).map((function(e){var a=Object(c.a)(e,2),n=a[0],s=a[1],u=o(t,n),d=r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.e)(u,s(l));case 2:case"end":return e.stop()}}),e)}));return Object(i.c)(d)})));case 2:case"end":return e.stop()}}),e)}))}},u=function(e){return{name:e.name,initialState:e.initialState,reducer:e.reducer}};t.a=function(e){return function(e){return!!e&&!!e.reducers}(e)?s(e):u(e)}},71:function(e,t,a){"use strict";var n=a(6),r=a(0),c=a(4),i=a(32),o=a(43),s=a(198),u=a(11),d=a(209),l=a(197),b=Object(l.a)((function(e){return Object(d.a)({root:{position:"relative"},childrenWrapper:{"&$loading":{opacity:.5}},progressWrapper:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"none",justifyContent:"center",alignItems:"center",zIndex:e.zIndex.modal,"&$loading":{display:"flex"}},loading:{}})}),{classNamePrefix:"Spin"}),j=function(e){var t=e.children,a=e.className,r=e.color,d=void 0===r?"secondary":r,l=e.loading,j=e.wrapperClassName,h=Object(o.a)(e,["children","className","color","loading","wrapperClassName"]),p=b();return Object(n.jsxs)("div",{"data-testid":"Spin",className:Object(u.a)(p.root,a),children:[Object(n.jsx)("div",{className:Object(u.a)(p.childrenWrapper,j,Object(i.a)({},p.loading,l)),children:t}),Object(n.jsx)("div",{className:Object(u.a)(p.progressWrapper,Object(i.a)({},p.loading,l)),children:Object(n.jsx)(s.a,Object(c.a)(Object(c.a)({},h),{},{color:d}))})]})},h=Object(r.memo)(j);h.displayName="Spin";var p=h,f=a(86),O=Object(l.a)((function(e){return Object(d.a)({root:{position:"fixed",top:0,bottom:0,left:0,right:0,zIndex:1200,backgroundColor:Object(f.c)(e.palette.common.black,.3),transition:e.transitions.create("all")}})}),{classNamePrefix:"LoadingPage"}),m=function(){var e=O();return Object(n.jsx)(p,{"data-testid":"LoadingPage",loading:!0,color:"primary",className:e.root,size:72})},v=Object(r.memo)(m);v.displayName="LoadingPage";t.a=v},94:function(e){e.exports=JSON.parse('{"name":"meta-weather","version":"0.1.0","private":true,"dependencies":{"@material-ui/core":"^4.11.2","@material-ui/icons":"^4.11.2","@sentry/react":"^6.0.1","@sentry/tracing":"^6.0.1","@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","@types/jest":"^26.0.15","@types/node":"^12.0.0","@types/react":"^17.0.0","@types/react-dom":"^17.0.0","axios":"^0.21.1","clsx":"^1.1.1","dayjs":"^1.10.3","notistack":"^1.0.3","react":"^17.0.1","react-dom":"^17.0.1","react-redux":"^7.2.2","react-router":"^5.2.0","react-router-dom":"^5.2.0","react-scripts":"4.0.1","redux":"^4.0.5","redux-devtools-extension":"^2.13.8","redux-saga":"^1.1.3","typescript":"^4.1.2","web-vitals":"^1.0.1"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","commit":"git-cz","lint:fix":"yarn lint --fix","lint":"eslint src/**/*.{ts,tsx}","release":"release-it","type-check":"tsc --noEmit","predeploy":"yarn build","deploy":"gh-pages -d build","cy:open":"cypress open","cy:run":"cypress run --spec \\"cypress/integration/meta-weather/*\\""},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"engines":{"node":">=10"},"devDependencies":{"@commitlint/cli":"^11.0.0","@commitlint/config-conventional":"^11.0.0","@release-it/conventional-changelog":"^2.0.0","@testing-library/react-hooks":"^5.0.0","@types/react-redux":"^7.1.15","@types/react-router-dom":"^5.1.7","commitizen":"^4.2.2","cypress":"^6.3.0","cypress-browser-permissions":"^1.0.5","cz-conventional-changelog":"3.3.0","eslint-config-prettier":"^6.15.0","eslint-plugin-cypress":"^2.11.2","eslint-plugin-prettier":"^3.2.0","gh-pages":"^3.1.0","husky":"^4.3.8","lint-staged":"^10.2.11","prettier":"^2.0.5","release-it":"^14.2.2"},"lint-staged":{"*.{js,jsx,ts,tsx}":["yarn lint:fix"],"{*.{json,md}}":["prettier --write"]},"husky":{"hooks":{"commit-msg":"commitlint -E HUSKY_GIT_PARAMS","pre-commit":"yarn type-check && lint-staged"}},"jest":{"collectCoverageFrom":["**/*.{ts,tsx}","!**/*.d.ts","!**/node_modules/**","!**/coverage/**","!**/cypress/**","!src/index.tsx","!src/constants/**","!src/routes/index.ts","!src/types","!src/reportWebVitals.ts"],"coverageThreshold":{"global":{"branches":90,"functions":90,"lines":90,"statements":90}}},"config":{"commitizen":{"path":"./node_modules/cz-conventional-changelog"}}}')},97:function(e,t,a){"use strict";a.d(t,"b",(function(){return g}));var n=a(17),r=a.n(n),c=a(4),i=a(18),o=a(32),s=a(35),u=a(63),d=a(60),l=a(110),b=a.n(l),j=a(38),h=a(59),p=b()().format(j.a),f=new(function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this,{baseURL:j.d,headers:{authorization:"fast-nguyen"}})).search=function(t){var a=t.value,n=t.field,r=new URLSearchParams(Object(o.a)({},n,a));return e.requestData({url:"/location/search?".concat(r),method:"GET",cacheKey:"".concat(n,":").concat(a,":").concat(p)})},e.get=function(t){return e.requestData({url:"/location/".concat(t),method:"GET"})},e}return a}(h.a)),O=a(53),m=a(61),v=Object(m.a)({name:"metaWeather",initialState:{weatherAtLocation:{},weatherSearchLocation:{}},reducers:{getWeatherAtLocation:function(e,t){return Object(c.a)(Object(c.a)({},e),{},{weatherAtLocation:Object(c.a)(Object(c.a)({},e.weatherAtLocation),{},{loading:!0,message:void 0})})},resetWeatherSearch:function(e){return Object(c.a)(Object(c.a)({},e),{},{weatherSearchLocation:Object(c.a)(Object(c.a)({},e.weatherSearchLocation),{},{data:void 0})})},resetWeatherAtLocation:function(e){return Object(c.a)(Object(c.a)({},e),{},{weatherAtLocation:Object(c.a)(Object(c.a)({},e.weatherAtLocation),{},{data:void 0})})},getWeatherAtLocationSuccess:function(e,t){return Object(c.a)(Object(c.a)({},e),{},{weatherAtLocation:Object(c.a)(Object(c.a)({},e.weatherAtLocation),{},{data:t,loading:!1,message:void 0})})},getWeatherAtLocationFailed:function(e,t){return Object(c.a)(Object(c.a)({},e),{},{weatherAtLocation:Object(c.a)(Object(c.a)(Object(c.a)({},e.weatherAtLocation),t),{},{data:void 0,loading:!1})})},searchWeatherLocation:function(e,t){return Object(c.a)(Object(c.a)({},e),{},{weatherSearchLocation:Object(c.a)(Object(c.a)({},e.weatherSearchLocation),{},{loading:!0,message:void 0})})},searchWeatherLocationSuccess:function(e,t){return Object(c.a)(Object(c.a)({},e),{},{weatherSearchLocation:Object(c.a)(Object(c.a)({},e.weatherSearchLocation),{},{data:t,loading:!1,message:void 0})})},searchWeatherLocationFailed:function(e,t){return Object(c.a)(Object(c.a)({},e),{},{weatherSearchLocation:Object(c.a)(Object(c.a)(Object(c.a)({},e.weatherSearchLocation),t),{},{data:void 0,loading:!1})})}},workers:{searchWeatherLocation:function(e){var t=e.searchWeatherLocationSuccess,a=e.searchWeatherLocationFailed;return r.a.mark((function e(n){var c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.payload,e.next=3,Object(i.b)(f.search,c);case 3:if(o=e.sent,!Object(O.a)(o)){e.next=9;break}return e.next=7,Object(i.d)(t(o.data));case 7:e.next=11;break;case 9:return e.next=11,Object(i.d)(a(o.data));case 11:case"end":return e.stop()}}),e)}))},getWeatherAtLocation:function(e){var t=e.getWeatherAtLocationSuccess,a=e.getWeatherAtLocationFailed;return r.a.mark((function e(n){var c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.payload,e.next=3,Object(i.b)(f.get,c);case 3:if(o=e.sent,!Object(O.a)(o)){e.next=9;break}return e.next=7,Object(i.d)(t(o.data));case 7:e.next=11;break;case 9:return e.next=11,Object(i.d)(a(o.data));case 11:case"end":return e.stop()}}),e)}))}}}),g=(t.a=v,v.actions)}},[[176,2,3]]]);
//# sourceMappingURL=main.a1f8b151.chunk.js.map