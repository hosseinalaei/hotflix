(()=>{var a={};a.id=417,a.ids=[417],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12412:a=>{"use strict";a.exports=require("assert")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},20006:(a,b,c)=>{"use strict";c.d(b,{A:()=>e});var d=c(21124);function e(){return(0,d.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:(0,d.jsx)("div",{className:"h-10 w-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"})})}},21820:a=>{"use strict";a.exports=require("os")},22975:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>D.a,__next_app__:()=>J,handler:()=>L,pages:()=>I,routeModule:()=>K,tree:()=>H});var d=c(49754),e=c(9117),f=c(46595),g=c(32324),h=c(39326),i=c(38928),j=c(20175),k=c(12),l=c(54290),m=c(12696),n=c(82802),o=c(77533),p=c(45229),q=c(32822),r=c(261),s=c(26453),t=c(52474),u=c(26713),v=c(51356),w=c(62685),x=c(36225),y=c(63446),z=c(2762),A=c(45742),B=c(86439),C=c(81170),D=c.n(C),E=c(62506),F=c(91203),G={};for(let a in E)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(G[a]=()=>E[a]);c.d(b,G);let H={children:["",{children:["movie",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,58103)),"/Users/hossein/Documents/GitHub/hotflix/app/movie/[id]/page.tsx"]}]},{}]},{metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,46055))).default(a)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(c.bind(c,45126)),"/Users/hossein/Documents/GitHub/hotflix/app/layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,81170,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,87028,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,90461,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,32768,23)),"next/dist/client/components/builtin/unauthorized.js"],metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,46055))).default(a)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,I=["/Users/hossein/Documents/GitHub/hotflix/app/movie/[id]/page.tsx"],J={require:c,loadChunk:()=>Promise.resolve()},K=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/movie/[id]/page",pathname:"/movie/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:H},distDir:".next",relativeProjectDir:""});async function L(a,b,d){var C;let G="/movie/[id]/page";"/index"===G&&(G="/");let M=(0,h.getRequestMeta)(a,"postponed"),N=(0,h.getRequestMeta)(a,"minimalMode"),O=await K.prepare(a,b,{srcPage:G,multiZoneDraftMode:!1});if(!O)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:P,query:Q,params:R,parsedUrl:S,pageIsDynamic:T,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,serverActionsManifest:X,clientReferenceManifest:Y,subresourceIntegrityManifest:Z,prerenderManifest:$,isDraftMode:_,resolvedPathname:aa,revalidateOnlyGenerated:ab,routerServerContext:ac,nextConfig:ad,interceptionRoutePatterns:ae}=O,af=S.pathname||"/",ag=(0,r.normalizeAppPath)(G),{isOnDemandRevalidate:ah}=O,ai=K.match(af,$),aj=!!$.routes[aa],ak=!!(ai||aj||$.routes[ag]),al=a.headers["user-agent"]||"",am=(0,u.getBotType)(al),an=(0,p.isHtmlBotRequest)(a),ao=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[t.NEXT_ROUTER_PREFETCH_HEADER],ap=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[t.RSC_HEADER],aq=(0,s.getIsPossibleServerAction)(a),ar=(0,m.checkIsAppPPREnabled)(ad.experimental.ppr)&&(null==(C=$.routes[ag]??$.dynamicRoutes[ag])?void 0:C.renderingMode)==="PARTIALLY_STATIC",as=!1,at=!1,au=ar?M:void 0,av=ar&&ap&&!ao,aw=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),ax=!al||(0,p.shouldServeStreamingMetadata)(al,ad.htmlLimitedBots);an&&ar&&(ak=!1,ax=!1);let ay=!0===K.isDev||!ak||"string"==typeof M||av,az=an&&ar,aA=null;_||!ak||ay||aq||au||av||(aA=aa);let aB=aA;!aB&&K.isDev&&(aB=aa),K.isDev||_||!ak||!ap||av||(0,k.d)(a.headers);let aC={...E,tree:H,pages:I,GlobalError:D(),handler:L,routeModule:K,__next_app__:J};X&&Y&&(0,o.setReferenceManifestsSingleton)({page:G,clientReferenceManifest:Y,serverActionsManifest:X,serverModuleMap:(0,q.createServerModuleMap)({serverActionsManifest:X})});let aD=a.method||"GET",aE=(0,g.getTracer)(),aF=aE.getActiveScopeSpan();try{let f=K.getVaryHeader(aa,ae);b.setHeader("Vary",f);let k=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return K.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aE.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aD} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aD} ${a.url}`)})},m=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:Q,params:R,page:ag,sharedContext:{buildId:P},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aC,Component:(0,j.T)(aC),params:R,routeModule:K,page:G,postponed:f,shouldWaitOnAllReady:az,serveStreamingMetadata:ax,supportsDynamicResponse:"string"==typeof f||ay,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,subresourceIntegrityManifest:Z,serverActionsManifest:X,clientReferenceManifest:Y,setIsrStatus:null==ac?void 0:ac.setIsrStatus,dir:c(33873).join(process.cwd(),K.relativeProjectDir),isDraftMode:_,isRevalidate:ak&&!f&&!av,botType:am,isOnDemandRevalidate:ah,isPossibleServerAction:aq,assetPrefix:ad.assetPrefix,nextConfigOutput:ad.output,crossOrigin:ad.crossOrigin,trailingSlash:ad.trailingSlash,previewProps:$.preview,deploymentId:ad.deploymentId,enableTainting:ad.experimental.taint,htmlLimitedBots:ad.htmlLimitedBots,devtoolSegmentExplorer:ad.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ad.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ad.experimental.cacheLife,basePath:ad.basePath,serverActions:ad.experimental.serverActions,...as?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:as}:{},experimental:{isRoutePPREnabled:ar,expireTime:ad.expireTime,staleTimes:ad.experimental.staleTimes,cacheComponents:!!ad.experimental.cacheComponents,clientSegmentCache:!!ad.experimental.clientSegmentCache,clientParamParsing:!!ad.experimental.clientParamParsing,dynamicOnHover:!!ad.experimental.dynamicOnHover,inlineCss:!!ad.experimental.inlineCss,authInterrupts:!!ad.experimental.authInterrupts,clientTraceMetadata:ad.experimental.clientTraceMetadata||[]},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>K.onRequestError(a,b,d,ac),err:(0,h.getRequestMeta)(a,"invokeError"),dev:K.isDev}},l=await k(e,i),{metadata:m}=l,{cacheControl:n,headers:o={},fetchTags:p}=m;if(p&&(o[y.NEXT_CACHE_TAGS_HEADER]=p),a.fetchMetrics=m.fetchMetrics,ak&&(null==n?void 0:n.revalidate)===0&&!K.isDev&&!ar){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${aa}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:v.CachedRouteKind.APP_PAGE,html:l,headers:o,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},o=async({hasResolved:c,previousCacheEntry:f,isRevalidating:g,span:i})=>{let j,k=!1===K.isDev,l=c||b.writableEnded;if(ah&&ab&&!f&&!N)return(null==ac?void 0:ac.render404)?await ac.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ai&&(j=(0,w.parseFallbackField)(ai.fallback)),j===w.FallbackMode.PRERENDER&&(0,u.isBot)(al)&&(!ar||an)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),(null==f?void 0:f.isStale)===-1&&(ah=!0),ah&&(j!==w.FallbackMode.NOT_FOUND||f)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),!N&&j!==w.FallbackMode.BLOCKING_STATIC_RENDER&&aB&&!l&&!_&&T&&(k||!aj)){let b;if((k||ai)&&j===w.FallbackMode.NOT_FOUND)throw new B.NoFallbackError;if(ar&&!ap){let c="string"==typeof(null==ai?void 0:ai.fallback)?ai.fallback:k?ag:null;if(b=await K.handleResponse({cacheKey:c,req:a,nextConfig:ad,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:$,isRoutePPREnabled:ar,responseGenerator:async()=>m({span:i,postponed:void 0,fallbackRouteParams:k||at?(0,n.u)(ag):null}),waitUntil:d.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=ah||g||!au?void 0:au;if(as&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:v.CachedRouteKind.PAGES,html:x.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let p=T&&ar&&((0,h.getRequestMeta)(a,"renderFallbackShell")||at)?(0,n.u)(af):null;return m({span:i,postponed:o,fallbackRouteParams:p})},p=async c=>{var f,g,i,j,k;let l,n=await K.handleResponse({cacheKey:aA,responseGenerator:a=>o({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ah,isRoutePPREnabled:ar,req:a,nextConfig:ad,prerenderManifest:$,waitUntil:d.waitUntil});if(_&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),K.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!n){if(aA)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=n.value)?void 0:f.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=n.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof n.value.postponed;ak&&!av&&(!p||ao)&&(N||b.setHeader("x-nextjs-cache",ah?"REVALIDATED":n.isMiss?"MISS":n.isStale?"STALE":"HIT"),b.setHeader(t.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=n;if(au)l={revalidate:0,expire:void 0};else if(N&&ap&&!ao&&ar)l={revalidate:0,expire:void 0};else if(!K.isDev)if(_)l={revalidate:0,expire:void 0};else if(ak){if(n.cacheControl)if("number"==typeof n.cacheControl.revalidate){if(n.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${n.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:n.cacheControl.revalidate,expire:(null==(j=n.cacheControl)?void 0:j.expire)??ad.expireTime}}else l={revalidate:y.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(n.cacheControl=l,"string"==typeof aw&&(null==q?void 0:q.kind)===v.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=q.headers)?void 0:k[y.NEXT_CACHE_TAGS_HEADER];N&&ak&&c&&"string"==typeof c&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(aw);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(d,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.EMPTY,cacheControl:n.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...n,value:{...n.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&au)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(N&&ak||delete a[y.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let s=null==(g=q.headers)?void 0:g[y.NEXT_CACHE_TAGS_HEADER];if(N&&ak&&s&&"string"==typeof s&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,s),!q.status||ap&&ar||(b.statusCode=q.status),!N&&q.status&&F.RedirectStatusCode[q.status]&&ap&&(b.statusCode=200),p&&b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"1"),ap&&!_){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:q.html,cacheControl:av?{revalidate:0,expire:void 0}:n.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(q.rscData,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl})}let u=q.html;if(!p||N||ap)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:n.cacheControl});if(as)return u.push(new ReadableStream({start(a){a.enqueue(z.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}});let w=new TransformStream;return u.push(w.readable),m({span:c,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(w.writable)}).catch(a=>{w.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}})};if(!aF)return await aE.withPropagatedContext(a.headers,()=>aE.trace(i.BaseServerSpan.handleRequest,{spanName:`${aD} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aD,"http.target":a.url}},p));await p(aF)}catch(b){throw aF||b instanceof B.NoFallbackError||await K.onRequestError(a,b,{routerKind:"App Router",routePath:G,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ak,isOnDemandRevalidate:ah})},ac),b}}},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},27910:a=>{"use strict";a.exports=require("stream")},28354:a=>{"use strict";a.exports=require("util")},29021:a=>{"use strict";a.exports=require("fs")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},49613:(a,b,c)=>{Promise.resolve().then(c.bind(c,73314))},55511:a=>{"use strict";a.exports=require("crypto")},55591:a=>{"use strict";a.exports=require("https")},58103:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>d});let d=(0,c(97954).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/hossein/Documents/GitHub/hotflix/app/movie/[id]/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/hossein/Documents/GitHub/hotflix/app/movie/[id]/page.tsx","default")},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},68173:(a,b,c)=>{Promise.resolve().then(c.bind(c,58103))},73314:(a,b,c)=>{"use strict";let d,e,f,g,h;c.r(b),c.d(b,{default:()=>iU});var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a$,a_,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD,bE,bF,bG,bH,bI,bJ,bK,bL,bM,bN,bO,bP,bQ,bR,bS,bT,bU,bV,bW,bX,bY,bZ,b$,b_,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,cv,cw,cx,cy,cz,cA,cB,cC,cD,cE,cF,cG,cH,cI,cJ,cK,cL,cM,cN,cO,cP,cQ,cR,cS,cT,cU,cV,cW,cX,cY,cZ,c$,c_,c0,c1,c2,c3,c4,c5,c6,c7=c(21124),c8=c(21393),c9=c(15104),da=c(42378),db=c(38301);let dc={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},dd={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},de={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},df=Object.entries(de),dg=df.reduce((a,[b,c])=>(a[b]=c.toLowerCase(),a),{}),dh=df.reduce((a,[b,c])=>(a[b]=c.toLowerCase(),a),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(dh).reduce((a,[b,c])=>{let d=dg[b];return d&&(a[c]=d),a},{userinactivechange:"userinactive"});let di=Object.entries(dg).reduce((a,[b,c])=>{let d=dh[b];return d&&(a[c]=d),a},{userinactive:"userinactivechange"}),dj={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},dk={DISABLED:"disabled",SHOWING:"showing"},dl={MOUSE:"mouse",TOUCH:"touch"},dm={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},dn={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},dp={FULLSCREEN:"fullscreen"};function dq(a){if(a){let{id:b,width:c,height:d}=a;return[b,c,d].filter(a=>null!=a).join(":")}}function dr(a){if(a){let[b,c,d]=a.split(":");return{id:b,width:+c,height:+d}}}function ds(a){if(a){let{id:b,kind:c,language:d,label:e}=a;return[b,c,d,e].filter(a=>null!=a).join(":")}}function dt(a){if(a){let[b,c,d,e]=a.split(":");return{id:b,kind:c,language:d,label:e}}}function du(a){return"number"==typeof a&&!Number.isNaN(a)&&Number.isFinite(a)}function dv(a){return"string"==typeof a&&!isNaN(a)&&!isNaN(parseFloat(a))}let dw=a=>new Promise(b=>setTimeout(b,a)),dx=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],dy=a=>{if(!du(a))return"";let b=Math.abs(a),c=b!==a,d=new Date(0,0,0,0,0,b,0),e=[d.getHours(),d.getMinutes(),d.getSeconds()].map((a,b)=>a&&((a,b)=>{let c=1===a?dx[b].singular:dx[b].plural;return`${a} ${c}`})(a,b)).filter(a=>a).join(", ");return`${e}${c?" remaining":""}`};function dz(a,b){let c=!1;a<0&&(c=!0,a=0-a);let d=Math.floor((a=a<0?0:a)%60),e=Math.floor(a/60%60),f=Math.floor(a/3600),g=Math.floor(b/60%60),h=Math.floor(b/3600);return(isNaN(a)||a===1/0)&&(f=e=d="0"),e=(((f=f>0||h>0?f+":":"")||g>=10)&&e<10?"0"+e:e)+":",(c?"-":"")+f+e+(d=d<10?"0"+d:d)}Object.freeze({length:0,start(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});let dA={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},dB=(null==(i=globalThis.navigator)?void 0:i.language)||"en",dC=(a,b={})=>(a=>{var b,c,d;let[e]=dB.split("-");return(null==(b=dA[dB])?void 0:b[a])||(null==(c=dA[e])?void 0:c[a])||(null==(d=dA.en)?void 0:d[a])||a})(a).replace(/\{(\w+)\}/g,(a,c)=>c in b?String(b[c]):`{${c}}`);class dD{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class dE extends dD{}class dF extends dE{constructor(){super(...arguments),this.role=null}}class dG{observe(){}unobserve(){}disconnect(){}}let dH={createElement:function(){return new dI.HTMLElement},createElementNS:function(){return new dI.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:a=>!1},dI={ResizeObserver:dG,document:dH,Node:dE,Element:dF,HTMLElement:class extends dF{constructor(){super(...arguments),this.innerHTML=""}get content(){return new dI.DocumentFragment}},DocumentFragment:class extends dD{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:a=>null,setItem(a,b){},removeItem(a){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:a=>({matches:!1,media:a}),DOMParser:class{parseFromString(a,b){return{body:{textContent:a}}}}},dJ="undefined"==typeof window||void 0===window.customElements,dK=Object.keys(dI).every(a=>a in globalThis),dL=dJ&&!dK?dI:globalThis,dM=dJ&&!dK?dH:globalThis.document,dN=new WeakMap,dO=a=>{let b=dN.get(a);return b||dN.set(a,b=new Set),b},dP=new dL.ResizeObserver(a=>{for(let b of a)for(let a of dO(b.target))a(b)});function dQ(a,b){dO(a).add(b),dP.observe(a)}function dR(a,b){let c=dO(a);c.delete(b),c.size||dP.unobserve(a)}function dS(a){let b={};for(let c of a)b[c.name]=c.value;return b}function dT(a){var b;return null!=(b=dU(a))?b:dY(a,"media-controller")}function dU(a){var b;let{MEDIA_CONTROLLER:c}=dd,d=a.getAttribute(c);if(d)return null==(b=d$(a))?void 0:b.getElementById(d)}let dV=(a,b,c=".value")=>{let d=a.querySelector(c);d&&(d.textContent=b)},dW=(a,b)=>((a,b)=>{let c=`slot[name="${b}"]`,d=a.shadowRoot.querySelector(c);return d?d.children:[]})(a,b)[0],dX=(a,b)=>!!a&&!!b&&(null!=a&&!!a.contains(b)||dX(a,b.getRootNode().host)),dY=(a,b)=>{if(!a)return null;let c=a.closest(b);return c||dY(a.getRootNode().host,b)};function dZ(a=document){var b;let c=null==a?void 0:a.activeElement;return c?null!=(b=dZ(c.shadowRoot))?b:c:null}function d$(a){var b;let c=null==(b=null==a?void 0:a.getRootNode)?void 0:b.call(a);return c instanceof ShadowRoot||c instanceof Document?c:null}function d_(a,{depth:b=3,checkOpacity:c=!0,checkVisibilityCSS:d=!0}={}){if(a.checkVisibility)return a.checkVisibility({checkOpacity:c,checkVisibilityCSS:d});let e=a;for(;e&&b>0;){let a=getComputedStyle(e);if(c&&"0"===a.opacity||d&&"hidden"===a.visibility||"none"===a.display)return!1;e=e.parentElement,b--}return!0}function d0(a,b){let c=function(a,b){var c,d;let e;for(e of null!=(c=a.querySelectorAll("style:not([media])"))?c:[]){let a;try{a=null==(d=e.sheet)?void 0:d.cssRules}catch{continue}for(let c of null!=a?a:[])if(b(c.selectorText))return c}}(a,a=>a===b);return c||d1(a,b)}function d1(a,b){var c,d;let e=null!=(c=a.querySelectorAll("style:not([media])"))?c:[],f=null==e?void 0:e[e.length-1];return(null==f?void 0:f.sheet)?(null==f||f.sheet.insertRule(`${b}{}`,f.sheet.cssRules.length),null==(d=f.sheet.cssRules)?void 0:d[f.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",a),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function d2(a,b,c=NaN){let d=a.getAttribute(b);return null!=d?+d:c}function d3(a,b,c){let d=+c;if(null==c||Number.isNaN(d)){a.hasAttribute(b)&&a.removeAttribute(b);return}d2(a,b,void 0)!==d&&a.setAttribute(b,`${d}`)}function d4(a,b){return a.hasAttribute(b)}function d5(a,b,c){if(null==c){a.hasAttribute(b)&&a.removeAttribute(b);return}d4(a,b)!=c&&a.toggleAttribute(b,c)}function d6(a,b,c=null){var d;return null!=(d=a.getAttribute(b))?d:c}function d7(a,b,c){if(null==c){a.hasAttribute(b)&&a.removeAttribute(b);return}let d=`${c}`;d6(a,b,void 0)!==d&&a.setAttribute(b,d)}var d8=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},d9=(a,b,c)=>(d8(a,b,"read from private field"),c?c.call(a):b.get(a)),ea=(a,b,c,d)=>(d8(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class eb extends dL.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,j,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[dd.MEDIA_CONTROLLER,dg.MEDIA_PAUSED]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===dd.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=d9(this,j))?void 0:d.unassociateElement)||e.call(d,this),ea(this,j,null)),c&&this.isConnected&&(ea(this,j,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=d9(this,j))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c,d;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),ea(this,j,function(a){var b;let c=a.getAttribute(dd.MEDIA_CONTROLLER);return c?null==(b=a.getRootNode())?void 0:b.getElementById(c):dY(a,"media-controller")}(this)),this.getAttribute(dd.MEDIA_CONTROLLER)&&(null==(b=null==(a=d9(this,j))?void 0:a.associateElement)||b.call(a,this)),null==(c=d9(this,j))||c.addEventListener("pointerdown",this),null==(d=d9(this,j))||d.addEventListener("click",this)}disconnectedCallback(){var a,b,c,d;this.getAttribute(dd.MEDIA_CONTROLLER)&&(null==(b=null==(a=d9(this,j))?void 0:a.unassociateElement)||b.call(a,this)),null==(c=d9(this,j))||c.removeEventListener("pointerdown",this),null==(d=d9(this,j))||d.removeEventListener("click",this),ea(this,j,null)}handleEvent(a){var b;let c=null==(b=a.composedPath())?void 0:b[0];if(["video","media-controller"].includes(null==c?void 0:c.localName)){if("pointerdown"===a.type)this._pointerType=a.pointerType;else if("click"===a.type){let{clientX:b,clientY:c}=a,{left:d,top:e,width:f,height:g}=this.getBoundingClientRect(),h=b-d,i=c-e;if(h<0||i<0||h>f||i>g||0===f&&0===g)return;let j=this._pointerType||"mouse";if(this._pointerType=void 0,j===dl.TOUCH)return void this.handleTap(a);if(j===dl.MOUSE)return void this.handleMouseClick(a)}}}get mediaPaused(){return d4(this,dg.MEDIA_PAUSED)}set mediaPaused(a){d5(this,dg.MEDIA_PAUSED,a)}handleTap(a){}handleMouseClick(a){let b=this.mediaPaused?dc.MEDIA_PLAY_REQUEST:dc.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new dL.CustomEvent(b,{composed:!0,bubbles:!0}))}}j=new WeakMap,eb.shadowRootOptions={mode:"open"},eb.getTemplateHTML=function(a){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},dL.customElements.get("media-gesture-receiver")||dL.customElements.define("media-gesture-receiver",eb);var ec=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},ed=(a,b,c)=>(ec(a,b,"read from private field"),c?c.call(a):b.get(a)),ee=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},ef=(a,b,c,d)=>(ec(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),eg=(a,b,c)=>(ec(a,b,"access private method"),c);let eh={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"},ei=Object.values(dg);function ej(a,b){var c,d,e;if(!a.isConnected)return;let f=Object.fromEntries((null!=(c=a.getAttribute(eh.BREAKPOINTS))?c:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(a=>a.split(":"))),g=(d=f,e=b,Object.keys(d).filter(a=>e>=parseInt(d[a]))),h=!1;if(Object.keys(f).forEach(b=>{if(g.includes(b)){a.hasAttribute(`breakpoint${b}`)||(a.setAttribute(`breakpoint${b}`,""),h=!0);return}a.hasAttribute(`breakpoint${b}`)&&(a.removeAttribute(`breakpoint${b}`),h=!0)}),h){let b=new CustomEvent(dh.BREAKPOINTS_CHANGE,{detail:g});a.dispatchEvent(b)}a.breakpointsComputed||(a.breakpointsComputed=!0,a.dispatchEvent(new CustomEvent(dh.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class ek extends dL.HTMLElement{constructor(){if(super(),ee(this,p),ee(this,t),ee(this,v),ee(this,x),ee(this,z),ee(this,B),ee(this,k,0),ee(this,l,null),ee(this,m,null),ee(this,n,void 0),this.breakpointsComputed=!1,ee(this,o,new MutationObserver(eg(this,p,q).bind(this))),ee(this,r,!1),ee(this,s,a=>{ed(this,r)||(setTimeout(()=>{!function(a){ej(a.target,a.contentRect.width)}(a),ef(this,r,!1)},0),ef(this,r,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dS(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}let a=this.querySelector(":scope > slot[slot=media]");a&&a.addEventListener("slotchange",()=>{if(!a.assignedElements({flatten:!0}).length){ed(this,l)&&this.mediaUnsetCallback(ed(this,l));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[eh.AUTOHIDE,eh.GESTURES_DISABLED].concat(ei).filter(a=>![dg.MEDIA_RENDITION_LIST,dg.MEDIA_AUDIO_TRACK_LIST,dg.MEDIA_CHAPTERS_CUES,dg.MEDIA_WIDTH,dg.MEDIA_HEIGHT,dg.MEDIA_ERROR,dg.MEDIA_ERROR_MESSAGE].includes(a))}attributeChangedCallback(a,b,c){a.toLowerCase()==eh.AUTOHIDE&&(this.autohide=c)}get media(){let a=this.querySelector(":scope > [slot=media]");return(null==a?void 0:a.nodeName)=="SLOT"&&(a=a.assignedElements({flatten:!0})[0]),a}async handleMediaUpdated(a){a&&(ef(this,l,a),a.localName.includes("-")&&await dL.customElements.whenDefined(a.localName),this.mediaSetCallback(a))}connectedCallback(){var a;ed(this,o).observe(this,{childList:!0,subtree:!0}),dQ(this,ed(this,s));let b=null!=this.getAttribute(eh.AUDIO)?dC("audio player"):dC("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",b),this.handleMediaUpdated(this.media),this.setAttribute(eh.USER_INACTIVE,""),ej(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(a=dL.window)||a.addEventListener("mouseup",this)}disconnectedCallback(){var a;ed(this,o).disconnect(),dR(this,ed(this,s)),this.media&&this.mediaUnsetCallback(this.media),null==(a=dL.window)||a.removeEventListener("mouseup",this)}mediaSetCallback(a){}mediaUnsetCallback(a){ef(this,l,null)}handleEvent(a){switch(a.type){case"pointerdown":ef(this,k,a.timeStamp);break;case"pointermove":eg(this,t,u).call(this,a);break;case"pointerup":eg(this,v,w).call(this,a);break;case"mouseleave":eg(this,x,y).call(this);break;case"mouseup":this.removeAttribute(eh.KEYBOARD_CONTROL);break;case"keyup":eg(this,B,C).call(this),this.setAttribute(eh.KEYBOARD_CONTROL,"")}}set autohide(a){let b=Number(a);ef(this,n,isNaN(b)?0:b)}get autohide(){return(void 0===ed(this,n)?2:ed(this,n)).toString()}get breakpoints(){return d6(this,eh.BREAKPOINTS)}set breakpoints(a){d7(this,eh.BREAKPOINTS,a)}get audio(){return d4(this,eh.AUDIO)}set audio(a){d5(this,eh.AUDIO,a)}get gesturesDisabled(){return d4(this,eh.GESTURES_DISABLED)}set gesturesDisabled(a){d5(this,eh.GESTURES_DISABLED,a)}get keyboardControl(){return d4(this,eh.KEYBOARD_CONTROL)}set keyboardControl(a){d5(this,eh.KEYBOARD_CONTROL,a)}get noAutohide(){return d4(this,eh.NO_AUTOHIDE)}set noAutohide(a){d5(this,eh.NO_AUTOHIDE,a)}get autohideOverControls(){return d4(this,eh.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(a){d5(this,eh.AUTOHIDE_OVER_CONTROLS,a)}get userInteractive(){return d4(this,eh.USER_INACTIVE)}set userInteractive(a){d5(this,eh.USER_INACTIVE,a)}}k=new WeakMap,l=new WeakMap,m=new WeakMap,n=new WeakMap,o=new WeakMap,p=new WeakSet,q=function(a){let b=this.media;for(let c of a)if("childList"===c.type){for(let a of c.removedNodes){if("media"!=a.slot||c.target!=this)continue;let d=c.previousSibling&&c.previousSibling.previousElementSibling;if(d&&b){let b="media"!==d.slot;for(;null!==(d=d.previousSibling);)"media"==d.slot&&(b=!1);b&&this.mediaUnsetCallback(a)}else this.mediaUnsetCallback(a)}if(b)for(let a of c.addedNodes)a===b&&this.handleMediaUpdated(b)}},r=new WeakMap,s=new WeakMap,t=new WeakSet,u=function(a){if("mouse"!==a.pointerType&&a.timeStamp-ed(this,k)<250)return;eg(this,z,A).call(this),clearTimeout(ed(this,m));let b=this.hasAttribute(eh.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(a.target)||b)&&eg(this,B,C).call(this)},v=new WeakSet,w=function(a){if("touch"===a.pointerType){let b=!this.hasAttribute(eh.USER_INACTIVE);[this,this.media].includes(a.target)&&b?eg(this,x,y).call(this):eg(this,B,C).call(this)}else a.composedPath().some(a=>["media-play-button","media-fullscreen-button"].includes(null==a?void 0:a.localName))&&eg(this,B,C).call(this)},x=new WeakSet,y=function(){if(0>ed(this,n)||this.hasAttribute(eh.USER_INACTIVE))return;this.setAttribute(eh.USER_INACTIVE,"");let a=new dL.CustomEvent(dh.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(a)},z=new WeakSet,A=function(){if(!this.hasAttribute(eh.USER_INACTIVE))return;this.removeAttribute(eh.USER_INACTIVE);let a=new dL.CustomEvent(dh.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(a)},B=new WeakSet,C=function(){eg(this,z,A).call(this),clearTimeout(ed(this,m));let a=parseInt(this.autohide);a<0||ef(this,m,setTimeout(()=>{eg(this,x,y).call(this)},1e3*a))},ek.shadowRootOptions={mode:"open"},ek.getTemplateHTML=function(a){return`
    <style>
      
      :host([${dg.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${eh.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${eh.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${eh.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${eh.AUDIO}])[${eh.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${eh.AUDIO}])[${eh.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${eh.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${eh.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${eh.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${eh.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${eh.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${eh.USER_INACTIVE}]:not([${dg.MEDIA_PAUSED}]):not([${dg.MEDIA_IS_AIRPLAYING}]):not([${dg.MEDIA_IS_CASTING}]):not([${eh.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${eh.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${eh.USER_INACTIVE}]:not([${eh.NO_AUTOHIDE}]):not([${dg.MEDIA_PAUSED}]):not([${dg.MEDIA_IS_CASTING}]):not([${eh.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${eh.USER_INACTIVE}][${eh.AUTOHIDE_OVER_CONTROLS}]:not([${eh.NO_AUTOHIDE}]):not([${dg.MEDIA_PAUSED}]):not([${dg.MEDIA_IS_CASTING}]):not([${eh.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${eh.AUDIO}])[${dg.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${eb.shadowRootOptions.mode}">
          ${eb.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},dL.customElements.get("media-container")||dL.customElements.define("media-container",ek);var el=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},em=(a,b,c)=>(el(a,b,"read from private field"),c?c.call(a):b.get(a)),en=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},eo=(a,b,c,d)=>(el(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class ep{constructor(a,b,{defaultValue:c}={defaultValue:void 0}){en(this,H),en(this,D,void 0),en(this,E,void 0),en(this,F,void 0),en(this,G,new Set),eo(this,D,a),eo(this,E,b),eo(this,F,new Set(c))}[Symbol.iterator](){return em(this,H,I).values()}get length(){return em(this,H,I).size}get value(){var a;return null!=(a=[...em(this,H,I)].join(" "))?a:""}set value(a){var b;a!==this.value&&(eo(this,G,new Set),this.add(...null!=(b=null==a?void 0:a.split(" "))?b:[]))}toString(){return this.value}item(a){return[...em(this,H,I)][a]}values(){return em(this,H,I).values()}forEach(a,b){em(this,H,I).forEach(a,b)}add(...a){var b,c;a.forEach(a=>em(this,G).add(a)),(""!==this.value||(null==(b=em(this,D))?void 0:b.hasAttribute(`${em(this,E)}`)))&&(null==(c=em(this,D))||c.setAttribute(`${em(this,E)}`,`${this.value}`))}remove(...a){var b;a.forEach(a=>em(this,G).delete(a)),null==(b=em(this,D))||b.setAttribute(`${em(this,E)}`,`${this.value}`)}contains(a){return em(this,H,I).has(a)}toggle(a,b){if(void 0!==b)if(b)return this.add(a),!0;else return this.remove(a),!1;return this.contains(a)?(this.remove(a),!1):(this.add(a),!0)}replace(a,b){return this.remove(a),this.add(b),a===b}}D=new WeakMap,E=new WeakMap,F=new WeakMap,G=new WeakMap,H=new WeakSet,I=function(){return em(this,G).size?em(this,G):em(this,F)};let eq=(a="")=>{let[b,c,d]=a.split(":"),e=d?decodeURIComponent(d):void 0;return{kind:"cc"===b?dj.CAPTIONS:dj.SUBTITLES,language:c,label:e}},er=(a="",b={})=>((a="")=>a.split(/\s+/))(a).map(a=>{let c=eq(a);return{...b,...c}}),es=a=>a?Array.isArray(a)?a.map(a=>"string"==typeof a?eq(a):a):"string"==typeof a?er(a):[a]:[],et=({kind:a,label:b,language:c}={kind:"subtitles"})=>b?`${"captions"===a?"cc":"sb"}:${c}:${encodeURIComponent(b)}`:c,eu=(a=[])=>Array.prototype.map.call(a,et).join(" "),ev=a=>{let b=Object.entries(a).map(([a,b])=>c=>c[a]===b);return a=>b.every(b=>b(a))},ew=(a,b=[],c=[])=>{let d=es(c).map(ev);Array.from(b).filter(a=>d.some(b=>b(a))).forEach(b=>{b.mode=a})},ex=(a,b=()=>!0)=>{if(!(null==a?void 0:a.textTracks))return[];let c="function"==typeof b?b:ev(b);return Array.from(a.textTracks).filter(c)},ey=a=>{var b;return!!(null==(b=a.mediaSubtitlesShowing)?void 0:b.length)||a.hasAttribute(dg.MEDIA_SUBTITLES_SHOWING)},ez="exitFullscreen"in dM?"exitFullscreen":"webkitExitFullscreen"in dM?"webkitExitFullscreen":"webkitCancelFullScreen"in dM?"webkitCancelFullScreen":void 0,eA="fullscreenElement"in dM?"fullscreenElement":"webkitFullscreenElement"in dM?"webkitFullscreenElement":void 0,eB="fullscreenEnabled"in dM?"fullscreenEnabled":"webkitFullscreenEnabled"in dM?"webkitFullscreenEnabled":void 0,eC=()=>{var a;return d||(d=null==(a=null==dM?void 0:dM.createElement)?void 0:a.call(dM,"video"))},eD=async(a=eC())=>{if(!a)return!1;let b=a.volume;a.volume=b/2+.1;let c=new AbortController,d=await Promise.race([eE(a,c.signal),eF(a,b)]);return c.abort(),d},eE=(a,b)=>new Promise(c=>{a.addEventListener("volumechange",()=>c(!0),{signal:b})}),eF=async(a,b)=>{for(let c=0;c<10;c++){if(a.volume===b)return!1;await dw(10)}return a.volume!==b},eG=/.*Version\/.*Safari\/.*/.test(dL.navigator.userAgent),eH=(a=eC())=>(!dL.matchMedia("(display-mode: standalone)").matches||!eG)&&"function"==typeof(null==a?void 0:a.requestPictureInPicture),eI=(a=eC())=>(a=>{let{documentElement:b,media:c}=a;return!!(null==b?void 0:b[eB])||c&&"webkitSupportsFullscreen"in c})({documentElement:dM,media:a}),eJ=eI(),eK=eH(),eL=!!dL.WebKitPlaybackTargetAvailabilityEvent,eM=!!dL.chrome,eN=a=>ex(a.media,a=>[dj.SUBTITLES,dj.CAPTIONS].includes(a.kind)).sort((a,b)=>a.kind>=b.kind?1:-1),eO=a=>ex(a.media,a=>a.mode===dk.SHOWING&&[dj.SUBTITLES,dj.CAPTIONS].includes(a.kind)),eP=(a,b)=>{let c=eN(a),d=eO(a),e=!!d.length;if(c.length){if(!1===b||e&&!0!==b)ew(dk.DISABLED,c,d);else if(!0===b||!e&&!1!==b){let b=c[0],{options:e}=a;if(!(null==e?void 0:e.noSubtitlesLangPref)){let a=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),d=a?[a,...globalThis.navigator.languages]:globalThis.navigator.languages,e=c.filter(a=>d.some(b=>a.language.toLowerCase().startsWith(b.split("-")[0]))).sort((a,b)=>d.findIndex(b=>a.language.toLowerCase().startsWith(b.split("-")[0]))-d.findIndex(a=>b.language.toLowerCase().startsWith(a.split("-")[0])));e[0]&&(b=e[0])}let{language:f,label:g,kind:h}=b;ew(dk.DISABLED,c,d),ew(dk.SHOWING,c,[{language:f,label:g,kind:h}])}}},eQ=(a,b)=>a===b||null!=a&&null!=b&&typeof a==typeof b&&(!!("number"==typeof a&&Number.isNaN(a)&&Number.isNaN(b))||"object"==typeof a&&(Array.isArray(a)?eR(a,b):Object.entries(a).every(([a,c])=>a in b&&eQ(c,b[a])))),eR=(a,b)=>{let c=Array.isArray(a),d=Array.isArray(b);return c===d&&(!c&&!d||a.length===b.length&&a.every((a,c)=>eQ(a,b[c])))},eS=Object.values(dn),eT=eD().then(a=>e=a),eU=async(...a)=>{await Promise.all(a.filter(a=>a).map(async a=>{if(!("localName"in a&&a instanceof dL.HTMLElement))return;let b=a.localName;if(!b.includes("-"))return;let c=dL.customElements.get(b);c&&a instanceof c||(await dL.customElements.whenDefined(b),dL.customElements.upgrade(a))}))},eV=new dL.DOMParser,eW={mediaError:{get(a,b){let{media:c}=a;if((null==b?void 0:b.type)!=="playing")return null==c?void 0:c.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(a,b){var c;let{media:d}=a;if((null==b?void 0:b.type)!=="playing")return null==(c=null==d?void 0:d.error)?void 0:c.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(a,b){var c,d;let{media:e}=a;if((null==b?void 0:b.type)!=="playing")return null!=(d=null==(c=null==e?void 0:e.error)?void 0:c.message)?d:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.videoWidth)?b:0},mediaEvents:["resize"]},mediaHeight:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.videoHeight)?b:0},mediaEvents:["resize"]},mediaPaused:{get(a){var b;let{media:c}=a;return null==(b=null==c?void 0:c.paused)||b},set(a,b){var c;let{media:d}=b;d&&(a?d.pause():null==(c=d.play())||c.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(a,b){let{media:c}=a;return!!c&&(b?"playing"===b.type:!c.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.ended)&&b},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.playbackRate)?b:1},set(a,b){let{media:c}=b;c&&Number.isFinite(+a)&&(c.playbackRate=+a)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.muted)&&b},set(a,b){let{media:c,options:{noMutedPref:d}={}}=b;if(c){if(!c.hasAttribute("muted")&&!d)try{dL.localStorage.setItem("media-chrome-pref-muted",a?"true":"false")}catch(a){console.debug("Error setting muted pref",a)}c.muted=a}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(a,b)=>{let{options:{noMutedPref:c}}=b,{media:d}=b;if(d&&!d.muted&&!c)try{let c="true"===dL.localStorage.getItem("media-chrome-pref-muted");eW.mediaMuted.set(c,b),a(c)}catch(a){console.debug("Error getting muted pref",a)}}]},mediaVolume:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.volume)?b:1},set(a,b){let{media:c,options:{noVolumePref:d}={}}=b;if(c){try{null==a?dL.localStorage.removeItem("media-chrome-pref-volume"):c.hasAttribute("muted")||d||dL.localStorage.setItem("media-chrome-pref-volume",a.toString())}catch(a){console.debug("Error setting volume pref",a)}Number.isFinite(+a)&&(c.volume=+a)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(a,b)=>{let{options:{noVolumePref:c}}=b;if(!c)try{let{media:c}=b;if(!c)return;let d=dL.localStorage.getItem("media-chrome-pref-volume");if(null==d)return;eW.mediaVolume.set(+d,b),a(+d)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(a){let{media:b}=a;return void 0===(null==b?void 0:b.volume)?"high":b.muted||0===b.volume?"off":b.volume<.5?"low":b.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.currentTime)?b:0},set(a,b){let{media:c}=b;c&&du(a)&&(c.currentTime=a)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(a){let{media:b,options:{defaultDuration:c}={}}=a;return c&&(!b||!b.duration||Number.isNaN(b.duration)||!Number.isFinite(b.duration))?c:Number.isFinite(null==b?void 0:b.duration)?b.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(a){let{media:b}=a;return(null==b?void 0:b.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(a){var b;let{media:c}=a;if(!(null==(b=null==c?void 0:c.seekable)?void 0:b.length))return;let d=c.seekable.start(0),e=c.seekable.end(c.seekable.length-1);if(d||e)return[Number(d.toFixed(3)),Number(e.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(a){var b;let{media:c}=a,d=null!=(b=null==c?void 0:c.buffered)?b:[];return Array.from(d).map((a,b)=>[Number(d.start(b).toFixed(3)),Number(d.end(b).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(a){let{media:b,options:{defaultStreamType:c}={}}=a,d=[dn.LIVE,dn.ON_DEMAND].includes(c)?c:void 0;if(!b)return d;let{streamType:e}=b;if(eS.includes(e))return e===dn.UNKNOWN?d:e;let f=b.duration;return f===1/0?dn.LIVE:Number.isFinite(f)?dn.ON_DEMAND:d},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(a){let{media:b}=a;if(!b)return NaN;let{targetLiveWindow:c}=b,d=eW.mediaStreamType.get(a);return(null==c||Number.isNaN(c))&&d===dn.LIVE?0:c},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(a){let{media:b,options:{liveEdgeOffset:c=10}={}}=a;if(!b)return!1;if("number"==typeof b.liveEdgeStart)return!Number.isNaN(b.liveEdgeStart)&&b.currentTime>=b.liveEdgeStart;if(eW.mediaStreamType.get(a)!==dn.LIVE)return!1;let d=b.seekable;if(!d)return!0;if(!d.length)return!1;let e=d.end(d.length-1)-c;return b.currentTime>=e},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:a=>eN(a).map(({kind:a,label:b,language:c})=>({kind:a,label:b,language:c})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:a=>eO(a).map(({kind:a,label:b,language:c})=>({kind:a,label:b,language:c})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(a,b)=>{var c,d;let{media:e,options:f}=b;if(!e)return;let g=a=>{var c;f.defaultSubtitles&&(a&&![dj.CAPTIONS,dj.SUBTITLES].includes(null==(c=null==a?void 0:a.track)?void 0:c.kind)||eP(b,!0))};return e.addEventListener("loadstart",g),null==(c=e.textTracks)||c.addEventListener("addtrack",g),null==(d=e.textTracks)||d.addEventListener("removetrack",g),()=>{var a,b;e.removeEventListener("loadstart",g),null==(a=e.textTracks)||a.removeEventListener("addtrack",g),null==(b=e.textTracks)||b.removeEventListener("removetrack",g)}}]},mediaChaptersCues:{get(a){var b;let{media:c}=a;if(!c)return[];let[d]=ex(c,{kind:dj.CHAPTERS});return Array.from(null!=(b=null==d?void 0:d.cues)?b:[]).map(({text:a,startTime:b,endTime:c})=>({text:a&&eV.parseFromString(a,"text/html").body.textContent||a,startTime:b,endTime:c}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(!d)return;let e=d.querySelector('track[kind="chapters"][default][src]'),f=null==(c=d.shadowRoot)?void 0:c.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==e||e.addEventListener("load",a),null==f||f.addEventListener("load",a),()=>{null==e||e.removeEventListener("load",a),null==f||f.removeEventListener("load",a)}}]},mediaIsPip:{get(a){var b,c;let{media:d,documentElement:e}=a;if(!d||!e||!e.pictureInPictureElement)return!1;if(e.pictureInPictureElement===d)return!0;if(e.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(b=d.localName)?void 0:b.includes("-"))&&dX(d,e.pictureInPictureElement);if(e.pictureInPictureElement.localName.includes("-")){let a=e.pictureInPictureElement.shadowRoot;for(;null==a?void 0:a.pictureInPictureElement;){if(a.pictureInPictureElement===d)return!0;a=null==(c=a.pictureInPictureElement)?void 0:c.shadowRoot}}return!1},set(a,b){let{media:c}=b;if(c)if(a){if(!dM.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!c.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};c.requestPictureInPicture().catch(b=>{if(11===b.code){if(!c.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===c.readyState&&"none"===c.preload){let b=()=>{c.removeEventListener("loadedmetadata",d),c.preload="none"},d=()=>{c.requestPictureInPicture().catch(a),b()};c.addEventListener("loadedmetadata",d),c.preload="metadata",setTimeout(()=>{0===c.readyState&&a(),b()},1e3)}else throw b}else throw b})}else dM.pictureInPictureElement&&dM.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(a){var b;let{media:c}=a;return[...null!=(b=null==c?void 0:c.videoRenditions)?b:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(a){var b,c,d;let{media:e}=a;return null==(d=null==(c=null==e?void 0:e.videoRenditions)?void 0:c[null==(b=e.videoRenditions)?void 0:b.selectedIndex])?void 0:d.id},set(a,b){let{media:c}=b;if(!(null==c?void 0:c.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let d=Array.prototype.findIndex.call(c.videoRenditions,b=>b.id==a);c.videoRenditions.selectedIndex!=d&&(c.videoRenditions.selectedIndex=d)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(a){var b;let{media:c}=a;return[...null!=(b=null==c?void 0:c.audioTracks)?b:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(a){var b,c;let{media:d}=a;return null==(c=[...null!=(b=null==d?void 0:d.audioTracks)?b:[]].find(a=>a.enabled))?void 0:c.id},set(a,b){let{media:c}=b;if(!(null==c?void 0:c.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let b of c.audioTracks)b.enabled=a==b.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:a=>(a=>{var b;let{media:c,documentElement:d,fullscreenElement:e=c}=a;if(!c||!d)return!1;let f=(a=>{let{documentElement:b,media:c}=a,d=null==b?void 0:b[eA];return!d&&"webkitDisplayingFullscreen"in c&&"webkitPresentationMode"in c&&c.webkitDisplayingFullscreen&&c.webkitPresentationMode===dp.FULLSCREEN?c:d})(a);if(!f)return!1;if(f===e||f===c)return!0;if(f.localName.includes("-")){let a=f.shadowRoot;if(!(eA in a))return dX(f,e);for(;null==a?void 0:a[eA];){if(a[eA]===e)return!0;a=null==(b=a[eA])?void 0:b.shadowRoot}}return!1})(a),set(a,b){a?(a=>{var b;let{media:c,fullscreenElement:d}=a;try{let a=d&&"requestFullscreen"in d?"requestFullscreen":d&&"webkitRequestFullScreen"in d?"webkitRequestFullScreen":void 0;if(a){let c=null==(b=d[a])?void 0:b.call(d);if(c instanceof Promise)return c.catch(()=>{})}else(null==c?void 0:c.webkitEnterFullscreen)?c.webkitEnterFullscreen():(null==c?void 0:c.requestFullscreen)&&c.requestFullscreen()}catch(a){console.error(a)}})(b):(a=>{var b;let{documentElement:c}=a;if(ez){let a=null==(b=null==c?void 0:c[ez])?void 0:b.call(c);if(a instanceof Promise)return a.catch(()=>{})}})(b)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(a){var b;let{media:c}=a;return!!(null==c?void 0:c.remote)&&(null==(b=c.remote)?void 0:b.state)!=="disconnected"&&!!c.remote.state},set(a,b){var c,d;let{media:e}=b;if(e&&(!a||(null==(c=e.remote)?void 0:c.state)==="disconnected")&&(a||(null==(d=e.remote)?void 0:d.state)==="connected")){if("function"!=typeof e.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");e.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(a,b){let{media:c}=b;if(c){if(!(c.webkitShowPlaybackTargetPicker&&dL.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");c.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(a){let{media:b}=a;if(!eJ||!eI(b))return dm.UNSUPPORTED}},mediaPipUnavailable:{get(a){let{media:b}=a;return eK&&eH(b)?(null==b?void 0:b.disablePictureInPicture)?dm.UNAVAILABLE:void 0:dm.UNSUPPORTED}},mediaVolumeUnavailable:{get(a){let{media:b}=a;if(!1===e||(null==b?void 0:b.volume)==void 0)return dm.UNSUPPORTED},stateOwnersUpdateHandlers:[a=>{null==e&&eT.then(b=>a(b?void 0:dm.UNSUPPORTED))}]},mediaCastUnavailable:{get(a,{availability:b="not-available"}={}){var c;let{media:d}=a;return eM&&(null==(c=null==d?void 0:d.remote)?void 0:c.state)?null!=b&&"available"!==b?dm.UNAVAILABLE:void 0:dm.UNSUPPORTED},stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(d)return d.disableRemotePlayback||d.hasAttribute("disableremoteplayback")||null==(c=null==d?void 0:d.remote)||c.watchAvailability(b=>{a({availability:b?"available":"not-available"})}).catch(b=>{"NotSupportedError"===b.name?a({availability:null}):a({availability:"not-available"})}),()=>{var a;null==(a=null==d?void 0:d.remote)||a.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(a,b)=>eL?(null==b?void 0:b.availability)==="not-available"?dm.UNAVAILABLE:void 0:dm.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(d)return d.disableRemotePlayback||d.hasAttribute("disableremoteplayback")||null==(c=null==d?void 0:d.remote)||c.watchAvailability(b=>{a({availability:b?"available":"not-available"})}).catch(b=>{"NotSupportedError"===b.name?a({availability:null}):a({availability:"not-available"})}),()=>{var a;null==(a=null==d?void 0:d.remote)||a.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(a){var b;let{media:c}=a;return(null==c?void 0:c.videoRenditions)?(null==(b=c.videoRenditions)?void 0:b.length)?void 0:dm.UNAVAILABLE:dm.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(a){var b,c;let{media:d}=a;return(null==d?void 0:d.audioTracks)?(null!=(c=null==(b=d.audioTracks)?void 0:b.length)?c:0)<=1?dm.UNAVAILABLE:void 0:dm.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(a){let{options:{mediaLang:b}={}}=a;return null!=b?b:"en"}}},eX={[dc.MEDIA_PREVIEW_REQUEST](a,b,{detail:c}){var d,e,f;let g,h,{media:i}=b,j=null!=c?c:void 0;if(i&&null!=j){let[a]=ex(i,{kind:dj.METADATA,label:"thumbnails"}),b=Array.prototype.find.call(null!=(d=null==a?void 0:a.cues)?d:[],(a,b,c)=>0===b?a.endTime>j:b===c.length-1?a.startTime<=j:a.startTime<=j&&a.endTime>j);if(b){let a=/'^(?:[a-z]+:)?\/\//i.test(b.text)||null==(e=null==i?void 0:i.querySelector('track[label="thumbnails"]'))?void 0:e.src,c=new URL(b.text,a);h=new URLSearchParams(c.hash).get("#xywh").split(",").map(a=>+a),g=c.href}}let k=a.mediaDuration.get(b),l=null==(f=a.mediaChaptersCues.get(b).find((a,b,c)=>b===c.length-1&&k===a.endTime?a.startTime<=j&&a.endTime>=j:a.startTime<=j&&a.endTime>j))?void 0:f.text;return null!=c&&null==l&&(l=""),{mediaPreviewTime:j,mediaPreviewImage:g,mediaPreviewCoords:h,mediaPreviewChapter:l}},[dc.MEDIA_PAUSE_REQUEST](a,b){a.mediaPaused.set(!0,b)},[dc.MEDIA_PLAY_REQUEST](a,b){var c,d,e,f;let g=a.mediaStreamType.get(b)===dn.LIVE,h=!(null==(c=b.options)?void 0:c.noAutoSeekToLive),i=a.mediaTargetLiveWindow.get(b)>0;if(g&&h&&!i){let c=null==(d=a.mediaSeekable.get(b))?void 0:d[1];if(c){let d=null!=(f=null==(e=b.options)?void 0:e.seekToLiveOffset)?f:0;a.mediaCurrentTime.set(c-d,b)}}a.mediaPaused.set(!1,b)},[dc.MEDIA_PLAYBACK_RATE_REQUEST](a,b,{detail:c}){a.mediaPlaybackRate.set(c,b)},[dc.MEDIA_MUTE_REQUEST](a,b){a.mediaMuted.set(!0,b)},[dc.MEDIA_UNMUTE_REQUEST](a,b){a.mediaVolume.get(b)||a.mediaVolume.set(.25,b),a.mediaMuted.set(!1,b)},[dc.MEDIA_VOLUME_REQUEST](a,b,{detail:c}){c&&a.mediaMuted.get(b)&&a.mediaMuted.set(!1,b),a.mediaVolume.set(c,b)},[dc.MEDIA_SEEK_REQUEST](a,b,{detail:c}){a.mediaCurrentTime.set(c,b)},[dc.MEDIA_SEEK_TO_LIVE_REQUEST](a,b){var c,d,e;let f=null==(c=a.mediaSeekable.get(b))?void 0:c[1];if(Number.isNaN(Number(f)))return;let g=null!=(e=null==(d=b.options)?void 0:d.seekToLiveOffset)?e:0;a.mediaCurrentTime.set(f-g,b)},[dc.MEDIA_SHOW_SUBTITLES_REQUEST](a,b,{detail:c}){var d;let{options:e}=b,f=eN(b),g=es(c),h=null==(d=g[0])?void 0:d.language;h&&!e.noSubtitlesLangPref&&dL.localStorage.setItem("media-chrome-pref-subtitles-lang",h),ew(dk.SHOWING,f,g)},[dc.MEDIA_DISABLE_SUBTITLES_REQUEST](a,b,{detail:c}){let d=eN(b);ew(dk.DISABLED,d,null!=c?c:[])},[dc.MEDIA_TOGGLE_SUBTITLES_REQUEST](a,b,{detail:c}){eP(b,c)},[dc.MEDIA_RENDITION_REQUEST](a,b,{detail:c}){a.mediaRenditionSelected.set(c,b)},[dc.MEDIA_AUDIO_TRACK_REQUEST](a,b,{detail:c}){a.mediaAudioTrackEnabled.set(c,b)},[dc.MEDIA_ENTER_PIP_REQUEST](a,b){a.mediaIsFullscreen.get(b)&&a.mediaIsFullscreen.set(!1,b),a.mediaIsPip.set(!0,b)},[dc.MEDIA_EXIT_PIP_REQUEST](a,b){a.mediaIsPip.set(!1,b)},[dc.MEDIA_ENTER_FULLSCREEN_REQUEST](a,b){a.mediaIsPip.get(b)&&a.mediaIsPip.set(!1,b),a.mediaIsFullscreen.set(!0,b)},[dc.MEDIA_EXIT_FULLSCREEN_REQUEST](a,b){a.mediaIsFullscreen.set(!1,b)},[dc.MEDIA_ENTER_CAST_REQUEST](a,b){a.mediaIsFullscreen.get(b)&&a.mediaIsFullscreen.set(!1,b),a.mediaIsCasting.set(!0,b)},[dc.MEDIA_EXIT_CAST_REQUEST](a,b){a.mediaIsCasting.set(!1,b)},[dc.MEDIA_AIRPLAY_REQUEST](a,b){a.mediaIsAirplaying.set(!0,b)}};var eY=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},eZ=(a,b,c)=>(eY(a,b,"read from private field"),c?c.call(a):b.get(a)),e$=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},e_=(a,b,c,d)=>(eY(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),e0=(a,b,c)=>(eY(a,b,"access private method"),c);let e1=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],e2={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",SEEK_TO_LIVE_OFFSET:"seektoliveoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",LANG:"lang"};class e3 extends ek{constructor(){super(),e$(this,P),e$(this,R),e$(this,T),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,e$(this,J,new ep(this,e2.HOTKEYS)),e$(this,K,void 0),e$(this,L,void 0),e$(this,M,void 0),e$(this,N,void 0),e$(this,O,a=>{var b;null==(b=eZ(this,L))||b.dispatch(a)}),this.associateElement(this);let a={};e_(this,M,b=>{Object.entries(b).forEach(([b,c])=>{if(b in a&&a[b]===c)return;this.propagateMediaState(b,c);let d=b.toLowerCase(),e=new dL.CustomEvent(di[d],{composed:!0,detail:c});this.dispatchEvent(e)}),a=b}),this.hasAttribute(e2.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(e2.NO_HOTKEYS,e2.HOTKEYS,e2.DEFAULT_STREAM_TYPE,e2.DEFAULT_SUBTITLES,e2.DEFAULT_DURATION,e2.LANG)}get mediaStore(){return eZ(this,L)}set mediaStore(a){var b,c;if(eZ(this,L)&&(null==(b=eZ(this,N))||b.call(this),e_(this,N,void 0)),e_(this,L,a),!eZ(this,L)&&!this.hasAttribute(e2.NO_DEFAULT_STORE))return void e0(this,P,Q).call(this);e_(this,N,null==(c=eZ(this,L))?void 0:c.subscribe(eZ(this,M)))}get fullscreenElement(){var a;return null!=(a=eZ(this,K))?a:this}set fullscreenElement(a){var b;this.hasAttribute(e2.FULLSCREEN_ELEMENT)&&this.removeAttribute(e2.FULLSCREEN_ELEMENT),e_(this,K,a),null==(b=eZ(this,L))||b.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return d4(this,e2.DEFAULT_SUBTITLES)}set defaultSubtitles(a){d5(this,e2.DEFAULT_SUBTITLES,a)}get defaultStreamType(){return d6(this,e2.DEFAULT_STREAM_TYPE)}set defaultStreamType(a){d7(this,e2.DEFAULT_STREAM_TYPE,a)}get defaultDuration(){return d2(this,e2.DEFAULT_DURATION)}set defaultDuration(a){d3(this,e2.DEFAULT_DURATION,a)}get noHotkeys(){return d4(this,e2.NO_HOTKEYS)}set noHotkeys(a){d5(this,e2.NO_HOTKEYS,a)}get keysUsed(){return d6(this,e2.KEYS_USED)}set keysUsed(a){d7(this,e2.KEYS_USED,a)}get liveEdgeOffset(){return d2(this,e2.LIVE_EDGE_OFFSET)}set liveEdgeOffset(a){d3(this,e2.LIVE_EDGE_OFFSET,a)}get noAutoSeekToLive(){return d4(this,e2.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(a){d5(this,e2.NO_AUTO_SEEK_TO_LIVE,a)}get noVolumePref(){return d4(this,e2.NO_VOLUME_PREF)}set noVolumePref(a){d5(this,e2.NO_VOLUME_PREF,a)}get noMutedPref(){return d4(this,e2.NO_MUTED_PREF)}set noMutedPref(a){d5(this,e2.NO_MUTED_PREF,a)}get noSubtitlesLangPref(){return d4(this,e2.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(a){d5(this,e2.NO_SUBTITLES_LANG_PREF,a)}get noDefaultStore(){return d4(this,e2.NO_DEFAULT_STORE)}set noDefaultStore(a){d5(this,e2.NO_DEFAULT_STORE,a)}attributeChangedCallback(a,b,c){var d,e,f,g,h,i,j,k,l;if(super.attributeChangedCallback(a,b,c),a===e2.NO_HOTKEYS)c!==b&&""===c?(this.hasAttribute(e2.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):c!==b&&null===c&&this.enableHotkeys();else if(a===e2.HOTKEYS)eZ(this,J).value=c;else if(a===e2.DEFAULT_SUBTITLES&&c!==b)null==(d=eZ(this,L))||d.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(e2.DEFAULT_SUBTITLES)}});else if(a===e2.DEFAULT_STREAM_TYPE)null==(f=eZ(this,L))||f.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(e=this.getAttribute(e2.DEFAULT_STREAM_TYPE))?e:void 0}});else if(a===e2.LIVE_EDGE_OFFSET)null==(g=eZ(this,L))||g.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(e2.LIVE_EDGE_OFFSET)?+this.getAttribute(e2.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(e2.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(e2.LIVE_EDGE_OFFSET)}});else if(a===e2.SEEK_TO_LIVE_OFFSET)null==(h=eZ(this,L))||h.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(e2.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(e2.SEEK_TO_LIVE_OFFSET):void 0}});else if(a===e2.NO_AUTO_SEEK_TO_LIVE)null==(i=eZ(this,L))||i.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(e2.NO_AUTO_SEEK_TO_LIVE)}});else if(a===e2.FULLSCREEN_ELEMENT){let a=c?null==(j=this.getRootNode())?void 0:j.getElementById(c):void 0;e_(this,K,a),null==(k=eZ(this,L))||k.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else a===e2.LANG&&c!==b&&(dB=c,null==(l=eZ(this,L))||l.dispatch({type:"optionschangerequest",detail:{mediaLang:c}}))}connectedCallback(){var a,b;eZ(this,L)||this.hasAttribute(e2.NO_DEFAULT_STORE)||e0(this,P,Q).call(this),null==(a=eZ(this,L))||a.dispatch({type:"documentelementchangerequest",detail:dM}),super.connectedCallback(),eZ(this,L)&&!eZ(this,N)&&e_(this,N,null==(b=eZ(this,L))?void 0:b.subscribe(eZ(this,M))),this.hasAttribute(e2.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var a,b,c,d;null==(a=super.disconnectedCallback)||a.call(this),eZ(this,L)&&(null==(b=eZ(this,L))||b.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(c=eZ(this,L))||c.dispatch({type:dc.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),eZ(this,N)&&(null==(d=eZ(this,N))||d.call(this),e_(this,N,void 0))}mediaSetCallback(a){var b;super.mediaSetCallback(a),null==(b=eZ(this,L))||b.dispatch({type:"mediaelementchangerequest",detail:a}),a.hasAttribute("tabindex")||(a.tabIndex=-1)}mediaUnsetCallback(a){var b;super.mediaUnsetCallback(a),null==(b=eZ(this,L))||b.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(a,b){fc(this.mediaStateReceivers,a,b)}associateElement(a){if(!a)return;let{associatedElementSubscriptions:b}=this;if(b.has(a))return;let c=fd(a,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(dc).forEach(b=>{a.addEventListener(b,eZ(this,O))}),b.set(a,c)}unassociateElement(a){if(!a)return;let{associatedElementSubscriptions:b}=this;b.has(a)&&(b.get(a)(),b.delete(a),Object.values(dc).forEach(b=>{a.removeEventListener(b,eZ(this,O))}))}registerMediaStateReceiver(a){if(!a)return;let b=this.mediaStateReceivers;!(b.indexOf(a)>-1)&&(b.push(a),eZ(this,L)&&Object.entries(eZ(this,L).getState()).forEach(([b,c])=>{fc([a],b,c)}))}unregisterMediaStateReceiver(a){let b=this.mediaStateReceivers,c=b.indexOf(a);c<0||b.splice(c,1)}enableHotkeys(){this.addEventListener("keydown",e0(this,T,U))}disableHotkeys(){this.removeEventListener("keydown",e0(this,T,U)),this.removeEventListener("keyup",e0(this,R,S))}get hotkeys(){return d6(this,e2.HOTKEYS)}set hotkeys(a){d7(this,e2.HOTKEYS,a)}keyboardShortcutHandler(a){var b,c,d,e,f;let g,h,i,j=a.target;if(!((null!=(d=null!=(c=null==(b=j.getAttribute(e2.KEYS_USED))?void 0:b.split(" "))?c:null==j?void 0:j.keysUsed)?d:[]).map(a=>"Space"===a?" ":a).filter(Boolean).includes(a.key)||eZ(this,J).contains(`no${a.key.toLowerCase()}`))&&!(" "===a.key&&eZ(this,J).contains("nospace")))switch(a.key){case" ":case"k":g=eZ(this,L).getState().mediaPaused?dc.MEDIA_PLAY_REQUEST:dc.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new dL.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"m":g="off"===this.mediaStore.getState().mediaVolumeLevel?dc.MEDIA_UNMUTE_REQUEST:dc.MEDIA_MUTE_REQUEST,this.dispatchEvent(new dL.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"f":g=this.mediaStore.getState().mediaIsFullscreen?dc.MEDIA_EXIT_FULLSCREEN_REQUEST:dc.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new dL.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new dL.CustomEvent(dc.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let a=this.hasAttribute(e2.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(e2.KEYBOARD_BACKWARD_SEEK_OFFSET):10;h=Math.max((null!=(e=this.mediaStore.getState().mediaCurrentTime)?e:0)-a,0),i=new dL.CustomEvent(dc.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(i);break}case"ArrowRight":{let a=this.hasAttribute(e2.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(e2.KEYBOARD_FORWARD_SEEK_OFFSET):10;h=Math.max((null!=(f=this.mediaStore.getState().mediaCurrentTime)?f:0)+a,0),i=new dL.CustomEvent(dc.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(i)}}}}J=new WeakMap,K=new WeakMap,L=new WeakMap,M=new WeakMap,N=new WeakMap,O=new WeakMap,P=new WeakSet,Q=function(){var a;this.mediaStore=(({media:a,fullscreenElement:b,documentElement:c,stateMediator:d=eW,requestMap:e=eX,options:f={},monitorStateOwnersOnlyWithSubscriptions:g=!0})=>{let h,i=[],j={options:{...f}},k=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),l=a=>{void 0!=a&&(eQ(a,k)||(k=Object.freeze({...k,...a}),i.forEach(a=>a(k))))},m=()=>{l(Object.entries(d).reduce((a,[b,{get:c}])=>(a[b]=c(j),a),{}))},n={},o=async(a,b)=>{var c,e,f,k,o,p,q,r,s,t,u,v,w,x,y,z;let A=!!h;if(h={...j,...null!=h?h:{},...a},A)return;await eU(...Object.values(a));let B=i.length>0&&0===b&&g,C=j.media!==h.media,D=(null==(c=j.media)?void 0:c.textTracks)!==(null==(e=h.media)?void 0:e.textTracks),E=(null==(f=j.media)?void 0:f.videoRenditions)!==(null==(k=h.media)?void 0:k.videoRenditions),F=(null==(o=j.media)?void 0:o.audioTracks)!==(null==(p=h.media)?void 0:p.audioTracks),G=(null==(q=j.media)?void 0:q.remote)!==(null==(r=h.media)?void 0:r.remote),H=j.documentElement!==h.documentElement,I=!!j.media&&(C||B),J=!!(null==(s=j.media)?void 0:s.textTracks)&&(D||B),K=!!(null==(t=j.media)?void 0:t.videoRenditions)&&(E||B),L=!!(null==(u=j.media)?void 0:u.audioTracks)&&(F||B),M=!!(null==(v=j.media)?void 0:v.remote)&&(G||B),N=!!j.documentElement&&(H||B),O=I||J||K||L||M||N,P=0===i.length&&1===b&&g,Q=!!h.media&&(C||P),R=!!(null==(w=h.media)?void 0:w.textTracks)&&(D||P),S=!!(null==(x=h.media)?void 0:x.videoRenditions)&&(E||P),T=!!(null==(y=h.media)?void 0:y.audioTracks)&&(F||P),U=!!(null==(z=h.media)?void 0:z.remote)&&(G||P),V=!!h.documentElement&&(H||P),W=Q||R||S||T||U||V;if(!(O||W)){Object.entries(h).forEach(([a,b])=>{j[a]=b}),m(),h=void 0;return}Object.entries(d).forEach(([a,{get:b,mediaEvents:c=[],textTracksEvents:d=[],videoRenditionsEvents:e=[],audioTracksEvents:f=[],remoteEvents:g=[],rootEvents:i=[],stateOwnersUpdateHandlers:k=[]}])=>{let m;n[a]||(n[a]={});let o=c=>{l({[a]:b(j,c)})};m=n[a].mediaEvents,c.forEach(b=>{m&&I&&(j.media.removeEventListener(b,m),n[a].mediaEvents=void 0),Q&&(h.media.addEventListener(b,o),n[a].mediaEvents=o)}),m=n[a].textTracksEvents,d.forEach(b=>{var c,d;m&&J&&(null==(c=j.media.textTracks)||c.removeEventListener(b,m),n[a].textTracksEvents=void 0),R&&(null==(d=h.media.textTracks)||d.addEventListener(b,o),n[a].textTracksEvents=o)}),m=n[a].videoRenditionsEvents,e.forEach(b=>{var c,d;m&&K&&(null==(c=j.media.videoRenditions)||c.removeEventListener(b,m),n[a].videoRenditionsEvents=void 0),S&&(null==(d=h.media.videoRenditions)||d.addEventListener(b,o),n[a].videoRenditionsEvents=o)}),m=n[a].audioTracksEvents,f.forEach(b=>{var c,d;m&&L&&(null==(c=j.media.audioTracks)||c.removeEventListener(b,m),n[a].audioTracksEvents=void 0),T&&(null==(d=h.media.audioTracks)||d.addEventListener(b,o),n[a].audioTracksEvents=o)}),m=n[a].remoteEvents,g.forEach(b=>{var c,d;m&&M&&(null==(c=j.media.remote)||c.removeEventListener(b,m),n[a].remoteEvents=void 0),U&&(null==(d=h.media.remote)||d.addEventListener(b,o),n[a].remoteEvents=o)}),m=n[a].rootEvents,i.forEach(b=>{m&&N&&(j.documentElement.removeEventListener(b,m),n[a].rootEvents=void 0),V&&(h.documentElement.addEventListener(b,o),n[a].rootEvents=o)});let p=n[a].stateOwnersUpdateHandlers;k.forEach(b=>{p&&O&&p(),W&&(n[a].stateOwnersUpdateHandlers=b(o,h))})}),Object.entries(h).forEach(([a,b])=>{j[a]=b}),m(),h=void 0};return o({media:a,fullscreenElement:b,documentElement:c,options:f}),{dispatch(a){let{type:b,detail:c}=a;if(e[b]&&null==k.mediaErrorCode)return void l(e[b](d,j,a));"mediaelementchangerequest"===b?o({media:c}):"fullscreenelementchangerequest"===b?o({fullscreenElement:c}):"documentelementchangerequest"===b?o({documentElement:c}):"optionschangerequest"===b&&(Object.entries(null!=c?c:{}).forEach(([a,b])=>{j.options[a]=b}),m())},getState:()=>k,subscribe:a=>(o({},i.length+1),i.push(a),a(k),()=>{let b=i.indexOf(a);b>=0&&(o({},i.length-1),i.splice(b,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(e2.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(e2.DEFAULT_DURATION)?+this.getAttribute(e2.DEFAULT_DURATION):void 0,defaultStreamType:null!=(a=this.getAttribute(e2.DEFAULT_STREAM_TYPE))?a:void 0,liveEdgeOffset:this.hasAttribute(e2.LIVE_EDGE_OFFSET)?+this.getAttribute(e2.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(e2.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(e2.SEEK_TO_LIVE_OFFSET):this.hasAttribute(e2.LIVE_EDGE_OFFSET)?+this.getAttribute(e2.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(e2.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(e2.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(e2.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(e2.NO_SUBTITLES_LANG_PREF)}})},R=new WeakSet,S=function(a){let{key:b}=a;if(!e1.includes(b))return void this.removeEventListener("keyup",e0(this,R,S));this.keyboardShortcutHandler(a)},T=new WeakSet,U=function(a){let{metaKey:b,altKey:c,key:d}=a;if(b||c||!e1.includes(d))return void this.removeEventListener("keyup",e0(this,R,S));[" ","ArrowLeft","ArrowRight"].includes(d)&&!(eZ(this,J).contains(`no${d.toLowerCase()}`)||" "===d&&eZ(this,J).contains("nospace"))&&a.preventDefault(),this.addEventListener("keyup",e0(this,R,S),{once:!0})};let e4=Object.values(dg),e5=Object.values(de),e6=a=>{var b,c,d,e;let{observedAttributes:f}=a.constructor;!f&&(null==(b=a.nodeName)?void 0:b.includes("-"))&&(dL.customElements.upgrade(a),{observedAttributes:f}=a.constructor);let g=null==(e=null==(d=null==(c=null==a?void 0:a.getAttribute)?void 0:c.call(a,dd.MEDIA_CHROME_ATTRIBUTES))?void 0:d.split)?void 0:e.call(d,/\s+/);return Array.isArray(f||g)?(f||g).filter(a=>e4.includes(a)):[]},e7=a=>(a=>{var b,c;return(null==(b=a.nodeName)?void 0:b.includes("-"))&&dL.customElements.get(null==(c=a.nodeName)?void 0:c.toLowerCase())&&!(a instanceof dL.customElements.get(a.nodeName.toLowerCase()))&&dL.customElements.upgrade(a),e5.some(b=>b in a)})(a)||!!e6(a).length,e8=a=>{var b;return null==(b=null==a?void 0:a.join)?void 0:b.call(a,":")},e9={[dg.MEDIA_SUBTITLES_LIST]:eu,[dg.MEDIA_SUBTITLES_SHOWING]:eu,[dg.MEDIA_SEEKABLE]:e8,[dg.MEDIA_BUFFERED]:a=>null==a?void 0:a.map(e8).join(" "),[dg.MEDIA_PREVIEW_COORDS]:a=>null==a?void 0:a.join(" "),[dg.MEDIA_RENDITION_LIST]:function(a){return null==a?void 0:a.map(dq).join(" ")},[dg.MEDIA_AUDIO_TRACK_LIST]:function(a){return null==a?void 0:a.map(ds).join(" ")}},fa=async(a,b,c)=>{var d,e;if(a.isConnected||await dw(0),"boolean"==typeof c||null==c)return d5(a,b,c);if("number"==typeof c)return d3(a,b,c);if("string"==typeof c)return d7(a,b,c);if(Array.isArray(c)&&!c.length)return a.removeAttribute(b);let f=null!=(e=null==(d=e9[b])?void 0:d.call(e9,c))?e:c;return a.setAttribute(b,f)},fb=(a,b)=>{if((a=>{var b;return!!(null==(b=a.closest)?void 0:b.call(a,'*[slot="media"]'))})(a))return;let c=(a,b)=>{var c,d;e7(a)&&b(a);let{children:e=[]}=null!=a?a:{};[...e,...null!=(d=null==(c=null==a?void 0:a.shadowRoot)?void 0:c.children)?d:[]].forEach(a=>fb(a,b))},d=null==a?void 0:a.nodeName.toLowerCase();if(d.includes("-")&&!e7(a))return void dL.customElements.whenDefined(d).then(()=>{c(a,b)});c(a,b)},fc=(a,b,c)=>{a.forEach(a=>{if(b in a){a[b]=c;return}let d=e6(a),e=b.toLowerCase();d.includes(e)&&fa(a,e,c)})},fd=(a,b,c)=>{fb(a,b);let d=a=>{var c;b(null!=(c=null==a?void 0:a.composedPath()[0])?c:a.target)},e=a=>{var b;c(null!=(b=null==a?void 0:a.composedPath()[0])?b:a.target)};a.addEventListener(dc.REGISTER_MEDIA_STATE_RECEIVER,d),a.addEventListener(dc.UNREGISTER_MEDIA_STATE_RECEIVER,e);let f=[],g=a=>{let d=a.target;"media"!==d.name&&(f.forEach(a=>fb(a,c)),(f=[...d.assignedElements({flatten:!0})]).forEach(a=>fb(a,b)))};a.addEventListener("slotchange",g);let h=new MutationObserver(a=>{a.forEach(a=>{let{addedNodes:d=[],removedNodes:e=[],type:f,target:g,attributeName:h}=a;"childList"===f?(Array.prototype.forEach.call(d,a=>fb(a,b)),Array.prototype.forEach.call(e,a=>fb(a,c))):"attributes"===f&&h===dd.MEDIA_CHROME_ATTRIBUTES&&(e7(g)?b(g):c(g))})});return h.observe(a,{childList:!0,attributes:!0,subtree:!0}),()=>{fb(a,c),a.removeEventListener("slotchange",g),h.disconnect(),a.removeEventListener(dc.REGISTER_MEDIA_STATE_RECEIVER,d),a.removeEventListener(dc.UNREGISTER_MEDIA_STATE_RECEIVER,e)}};dL.customElements.get("media-controller")||dL.customElements.define("media-controller",e3);let fe={PLACEMENT:"placement",BOUNDS:"bounds"};class ff extends dL.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var a;if(!d_(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let b=this.placement;if("left"===b||"right"===b)return void this.style.removeProperty("--media-tooltip-offset-x");let c=getComputedStyle(this),d=null!=(a=dY(this,"#"+this.bounds))?a:dT(this);if(!d)return;let{x:e,width:f}=d.getBoundingClientRect(),{x:g,width:h}=this.getBoundingClientRect(),i=c.getPropertyValue("--media-tooltip-offset-x"),j=i?parseFloat(i.replace("px","")):0,k=c.getPropertyValue("--media-tooltip-container-margin"),l=k?parseFloat(k.replace("px","")):0,m=g-e+j-l,n=g+h-(e+f)+j+l;return m<0?void this.style.setProperty("--media-tooltip-offset-x",`${m}px`):n>0?void this.style.setProperty("--media-tooltip-offset-x",`${n}px`):void this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let a=this.placement;delete this.placement,this.placement=a}}static get observedAttributes(){return[fe.PLACEMENT,fe.BOUNDS]}get placement(){return d6(this,fe.PLACEMENT)}set placement(a){d7(this,fe.PLACEMENT,a)}get bounds(){return d6(this,fe.BOUNDS)}set bounds(a){d7(this,fe.BOUNDS,a)}}ff.shadowRootOptions={mode:"open"},ff.getTemplateHTML=function(a){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},dL.customElements.get("media-tooltip")||dL.customElements.define("media-tooltip",ff);var fg=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fh=(a,b,c)=>(fg(a,b,"read from private field"),c?c.call(a):b.get(a)),fi=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},fj=(a,b,c,d)=>(fg(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let fk={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};class fl extends dL.HTMLElement{constructor(){if(super(),fi(this,$),fi(this,V,void 0),this.preventClick=!1,this.tooltipEl=null,fi(this,W,a=>{this.preventClick||this.handleClick(a),setTimeout(fh(this,X),0)}),fi(this,X,()=>{var a,b;null==(b=null==(a=this.tooltipEl)?void 0:a.updateXOffset)||b.call(a)}),fi(this,Y,a=>{let{key:b}=a;if(!this.keysUsed.includes(b))return void this.removeEventListener("keyup",fh(this,Y));this.preventClick||this.handleClick(a)}),fi(this,Z,a=>{let{metaKey:b,altKey:c,key:d}=a;if(b||c||!this.keysUsed.includes(d))return void this.removeEventListener("keyup",fh(this,Y));this.addEventListener("keyup",fh(this,Y),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dS(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",fk.TOOLTIP_PLACEMENT,dd.MEDIA_CONTROLLER,dg.MEDIA_LANG]}enable(){this.addEventListener("click",fh(this,W)),this.addEventListener("keydown",fh(this,Z)),this.tabIndex=0}disable(){this.removeEventListener("click",fh(this,W)),this.removeEventListener("keydown",fh(this,Z)),this.removeEventListener("keyup",fh(this,Y)),this.tabIndex=-1}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===dd.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=fh(this,V))?void 0:d.unassociateElement)||e.call(d,this),fj(this,V,null)),c&&this.isConnected&&(fj(this,V,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=fh(this,V))?void 0:g.associateElement)||h.call(g,this))):"disabled"===a&&c!==b?null==c?this.enable():this.disable():a===fk.TOOLTIP_PLACEMENT&&this.tooltipEl&&c!==b?this.tooltipEl.placement=c:a===dg.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),fh(this,X).call(this)}connectedCallback(){var a,b,c;let{style:d}=d0(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let e=this.getAttribute(dd.MEDIA_CONTROLLER);e&&(fj(this,V,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=fh(this,V))?void 0:b.associateElement)||c.call(b,this)),dL.customElements.whenDefined("media-tooltip").then(()=>{var a,b;return(a=$,b=_,fg(this,a,"access private method"),b).call(this)})}disconnectedCallback(){var a,b;this.disable(),null==(b=null==(a=fh(this,V))?void 0:a.unassociateElement)||b.call(a,this),fj(this,V,null),this.removeEventListener("mouseenter",fh(this,X)),this.removeEventListener("focus",fh(this,X)),this.removeEventListener("click",fh(this,W))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return d6(this,fk.TOOLTIP_PLACEMENT)}set tooltipPlacement(a){d7(this,fk.TOOLTIP_PLACEMENT,a)}get mediaController(){return d6(this,dd.MEDIA_CONTROLLER)}set mediaController(a){d7(this,dd.MEDIA_CONTROLLER,a)}get disabled(){return d4(this,fk.DISABLED)}set disabled(a){d5(this,fk.DISABLED,a)}get noTooltip(){return d4(this,fk.NO_TOOLTIP)}set noTooltip(a){d5(this,fk.NO_TOOLTIP,a)}handleClick(a){}}V=new WeakMap,W=new WeakMap,X=new WeakMap,Y=new WeakMap,Z=new WeakMap,$=new WeakSet,_=function(){this.addEventListener("mouseenter",fh(this,X)),this.addEventListener("focus",fh(this,X)),this.addEventListener("click",fh(this,W));let a=this.tooltipPlacement;a&&this.tooltipEl&&(this.tooltipEl.placement=a)},fl.shadowRootOptions={mode:"open"},fl.getTemplateHTML=function(a,b={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(a,b)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${ff.shadowRootOptions.mode}">
          ${ff.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(a)}
        </slot>
      </media-tooltip>
    </slot>
  `},fl.getSlotTemplateHTML=function(a,b){return`
    <slot></slot>
  `},fl.getTooltipContentHTML=function(){return""},dL.customElements.get("media-chrome-button")||dL.customElements.define("media-chrome-button",fl);let fm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,fn=a=>{let b=a.mediaIsAirplaying?dC("stop airplay"):dC("start airplay");a.setAttribute("aria-label",b)};class fo extends fl{static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_IS_AIRPLAYING,dg.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),fn(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dg.MEDIA_IS_AIRPLAYING&&fn(this)}get mediaIsAirplaying(){return d4(this,dg.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(a){d5(this,dg.MEDIA_IS_AIRPLAYING,a)}get mediaAirplayUnavailable(){return d6(this,dg.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(a){d7(this,dg.MEDIA_AIRPLAY_UNAVAILABLE,a)}handleClick(){let a=new dL.CustomEvent(dc.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(a)}}fo.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${dg.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${dg.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${dg.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${dg.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${fm}</slot>
      <slot name="exit">${fm}</slot>
    </slot>
  `},fo.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${dC("start airplay")}</slot>
    <slot name="tooltip-exit">${dC("stop airplay")}</slot>
  `},dL.customElements.get("media-airplay-button")||dL.customElements.define("media-airplay-button",fo);let fp=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,fq=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,fr=a=>{a.setAttribute("aria-checked",ey(a).toString())};class fs extends fl{static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_SUBTITLES_LIST,dg.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",dC("closed captions")),fr(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dg.MEDIA_SUBTITLES_SHOWING&&fr(this)}get mediaSubtitlesList(){return ft(this,dg.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){fu(this,dg.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return ft(this,dg.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){fu(this,dg.MEDIA_SUBTITLES_SHOWING,a)}handleClick(){this.dispatchEvent(new dL.CustomEvent(dc.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}fs.getSlotTemplateHTML=function(a){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${fp}</slot>
      <slot name="off">${fq}</slot>
    </slot>
  `},fs.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${dC("Enable captions")}</slot>
    <slot name="tooltip-disable">${dC("Disable captions")}</slot>
  `};let ft=(a,b)=>{let c=a.getAttribute(b);return c?er(c):[]},fu=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=eu(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};dL.customElements.get("media-captions-button")||dL.customElements.define("media-captions-button",fs);let fv=a=>{let b=a.mediaIsCasting?dC("stop casting"):dC("start casting");a.setAttribute("aria-label",b)};class fw extends fl{static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_IS_CASTING,dg.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),fv(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dg.MEDIA_IS_CASTING&&fv(this)}get mediaIsCasting(){return d4(this,dg.MEDIA_IS_CASTING)}set mediaIsCasting(a){d5(this,dg.MEDIA_IS_CASTING,a)}get mediaCastUnavailable(){return d6(this,dg.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(a){d7(this,dg.MEDIA_CAST_UNAVAILABLE,a)}handleClick(){let a=this.mediaIsCasting?dc.MEDIA_EXIT_CAST_REQUEST:dc.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new dL.CustomEvent(a,{composed:!0,bubbles:!0}))}}fw.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${dg.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${dg.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${dg.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${dg.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},fw.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${dC("Start casting")}</slot>
    <slot name="tooltip-exit">${dC("Stop casting")}</slot>
  `},dL.customElements.get("media-cast-button")||dL.customElements.define("media-cast-button",fw);var fx=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fy=(a,b,c)=>(fx(a,b,"read from private field"),c?c.call(a):b.get(a)),fz=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},fA=(a,b,c,d)=>(fx(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),fB=(a,b,c)=>(fx(a,b,"access private method"),c);let fC={OPEN:"open",ANCHOR:"anchor"};class fD extends dL.HTMLElement{constructor(){super(),fz(this,ad),fz(this,af),fz(this,ah),fz(this,aj),fz(this,al),fz(this,an),fz(this,aa,!1),fz(this,ab,null),fz(this,ac,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[fC.OPEN,fC.ANCHOR]}get open(){return d4(this,fC.OPEN)}set open(a){d5(this,fC.OPEN,a)}handleEvent(a){switch(a.type){case"invoke":fB(this,aj,ak).call(this,a);break;case"focusout":fB(this,al,am).call(this,a);break;case"keydown":fB(this,an,ao).call(this,a)}}connectedCallback(){fB(this,ad,ae).call(this),this.role||(this.role="dialog")}attributeChangedCallback(a,b,c){fB(this,ad,ae).call(this),a===fC.OPEN&&c!==b&&(this.open?fB(this,af,ag).call(this):fB(this,ah,ai).call(this))}focus(){fA(this,ab,dZ());let a=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),b=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(a||b)return;let c=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==c||c.focus()}get keysUsed(){return["Escape","Tab"]}}aa=new WeakMap,ab=new WeakMap,ac=new WeakMap,ad=new WeakSet,ae=function(){if(!fy(this,aa)&&(fA(this,aa,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let a=dS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a),queueMicrotask(()=>{let{style:a}=d0(this.shadowRoot,":host");a.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},af=new WeakSet,ag=function(){var a;null==(a=fy(this,ac))||a.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},ah=new WeakSet,ai=function(){var a;null==(a=fy(this,ac))||a.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},aj=new WeakSet,ak=function(a){fA(this,ac,a.relatedTarget),dX(this,a.relatedTarget)||(this.open=!this.open)},al=new WeakSet,am=function(a){var b;!dX(this,a.relatedTarget)&&(null==(b=fy(this,ab))||b.focus(),fy(this,ac)&&fy(this,ac)!==a.relatedTarget&&this.open&&(this.open=!1))},an=new WeakSet,ao=function(a){var b,c,d,e,f;let{key:g,ctrlKey:h,altKey:i,metaKey:j}=a;h||i||j||this.keysUsed.includes(g)&&(a.preventDefault(),a.stopPropagation(),"Tab"===g?(a.shiftKey?null==(c=null==(b=this.previousElementSibling)?void 0:b.focus)||c.call(b):null==(e=null==(d=this.nextElementSibling)?void 0:d.focus)||e.call(d),this.blur()):"Escape"===g&&(null==(f=fy(this,ab))||f.focus(),this.open=!1))},fD.shadowRootOptions={mode:"open"},fD.getTemplateHTML=function(a){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(a)}
  `},fD.getSlotTemplateHTML=function(a){return`
    <slot id="content"></slot>
  `},dL.customElements.get("media-chrome-dialog")||dL.customElements.define("media-chrome-dialog",fD);var fE=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fF=(a,b,c)=>(fE(a,b,"read from private field"),c?c.call(a):b.get(a)),fG=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},fH=(a,b,c,d)=>(fE(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),fI=(a,b,c)=>(fE(a,b,"access private method"),c);class fJ extends dL.HTMLElement{constructor(){if(super(),fG(this,ay),fG(this,aA),fG(this,aC),fG(this,aE),fG(this,aG),fG(this,aI),fG(this,aK),fG(this,aM),fG(this,ap,void 0),fG(this,aq,void 0),fG(this,ar,void 0),fG(this,as,void 0),fG(this,at,{}),fG(this,au,[]),fG(this,av,()=>{if(this.range.matches(":focus-visible")){let{style:a}=d0(this.shadowRoot,":host");a.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),fG(this,aw,()=>{let{style:a}=d0(this.shadowRoot,":host");a.removeProperty("--_focus-visible-box-shadow")}),fG(this,ax,()=>{let a=this.shadowRoot.querySelector("#segments-clipping");a&&a.parentNode.append(a)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dS(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}this.container=this.shadowRoot.querySelector("#container"),fH(this,ar,this.shadowRoot.querySelector("#startpoint")),fH(this,as,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",dd.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===dd.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=fF(this,ap))?void 0:d.unassociateElement)||e.call(d,this),fH(this,ap,null)),c&&this.isConnected&&(fH(this,ap,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=fF(this,ap))?void 0:g.associateElement)||h.call(g,this))):("disabled"===a||"aria-disabled"===a&&b!==c)&&(null==c?(this.range.removeAttribute(a),fI(this,aA,aB).call(this)):(this.range.setAttribute(a,c),fI(this,aC,aD).call(this)))}connectedCallback(){var a,b,c;let{style:d}=d0(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),fF(this,at).pointer=d0(this.shadowRoot,"#pointer"),fF(this,at).progress=d0(this.shadowRoot,"#progress"),fF(this,at).thumb=d0(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),fF(this,at).activeSegment=d0(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let e=this.getAttribute(dd.MEDIA_CONTROLLER);e&&(fH(this,ap,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=fF(this,ap))?void 0:b.associateElement)||c.call(b,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",fF(this,av)),this.shadowRoot.addEventListener("focusout",fF(this,aw)),fI(this,aA,aB).call(this),dQ(this.container,fF(this,ax))}disconnectedCallback(){var a,b;fI(this,aC,aD).call(this),null==(b=null==(a=fF(this,ap))?void 0:a.unassociateElement)||b.call(a,this),fH(this,ap,null),this.shadowRoot.removeEventListener("focusin",fF(this,av)),this.shadowRoot.removeEventListener("focusout",fF(this,aw)),dR(this.container,fF(this,ax))}updatePointerBar(a){var b;null==(b=fF(this,at).pointer)||b.style.setProperty("width",`${100*this.getPointerRatio(a)}%`)}updateBar(){var a,b;let c=100*this.range.valueAsNumber;null==(a=fF(this,at).progress)||a.style.setProperty("width",`${c}%`),null==(b=fF(this,at).thumb)||b.style.setProperty("left",`${c}%`)}updateSegments(a){let b=this.shadowRoot.querySelector("#segments-clipping");if(b.textContent="",this.container.classList.toggle("segments",!!(null==a?void 0:a.length)),!(null==a?void 0:a.length))return;let c=[...new Set([+this.range.min,...a.flatMap(a=>[a.start,a.end]),+this.range.max])];fH(this,au,[...c]);let d=c.pop();for(let[a,e]of c.entries()){let[f,g]=[0===a,a===c.length-1],h=f?"calc(var(--segments-gap) / -1)":`${100*e}%`,i=g?d:c[a+1],j=`calc(${(i-e)*100}%${f||g?"":" - var(--segments-gap)"})`,k=dM.createElementNS("http://www.w3.org/2000/svg","rect"),l=d0(this.shadowRoot,`#segments-clipping rect:nth-child(${a+1})`);l.style.setProperty("x",h),l.style.setProperty("width",j),b.append(k)}}getPointerRatio(a){return function(a,b,c,d){let e=d.x-c.x,f=d.y-c.y,g=e*e+f*f;return 0===g?0:Math.max(0,Math.min(1,((a-c.x)*e+(b-c.y)*f)/g))}(a.clientX,a.clientY,fF(this,ar).getBoundingClientRect(),fF(this,as).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(a){switch(a.type){case"pointermove":fI(this,aM,aN).call(this,a);break;case"input":this.updateBar();break;case"pointerenter":fI(this,aG,aH).call(this,a);break;case"pointerdown":fI(this,aE,aF).call(this,a);break;case"pointerup":fI(this,aI,aJ).call(this);break;case"pointerleave":fI(this,aK,aL).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}ap=new WeakMap,aq=new WeakMap,ar=new WeakMap,as=new WeakMap,at=new WeakMap,au=new WeakMap,av=new WeakMap,aw=new WeakMap,ax=new WeakMap,ay=new WeakSet,az=function(a){let b=fF(this,at).activeSegment;if(!b)return;let c=this.getPointerRatio(a),d=fF(this,au).findIndex((a,b,d)=>{let e=d[b+1];return null!=e&&c>=a&&c<=e}),e=`#segments-clipping rect:nth-child(${d+1})`;b.selectorText==e&&b.style.transform||(b.selectorText=e,b.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},aA=new WeakSet,aB=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},aC=new WeakSet,aD=function(){var a,b;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(a=dL.window)||a.removeEventListener("pointerup",this),null==(b=dL.window)||b.removeEventListener("pointermove",this)},aE=new WeakSet,aF=function(a){var b;fH(this,aq,a.composedPath().includes(this.range)),null==(b=dL.window)||b.addEventListener("pointerup",this)},aG=new WeakSet,aH=function(a){var b;"mouse"!==a.pointerType&&fI(this,aE,aF).call(this,a),this.addEventListener("pointerleave",this),null==(b=dL.window)||b.addEventListener("pointermove",this)},aI=new WeakSet,aJ=function(){var a;null==(a=dL.window)||a.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},aK=new WeakSet,aL=function(){var a,b;this.removeEventListener("pointerleave",this),null==(a=dL.window)||a.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(b=fF(this,at).activeSegment)||b.style.removeProperty("transform")},aM=new WeakSet,aN=function(a){this.toggleAttribute("dragging",1===a.buttons||"mouse"!==a.pointerType),this.updatePointerBar(a),fI(this,ay,az).call(this,a),this.dragging&&("mouse"!==a.pointerType||!fF(this,aq))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(a),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},fJ.shadowRootOptions={mode:"open"},fJ.getTemplateHTML=function(a){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `},dL.customElements.get("media-chrome-range")||dL.customElements.define("media-chrome-range",fJ);var fK=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fL=(a,b,c)=>(fK(a,b,"read from private field"),c?c.call(a):b.get(a)),fM=(a,b,c,d)=>(fK(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class fN extends dL.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aO,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[dd.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===dd.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=fL(this,aO))?void 0:d.unassociateElement)||e.call(d,this),fM(this,aO,null)),c&&this.isConnected&&(fM(this,aO,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=fL(this,aO))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let d=this.getAttribute(dd.MEDIA_CONTROLLER);d&&(fM(this,aO,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=fL(this,aO))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=fL(this,aO))?void 0:a.unassociateElement)||b.call(a,this),fM(this,aO,null)}}aO=new WeakMap,fN.shadowRootOptions={mode:"open"},fN.getTemplateHTML=function(a){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},dL.customElements.get("media-control-bar")||dL.customElements.define("media-control-bar",fN);var fO=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fP=(a,b,c)=>(fO(a,b,"read from private field"),c?c.call(a):b.get(a)),fQ=(a,b,c,d)=>(fO(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class fR extends dL.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aP,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[dd.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===dd.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=fP(this,aP))?void 0:d.unassociateElement)||e.call(d,this),fQ(this,aP,null)),c&&this.isConnected&&(fQ(this,aP,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=fP(this,aP))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let{style:d}=d0(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let e=this.getAttribute(dd.MEDIA_CONTROLLER);e&&(fQ(this,aP,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=fP(this,aP))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=fP(this,aP))?void 0:a.unassociateElement)||b.call(a,this),fQ(this,aP,null)}}aP=new WeakMap,fR.shadowRootOptions={mode:"open"},fR.getTemplateHTML=function(a,b={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(a,b)}
  `},fR.getSlotTemplateHTML=function(a,b){return`
    <slot></slot>
  `},dL.customElements.get("media-text-display")||dL.customElements.define("media-text-display",fR);var fS=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fT=(a,b,c)=>(fS(a,b,"read from private field"),c?c.call(a):b.get(a));class fU extends fR{constructor(){var a;super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aQ,void 0),((a,b,c,d)=>(fS(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,aQ,this.shadowRoot.querySelector("slot")),fT(this,aQ).textContent=dz(null!=(a=this.mediaDuration)?a:0)}static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_DURATION]}attributeChangedCallback(a,b,c){a===dg.MEDIA_DURATION&&(fT(this,aQ).textContent=dz(+c)),super.attributeChangedCallback(a,b,c)}get mediaDuration(){return d2(this,dg.MEDIA_DURATION)}set mediaDuration(a){d3(this,dg.MEDIA_DURATION,a)}}aQ=new WeakMap,fU.getSlotTemplateHTML=function(a,b){return`
    <slot>${dz(b.mediaDuration)}</slot>
  `},dL.customElements.get("media-duration-display")||dL.customElements.define("media-duration-display",fU);let fV={2:dC("Network Error"),3:dC("Decode Error"),4:dC("Source Not Supported"),5:dC("Encryption Error")},fW={2:dC("A network error caused the media download to fail."),3:dC("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:dC("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:dC("The media is encrypted and there are no keys to decrypt it.")},fX=a=>{var b,c;return 1===a.code?null:{title:null!=(b=fV[a.code])?b:`Error ${a.code}`,message:null!=(c=fW[a.code])?c:a.message}};var fY=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};function fZ(a){var b;let{title:c,message:d}=null!=(b=fX(a))?b:{},e="";return c&&(e+=`<slot name="error-${a.code}-title"><h3>${c}</h3></slot>`),d&&(e+=`<slot name="error-${a.code}-message"><p>${d}</p></slot>`),e}let f$=[dg.MEDIA_ERROR_CODE,dg.MEDIA_ERROR_MESSAGE];class f_ extends fD{constructor(){super(...arguments),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aR,null)}static get observedAttributes(){return[...super.observedAttributes,...f$]}formatErrorMessage(a){return this.constructor.formatErrorMessage(a)}attributeChangedCallback(a,b,c){var d;if(super.attributeChangedCallback(a,b,c),!f$.includes(a))return;let e=null!=(d=this.mediaError)?d:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=e.code&&null!==fX(e),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(e))}get mediaError(){var a,b;return fY(this,a=aR,"read from private field"),b?b.call(this):a.get(this)}set mediaError(a){var b,c;fY(this,b=aR,"write to private field"),c?c.call(this,a):b.set(this,a)}get mediaErrorCode(){return d2(this,"mediaerrorcode")}set mediaErrorCode(a){d3(this,"mediaerrorcode",a)}get mediaErrorMessage(){return d6(this,"mediaerrormessage")}set mediaErrorMessage(a){d7(this,"mediaerrormessage",a)}}aR=new WeakMap,f_.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${a.mediaerrorcode}" id="content">
      ${fZ({code:+a.mediaerrorcode,message:a.mediaerrormessage})}
    </slot>
  `},f_.formatErrorMessage=fZ,dL.customElements.get("media-error-dialog")||dL.customElements.define("media-error-dialog",f_);let f0=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,f1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,f2=a=>{let b=a.mediaIsFullscreen?dC("exit fullscreen mode"):dC("enter fullscreen mode");a.setAttribute("aria-label",b)};class f3 extends fl{static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_IS_FULLSCREEN,dg.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),f2(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dg.MEDIA_IS_FULLSCREEN&&f2(this)}get mediaFullscreenUnavailable(){return d6(this,dg.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(a){d7(this,dg.MEDIA_FULLSCREEN_UNAVAILABLE,a)}get mediaIsFullscreen(){return d4(this,dg.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(a){d5(this,dg.MEDIA_IS_FULLSCREEN,a)}handleClick(){let a=this.mediaIsFullscreen?dc.MEDIA_EXIT_FULLSCREEN_REQUEST:dc.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new dL.CustomEvent(a,{composed:!0,bubbles:!0}))}}f3.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${dg.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${dg.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${dg.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${dg.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${f0}</slot>
      <slot name="exit">${f1}</slot>
    </slot>
  `},f3.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${dC("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${dC("Exit fullscreen mode")}</slot>
  `},dL.customElements.get("media-fullscreen-button")||dL.customElements.define("media-fullscreen-button",f3);let{MEDIA_TIME_IS_LIVE:f4,MEDIA_PAUSED:f5}=dg,{MEDIA_SEEK_TO_LIVE_REQUEST:f6,MEDIA_PLAY_REQUEST:f7}=dc,f8=a=>{var b;let c=a.mediaPaused||!a.mediaTimeIsLive,d=c?dC("seek to live"):dC("playing live");a.setAttribute("aria-label",d);let e=null==(b=a.shadowRoot)?void 0:b.querySelector('slot[name="text"]');e&&(e.textContent=dC("live")),c?a.removeAttribute("aria-disabled"):a.setAttribute("aria-disabled","true")};class f9 extends fl{static get observedAttributes(){return[...super.observedAttributes,f4,f5]}connectedCallback(){super.connectedCallback(),f8(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),f8(this)}get mediaPaused(){return d4(this,dg.MEDIA_PAUSED)}set mediaPaused(a){d5(this,dg.MEDIA_PAUSED,a)}get mediaTimeIsLive(){return d4(this,dg.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(a){d5(this,dg.MEDIA_TIME_IS_LIVE,a)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new dL.CustomEvent(f6,{composed:!0,bubbles:!0})),this.hasAttribute(f5)&&this.dispatchEvent(new dL.CustomEvent(f7,{composed:!0,bubbles:!0})))}}f9.getSlotTemplateHTML=function(a){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${f4}]:not([${f5}])) slot[name=indicator] > *,
      :host([${f4}]:not([${f5}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${f4}]:not([${f5}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${dC("live")}</slot>
  `},dL.customElements.get("media-live-button")||dL.customElements.define("media-live-button",f9);var ga=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gb=(a,b,c)=>(ga(a,b,"read from private field"),c?c.call(a):b.get(a)),gc=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},gd=(a,b,c,d)=>(ga(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let ge={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},gf=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class gg extends dL.HTMLElement{constructor(){if(super(),gc(this,aS,void 0),gc(this,aT,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[dd.MEDIA_CONTROLLER,dg.MEDIA_PAUSED,dg.MEDIA_LOADING,ge.LOADING_DELAY]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===ge.LOADING_DELAY&&b!==c?this.loadingDelay=Number(c):a===dd.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=gb(this,aS))?void 0:d.unassociateElement)||e.call(d,this),gd(this,aS,null)),c&&this.isConnected&&(gd(this,aS,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=gb(this,aS))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let d=this.getAttribute(dd.MEDIA_CONTROLLER);d&&(gd(this,aS,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=gb(this,aS))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=gb(this,aS))?void 0:a.unassociateElement)||b.call(a,this),gd(this,aS,null)}get loadingDelay(){return gb(this,aT)}set loadingDelay(a){gd(this,aT,a);let{style:b}=d0(this.shadowRoot,":host");b.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${a}ms)`)}get mediaPaused(){return d4(this,dg.MEDIA_PAUSED)}set mediaPaused(a){d5(this,dg.MEDIA_PAUSED,a)}get mediaLoading(){return d4(this,dg.MEDIA_LOADING)}set mediaLoading(a){d5(this,dg.MEDIA_LOADING,a)}get mediaController(){return d6(this,dd.MEDIA_CONTROLLER)}set mediaController(a){d7(this,dd.MEDIA_CONTROLLER,a)}get noAutohide(){return d4(this,ge.NO_AUTOHIDE)}set noAutohide(a){d5(this,ge.NO_AUTOHIDE,a)}}aS=new WeakMap,aT=new WeakMap,gg.shadowRootOptions={mode:"open"},gg.getTemplateHTML=function(a){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${dg.MEDIA_LOADING}]:not([${dg.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${dg.MEDIA_LOADING}]:not([${dg.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${dg.MEDIA_LOADING}]:not([${dg.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${gf}</slot>
    <div id="status" role="status" aria-live="polite">${dC("media loading")}</div>
  `},dL.customElements.get("media-loading-indicator")||dL.customElements.define("media-loading-indicator",gg);let gh=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,gi=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,gj=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,gk=a=>{let b="off"===a.mediaVolumeLevel?dC("unmute"):dC("mute");a.setAttribute("aria-label",b)};class gl extends fl{static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),gk(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dg.MEDIA_VOLUME_LEVEL&&gk(this)}get mediaVolumeLevel(){return d6(this,dg.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(a){d7(this,dg.MEDIA_VOLUME_LEVEL,a)}handleClick(){let a="off"===this.mediaVolumeLevel?dc.MEDIA_UNMUTE_REQUEST:dc.MEDIA_MUTE_REQUEST;this.dispatchEvent(new dL.CustomEvent(a,{composed:!0,bubbles:!0}))}}gl.getSlotTemplateHTML=function(a){return`
    <style>
      :host(:not([${dg.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${dg.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${dg.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${dg.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${dg.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${dg.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${dg.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${gh}</slot>
      <slot name="low">${gi}</slot>
      <slot name="medium">${gi}</slot>
      <slot name="high">${gj}</slot>
    </slot>
  `},gl.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${dC("Mute")}</slot>
    <slot name="tooltip-unmute">${dC("Unmute")}</slot>
  `},dL.customElements.get("media-mute-button")||dL.customElements.define("media-mute-button",gl);let gm=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,gn=a=>{let b=a.mediaIsPip?dC("exit picture in picture mode"):dC("enter picture in picture mode");a.setAttribute("aria-label",b)};class go extends fl{static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_IS_PIP,dg.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),gn(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dg.MEDIA_IS_PIP&&gn(this)}get mediaPipUnavailable(){return d6(this,dg.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(a){d7(this,dg.MEDIA_PIP_UNAVAILABLE,a)}get mediaIsPip(){return d4(this,dg.MEDIA_IS_PIP)}set mediaIsPip(a){d5(this,dg.MEDIA_IS_PIP,a)}handleClick(){let a=this.mediaIsPip?dc.MEDIA_EXIT_PIP_REQUEST:dc.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new dL.CustomEvent(a,{composed:!0,bubbles:!0}))}}go.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${dg.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${dg.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${dg.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${dg.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${gm}</slot>
      <slot name="exit">${gm}</slot>
    </slot>
  `},go.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${dC("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${dC("Exit picture in picture mode")}</slot>
  `},dL.customElements.get("media-pip-button")||dL.customElements.define("media-pip-button",go);var gp=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot read from private field");return c?c.call(a):b.get(a)};let gq={RATES:"rates"},gr=[1,1.2,1.5,1.7,2];class gs extends fl{constructor(){var a;super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aU,new ep(this,gq.RATES,{defaultValue:gr})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(a=this.mediaPlaybackRate)?a:1}x`}static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_PLAYBACK_RATE,gq.RATES]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===gq.RATES&&(gp(this,aU).value=c),a===dg.MEDIA_PLAYBACK_RATE){let a=c?+c:NaN,b=Number.isNaN(a)?1:a;this.container.innerHTML=`${b}x`,this.setAttribute("aria-label",dC("Playback rate {playbackRate}",{playbackRate:b}))}}get rates(){return gp(this,aU)}set rates(a){a?Array.isArray(a)?gp(this,aU).value=a.join(" "):"string"==typeof a&&(gp(this,aU).value=a):gp(this,aU).value=""}get mediaPlaybackRate(){return d2(this,dg.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){d3(this,dg.MEDIA_PLAYBACK_RATE,a)}handleClick(){var a,b;let c=Array.from(gp(this,aU).values(),a=>+a).sort((a,b)=>a-b),d=null!=(b=null!=(a=c.find(a=>a>this.mediaPlaybackRate))?a:c[0])?b:1,e=new dL.CustomEvent(dc.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:d});this.dispatchEvent(e)}}aU=new WeakMap,gs.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${a.mediaplaybackrate||1}x</slot>
  `},gs.getTooltipContentHTML=function(){return dC("Playback rate")},dL.customElements.get("media-playback-rate-button")||dL.customElements.define("media-playback-rate-button",gs);let gt=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,gu=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,gv=a=>{let b=a.mediaPaused?dC("play"):dC("pause");a.setAttribute("aria-label",b)};class gw extends fl{static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_PAUSED,dg.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),gv(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),(a===dg.MEDIA_PAUSED||a===dg.MEDIA_LANG)&&gv(this)}get mediaPaused(){return d4(this,dg.MEDIA_PAUSED)}set mediaPaused(a){d5(this,dg.MEDIA_PAUSED,a)}handleClick(){let a=this.mediaPaused?dc.MEDIA_PLAY_REQUEST:dc.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new dL.CustomEvent(a,{composed:!0,bubbles:!0}))}}gw.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${dg.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${dg.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${dg.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${dg.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${gt}</slot>
      <slot name="pause">${gu}</slot>
    </slot>
  `},gw.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${dC("Play")}</slot>
    <slot name="tooltip-pause">${dC("Pause")}</slot>
  `},dL.customElements.get("media-play-button")||dL.customElements.define("media-play-button",gw);let gx={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};class gy extends dL.HTMLElement{static get observedAttributes(){return[gx.PLACEHOLDER_SRC,gx.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(a,b,c){if(a===gx.SRC&&(null==c?this.image.removeAttribute(gx.SRC):this.image.setAttribute(gx.SRC,c)),a===gx.PLACEHOLDER_SRC)if(null==c)this.image.style.removeProperty("background-image");else{var d;d=this.image,d.style["background-image"]=`url('${c}')`}}get placeholderSrc(){return d6(this,gx.PLACEHOLDER_SRC)}set placeholderSrc(a){d7(this,gx.SRC,a)}get src(){return d6(this,gx.SRC)}set src(a){d7(this,gx.SRC,a)}}gy.shadowRootOptions={mode:"open"},gy.getTemplateHTML=function(a){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},dL.customElements.get("media-poster-image")||dL.customElements.define("media-poster-image",gy);var gz=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};class gA extends fR{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aV,void 0),((a,b,c,d)=>(gz(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,aV,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_PREVIEW_CHAPTER,dg.MEDIA_LANG]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),(a===dg.MEDIA_PREVIEW_CHAPTER||a===dg.MEDIA_LANG)&&c!==b&&null!=c){var d,e;if((gz(this,d=aV,"read from private field"),e?e.call(this):d.get(this)).textContent=c,""!==c){let a=dC("chapter: {chapterName}",{chapterName:c});this.setAttribute("aria-valuetext",a)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return d6(this,dg.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(a){d7(this,dg.MEDIA_PREVIEW_CHAPTER,a)}}aV=new WeakMap,dL.customElements.get("media-preview-chapter-display")||dL.customElements.define("media-preview-chapter-display",gA);var gB=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gC=(a,b,c)=>(gB(a,b,"read from private field"),c?c.call(a):b.get(a)),gD=(a,b,c,d)=>(gB(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class gE extends dL.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aW,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[dd.MEDIA_CONTROLLER,dg.MEDIA_PREVIEW_IMAGE,dg.MEDIA_PREVIEW_COORDS]}connectedCallback(){var a,b,c;let d=this.getAttribute(dd.MEDIA_CONTROLLER);d&&(gD(this,aW,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=gC(this,aW))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=gC(this,aW))?void 0:a.unassociateElement)||b.call(a,this),gD(this,aW,null)}attributeChangedCallback(a,b,c){var d,e,f,g,h;[dg.MEDIA_PREVIEW_IMAGE,dg.MEDIA_PREVIEW_COORDS].includes(a)&&this.update(),a===dd.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=gC(this,aW))?void 0:d.unassociateElement)||e.call(d,this),gD(this,aW,null)),c&&this.isConnected&&(gD(this,aW,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=gC(this,aW))?void 0:g.associateElement)||h.call(g,this)))}get mediaPreviewImage(){return d6(this,dg.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(a){d7(this,dg.MEDIA_PREVIEW_IMAGE,a)}get mediaPreviewCoords(){let a=this.getAttribute(dg.MEDIA_PREVIEW_COORDS);if(a)return a.split(/\s+/).map(a=>+a)}set mediaPreviewCoords(a){if(!a)return void this.removeAttribute(dg.MEDIA_PREVIEW_COORDS);this.setAttribute(dg.MEDIA_PREVIEW_COORDS,a.join(" "))}update(){let a=this.mediaPreviewCoords,b=this.mediaPreviewImage;if(!(a&&b))return;let[c,d,e,f]=a,g=b.split("#")[0],{maxWidth:h,maxHeight:i,minWidth:j,minHeight:k}=getComputedStyle(this),l=Math.min(parseInt(h)/e,parseInt(i)/f),m=Math.max(parseInt(j)/e,parseInt(k)/f),n=l<1,o=n?l:m>1?m:1,{style:p}=d0(this.shadowRoot,":host"),q=d0(this.shadowRoot,"img").style,r=this.shadowRoot.querySelector("img"),s=n?"min":"max";p.setProperty(`${s}-width`,"initial","important"),p.setProperty(`${s}-height`,"initial","important"),p.width=`${e*o}px`,p.height=`${f*o}px`;let t=()=>{q.width=`${this.imgWidth*o}px`,q.height=`${this.imgHeight*o}px`,q.display="block"};r.src!==g&&(r.onload=()=>{this.imgWidth=r.naturalWidth,this.imgHeight=r.naturalHeight,t()},r.src=g,t()),t(),q.transform=`translate(-${c*o}px, -${d*o}px)`}}aW=new WeakMap,gE.shadowRootOptions={mode:"open"},gE.getTemplateHTML=function(a){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},dL.customElements.get("media-preview-thumbnail")||dL.customElements.define("media-preview-thumbnail",gE);var gF=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gG=(a,b,c)=>(gF(a,b,"read from private field"),c?c.call(a):b.get(a));class gH extends fR{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aX,void 0),((a,b,c,d)=>(gF(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,aX,this.shadowRoot.querySelector("slot")),gG(this,aX).textContent=dz(0)}static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_PREVIEW_TIME]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dg.MEDIA_PREVIEW_TIME&&null!=c&&(gG(this,aX).textContent=dz(parseFloat(c)))}get mediaPreviewTime(){return d2(this,dg.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(a){d3(this,dg.MEDIA_PREVIEW_TIME,a)}}aX=new WeakMap,dL.customElements.get("media-preview-time-display")||dL.customElements.define("media-preview-time-display",gH);let gI={SEEK_OFFSET:"seekoffset"};class gJ extends fl{static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_CURRENT_TIME,gI.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=d2(this,gI.SEEK_OFFSET,30)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===gI.SEEK_OFFSET&&(this.seekOffset=d2(this,gI.SEEK_OFFSET,30))}get seekOffset(){return d2(this,gI.SEEK_OFFSET,30)}set seekOffset(a){d3(this,gI.SEEK_OFFSET,a),this.setAttribute("aria-label",dC("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),dV(dW(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return d2(this,dg.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(a){d3(this,dg.MEDIA_CURRENT_TIME,a)}handleClick(){let a=Math.max(this.mediaCurrentTime-this.seekOffset,0),b=new dL.CustomEvent(dc.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)}}gJ.getSlotTemplateHTML=function(a,b){let c;return`
    <slot name="icon">${c=b.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${c}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},gJ.getTooltipContentHTML=function(){return dC("Seek backward")},dL.customElements.get("media-seek-backward-button")||dL.customElements.define("media-seek-backward-button",gJ);let gK={SEEK_OFFSET:"seekoffset"};class gL extends fl{static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_CURRENT_TIME,gK.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=d2(this,gK.SEEK_OFFSET,30)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===gK.SEEK_OFFSET&&(this.seekOffset=d2(this,gK.SEEK_OFFSET,30))}get seekOffset(){return d2(this,gK.SEEK_OFFSET,30)}set seekOffset(a){d3(this,gK.SEEK_OFFSET,a),this.setAttribute("aria-label",dC("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),dV(dW(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return d2(this,dg.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(a){d3(this,dg.MEDIA_CURRENT_TIME,a)}handleClick(){let a=this.mediaCurrentTime+this.seekOffset,b=new dL.CustomEvent(dc.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)}}gL.getSlotTemplateHTML=function(a,b){let c;return`
    <slot name="icon">${c=b.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${c}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},gL.getTooltipContentHTML=function(){return dC("Seek forward")},dL.customElements.get("media-seek-forward-button")||dL.customElements.define("media-seek-forward-button",gL);var gM=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gN=(a,b,c)=>(gM(a,b,"read from private field"),c?c.call(a):b.get(a));let gO={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},gP=[...Object.values(gO),dg.MEDIA_CURRENT_TIME,dg.MEDIA_DURATION,dg.MEDIA_SEEKABLE],gQ=["Enter"," "],gR="&nbsp;/&nbsp;",gS=(a,{timesSep:b=gR}={})=>{var c,d;let e=null!=(c=a.mediaCurrentTime)?c:0,[,f]=null!=(d=a.mediaSeekable)?d:[],g=0;Number.isFinite(a.mediaDuration)?g=a.mediaDuration:Number.isFinite(f)&&(g=f);let h=a.remaining?dz(0-(g-e)):dz(e);return a.showDuration?`${h}${b}${dz(g)}`:h};class gT extends fR{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,aY,void 0),((a,b,c,d)=>(gM(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,aY,this.shadowRoot.querySelector("slot")),gN(this,aY).innerHTML=`${gS(this)}`}static get observedAttributes(){return[...super.observedAttributes,...gP,"disabled"]}connectedCallback(){let{style:a}=d0(this.shadowRoot,":host(:hover:not([notoggle]))");a.setProperty("cursor","var(--media-cursor, pointer)"),a.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",dC("playback time"));let b=a=>{let{key:c}=a;if(!gQ.includes(c))return void this.removeEventListener("keyup",b);this.toggleTimeDisplay()};this.addEventListener("keydown",a=>{let{metaKey:c,altKey:d,key:e}=a;if(c||d||!gQ.includes(e))return void this.removeEventListener("keyup",b);this.addEventListener("keyup",b)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(a,b,c){gP.includes(a)?this.update():"disabled"===a&&c!==b&&(null==c?this.enable():this.disable()),super.attributeChangedCallback(a,b,c)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return d4(this,gO.REMAINING)}set remaining(a){d5(this,gO.REMAINING,a)}get showDuration(){return d4(this,gO.SHOW_DURATION)}set showDuration(a){d5(this,gO.SHOW_DURATION,a)}get noToggle(){return d4(this,gO.NO_TOGGLE)}set noToggle(a){d5(this,gO.NO_TOGGLE,a)}get mediaDuration(){return d2(this,dg.MEDIA_DURATION)}set mediaDuration(a){d3(this,dg.MEDIA_DURATION,a)}get mediaCurrentTime(){return d2(this,dg.MEDIA_CURRENT_TIME)}set mediaCurrentTime(a){d3(this,dg.MEDIA_CURRENT_TIME,a)}get mediaSeekable(){let a=this.getAttribute(dg.MEDIA_SEEKABLE);if(a)return a.split(":").map(a=>+a)}set mediaSeekable(a){if(null==a)return void this.removeAttribute(dg.MEDIA_SEEKABLE);this.setAttribute(dg.MEDIA_SEEKABLE,a.join(":"))}update(){let a=gS(this);(a=>{var b;let c=a.mediaCurrentTime,[,d]=null!=(b=a.mediaSeekable)?b:[],e=null;if(Number.isFinite(a.mediaDuration)?e=a.mediaDuration:Number.isFinite(d)&&(e=d),null==c||null===e)return a.setAttribute("aria-valuetext","video not loaded, unknown time.");let f=a.remaining?dy(0-(e-c)):dy(c);if(!a.showDuration)return a.setAttribute("aria-valuetext",f);let g=dy(e),h=`${f} of ${g}`;a.setAttribute("aria-valuetext",h)})(this),a!==gN(this,aY).innerHTML&&(gN(this,aY).innerHTML=a)}}aY=new WeakMap,gT.getSlotTemplateHTML=function(a,b){return`
    <slot>${gS(b)}</slot>
  `},dL.customElements.get("media-time-display")||dL.customElements.define("media-time-display",gT);var gU=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gV=(a,b,c)=>(gU(a,b,"read from private field"),c?c.call(a):b.get(a)),gW=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},gX=(a,b,c,d)=>(gU(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class gY{constructor(a,b,c){gW(this,aZ,void 0),gW(this,a$,void 0),gW(this,a_,void 0),gW(this,a0,void 0),gW(this,a1,void 0),gW(this,a2,void 0),gW(this,a3,void 0),gW(this,a4,void 0),gW(this,a5,0),gW(this,a6,(a=performance.now())=>{gX(this,a5,requestAnimationFrame(gV(this,a6))),gX(this,a0,performance.now()-gV(this,a_));let b=1e3/this.fps;if(gV(this,a0)>b){gX(this,a_,a-gV(this,a0)%b);let c=1e3/((a-gV(this,a$))/++((a,b,c,d)=>({set _(value){gX(a,b,value,c)},get _(){return gV(a,b,d)}}))(this,a1)._),d=(a-gV(this,a2))/1e3/this.duration,e=gV(this,a3)+d*this.playbackRate;e-gV(this,aZ).valueAsNumber>0?gX(this,a4,this.playbackRate/this.duration/c):(gX(this,a4,.995*gV(this,a4)),e=gV(this,aZ).valueAsNumber+gV(this,a4)),this.callback(e)}}),gX(this,aZ,a),this.callback=b,this.fps=c}start(){0===gV(this,a5)&&(gX(this,a_,performance.now()),gX(this,a$,gV(this,a_)),gX(this,a1,0),gV(this,a6).call(this))}stop(){0!==gV(this,a5)&&(cancelAnimationFrame(gV(this,a5)),gX(this,a5,0))}update({start:a,duration:b,playbackRate:c}){let d=a-gV(this,aZ).valueAsNumber,e=Math.abs(b-this.duration);(d>0||d<-.03||e>=.5)&&this.callback(a),gX(this,a3,a),gX(this,a2,performance.now()),this.duration=b,this.playbackRate=c}}aZ=new WeakMap,a$=new WeakMap,a_=new WeakMap,a0=new WeakMap,a1=new WeakMap,a2=new WeakMap,a3=new WeakMap,a4=new WeakMap,a5=new WeakMap,a6=new WeakMap;var gZ=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},g$=(a,b,c)=>(gZ(a,b,"read from private field"),c?c.call(a):b.get(a)),g_=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},g0=(a,b,c,d)=>(gZ(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),g1=(a,b,c)=>(gZ(a,b,"access private method"),c);let g2=(a,b=a.mediaCurrentTime)=>{let c=Number.isFinite(a.mediaSeekableStart)?a.mediaSeekableStart:0,d=Number.isFinite(a.mediaDuration)?a.mediaDuration:a.mediaSeekableEnd;return Number.isNaN(d)?0:Math.max(0,Math.min((b-c)/(d-c),1))},g3=(a,b=a.range.valueAsNumber)=>{let c=Number.isFinite(a.mediaSeekableStart)?a.mediaSeekableStart:0,d=Number.isFinite(a.mediaDuration)?a.mediaDuration:a.mediaSeekableEnd;return Number.isNaN(d)?0:b*(d-c)+c};class g4 extends fJ{constructor(){super(),g_(this,bh),g_(this,bj),g_(this,bm),g_(this,bo),g_(this,bq),g_(this,bs),g_(this,bu),g_(this,bw),g_(this,a7,void 0),g_(this,a8,void 0),g_(this,a9,void 0),g_(this,ba,void 0),g_(this,bb,void 0),g_(this,bc,void 0),g_(this,bd,void 0),g_(this,be,void 0),g_(this,bf,void 0),g_(this,bg,void 0),g_(this,bl,a=>{!this.dragging&&(du(a)&&(this.range.valueAsNumber=a),g$(this,bg)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),g0(this,a9,this.shadowRoot.querySelectorAll('[part~="box"]')),g0(this,bb,this.shadowRoot.querySelector('[part~="preview-box"]')),g0(this,bc,this.shadowRoot.querySelector('[part~="current-box"]'));let a=getComputedStyle(this);g0(this,bd,parseInt(a.getPropertyValue("--media-box-padding-left"))),g0(this,be,parseInt(a.getPropertyValue("--media-box-padding-right"))),g0(this,a8,new gY(this.range,g$(this,bl),60))}static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_PAUSED,dg.MEDIA_DURATION,dg.MEDIA_SEEKABLE,dg.MEDIA_CURRENT_TIME,dg.MEDIA_PREVIEW_IMAGE,dg.MEDIA_PREVIEW_TIME,dg.MEDIA_PREVIEW_CHAPTER,dg.MEDIA_BUFFERED,dg.MEDIA_PLAYBACK_RATE,dg.MEDIA_LOADING,dg.MEDIA_ENDED]}connectedCallback(){var a;super.connectedCallback(),this.range.setAttribute("aria-label",dC("seek")),g1(this,bh,bi).call(this),g0(this,a7,this.getRootNode()),null==(a=g$(this,a7))||a.addEventListener("transitionstart",this)}disconnectedCallback(){var a;super.disconnectedCallback(),g1(this,bh,bi).call(this),null==(a=g$(this,a7))||a.removeEventListener("transitionstart",this),g0(this,a7,null)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),b!=c&&(a===dg.MEDIA_CURRENT_TIME||a===dg.MEDIA_PAUSED||a===dg.MEDIA_ENDED||a===dg.MEDIA_LOADING||a===dg.MEDIA_DURATION||a===dg.MEDIA_SEEKABLE?(g$(this,a8).update({start:g2(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),g1(this,bh,bi).call(this),(a=>{let b=a.range,c=dy(+g3(a)),d=dy(+a.mediaSeekableEnd),e=c&&d?`${c} of ${d}`:"video not loaded, unknown time.";b.setAttribute("aria-valuetext",e)})(this)):a===dg.MEDIA_BUFFERED&&this.updateBufferedBar(),(a===dg.MEDIA_DURATION||a===dg.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=g$(this,bf),this.updateBar()))}get mediaChaptersCues(){return g$(this,bf)}set mediaChaptersCues(a){var b;g0(this,bf,a),this.updateSegments(null==(b=g$(this,bf))?void 0:b.map(a=>({start:g2(this,a.startTime),end:g2(this,a.endTime)})))}get mediaPaused(){return d4(this,dg.MEDIA_PAUSED)}set mediaPaused(a){d5(this,dg.MEDIA_PAUSED,a)}get mediaLoading(){return d4(this,dg.MEDIA_LOADING)}set mediaLoading(a){d5(this,dg.MEDIA_LOADING,a)}get mediaDuration(){return d2(this,dg.MEDIA_DURATION)}set mediaDuration(a){d3(this,dg.MEDIA_DURATION,a)}get mediaCurrentTime(){return d2(this,dg.MEDIA_CURRENT_TIME)}set mediaCurrentTime(a){d3(this,dg.MEDIA_CURRENT_TIME,a)}get mediaPlaybackRate(){return d2(this,dg.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){d3(this,dg.MEDIA_PLAYBACK_RATE,a)}get mediaBuffered(){let a=this.getAttribute(dg.MEDIA_BUFFERED);return a?a.split(" ").map(a=>a.split(":").map(a=>+a)):[]}set mediaBuffered(a){if(!a)return void this.removeAttribute(dg.MEDIA_BUFFERED);let b=a.map(a=>a.join(":")).join(" ");this.setAttribute(dg.MEDIA_BUFFERED,b)}get mediaSeekable(){let a=this.getAttribute(dg.MEDIA_SEEKABLE);if(a)return a.split(":").map(a=>+a)}set mediaSeekable(a){if(null==a)return void this.removeAttribute(dg.MEDIA_SEEKABLE);this.setAttribute(dg.MEDIA_SEEKABLE,a.join(":"))}get mediaSeekableEnd(){var a;let[,b=this.mediaDuration]=null!=(a=this.mediaSeekable)?a:[];return b}get mediaSeekableStart(){var a;let[b=0]=null!=(a=this.mediaSeekable)?a:[];return b}get mediaPreviewImage(){return d6(this,dg.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(a){d7(this,dg.MEDIA_PREVIEW_IMAGE,a)}get mediaPreviewTime(){return d2(this,dg.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(a){d3(this,dg.MEDIA_PREVIEW_TIME,a)}get mediaEnded(){return d4(this,dg.MEDIA_ENDED)}set mediaEnded(a){d5(this,dg.MEDIA_ENDED,a)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var a;let b,c=this.mediaBuffered;if(!c.length)return;if(this.mediaEnded)b=1;else{let d=this.mediaCurrentTime,[,e=this.mediaSeekableStart]=null!=(a=c.find(([a,b])=>a<=d&&d<=b))?a:[];b=g2(this,e)}let{style:d}=d0(this.shadowRoot,"#buffered");d.setProperty("width",`${100*b}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let a=d0(this.shadowRoot,"#current-rail"),b=d0(this.shadowRoot,'[part~="current-box"]'),c=g1(this,bm,bn).call(this,g$(this,bc)),d=g1(this,bo,bp).call(this,c,this.range.valueAsNumber),e=g1(this,bq,br).call(this,c,this.range.valueAsNumber);a.style.transform=`translateX(${d})`,a.style.setProperty("--_range-width",`${c.range.width}`),b.style.setProperty("--_box-shift",`${e}`),b.style.setProperty("--_box-width",`${c.box.width}px`),b.style.setProperty("visibility","initial")}handleEvent(a){switch(super.handleEvent(a),a.type){case"input":g1(this,bw,bx).call(this);break;case"pointermove":g1(this,bs,bt).call(this,a);break;case"pointerup":g$(this,bg)&&g0(this,bg,!1);break;case"pointerdown":g0(this,bg,!0);break;case"pointerleave":g1(this,bu,bv).call(this,null);break;case"transitionstart":dX(a.target,this)&&setTimeout(()=>g1(this,bh,bi).call(this),0)}}}a7=new WeakMap,a8=new WeakMap,a9=new WeakMap,ba=new WeakMap,bb=new WeakMap,bc=new WeakMap,bd=new WeakMap,be=new WeakMap,bf=new WeakMap,bg=new WeakMap,bh=new WeakSet,bi=function(){g1(this,bj,bk).call(this)?g$(this,a8).start():g$(this,a8).stop()},bj=new WeakSet,bk=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&d_(this)},bl=new WeakMap,bm=new WeakSet,bn=function(a){var b;let c=(null!=(b=this.getAttribute("bounds")?dY(this,`#${this.getAttribute("bounds")}`):this.parentElement)?b:this).getBoundingClientRect(),d=this.range.getBoundingClientRect(),e=a.offsetWidth,f=-(d.left-c.left-e/2),g=c.right-d.left-e/2;return{box:{width:e,min:f,max:g},bounds:c,range:d}},bo=new WeakSet,bp=function(a,b){let c=`${100*b}%`,{width:d,min:e,max:f}=a.box;if(!d)return c;if(!Number.isNaN(e)){let a=`calc(1 / var(--_range-width) * 100 * ${e}% + var(--media-box-padding-left))`;c=`max(${a}, ${c})`}if(!Number.isNaN(f)){let a=`calc(1 / var(--_range-width) * 100 * ${f}% - var(--media-box-padding-right))`;c=`min(${c}, ${a})`}return c},bq=new WeakSet,br=function(a,b){let{width:c,min:d,max:e}=a.box,f=b*a.range.width;if(f<d+g$(this,bd)){let b=a.range.left-a.bounds.left-g$(this,bd);return`${f-c/2+b}px`}if(f>e-g$(this,be)){let b=a.bounds.right-a.range.right-g$(this,be);return`${f+c/2-b-a.range.width}px`}return 0},bs=new WeakSet,bt=function(a){let b=[...g$(this,a9)].some(b=>a.composedPath().includes(b));if(!this.dragging&&(b||!a.composedPath().includes(this)))return void g1(this,bu,bv).call(this,null);let c=this.mediaSeekableEnd;if(!c)return;let d=d0(this.shadowRoot,"#preview-rail"),e=d0(this.shadowRoot,'[part~="preview-box"]'),f=g1(this,bm,bn).call(this,g$(this,bb)),g=(a.clientX-f.range.left)/f.range.width;g=Math.max(0,Math.min(1,g));let h=g1(this,bo,bp).call(this,f,g),i=g1(this,bq,br).call(this,f,g);d.style.transform=`translateX(${h})`,d.style.setProperty("--_range-width",`${f.range.width}`),e.style.setProperty("--_box-shift",`${i}`),e.style.setProperty("--_box-width",`${f.box.width}px`),1>Math.abs(Math.round(g$(this,ba))-Math.round(g*c))&&g>.01&&g<.99||(g0(this,ba,g*c),g1(this,bu,bv).call(this,g$(this,ba)))},bu=new WeakSet,bv=function(a){this.dispatchEvent(new dL.CustomEvent(dc.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:a}))},bw=new WeakSet,bx=function(){g$(this,a8).stop();let a=g3(this);this.dispatchEvent(new dL.CustomEvent(dc.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a}))},g4.shadowRootOptions={mode:"open"},g4.getTemplateHTML=function(a){return`
    ${fJ.getTemplateHTML(a)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${dg.MEDIA_PREVIEW_IMAGE}], [${dg.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${dg.MEDIA_PREVIEW_IMAGE}], [${dg.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${dg.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${dg.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${dg.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${dg.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${dg.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${dg.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${dg.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${dg.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${dg.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${dg.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${dg.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${dg.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${gE.shadowRootOptions.mode}">
            ${gE.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},dL.customElements.get("media-time-range")||dL.customElements.define("media-time-range",g4);class g5 extends fJ{static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_VOLUME,dg.MEDIA_MUTED,dg.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let a=this.range.value,b=new dL.CustomEvent(dc.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",dC("volume"))}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===dg.MEDIA_VOLUME||a===dg.MEDIA_MUTED){let a;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(a=this.range.valueAsNumber,`${Math.round(100*a)}%`)),this.updateBar()}}get mediaVolume(){return d2(this,dg.MEDIA_VOLUME,1)}set mediaVolume(a){d3(this,dg.MEDIA_VOLUME,a)}get mediaMuted(){return d4(this,dg.MEDIA_MUTED)}set mediaMuted(a){d5(this,dg.MEDIA_MUTED,a)}get mediaVolumeUnavailable(){return d6(this,dg.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(a){d7(this,dg.MEDIA_VOLUME_UNAVAILABLE,a)}}dL.customElements.get("media-volume-range")||dL.customElements.define("media-volume-range",g5);var g6=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},g7=(a,b,c)=>(g6(a,b,"read from private field"),c?c.call(a):b.get(a)),g8=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},g9=(a,b,c,d)=>(g6(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let ha={processCallback(a,b,c){if(c){for(let[a,d]of b)if(a in c){let b=c[a];"boolean"==typeof b&&d instanceof hi&&"boolean"==typeof d.element[d.attributeName]?d.booleanValue=b:"function"==typeof b&&d instanceof hi?d.element[d.attributeName]=b:d.value=b}}}};class hb extends dL.DocumentFragment{constructor(a,b,c=ha){var d;super(),g8(this,by,void 0),g8(this,bz,void 0),this.append(a.content.cloneNode(!0)),g9(this,by,hc(this)),g9(this,bz,c),null==(d=c.createCallback)||d.call(c,this,g7(this,by),b),c.processCallback(this,g7(this,by),b)}update(a){g7(this,bz).processCallback(this,g7(this,by),a)}}by=new WeakMap,bz=new WeakMap;let hc=(a,b=[])=>{let c,d;for(let e of a.attributes||[])if(e.value.includes("{{")){let f=new hh;for([c,d]of he(e.value))if(c){let c=new hi(a,e.name,e.namespaceURI);f.append(c),b.push([d,c])}else f.append(d);e.value=f.toString()}for(let e of a.childNodes)if(1!==e.nodeType||e instanceof HTMLTemplateElement){let f=e.data;if(1===e.nodeType||f.includes("{{")){let g=[];if(f)for([c,d]of he(f))if(c){let c=new hj(a);g.push(c),b.push([d,c])}else g.push(new Text(d));else if(e instanceof HTMLTemplateElement){let c=new hk(a,e);g.push(c),b.push([c.expression,c])}e.replaceWith(...g.flatMap(a=>a.replacementNodes||[a]))}}else hc(e,b);return b},hd={},he=a=>{let b="",c=0,d=hd[a],e=0,f;if(d)return d;for(d=[];f=a[e];e++)"{"===f&&"{"===a[e+1]&&"\\"!==a[e-1]&&a[e+2]&&1==++c?(b&&d.push([0,b]),b="",e++):"}"!==f||"}"!==a[e+1]||"\\"===a[e-1]||--c?b+=f||"":(d.push([1,b.trim()]),b="",e++);return b&&d.push([0,(c>0?"{{":"")+b]),hd[a]=d};class hf{get value(){return""}set value(a){}toString(){return this.value}}let hg=new WeakMap;class hh{constructor(){g8(this,bA,[])}[Symbol.iterator](){return g7(this,bA).values()}get length(){return g7(this,bA).length}item(a){return g7(this,bA)[a]}append(...a){for(let b of a)b instanceof hi&&hg.set(b,this),g7(this,bA).push(b)}toString(){return g7(this,bA).join("")}}bA=new WeakMap;class hi extends hf{constructor(a,b,c){super(),g8(this,bF),g8(this,bB,""),g8(this,bC,void 0),g8(this,bD,void 0),g8(this,bE,void 0),g9(this,bC,a),g9(this,bD,b),g9(this,bE,c)}get attributeName(){return g7(this,bD)}get attributeNamespace(){return g7(this,bE)}get element(){return g7(this,bC)}get value(){return g7(this,bB)}set value(a){g7(this,bB)!==a&&(g9(this,bB,a),g7(this,bF,bG)&&1!==g7(this,bF,bG).length?g7(this,bC).setAttributeNS(g7(this,bE),g7(this,bD),g7(this,bF,bG).toString()):null==a?g7(this,bC).removeAttributeNS(g7(this,bE),g7(this,bD)):g7(this,bC).setAttributeNS(g7(this,bE),g7(this,bD),a))}get booleanValue(){return g7(this,bC).hasAttributeNS(g7(this,bE),g7(this,bD))}set booleanValue(a){if(g7(this,bF,bG)&&1!==g7(this,bF,bG).length)throw new DOMException("Value is not fully templatized");this.value=a?"":null}}bB=new WeakMap,bC=new WeakMap,bD=new WeakMap,bE=new WeakMap,bF=new WeakSet,bG=function(){return hg.get(this)};class hj extends hf{constructor(a,b){super(),g8(this,bH,void 0),g8(this,bI,void 0),g9(this,bH,a),g9(this,bI,b?[...b]:[new Text])}get replacementNodes(){return g7(this,bI)}get parentNode(){return g7(this,bH)}get nextSibling(){return g7(this,bI)[g7(this,bI).length-1].nextSibling}get previousSibling(){return g7(this,bI)[0].previousSibling}get value(){return g7(this,bI).map(a=>a.textContent).join("")}set value(a){this.replace(a)}replace(...a){let b=a.flat().flatMap(a=>null==a?[new Text]:a.forEach?[...a]:11===a.nodeType?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);b.length||b.push(new Text),g9(this,bI,function(a,b,c,d=null){let e=0,f,g,h,i=c.length,j=b.length;for(;e<i&&e<j&&b[e]==c[e];)e++;for(;e<i&&e<j&&c[i-1]==b[j-1];)d=c[--j,--i];if(e==j)for(;e<i;)a.insertBefore(c[e++],d);if(e==i)for(;e<j;)a.removeChild(b[e++]);else{for(f=b[e];e<i;)h=c[e++],g=f?f.nextSibling:d,f==h?f=g:e<i&&c[e]==g?(a.replaceChild(h,f),f=g):a.insertBefore(h,f);for(;f!=d;)g=f.nextSibling,a.removeChild(f),f=g}return c}(g7(this,bI)[0].parentNode,g7(this,bI),b,this.nextSibling))}}bH=new WeakMap,bI=new WeakMap;class hk extends hj{constructor(a,b){let c=b.getAttribute("directive")||b.getAttribute("type"),d=b.getAttribute("expression")||b.getAttribute(c)||"";d.startsWith("{{")&&(d=d.trim().slice(2,-2).trim()),super(a),this.expression=d,this.template=b,this.directive=c}}let hl={string:a=>String(a)};class hm{constructor(a){this.template=a,this.state=void 0}}let hn=new WeakMap,ho=new WeakMap,hp={partial:(a,b)=>{b[a.expression]=new hm(a.template)},if:(a,b)=>{var c;if(ht(a.expression,b))if(hn.get(a)!==a.template){hn.set(a,a.template);let c=new hb(a.template,b,hr);a.replace(c),ho.set(a,c)}else null==(c=ho.get(a))||c.update(b);else a.replace(""),hn.delete(a),ho.delete(a)}},hq=Object.keys(hp),hr={processCallback(a,b,c){var d,e;if(c)for(let[a,f]of b){if(f instanceof hk){if(!f.directive){let a=hq.find(a=>f.template.hasAttribute(a));a&&(f.directive=a,f.expression=f.template.getAttribute(a))}null==(d=hp[f.directive])||d.call(hp,f,c);continue}let b=ht(a,c);if(b instanceof hm){hn.get(f)!==b.template?(hn.set(f,b.template),f.value=b=new hb(b.template,b.state,hr),ho.set(f,b)):null==(e=ho.get(f))||e.update(b.state);continue}b?(f instanceof hi&&f.attributeName.startsWith("aria-")&&(b=String(b)),f instanceof hi?"boolean"==typeof b?f.booleanValue=b:"function"==typeof b?f.element[f.attributeName]=b:f.value=b:(f.value=b,hn.delete(f),ho.delete(f))):f instanceof hi?f.value=void 0:(f.value=void 0,hn.delete(f),ho.delete(f))}}},hs={"!":a=>!a,"!!":a=>!!a,"==":(a,b)=>a==b,"!=":(a,b)=>a!=b,">":(a,b)=>a>b,">=":(a,b)=>a>=b,"<":(a,b)=>a<b,"<=":(a,b)=>a<=b,"??":(a,b)=>null!=a?a:b,"|":(a,b)=>{var c;return null==(c=hl[b])?void 0:c.call(hl,a)}};function ht(a,b={}){var c,d,e,f,g,h,i;let j=(function(a,b){let c,d,e,f=[];for(;a;){for(let f in e=null,c=a.length,b)(d=b[f].exec(a))&&d.index<c&&(e={token:d[0],type:f,matches:d.slice(1)},c=d.index);c&&f.push({token:a.substr(0,c),type:void 0}),e&&f.push(e),a=a.substr(c+(e?e.token.length:0))}return f})(a,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:a})=>"ws"!==a);if(0===j.length||j.some(({type:a})=>!a))return hu(a);if((null==(c=j[0])?void 0:c.token)===">"){let c=b[null==(d=j[1])?void 0:d.token];if(!c)return hu(a);let h={...b};c.state=h;let i=j.slice(2);for(let a=0;a<i.length;a+=3){let c=null==(e=i[a])?void 0:e.token,d=null==(f=i[a+1])?void 0:f.token,j=null==(g=i[a+2])?void 0:g.token;c&&"="===d&&(h[c]=hw(j,b))}return c}if(1===j.length)return hv(j[0])?hw(j[0].token,b):hu(a);if(2===j.length){let c=hs[null==(h=j[0])?void 0:h.token];return c&&hv(j[1])?c(hw(j[1].token,b)):hu(a)}if(3===j.length){let c=null==(i=j[1])?void 0:i.token,d=hs[c];if(!d||!hv(j[0])||!hv(j[2]))return hu(a);let e=hw(j[0].token,b);return d(e,"|"===c?j[2].token:hw(j[2].token,b))}}function hu(a){return console.warn(`Warning: invalid expression \`${a}\``),!1}function hv({type:a}){return["number","boolean","string","param"].includes(a)}function hw(a,b){let c=a[0],d=a.slice(-1);return"true"===a||"false"===a?"true"===a:c===d&&["'",'"'].includes(c)?a.slice(1,-1):dv(a)?parseFloat(a):b[a]}var hx=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hy=(a,b,c)=>(hx(a,b,"read from private field"),c?c.call(a):b.get(a)),hz=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},hA=(a,b,c,d)=>(hx(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),hB=(a,b,c)=>(hx(a,b,"access private method"),c);let hC={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},hD=dM.createElement("template");hD.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class hE extends dL.HTMLElement{constructor(){super(),hz(this,bM),hz(this,bO),hz(this,bJ,void 0),hz(this,bK,void 0),hz(this,bL,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let a=new MutationObserver(a=>{var b;(!this.mediaController||(null==(b=this.mediaController)?void 0:b.breakpointsComputed))&&a.some(a=>{let b=a.target;return b===this||"media-controller"===b.localName&&!!(hC[a.attributeName]||a.attributeName.startsWith("breakpoint"))})&&this.render()});a.observe(this,{attributes:!0}),a.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(dh.BREAKPOINTS_COMPUTED,this.render),hB(this,bM,bN).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var a;return null!=(a=hy(this,bJ))?a:this.constructor.template}set template(a){if(null===a)return void this.removeAttribute("template");"string"==typeof a?this.setAttribute("template",a):a instanceof HTMLTemplateElement&&(hA(this,bJ,a),hA(this,bL,null),this.createRenderer())}get props(){var a,b,c;let d=[...Array.from(null!=(b=null==(a=this.mediaController)?void 0:a.attributes)?b:[]).filter(({name:a})=>hC[a]||a.startsWith("breakpoint")),...Array.from(this.attributes)],e={};for(let a of d){let b=null!=(c=hC[a.name])?c:a.name.replace(/[-_]([a-z])/g,(a,b)=>b.toUpperCase()),{value:d}=a;null!=d?(dv(d)&&(d=parseFloat(d)),e[b]=""===d||d):e[b]=!1}return e}attributeChangedCallback(a,b,c){"template"===a&&b!=c&&hB(this,bO,bP).call(this)}connectedCallback(){hB(this,bO,bP).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==hy(this,bK)&&(hA(this,bK,this.template),this.renderer=new hb(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(hD.content.cloneNode(!0),this.renderer))}render(){var a;null==(a=this.renderer)||a.update(this.props)}}async function hF(a){let b=await fetch(a);if(200!==b.status)throw Error(`Failed to load resource: the server responded with a status of ${b.status}`);return b.text()}function hG(a){return a.split("-")[0]}bJ=new WeakMap,bK=new WeakMap,bL=new WeakMap,bM=new WeakSet,bN=function(a){if(Object.prototype.hasOwnProperty.call(this,a)){let b=this[a];delete this[a],this[a]=b}},bO=new WeakSet,bP=function(){var a;let b=this.getAttribute("template");if(!b||b===hy(this,bL))return;let c=this.getRootNode(),d=null==(a=null==c?void 0:c.getElementById)?void 0:a.call(c,b);if(d){hA(this,bL,b),hA(this,bJ,d),this.createRenderer();return}(function(a){if(!/^(\/|\.\/|https?:\/\/)/.test(a))return!1;let b=/^https?:\/\//.test(a)?void 0:location.origin;try{new URL(a,b)}catch(a){return!1}return!0})(b)&&(hA(this,bL,b),hF(b).then(a=>{let b=dM.createElement("template");b.innerHTML=a,hA(this,bJ,b),this.createRenderer()}).catch(console.error))},hE.observedAttributes=["template"],hE.processor=hr,dL.customElements.get("media-theme")||dL.customElements.define("media-theme",hE);class hH extends Event{constructor({action:a="auto",relatedTarget:b,...c}){super("invoke",c),this.action=a,this.relatedTarget=b}}class hI extends Event{constructor({newState:a,oldState:b,...c}){super("toggle",c),this.newState=a,this.oldState=b}}var hJ=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hK=(a,b,c)=>(hJ(a,b,"read from private field"),c?c.call(a):b.get(a)),hL=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},hM=(a,b,c,d)=>(hJ(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),hN=(a,b,c)=>(hJ(a,b,"access private method"),c);function hO({type:a,text:b,value:c,checked:d}){let e=dM.createElement("media-chrome-menu-item");e.type=null!=a?a:"",e.part.add("menu-item"),a&&e.part.add(a),e.value=c,e.checked=d;let f=dM.createElement("span");return f.textContent=b,e.append(f),e}function hP(a,b){let c=a.querySelector(`:scope > [slot="${b}"]`);if((null==c?void 0:c.nodeName)=="SLOT"&&(c=c.assignedElements({flatten:!0})[0]),c)return c.cloneNode(!0);let d=a.shadowRoot.querySelector(`[name="${b}"] > svg`);return d?d.cloneNode(!0):""}let hQ={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class hR extends dL.HTMLElement{constructor(){if(super(),hL(this,bX),hL(this,bZ),hL(this,b0),hL(this,b2),hL(this,b4),hL(this,b6),hL(this,ca),hL(this,cc),hL(this,ce),hL(this,cg),hL(this,ci),hL(this,ck),hL(this,cm),hL(this,co),hL(this,cq),hL(this,cs),hL(this,cu),hL(this,cw),hL(this,bQ,null),hL(this,bR,null),hL(this,bS,null),hL(this,bT,new Set),hL(this,bU,void 0),hL(this,bV,!1),hL(this,bW,null),hL(this,b_,()=>{let a=hK(this,bT),b=new Set(this.items);for(let c of a)b.has(c)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:c}));for(let c of b)a.has(c)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:c}));hM(this,bT,b)}),hL(this,b8,()=>{hN(this,ca,cb).call(this),hN(this,cc,cd).call(this,!1)}),hL(this,b9,()=>{hN(this,ca,cb).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),hM(this,bU,new MutationObserver(hK(this,b_))),hK(this,bU).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[hQ.DISABLED,hQ.HIDDEN,hQ.STYLE,hQ.ANCHOR,dd.MEDIA_CONTROLLER]}static formatMenuItemText(a,b){return a}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(a){switch(a.type){case"slotchange":hN(this,bX,bY).call(this,a);break;case"invoke":hN(this,b2,b3).call(this,a);break;case"click":hN(this,ce,cf).call(this,a);break;case"toggle":hN(this,ci,cj).call(this,a);break;case"focusout":hN(this,cm,cn).call(this,a);break;case"keydown":hN(this,co,cp).call(this,a)}}connectedCallback(){var a,b;hM(this,bW,d1(this.shadowRoot,":host")),hN(this,b0,b1).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),hM(this,bQ,dU(this)),null==(b=null==(a=hK(this,bQ))?void 0:a.associateElement)||b.call(a,this),this.hidden||(dQ(hT(this),hK(this,b8)),dQ(this,hK(this,b9))),hN(this,bZ,b$).call(this)}disconnectedCallback(){var a,b;dR(hT(this),hK(this,b8)),dR(this,hK(this,b9)),this.disable(),null==(b=null==(a=hK(this,bQ))?void 0:a.unassociateElement)||b.call(a,this),hM(this,bQ,null)}attributeChangedCallback(a,b,c){var d,e,f,g;a===hQ.HIDDEN&&c!==b?(hK(this,bV)||hM(this,bV,!0),this.hidden?hN(this,b6,b7).call(this):hN(this,b4,b5).call(this),this.dispatchEvent(new hI({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):a===dd.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=hK(this,bQ))?void 0:d.unassociateElement)||e.call(d,this),hM(this,bQ,null)),c&&this.isConnected&&(hM(this,bQ,dU(this)),null==(g=null==(f=hK(this,bQ))?void 0:f.associateElement)||g.call(f,this))):a===hQ.DISABLED&&c!==b?null==c?this.enable():this.disable():a===hQ.STYLE&&c!==b&&hN(this,b0,b1).call(this)}formatMenuItemText(a,b){return this.constructor.formatMenuItemText(a,b)}get anchor(){return this.getAttribute("anchor")}set anchor(a){this.setAttribute("anchor",`${a}`)}get anchorElement(){var a;return this.anchor?null==(a=d$(this))?void 0:a.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(hS)}get radioGroupItems(){return this.items.filter(a=>"menuitemradio"===a.role)}get checkedItems(){return this.items.filter(a=>a.checked)}get value(){var a,b;return null!=(b=null==(a=this.checkedItems[0])?void 0:a.value)?b:""}set value(a){let b=this.items.find(b=>b.value===a);b&&hN(this,cw,cx).call(this,b)}focus(){if(hM(this,bR,dZ()),this.items.length){hN(this,cu,cv).call(this,this.items[0]),this.items[0].focus();return}let a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==a||a.focus()}handleSelect(a){var b;let c=hN(this,cq,cr).call(this,a);c&&(hN(this,cw,cx).call(this,c,"checkbox"===c.type),hK(this,bS)&&!this.hidden&&(null==(b=hK(this,bR))||b.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(a){var b,c;let{key:d}=a,e=this.items,f=null!=(c=null!=(b=hN(this,cq,cr).call(this,a))?b:hN(this,cs,ct).call(this))?c:e[0],g=Math.max(0,e.indexOf(f));"ArrowDown"===d?g++:"ArrowUp"===d?g--:"Home"===a.key?g=0:"End"===a.key&&(g=e.length-1),g<0&&(g=e.length-1),g>e.length-1&&(g=0),hN(this,cu,cv).call(this,e[g]),e[g].focus()}}function hS(a){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==a?void 0:a.role)}function hT(a){var b;return null!=(b=a.getAttribute("bounds")?dY(a,`#${a.getAttribute("bounds")}`):dT(a)||a.parentElement)?b:a}bQ=new WeakMap,bR=new WeakMap,bS=new WeakMap,bT=new WeakMap,bU=new WeakMap,bV=new WeakMap,bW=new WeakMap,bX=new WeakSet,bY=function(a){let b=a.target;for(let a of b.assignedNodes({flatten:!0}))3===a.nodeType&&""===a.textContent.trim()&&a.remove();["header","title"].includes(b.name)&&hN(this,bZ,b$).call(this),b.name||hK(this,b_).call(this)},bZ=new WeakSet,b$=function(){let a=this.shadowRoot.querySelector('slot[name="header"]');a.hidden=0===this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length&&0===a.assignedNodes().length},b_=new WeakMap,b0=new WeakSet,b1=function(){var a;let b=this.shadowRoot.querySelector("#layout-row"),c=null==(a=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:a.trim();b.setAttribute("media","row"===c?"":"width:0")},b2=new WeakSet,b3=function(a){hM(this,bS,a.relatedTarget),dX(this,a.relatedTarget)||(this.hidden=!this.hidden)},b4=new WeakSet,b5=function(){var a;null==(a=hK(this,bS))||a.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),dQ(hT(this),hK(this,b8)),dQ(this,hK(this,b9))},b6=new WeakSet,b7=function(){var a;null==(a=hK(this,bS))||a.setAttribute("aria-expanded","false"),dR(hT(this),hK(this,b8)),dR(this,hK(this,b9))},b8=new WeakMap,b9=new WeakMap,ca=new WeakSet,cb=function(a){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:b,y:c}=function({anchor:a,floating:b,placement:c}){let{x:d,y:e}=function({anchor:a,floating:b},c){let d,e="x"==(["top","bottom"].includes(hG(c))?"y":"x")?"y":"x",f="y"===e?"height":"width",g=hG(c),h=a.x+a.width/2-b.width/2,i=a.y+a.height/2-b.height/2,j=a[f]/2-b[f]/2;switch(g){case"top":d={x:h,y:a.y-b.height};break;case"bottom":d={x:h,y:a.y+a.height};break;case"right":d={x:a.x+a.width,y:i};break;case"left":d={x:a.x-b.width,y:i};break;default:d={x:a.x,y:a.y}}switch(c.split("-")[1]){case"start":d[e]-=j;break;case"end":d[e]+=j}return d}(function({anchor:a,floating:b}){return{anchor:function(a,b){var c;let d=a.getBoundingClientRect(),e=null!=(c=null==b?void 0:b.getBoundingClientRect())?c:{x:0,y:0};return{x:d.x-e.x,y:d.y-e.y,width:d.width,height:d.height}}(a,b.offsetParent),floating:{x:0,y:0,width:b.offsetWidth,height:b.offsetHeight}}}({anchor:a,floating:b}),c);return{x:d,y:e}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=a||(a=this.offsetWidth);let d=hT(this).getBoundingClientRect(),e=d.width-b-a,f=d.height-c-this.offsetHeight,{style:g}=hK(this,bW);g.setProperty("position","absolute"),g.setProperty("right",`${Math.max(0,e)}px`),g.setProperty("--_menu-bottom",`${f}px`);let h=getComputedStyle(this),i=g.getPropertyValue("--_menu-bottom")===h.bottom?f:parseFloat(h.bottom),j=d.height-i-parseFloat(h.marginBottom);this.style.setProperty("--_menu-max-height",`${j}px`)},cc=new WeakSet,cd=function(a){let b=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),c=null==b?void 0:b.querySelector('[role="menu"]'),{style:d}=hK(this,bW);if(a||d.setProperty("--media-menu-transition-in","none"),c){let a=c.offsetHeight,d=Math.max(c.offsetWidth,b.offsetWidth);this.style.setProperty("min-width",`${d}px`),this.style.setProperty("min-height",`${a}px`),hN(this,ca,cb).call(this,d)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),hN(this,ca,cb).call(this);d.removeProperty("--media-menu-transition-in")},ce=new WeakSet,cf=function(a){var b;if(a.stopPropagation(),a.composedPath().includes(hK(this,cg,ch))){null==(b=hK(this,bR))||b.focus(),this.hidden=!0;return}let c=hN(this,cq,cr).call(this,a);!c||c.hasAttribute("disabled")||(hN(this,cu,cv).call(this,c),this.handleSelect(a))},cg=new WeakSet,ch=function(){var a;return null==(a=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:a.find(a=>a.matches('button[part~="back"]'))},ci=new WeakSet,cj=function(a){if(a.target===this)return;hN(this,ck,cl).call(this);let b=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let c of b)c.invokeTargetElement!=a.target&&("open"!=a.newState||"true"!=c.getAttribute("aria-expanded")||c.invokeTargetElement.hidden||c.invokeTargetElement.dispatchEvent(new hH({relatedTarget:c})));for(let a of b)a.setAttribute("aria-expanded",`${!a.submenuElement.hidden}`);hN(this,cc,cd).call(this,!0)},ck=new WeakSet,cl=function(){let a=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!a)},cm=new WeakSet,cn=function(a){var b;dX(this,a.relatedTarget)||(hK(this,bV)&&(null==(b=hK(this,bR))||b.focus()),hK(this,bS)&&hK(this,bS)!==a.relatedTarget&&!this.hidden&&(this.hidden=!0))},co=new WeakSet,cp=function(a){var b,c,d,e,f;let{key:g,ctrlKey:h,altKey:i,metaKey:j}=a;if(!h&&!i&&!j&&this.keysUsed.includes(g))if(a.preventDefault(),a.stopPropagation(),"Tab"===g){if(hK(this,bV)){this.hidden=!0;return}a.shiftKey?null==(c=null==(b=this.previousElementSibling)?void 0:b.focus)||c.call(b):null==(e=null==(d=this.nextElementSibling)?void 0:d.focus)||e.call(d),this.blur()}else"Escape"===g?(null==(f=hK(this,bR))||f.focus(),hK(this,bV)&&(this.hidden=!0)):"Enter"===g||" "===g?this.handleSelect(a):this.handleMove(a)},cq=new WeakSet,cr=function(a){return a.composedPath().find(a=>["menuitemradio","menuitemcheckbox"].includes(a.role))},cs=new WeakSet,ct=function(){return this.items.find(a=>0===a.tabIndex)},cu=new WeakSet,cv=function(a){for(let b of this.items)b.tabIndex=b===a?0:-1},cw=new WeakSet,cx=function(a,b){let c=[...this.checkedItems];"radio"===a.type&&this.radioGroupItems.forEach(a=>a.checked=!1),b?a.checked=!a.checked:a.checked=!0,this.checkedItems.some((a,b)=>a!=c[b])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},hR.shadowRootOptions={mode:"open"},hR.getTemplateHTML=function(a){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},dL.customElements.get("media-chrome-menu")||dL.customElements.define("media-chrome-menu",hR);var hU=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hV=(a,b,c)=>(hU(a,b,"read from private field"),c?c.call(a):b.get(a)),hW=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},hX=(a,b,c,d)=>(hU(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),hY=(a,b,c)=>(hU(a,b,"access private method"),c);let hZ={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class h$ extends dL.HTMLElement{constructor(){if(super(),hW(this,cA),hW(this,cC),hW(this,cE),hW(this,cH),hW(this,cJ),hW(this,cL),hW(this,cy,!1),hW(this,cz,void 0),hW(this,cG,()=>{var a,b;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let c=this.shadowRoot.querySelector('slot[name="description"]'),d=null==(a=this.submenuElement.checkedItems)?void 0:a[0],e=null!=(b=null==d?void 0:d.dataset.description)?b:null==d?void 0:d.text,f=dM.createElement("span");f.textContent=null!=e?e:"",c.replaceChildren(f)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=dS(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[hZ.TYPE,hZ.DISABLED,hZ.CHECKED,hZ.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),h_(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(a){switch(a.type){case"slotchange":hY(this,cA,cB).call(this,a);break;case"click":this.handleClick(a);break;case"keydown":hY(this,cJ,cK).call(this,a);break;case"keyup":hY(this,cH,cI).call(this,a)}}attributeChangedCallback(a,b,c){a===hZ.CHECKED&&h_(this)&&!hV(this,cy)?this.setAttribute("aria-checked",null!=c?"true":"false"):a===hZ.TYPE&&c!==b?this.role="menuitem"+c:a===hZ.DISABLED&&c!==b&&(null==c?this.enable():this.disable())}connectedCallback(){this.hasAttribute(hZ.DISABLED)||this.enable(),this.role="menuitem"+this.type,hX(this,cz,function a(b,c){if(!b)return null;let{host:d}=b.getRootNode();return!c&&d?a(b,d):(null==c?void 0:c.items)?c:a(c,null==c?void 0:c.parentNode)}(this,this.parentNode)),hY(this,cL,cM).call(this),this.submenuElement&&hY(this,cC,cD).call(this)}disconnectedCallback(){this.disable(),hY(this,cL,cM).call(this),hX(this,cz,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(a){this.setAttribute("invoketarget",`${a}`)}get invokeTargetElement(){var a;return this.invokeTarget?null==(a=d$(this))?void 0:a.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var a;return null!=(a=this.getAttribute(hZ.TYPE))?a:""}set type(a){this.setAttribute(hZ.TYPE,`${a}`)}get value(){var a;return null!=(a=this.getAttribute(hZ.VALUE))?a:this.text}set value(a){this.setAttribute(hZ.VALUE,a)}get text(){var a;return(null!=(a=this.textContent)?a:"").trim()}get checked(){if(h_(this))return"true"===this.getAttribute("aria-checked")}set checked(a){h_(this)&&(hX(this,cy,!0),this.setAttribute("aria-checked",a?"true":"false"),a?this.part.add("checked"):this.part.remove("checked"))}handleClick(a){!h_(this)&&this.invokeTargetElement&&dX(this,a.target)&&this.invokeTargetElement.dispatchEvent(new hH({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function h_(a){return"radio"===a.type||"checkbox"===a.type}cy=new WeakMap,cz=new WeakMap,cA=new WeakSet,cB=function(a){let b=a.target;if(!(null==b?void 0:b.name))for(let a of b.assignedNodes({flatten:!0}))a instanceof Text&&""===a.textContent.trim()&&a.remove();"submenu"===b.name&&(this.submenuElement?hY(this,cC,cD).call(this):hY(this,cE,cF).call(this))},cC=new WeakSet,cD=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",hV(this,cG)),this.submenuElement.addEventListener("addmenuitem",hV(this,cG)),this.submenuElement.addEventListener("removemenuitem",hV(this,cG)),hV(this,cG).call(this)},cE=new WeakSet,cF=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",hV(this,cG)),this.submenuElement.removeEventListener("addmenuitem",hV(this,cG)),this.submenuElement.removeEventListener("removemenuitem",hV(this,cG)),hV(this,cG).call(this)},cG=new WeakMap,cH=new WeakSet,cI=function(a){let{key:b}=a;if(!this.keysUsed.includes(b))return void this.removeEventListener("keyup",hY(this,cH,cI));this.handleClick(a)},cJ=new WeakSet,cK=function(a){let{metaKey:b,altKey:c,key:d}=a;if(b||c||!this.keysUsed.includes(d))return void this.removeEventListener("keyup",hY(this,cH,cI));this.addEventListener("keyup",hY(this,cH,cI),{once:!0})},cL=new WeakSet,cM=function(){var a;let b=null==(a=hV(this,cz))?void 0:a.radioGroupItems;if(!b)return;let c=b.filter(a=>"true"===a.getAttribute("aria-checked")).pop();for(let a of(c||(c=b[0]),b))a.setAttribute("aria-checked","false");null==c||c.setAttribute("aria-checked","true")},h$.shadowRootOptions={mode:"open"},h$.getTemplateHTML=function(a){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(a)}
    </slot>
    <slot name="submenu"></slot>
  `},h$.getSuffixSlotInnerHTML=function(a){return""},dL.customElements.get("media-chrome-menu-item")||dL.customElements.define("media-chrome-menu-item",h$);class h0 extends hR{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:dT(this).querySelector("media-settings-menu-button")}}h0.getTemplateHTML=function(a){return`
    ${hR.getTemplateHTML(a)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},dL.customElements.get("media-settings-menu")||dL.customElements.define("media-settings-menu",h0);class h1 extends h${}h1.shadowRootOptions={mode:"open"},h1.getTemplateHTML=function(a){return`
    ${h$.getTemplateHTML.call(this,a)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},h1.getSuffixSlotInnerHTML=function(a){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},dL.customElements.get("media-settings-menu-item")||dL.customElements.define("media-settings-menu-item",h1);class h2 extends fl{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(a){this.setAttribute("invoketarget",`${a}`)}get invokeTargetElement(){var a;return this.invokeTarget?null==(a=d$(this))?void 0:a.querySelector(`#${this.invokeTarget}`):null}handleClick(){var a;null==(a=this.invokeTargetElement)||a.dispatchEvent(new hH({relatedTarget:this}))}}dL.customElements.get("media-chrome-menu-button")||dL.customElements.define("media-chrome-menu-button",h2);class h3 extends h2{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",dC("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:dT(this).querySelector("media-settings-menu")}}h3.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},h3.getTooltipContentHTML=function(){return dC("Settings")},dL.customElements.get("media-settings-menu-button")||dL.customElements.define("media-settings-menu-button",h3);var h4=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},h5=(a,b,c)=>(h4(a,b,"read from private field"),c?c.call(a):b.get(a)),h6=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},h7=(a,b,c,d)=>(h4(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),h8=(a,b,c)=>(h4(a,b,"access private method"),c);class h9 extends hR{constructor(){super(...arguments),h6(this,cP),h6(this,cR),h6(this,cN,[]),h6(this,cO,void 0)}static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_AUDIO_TRACK_LIST,dg.MEDIA_AUDIO_TRACK_ENABLED,dg.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===dg.MEDIA_AUDIO_TRACK_ENABLED&&b!==c)this.value=c;else if(a===dg.MEDIA_AUDIO_TRACK_LIST&&b!==c){var d;h7(this,cN,null==(d=null!=c?c:"")?void 0:d.split(/\s+/).map(dt)),h8(this,cP,cQ).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",h8(this,cR,cS))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",h8(this,cR,cS))}get anchorElement(){var a;return"auto"!==this.anchor?super.anchorElement:null==(a=dT(this))?void 0:a.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return h5(this,cN)}set mediaAudioTrackList(a){h7(this,cN,a),h8(this,cP,cQ).call(this)}get mediaAudioTrackEnabled(){var a;return null!=(a=d6(this,dg.MEDIA_AUDIO_TRACK_ENABLED))?a:""}set mediaAudioTrackEnabled(a){d7(this,dg.MEDIA_AUDIO_TRACK_ENABLED,a)}}cN=new WeakMap,cO=new WeakMap,cP=new WeakSet,cQ=function(){if(h5(this,cO)===JSON.stringify(this.mediaAudioTrackList))return;h7(this,cO,JSON.stringify(this.mediaAudioTrackList));let a=this.mediaAudioTrackList;for(let b of(this.defaultSlot.textContent="",a)){let a=hO({type:"radio",text:this.formatMenuItemText(b.label,b),value:`${b.id}`,checked:b.enabled});a.prepend(hP(this,"checked-indicator")),this.defaultSlot.append(a)}},cR=new WeakSet,cS=function(){if(null==this.value)return;let a=new dL.CustomEvent(dc.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},dL.customElements.get("media-audio-track-menu")||dL.customElements.define("media-audio-track-menu",h9);let ia=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,ib=a=>{let b=dC("Audio");a.setAttribute("aria-label",b)};class ic extends h2{static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_AUDIO_TRACK_ENABLED,dg.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ib(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dg.MEDIA_LANG&&ib(this)}get invokeTargetElement(){var a;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(a=dT(this))?void 0:a.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var a;return null!=(a=d6(this,dg.MEDIA_AUDIO_TRACK_ENABLED))?a:""}set mediaAudioTrackEnabled(a){d7(this,dg.MEDIA_AUDIO_TRACK_ENABLED,a)}}ic.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${ia}</slot>
  `},ic.getTooltipContentHTML=function(){return dC("Audio")},dL.customElements.get("media-audio-track-menu-button")||dL.customElements.define("media-audio-track-menu-button",ic);var id=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},ie=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},ig=(a,b,c)=>(id(a,b,"access private method"),c);let ih=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class ii extends hR{constructor(){super(...arguments),ie(this,cU),ie(this,cW),ie(this,cT,void 0)}static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_SUBTITLES_LIST,dg.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dg.MEDIA_SUBTITLES_LIST&&b!==c?ig(this,cU,cV).call(this):a===dg.MEDIA_SUBTITLES_SHOWING&&b!==c&&(this.value=c)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ig(this,cW,cX))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ig(this,cW,cX))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:dT(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return ij(this,dg.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){ik(this,dg.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return ij(this,dg.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){ik(this,dg.MEDIA_SUBTITLES_SHOWING,a)}}cT=new WeakMap,cU=new WeakSet,cV=function(){var a,b,c,d,e,f;if(id(this,b=cT,"read from private field"),(c?c.call(this):b.get(this))===JSON.stringify(this.mediaSubtitlesList))return;d=cT,e=JSON.stringify(this.mediaSubtitlesList),id(this,d,"write to private field"),f?f.call(this,e):d.set(this,e),this.defaultSlot.textContent="";let g=!this.value,h=hO({type:"radio",text:this.formatMenuItemText(dC("Off")),value:"off",checked:g});for(let b of(h.prepend(hP(this,"checked-indicator")),this.defaultSlot.append(h),this.mediaSubtitlesList)){let c=hO({type:"radio",text:this.formatMenuItemText(b.label,b),value:et(b),checked:this.value==et(b)});c.prepend(hP(this,"checked-indicator")),"captions"===(null!=(a=b.kind)?a:"subs")&&c.append(hP(this,"captions-indicator")),this.defaultSlot.append(c)}},cW=new WeakSet,cX=function(){let a=this.mediaSubtitlesShowing,b=this.getAttribute(dg.MEDIA_SUBTITLES_SHOWING),c=this.value!==b;if((null==a?void 0:a.length)&&c&&this.dispatchEvent(new dL.CustomEvent(dc.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:a})),!this.value||!c)return;let d=new dL.CustomEvent(dc.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(d)},ii.getTemplateHTML=function(a){return`
    ${hR.getTemplateHTML(a)}
    <slot name="captions-indicator" hidden>${ih}</slot>
  `};let ij=(a,b)=>{let c=a.getAttribute(b);return c?er(c):[]},ik=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=eu(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};dL.customElements.get("media-captions-menu")||dL.customElements.define("media-captions-menu",ii);let il=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,im=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,io=a=>{a.setAttribute("data-captions-enabled",ey(a).toString())},ip=a=>{a.setAttribute("aria-label",dC("closed captions"))};class iq extends h2{static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_SUBTITLES_LIST,dg.MEDIA_SUBTITLES_SHOWING,dg.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),ip(this),io(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dg.MEDIA_SUBTITLES_SHOWING?io(this):a===dg.MEDIA_LANG&&ip(this)}get invokeTargetElement(){var a;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(a=dT(this))?void 0:a.querySelector("media-captions-menu")}get mediaSubtitlesList(){return ir(this,dg.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){is(this,dg.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return ir(this,dg.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){is(this,dg.MEDIA_SUBTITLES_SHOWING,a)}}iq.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${il}</slot>
      <slot name="off">${im}</slot>
    </slot>
  `},iq.getTooltipContentHTML=function(){return dC("Captions")};let ir=(a,b)=>{let c=a.getAttribute(b);return c?er(c):[]},is=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=eu(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};dL.customElements.get("media-captions-menu-button")||dL.customElements.define("media-captions-menu-button",iq);var it=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},iu=(a,b,c)=>(it(a,b,"read from private field"),c?c.call(a):b.get(a)),iv=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},iw=(a,b,c)=>(it(a,b,"access private method"),c);let ix={RATES:"rates"};class iy extends hR{constructor(){super(),iv(this,cZ),iv(this,c_),iv(this,cY,new ep(this,ix.RATES,{defaultValue:gr})),iw(this,cZ,c$).call(this)}static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_PLAYBACK_RATE,ix.RATES]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===dg.MEDIA_PLAYBACK_RATE&&b!=c?this.value=c:a===ix.RATES&&b!=c&&(iu(this,cY).value=c,iw(this,cZ,c$).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",iw(this,c_,c0))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",iw(this,c_,c0))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:dT(this).querySelector("media-playback-rate-menu-button")}get rates(){return iu(this,cY)}set rates(a){a?Array.isArray(a)?iu(this,cY).value=a.join(" "):"string"==typeof a&&(iu(this,cY).value=a):iu(this,cY).value="",iw(this,cZ,c$).call(this)}get mediaPlaybackRate(){return d2(this,dg.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){d3(this,dg.MEDIA_PLAYBACK_RATE,a)}}cY=new WeakMap,cZ=new WeakSet,c$=function(){for(let a of(this.defaultSlot.textContent="",iu(this,cY))){let b=hO({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a,checked:this.mediaPlaybackRate===Number(a)});b.prepend(hP(this,"checked-indicator")),this.defaultSlot.append(b)}},c_=new WeakSet,c0=function(){if(!this.value)return;let a=new dL.CustomEvent(dc.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},dL.customElements.get("media-playback-rate-menu")||dL.customElements.define("media-playback-rate-menu",iy);class iz extends h2{static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_PLAYBACK_RATE]}constructor(){var a;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(a=this.mediaPlaybackRate)?a:1}x`}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===dg.MEDIA_PLAYBACK_RATE){let a=c?+c:NaN,b=Number.isNaN(a)?1:a;this.container.innerHTML=`${b}x`,this.setAttribute("aria-label",dC("Playback rate {playbackRate}",{playbackRate:b}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:dT(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return d2(this,dg.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){d3(this,dg.MEDIA_PLAYBACK_RATE,a)}}iz.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${a.mediaplaybackrate||1}x</slot>
  `},iz.getTooltipContentHTML=function(){return dC("Playback rate")},dL.customElements.get("media-playback-rate-menu-button")||dL.customElements.define("media-playback-rate-menu-button",iz);var iA=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},iB=(a,b,c)=>(iA(a,b,"read from private field"),c?c.call(a):b.get(a)),iC=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},iD=(a,b,c,d)=>(iA(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),iE=(a,b,c)=>(iA(a,b,"access private method"),c);class iF extends hR{constructor(){super(...arguments),iC(this,c3),iC(this,c5),iC(this,c1,[]),iC(this,c2,{})}static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_RENDITION_LIST,dg.MEDIA_RENDITION_SELECTED,dg.MEDIA_RENDITION_UNAVAILABLE,dg.MEDIA_HEIGHT]}static formatMenuItemText(a,b){return super.formatMenuItemText(a,b)}static formatRendition(a,{showBitrate:b=!1}={}){let c=`${Math.min(a.width,a.height)}p`;if(b&&a.bitrate){let b=a.bitrate/1e6,d=`${b.toFixed(+(b<1))} Mbps`;return`${c} (${d})`}return this.formatMenuItemText(c,a)}static compareRendition(a,b){var c,d;return b.height===a.height?(null!=(c=b.bitrate)?c:0)-(null!=(d=a.bitrate)?d:0):b.height-a.height}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===dg.MEDIA_RENDITION_SELECTED&&b!==c)this.value=null!=c?c:"auto",iE(this,c3,c4).call(this);else if(a===dg.MEDIA_RENDITION_LIST&&b!==c)iD(this,c1,null==c?void 0:c.split(/\s+/).map(dr)),iE(this,c3,c4).call(this);else a===dg.MEDIA_HEIGHT&&b!==c&&iE(this,c3,c4).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",iE(this,c5,c6))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",iE(this,c5,c6))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:dT(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return iB(this,c1)}set mediaRenditionList(a){iD(this,c1,a),iE(this,c3,c4).call(this)}get mediaRenditionSelected(){return d6(this,dg.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(a){d7(this,dg.MEDIA_RENDITION_SELECTED,a)}get mediaHeight(){return d2(this,dg.MEDIA_HEIGHT)}set mediaHeight(a){d3(this,dg.MEDIA_HEIGHT,a)}compareRendition(a,b){return this.constructor.compareRendition(a,b)}formatMenuItemText(a,b){return this.constructor.formatMenuItemText(a,b)}formatRendition(a,b){return this.constructor.formatRendition(a,b)}showRenditionBitrate(a){return this.mediaRenditionList.some(b=>b!==a&&b.height===a.height&&b.bitrate!==a.bitrate)}}c1=new WeakMap,c2=new WeakMap,c3=new WeakSet,c4=function(){if(iB(this,c2).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&iB(this,c2).mediaHeight===this.mediaHeight)return;iB(this,c2).mediaRenditionList=JSON.stringify(this.mediaRenditionList),iB(this,c2).mediaHeight=this.mediaHeight;let a=this.mediaRenditionList.sort(this.compareRendition.bind(this)),b=a.find(a=>a.id===this.mediaRenditionSelected);for(let c of a)c.selected=c===b;this.defaultSlot.textContent="";let c=!this.mediaRenditionSelected;for(let b of a){let a=hO({type:"radio",text:this.formatRendition(b,{showBitrate:this.showRenditionBitrate(b)}),value:`${b.id}`,checked:b.selected&&!c});a.prepend(hP(this,"checked-indicator")),this.defaultSlot.append(a)}let d=b&&this.showRenditionBitrate(b),e=c?b?this.formatMenuItemText(`${dC("Auto")} \u2022 ${this.formatRendition(b,{showBitrate:d})}`,b):this.formatMenuItemText(`${dC("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(dC("Auto")),f=hO({type:"radio",text:e,value:"auto",checked:c});f.dataset.description=e,f.prepend(hP(this,"checked-indicator")),this.defaultSlot.append(f)},c5=new WeakSet,c6=function(){if(null==this.value)return;let a=new dL.CustomEvent(dc.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},dL.customElements.get("media-rendition-menu")||dL.customElements.define("media-rendition-menu",iF);let iG=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class iH extends h2{static get observedAttributes(){return[...super.observedAttributes,dg.MEDIA_RENDITION_SELECTED,dg.MEDIA_RENDITION_UNAVAILABLE,dg.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",dC("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:dT(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return d6(this,dg.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(a){d7(this,dg.MEDIA_RENDITION_SELECTED,a)}get mediaHeight(){return d2(this,dg.MEDIA_HEIGHT)}set mediaHeight(a){d3(this,dg.MEDIA_HEIGHT,a)}}iH.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${iG}</slot>
  `},iH.getTooltipContentHTML=function(){return dC("Quality")},dL.customElements.get("media-rendition-menu-button")||dL.customElements.define("media-rendition-menu-button",iH);let iI=dL.document?.createElement?.("template");iI&&(iI.innerHTML=`
    <!-- Sutro -->
    <style>
      :host {
        --_primary-color: var(--media-primary-color, #fff);
        --_secondary-color: var(--media-secondary-color, transparent);
        --_accent-color: var(--media-accent-color, #fff);
      }

      media-controller {
        --base: 18px;

        font-size: calc(0.75 * var(--base));
        font-family: Roboto, Arial, sans-serif;
        --media-font-family: Roboto, helvetica neue, segoe ui, arial, sans-serif;
        -webkit-font-smoothing: antialiased;

        --media-primary-color: #fff;
        --media-secondary-color: transparent;
        --media-menu-background: rgba(28, 28, 28, 0.6);
        --media-text-color: var(--_primary-color);
        --media-control-hover-background: var(--media-secondary-color);

        --media-range-track-height: calc(0.125 * var(--base));
        --media-range-thumb-height: var(--base);
        --media-range-thumb-width: var(--base);
        --media-range-thumb-border-radius: var(--base);

        --media-control-height: calc(2 * var(--base));
      }

      media-controller[breakpointmd] {
        --base: 20px;
      }

      /* The biggest size controller is tied to going fullscreen
          instead of a player width. */
      media-controller[mediaisfullscreen] {
        --base: 24px;
      }

      .media-button {
        --media-control-hover-background: var(--_secondary-color);
        --media-tooltip-background: rgb(28 28 28 / .24);
        --media-text-content-height: 1.2;
        --media-tooltip-padding: .7em 1em;
        --media-tooltip-distance: 8px;
        --media-tooltip-container-margin: 18px;
        position: relative;
        padding: 0;
        opacity: 0.9;
        transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
      }

      .media-button svg {
        fill: none;
        stroke: var(--_primary-color);
        stroke-width: 1;
        stroke-linecap: 'round';
        stroke-linejoin: 'round';
      }

      svg .svg-shadow {
        stroke: #000;
        stroke-opacity: 0.15;
        stroke-width: 2px;
        fill: none;
      }
    </style>

    <media-controller
      breakpoints="md:480"
      defaultsubtitles="{{defaultsubtitles}}"
      defaultduration="{{defaultduration}}"
      gesturesdisabled="{{disabled}}"
      hotkeys="{{hotkeys}}"
      nohotkeys="{{nohotkeys}}"
      defaultstreamtype="on-demand"
    >
      <slot name="media" slot="media"></slot>
      <slot name="poster" slot="poster"></slot>
      <slot name="centered-chrome" slot="centered-chrome"></slot>
      <media-error-dialog slot="dialog"></media-error-dialog>

      <!-- Controls Gradient -->
      <style>
        .media-gradient-bottom {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: calc(8 * var(--base));
          pointer-events: none;
        }

        .media-gradient-bottom::before {
          content: '';
          --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
            hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
            hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
            hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
            hsl(0 0% 0%) 100%;

          position: absolute;
          inset: 0;
          opacity: 0.7;
          background: linear-gradient(to bottom, var(--gradient-steps));
        }
      </style>
      <div class="media-gradient-bottom"></div>

      <!-- Settings Menu -->
      <style>
        media-settings-menu {
          --media-menu-icon-height: 20px;
          --media-menu-item-icon-height: 20px;
          --media-settings-menu-min-width: calc(10 * var(--base));
          --media-menu-transform-in: translateY(0) scale(1);
          --media-menu-transform-out: translateY(20px) rotate(3deg) scale(1);
          padding-block: calc(0.15 * var(--base));
          margin-right: 10px;
          margin-bottom: 17px;
          border-radius: 8px;
          z-index: 2;
          user-select: none;
        }

        media-settings-menu-item,
        [role='menu']::part(menu-item) {
          --media-icon-color: var(--_primary-color);
          margin-inline: calc(0.45 * var(--base));
          height: calc(1.6 * var(--base));
          font-size: calc(0.7 * var(--base));
          font-weight: 400;
          padding: 0;
          padding-left: calc(0.4 * var(--base));
          padding-right: calc(0.1 * var(--base));
          border-radius: 6px;
          text-shadow: none;
        }

        [slot='submenu']::part(back button) {
          font-size: calc(0.7 * var(--base));
        }

        media-settings-menu-item:hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item),
        [slot='submenu']::part(back indicator) {
          --media-icon-color: var(--_primary-color);
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item):hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item[submenusize='0'] {
          display: none;
        }

        /* Also hide if only 'Auto' is added. */
        .quality-settings[submenusize='1'] {
          display: none;
        }
      </style>
      <media-settings-menu hidden anchor="auto">
        <media-settings-menu-item>
          Playback Speed
          <media-playback-rate-menu slot="submenu" hidden>
            <div slot="title">Playback Speed</div>
          </media-playback-rate-menu>
        </media-settings-menu-item>
        <media-settings-menu-item class="quality-settings">
          Quality
          <media-rendition-menu slot="submenu" hidden>
            <div slot="title">Quality</div>
          </media-rendition-menu>
        </media-settings-menu-item>
        <media-settings-menu-item>
          Subtitles/CC
          <media-captions-menu slot="submenu" hidden>
            <div slot="title">Subtitles/CC</div>
          </media-captions-menu>
        </media-settings-menu-item>
      </media-settings-menu>

      <!-- Control Bar -->
      <style>
        media-control-bar {
          position: absolute;
          height: calc(2 * var(--base));
          line-height: calc(2 * var(--base));
          bottom: var(--base);
          left: var(--base);
          right: var(--base);
        }
      </style>
      <media-control-bar>
        <!-- Play/Pause -->
        <style>
          @keyframes bounce-scale-play {
            0% {
              transform: scale(0.75, 0.75);
            }
            50% {
              transform: scale(115%, 115%);
            }
            100% {
              transform: scale(1, 1);
            }
          }

          .media-button {
            border-radius: 25%;
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s, box-shadow 0.3s;
          }

          .media-button:hover {
            /* background-color: rgba(0, 0, 0, 0.05); */
            box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;
            /* hue-rotate(120deg) */
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s;
          }

          media-play-button #icon-play {
            opacity: 0;
            transform-box: view-box;
            transform-origin: center center;
            transform: scale(0.5, 0.5);
            transition: all 0.5s;
          }

          media-play-button[mediapaused] #icon-play {
            opacity: 1;
            transform: scale(1, 1);
            animation: 0.35s bounce-scale-play ease-in-out;
          }

          @keyframes bounce-pause-left {
            0% {
              font-size: 10px;
            }
            50% {
              font-size: 3px;
            }
            100% {
              font-size: 4px;
            }
          }

          @keyframes bounce-pause-right {
            0% {
              font-size: 10px;
              transform: translateX(-8px);
            }
            50% {
              font-size: 3px;
              transform: translateX(1px);
            }
            100% {
              font-size: 4px;
              transform: translateX(0);
            }
          }

          media-play-button #pause-left,
          media-play-button #pause-right {
            /* Using font-size to animate height because using scale was resulting in unexpected positioning */
            font-size: 4px;
            opacity: 1;
            transform: translateX(0);
            transform-box: view-box;
          }

          media-play-button:not([mediapaused]) #pause-left {
            animation: 0.3s bounce-pause-left ease-out;
          }

          media-play-button:not([mediapaused]) #pause-right {
            animation: 0.3s bounce-pause-right ease-out;
          }

          media-play-button[mediapaused] #pause-left,
          media-play-button[mediapaused] #pause-right {
            opacity: 0;
            font-size: 10px;
          }

          media-play-button[mediapaused] #pause-right {
            transform-origin: right center;
            transform: translateX(-8px);
          }
        </style>
        <media-play-button mediapaused class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <!-- <use class="svg-shadow" xlink:href="#icon-play"></use> -->
            <g>
              <path
                id="icon-play"
                d="M20.7131 14.6976C21.7208 15.2735 21.7208 16.7265 20.7131 17.3024L12.7442 21.856C11.7442 22.4274 10.5 21.7054 10.5 20.5536L10.5 11.4464C10.5 10.2946 11.7442 9.57257 12.7442 10.144L20.7131 14.6976Z"
              />
            </g>
            <!-- <use class="svg-shadow" xlink:href="#icon-pause"></use> -->
            <g id="icon-pause">
              <rect id="pause-left" x="10.5" width="1em" y="10.5" height="11" rx="0.5" />
              <rect id="pause-right" x="17.5" width="1em" y="10.5" height="11" rx="0.5" />
            </g>
          </svg>
        </media-play-button>

        <!-- Volume/Mute -->
        <style>
          media-mute-button {
            position: relative;
          }

          media-mute-button .muted-path {
            transition: clip-path 0.2s ease-out;
          }

          media-mute-button #muted-path-2 {
            transition-delay: 0.2s;
          }

          media-mute-button .muted-path {
            clip-path: inset(0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-1 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-2 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button .muted-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='off'] .muted-path {
            opacity: 1;
          }

          media-mute-button .vol-path {
            opacity: 1;
            transition: opacity 0.4s;
          }

          media-mute-button[mediavolumelevel='off'] .vol-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='low'] #vol-high-path,
          media-mute-button[mediavolumelevel='medium'] #vol-high-path {
            opacity: 0;
          }

          media-volume-range {
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-thumb-opacity: 0;
          }

          @keyframes volume-in {
            0% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
            50% {
              visibility: visible;
              opacity: 1;
              transform: rotate(-2deg);
            }
            100% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
          }

          @keyframes volume-out {
            0% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
            50% {
              opacity: 1;
              transform: rotate(0deg);
            }
            100% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
          }

          .media-volume-range-wrapper {
            opacity: 0;
            visibility: hidden;

            position: absolute;
            top: -100%;
            left: calc(2 * var(--base));

            width: calc(10 * var(--base));
            height: calc(2.5 * var(--base));
            transform-origin: center left;
          }

          media-volume-range {
            /*
              Hide range and animation until mediavolume attribute is set.
              'visibility' didn't work, hovering over media-volume-range-wrapper
              caused it to show. Should require mute-button:hover.
            */
            opacity: 0;
            transition: opacity 0s 1s;

            width: calc(10 * var(--base));
            height: var(--base);
            padding: 0;
            border-radius: calc(0.25 * var(--base));
            overflow: hidden;
            background: rgba(0, 0, 0, 0.2);

            --media-range-bar-color: var(--media-accent-color);

            --media-range-padding-left: 0;
            --media-range-padding-right: 0;

            --media-range-track-width: calc(10 * var(--base));
            --media-range-track-height: var(--base);
            --media-range-track-border-radius: calc(0.25 * var(--base));
            --media-range-track-backdrop-filter: blur(10px) brightness(80%);

            /* This makes zero volume still show some of the bar.
               I can't make the bar have curved corners otherwise though. */
            --media-range-thumb-width: var(--base);
            --media-range-thumb-border-radius: calc(0.25 * var(--base));

            /* The Sutro design has a gradient like this, but not sure I like it */
            /* --media-range-thumb-box-shadow: 10px 0px 20px rgba(255, 255, 255, 0.5); */
          }

          media-volume-range[mediavolume] {
            opacity: 1;
          }

          [keyboardcontrol] media-volume-range:focus {
            /* TODO: This appears to be creating a think outline */
            outline: 1px solid rgba(27, 127, 204, 0.9);
          }

          media-mute-button:hover + .media-volume-range-wrapper,
          media-mute-button:focus + .media-volume-range-wrapper,
          media-mute-button:focus-within + .media-volume-range-wrapper,
          .media-volume-range-wrapper:hover,
          .media-volume-range-wrapper:focus,
          .media-volume-range-wrapper:focus-within {
            animation: 0.3s volume-in forwards ease-out;
          }

          .media-volume-range-wrapper:not(:hover, :focus-within) {
            animation: 0.3s volume-out ease-out;
          }

          /* When keyboard navigating the volume range and wrapper need to always be visible
            otherwise focus state can't land on it. This is ok when keyboard navigating because
            the hovering issues aren't a concern, unless you happen to be keyboard AND mouse navigating.
          */
          [keyboardcontrol] .media-volume-range-wrapper,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within media-volume-range {
            visibility: visible;
          }
        </style>
        <media-mute-button class="media-button" notooltip>
          <use class="svg-shadow" xlink:href="#vol-paths"></use>
          <svg slot="icon" viewBox="0 0 32 32">
            <g id="vol-paths">
              <path
                id="speaker-path"
                d="M16.5 20.486v-8.972c0-1.537-2.037-2.08-2.802-.745l-1.026 1.79a2.5 2.5 0 0 1-.8.85l-1.194.78A1.5 1.5 0 0 0 10 15.446v1.11c0 .506.255.978.678 1.255l1.194.782a2.5 2.5 0 0 1 .8.849l1.026 1.79c.765 1.334 2.802.792 2.802-.745Z"
              />
              <path
                id="vol-low-path"
                class="vol-path"
                d="M18.5 18C19.6046 18 20.5 17.1046 20.5 16C20.5 14.8954 19.6046 14 18.5 14"
              />
              <path
                id="vol-high-path"
                class="vol-path"
                d="M18 21C20.7614 21 23 18.7614 23 16C23 13.2386 20.7614 11 18 11"
              />
              <path id="muted-path-1" class="muted-path" d="M23 18L19 14" />
              <path id="muted-path-2" class="muted-path" d="M23 14L19 18" />
            </g>
          </svg>
        </media-mute-button>
        <div class="media-volume-range-wrapper">
          <media-volume-range></media-volume-range>
        </div>

        <!-- Time Display -->
        <style>
          media-time-display {
            position: relative;
            padding: calc(0.5 * var(--base));
            font-size: calc(0.7 * var(--base));
            border-radius: calc(0.5 * var(--base));
          }

          media-controller[breakpointmd] media-time-display:not([showduration]) {
            display: none;
          }

          media-controller:not([breakpointmd]) media-time-display[showduration] {
            display: none;
          }
        </style>
        <media-time-display></media-time-display>
        <media-time-display showduration></media-time-display>

        <!-- Time Range / Progress Bar -->
        <style>
          media-time-range {
            height: calc(2 * var(--base));
            border-radius: calc(0.25 * var(--base));

            --media-range-track-backdrop-filter: invert(10%) blur(5px) brightness(110%);
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-track-pointer-background: rgba(255, 255, 255, 0.5);
            --media-range-track-border-radius: calc(0.25 * var(--base));

            --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
            --media-range-bar-color: var(--media-accent-color);

            --media-range-thumb-background: var(--media-accent-color);
            --media-range-thumb-transition: opacity 0.1s linear;
            --media-range-thumb-opacity: 0;

            --media-preview-thumbnail-border: calc(0.125 * var(--base)) solid #fff;
            --media-preview-thumbnail-border-radius: calc(0.5 * var(--base));
            --media-preview-thumbnail-min-width: calc(8 * var(--base));
            --media-preview-thumbnail-max-width: calc(10 * var(--base));
            --media-preview-thumbnail-min-height: calc(5 * var(--base));
            --media-preview-thumbnail-max-height: calc(7 * var(--base));
            --media-preview-box-margin: 0 0 -10px;
          }
          media-time-range:hover {
            --media-range-thumb-opacity: 1;
            --media-range-track-height: calc(0.25 * var(--base));
          }

          media-preview-thumbnail {
            margin-bottom: 5px;
          }

          media-preview-chapter-display {
            font-size: calc(0.6 * var(--base));
            padding-block: 0;
          }

          media-preview-time-display {
            font-size: calc(0.65 * var(--base));
            padding-top: 0;
          }
        </style>
        <media-time-range>
          <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
          <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
          <media-preview-time-display slot="preview"></media-preview-time-display>
        </media-time-range>

        <!-- Subtitles/CC Button -->
        <style>
          media-captions-button {
            position: relative;
          }

          media-controller:not([breakpointmd]) media-captions-button {
            display: none;
          }

          media-captions-button svg :is(path, rect) {
            stroke: none;
            fill: var(--_primary-color);
          }

          /* Disble the captions button when no subtitles are available */
          media-captions-button:not([mediasubtitleslist]) svg {
            opacity: 0.3;
          }

          media-captions-button #cc-underline {
            opacity: 1;
          }

          media-captions-button[mediasubtitleslist][aria-checked='true'] #cc-underline {
            opacity: 1;
          }

          media-captions-button #cc-underline {
            transition: clip-path 0.15s ease-out;
          }

          media-captions-button #cc-underline {
            clip-path: inset(0 100% 0 0);
          }

          media-captions-button[aria-checked='true'] #cc-underline {
            clip-path: inset(0 0 0 0);
          }
        </style>
        <media-captions-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cc-icon"></use>
            <g id="cc-icon">
              <path
                class="cc-c"
                d="M15.6634 14.3574H14.5636C14.4985 14.0523 14.3847 13.7842 14.2221 13.5532C14.0624 13.3222 13.8673 13.1283 13.6367 12.9715C13.409 12.8118 13.1562 12.692 12.8783 12.6122C12.6004 12.5323 12.3107 12.4924 12.0091 12.4924C11.4592 12.4924 10.961 12.6264 10.5146 12.8945C10.0711 13.1625 9.71776 13.5575 9.45463 14.0794C9.19445 14.6012 9.06436 15.2414 9.06436 16C9.06436 16.7586 9.19445 17.3988 9.45463 17.9206C9.71776 18.4425 10.0711 18.8375 10.5146 19.1055C10.961 19.3736 11.4592 19.5076 12.0091 19.5076C12.3107 19.5076 12.6004 19.4677 12.8783 19.3878C13.1562 19.308 13.409 19.1896 13.6367 19.0328C13.8673 18.8731 14.0624 18.6778 14.2221 18.4468C14.3847 18.2129 14.4985 17.9449 14.5636 17.6426H15.6634C15.5806 18.0903 15.4298 18.491 15.2111 18.8446C14.9923 19.1982 14.7203 19.499 14.3951 19.7471C14.0698 19.9924 13.7047 20.1792 13.2996 20.3075C12.8976 20.4358 12.4674 20.5 12.0091 20.5C11.2345 20.5 10.5456 20.3175 9.94246 19.9525C9.33932 19.5875 8.8648 19.0684 8.51888 18.3954C8.17296 17.7224 8 16.924 8 16C8 15.076 8.17296 14.2776 8.51888 13.6046C8.8648 12.9316 9.33932 12.4125 9.94246 12.0475C10.5456 11.6825 11.2345 11.5 12.0091 11.5C12.4674 11.5 12.8976 11.5642 13.2996 11.6925C13.7047 11.8208 14.0698 12.009 14.3951 12.2571C14.7203 12.5024 14.9923 12.8018 15.2111 13.1554C15.4298 13.5062 15.5806 13.9068 15.6634 14.3574Z"
              />
              <path
                class="cc-c"
                d="M24 14.3574H22.9002C22.8351 14.0523 22.7213 13.7842 22.5587 13.5532C22.399 13.3222 22.2039 13.1283 21.9733 12.9715C21.7456 12.8118 21.4928 12.692 21.2149 12.6122C20.937 12.5323 20.6473 12.4924 20.3457 12.4924C19.7958 12.4924 19.2976 12.6264 18.8511 12.8945C18.4077 13.1625 18.0543 13.5575 17.7912 14.0794C17.531 14.6012 17.4009 15.2414 17.4009 16C17.4009 16.7586 17.531 17.3988 17.7912 17.9206C18.0543 18.4425 18.4077 18.8375 18.8511 19.1055C19.2976 19.3736 19.7958 19.5076 20.3457 19.5076C20.6473 19.5076 20.937 19.4677 21.2149 19.3878C21.4928 19.308 21.7456 19.1896 21.9733 19.0328C22.2039 18.8731 22.399 18.6778 22.5587 18.4468C22.7213 18.2129 22.8351 17.9449 22.9002 17.6426H24C23.9172 18.0903 23.7664 18.491 23.5476 18.8446C23.3289 19.1982 23.0569 19.499 22.7316 19.7471C22.4064 19.9924 22.0413 20.1792 21.6362 20.3075C21.2341 20.4358 20.804 20.5 20.3457 20.5C19.5711 20.5 18.8822 20.3175 18.279 19.9525C17.6759 19.5875 17.2014 19.0684 16.8555 18.3954C16.5095 17.7224 16.3366 16.924 16.3366 16C16.3366 15.076 16.5095 14.2776 16.8555 13.6046C17.2014 12.9316 17.6759 12.4125 18.279 12.0475C18.8822 11.6825 19.5711 11.5 20.3457 11.5C20.804 11.5 21.2341 11.5642 21.6362 11.6925C22.0413 11.8208 22.4064 12.009 22.7316 12.2571C23.0569 12.5024 23.3289 12.8018 23.5476 13.1554C23.7664 13.5062 23.9172 13.9068 24 14.3574Z"
              />
              <rect id="cc-underline" x="8" y="23" width="16" height="1" rx="0.5" />
            </g>
          </svg>
        </media-captions-button>

        <!-- Settings Menu Button -->
        <style>
          media-settings-menu-button svg {
            transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
            transform: rotateZ(0deg);
          }
          media-settings-menu-button[aria-expanded='true'] svg {
            transform: rotateZ(30deg);
          }
        </style>
        <media-settings-menu-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#settings-icon"></use>
            <g id="settings-icon">
              <path
                d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
              />
              <path
                d="M21.0176 13.0362L20.9715 12.9531C20.8445 12.7239 20.7797 12.4629 20.784 12.1982L20.8049 10.8997C20.8092 10.6343 20.675 10.3874 20.4545 10.2549L18.5385 9.10362C18.3186 8.97143 18.0472 8.9738 17.8293 9.10981L16.7658 9.77382C16.5485 9.90953 16.2999 9.98121 16.0465 9.98121H15.9543C15.7004 9.98121 15.4513 9.90922 15.2336 9.77295L14.1652 9.10413C13.9467 8.96728 13.674 8.96518 13.4535 9.09864L11.5436 10.2545C11.3242 10.3873 11.1908 10.6336 11.1951 10.8981L11.216 12.1982C11.2203 12.4629 11.1555 12.7239 11.0285 12.9531L10.9831 13.0351C10.856 13.2645 10.6715 13.4535 10.4493 13.5819L9.36075 14.2109C9.13763 14.3398 8.99942 14.5851 9 14.8511L9.00501 17.152C9.00559 17.4163 9.1432 17.6597 9.36476 17.7883L10.4481 18.4167C10.671 18.546 10.8559 18.7364 10.9826 18.9673L11.0313 19.0559C11.1565 19.284 11.2203 19.5431 11.2161 19.8059L11.1951 21.1003C11.1908 21.3657 11.325 21.6126 11.5456 21.7452L13.4615 22.8964C13.6814 23.0286 13.9528 23.0262 14.1707 22.8902L15.2342 22.2262C15.4515 22.0905 15.7001 22.0188 15.9535 22.0188H16.0457C16.2996 22.0188 16.5487 22.0908 16.7664 22.227L17.8348 22.8959C18.0534 23.0327 18.326 23.0348 18.5465 22.9014L20.4564 21.7455C20.6758 21.6127 20.8092 21.3664 20.8049 21.1019L20.784 19.8018C20.7797 19.5371 20.8445 19.2761 20.9715 19.0469L21.0169 18.9649C21.144 18.7355 21.3285 18.5465 21.5507 18.4181L22.6393 17.7891C22.8624 17.6602 23.0006 17.4149 23 17.1489L22.995 14.848C22.9944 14.5837 22.8568 14.3403 22.6352 14.2117L21.5493 13.5818C21.328 13.4534 21.1442 13.2649 21.0176 13.0362Z"
              />
            </g>
          </svg>
        </media-settings-menu-button>

        <!-- PIP/Mini Player Button -->
        <style>
          media-controller:not([breakpointmd]) media-pip-button {
            display: none;
          }
        </style>
        <media-pip-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#pip-icon"></use>
            <g id="pip-icon">
              <path
                d="M12 22H9.77778C9.34822 22 9 21.6162 9 21.1429V10.8571C9 10.3838 9.34822 10 9.77778 10L22.2222 10C22.6518 10 23 10.3838 23 10.8571V12.5714"
              />
              <path
                d="M15 21.5714V16.4286C15 16.1919 15.199 16 15.4444 16H22.5556C22.801 16 23 16.1919 23 16.4286V17V21.5714C23 21.8081 22.801 22 22.5556 22H20.3333H17.6667H15.4444C15.199 22 15 21.8081 15 21.5714Z"
              />
            </g>
          </svg>
        </media-pip-button>

        <!-- Airplay Button -->
        <media-airplay-button class="media-button">
          <svg viewBox="0 0 32 32" aria-hidden="true" slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.5 20h1.722c.43 0 .778-.32.778-.714v-8.572c0-.394-.348-.714-.778-.714H9.778c-.43 0-.778.32-.778.714v1.429"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.5 20H9.778c-.43 0-.778-.32-.778-.714v-8.572c0-.394.348-.714.778-.714h12.444c.43 0 .778.32.778.714v1.429"/>
            <path stroke-linejoin="round" d="m16 19 3.464 3.75h-6.928L16 19Z"/>
          </svg>
        </media-airplay-button>

        <!-- Cast Button -->
        <media-cast-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cast-icon"></use>
            <g id="cast-icon">
              <path
                d="M18.5 21.833h4.167c.46 0 .833-.373.833-.833V11a.833.833 0 0 0-.833-.833H9.333A.833.833 0 0 0 8.5 11v1.111m0 8.056c.92 0 1.667.746 1.667 1.666M8.5 17.667a4.167 4.167 0 0 1 4.167 4.166"
              />
              <path d="M8.5 15.167a6.667 6.667 0 0 1 6.667 6.666" />
            </g>
          </svg>
        </media-cast-button>

        <!-- Fullscreen Button -->
        <style>
          /* Having trouble getting @property to work in the shadow dom
             to clean this up. Like https://codepen.io/luwes/pen/oNRyZyx */

          media-fullscreen-button .fs-arrow {
            translate: 0% 0%;
          }
          media-fullscreen-button:hover .fs-arrow {
            animation: 0.35s up-left-bounce cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          media-fullscreen-button:hover #fs-enter-top,
          media-fullscreen-button:hover #fs-exit-bottom {
            animation-name: up-right-bounce;
          }

          media-fullscreen-button:hover #fs-enter-bottom,
          media-fullscreen-button:hover #fs-exit-top {
            animation-name: down-left-bounce;
          }

          @keyframes up-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% -4%;
            }
          }
          @keyframes up-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% -4%;
            }
          }
          @keyframes down-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% 4%;
            }
          }
          @keyframes down-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% 4%;
            }
          }
        </style>
        <media-fullscreen-button class="media-button">
          <svg slot="enter" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-enter-paths"></use>
            <g id="fs-enter-paths">
              <g id="fs-enter-top" class="fs-arrow">
                <path d="M18 10H22V14" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-enter-bottom" class="fs-arrow">
                <path d="M14 22L10 22V18" />
                <path d="M10 22L14 18" />
              </g>
            </g>
          </svg>
          <svg slot="exit" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-exit-paths"></use>
            <g id="fs-exit-paths">
              <g id="fs-exit-top" class="fs-arrow">
                <path d="M22 14H18V10" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-exit-bottom" class="fs-arrow">
                <path d="M10 18L14 18V22" />
                <path d="M14 18L10 22" />
              </g>
            </g>
          </svg>
        </media-fullscreen-button>
      </media-control-bar>
    </media-controller>

  `);class iJ extends hE{static template=iI}dL.customElements&&!dL.customElements.get("media-theme-sutro")&&dL.customElements.define("media-theme-sutro",iJ);var iK=new Set(["style","children","ref","key","suppressContentEditableWarning","suppressHydrationWarning","dangerouslySetInnerHTML"]),iL={className:"class",htmlFor:"for"},iM=function({react:a,tagName:b,elementClass:c,events:d,displayName:e,toAttributeName:f=function(a){return a.toLowerCase()},toAttributeValue:g=function(a){return"boolean"==typeof a?a?"":void 0:"function"==typeof a?void 0:"object"!=typeof a||null===a?a:void 0}}){let h=Number.parseInt(a.version)>=19,i=a.forwardRef((d,e)=>{let i=a.useRef(null);a.useRef(new Map);let j={},k={},l={},m={};for(let[a,b]of Object.entries(d)){if(iK.has(a)){l[a]=b;continue}let d=f(iL[a]??a);if(a in c.prototype&&!(a in(globalThis.HTMLElement?.prototype??{}))&&!c.observedAttributes?.some(a=>a===d)){m[a]=b;continue}if(a.startsWith("on")){j[a]=b;continue}let e=g(b);d&&null!=e&&(k[d]=String(e),h||(l[d]=e)),d&&h&&(l[d]=b)}if(c?.getTemplateHTML&&c?.shadowRootOptions){let{mode:b,delegatesFocus:d}=c.shadowRootOptions;l.children=[a.createElement("template",{shadowrootmode:b,shadowrootdelegatesfocus:d,dangerouslySetInnerHTML:{__html:c.getTemplateHTML(k)}}),l.children]}return a.createElement(b,{...l,ref:a.useCallback(a=>{i.current=a,"function"==typeof e?e(a):null!==e&&(e.current=a)},[e])})});return i.displayName=e??c.name,i}({react:db,tagName:"media-theme-sutro",elementClass:iJ});let iN="mux.com",iO=(a,{token:b,thumbnailTime:c,width:d,customDomain:e=iN}={})=>{let f=null==b?c:void 0,{aud:g}=function(a){let b=(a??"").split(".")[1];return b?JSON.parse(decodeURIComponent(atob(b.replace(/-/g,"+").replace(/_/g,"/")).split("").map(function(a){return"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)}).join(""))):{}}(b);if(!b||"t"===g)return`https://image.${e}/${a}/thumbnail.webp${function(a){let b=(function(a){let b={};for(let c in a)null!=a[c]&&(b[c]=a[c]);return new URLSearchParams(b)})(a).toString();return b?"?"+b:""}({token:b,time:f,width:d})}`};JSON.parse(process.env.NEXT_PUBLIC_DEV_VIDEO_OPTS??process.env.NEXT_PUBLIC_VIDEO_OPTS??"{}");let iP=(0,db.forwardRef)((a,b)=>{if("string"==typeof a.playbackId)return f??(f=(0,db.lazy)(()=>Promise.all([c.e(89),c.e(334),c.e(900)]).then(c.bind(c,24900)))),(0,c7.jsx)(f,{ref:b,...a,controls:!1});let d=function(a){if("string"==typeof a)return a.split(/[#?]/)[0].split(".").pop()?.trim()}(a.src);return"m3u8"===d?(g??(g=(0,db.lazy)(()=>Promise.all([c.e(89),c.e(334),c.e(321)]).then(c.bind(c,8321)))),(0,c7.jsx)(g,{ref:b,...a,controls:!1})):"mpd"===d?(h??(h=(0,db.lazy)(()=>Promise.all([c.e(89),c.e(583)]).then(c.bind(c,86583)))),(0,c7.jsx)(h,{ref:b,...a,controls:!1})):(0,c7.jsx)("video",{ref:b,...a,controls:!1})}),iQ=(0,db.forwardRef)((a,b)=>{let c,d,{style:e,children:f,asset:g,controls:h=!0,poster:i,blurDataURL:j,theme:k=iM,...l}=a,m=db.Children.toArray(f).find(a=>"object"==typeof a&&"type"in a&&"poster"===a.props.slot);(0,db.isValidElement)(m)&&(i="",j=void 0,c=m,f=db.Children.toArray(f).filter(a=>a!==m));let n={},o=g?function(a){let b=a.providerMetadata?.mux??a.externalIds;return b?.playbackId}(g):void 0,p=!0;if(o&&g?.status==="ready"&&(l.src=void 0,l.playbackId=o,i&&((p=i!==iO(o,l))||(d=`${iO(o,{...l,width:480})} 480w,${iO(o,{...l,width:640})} 640w,${iO(o,{...l,width:960})} 960w,${iO(o,{...l,width:1280})} 1280w,${iO(o,{...l,width:1600})} 1600w,${iO(o,{...l})} 1920w`))),j){let a=!p&&j===g?.blurDataURL,b=p&&j!==g?.blurDataURL;if(a||b){var q;n.gridArea="1/1",n.width="100%",n.height="100%",n.color="transparent",n.backgroundSize="cover",n.backgroundPosition="center",n.backgroundRepeat="no-repeat",n.backgroundImage=`url('data:image/svg+xml;charset=utf-8,${q=j,`<svg xmlns="http://www.w3.org/2000/svg"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="20"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><g filter="url(#b)"><image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="${q}"/></g></svg>`.replace(/#/g,"%23")}')`}}if(delete l.thumbnailTime,h&&k){let a=l["data-next-video"];return i&&(c=(0,c7.jsx)("img",{slot:"poster",src:p?i:void 0,srcSet:d,style:n,decoding:"async","aria-hidden":"true"}),i=""),(0,c7.jsxs)(k,{"data-next-video":a,style:{display:"grid",...e},children:[c,(0,c7.jsx)(db.Suspense,{fallback:null,children:(0,c7.jsxs)(iP,{suppressHydrationWarning:!0,ref:b,style:{gridArea:"1/1"},slot:"media",poster:i,crossOrigin:"",...l,children:[o&&(0,c7.jsx)("track",{default:!0,kind:"metadata",label:"thumbnails",src:`https://image.mux.com/${o}/storyboard.vtt`}),f]})})]})}return(0,c7.jsx)(db.Suspense,{fallback:null,children:(0,c7.jsxs)(iP,{suppressHydrationWarning:!0,ref:b,style:{gridArea:"1/1",...e},controls:!1!==h||void 0,poster:i,crossOrigin:"",...l,children:[o&&(0,c7.jsx)("track",{default:!0,kind:"metadata",label:"thumbnails",src:`https://image.mux.com/${o}/storyboard.vtt`}),f]})})});var iR=c(24515);let iS=function({title:a,children:b}){let[c,d]=(0,db.useState)(!1);return(0,c7.jsxs)("div",{className:"bg-slate-700 rounded-md border-r-amber-600 border-r-4 px-4 cursor-pointer",children:[(0,c7.jsxs)("button",{onClick:()=>d(!c),className:"w-full flex justify-between items-center py-4 text-left",children:[(0,c7.jsx)("span",{className:"font-medium",children:a}),(0,c7.jsx)("span",{className:`transform transition-transform duration-300 ${c?"rotate-180":""}`,children:"▼"})]}),(0,c7.jsx)("div",{className:`transition-all duration-300 overflow-hidden ${c?"max-h-fit opacity-100":"max-h-0 opacity-0"}`,children:(0,c7.jsx)("div",{className:"pb-4 text-gray-400",children:b})})]})};var iT=c(20006);let iU=()=>{let{id:a}=(0,da.useParams)(),{data:b,isLoading:c,isError:d}=(0,c8.I)({queryKey:[a],queryFn:async()=>{let b=await c9.D.get(`/movie/${a}`);return b?.data}}),e=()=>(0,c7.jsxs)("svg",{width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[(0,c7.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),(0,c7.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),f=()=>(0,c7.jsx)("svg",{width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"3",viewBox:"0 0 24 24",children:(0,c7.jsx)("path",{d:"M20 6L9 17l-5-5"})}),[g,h]=(0,db.useState)(!1),i=async a=>{await navigator.clipboard.writeText(a),h(!0),setTimeout(()=>h(!1),2e3)};return c?(0,c7.jsx)(iT.A,{}):d?(0,c7.jsx)("p",{children:"Error fetching movies \uD83D\uDE22"}):(0,c7.jsx)("div",{className:"w-full min-h-screen bg-cover bg-center bg-no-repeat",style:{backgroundImage:`url(${b.cover})`,width:"100%",height:"auto"},children:(0,c7.jsx)("div",{className:"backdrop-blur-sm bg-slate-800/60 min-h-screen",children:(0,c7.jsxs)("div",{className:"container mx-auto py-10",children:[(0,c7.jsxs)("div",{className:"flex flex-col md:flex-row my-6 gap-4 px-2",children:[(0,c7.jsx)("div",{className:"w-full md:w-1/3",children:(0,c7.jsx)(iR.default,{alt:"movie image",src:b.image,width:0,height:0,sizes:"100vw",style:{width:"100%",height:"auto",borderRadius:"10px"}})}),(0,c7.jsxs)("div",{className:"flex flex-col w-full md:w-2/3",children:[(0,c7.jsx)("h1",{className:"text-[30px] font-bold text-white",children:b.title}),(0,c7.jsx)("div",{className:"whitespace-pre-line",children:b.description})]})]}),b.sources.length>0&&b.sources.map(a=>(0,c7.jsx)("div",{className:"my-2 px-2",children:(0,c7.jsx)(iS,{title:a.quality,children:(0,c7.jsxs)(c7.Fragment,{children:[(0,c7.jsxs)("div",{className:"flex gap-2 items-center",children:["لینک دانلود:",(0,c7.jsxs)("div",{className:"bg-slate-800 p-2 my-2 rounded-md",children:[(0,c7.jsx)("button",{onClick:()=>i(a.url),className:"ml-2 p-1 hover:bg-slate-700 rounded transition",children:g?(0,c7.jsx)(f,{}):(0,c7.jsx)(e,{})}),a.url]})]}),(0,c7.jsx)("span",{style:{direction:"ltr"},children:(0,c7.jsx)(iQ,{src:a.url})})]})})},a.id))]})})})}},73496:a=>{"use strict";a.exports=require("http2")},74075:a=>{"use strict";a.exports=require("zlib")},79551:a=>{"use strict";a.exports=require("url")},81630:a=>{"use strict";a.exports=require("http")},83997:a=>{"use strict";a.exports=require("tty")},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},94735:a=>{"use strict";a.exports=require("events")}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[586,557,393,108],()=>b(b.s=22975));module.exports=c})();