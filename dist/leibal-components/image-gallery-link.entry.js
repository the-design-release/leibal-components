import { r as registerInstance, f as createEvent, h, e as Host } from './index-24a60cbb.js';

const imageGalleryLinkCss = ":root{display:block;cursor:pointer}";

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
