'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-31caa8e8.js');

/*
 Stencil Client Patch Esm v2.14.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["image-gallery.cjs",[[0,"image-gallery",{"images":[1537],"postId":[1538,"post-id"],"postTitle":[1537,"post-title"],"postExcerpt":[1537,"post-excerpt"],"previewImage":[1537,"preview-image"],"photographer":[1537],"canEnquire":[1540,"can-enquire"],"designDetail":[1537,"design-detail"],"isModalOpen":[32],"currentImageIndex":[32]},[[16,"openImageGallery","openImageGalleryHandler"],[16,"keydown","keydownHandler"]]]]],["moods-boards.cjs",[[1,"moods-boards",{"boards":[1537],"apiUrl":[1537,"api-url"],"wpNonce":[1537,"wp-nonce"],"boardsList":[32],"sortBy":[32],"sortOrder":[32],"creatingBoard":[32],"creatingBoardName":[32]},[[0,"removeOverlayEvent","removeOverlayHandler"]]]]],["moods-modal.cjs",[[0,"moods-modal",{"boards":[1537],"moodsApiUrl":[1537,"moods-api-url"],"wpApiNonce":[1537,"wp-api-nonce"],"isAuthenticated":[1540,"is-authenticated"],"open":[32],"imageUrl":[32],"postId":[32]}]]],["moods-board.cjs",[[1,"moods-board",{"boardId":[1537,"board-id"],"wpNonce":[1537,"wp-nonce"],"images":[1],"imageList":[32],"sortBy":[32],"sortOrder":[32]},[[0,"removeOverlayEvent","removeOverlayHandler"]]]]],["moods-gallery.cjs",[[0,"moods-gallery",{"images":[1537],"isModalOpen":[32],"currentImageIndex":[32]},[[16,"openMoodsGallery","openMoodsGalleryHandler"],[16,"keydown","keydownHandler"]]]]],["terms-of-service.cjs",[[1,"terms-of-service",{"visibleSection":[32],"subsectionIndex":[32]}]]],["footer-nav.cjs",[[1,"footer-nav"]]],["image-gallery-link.cjs",[[1,"image-gallery-link",{"imageIndex":[1538,"image-index"]}]]],["mobile-nav-bar.cjs",[[1,"mobile-nav-bar",{"platform":[1],"isOpen":[32],"isShowingLinks":[32],"linksType":[32]}]]],["nav-bar.cjs",[[1,"nav-bar",{"authenticated":[4],"platform":[1],"showMultiplier":[2,"show-multiplier"],"deltaY":[32],"scrollY":[32],"scrolled":[32],"scrollingUp":[32],"scrolledUp":[32],"scrollThreshold":[32],"showSearch":[32],"searchText":[32]}]]],["tool-tip.cjs",[[1,"tool-tip",{"bottomOffset":[32],"show":[32]},[[1,"mouseenter","handleMouseEnter"],[1,"mouseleave","handleMouseLeave"],[1,"resize","handleResize"]]]]],["moods-board-picker.cjs",[[1,"moods-board-picker",{"boards":[1537],"selectedMoodBoard":[1040],"open":[32],"moodBoards":[32],"inputValue":[32],"newBoardName":[32]}]]],["moods-board-preview.cjs",[[1,"moods-board-preview",{"board":[16]}]]],["simple-input.cjs",[[1,"simple-input",{"type":[1],"placeholder":[1],"required":[4],"name":[1],"value":[1537]}]]],["add-to-moods-button_3.cjs",[[0,"enquire-modal",{"postTitle":[1537,"post-title"],"previewImage":[1537,"preview-image"],"isModalOpen":[32],"formState":[32]}],[1,"add-to-moods-button",{"imageUrl":[1537,"image-url"],"postId":[1538,"post-id"],"disabled":[1540],"theme":[1537],"showOnHover":[1540,"show-on-hover"],"contentLocation":[1537,"content-location"],"hidden":[32]}],[1,"display-card",{"theme":[1537],"cardType":[1537,"card-type"],"bottomTitleName":[1025,"bottom-title-name"],"bottomSubtitleName":[1025,"bottom-subtitle-name"],"images":[1025],"linkTo":[1025,"link-to"]}]]],["remove-overlay.cjs",[[1,"remove-overlay",{"payload":[1544],"name":[1537],"confirming":[32],"showIcon":[32]}]]],["sticky-scroller.cjs",[[4,"sticky-scroller",{"startOffset":[2,"start-offset"],"endOffset":[2,"end-offset"],"bottom":[4],"mode":[1],"argsRef":[32]}]]],["simple-button_2.cjs",[[1,"simple-button",{"theme":[1537],"fillWidth":[1028,"fill-width"],"disabled":[1028]}],[1,"tele-portal"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
