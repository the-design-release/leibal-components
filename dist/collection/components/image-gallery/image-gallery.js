import { Component, Element, Host, h, Prop, State, Watch, Listen, Fragment } from '@stencil/core';
import Swiper, { Navigation, Pagination, Keyboard } from 'swiper';
import { zeroPad } from '../../utils';
import converter from 'number-to-words';
const DEFAULT_SWIPER_OPTIONS = {
  modules: [Navigation, Pagination, Keyboard],
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent(number) {
      return zeroPad(number, 2);
    },
    formatFractionTotal(number) {
      return zeroPad(number, 2);
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  centeredSlides: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
};
export class ImageGallery {
  constructor() {
    this.images = '[]';
    this.canEnquire = false;
    this.designDetail = null;
    this.isModalOpen = false;
    // Parsed JSON images.
    this._images = [];
    this.currentImageIndex = 0;
  }
  componentWillLoad() {
    this._images = JSON.parse(this.images);
    if (this.designDetail) {
      this._designDetail = JSON.parse(this.designDetail);
    }
  }
  componentDidLoad() {
    this.stopBodyScroll();
    this.swiper = new Swiper('.image-gallery__images__swiper', DEFAULT_SWIPER_OPTIONS);
    // Update the currentImageIndex when the slide changes.
    this.swiper.on('slideChange', () => {
      this.currentImageIndex = this.swiper.realIndex;
    });
  }
  clampBodyScroll(isModalOpen, oldIsModalOpen) {
    if (isModalOpen === oldIsModalOpen)
      return;
    this.stopBodyScroll();
  }
  stopBodyScroll() {
    if (this.isModalOpen === true) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'inherit';
    }
  }
  openImageGalleryHandler(event) {
    if (this.isModalOpen !== true) {
      this.isModalOpen = true;
    }
    this.swiper.slideTo(event.detail, 0, false);
  }
  keydownHandler(event) {
    if (event.key === 'Escape') {
      this.isModalOpen = false;
    }
  }
  render() {
    //
    // NOTE: Get the design detail for a specific image, not needed now.
    //
    // Get the first non thumbnail image.
    // const currentImage = this._images[this.currentImageIndex];
    // const currentImageDesignDetail =
    //   currentImage.designDetail && currentImage.designDetail.length > 0 ? currentImage.designDetail[0] : null;
    //
    const designDetail = this._designDetail;
    const asSeenIns = designDetail && designDetail.asSeenIn ? designDetail.asSeenIn : [];
    return (h(Host, null,
      h("tele-portal", null,
        h("div", { class: this.isModalOpen ? 'image-gallery image-gallery--visible' : 'image-gallery' },
          h("div", { class: "image-gallery__info" },
            h("div", { onClick: () => {
                this.isModalOpen = false;
              }, style: { position: 'relative' } },
              h("div", { class: "image-gallery__info__title" }, this.postTitle),
              h("div", { class: "image-gallery__info__subtitle" },
                "by ",
                this.postExcerpt),
              h("div", { class: "image-gallery__info__photographer__label" }, "Photography"),
              h("div", { class: "image-gallery__info__photographer__title" }, this.photographer),
              h("div", { class: "swiper-pagination" })),
            h("div", null,
              h("add-to-moods-button", { theme: 'dark', "image-url": this._images[this.currentImageIndex].href, "post-id": this.postId, "content-location": 'right', style: { margin: '2.5rem 0' } },
                h("span", { style: { marginLeft: '1rem', fontSize: '0.75rem' } }, "Save Image to MOODS"))),
            h("div", null,
              this.canEnquire && (h("enquire-modal", { postTitle: this.postTitle + ' by ' + this.postExcerpt, previewImage: this.previewImage })),
              !this.canEnquire && designDetail && (h("div", null,
                h("div", { class: "image-gallery__info__subtitle" }, "Design Details"),
                h("div", { class: "block xl:grid xl:grid-cols-12 xl:gap-8" },
                  h("display-card", { images: JSON.stringify([designDetail.image.url]), style: { marginBottom: '0' }, class: "col-span-8" },
                    h("div", { slot: "top-title" }, designDetail.designer || 'Unknown'),
                    h("div", { slot: "top-subtitle" }, designDetail.category || 'N/A'),
                    h("div", { slot: "bottom-title" }, designDetail.name || ''),
                    h("div", { slot: "bottom-subtitle" }, designDetail.price || '')),
                  h("div", { class: "flex flex-col col-span-4 mb-8 text-2xs xl:mb-0" },
                    h("div", null,
                      h("span", null, "As seen in image "),
                      asSeenIns.map((image, i) => {
                        const index = parseFloat(image.value.index);
                        if (i === asSeenIns.length - 1 && asSeenIns.length > 0) {
                          return (h(Fragment, null,
                            h("span", null, "and "),
                            h("span", { class: "underline cursor-pointer", onClick: () => this.swiper.slideTo(index + 1) }, converter.toWords(index + 1)),
                            "."));
                        }
                        return (h(Fragment, null,
                          h("span", { class: "underline cursor-pointer", onClick: () => this.swiper.slideTo(index + 1) }, converter.toWords(index + 1)),
                          ', '));
                      })))))))),
          h("div", { class: "image-gallery__images" },
            h("div", { class: "swiper image-gallery__images__swiper" },
              h("div", { class: "swiper-wrapper" }, this._images.map(image => (h("div", { class: "swiper-slide" },
                h("img", { src: image.href }))))),
              h("div", { class: "swiper-button-next" }),
              h("div", { class: "swiper-button-prev" })),
            h("div", { class: "image-gallery__images__close", onClick: () => {
                this.isModalOpen = false;
              } }, "Close"))))));
  }
  static get is() { return "image-gallery"; }
  static get originalStyleUrls() { return {
    "$": ["image-gallery.css"]
  }; }
  static get styleUrls() { return {
    "$": ["image-gallery.css"]
  }; }
  static get properties() { return {
    "images": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "images",
      "reflect": true,
      "defaultValue": "'[]'"
    },
    "postId": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "post-id",
      "reflect": true
    },
    "postTitle": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "post-title",
      "reflect": true
    },
    "postExcerpt": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "post-excerpt",
      "reflect": true
    },
    "previewImage": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "preview-image",
      "reflect": true
    },
    "photographer": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "photographer",
      "reflect": true
    },
    "canEnquire": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "can-enquire",
      "reflect": true,
      "defaultValue": "false"
    },
    "designDetail": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string | null",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "design-detail",
      "reflect": true,
      "defaultValue": "null"
    }
  }; }
  static get states() { return {
    "isModalOpen": {},
    "currentImageIndex": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "isModalOpen",
      "methodName": "clampBodyScroll"
    }]; }
  static get listeners() { return [{
      "name": "openImageGallery",
      "method": "openImageGalleryHandler",
      "target": "body",
      "capture": false,
      "passive": false
    }, {
      "name": "keydown",
      "method": "keydownHandler",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
