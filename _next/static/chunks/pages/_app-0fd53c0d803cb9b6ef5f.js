(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},1506:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6156:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},9754:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},2205:function(e,t,n){var r=n(9489);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},8585:function(e,t,n){var r=n(8),o=n(1506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},6071:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var a=o(n(7294)),i=n(1689),c=n(2441),s=n(5749),u={};function f(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",l=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=l.href,p=l.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,g=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var b=a.Children.only(h),j=b&&"object"===typeof b&&b.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),O=r(x,2),M=O[0],_=O[1],w=a.default.useCallback((function(e){M(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,M]);(0,a.useEffect)((function(){var e=_&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof g?g:n&&n.locale,o=u[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(n,d,p,{locale:r})}),[p,d,_,g,t,n]);var C={ref:w,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:c}))}(e,n,d,p,v,y,m,g)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),f(n,d,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var P="undefined"!==typeof g?g:n&&n.locale,E=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(p,P,n&&n.locales,n&&n.domainLocales);C.href=E||(0,i.addBasePath)((0,i.addLocale)(p,P,n&&n.defaultLocale))}return a.default.cloneElement(b,C)};t.default=l},5749:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=(0,o.useRef)(),u=(0,o.useState)(!1),f=r(u,2),l=f[0],d=f[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||l||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return(0,o.useEffect)((function(){if(!i&&!l){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[l]),[p,l]};var o=n(7294),a=n(8391),i="undefined"!==typeof IntersectionObserver;var c=new Map},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},4287:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},7947:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(a=n(617))&&a.__esModule?a:{default:a},s=n(3367),u=n(4287),f=n(7845);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=h.length;s<u;s++){var f=h[s];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=o.props[f],d=r[f]||new Set;"name"===f&&i||!d.has(l)?(d.add(l),r[f]=d):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}function y(e){var t=e.children,n=(0,i.useContext)(s.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,f.isInAmpMode)(n)},t)}y.rewind=function(){};var m=y;t.default=m},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),i=(n(1506),n(2205)),c=n(8585),s=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n(7294),l=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},8021:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(6156),o=n(5893),a=(n(6677),n(2272)),i=n.n(a),c=n(1664),s="/disney-web",u=function(){return(0,o.jsxs)("nav",{className:i().nav,children:[(0,o.jsx)("header",{children:(0,o.jsx)(c.default,{href:"/Main",children:(0,o.jsx)("img",{src:s+"/images/logo.svg",alt:"Disney"})})}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(c.default,{href:"/Main",children:(0,o.jsxs)("a",{children:[(0,o.jsx)("img",{src:s+"/images/home-icon.svg",alt:"home"}),(0,o.jsx)("span",{children:"HOME"})]})})}),(0,o.jsx)("li",{children:(0,o.jsx)(c.default,{href:"/Main",children:(0,o.jsxs)("a",{children:[(0,o.jsx)("img",{src:s+"/images/search-icon.svg",alt:"search"}),(0,o.jsx)("span",{children:"SEARCH"})]})})}),(0,o.jsx)("li",{children:(0,o.jsx)(c.default,{href:"/Main",children:(0,o.jsxs)("a",{children:[(0,o.jsx)("img",{src:s+"/images/watchlist-icon.svg",alt:"plus"})," ",(0,o.jsx)("span",{children:"WATCHLIST"})]})})}),(0,o.jsx)("li",{children:(0,o.jsx)(c.default,{href:"/Main",children:(0,o.jsxs)("a",{children:[(0,o.jsx)("img",{src:s+"/images/original-icon.svg",alt:"start"}),(0,o.jsx)("span",{children:"ORIGINALS"})]})})}),(0,o.jsx)("li",{children:(0,o.jsx)(c.default,{href:"/Main",children:(0,o.jsxs)("a",{children:[(0,o.jsx)("img",{src:s+"/images/movie-icon.svg",alt:"movies"}),(0,o.jsx)("span",{children:"MOVIES"})]})})}),(0,o.jsx)("li",{children:(0,o.jsx)(c.default,{href:"/Main",children:(0,o.jsxs)("a",{children:[(0,o.jsx)("img",{src:s+"/images/series-icon.svg",alt:"series"}),(0,o.jsx)("span",{children:"SERIES"})]})})})]}),(0,o.jsx)("div",{className:i().user,children:(0,o.jsx)("img",{src:"https://htmlcolors.com/img/change-user.png",alt:"User"})})]})},f=n(9008),l=function(){return(0,o.jsxs)(f.default,{children:[(0,o.jsx)("title",{children:"Create Next App"}),(0,o.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,o.jsx)("link",{rel:"icon",href:"/disney-web/favicon.ico"})]})},d=function(e){var t=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l,{}),(0,o.jsx)(u,{}),t]})};function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsx)(d,{children:(0,o.jsx)(t,h({},n))})}},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8021)}])},2272:function(e){e.exports={nav:"navbar_nav__1KYrW",user:"navbar_user__37re7"}},6677:function(){},9008:function(e,t,n){e.exports=n(7947)},1664:function(e,t,n){e.exports=n(6071)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,351],(function(){return t(6363),t(2441)}));var n=e.O();_N_E=n}]);