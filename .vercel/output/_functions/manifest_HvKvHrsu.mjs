import { o as decodeKey } from './chunks/astro/server_CbIqYjv0.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DVKTBEj_.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Lluvisnita/Desktop/Proyectos/Astro/CombosSantiago/","cacheDir":"file:///C:/Users/Lluvisnita/Desktop/Proyectos/Astro/CombosSantiago/node_modules/.astro/","outDir":"file:///C:/Users/Lluvisnita/Desktop/Proyectos/Astro/CombosSantiago/dist/","srcDir":"file:///C:/Users/Lluvisnita/Desktop/Proyectos/Astro/CombosSantiago/src/","publicDir":"file:///C:/Users/Lluvisnita/Desktop/Proyectos/Astro/CombosSantiago/public/","buildClientDir":"file:///C:/Users/Lluvisnita/Desktop/Proyectos/Astro/CombosSantiago/dist/client/","buildServerDir":"file:///C:/Users/Lluvisnita/Desktop/Proyectos/Astro/CombosSantiago/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.15.8_@types+node@24_710c830bae49b0c723ec87226d69f705/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Lluvisnita/Desktop/Proyectos/Astro/CombosSantiago/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Lluvisnita/Desktop/Proyectos/Astro/CombosSantiago/src/components/Combo.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.15.8_@types+node@24_710c830bae49b0c723ec87226d69f705/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_HvKvHrsu.mjs","C:/Users/Lluvisnita/Desktop/Proyectos/Astro/CombosSantiago/node_modules/.pnpm/astro@5.15.8_@types+node@24_710c830bae49b0c723ec87226d69f705/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C8JhzmrM.mjs","C:/Users/Lluvisnita/Desktop/Proyectos/Astro/CombosSantiago/src/components/ComboPrice.astro":"chunks/ComboPrice_8xkbeYjo.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/DNI.CEaSa45-.jpg","/_astro/package.DK0lOMlF.svg","/_astro/meat.1c1w10eJ.svg","/_astro/delivery.CISCDQ0U.svg","/_astro/certificate.-MSevBxg.svg","/_astro/pay.CDVzh9-1.svg","/_astro/whatsapp.C8jW7-Q5.svg","/_astro/tag.BtbFV65K.svg","/_astro/down.BQCIgYFK.svg","/_astro/header-picture.CV6wlWq3.png","/_astro/poppins-latin-ext-700-normal.cby-RkWa.woff2","/_astro/barlow-vietnamese-700-normal.D6euyNzi.woff2","/_astro/poppins-devanagari-700-normal.O-jipLrW.woff2","/_astro/barlow-latin-ext-700-normal.BLuWmldJ.woff2","/_astro/barlow-latin-700-normal.A9pxMQ4z.woff2","/_astro/poppins-latin-700-normal.Qrb0O0WB.woff2","/_astro/poppins-latin-ext-900-normal.DPEExWNF.woff2","/_astro/poppins-latin-900-normal.BmL1zqjw.woff2","/_astro/poppins-latin-500-normal.C8OXljZJ.woff2","/_astro/poppins-devanagari-900-normal.DntvEK6c.woff2","/_astro/poppins-devanagari-500-normal.BIdkeU1p.woff2","/_astro/poppins-latin-ext-500-normal.CK-6C4Hw.woff2","/_astro/barlow-vietnamese-900-normal.CTDqGmSE.woff2","/_astro/barlow-latin-ext-900-normal.B9FcVfSu.woff2","/_astro/barlow-latin-900-normal.JU8sfp_B.woff2","/_astro/barlow-vietnamese-700-normal.4Jt4k04K.woff","/_astro/poppins-devanagari-700-normal.fHs-vx92.woff","/_astro/poppins-latin-700-normal.BVuQR_eA.woff","/_astro/poppins-latin-ext-900-normal.CddlvElL.woff","/_astro/barlow-latin-ext-700-normal.CctuGmmz.woff","/_astro/poppins-latin-ext-700-normal.DctTR6Tg.woff","/_astro/poppins-latin-500-normal.DGXqpDMm.woff","/_astro/poppins-latin-900-normal.By5LX1Cr.woff","/_astro/barlow-latin-700-normal.__SGTsZ1.woff","/_astro/poppins-devanagari-500-normal.DMPDjHtT.woff","/_astro/poppins-latin-ext-500-normal.CgAe2rWW.woff","/_astro/poppins-devanagari-900-normal.CcN7yKeD.woff","/_astro/barlow-vietnamese-900-normal.D3udO26y.woff","/_astro/barlow-latin-ext-900-normal.C_eisxak.woff","/_astro/barlow-latin-900-normal.JOplfvoA.woff","/_astro/index.yAlBv4z-.css","/background.png","/background.svg","/favicon.svg","/logo.png","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[["C:/Users/Lluvisnita/Desktop/Proyectos/Astro/CombosSantiago/src/components/ComboPrice.astro","ComboPrice"]],"key":"gYcE4hSf5GgWpdRVlQ5oOhBPKM1yXWHOpmxxcizBVrI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
