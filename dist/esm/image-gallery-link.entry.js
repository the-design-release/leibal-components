import { r as registerInstance, c as createEvent, h, H as Host } from './index-3f06ee34.js';

const imageGalleryLinkCss = ":root{cursor:pointer;display:block}";

let ImageGalleryLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.openImageGallery = createEvent(this, "openImageGallery", 7);
    this.imageIndex = 0;
  }
  openImageGalleryHandler(index) {
    this.openImageGallery.emit(index);
  }
  render() {
    return (h(Host, { onClick: () => this.openImageGalleryHandler(this.imageIndex + 1) }, h("slot", null)));
  }
};
ImageGalleryLink.style = imageGalleryLinkCss;

export { ImageGalleryLink as image_gallery_link };
