import { HTMLElement, createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const imageGalleryLinkCss = ":root{cursor:pointer;display:block}";

let ImageGalleryLink$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.openImageGallery = createEvent(this, "openImageGallery", 7);
    this.imageIndex = 0;
  }
  openImageGalleryHandler(index) {
    this.openImageGallery.emit(index);
  }
  render() {
    return (h(Host, { onClick: () => this.openImageGalleryHandler(this.imageIndex + 1) }, h("slot", null)));
  }
  static get style() { return imageGalleryLinkCss; }
};
ImageGalleryLink$1 = /*@__PURE__*/ proxyCustomElement(ImageGalleryLink$1, [1, "image-gallery-link", {
    "imageIndex": [1538, "image-index"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["image-gallery-link"];
  components.forEach(tagName => { switch (tagName) {
    case "image-gallery-link":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ImageGalleryLink$1);
      }
      break;
  } });
}

const ImageGalleryLink = ImageGalleryLink$1;
const defineCustomElement = defineCustomElement$1;

export { ImageGalleryLink, defineCustomElement };
