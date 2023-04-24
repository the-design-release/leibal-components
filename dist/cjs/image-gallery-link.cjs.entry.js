'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bb21c77a.js');

const imageGalleryLinkCss = ":root{cursor:pointer;display:block}";

let ImageGalleryLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.openImageGallery = index.createEvent(this, "openImageGallery", 7);
    this.imageIndex = 0;
  }
  openImageGalleryHandler(index) {
    this.openImageGallery.emit(index);
  }
  render() {
    return (index.h(index.Host, { onClick: () => this.openImageGalleryHandler(this.imageIndex + 1) }, index.h("slot", null)));
  }
};
ImageGalleryLink.style = imageGalleryLinkCss;

exports.image_gallery_link = ImageGalleryLink;
