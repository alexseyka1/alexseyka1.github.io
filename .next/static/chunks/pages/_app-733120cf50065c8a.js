(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(8319)}])},5597:function(e,n,r){"use strict";r.d(n,{Z:function(){return a}});var t=r(5893);function a(){return(0,t.jsxs)("ul",{className:"list-unstyled",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"fa-solid fa-fw fa-location-dot me-1"}),(0,t.jsx)("a",{className:"text-decoration-none",href:"https://www.google.com/maps/search/?api=1&query=Kyiv,%20Ukraine",target:"_blank",rel:"noreferrer",children:"Kyiv, Ukraine"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"fa-solid fa-fw fa-envelope me-1"}),(0,t.jsx)("a",{className:"text-decoration-none",href:"mailto:alexseyka1@gmail.com",children:"alexseyka1@gmail.com"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"fa-brands fa-fw fa-telegram me-1"}),(0,t.jsx)("a",{className:"text-decoration-none",href:"https://t.me/alexseyka1",target:"_blank",rel:"noreferrer",children:"Telegram"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"fa-brands fa-fw fa-linkedin me-1"}),(0,t.jsx)("a",{className:"text-decoration-none",href:"https://www.linkedin.com/in/alexseyka1",target:"_blank",rel:"noreferrer",children:"Linkedin"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"fa-brands fa-fw fa-github me-1"}),(0,t.jsx)("a",{className:"text-decoration-none",href:"https://github.com/alexseyka1",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})}},1551:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,l=[],s=!0,o=!1;try{for(r=r.call(e);!(s=(t=r.next()).done)&&(l.push(t.value),!n||l.length!==n);s=!0);}catch(i){o=!0,a=i}finally{try{s||null==r.return||r.return()}finally{if(o)throw a}}return l}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l,s=(l=r(7294))&&l.__esModule?l:{default:l},o=r(1003),i=r(880),c=r(9246);var d={};function u(e,n,r,t){if(e&&o.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;d[n+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,t=i.useRouter(),l=s.default.useMemo((function(){var n=a(o.resolveHref(t,e.href,!0),2),r=n[0],l=n[1];return{href:r,as:e.as?o.resolveHref(t,e.as):l||r}}),[t,e.href,e.as]),f=l.href,h=l.as,m=s.default.useRef(f),x=s.default.useRef(h),p=e.children,j=e.replace,b=e.shallow,y=e.scroll,v=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var g=(n=s.default.Children.only(p))&&"object"===typeof n&&n.ref,k=a(c.useIntersection({rootMargin:"200px"}),3),N=k[0],w=k[1],_=k[2],E=s.default.useCallback((function(e){x.current===h&&m.current===f||(_(),x.current=h,m.current=f),N(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[h,g,f,_,N]);s.default.useEffect((function(){var e=w&&r&&o.isLocalURL(f),n="undefined"!==typeof v?v:t&&t.locale,a=d[f+"%"+h+(n?"%"+n:"")];e&&!a&&u(t,f,h,{locale:n})}),[h,f,w,v,r,t]);var O={ref:E,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,l,s,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),n[a?"replace":"push"](r,t,{shallow:l,locale:i,scroll:s}))}(e,t,f,h,j,b,y,v)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),o.isLocalURL(f)&&u(t,f,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var S="undefined"!==typeof v?v:t&&t.locale,C=t&&t.isLocaleDomain&&o.getDomainLocale(h,S,t&&t.locales,t&&t.domainLocales);O.href=C||o.addBasePath(o.addLocale(h,S,t&&t.defaultLocale))}return s.default.cloneElement(n,O)};n.default=f,("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},9246:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,l=[],s=!0,o=!1;try{for(r=r.call(e);!(s=(t=r.next()).done)&&(l.push(t.value),!n||l.length!==n);s=!0);}catch(i){o=!0,a=i}finally{try{s||null==r.return||r.return()}finally{if(o)throw a}}return l}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,r=e.rootMargin,t=e.disabled||!o,d=l.useRef(),u=a(l.useState(!1),2),f=u[0],h=u[1],m=a(l.useState(n?n.current:null),2),x=m[0],p=m[1],j=l.useCallback((function(e){d.current&&(d.current(),d.current=void 0),t||f||e&&e.tagName&&(d.current=function(e,n,r){var t=function(e){var n,r={root:e.root||null,margin:e.rootMargin||""},t=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));t?n=i.get(t):(n=i.get(r),c.push(r));if(n)return n;var a=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var n=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return i.set(r,n={id:r,observer:l,elements:a}),n}(r),a=t.id,l=t.observer,s=t.elements;return s.set(e,n),l.observe(e),function(){if(s.delete(e),l.unobserve(e),0===s.size){l.disconnect(),i.delete(a);var n=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));n>-1&&c.splice(n,1)}}}(e,(function(e){return e&&h(e)}),{root:x,rootMargin:r}))}),[t,x,r,f]),b=l.useCallback((function(){h(!1)}),[]);return l.useEffect((function(){if(!o&&!f){var e=s.requestIdleCallback((function(){return h(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[f]),l.useEffect((function(){n&&p(n.current)}),[n]),[j,f,b]};var l=r(7294),s=r(4686),o="undefined"!==typeof IntersectionObserver;var i=new Map,c=[];("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},8319:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return f}});var t=r(5893),a=r(9008),l=r(1664),s=r.n(l);function o(){return(0,t.jsx)("header",{className:"topbar",children:(0,t.jsx)("nav",{className:"navbar navbar-expand-lg border-bottom",children:(0,t.jsxs)("div",{className:"container-fluid justify-content-end",children:[(0,t.jsx)("label",{htmlFor:"topbar-dropdown-enabled",children:(0,t.jsx)("span",{className:"navbar-toggler collapsed text-reset",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar-top",children:(0,t.jsx)("i",{className:"fa-solid fa-bars-staggered"})})}),(0,t.jsx)("input",{type:"checkbox",id:"topbar-dropdown-enabled"}),(0,t.jsx)("div",{className:"navbar-collapse justify-content-md-center collapse",id:"navbar-top",children:(0,t.jsxs)("ul",{className:"navbar-nav col-12 col-md-auto mb-2 justify-content-center mb-md-0",children:[(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/#",children:(0,t.jsx)("a",{className:"nav-link px-2 link-secondary",children:"Home"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/#contact",children:(0,t.jsx)("a",{className:"nav-link px-2 link-dark",children:"Contact"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/#timeline",children:(0,t.jsx)("a",{className:"nav-link px-2 link-dark",children:"Timeline"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/#projects",children:(0,t.jsx)("a",{className:"nav-link px-2 link-dark",children:"Projects"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/#skills-and-tools",children:(0,t.jsx)("a",{className:"nav-link px-2 link-dark",children:"Skills & tools"})})})]})})]})})})}var i=r(5597);function c(){return(0,t.jsx)("footer",{className:"bg-dark text-light py-5 main-footer",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row flex-row-reverse flex-md-row",children:[(0,t.jsxs)("div",{className:"col-12 col-md",children:[(0,t.jsx)("h5",{children:"Oleksii Haidai"}),(0,t.jsx)(i.Z,{}),(0,t.jsx)("div",{className:"mt-2",children:(0,t.jsxs)("small",{className:"d-block mb-3 text-muted",children:["\xa9 ",(new Date).getFullYear()]})})]}),(0,t.jsxs)("div",{className:"col-6 col-md",children:[(0,t.jsx)("h5",{children:"Sections"}),(0,t.jsxs)("ul",{className:"list-unstyled text-small",children:[(0,t.jsx)("li",{className:"mb-1",children:(0,t.jsx)(s(),{href:"/#",children:(0,t.jsx)("a",{className:"link-secondary text-decoration-none",children:"My photo"})})}),(0,t.jsx)("li",{className:"mb-1",children:(0,t.jsx)(s(),{href:"/#timeline",children:(0,t.jsx)("a",{className:"link-secondary text-decoration-none",children:"Timeline"})})}),(0,t.jsx)("li",{className:"mb-1",children:(0,t.jsx)(s(),{href:"/#projects",children:(0,t.jsx)("a",{className:"link-secondary text-decoration-none",children:"Projects"})})}),(0,t.jsx)("li",{className:"mb-1",children:(0,t.jsx)(s(),{href:"/#skills-and-tools",children:(0,t.jsx)("a",{className:"link-secondary text-decoration-none",children:"Skills & Tools"})})}),(0,t.jsx)("li",{className:"mb-1",children:(0,t.jsx)(s(),{href:"/#contact",children:(0,t.jsx)("a",{className:"link-secondary text-decoration-none",children:"Contact"})})})]})]}),(0,t.jsxs)("div",{className:"col-6 col-md",children:[(0,t.jsx)("h5",{children:"Projects"}),(0,t.jsxs)("ul",{className:"list-unstyled text-small",children:[(0,t.jsx)("li",{className:"mb-1",children:(0,t.jsx)(s(),{href:"/projects/dok",children:(0,t.jsx)("a",{className:"link-secondary text-decoration-none",children:"Dok.ua"})})}),(0,t.jsx)("li",{className:"mb-1",children:(0,t.jsx)(s(),{href:"/projects/solar-service-group",children:(0,t.jsx)("a",{className:"link-secondary text-decoration-none",children:"Solar Service Group"})})}),(0,t.jsx)("li",{className:"mb-1",children:(0,t.jsx)(s(),{href:"/projects/rush-hq",children:(0,t.jsx)("a",{className:"link-secondary text-decoration-none",children:"Rush HQ"})})}),(0,t.jsx)("li",{className:"mb-1",children:(0,t.jsx)(s(),{href:"/projects/enertek",children:(0,t.jsx)("a",{className:"link-secondary text-decoration-none",children:"Enertek"})})}),(0,t.jsx)("li",{className:"mb-1",children:(0,t.jsx)(s(),{href:"/projects/warrpit",children:(0,t.jsx)("a",{className:"link-secondary text-decoration-none",children:"Warrp.it"})})}),(0,t.jsx)("li",{className:"mb-1",children:(0,t.jsx)(s(),{href:"/projects/other-crm",children:(0,t.jsx)("a",{className:"link-secondary text-decoration-none",children:"Other CRM systems"})})})]})]})]})})})}r(2947);function d(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){d(e,n,r[n])}))}return e}var f=function(e){var n=e.Component,r=e.pageProps;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("link",{rel:"icon",type:"image/png",href:"/logo.png"}),(0,t.jsx)("title",{children:"Alexsey Gaidai - Software Engineer"}),(0,t.jsx)("meta",{name:"description",content:"I make amazing complex systems that solve business problems and help it grow, as well as easy to use"}),(0,t.jsx)("meta",{charSet:"UTF-8"}),(0,t.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, user-scalable=no"}),(0,t.jsx)("link",{rel:"icon",type:"image/png",href:"#"})]}),(0,t.jsx)(o,{}),(0,t.jsx)("main",{className:"main-content",children:(0,t.jsx)(n,u({},r))}),(0,t.jsx)(c,{})]})}},2947:function(){},9008:function(e,n,r){e.exports=r(3121)},1664:function(e,n,r){e.exports=r(1551)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(880)}));var r=e.O();_N_E=r}]);