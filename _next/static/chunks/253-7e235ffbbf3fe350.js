(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[253],{3525:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"actionAsyncStorage",{enumerable:!0,get:function(){return n}});let n=(0,r(4001).createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6361:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"actionAsyncStorage",{enumerable:!0,get:function(){return n.actionAsyncStorage}});let n=r(3525);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4001:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return o}});let r=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class n{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}}let u=globalThis.AsyncLocalStorage;function o(){return u?new u:new n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6432:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return i.ReadonlyURLSearchParams},RedirectType:function(){return i.RedirectType},ServerInsertedHTMLContext:function(){return f.ServerInsertedHTMLContext},notFound:function(){return i.notFound},permanentRedirect:function(){return i.permanentRedirect},redirect:function(){return i.redirect},useParams:function(){return p},usePathname:function(){return d},useRouter:function(){return s},useSearchParams:function(){return c},useSelectedLayoutSegment:function(){return b},useSelectedLayoutSegments:function(){return y},useServerInsertedHTML:function(){return f.useServerInsertedHTML}});let n=r(7294),u=r(257),o=r(2608),l=r(1288),a=r(6406),i=r(2717),f=r(5988);function c(){let e=(0,n.useContext)(o.SearchParamsContext);return(0,n.useMemo)(()=>e?new i.ReadonlyURLSearchParams(e):null,[e])}function d(){return(0,n.useContext)(o.PathnameContext)}function s(){let e=(0,n.useContext)(u.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function p(){return(0,n.useContext)(o.PathParamsContext)}function y(e){void 0===e&&(e="children");let t=(0,n.useContext)(u.LayoutRouterContext);return t?function e(t,r,n,u){let o;if(void 0===n&&(n=!0),void 0===u&&(u=[]),n)o=t[1][r];else{var i;let e=t[1];o=null!=(i=e.children)?i:Object.values(e)[0]}if(!o)return u;let f=o[0],c=(0,l.getSegmentValue)(f);return!c||c.startsWith(a.PAGE_SEGMENT_KEY)?u:(u.push(c),e(o,r,!1,u))}(t.tree,e):null}function b(e){void 0===e&&(e="children");let t=y(e);if(!t||0===t.length)return null;let r="children"===e?t[0]:t[t.length-1];return r===a.DEFAULT_SEGMENT_KEY?null:r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2717:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return l},RedirectType:function(){return n.RedirectType},notFound:function(){return u.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect}});let n=r(7511),u=r(3394);class o extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class l extends URLSearchParams{append(){throw new o}delete(){throw new o}set(){throw new o}sort(){throw new o}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3394:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return u},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function u(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4234:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),(n=r||(r={}))[n.SeeOther=303]="SeeOther",n[n.TemporaryRedirect=307]="TemporaryRedirect",n[n.PermanentRedirect=308]="PermanentRedirect",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7511:function(e,t,r){"use strict";var n,u;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return f},getRedirectStatusCodeFromError:function(){return b},getRedirectTypeFromError:function(){return y},getURLFromRedirectError:function(){return p},isRedirectError:function(){return s},permanentRedirect:function(){return d},redirect:function(){return c}});let o=r(2595),l=r(6361),a=r(4234),i="NEXT_REDIRECT";function f(e,t,r){void 0===r&&(r=a.RedirectStatusCode.TemporaryRedirect);let n=Error(i);n.digest=i+";"+t+";"+e+";"+r+";";let u=o.requestAsyncStorage.getStore();return u&&(n.mutableCookies=u.mutableCookies),n}function c(e,t){void 0===t&&(t="replace");let r=l.actionAsyncStorage.getStore();throw f(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.TemporaryRedirect)}function d(e,t){void 0===t&&(t="replace");let r=l.actionAsyncStorage.getStore();throw f(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.PermanentRedirect)}function s(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,u]=e.digest.split(";",4),o=Number(u);return t===i&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(o)&&o in a.RedirectStatusCode}function p(e){return s(e)?e.digest.split(";",3)[2]:null}function y(e){if(!s(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function b(e){if(!s(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(u=n||(n={})).push="push",u.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5329:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return n}});let n=(0,r(4001).createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2595:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getExpectedRequestStore:function(){return u},requestAsyncStorage:function(){return n.requestAsyncStorage}});let n=r(5329);function u(e){let t=n.requestAsyncStorage.getStore();if(t)return t;throw Error("`"+e+"` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1288:function(e,t){"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8199:function(e,t){"use strict";var r,n,u,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return d},ACTION_NAVIGATE:function(){return a},ACTION_PREFETCH:function(){return c},ACTION_REFRESH:function(){return l},ACTION_RESTORE:function(){return i},ACTION_SERVER_ACTION:function(){return s},ACTION_SERVER_PATCH:function(){return f},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return p}});let l="refresh",a="navigate",i="restore",f="server-patch",c="prefetch",d="fast-refresh",s="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(u=r||(r={})).AUTO="auto",u.FULL="full",u.TEMPORARY="temporary",(o=n||(n={})).fresh="fresh",o.reusable="reusable",o.expired="expired",o.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7195:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8337),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8342:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let n=r(8754),u=r(5893),o=n._(r(7294)),l=r(6075),a=r(3955),i=r(8041),f=r(9903),c=r(5490),d=r(1928),s=r(257),p=r(4229),y=r(7195),b=r(9470),_=r(8199),g=new Set;function v(e,t,r,n,u,o){if(o||(0,a.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let u=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(g.has(u))return;g.add(u)}(async()=>o?e.prefetch(t,u):e.prefetch(t,r,n))().catch(e=>{})}}function h(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let j=o.default.forwardRef(function(e,t){let r,n;let{href:i,as:g,children:j,prefetch:O=null,passHref:P,replace:m,shallow:R,scroll:S,locale:M,onClick:C,onMouseEnter:E,onTouchStart:x,legacyBehavior:T=!1,...A}=e;r=j,T&&("string"==typeof r||"number"==typeof r)&&(r=(0,u.jsx)("a",{children:r}));let L=o.default.useContext(d.RouterContext),w=o.default.useContext(s.AppRouterContext),I=null!=L?L:w,N=!L,k=!1!==O,U=null===O?_.PrefetchKind.AUTO:_.PrefetchKind.FULL,{href:F,as:H}=o.default.useMemo(()=>{if(!L){let e=h(i);return{href:e,as:g?h(g):e}}let[e,t]=(0,l.resolveHref)(L,i,!0);return{href:e,as:g?(0,l.resolveHref)(L,g):t||e}},[L,i,g]),K=o.default.useRef(F),q=o.default.useRef(H);T&&(n=o.default.Children.only(r));let D=T?n&&"object"==typeof n&&n.ref:t,[V,G,Y]=(0,p.useIntersection)({rootMargin:"200px"}),W=o.default.useCallback(e=>{(q.current!==H||K.current!==F)&&(Y(),q.current=H,K.current=F),V(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[H,D,F,Y,V]);o.default.useEffect(()=>{I&&G&&k&&v(I,F,H,{locale:M},{kind:U},N)},[H,F,G,M,k,null==L?void 0:L.locale,I,N,U]);let X={ref:W,onClick(e){T||"function"!=typeof C||C(e),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,r,n,u,l,i,f,c){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let s=()=>{let e=null==i||i;"beforePopState"in t?t[u?"replace":"push"](r,n,{shallow:l,locale:f,scroll:e}):t[u?"replace":"push"](n||r,{scroll:e})};c?o.default.startTransition(s):s()}(e,I,F,H,m,R,S,M,N)},onMouseEnter(e){T||"function"!=typeof E||E(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),I&&(k||!N)&&v(I,F,H,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:U},N)},onTouchStart:function(e){T||"function"!=typeof x||x(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),I&&(k||!N)&&v(I,F,H,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:U},N)}};if((0,f.isAbsoluteUrl)(H))X.href=H;else if(!T||P||"a"===n.type&&!("href"in n.props)){let e=void 0!==M?M:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&(0,y.getDomainLocale)(H,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);X.href=t||(0,b.addBasePath)((0,c.addLocale)(H,e,null==L?void 0:L.defaultLocale))}return T?o.default.cloneElement(n,X):(0,u.jsx)("a",{...A,...X,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4229:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let n=r(7294),u=r(4474),o="function"==typeof IntersectionObserver,l=new Map,a=[];function i(e){let{rootRef:t,rootMargin:r,disabled:i}=e,f=i||!o,[c,d]=(0,n.useState)(!1),s=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{s.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(f||c)return;let e=s.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:u,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let u=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=u.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:u},a.push(r),l.set(r,t),t}(r);return o.set(e,t),u.observe(e),function(){if(o.delete(e),u.unobserve(e),0===o.size){u.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,u.requestIdleCallback)(()=>d(!0));return()=>(0,u.cancelIdleCallback)(e)}},[f,r,t,c,s.current]),[p,c,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5988:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return u},useServerInsertedHTML:function(){return o}});let n=r(1757)._(r(7294)),u=n.default.createContext(null);function o(e){let t=(0,n.useContext)(u);t&&t(e)}},9008:function(e,t,r){e.exports=r(3867)},1664:function(e,t,r){e.exports=r(8342)},9332:function(e,t,r){e.exports=r(6432)},4298:function(e,t,r){e.exports=r(3381)}}]);