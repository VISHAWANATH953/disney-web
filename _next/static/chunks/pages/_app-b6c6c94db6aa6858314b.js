(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888,179],{6071:function(e,n,r){"use strict";var t=r(3848),s=r(9448);n.default=void 0;var i=s(r(7294)),c=r(1689),a=r(2441),o=r(5749),l={};function u(e,n,r,t){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,r,t).catch((function(e){0}));var s=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(s?"%"+s:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,r=(0,a.useRouter)(),s=r&&r.pathname||"/",f=i.default.useMemo((function(){var n=(0,c.resolveHref)(s,e.href,!0),r=t(n,2),i=r[0],a=r[1];return{href:i,as:e.as?(0,c.resolveHref)(s,e.as):a||i}}),[s,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,j=e.shallow,g=e.scroll,x=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var m=i.Children.only(p),b=m&&"object"===typeof m&&m.ref,y=(0,o.useIntersection)({rootMargin:"200px"}),O=t(y,2),E=O[0],_=O[1],w=i.default.useCallback((function(e){E(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,E]);(0,i.useEffect)((function(){var e=_&&n&&(0,c.isLocalURL)(d),t="undefined"!==typeof x?x:r&&r.locale,s=l[d+"%"+h+(t?"%"+t:"")];e&&!s&&u(r,d,h,{locale:t})}),[h,d,_,x,n,r]);var M={ref:w,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,r,t,s,i,a,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==a&&(a=t.indexOf("#")<0),n[s?"replace":"push"](r,t,{shallow:i,locale:o,scroll:a}))}(e,r,d,h,v,j,g,x)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),u(r,d,h,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var L="undefined"!==typeof x?x:r&&r.locale,P=r&&r.isLocaleDomain&&(0,c.getDomainLocale)(h,L,r&&r.locales,r&&r.domainLocales);M.href=P||(0,c.addBasePath)((0,c.addLocale)(h,L,r&&r.defaultLocale))}return i.default.cloneElement(m,M)};n.default=f},5749:function(e,n,r){"use strict";var t=r(3848);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!c,o=(0,s.useRef)(),l=(0,s.useState)(!1),u=t(l,2),f=u[0],d=u[1],h=(0,s.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),r||f||e&&e.tagName&&(o.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=a.get(n);if(r)return r;var t=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return a.set(n,r={id:n,observer:s,elements:t}),r}(r),s=t.id,i=t.observer,c=t.elements;return c.set(e,n),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),a.delete(s))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return(0,s.useEffect)((function(){if(!c&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[h,f]};var s=r(7294),i=r(8391),c="undefined"!==typeof IntersectionObserver;var a=new Map},5562:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return h}});var t=r(6265),s=r(5893),i=(r(6677),r(2272)),c=r.n(i),a=r(1664),o="/disney-web",l=function(){return(0,s.jsxs)("nav",{className:c().nav,children:[(0,s.jsx)("header",{children:(0,s.jsx)("img",{src:o+"/images/logo.svg",alt:"Disney"})}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"/Main",children:(0,s.jsxs)("a",{children:[(0,s.jsx)("img",{src:o+"/images/home-icon.svg",alt:"home"}),(0,s.jsx)("span",{children:"HOME"})]})})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"/Main",children:(0,s.jsxs)("a",{children:[(0,s.jsx)("img",{src:o+"/images/search-icon.svg",alt:"search"}),(0,s.jsx)("span",{children:"SEARCH"})]})})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"/Main",children:(0,s.jsxs)("a",{children:[(0,s.jsx)("img",{src:o+"/images/watchlist-icon.svg",alt:"plus"})," ",(0,s.jsx)("span",{children:"WATCHLIST"})]})})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"/Main",children:(0,s.jsxs)("a",{children:[(0,s.jsx)("img",{src:o+"/images/original-icon.svg",alt:"start"}),(0,s.jsx)("span",{children:"ORIGINALS"})]})})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"/Main",children:(0,s.jsxs)("a",{children:[(0,s.jsx)("img",{src:o+"/images/movie-icon.svg",alt:"movies"}),(0,s.jsx)("span",{children:"MOVIES"})]})})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"/Main",children:(0,s.jsxs)("a",{children:[(0,s.jsx)("img",{src:o+"/images/series-icon.svg",alt:"series"}),(0,s.jsx)("span",{children:"SERIES"})]})})})]}),(0,s.jsx)("div",{className:c().user,children:(0,s.jsx)("img",{src:o+"https://htmlcolors.com/img/change-user.png",alt:"User"})})]})},u=function(e){var n=e.children;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{}),n]})};function f(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?f(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var h=function(e){var n=e.Component,r=e.pageProps;return(0,s.jsx)(u,{children:(0,s.jsx)(n,d({},r))})}},6363:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5562)}])},2272:function(e){e.exports={nav:"navbar_nav__1KYrW",user:"navbar_user__37re7"}},6677:function(){},1664:function(e,n,r){e.exports=r(6071)},6265:function(e,n,r){"use strict";function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}r.d(n,{Z:function(){return t}})},4453:function(){}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,597],(function(){return n(6363),n(2441)}));var r=e.O();_N_E=r}]);