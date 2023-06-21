import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-24a60cbb.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.14.0 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        // because the mark/measure APIs are designed to write entries to a buffer in the browser that does not exist,
        // simply stub the implementations out.
        // TODO(STENCIL-323): Remove this patch when support for older browsers is removed (breaking)
        // @ts-ignore
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-03c5c953.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["image-gallery",[[0,"image-gallery",{"images":[1537],"postId":[1538,"post-id"],"postTitle":[1537,"post-title"],"postExcerpt":[1537,"post-excerpt"],"previewImage":[1537,"preview-image"],"photographer":[1537],"canEnquire":[1540,"can-enquire"],"designDetail":[1537,"design-detail"],"isModalOpen":[32],"currentImageIndex":[32]},[[16,"openImageGallery","openImageGalleryHandler"],[16,"keydown","keydownHandler"]]]]],["moods-boards",[[1,"moods-boards",{"boards":[1537],"apiUrl":[1537,"api-url"],"wpNonce":[1537,"wp-nonce"],"boardsList":[32],"sortBy":[32],"sortOrder":[32],"creatingBoard":[32],"creatingBoardName":[32]},[[0,"removeOverlayEvent","removeOverlayHandler"]]]]],["moods-modal",[[0,"moods-modal",{"boards":[1537],"moodsApiUrl":[1537,"moods-api-url"],"wpApiNonce":[1537,"wp-api-nonce"],"isAuthenticated":[1540,"is-authenticated"],"open":[32],"imageUrl":[32],"postId":[32]}]]],["moods-board",[[1,"moods-board",{"boardId":[1537,"board-id"],"wpNonce":[1537,"wp-nonce"],"images":[1],"imageList":[32],"sortBy":[32],"sortOrder":[32]},[[0,"removeOverlayEvent","removeOverlayHandler"]]]]],["moods-gallery",[[0,"moods-gallery",{"images":[1537],"isModalOpen":[32],"currentImageIndex":[32]},[[16,"openMoodsGallery","openMoodsGalleryHandler"],[16,"keydown","keydownHandler"]]]]],["terms-of-service",[[1,"terms-of-service",{"visibleSection":[32],"subsectionIndex":[32]}]]],["footer-nav",[[1,"footer-nav",{"platform":[1]}]]],["image-gallery-link",[[1,"image-gallery-link",{"imageIndex":[1538,"image-index"]}]]],["mobile-nav-bar",[[1,"mobile-nav-bar",{"platform":[1],"isOpen":[32],"isShowingLinks":[32],"linksType":[32],"searchText":[32]}]]],["nav-bar",[[1,"nav-bar",{"authenticated":[4],"platform":[1],"showMultiplier":[2,"show-multiplier"],"deltaY":[32],"scrollY":[32],"scrolled":[32],"scrollingUp":[32],"scrolledUp":[32],"scrollThreshold":[32],"showSearch":[32],"searchText":[32]}]]],["tool-tip",[[1,"tool-tip",{"bottomOffset":[32],"show":[32]},[[1,"mouseenter","handleMouseEnter"],[1,"mouseleave","handleMouseLeave"],[1,"resize","handleResize"]]]]],["enquire-modal",[[0,"enquire-modal",{"postTitle":[1537,"post-title"],"previewImage":[1537,"preview-image"],"isModalOpen":[32],"formState":[32]}]]],["moods-board-picker",[[1,"moods-board-picker",{"boards":[1537],"selectedMoodBoard":[1040],"open":[32],"moodBoards":[32],"inputValue":[32],"newBoardName":[32]}]]],["remove-overlay",[[1,"remove-overlay",{"payload":[1544],"name":[1537],"confirming":[32],"showIcon":[32]}]]],["moods-board-preview",[[1,"moods-board-preview",{"board":[16]}]]],["add-to-moods-button",[[1,"add-to-moods-button",{"imageUrl":[1537,"image-url"],"postId":[1538,"post-id"],"disabled":[1540],"theme":[1537],"showOnHover":[1540,"show-on-hover"],"contentLocation":[1537,"content-location"],"hidden":[32]}]]],["display-card",[[1,"display-card",{"theme":[1537],"cardType":[1537,"card-type"],"bottomTitleName":[1025,"bottom-title-name"],"bottomSubtitleName":[1025,"bottom-subtitle-name"],"images":[1025],"linkTo":[1025,"link-to"]}]]],["simple-input",[[1,"simple-input",{"type":[1],"placeholder":[1],"required":[4],"name":[1],"value":[1537]}]]],["sticky-scroller",[[4,"sticky-scroller",{"startOffset":[2,"start-offset"],"endOffset":[2,"end-offset"],"bottom":[4],"mode":[1],"argsRef":[32]}]]],["simple-button",[[1,"simple-button",{"theme":[1537],"fillWidth":[1028,"fill-width"],"disabled":[1028]}]]],["tele-portal",[[1,"tele-portal"]]]], options);
});
