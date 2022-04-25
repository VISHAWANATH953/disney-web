"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{9894:function(f,c,a){var g=a(3227),h=a(8361),i=a(5971),j=a(2715),k=a(1193);Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var e=m(a(7294)),l=m(a(6505));function m(a){return a&&a.__esModule?a:{"default":a}}var n={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function d(b){var a=b.res,c=b.err;return{statusCode:a&&a.statusCode?a.statusCode:c?c.statusCode:404}}var b=function(b){i(a,b);var c,d,f=(c=a,d=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}(),function(){var a,b=k(c);if(d){var e=k(this).constructor;a=Reflect.construct(b,arguments,e)}else a=b.apply(this,arguments);return j(this,a)});function a(){return g(this,a),f.apply(this,arguments)}return h(a,[{key:"render",value:function(){var a=this.props.statusCode,b=this.props.title||n[a]||"An unexpected error has occurred";return e.default.createElement("div",{style:o.error},e.default.createElement(l.default,null,e.default.createElement("title",null,a?"".concat(a,": ").concat(b):"Application error: a client-side exception has occurred")),e.default.createElement("div",null,e.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),a?e.default.createElement("h1",{style:o.h1},a):null,e.default.createElement("div",{style:o.desc},e.default.createElement("h2",{style:o.h2},this.props.title||a?b:e.default.createElement(e.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),a}(e.default.Component);c.default=b,b.displayName="ErrorPage",b.getInitialProps=d,b.origGetInitialProps=d;var o={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},7285:function(e,b,c){Object.defineProperty(b,"__esModule",{value:!0}),b.AmpStateContext=void 0;var a,d=((a=c(7294))&&a.__esModule?a:{"default":a}).default.createContext({});b.AmpStateContext=d},9546:function(d,b,c){Object.defineProperty(b,"__esModule",{value:!0}),b.isInAmpMode=g,b.useAmp=function(){return g(e.default.useContext(f.AmpStateContext))};var a,e=(a=c(7294))&&a.__esModule?a:{"default":a},f=c(7285);function g(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.ampFirst,c=a.hybrid,d=a.hasQuery;return void 0!==b&&b|| void 0!==c&&c&& void 0!==d&&d}},6505:function(d,b,a){var c,e=a(930);function f(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}Object.defineProperty(b,"__esModule",{value:!0}),b.defaultHead=l,b.default=void 0;var g=function(a){if(a&&a.__esModule)return a;var c={};if(null!=a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,b):{};d.get||d.set?Object.defineProperty(c,b,d):c[b]=a[b]}}return c.default=a,c}(a(7294)),h=(c=a(148))&&c.__esModule?c:{"default":c},i=a(7285),j=a(523),k=a(9546);function l(){var b=arguments.length>0&& void 0!==arguments[0]&&arguments[0],a=[g.default.createElement("meta",{charSet:"utf-8"})];return b||a.push(g.default.createElement("meta",{name:"viewport",content:"width=device-width"})),a}function m(b,a){return"string"==typeof a||"number"==typeof a?b:a.type===g.default.Fragment?b.concat(g.default.Children.toArray(a.props.children).reduce(function(b,a){return"string"==typeof a||"number"==typeof a?b:b.concat(a)},[])):b.concat(a)}a(7206);var n=["name","httpEquiv","charSet","itemProp"];function o(a,b){var c,d,h,i;return a.reduce(function(a,b){var c=g.default.Children.toArray(b.props.children);return a.concat(c)},[]).reduce(m,[]).reverse().concat(l(b.inAmpMode)).filter((c=new Set,d=new Set,h=new Set,i={},function(a){var e=!0,j=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){j=!0;var k=a.key.slice(a.key.indexOf("$")+1);c.has(k)?e=!1:c.add(k)}switch(a.type){case"title":case"base":d.has(a.type)?e=!1:d.add(a.type);break;case"meta":for(var f=0,m=n.length;f<m;f++){var b=n[f];if(a.props.hasOwnProperty(b))if("charSet"===b)h.has(b)?e=!1:h.add(b);else{var l=a.props[b],g=i[b]||new Set;("name"!==b||!j)&&g.has(l)?e=!1:(g.add(l),i[b]=g)}}break}return e})).reverse().map(function(a,d){var h=a.key||d;if(!b.inAmpMode&&"link"===a.type&&a.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(b){return a.props.href.startsWith(b)})){var c=function(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?f(Object(b),!0).forEach(function(a){e(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):f(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}({},a.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,g.default.cloneElement(a,c)}return g.default.cloneElement(a,{key:h})})}b.default=function(a){var b=a.children,c=g.useContext(i.AmpStateContext),d=g.useContext(j.HeadManagerContext);return g.default.createElement(h.default,{reduceComponentsToState:o,headManager:d,inAmpMode:k.isInAmpMode(c)},b)}},148:function(d,b,a){var e=a(7980),f=a(3227),g=a(8361),h=(a(2191),a(5971)),i=a(2715),j=a(1193);Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=function(b){h(a,b);var c,d,k=(c=a,d=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}(),function(){var a,b=j(c);if(d){var e=j(this).constructor;a=Reflect.construct(b,arguments,e)}else a=b.apply(this,arguments);return i(this,a)});function a(c){var b;return f(this,a),(b=k.call(this,c)).emitChange=function(){b._hasHeadManager&&b.props.headManager.updateHead(b.props.reduceComponentsToState(e(b.props.headManager.mountedInstances),b.props))},b._hasHeadManager=b.props.headManager&&b.props.headManager.mountedInstances,b}return g(a,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),a}(function(a){if(a&&a.__esModule)return a;var c={};if(null!=a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,b):{};d.get||d.set?Object.defineProperty(c,b,d):c[b]=a[b]}}return c.default=a,c}(a(7294)).Component);b.default=c}}])