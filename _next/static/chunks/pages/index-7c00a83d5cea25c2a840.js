(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(e,n,t){"use strict";var r=t(3848),o=t(9448);n.default=void 0;var a=o(t(7294)),i=t(1689),c=t(2441),s=t(5749),l={};function u(e,n,t,r){if(e&&(0,i.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,c.useRouter)(),o=t&&t.pathname||"/",f=a.default.useMemo((function(){var n=(0,i.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],c=t[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,g=e.shallow,m=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var _=a.Children.only(v),b=_&&"object"===typeof _&&_.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),E=r(x,2),w=E[0],L=E[1],k=a.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);(0,a.useEffect)((function(){var e=L&&n&&(0,i.isLocalURL)(d),r="undefined"!==typeof y?y:t&&t.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&u(t,d,p,{locale:r})}),[p,d,L,y,n,t]);var M={ref:k,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:s,scroll:c}))}(e,t,d,p,h,g,m,y)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var j="undefined"!==typeof y?y:t&&t.locale,C=t&&t.isLocaleDomain&&(0,i.getDomainLocale)(p,j,t&&t.locales,t&&t.domainLocales);M.href=C||(0,i.addBasePath)((0,i.addLocale)(p,j,t&&t.defaultLocale))}return a.default.cloneElement(_,M)};n.default=f},5749:function(e,n,t){"use strict";var r=t(3848);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,s=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t(7294),a=t(8391),i="undefined"!==typeof IntersectionObserver;var c=new Map},5722:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(8584),a=t.n(o),i=t(1664),c="/disney-web";n.default=function(){return(0,r.jsxs)("div",{className:a().index,children:[(0,r.jsx)("img",{className:a().inimg,src:c+"/images/login-background.jpg",alt:"login background"}),(0,r.jsxs)("div",{className:a().content,children:[(0,r.jsx)("img",{src:c+"/images/cta-logo-one.svg",alt:"disney hulu espn+"}),(0,r.jsx)(i.default,{href:"/Main",children:"GET ALL THERE"}),(0,r.jsx)("p",{children:"Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1."}),(0,r.jsx)("img",{src:c+"/images/cta-logo-two.png",alt:"disney pixar marvel starwars national geopgraphic"})]})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5722)}])},8584:function(e){e.exports={index:"index_index__1kZi1",inimg:"index_inimg__1adKZ",content:"index_content__3hV7i"}},1664:function(e,n,t){e.exports=t(6071)}},function(e){e.O(0,[774,351],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);