module.exports=[20916,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"ReadonlyURLSearchParams",{enumerable:!0,get:function(){return e}});class d extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class e extends URLSearchParams{append(){throw new d}delete(){throw new d}set(){throw new d}sort(){throw new d}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},21170,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"RedirectStatusCode",{enumerable:!0,get:function(){return e}});var d,e=((d={})[d.SeeOther=303]="SeeOther",d[d.TemporaryRedirect=307]="TemporaryRedirect",d[d.PermanentRedirect=308]="PermanentRedirect",d);("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},28859,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d,e={REDIRECT_ERROR_CODE:function(){return h},RedirectType:function(){return i},isRedirectError:function(){return j}};for(var f in e)Object.defineProperty(c,f,{enumerable:!0,get:e[f]});let g=a.r(21170),h="NEXT_REDIRECT";var i=((d={}).push="push",d.replace="replace",d);function j(a){if("object"!=typeof a||null===a||!("digest"in a)||"string"!=typeof a.digest)return!1;let b=a.digest.split(";"),[c,d]=b,e=b.slice(2,-2).join(";"),f=Number(b.at(-2));return c===h&&("replace"===d||"push"===d)&&"string"==typeof e&&!isNaN(f)&&f in g.RedirectStatusCode}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},44868,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={getRedirectError:function(){return i},getRedirectStatusCodeFromError:function(){return n},getRedirectTypeFromError:function(){return m},getURLFromRedirectError:function(){return l},permanentRedirect:function(){return k},redirect:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(21170),g=a.r(28859),h=a.r(20635).actionAsyncStorage;function i(a,b,c=f.RedirectStatusCode.TemporaryRedirect){let d=Object.defineProperty(Error(g.REDIRECT_ERROR_CODE),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return d.digest=`${g.REDIRECT_ERROR_CODE};${b};${a};${c};`,d}function j(a,b){throw i(a,b??=h?.getStore()?.isAction?g.RedirectType.push:g.RedirectType.replace,f.RedirectStatusCode.TemporaryRedirect)}function k(a,b=g.RedirectType.replace){throw i(a,b,f.RedirectStatusCode.PermanentRedirect)}function l(a){return(0,g.isRedirectError)(a)?a.digest.split(";").slice(2,-2).join(";"):null}function m(a){if(!(0,g.isRedirectError)(a))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return a.digest.split(";",2)[1]}function n(a){if(!(0,g.isRedirectError)(a))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return Number(a.digest.split(";").at(-2))}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},89798,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={HTTPAccessErrorStatus:function(){return f},HTTP_ERROR_FALLBACK_ERROR_CODE:function(){return h},getAccessFallbackErrorTypeByStatus:function(){return k},getAccessFallbackHTTPStatus:function(){return j},isHTTPAccessFallbackError:function(){return i}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f={NOT_FOUND:404,FORBIDDEN:403,UNAUTHORIZED:401},g=new Set(Object.values(f)),h="NEXT_HTTP_ERROR_FALLBACK";function i(a){if("object"!=typeof a||null===a||!("digest"in a)||"string"!=typeof a.digest)return!1;let[b,c]=a.digest.split(";");return b===h&&g.has(Number(c))}function j(a){return Number(a.digest.split(";")[1])}function k(a){switch(a){case 401:return"unauthorized";case 403:return"forbidden";case 404:return"not-found";default:return}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},16155,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"notFound",{enumerable:!0,get:function(){return f}});let d=a.r(89798),e=`${d.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;function f(){let a=Object.defineProperty(Error(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});throw a.digest=e,a}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},34557,(a,b,c)=>{"use strict";function d(){throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E488",enumerable:!1,configurable:!0})}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"forbidden",{enumerable:!0,get:function(){return d}}),a.r(89798).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},93845,(a,b,c)=>{"use strict";function d(){throw Object.defineProperty(Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E411",enumerable:!1,configurable:!0})}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"unauthorized",{enumerable:!0,get:function(){return d}}),a.r(89798).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},13091,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={isHangingPromiseRejectionError:function(){return f},makeDevtoolsIOAwarePromise:function(){return l},makeHangingPromise:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(a){return"object"==typeof a&&null!==a&&"digest"in a&&a.digest===g}let g="HANGING_PROMISE_REJECTION";class h extends Error{constructor(a,b){super(`During prerendering, ${b} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${b} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${a}".`),this.route=a,this.expression=b,this.digest=g}}let i=new WeakMap;function j(a,b,c){if(a.aborted)return Promise.reject(new h(b,c));{let d=new Promise((d,e)=>{let f=e.bind(null,new h(b,c)),g=i.get(a);if(g)g.push(f);else{let b=[f];i.set(a,b),a.addEventListener("abort",()=>{for(let a=0;a<b.length;a++)b[a]()},{once:!0})}});return d.catch(k),d}}function k(){}function l(a,b,c){return b.stagedRendering?b.stagedRendering.delayUntilStage(c,void 0,a):new Promise(b=>{setTimeout(()=>{b(a)},0)})}},73808,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"isPostpone",{enumerable:!0,get:function(){return e}});let d=Symbol.for("react.postpone");function e(a){return"object"==typeof a&&null!==a&&a.$$typeof===d}},49640,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={BailoutToCSRError:function(){return g},isBailoutToCSRError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="BAILOUT_TO_CLIENT_SIDE_RENDERING";class g extends Error{constructor(a){super(`Bail out to client-side rendering: ${a}`),this.reason=a,this.digest=f}}function h(a){return"object"==typeof a&&null!==a&&"digest"in a&&a.digest===f}},1567,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"isNextRouterError",{enumerable:!0,get:function(){return f}});let d=a.r(89798),e=a.r(28859);function f(a){return(0,e.isRedirectError)(a)||(0,d.isHTTPAccessFallbackError)(a)}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},96556,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={DynamicServerError:function(){return g},isDynamicServerError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="DYNAMIC_SERVER_USAGE";class g extends Error{constructor(a){super(`Dynamic server usage: ${a}`),this.description=a,this.digest=f}}function h(a){return"object"==typeof a&&null!==a&&"digest"in a&&"string"==typeof a.digest&&a.digest===f}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},60312,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={StaticGenBailoutError:function(){return g},isStaticGenBailoutError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="NEXT_STATIC_GEN_BAILOUT";class g extends Error{constructor(...a){super(...a),this.code=f}}function h(a){return"object"==typeof a&&null!==a&&"code"in a&&a.code===f}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},17491,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={METADATA_BOUNDARY_NAME:function(){return f},OUTLET_BOUNDARY_NAME:function(){return h},ROOT_LAYOUT_BOUNDARY_NAME:function(){return i},VIEWPORT_BOUNDARY_NAME:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="__next_metadata_boundary__",g="__next_viewport_boundary__",h="__next_outlet_boundary__",i="__next_root_layout_boundary__"},61933,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={atLeastOneTask:function(){return h},scheduleImmediate:function(){return g},scheduleOnNextTick:function(){return f},waitAtLeastOneReactRenderTask:function(){return i}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a=>{Promise.resolve().then(()=>{process.nextTick(a)})},g=a=>{setImmediate(a)};function h(){return new Promise(a=>g(a))}function i(){return new Promise(a=>setImmediate(a))}},28340,(a,b,c)=>{"use strict";function d(){let a,b,c=new Promise((c,d)=>{a=c,b=d});return{resolve:a,reject:b,promise:c}}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"createPromiseWithResolvers",{enumerable:!0,get:function(){return d}})},31382,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d,e={RenderStage:function(){return i},StagedRenderingController:function(){return j}};for(var f in e)Object.defineProperty(c,f,{enumerable:!0,get:e[f]});let g=a.r(50640),h=a.r(28340);var i=((d={})[d.Static=1]="Static",d[d.Runtime=2]="Runtime",d[d.Dynamic=3]="Dynamic",d);class j{constructor(a=null){this.abortSignal=a,this.currentStage=1,this.runtimeStagePromise=(0,h.createPromiseWithResolvers)(),this.dynamicStagePromise=(0,h.createPromiseWithResolvers)(),a&&a.addEventListener("abort",()=>{let{reason:b}=a;this.currentStage<2&&(this.runtimeStagePromise.promise.catch(k),this.runtimeStagePromise.reject(b)),this.currentStage<3&&(this.dynamicStagePromise.promise.catch(k),this.dynamicStagePromise.reject(b))},{once:!0})}advanceStage(a){!(this.currentStage>=a)&&(this.currentStage=a,a>=2&&this.runtimeStagePromise.resolve(),a>=3&&this.dynamicStagePromise.resolve())}getStagePromise(a){switch(a){case 2:return this.runtimeStagePromise.promise;case 3:return this.dynamicStagePromise.promise;default:throw Object.defineProperty(new g.InvariantError(`Invalid render stage: ${a}`),"__NEXT_ERROR_CODE",{value:"E881",enumerable:!1,configurable:!0})}}waitForStage(a){return this.getStagePromise(a)}delayUntilStage(a,b,c){var d,e,f;let g,h=(d=this.getStagePromise(a),e=b,f=c,g=new Promise((a,b)=>{d.then(a.bind(null,f),b)}),void 0!==e&&(g.displayName=e),g);return this.abortSignal&&h.catch(k),h}}function k(){}},60384,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d,e,f={Postpone:function(){return D},PreludeState:function(){return Z},abortAndThrowOnSynchronousRequestDataAccess:function(){return C},abortOnSynchronousPlatformIOAccess:function(){return A},accessedDynamicData:function(){return L},annotateDynamicAccess:function(){return Q},consumeDynamicAccess:function(){return M},createDynamicTrackingState:function(){return t},createDynamicValidationState:function(){return u},createHangingInputAbortSignal:function(){return P},createRenderInBrowserAbortSignal:function(){return O},delayUntilRuntimeStage:function(){return aa},formatDynamicAPIAccesses:function(){return N},getFirstDynamicReason:function(){return v},isDynamicPostpone:function(){return G},isPrerenderInterruptedError:function(){return K},logDisallowedDynamicError:function(){return $},markCurrentScopeAsDynamic:function(){return w},postponeWithTracking:function(){return E},throwIfDisallowedDynamic:function(){return _},throwToInterruptStaticGeneration:function(){return x},trackAllowedDynamicAccess:function(){return Y},trackDynamicDataInDynamicRender:function(){return y},trackSynchronousPlatformIOAccessInDev:function(){return B},useDynamicRouteParams:function(){return R},useDynamicSearchParams:function(){return S}};for(var g in f)Object.defineProperty(c,g,{enumerable:!0,get:f[g]});let h=(d=a.r(717))&&d.__esModule?d:{default:d},i=a.r(96556),j=a.r(60312),k=a.r(32319),l=a.r(56704),m=a.r(13091),n=a.r(17491),o=a.r(61933),p=a.r(49640),q=a.r(50640),r=a.r(31382),s="function"==typeof h.default.unstable_postpone;function t(a){return{isDebugDynamicAccesses:a,dynamicAccesses:[],syncDynamicErrorWithStack:null}}function u(){return{hasSuspenseAboveBody:!1,hasDynamicMetadata:!1,hasDynamicViewport:!1,hasAllowedDynamic:!1,dynamicErrors:[]}}function v(a){var b;return null==(b=a.dynamicAccesses[0])?void 0:b.expression}function w(a,b,c){if(b)switch(b.type){case"cache":case"unstable-cache":case"private-cache":return}if(!a.forceDynamic&&!a.forceStatic){if(a.dynamicShouldError)throw Object.defineProperty(new j.StaticGenBailoutError(`Route ${a.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${c}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E553",enumerable:!1,configurable:!0});if(b)switch(b.type){case"prerender-ppr":return E(a.route,c,b.dynamicTracking);case"prerender-legacy":b.revalidate=0;let d=Object.defineProperty(new i.DynamicServerError(`Route ${a.route} couldn't be rendered statically because it used ${c}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E550",enumerable:!1,configurable:!0});throw a.dynamicUsageDescription=c,a.dynamicUsageStack=d.stack,d}}}function x(a,b,c){let d=Object.defineProperty(new i.DynamicServerError(`Route ${b.route} couldn't be rendered statically because it used \`${a}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E558",enumerable:!1,configurable:!0});throw c.revalidate=0,b.dynamicUsageDescription=a,b.dynamicUsageStack=d.stack,d}function y(a){switch(a.type){case"cache":case"unstable-cache":case"private-cache":return}}function z(a,b,c){let d=J(`Route ${a} needs to bail out of prerendering at this point because it used ${b}.`);c.controller.abort(d);let e=c.dynamicTracking;e&&e.dynamicAccesses.push({stack:e.isDebugDynamicAccesses?Error().stack:void 0,expression:b})}function A(a,b,c,d){let e=d.dynamicTracking;z(a,b,d),e&&null===e.syncDynamicErrorWithStack&&(e.syncDynamicErrorWithStack=c)}function B(a){a.stagedRendering&&a.stagedRendering.advanceStage(r.RenderStage.Dynamic)}function C(a,b,c,d){if(!1===d.controller.signal.aborted){z(a,b,d);let e=d.dynamicTracking;e&&null===e.syncDynamicErrorWithStack&&(e.syncDynamicErrorWithStack=c)}throw J(`Route ${a} needs to bail out of prerendering at this point because it used ${b}.`)}function D({reason:a,route:b}){let c=k.workUnitAsyncStorage.getStore();E(b,a,c&&"prerender-ppr"===c.type?c.dynamicTracking:null)}function E(a,b,c){(function(){if(!s)throw Object.defineProperty(Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E224",enumerable:!1,configurable:!0})})(),c&&c.dynamicAccesses.push({stack:c.isDebugDynamicAccesses?Error().stack:void 0,expression:b}),h.default.unstable_postpone(F(a,b))}function F(a,b){return`Route ${a} needs to bail out of prerendering at this point because it used ${b}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`}function G(a){return"object"==typeof a&&null!==a&&"string"==typeof a.message&&H(a.message)}function H(a){return a.includes("needs to bail out of prerendering at this point because it used")&&a.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error")}if(!1===H(F("%%%","^^^")))throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E296",enumerable:!1,configurable:!0});let I="NEXT_PRERENDER_INTERRUPTED";function J(a){let b=Object.defineProperty(Error(a),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return b.digest=I,b}function K(a){return"object"==typeof a&&null!==a&&a.digest===I&&"name"in a&&"message"in a&&a instanceof Error}function L(a){return a.length>0}function M(a,b){return a.dynamicAccesses.push(...b.dynamicAccesses),a.dynamicAccesses}function N(a){return a.filter(a=>"string"==typeof a.stack&&a.stack.length>0).map(({expression:a,stack:b})=>(b=b.split("\n").slice(4).filter(a=>!(a.includes("node_modules/next/")||a.includes(" (<anonymous>)")||a.includes(" (node:"))).join("\n"),`Dynamic API Usage Debug - ${a}:
${b}`))}function O(){let a=new AbortController;return a.abort(Object.defineProperty(new p.BailoutToCSRError("Render in Browser"),"__NEXT_ERROR_CODE",{value:"E721",enumerable:!1,configurable:!0})),a.signal}function P(a){switch(a.type){case"prerender":case"prerender-runtime":let b=new AbortController;if(a.cacheSignal)a.cacheSignal.inputReady().then(()=>{b.abort()});else{let c=(0,k.getRuntimeStagePromise)(a);c?c.then(()=>(0,o.scheduleOnNextTick)(()=>b.abort())):(0,o.scheduleOnNextTick)(()=>b.abort())}return b.signal;case"prerender-client":case"prerender-ppr":case"prerender-legacy":case"request":case"cache":case"private-cache":case"unstable-cache":return}}function Q(a,b){let c=b.dynamicTracking;c&&c.dynamicAccesses.push({stack:c.isDebugDynamicAccesses?Error().stack:void 0,expression:a})}function R(a){let b=l.workAsyncStorage.getStore(),c=k.workUnitAsyncStorage.getStore();if(b&&c)switch(c.type){case"prerender-client":case"prerender":{let d=c.fallbackRouteParams;d&&d.size>0&&h.default.use((0,m.makeHangingPromise)(c.renderSignal,b.route,a));break}case"prerender-ppr":{let d=c.fallbackRouteParams;if(d&&d.size>0)return E(b.route,a,c.dynamicTracking);break}case"prerender-runtime":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called during a runtime prerender. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E771",enumerable:!1,configurable:!0});case"cache":case"private-cache":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called inside a cache scope. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E745",enumerable:!1,configurable:!0})}}function S(a){let b=l.workAsyncStorage.getStore(),c=k.workUnitAsyncStorage.getStore();if(b)switch(!c&&(0,k.throwForMissingRequestStore)(a),c.type){case"prerender-client":h.default.use((0,m.makeHangingPromise)(c.renderSignal,b.route,a));break;case"prerender-legacy":case"prerender-ppr":if(b.forceStatic)return;throw Object.defineProperty(new p.BailoutToCSRError(a),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});case"prerender":case"prerender-runtime":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called from a Server Component. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E795",enumerable:!1,configurable:!0});case"cache":case"unstable-cache":case"private-cache":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called inside a cache scope. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E745",enumerable:!1,configurable:!0});case"request":return}}let T=/\n\s+at Suspense \(<anonymous>\)/,U=RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${n.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`),V=RegExp(`\\n\\s+at ${n.METADATA_BOUNDARY_NAME}[\\n\\s]`),W=RegExp(`\\n\\s+at ${n.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),X=RegExp(`\\n\\s+at ${n.OUTLET_BOUNDARY_NAME}[\\n\\s]`);function Y(a,b,c,d){if(!X.test(b)){if(V.test(b)){c.hasDynamicMetadata=!0;return}if(W.test(b)){c.hasDynamicViewport=!0;return}if(U.test(b)){c.hasAllowedDynamic=!0,c.hasSuspenseAboveBody=!0;return}else if(T.test(b)){c.hasAllowedDynamic=!0;return}else{var e,f;let g;if(d.syncDynamicErrorWithStack)return void c.dynamicErrors.push(d.syncDynamicErrorWithStack);let h=(e=`Route "${a.route}": Uncached data was accessed outside of <Suspense>. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,f=b,(g=Object.defineProperty(Error(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0})).stack=g.name+": "+e+f,g);return void c.dynamicErrors.push(h)}}}var Z=((e={})[e.Full=0]="Full",e[e.Empty=1]="Empty",e[e.Errored=2]="Errored",e);function $(a,b){console.error(b),a.dev||(a.hasReadableErrorStacks?console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${a.route}" in your browser to investigate the error.`):console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${a.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`))}function _(a,b,c,d){if(d.syncDynamicErrorWithStack)throw $(a,d.syncDynamicErrorWithStack),new j.StaticGenBailoutError;if(0!==b){if(c.hasSuspenseAboveBody)return;let d=c.dynamicErrors;if(d.length>0){for(let b=0;b<d.length;b++)$(a,d[b]);throw new j.StaticGenBailoutError}if(c.hasDynamicViewport)throw console.error(`Route "${a.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`),new j.StaticGenBailoutError;if(1===b)throw console.error(`Route "${a.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`),new j.StaticGenBailoutError}else if(!1===c.hasAllowedDynamic&&c.hasDynamicMetadata)throw console.error(`Route "${a.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`),new j.StaticGenBailoutError}function aa(a,b){return a.runtimeStagePromise?a.runtimeStagePromise.then(()=>b):b}},94783,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"unstable_rethrow",{enumerable:!0,get:function(){return function a(b){if((0,g.isNextRouterError)(b)||(0,f.isBailoutToCSRError)(b)||(0,i.isDynamicServerError)(b)||(0,h.isDynamicPostpone)(b)||(0,e.isPostpone)(b)||(0,d.isHangingPromiseRejectionError)(b)||(0,h.isPrerenderInterruptedError)(b))throw b;b instanceof Error&&"cause"in b&&a(b.cause)}}});let d=a.r(13091),e=a.r(73808),f=a.r(49640),g=a.r(1567),h=a.r(60384),i=a.r(96556);("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},60968,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"unstable_rethrow",{enumerable:!0,get:function(){return d}});let d=a.r(94783).unstable_rethrow;("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},73727,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={ReadonlyURLSearchParams:function(){return f.ReadonlyURLSearchParams},RedirectType:function(){return h.RedirectType},forbidden:function(){return j.forbidden},notFound:function(){return i.notFound},permanentRedirect:function(){return g.permanentRedirect},redirect:function(){return g.redirect},unauthorized:function(){return k.unauthorized},unstable_isUnrecognizedActionError:function(){return m},unstable_rethrow:function(){return l.unstable_rethrow}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(20916),g=a.r(44868),h=a.r(28859),i=a.r(16155),j=a.r(34557),k=a.r(93845),l=a.r(60968);function m(){throw Object.defineProperty(Error("`unstable_isUnrecognizedActionError` can only be used on the client."),"__NEXT_ERROR_CODE",{value:"E776",enumerable:!1,configurable:!0})}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},15517,a=>{"use strict";var b=a.i(7997),c=a.i(83007),d=a.i(68274),e=a.i(43917),f=a.i(13743),g=a.i(92737),h=a.i(60612),i=a.i(56603);let j=(0,a.i(1269).default)("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);var k=a.i(95936),l=a.i(73727),m=a.i(3236);let n={"siyola-tabby-guide":{title:"سيولة تابي: دليل شامل للحصول على كاش من تابي خلال ساعة",description:"تعرف على خطوات الحصول على سيولة تابي وكيفية تحويل رصيدك إلى كاش نقدي في حسابك البنكي خلال ساعة فقط مع مطر.",category:"سيولة تابي",readTime:"5 دقائق",date:"2026-01-15",keywords:["سيولة تابي","كاش تابي","تحويل رصيد تابي","سلفة تابي","تسييل تابي"],content:`
## ما هي سيولة تابي؟

سيولة تابي هي عملية تحويل الرصيد المتاح لك في تطبيق تابي (Tabby) إلى كاش نقدي يُحول مباشرة إلى حسابك البنكي خلال ساعة فقط. هذه الخدمة تساعدك على الاستفادة من حد الائتمان المتاح لديك في تابي للحصول على سيولة نقدية عند الحاجة.

## خطوات الحصول على سيولة تابي مع مطر

### الخطوة 1: احسب المبلغ في حاسبة السيولة
ادخل موقع مطر واستخدم حاسبة السيولة لتحديد مبلغ الشراء ومعرفة المبلغ النهائي الذي ستستلمه بعد الخصومات.

### الخطوة 2: ادخل متجر نون أو اكسترا
تابي متواجد في متجر نون ومتجر اكسترا. ادخل أحد المتجرين وأضف منتجات في السلة بنفس مبلغ الشراء من الحاسبة.

### الخطوة 3: اختر تابي كوسيلة دفع
عند الدفع، اختر تابي كوسيلة دفع. بعد ظهور صفحة تقسيم الدفعات فقط، صور الشاشة وأرسلها لنا على واتساب 0503367637. لا تحتاج إكمال العملية.

### الخطوة 4: استلم الكاش خلال ساعة
نقوم نحن بإتمام كل شيء ونحول لك المبلغ خلال ساعة فقط.

## حساب الخصومات على سيولة تابي

- **مبلغ البيع**: أقل من مبلغ الشراء بنسبة 10-15% حسب المبلغ
- **الرسوم الإدارية**: 10% من مبلغ الشراء
- **الدفعة الأولى**: 25% من مبلغ الشراء (نخصمها من مبلغ البيع)

### جدول فرق البيع:
| المبلغ | فرق البيع |
|--------|-----------|
| 12,000+ ريال | 10% |
| 5,500 - 12,000 ريال | 10-14% (يقل 1% كل 1000 ريال) |
| أقل من 5,500 ريال | 15% |

## مثال عملي على سيولة تابي

لنفترض مبلغ الشراء 10,000 ريال:
- فرق البيع (12%): 1,200 ريال ← مبلغ البيع = 8,800 ريال
- الدفعة الأولى (25%): 2,500 ريال
- الرسوم الإدارية (10%): 1,000 ريال
- **المبلغ المستلم**: 8,800 - 2,500 - 1,000 = **5,300 ريال**

## لماذا مطر لسيولة تابي؟

- تنفيذ خلال ساعة فقط
- لا نطلب كلمات مرور أو بيانات حساسة
- أسعار شفافة وحاسبة دقيقة
- دعم واتساب متواصل على 0503367637

## تواصل معنا

- **واتساب**: 0503367637
- **البريد**: matar@liilsa.com
- **انستقرام**: @liilsa.sol
    `},"cash-tamara-steps":{title:"كاش تمارا: خطوات فحص الحد وتحويل الرصيد بالتفصيل",description:"دليل شامل لكاش تمارا وخطوات التحويل المختلفة عن تابي. تعرف على طريقة فحص حدك الائتماني.",category:"كاش تمارا",readTime:"6 دقائق",date:"2026-01-10",keywords:["كاش تمارا","سيولة تمارا","تحويل تمارا","سلفة تمارا","تسييل تمارا"],content:`
## ما هو كاش تمارا؟

كاش تمارا هو تحويل رصيدك المتاح في تطبيق تمارا (Tamara) إلى نقد مباشر في حسابك البنكي. تمارا من أشهر تطبيقات الدفع الآجل في السعودية.

## خطوات كاش تمارا (مختلفة عن تابي!)

### الخطوة 1: احسب المبلغ في حاسبة السيولة
ادخل موقع مطر واستخدم الحاسبة لتحديد مبلغ الشراء.

### الخطوة 2: ادخل متجر نون أو اكسترا
تمارا متواجد في نون واكسترا. أضف منتجات بنفس مبلغ الشراء من الحاسبة.

### الخطوة 3: اختر تمارا كوسيلة دفع واستمر بالدفع
هنا الفرق عن تابي - مع تمارا تحتاج تكمل خطوات أكثر:
- اختر تمارا كوسيلة دفع
- اختر "ادفع" واستمر
- أضف بطاقة بنكية **بدون رصيد** (مهم جداً!)
- اضغط على "ادفع"

### الخطوة 4: صور الشاشة وأرسلها
بعد الضغط على ادفع، سيحصل أحد أمرين:
- صور الشاشة بعد الضغط على ادفع وأرسلها لنا على واتساب

### تنبيهات مهمة لتمارا:
- لا تستخدم Apple Pay
- لا تستخدم بطاقة فيها رصيد
- لا تستخدم البطاقة المضافة مسبقاً في تمارا

### الخطوة 5: استلم الكاش خلال ساعة
نقوم بإتمام العملية ونحول لك المبلغ.

## لماذا خطوات تمارا مختلفة؟

تمارا يتطلب التأكد من صلاحية الحد الائتماني بشكل مختلف عن تابي، لذلك نحتاج صورة الشاشة بعد الضغط على ادفع للتأكد من نجاح العملية.

## حساب الخصومات (نفس تابي)

- **فرق البيع**: 10-15% حسب المبلغ
- **الرسوم الإدارية**: 10%
- **الدفعة الأولى**: 25%

## تواصل معنا لكاش تمارا

- **واتساب**: 0503367637
- **البريد**: matar@liilsa.com
- **انستقرام**: @liilsa.sol
    `},"salfa-tabby-tamara":{title:"سلفة تابي وتمارا: الفرق بين التطبيقين وأيهما أفضل لك",description:"مقارنة شاملة بين سلفة تابي وسلفة تمارا ومدفوع. تعرف على الفرق في الخطوات والمتاجر.",category:"مقارنة",readTime:"7 دقائق",date:"2026-01-05",keywords:["سلفة تابي","سلفة تمارا","مقارنة تابي تمارا","سيولة","كاش"],content:`
## مقارنة بين سلفة تابي وسلفة تمارا ومدفوع

عند البحث عن سيولة أو سلفة، يتساءل الكثيرون: أيهما أفضل؟ في هذا المقال نقارن بين التطبيقات الثلاثة.

## تابي (Tabby)

### المتاجر المتاحة:
- نون (noon.com)
- اكسترا (extra.com)

### خطوات الفحص:
1. أضف منتجات في السلة
2. اختر تابي كوسيلة دفع
3. انتظر ظهور تقسيم الدفعات
4. صور الشاشة فقط - لا تكمل!

### المميزات:
- خطوات بسيطة وسريعة
- لا تحتاج إضافة بطاقة
- حد ائتماني يصل لـ 5000 ريال وأكثر

## تمارا (Tamara)

### المتاجر المتاحة:
- نون (noon.com)
- اكسترا (extra.com)

### خطوات الفحص (مختلفة!):
1. أضف منتجات في السلة
2. اختر تمارا كوسيلة دفع
3. اختر "ادفع" واستمر
4. أضف بطاقة بدون رصيد
5. اضغط "ادفع"
6. صور الشاشة وأرسلها لنا

### تنبيهات:
- لا تستخدم Apple Pay
- لا تستخدم بطاقة فيها رصيد
- لا تستخدم البطاقة المضافة مسبقاً

### المميزات:
- انتشار واسع في السعودية
- حدود ائتمانية جيدة

## مدفوع (Madfu)

### المتاجر المتاحة:
- المنيع (almanea.sa) فقط

### خطوات الفحص:
1. ادخل متجر المنيع
2. أضف منتجات في السلة
3. اختر مدفوع كوسيلة دفع
4. انتظر ظهور تقسيم الدفعات
5. صور الشاشة فقط - لا تكمل!

### المميزات:
- نفس خطوات تابي البسيطة
- متوفر في المنيع

## جدول المقارنة السريعة

| التطبيق | المتاجر | صعوبة الخطوات |
|---------|---------|---------------|
| تابي | نون، اكسترا | سهلة |
| تمارا | نون، اكسترا | متوسطة |
| مدفوع | المنيع | سهلة |

## نصيحة مطر

استخدم التطبيق الذي لديك فيه رصيد أعلى. يمكنك استخدام أكثر من تطبيق للحصول على سيولة أكبر.

## تواصل معنا

- **واتساب**: 0503367637
    `},"siyola-guide-beginners":{title:"دليل المبتدئين: ما هي السيولة وكيف تحصل على كاش من رصيدك؟",description:"شرح مبسط لمفهوم السيولة من تطبيقات الدفع الآجل للمبتدئين. تعرف على الخطوات والرسوم.",category:"سيولة",readTime:"8 دقائق",date:"2025-12-28",keywords:["سيولة","سلفة","دفع آجل","كاش","تسييل"],content:`
## ما هي السيولة؟

السيولة (أو تسييل الرصيد) هي عملية تحويل الرصيد الائتماني المتاح لك في تطبيقات الدفع الآجل (مثل تابي وتمارا ومدفوع) إلى كاش نقدي يُحول لحسابك البنكي.

## كيف تعمل السيولة؟

### المبدأ الأساسي:
1. لديك رصيد متاح في تابي أو تمارا أو مدفوع
2. ندخل كشركاء معك في شراء جهاز بهذا الرصيد من متاجر مثل نون واكسترا والمنيع ونتكفل بالدفعة الأولى
3. نبيع الجهاز بسعر السوق
4. نخصم نسبة الشراكة والرسوم الإدارية
5. نحول لك مبلغ السيولة أو السلفة المطلوب في حسابك

## الخصومات التي تُخصم من السيولة

### 1. فرق البيع (10-15%)
المنتج يُباع بسعر أقل من سعر الشراء. الفرق يعتمد على المبلغ:
- 12,000+ ريال: 10% فقط
- 5,500 - 12,000: 10-14%
- أقل من 5,500: 15%

### 2. الرسوم الإدارية (10%)
رسوم الخدمة والتنفيذ.

### 3. الدفعة الأولى (25%)
الدفعة الأولى التي ندفعها عنك ونخصمها من مبلغ البيع.

## مثال عملي للمبتدئين

لنفترض رصيدك 8,000 ريال:
- مبلغ الشراء: 8,000 ريال
- فرق البيع (13%): 1,040 ريال
- مبلغ البيع: 6,960 ريال
- الدفعة الأولى (25%): 2,000 ريال
- الرسوم الإدارية (10%): 800 ريال
- **المبلغ المستلم**: 6,960 - 2,000 - 800 = **4,160 ريال**

## متى تحتاج السيولة؟

- طوارئ مالية مستعجلة
- فاتورة لازم تدفعها اليوم
- فرصة ما تقدر تفوتها
- مصاريف غير متوقعة

## نصائح للمبتدئين

1. **احسب قبل الطلب**: استخدم حاسبة مطر
2. **تأكد من قدرتك على السداد**: الأقساط ستأتي لاحقاً
3. **اختر مبالغ أكبر**: الرسوم أقل نسبياً
4. **تواصل معنا**: نشرح لك كل شيء

## تواصل معنا

- **واتساب**: 0503367637
- **انستقرام**: @liilsa.sol
    `},"best-stores-siyola":{title:"المتاجر المتاحة لسيولة تابي وتمارا ومدفوع",description:"تعرف على المتاجر المتاحة لكل تطبيق وروابط الدخول المباشرة. نون واكسترا والمنيع.",category:"المتاجر",readTime:"4 دقائق",date:"2025-12-20",keywords:["نون","اكسترا","المنيع","متاجر سيولة","تابي نون","تمارا اكسترا"],content:`
## المتاجر المتاحة لكل تطبيق

### تابي (Tabby)
متوفر في:
- **نون** - noon.com/saudi-ar
- **اكسترا** - extra.com

### تمارا (Tamara)
متوفر في:
- **نون** - noon.com/saudi-ar
- **اكسترا** - extra.com

### مدفوع (Madfu)
متوفر في:
- **المنيع** - almanea.sa

## روابط المتاجر

### متجر نون (تابي + تمارا)
قسم الإلكترونيات والجوالات - أفضل المنتجات للسيولة

### متجر اكسترا (تابي + تمارا)
قسم الجوالات وال��لكترونيات

### متجر المنيع (مدفوع فقط)
قسم الجوالات والأجهزة اللوحية

## أفضل المنتجات للسيولة

المنتجات التي تحافظ على قيمتها:
- iPhone (أحدث إصدار)
- iPad Pro / iPad Air
- MacBook
- Samsung Galaxy S series
- PlayStation 5
- AirPods Pro

## نصائح اختيار المنتج

1. **اختر منتجات معروفة**: Apple و Samsung الأفضل
2. **تجنب المنتجات الرخيصة**: فرق البيع يكون أكبر
3. **اسأل مطر**: نختار لك المنتج المناسب

## تواصل معنا

لا تحتاج تختار المنتج بنفسك - نحن نرشدك للمنتج المناسب لمبلغك.

- **واتساب**: 0503367637
    `},"avoid-scams-siyola":{title:"كيف تحمي نفسك من النصب في خدمات السيولة",description:"نصائح مهمة لتجنب الاحتيال عند طلب سيولة تابي أو تمارا. تعرف على علامات المزود الموثوق.",category:"أمان",readTime:"5 دقائق",date:"2025-12-15",keywords:["حماية","نصب","احتيال","سيولة آمنة","مطر"],content:`
## كيف تتجنب النصب في السيولة؟

مع انتشار خدمات السيولة، ظهر للأسف بعض المحتالين. إليك كيف تحمي نفسك:

## علامات النصب - احذر منها!

### 1. طلب معلومات حساسة
- كلمات مرور تطبيقاتك
- رموز التحقق OTP
- معلومات بطاقتك البنكية الكاملة
**لا تعطيها لأحد أبداً!**

### 2. وعود غير واقعية
- "سيولة بدون خصومات"
- "تحصل على 90% من المبلغ"
هذا مستحيل! دائماً هناك رسوم وفرق بيع

### 3. الضغط للتعجيل
- "الع��ض ينتهي الآن"
- "آخر فرصة"
المزودون الموثوقون لا يضغطون عليك

### 4. عدم وجود تواصل واضح
- لا رقم واتساب ثابت
- لا حساب ا��ستقرام موثق
- يختفون بعد الدفع

## علامات المزود الموثوق م��ل مطر

### ما نفعله:
- نوضح جميع الخصومات مسب��اً بالحاسبة
- رقم واتساب ثابت: 0503367637
- حساب انستقرام: @liilsa.sol
- موقع واضح: مطر - سحابة غيث ماحسبت حسابها
- التنفيذ خلال ساعة

### ما لا نفعله:
- لا نطلب كلمات مرور
- لا نطلب رموز OTP
- لا نطلب تسجيل دخول لحساباتك
- أنت من يقوم بالخطوات في هاتفك

## كيف تعمل معنا بأمان

1. تحسب المبلغ في حاسبتنا
2. تفتح المتجر (نون/اكسترا/المنيع) بنفسك
3. تضيف المنتجات وتختار وسيلة الدفع
4. تصور الشاشة وترسلها لنا
5. نتمم العملية ونحول لك الكاش

**أنت تتحكم في كل خطوة!**

## ماذا تفعل إذا شككت في مزود؟

1. اطلب حساباتهم الرسمية
2. ابحث عن تقييمات
3. ابدأ بمبلغ صغير للتجربة
4. وثق كل المحادثات

## تواصل معنا بأمان

- **واتساب**: 0503367637
- **انستقرام**: @liilsa.sol
- **الموقع**: مطر - سحابة غيث ماحسبت حسابها
    `},"tabby-vs-tamara":{title:"تابي أم تمارا — أيهما أفضل للسيولة؟ مقارنة شاملة 2026",description:"مقارنة كاملة بين سيولة تابي وكاش تمارا: الرسوم، الخطوات، نسبة القبول، عدد الأقساط، والفرق العملي. اختر الأنسب لك.",category:"مقارنة",readTime:"6 دقائق",date:"2026-01-20",keywords:["تابي vs تمارا","مقارنة تابي وتمارا","أفضل سيولة تابي أم تمارا","الفرق بين تابي وتمارا"],content:`
## مقدمة: تابي أم تمارا — السؤال اللي يسأله الكل

إذا كنت تبحث عن سيولة نقدية وعندك رصيد في تابي أو تمارا، فأول سؤال يخطر ببالك: أيهما أسهل؟ وأيهما يعطيني مبلغ أكبر؟ وأيهما أسرع في التنفيذ؟

في هذا المقال نجيبك على كل هذه الأسئلة بشكل عملي ومبني على الأرقام الحقيقية، لأن الفرق بين التطبيقين يؤثر على المبلغ الذي تستلمه في نهاية اليوم.

## جدول المقارنة السريعة

| المعيار | تابي | تمارا |
|---------|------|-------|
| الرسوم الإدارية | 10% | 10% |
| فرق البيع (أقل من 5500 ريال) | 15% | 15% |
| فرق البيع (9500 ريال فأكثر) | 10% | 10% |
| الدفعة الأولى | 25% (نتكفل بها) | 25% (نتكفل بها) |
| عدد الأقساط | 4 أقساط | 3 أقساط |
| المتاجر المتاحة | نون، اكسترا، جرير | نون، اكسترا |
| صعوبة خطوات الفحص | سهلة جداً | متوسطة |
| وقت التنفيذ | خلال ساعة | خلال ساعة |

## تابي — المميزات والعيوب

### مميزات تابي:
- **خطوات الفحص أبسط**: تابي لا يحتاج إضافة بطاقة بنكية — تصور الشاشة بعد ظهور تقسيم الدفعات وترسلها لنا مباشرة
- **متاجر أكثر**: جرير بالإضافة لنون واكسترا، مما يعني مرونة أكبر في اختيار المنتج
- **4 أقساط**: الأقساط مقسمة على 4 دفعات كل 2 أسبوع، مما يخفف العبء الشهري
- **حد ائتماني مرن**: كثير من المستخدمين يحصلون على حد أعلى في تابي مقارنة بتمارا
- **تجربة مستخدم سلسة**: الواجهة واضحة وسهلة الاستخدام

### عيوب تابي:
- بعض الحسابات الجديدة تحتاج وقت لبناء السجل الائتماني قبل رفع الحد
- في حالات نادرة قد يتأخر ظهور خيار تقسيم الدفعات

### متى تختار تابي؟
- عندما تريد أسهل تجربة ممكنة
- عندما حدك في تابي أعلى من تمارا
- عندما تريد الشراء من جرير
- عندما تفضل 4 أقساط بدل 3

## تمارا — المميزات والعيوب

### مميزات تمارا:
- **انتشار واسع جداً**: تمارا من أكثر التطبيقات استخداماً في السوق السعودي
- **قبول عالي**: نسبة قبول جيدة لكثير من شرائح العملاء
- **حدود جيدة**: كثير من المستخدمين يملكون رصيداً جيداً في تمارا
- **3 أقساط**: مناسب لمن يريد إنهاء الأقساط بشكل أسرع

### عيوب تمارا:
- **خطوات أكثر**: يحتاج إضافة بطاقة بنكية بدون رصيد خلال عملية الفحص
- **تنبيهات مهمة**: لا تستخدم Apple Pay، ولا بطاقة فيها رصيد، ولا البطاقة المضافة مسبقاً — هذا يحتاج انتباهاً أكثر
- **متاجر أقل**: متوفر في نون واكسترا فقط دون جرير

### متى تختار تمارا؟
- عندما حدك في تمارا أعلى من تابي
- عندما تريد إنهاء الأقساط على 3 دفعات بدل 4
- عندما رصيدك في تابي منخفض أو غير كافٍ

## مثال عملي مقارن: مبلغ 8,000 ريال

### حساب تابي (8,000 ريال):
- فرق البيع 13%: 1,040 ريال ← مبلغ البيع = 6,960 ريال
- الدفعة الأولى 25%: 2,000 ريال
- الرسوم الإدارية 10%: 800 ريال
- **المبلغ الذي تستلمه: 4,160 ريال**
- **الأقساط المتبقية**: 3 أقساط \xd7 2,000 ريال كل 2 أسبوع

### حساب تمارا (8,000 ريال):
- فرق البيع 13%: 1,040 ريال ← مبلغ البيع = 6,960 ريال
- الدفعة الأولى 25%: 2,000 ريال
- الرسوم الإدارية 10%: 800 ريال
- **المبلغ الذي تستلمه: 4,160 ريال**
- **الأقساط المتبقية**: 2 أقساط \xd7 2,667 ريال شهرياً

**الخلاصة الحسابية**: المبلغ المستلم متساوٍ، الفرق الوحيد هو طريقة تقسيم الأقساط وصعوبة الخطوات.

## الخلاصة: من يناسبك أكثر؟

**اختر تابي إذا**:
- تريد أبسط تجربة وأسرع تنفيذ
- حدك فيه أعلى
- تريد 4 أقساط لتخفيف الضغط الشهري

**اختر تمارا إذا**:
- حدك فيها أعلى وتريد سيولة أكبر
- تريد إنهاء الأقساط في 3 دفعات
- رصيدك في تابي منخفض

**النصيحة الذهبية**: لا تقيّد نفسك بتطبيق واحد. يمكنك استخدام تابي وتمارا معاً في نفس الوقت للحصول على سيولة أكبر إذا كان لديك رصيد في كليهما.

## تواصل معنا وخبرنا رصيدك

تواصل مع مطر الآن وأخبرنا حدك في تابي وتمارا، وسنرشدك للخيار الأفضل لك بناءً على وضعك الفعلي.

- **واتساب**: 0503367637
- **انستقرام**: @liilsa.sol
    `},"كيف-احول-رصيد-تابي-الى-كاش":{title:"كيف احول رصيد تابي الى كاش؟ — دليل خطوة بخطوة 2026",description:"تعرف على أسهل طريقة لتحويل رصيد تابي إلى كاش في حسابك البنكي خلال ساعة. خطوات واضحة ومضمونة.",category:"سيولة تابي",readTime:"5 دقائق",date:"2026-02-01",keywords:["كيف احول رصيد تابي الى كاش","طريقة تحويل تابي كاش","تحويل تابي نقد"],content:`
## كيف تحول رصيد تابي إلى كاش؟

هذا السؤال يسأله يومياً الآلاف من مستخدمي تابي في السعودية. الجواب بسيط: عبر خدمة تسييل رصيد تابي مع مطر، تقدر تحول رصيدك المتاح في تابي إلى كاش نقدي في حسابك البنكي خلال ساعة واحدة فقط.

## الخطوة 1: احسب المبلغ في حاسبة مطر

قبل أي شيء، ادخل موقع مطر واستخدم الحاسبة المجانية. أدخل مبلغ الشراء (وهو الرصيد المتاح لديك في تابي) وستظهر لك:
- مبلغ البيع بعد خصم فرق البيع
- الدفعة الأولى التي نتكفل بها
- الرسوم الإدارية
- **المبلغ الصافي الذي ستستلمه في حسابك**

هذه الخطوة مهمة جداً — لا تبدأ إلا وأنت عارف بالضبط كم ستستلم.

## الخطوة 2: ادخل متجر نون أو اكسترا أو جرير

افتح أحد هذه المتاجر:
- **نون** (noon.com/saudi-ar) — الأفضل والأوسع تشكيلة
- **اكسترا** (extra.com) — ممتاز للإلكترونيات
- **جرير** (jarir.com) — خيار إضافي رائع

ابحث عن منتج بنفس مبلغ الشراء الذي حددته في الحاسبة. أفضل المنتجات: iPhone أو Samsung Galaxy أو iPad.

## الخطوة 3: أضف المنتج للسلة واختر تابي

بعد إضافة المنتج للسلة، انتقل لصفحة الدفع واختر **تابي** كوسيلة الدفع. سيظهر لك خيار تقسيم الدفعات على 4 أقساط.

**مهم جداً**: بمجرد ظهور صفحة تقسيم الدفعات، قف هنا ولا تضغط على أي زر!

## الخطوة 4: صور الشاشة وأرسلها لنا

صور شاشة هاتفك التي تظهر تفاصيل تقسيم الأقساط في تابي، وأرسلها لنا مباشرة على واتساب:

**واتساب: 966503367637**

لا تحتاج إكمال عملية الشراء، ولا تدفع أي شيء. أنت تصور الشاشة فقط!

## الخطوة 5: استلم الكاش خلال ساعة

بعد استلامنا الصورة، نقوم نحن بإتمام العملية كاملة:
- نتكفل بالدفعة الأولى (25%) عنك
- ننهي الشراء من طرفنا
- نحول لك الكاش الصافي في حسابك البنكي

الكل يتم خلال **ساعة واحدة** بمجرد تأكيد الطلب.

## أمثلة على المبالغ والمستلم

| مبلغ الشراء | فرق البيع | مبلغ البيع | الدفعة الأولى | الرسوم | تستلم |
|------------|-----------|-----------|--------------|--------|-------|
| 3,000 ريال | 15% = 450 | 2,550 | 750 | 300 | 1,500 ريال |
| 5,000 ريال | 15% = 750 | 4,250 | 1,250 | 500 | 2,500 ريال |
| 8,000 ريال | 13% = 1,040 | 6,960 | 2,000 | 800 | 4,160 ريال |
| 10,000 ريال | 12% = 1,200 | 8,800 | 2,500 | 1,000 | 5,300 ريال |
| 15,000 ريال | 10% = 1,500 | 13,500 | 3,750 | 1,500 | 8,250 ريال |

## أسئلة شائعة عن تحويل رصيد تابي إلى كاش

### هل أحتاج أعطيكم كلمة مرور تابي؟
لا أبداً. أنت فقط تصور الشاشة وترسلها. لا نطلب كلمات مرور ولا رموز OTP ولا أي معلومات حساسة.

### هل العملية آمنة؟
نعم. أنت تتحكم في كل خطوة من هاتفك. نحن نتلقى فقط صورة الشاشة ونتكفل بالباقي.

### كم يستغرق التحويل للحساب البنكي؟
في الغالب خلال ساعة من تأكيد الطلب. في أوقات الذروة قد يصل لساعتين.

### هل يمكن تحويل رصيد تابي كامل؟
نعم، يمكنك تسييل كامل حدك المتاح في تابي. إذا كان حدك 10,000 ريال، يمكنك تسييل 10,000 ريال أو أقل حسب احتياجك.

### ماذا لو ظهر خطأ في صفحة تابي؟
أرسل لنا صورة الخطأ على واتساب وسنرشدك. أحياناً يكون الحل بسيطاً جداً.

## ابدأ الآن

تواصل معنا على واتساب وأخبرنا بمبلغ رصيدك في تابي، وسنرشدك خطوة بخطوة حتى تستلم كاشك.

- **واتساب**: 0503367637
- **انستقرام**: @liilsa.sol
    `},"سيولة-تابي-بدون-تحويل-راتب":{title:"سيولة تابي بدون تحويل راتب — هل ممكن؟ الجواب الكامل",description:"يسأل الكثيرون: هل أحتاج تحويل راتب للحصول على سيولة تابي؟ الجواب المفصل مع بدائل عملية.",category:"سيولة تابي",readTime:"5 دقائق",date:"2026-02-10",keywords:["سيولة تابي بدون تحويل راتب","تابي بدون راتب","سيولة بدون شروط"],content:`
## هل أحتاج تحويل راتب للحصول على سيولة تابي؟

هذا من أكثر الأسئلة شيوعاً لدى من يبحث عن سيولة من تابي. والجواب المختصر: **لا، سيولة تابي لا تشترط تحويل الراتب**.

دعنا نوضح الصورة كاملة.

## كيف يعمل تابي — ما علاقته بالراتب؟

تابي هو تطبيق "اشتري الآن وادفع لاحقاً" (Buy Now Pay Later). طريقة عمله مختلفة تماماً عن البنوك التقليدية:
- تابي **لا يطلب** إثبات دخل أو تحويل راتب
- تابي يعتمد على **تاريخك الائتماني** وسلوكك الشرائي
- الحد الائتماني يتحدد بناءً على بيانات **سمة** وتاريخ استخدامك للتطبيق

## متطلبات الحصول على رصيد في تابي

لتحصل على رصيد في تابي تحتاج:
- هوية وطنية سارية أو إقامة
- رقم جوال سعودي مفعّل
- سجل ائتماني جيد (لا مخالفات في سمة)
- حساب بنكي سعودي

**لا يوجد** اشتراط لتحويل الراتب، ولا لمستوى دخل معين.

## وما علاقة تحويل الراتب بسيولة تابي؟

قد يخلط البعض بين خدمة **سيولة تابي** (تسييل الرصيد) وبين خدمات **السلف البنكية** التي تشترط تحويل الراتب.

الفرق جوهري:
- **السلفة البنكية**: تأخذها من البنك وتسدد منه — تشترط تحويل الراتب
- **سيولة تابي**: تسييل رصيدك الموجود في تابي — لا علاقة لها بالراتب أصلاً

إذاً إذا كان لديك رصيد في تطبيق تابي، يمكنك تسييله بغض النظر عن وضع راتبك.

## من يستطيع الاستفادة من سيولة تابي بدون تحويل راتب؟

### 1. أصحاب الأعمال الحرة (Freelancers)
إذا كان لديك رصيد في تابي، يمكنك تسييله بدون إثبات دخل ثابت.

### 2. طلاب الجامعات
كثير من الطلاب لديهم حسابات تابي فعّالة مع رصيد جيد.

### 3. ربات البيوت
لا يحتجن لتحويل راتب — فقط وجود رصيد في التطبيق كافٍ.

### 4. موظفو القطاع الخاص الذين لا يحولون راتبهم لبنك معين
تابي لا يسأل لأي بنك يذهب راتبك.

### 5. أصحاب المشاريع التجارية
يستطيعون الاستفادة من رصيد تابي بشكل مستقل عن دخلهم التجاري.

## كيف نعمل نحن في مطر — بدون تعقيدات

في مطر، نسيّل رصيد تابي الخاص بك بغض النظر عن:
- وضع تحويل الراتب
- نوع وظيفتك أو مصدر دخلك
- البنك الذي تتعامل معه

الشرط الوحيد لدينا: **أن يكون لديك رصيد متاح في تابي**.

## خطوات السيولة بدون تحويل راتب

1. **تأكد من رصيدك في تابي**: افتح التطبيق وتحقق من الحد المتاح
2. **تواصل معنا على واتساب**: 966503367637
3. **احسب مبلغك في الحاسبة**: نرسل لك رابط الحاسبة لتعرف كم ستستلم
4. **نفّذ خطوات الفحص في المتجر**: نرشدك خطوة بخطوة
5. **استلم كاشك خلال ساعة**

## أسئلة شائعة

### هل يمكنني الحصول على سيولة تابي وأنا غير موظف؟
نعم. إذا كان لديك رصيد في تابي، يمكن تسييله بغض النظر عن وضعك الوظيفي.

### ماذا لو كان راتبي لا يكفي لأقساط تابي لاحقاً؟
هذا قرارك الشخصي. نحن نسيّل الرصيد المتاح لديك، وأنت مسؤول عن تسديد الأقساط لاحقاً لتابي.

### هل تابي يسأل عن سبب الاستخدام؟
لا. تابي لا يسأل لماذا تستخدم رصيدك، سواء للتسوق أو للسيولة.

## الخلاصة

سيولة تابي لا تشترط تحويل الراتب ولا إثبات الدخل. طالما لديك رصيد متاح في تابي، يمكنك تسييله والحصول على كاش في حسابك خلال ساعة — بغض النظر عن وظيفتك أو راتبك.

تواصل معنا الآن وأخبرنا رصيدك المتاح في تابي:

- **واتساب**: 0503367637
- **انستقرام**: @liilsa.sol
    `},"كم-عمولة-تسييل-تابي-وتمارا":{title:"كم عمولة تسييل تابي وتمارا؟ — الأرقام الحقيقية 2026",description:"تعرف على الرسوم الفعلية لتسييل تابي وتمارا: عمولة الشراء، فرق البيع، الرسوم الإدارية، وكيف تحسب صافي السيولة.",category:"الرسوم",readTime:"6 دقائق",date:"2026-02-15",keywords:["عمولة تسييل تابي","رسوم سيولة تمارا","كم تكلف سيولة تابي","نسبة تسييل تابي"],content:`
## كم تكلف سيولة تابي أو تمارا فعلاً؟

من أكثر الأسئلة التي نتلقاها: "كم العمولة؟" و"كيف تحسب؟" و"هل فيه رسوم خفية؟". في هذا المقال نكشف كل الأرقام بشفافية كاملة — لأننا نؤمن أن العميل يستحق يعرف كم سيستلم قبل أن يبدأ.

## مكونات الرسوم الثلاثة

عملية تسييل تابي أو تمارا تشمل ثلاثة خصومات رئيسية:

### 1. فرق البيع (10% — 15%)
عند شراء منتج من نون أو اكسترا أو جرير بقيمة X ريال، نبيع هذا المنتج بسعر أقل في السوق. هذا الفرق يُسمى "فرق البيع" وهو يتراوح بين 10% و15% حسب قيمة الشراء.

### 2. الرسوم الإدارية (10% ثابتة)
رسوم خدمة التسييل والتنفيذ. هذه نسبة ثابتة لا تتغير بغض النظر عن المبلغ.

### 3. الدفعة الأولى (25%) — نتكفل بها عنك
تابي وتمارا يشترطان دفع 25% من قيمة الشراء فوراً. نحن نتكفل بدفعها عنك، ونخصمها من مبلغ البيع.

## جدول فرق البيع التفصيلي

| مبلغ الشراء | فرق البيع |
|------------|-----------|
| أقل من 5,500 ريال | 15% |
| 5,500 — 6,499 ريال | 14% |
| 6,500 — 7,499 ريال | 13% |
| 7,500 — 8,499 ريال | 12% |
| 8,500 — 9,499 ريال | 11% |
| 9,500 ريال فأكثر | 10% (ثابت) |

**المبدأ**: كلما زاد المبلغ، انخفض فرق البيع. المبالغ الأعلى أكثر كفاءة.

## أمثلة حسابية مفصلة

### مثال 1: مبلغ 4,000 ريال
- فرق البيع 15%: 4,000 \xd7 15% = **600 ريال**
- مبلغ البيع: 4,000 - 600 = 3,400 ريال
- الدفعة الأولى 25%: 4,000 \xd7 25% = **1,000 ريال**
- الرسوم الإدارية 10%: 4,000 \xd7 10% = **400 ريال**
- **المبلغ الذي تستلمه**: 3,400 - 1,000 - 400 = **2,000 ريال**
- **إجمالي التكلفة**: 2,000 ريال (50% من مبلغ الشراء)

### مثال 2: مبلغ 7,000 ريال
- فرق البيع 13%: 7,000 \xd7 13% = **910 ريال**
- مبلغ البيع: 7,000 - 910 = 6,090 ريال
- الدفعة الأولى 25%: 7,000 \xd7 25% = **1,750 ريال**
- الرسوم الإدارية 10%: 7,000 \xd7 10% = **700 ريال**
- **المبلغ الذي تستلمه**: 6,090 - 1,750 - 700 = **3,640 ريال**
- **إجمالي التكلفة**: 3,360 ريال (48% من مبلغ الشراء)

### مثال 3: مبلغ 10,000 ريال
- فرق البيع 12%: 10,000 \xd7 12% = **1,200 ريال**
- مبلغ البيع: 10,000 - 1,200 = 8,800 ريال
- الدفعة الأولى 25%: 10,000 \xd7 25% = **2,500 ريال**
- الرسوم الإدارية 10%: 10,000 \xd7 10% = **1,000 ريال**
- **المبلغ الذي تستلمه**: 8,800 - 2,500 - 1,000 = **5,300 ريال**
- **إجمالي التكلفة**: 4,700 ريال (47% من مبلغ الشراء)

### مثال 4: مبلغ 15,000 ريال
- فرق البيع 10%: 15,000 \xd7 10% = **1,500 ريال**
- مبلغ البيع: 15,000 - 1,500 = 13,500 ريال
- الدفعة الأولى 25%: 15,000 \xd7 25% = **3,750 ريال**
- الرسوم الإدارية 10%: 15,000 \xd7 10% = **1,500 ريال**
- **المبلغ الذي تستلمه**: 13,500 - 3,750 - 1,500 = **8,250 ريال**
- **إجمالي التكلفة**: 6,750 ريال (45% من مبلغ الشراء)

## مقارنة مع السوق

### مزودو السيولة في السوق:
| المزود | فرق البيع | الرسوم الإدارية | الشفافية |
|--------|-----------|----------------|---------|
| مطر | 10% — 15% | 10% | حاسبة واضحة |
| مزودون آخرون | غير معلن | غير معلن | لا حاسبة |
| المطالبون بـ"بدون رسوم" | مشكوك به | مخفية | لا شفافية |

**تحذير**: من يقول "بدون رسوم" أو "تحصل على 90%+" من المبلغ — هذا غير واقعي. كل عملية تسييل لها تكلفة حقيقية، والأفضل من يكون شفافاً فيها.

## لماذا التكلفة تبدو عالية؟

يسأل البعض: لماذا لا أحصل على 80% أو 90% من المبلغ؟

الجواب صريح:
- **فرق البيع حقيقي**: المنتجات تباع فعلاً بأقل من سعر الشراء في السوق المفتوحة
- **الدفعة الأولى مكلفة**: 25% من قيمة الشراء ندفعها فوراً عنك
- **الرسوم الإدارية**: مقابل التنفيذ، المتابعة، والضمان

هذه ليست أرباحاً مبالغاً فيها — هذه التكلفة الفعلية للخدمة.

## نصيحة للحصول على أفضل سعر

1. **ارفع المبلغ قدر الإمكان**: فرق البيع ينخفض كلما زاد المبلغ
2. **استخدم حاسبة مطر**: تعرف بالضبط كم ستستلم قبل البدء
3. **استخدم تابي وتمارا معاً**: سيولة أكبر = نسبة أفضل
4. **لا تعمل مع من يخفي الأرقام**: الشفافية علامة موثوقية

## تواصل معنا واحسب مبلغك الآن

أرسل لنا مبلغ رصيدك في تابي أو تمارا على واتساب، وسنحسب لك المبلغ الصافي الذي ستستلمه بدقة.

- **واتساب**: 0503367637
- **انستقرام**: @liilsa.sol
- **الحاسبة**: متاحة على موقع مطر مجاناً
    `}};async function o(){return Object.keys(n).map(a=>({slug:a}))}async function p({params:a}){let{slug:b}=await a,c=n[b];return c?{title:c.title,description:c.description,keywords:c.keywords.join(", "),openGraph:{title:c.title,description:c.description,type:"article",publishedTime:c.date,siteName:"مطر"},alternates:{canonical:`https://liilsol.com/articles/${b}`}}:{title:"المقال غير موجود - مطر"}}async function q({params:a}){let{slug:o}=await a,p=n[o];p||(0,l.notFound)();let q={"@context":"https://schema.org","@type":"Article",headline:p.title,description:p.description,datePublished:p.date,dateModified:p.date,author:{"@type":"Organization",name:"مطر",url:"https://liilsol.com"},publisher:{"@type":"Organization",name:"مطر",url:"https://liilsol.com"},mainEntityOfPage:{"@type":"WebPage","@id":`https://liilsol.com/articles/${o}`},keywords:p.keywords.join(", ")};return(0,b.jsxs)("div",{className:"min-h-screen flex flex-col bg-background",children:[(0,b.jsx)(c.Header,{}),(0,b.jsxs)("main",{className:"flex-1",children:[(0,b.jsxs)("section",{className:"py-12 md:py-20 relative overflow-hidden",children:[(0,b.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"}),(0,b.jsx)("div",{className:"absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"}),(0,b.jsx)("div",{className:"absolute bottom-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"}),(0,b.jsx)("div",{className:"container mx-auto px-4 relative z-10",children:(0,b.jsxs)("div",{className:"max-w-3xl mx-auto",children:[(0,b.jsxs)(k.default,{href:"/articles",className:"inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors",children:[(0,b.jsx)(g.ArrowRight,{className:"w-4 h-4"}),"العودة للمقالات"]}),(0,b.jsx)("span",{className:"inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4",children:p.category}),(0,b.jsx)("h1",{className:"text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-relaxed",children:p.title}),(0,b.jsx)("p",{className:"text-lg text-muted-foreground mb-6 leading-relaxed",children:p.description}),(0,b.jsxs)("div",{className:"flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6",children:[(0,b.jsx)("div",{className:"flex items-center gap-2",children:(0,b.jsx)("span",{className:"font-bold text-primary",children:"مطر"})}),(0,b.jsxs)("div",{className:"flex items-center gap-2",children:[(0,b.jsx)(h.Calendar,{className:"w-4 h-4"}),(0,b.jsx)("span",{children:new Date(p.date).toLocaleDateString("ar-SA")})]}),(0,b.jsxs)("div",{className:"flex items-center gap-2",children:[(0,b.jsx)(i.Clock,{className:"w-4 h-4"}),(0,b.jsx)("span",{children:p.readTime})]})]}),(0,b.jsx)("div",{className:"flex flex-wrap gap-2",children:p.keywords.map((a,c)=>(0,b.jsx)("span",{className:"px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full",children:a},c))})]})})]}),(0,b.jsx)("section",{className:"py-6 bg-card border-y border-border",children:(0,b.jsx)("div",{className:"container mx-auto px-4",children:(0,b.jsxs)("div",{className:"flex justify-center items-center gap-8",children:[(0,b.jsx)(m.default,{src:"https://upload.wikimedia.org/wikipedia/commons/9/9d/Tamara_logo.png",alt:"تمارا",width:100,height:32,className:"opacity-60",style:{width:"auto",height:"32px"}}),(0,b.jsx)(m.default,{src:"https://cdn.tabby.ai/assets/tabby-logo-black.svg",alt:"تابي",width:80,height:32,className:"opacity-60",style:{width:"auto",height:"28px"}})]})})}),(0,b.jsx)("section",{className:"py-12 md:py-16",children:(0,b.jsx)("div",{className:"container mx-auto px-4",children:(0,b.jsxs)("div",{className:"max-w-3xl mx-auto",children:[(0,b.jsx)("article",{className:"prose prose-lg max-w-none",children:(0,b.jsx)("div",{className:"text-foreground leading-relaxed space-y-4",dangerouslySetInnerHTML:{__html:p.content.replace(/## (.*)/g,'<h2 class="text-2xl font-bold text-foreground mt-10 mb-4">$1</h2>').replace(/### (.*)/g,'<h3 class="text-xl font-semibold text-foreground mt-8 mb-3">$1</h3>').replace(/\*\*(.*?)\*\*/g,'<strong class="font-bold text-foreground">$1</strong>').replace(/\| (.*) \| (.*) \|/g,'<tr><td class="border border-border px-4 py-2">$1</td><td class="border border-border px-4 py-2">$2</td></tr>').replace(/<tr>/g,'<table class="w-full border-collapse my-4"><tr>').replace(/<\/tr>(?![\s\S]*<tr>)/g,"</tr></table>").replace(/- (.*)/g,'<li class="text-muted-foreground mr-6 mb-2">$1</li>').replace(/(\d+)\. (.*)/g,'<li class="text-muted-foreground mr-6 mb-2"><span class="font-bold text-primary ml-2">$1.</span>$2</li>').replace(/\n\n/g,'</p><p class="text-muted-foreground leading-relaxed mb-4">')}})}),(0,b.jsxs)("div",{className:"mt-12 p-6 md:p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20",children:[(0,b.jsx)("h3",{className:"text-xl font-bold text-foreground mb-3",children:"جاهز تحصل على سيولة؟"}),(0,b.jsx)("p",{className:"text-muted-foreground mb-6",children:"تواصل معنا الآن واحصل على كاش في حسابك خلال ساعة فقط."}),(0,b.jsxs)("div",{className:"flex flex-col sm:flex-row gap-3",children:[(0,b.jsx)(e.Button,{className:"gap-2 shadow-lg shadow-primary/20",asChild:!0,children:(0,b.jsxs)("a",{href:"https://wa.me/966503367637",children:["واتساب: 0503367637",(0,b.jsx)(f.ArrowLeft,{className:"w-4 h-4"})]})}),(0,b.jsx)(e.Button,{variant:"outline",className:"gap-2 bg-transparent",asChild:!0,children:(0,b.jsx)(k.default,{href:"/#calculator",children:"احسب المبلغ"})})]})]}),(0,b.jsx)("div",{className:"mt-8 pt-8 border-t border-border",children:(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsx)("span",{className:"text-muted-foreground",children:"شارك المقال:"}),(0,b.jsxs)(e.Button,{variant:"outline",size:"sm",className:"gap-2 bg-transparent",children:[(0,b.jsx)(j,{className:"w-4 h-4"}),"مشاركة"]})]})})]})})})]}),(0,b.jsx)(d.Footer,{}),(0,b.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(q)}})]})}a.s(["default",()=>q,"generateMetadata",()=>p,"generateStaticParams",()=>o],15517)}];

//# sourceMappingURL=_6fb580a5._.js.map