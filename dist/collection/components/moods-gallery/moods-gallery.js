import { Component, Element, Host, h, Prop, State, Watch, Listen } from '@stencil/core';
import Swiper, { Navigation, Pagination, Keyboard } from 'swiper';
import { zeroPad } from '../../utils';
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
    this.isModalOpen = false;
    // Parsed JSON images.
    this._images = [];
    this.currentImageIndex = 0;
  }
  componentWillLoad() {
    this._images = JSON.parse(this.images);
  }
  componentDidLoad() {
    this.stopBodyScroll();
    this.swiper = new Swiper('.moods-gallery__images__swiper', DEFAULT_SWIPER_OPTIONS);
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
  openMoodsGalleryHandler(event) {
    if (this.isModalOpen !== true) {
      this.isModalOpen = true;
    }
    console.log(event.detail);
    // Get the index of the image that was clicked.
    const index = this._images.findIndex(image => image.imageUrl === event.detail.imageUrl);
    this.swiper.slideTo(index + 1, 0, false);
  }
  keydownHandler(event) {
    if (event.key === 'Escape') {
      this.isModalOpen = false;
    }
  }
  postTitle() {
    return this._images[this.currentImageIndex].postTitle;
  }
  postExcerpt() {
    return this._images[this.currentImageIndex].postSubtitle;
  }
  photographer() {
    return this._images[this.currentImageIndex].photographer || 'Unknown';
  }
  render() {
    return (h(Host, null,
      h("tele-portal", null,
        h("div", { class: this.isModalOpen ? 'moods-gallery moods-gallery--visible' : 'moods-gallery' },
          h("div", { class: "moods-gallery__info" },
            h("div", { onClick: () => {
                location.href = this._images[this.currentImageIndex].postUrl;
              }, style: { position: 'relative', cursor: 'pointer' } },
              h("div", { class: "moods-gallery__info__title" }, this.postTitle()),
              h("div", { class: "moods-gallery__info__subtitle" }, this.postExcerpt()),
              h("div", { class: "moods-gallery__info__photographer__label" }, "Photography"),
              h("div", { class: "moods-gallery__info__photographer__title" }, this.photographer()),
              h("div", { class: "swiper-pagination" }))),
          h("div", { class: "moods-gallery__images" },
            h("div", { class: "swiper moods-gallery__images__swiper" },
              h("div", { class: "swiper-wrapper" }, this._images.map(image => (h("div", { class: "swiper-slide" },
                h("img", { src: image.imageUrl }))))),
              h("div", { class: "swiper-button-next" }),
              h("div", { class: "swiper-button-prev" })),
            h("div", { class: "moods-gallery__images__close", onClick: () => {
                this.isModalOpen = false;
              } }, "Close"))))));
  }
  static get is() { return "moods-gallery"; }
  static get originalStyleUrls() { return {
    "$": ["moods-gallery.css"]
  }; }
  static get styleUrls() { return {
    "$": ["moods-gallery.css"]
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
      "name": "openMoodsGallery",
      "method": "openMoodsGalleryHandler",
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
