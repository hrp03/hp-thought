!function(e){"use strict";function t(e,t){return function(e){f.impl.options.imagePlaceholder=void 0===e.imagePlaceholder?s.imagePlaceholder:e.imagePlaceholder,f.impl.options.cacheBust=void 0===e.cacheBust?s.cacheBust:e.cacheBust}(t=t||{}),Promise.resolve(e).then(function(e){return r(e,t.filter,!0)}).then(o).then(i).then(function(e){return t.bgcolor&&(e.style.backgroundColor=t.bgcolor),t.width&&(e.style.width=t.width+"px"),t.height&&(e.style.height=t.height+"px"),t.style&&Object.keys(t.style).forEach(function(n){e.style[n]=t.style[n]}),e}).then(function(n){return function(e,t,n){return Promise.resolve(e).then(function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)}).then(u.escapeXhtml).then(function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"}).then(function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+n+'">'+e+"</svg>"}).then(function(e){return"data:image/svg+xml;charset=utf-8,"+e})}(n,t.width||u.width(e),t.height||u.height(e))})}function n(e,n){function r(e){var t=document.createElement("canvas");if(t.width=n.width||u.width(e),t.height=n.height||u.height(e),n.bgcolor){var r=t.getContext("2d");r.fillStyle=n.bgcolor,r.fillRect(0,0,t.width,t.height)}return t}return t(e,n).then(u.makeImage).then(u.delay(100)).then(function(t){var n=r(e);return n.getContext("2d").drawImage(t,0,0),n})}function r(e,t,n){return n||!t||t(e)?Promise.resolve(e).then(function(e){return e instanceof HTMLCanvasElement?u.makeImage(e.toDataURL()):e.cloneNode(!1)}).then(function(n){return function(e,t,n){var o=e.childNodes;return 0===o.length?Promise.resolve(t):function(e,t,n){var o=Promise.resolve();return t.forEach(function(t){o=o.then(function(){return r(t,n)}).then(function(t){t&&e.appendChild(t)})}),o}(t,u.asArray(o),n).then(function(){return t})}(e,n,t)}).then(function(t){return function(e,t){return t instanceof Element?Promise.resolve().then(function(){!function(e,t){e.cssText?t.cssText=e.cssText:function(e,t){u.asArray(e).forEach(function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))})}(e,t)}(window.getComputedStyle(e),t.style)}).then(function(){function n(n){var r=window.getComputedStyle(e,n),o=r.getPropertyValue("content");if(""!==o&&"none"!==o){var i=u.uid();t.className=t.className+" "+i;var c=document.createElement("style");c.appendChild(function(e,t,n){var r="."+e+":"+t,o=n.cssText?function(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}(n):function(e){return u.asArray(e).map(function(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}).join("; ")+";"}(n);return document.createTextNode(r+"{"+o+"}")}(i,n,r)),t.appendChild(c)}}[":before",":after"].forEach(function(e){n(e)})}).then(function(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}).then(function(){t instanceof SVGElement&&(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t instanceof SVGRectElement&&["width","height"].forEach(function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)}))}).then(function(){return t}):t}(e,t)}):Promise.resolve()}function o(e){return a.resolveAll().then(function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e})}function i(e){return l.inlineAll(e).then(function(){return e})}var u=function(){function e(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function t(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:e,mimeType:function(t){var n=e(t).toLowerCase();return function(){var e="application/font-woff",t="image/jpeg";return{woff:e,woff2:e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:t,jpeg:t,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}()[n]||""},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise(function(t){e.toBlob(t)}):function(e){return new Promise(function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);t(new Blob([o],{type:"image/png"}))})}(e)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href},getAndEncode:function(e){return f.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime()),new Promise(function(t){function n(e){console.error(e),t("")}var r,o=new XMLHttpRequest;if(o.onreadystatechange=function(){if(4===o.readyState){if(200!==o.status)return void(r?t(r):n("cannot fetch resource: "+e+", status: "+o.status));var i=new FileReader;i.onloadend=function(){var e=i.result.split(/,/)[1];t(e)},i.readAsDataURL(o.response)}},o.ontimeout=function(){r?t(r):n("timeout of 30000ms occured while fetching resource: "+e)},o.responseType="blob",o.timeout=3e4,o.open("GET",e,!0),o.send(),f.impl.options.imagePlaceholder){var i=f.impl.options.imagePlaceholder.split(/,/);i&&i[1]&&(r=i[1])}})},uid:function(){var e=0;return function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+e++}}(),delay:function(e){return function(t){return new Promise(function(n){setTimeout(function(){n(t)},e)})}},asArray:function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return new Promise(function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e})},width:function(e){var n=t(e,"border-left-width"),r=t(e,"border-right-width");return e.scrollWidth+n+r},height:function(e){var n=t(e,"border-top-width"),r=t(e,"border-bottom-width");return e.scrollHeight+n+r}}}(),c=function(){function e(e){return-1!==e.search(r)}function t(e){for(var t,n=[];null!==(t=r.exec(e));)n.push(t[1]);return n.filter(function(e){return!u.isDataUrl(e)})}function n(e,t,n,r){return Promise.resolve(t).then(function(e){return n?u.resolveUrl(e,n):e}).then(r||u.getAndEncode).then(function(e){return u.dataAsUrl(e,u.mimeType(t))}).then(function(n){return e.replace(function(e){return new RegExp("(url\\(['\"]?)("+u.escape(e)+")(['\"]?\\))","g")}(t),"$1"+n+"$3")})}var r=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(r,o,i){return e(r)?Promise.resolve(r).then(t).then(function(e){var t=Promise.resolve(r);return e.forEach(function(e){t=t.then(function(t){return n(t,e,o,i)})}),t}):Promise.resolve(r)},shouldProcess:e,impl:{readUrls:t,inline:n}}}(),a=function(){function e(){function e(e){return{resolve:function(){return c.inlineAll(e.cssText,(e.parentStyleSheet||{}).href)},src:function(){return e.style.getPropertyValue("src")}}}return Promise.resolve(u.asArray(document.styleSheets)).then(function(t){var n=[];return t.forEach(function(t){try{u.asArray(t.cssRules||[]).forEach(n.push.bind(n))}catch(e){console.log("Error while reading CSS rules from "+t.href,e.toString())}}),n}).then(function(e){return e.filter(function(e){return e.type===CSSRule.FONT_FACE_RULE}).filter(function(e){return c.shouldProcess(e.style.getPropertyValue("src"))})}).then(function(t){return t.map(e)})}return{resolveAll:function(){return e(document).then(function(e){return Promise.all(e.map(function(e){return e.resolve()}))}).then(function(e){return e.join("\n")})},impl:{readAll:e}}}(),l=function(){function e(e){return{inline:function(t){return u.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(t||u.getAndEncode).then(function(t){return u.dataAsUrl(t,u.mimeType(e.src))}).then(function(t){return new Promise(function(n,r){e.onload=n,e.onerror=r,e.src=t})})}}}return{inlineAll:function t(n){return n instanceof Element?function(e){var t=e.style.getPropertyValue("background");return t?c.inlineAll(t).then(function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))}).then(function(){return e}):Promise.resolve(e)}(n).then(function(){return n instanceof HTMLImageElement?e(n).inline():Promise.all(u.asArray(n.childNodes).map(function(e){return t(e)}))}):Promise.resolve(n)},impl:{newImage:e}}}(),s={imagePlaceholder:void 0,cacheBust:!1},f={toSvg:t,toPng:function(e,t){return n(e,t||{}).then(function(e){return e.toDataURL()})},toJpeg:function(e,t){return n(e,t=t||{}).then(function(e){return e.toDataURL("image/jpeg",t.quality||1)})},toBlob:function(e,t){return n(e,t||{}).then(u.canvasToBlob)},toPixelData:function(e,t){return n(e,t||{}).then(function(t){return t.getContext("2d").getImageData(0,0,u.width(e),u.height(e)).data})},impl:{fontFaces:a,images:l,util:u,inliner:c,options:{}}};"undefined"!=typeof module?module.exports=f:e.domtoimage=f}(this);