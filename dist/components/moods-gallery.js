import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { S as Swiper, N as Navigation, P as Pagination, K as Keyboard, z as zeroPad } from './index2.js';
import { d as defineCustomElement$2 } from './tele-portal2.js';

const moodsGalleryCss = "@font-face{font-family:swiper-icons;font-style:normal;font-weight:400;src:url(\"data:application/font-woff;charset=utf-8;base64, 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\")}:root{--swiper-theme-color:#007aff}.swiper{list-style:none;margin-left:auto;margin-right:auto;overflow:hidden;padding:0}.swiper,.swiper-wrapper{position:relative;z-index:1}.swiper-wrapper{box-sizing:content-box;display:flex;transform:translateZ(0)}.swiper-slide,.swiper-wrapper{height:100%;transition-property:transform;width:100%}.swiper-slide{flex-shrink:0;position:relative}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{align-items:center;color:var(--swiper-navigation-color,var(--swiper-theme-color));cursor:pointer;display:flex;height:var(--swiper-navigation-size);justify-content:center;margin-top:calc(0px - var(--swiper-navigation-size)/2);position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/44*27);z-index:10}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);font-variant:normal;letter-spacing:0;line-height:1;text-transform:none!important}.swiper-button-prev{left:10px;right:auto}.swiper-button-prev:after{content:\"prev\"}.swiper-button-next{left:auto;right:10px}.swiper-button-next:after{content:\"next\"}.swiper-pagination{position:absolute;text-align:center;transform:translateZ(0);transition:opacity .3s;z-index:10}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.moods-gallery{bottom:0;display:block;left:0;padding-left:4rem;padding-right:4rem;position:fixed;right:0;top:0;z-index:800}@media (min-width:1024px){.moods-gallery{display:grid;gap:2rem;grid-template-columns:repeat(10,minmax(0,1fr))}}.moods-gallery{background:#fff;opacity:0;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;visibility:hidden}.moods-gallery--visible{opacity:1;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;visibility:visible}.moods-gallery__info{cursor:default;display:block;font-size:.6rem;grid-column:span 3/span 3;padding-bottom:2.75rem;padding-top:3rem;z-index:20}@media (min-width:1024px){.moods-gallery__info{display:flex;flex-direction:column;justify-content:space-between}}.moods-gallery__info{background:#fff}.moods-gallery__info__title{font-size:2.5rem;font-weight:300;line-height:1.375;margin-bottom:.75rem;margin-right:.75rem;width:60%}@media (min-width:1024px){.moods-gallery__info__title{margin-right:4rem}}.moods-gallery__info__subtitle{font-size:1.25rem;font-weight:300;line-height:1.75rem;margin-bottom:2.5rem}.moods-gallery__info__photographer__label{font-weight:300;margin-bottom:.25rem;text-transform:uppercase}.moods-gallery__info__photographer__title{font-weight:400;margin-bottom:.75rem;text-transform:uppercase}.moods-gallery__images{background:#f5f5f5;display:block;grid-column:span 7/span 7;position:relative;width:calc(100% + 4rem);z-index:10}.moods-gallery__images__swiper{bottom:0;left:0;position:absolute;right:0;top:0}.moods-gallery__images__close{background:#f5f5f5;border-radius:5px;cursor:pointer;font-size:.6rem;margin:.5rem;padding:.5rem;position:absolute;right:0;text-decoration-line:underline;text-transform:uppercase;text-underline-offset:2px;top:0;z-index:10}.moods-gallery .swiper{height:100vh;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.moods-gallery .swiper-slide{align-items:center;background:#f5f5f5;display:flex;justify-content:center;text-align:center;width:100%}.moods-gallery .swiper-slide img{max-height:100%;max-width:100%;-o-object-fit:cover;object-fit:cover}.moods-gallery .swiper-button-next,.moods-gallery .swiper-button-prev{color:#000}.moods-gallery .swiper-button-next:after,.moods-gallery .swiper-button-prev:after{align-items:center;display:flex;font-size:1rem;height:100vh;justify-content:center;padding:0 6rem}.moods-gallery .swiper-button-prev{cursor:w-resize}.moods-gallery .swiper-button-next{cursor:e-resize}.moods-gallery .swiper-pagination{display:inline-block;font-size:.75rem;left:inherit;position:absolute;right:0;top:0;width:inherit;z-index:100}";

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
let ImageGallery = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
    return (h(Host, null, h("tele-portal", null, h("div", { class: this.isModalOpen ? 'moods-gallery moods-gallery--visible' : 'moods-gallery' }, h("div", { class: "moods-gallery__info" }, h("div", { onClick: () => {
        location.href = this._images[this.currentImageIndex].postUrl;
      }, style: { position: 'relative', cursor: 'pointer' } }, h("div", { class: "moods-gallery__info__title" }, this.postTitle()), h("div", { class: "moods-gallery__info__subtitle" }, this.postExcerpt()), h("div", { class: "moods-gallery__info__photographer__label" }, "Photography"), h("div", { class: "moods-gallery__info__photographer__title" }, this.photographer()), h("div", { class: "swiper-pagination" }))), h("div", { class: "moods-gallery__images" }, h("div", { class: "swiper moods-gallery__images__swiper" }, h("div", { class: "swiper-wrapper" }, this._images.map(image => (h("div", { class: "swiper-slide" }, h("img", { src: image.imageUrl }))))), h("div", { class: "swiper-button-next" }), h("div", { class: "swiper-button-prev" })), h("div", { class: "moods-gallery__images__close", onClick: () => {
        this.isModalOpen = false;
      } }, "Close"))))));
  }
  get el() { return this; }
  static get watchers() { return {
    "isModalOpen": ["clampBodyScroll"]
  }; }
  static get style() { return moodsGalleryCss; }
};
ImageGallery = /*@__PURE__*/ proxyCustomElement(ImageGallery, [0, "moods-gallery", {
    "images": [1537],
    "isModalOpen": [32],
    "currentImageIndex": [32]
  }, [[16, "openMoodsGallery", "openMoodsGalleryHandler"], [16, "keydown", "keydownHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["moods-gallery", "tele-portal"];
  components.forEach(tagName => { switch (tagName) {
    case "moods-gallery":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ImageGallery);
      }
      break;
    case "tele-portal":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MoodsGallery = ImageGallery;
const defineCustomElement = defineCustomElement$1;

export { MoodsGallery, defineCustomElement };
