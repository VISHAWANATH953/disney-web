(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(8126)}])},1407:function(e,n,r){"use strict";r.d(n,{O:function(){return t}});var t="/disney-web"},8418:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},c=r(6273),l=r(387),s=r(7190);var u={};function f(e,n,r,t){if(e&&c.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[n+"%"+r+(o?"%"+o:"")]=!0}}var p=function(e){var n,r=!1!==e.prefetch,t=l.useRouter(),i=a.default.useMemo((function(){var n=o(c.resolveHref(t,e.href,!0),2),r=n[0],i=n[1];return{href:r,as:e.as?c.resolveHref(t,e.as):i||r}}),[t,e.href,e.as]),p=i.href,d=i.as,h=e.children,v=e.replace,m=e.shallow,y=e.scroll,g=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var j=(n=a.default.Children.only(h))&&"object"===typeof n&&n.ref,x=o(s.useIntersection({rootMargin:"200px"}),2),b=x[0],w=x[1],O=a.default.useCallback((function(e){b(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,b]);a.default.useEffect((function(){var e=w&&r&&c.isLocalURL(p),n="undefined"!==typeof g?g:t&&t.locale,o=u[p+"%"+d+(n?"%"+n:"")];e&&!o&&f(t,p,d,{locale:n})}),[d,p,w,g,r,t]);var S={ref:O,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,i,a,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==a&&t.indexOf("#")>=0&&(a=!1),n[o?"replace":"push"](r,t,{shallow:i,locale:l,scroll:a}))}(e,t,p,d,v,m,y,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c.isLocalURL(p)&&f(t,p,d,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof g?g:t&&t.locale,_=t&&t.isLocaleDomain&&c.getDomainLocale(d,E,t&&t.locales,t&&t.domainLocales);S.href=_||c.addBasePath(c.addLocale(d,E,t&&t.defaultLocale))}return a.default.cloneElement(n,S)};n.default=p},7190:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,r=e.rootMargin,t=e.disabled||!c,s=i.useRef(),u=o(i.useState(!1),2),f=u[0],p=u[1],d=o(i.useState(n?n.current:null),2),h=d[0],v=d[1],m=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=l.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return l.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,i=t.observer,a=t.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),l.delete(o))}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:r}))}),[t,h,r,f]);return i.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),i.useEffect((function(){n&&v(n.current)}),[n]),[m,f]};var i=r(7294),a=r(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map},8126:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return v}});var t=r(5893),o=(r(4831),r(1311)),i=r.n(o),a=r(1664),c=function(e){var n=e.prefix,r=e.imgSrc,o=e.span,i=e.alt;return(0,t.jsx)(a.default,{href:"/Main",children:(0,t.jsxs)("a",{children:[(0,t.jsx)("img",{src:n+r,alt:i}),o&&(0,t.jsx)("span",{children:o})]})})},l=r(1407),s=function(){return(0,t.jsxs)("nav",{className:i().nav,children:[(0,t.jsx)("header",{children:(0,t.jsx)(c,{prefix:l.O,imgSrc:"/images/logo.svg",alt:"logo"})}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(c,{prefix:l.O,imgSrc:"/images/home-icon.svg",span:"HOME",alt:"home"})}),(0,t.jsx)("li",{children:(0,t.jsx)(c,{prefix:l.O,imgSrc:"/images/search-icon.svg",span:"SEARCH",alt:"search"})}),(0,t.jsx)("li",{children:(0,t.jsx)(c,{prefix:l.O,imgSrc:"/images/watchlist-icon.svg",alt:"plus",span:"WATCHLIST"})}),(0,t.jsx)("li",{children:(0,t.jsx)(c,{prefix:l.O,imgSrc:"/images/original-icon.svg",span:"ORIGINALS",alt:"start"})}),(0,t.jsx)("li",{children:(0,t.jsx)(c,{prefix:l.O,imgSrc:"/images/movie-icon.svg",span:"MOVIES",alt:"movies"})}),(0,t.jsx)("li",{children:(0,t.jsx)(c,{prefix:l.O,imgSrc:"/images/series-icon.svg",span:"SERIES",alt:"series"})})]}),(0,t.jsx)("div",{className:i().user,children:(0,t.jsx)("img",{src:"https://htmlcolors.com/img/change-user.png",alt:"User"})})]})},u=r(9008),f=function(){return(0,t.jsxs)(u.default,{children:[(0,t.jsx)("title",{children:"disney clone"}),(0,t.jsx)("meta",{name:"description",content:"This was disney clone project by vishwanath kokare"}),(0,t.jsx)("link",{rel:"icon",href:l.O+"/favicon.ico"}),(0,t.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,minimum-scale=1,user-scalable=no"}),(0,t.jsx)("meta",{name:"keywords",content:"Keywords"}),(0,t.jsx)("link",{rel:"apple-touch-icon",href:"/apple-icon.png"}),(0,t.jsx)("meta",{name:"theme-color",content:"#010E7D"})]})},p=function(e){var n=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f,{}),(0,t.jsx)(s,{}),n]})};function d(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function h(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){d(e,n,r[n])}))}return e}var v=function(e){var n=e.Component,r=e.pageProps;return(0,t.jsx)(p,{children:(0,t.jsx)(n,h({},r))})}},1311:function(e){e.exports={nav:"navbar_nav__10eot",user:"navbar_user__RTYBc"}},4831:function(){},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6363),n(387)}));var r=e.O();_N_E=r}]);