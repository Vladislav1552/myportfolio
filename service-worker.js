"use strict";var precacheConfig=[["/myportfolio/index.html","695103a7cbef48bf629cbae8e65dc8db"],["/myportfolio/static/css/main.d827c590.css","ccebc3099ca4c86acd183ffad8c0a98e"],["/myportfolio/static/js/main.603307d6.js","15e132fcdd8f2220704a71439a179535"],["/myportfolio/static/media/9114.524d720f.otf","524d720f3f670bd38785447ca9c4b395"],["/myportfolio/static/media/Instagram.6d2ab22b.png","6d2ab22bcdee8ba006102c0eb8ad5502"],["/myportfolio/static/media/PhotoMe.443e698f.jpg","443e698f9d1035a27445516cb5b671ee"],["/myportfolio/static/media/YuvyXWj-bow.d98d7eb6.jpg","d98d7eb666df581bc387c9e7d3aef23c"],["/myportfolio/static/media/aboutpicture.e0bdcae7.png","e0bdcae732985017b8bdd6043cc4c57b"],["/myportfolio/static/media/adaptiv.b0a1541e.gif","b0a1541e402c6df0cc16357bfebf9ca8"],["/myportfolio/static/media/back-react.22aff153.jpeg","22aff15324ab70e7fc93867049e3330f"],["/myportfolio/static/media/bem.ba52c11d.png","ba52c11d5581eb906ba76d42eae5c19c"],["/myportfolio/static/media/career.c5598d9d.png","c5598d9d8101263246a2f009fea35da4"],["/myportfolio/static/media/facebook.75c194b9.png","75c194b9716acece6d438680d80d716f"],["/myportfolio/static/media/game.6ebd740b.gif","6ebd740be6fa162bf91ce19379ff3aae"],["/myportfolio/static/media/github.8494b9ca.png","8494b9ca7012325998a0250dafb66287"],["/myportfolio/static/media/icon-cross.cb1ad9c4.png","cb1ad9c45b7ae96bf1b84ec5ca3238e6"],["/myportfolio/static/media/landscape.4c51d0ea.png","4c51d0eab00f74406eccf3dd1aecddb9"],["/myportfolio/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/myportfolio/static/media/menu-icon.df9c6343.png","df9c63432645b59a0d74faaff2c72e64"],["/myportfolio/static/media/team.c5a3a38c.jpg","c5a3a38cba028d75e21361ba4929dc1d"],["/myportfolio/static/media/unnamed.79718bf8.png","79718bf89c6cae46384452f4f57e89cc"],["/myportfolio/static/media/videoplayback.dbd6fec2.mp4","dbd6fec2b0f305530176c9304a305515"],["/myportfolio/static/media/web-trifecta_html5_css3_js-strict.84a29ffe.png","84a29ffe04d5a9991b1ffc000df4781d"],["/myportfolio/static/media/workflow-illustration.75bd34ee.png","75bd34eeccab8413ae21043f447e98ea"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/myportfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});