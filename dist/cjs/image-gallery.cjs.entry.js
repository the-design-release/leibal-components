'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-31caa8e8.js');
const index$1 = require('./index-b9166294.js');
const _commonjsHelpers = require('./_commonjsHelpers-119ffc74.js');

var numberToWords_min = _commonjsHelpers.createCommonjsModule(function (module, exports) {
/*!
 * Number-To-Words util
 * @version v1.2.4
 * @link https://github.com/marlun78/number-to-words
 * @author Martin Eneqvist (https://github.com/marlun78)
 * @contributors Aleksey Pilyugin (https://github.com/pilyugin),Jeremiah Hall (https://github.com/jeremiahrhall),Adriano Melo (https://github.com/adrianomelo),dmrzn (https://github.com/dmrzn)
 * @license MIT
 */
!function(){var t=9007199254740991;function f(e){return !("number"!=typeof e||e!=e||e===1/0||e===-1/0)}function l(e){return "number"==typeof e&&Math.abs(e)<=t}var n=/(hundred|thousand|(m|b|tr|quadr)illion)$/,r=/teen$/,o=/y$/,i=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,s={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};function h(e){return n.test(e)||r.test(e)?e+"th":o.test(e)?e.replace(o,"ieth"):i.test(e)?e.replace(i,a):e}function a(e,t){return s[t]}var u=10,d=100,p=1e3,v=1e6,b=1e9,y=1e12,c=1e15,g=9007199254740992,m=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],w=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function x(e,t){var n,r=parseInt(e,10);if(!f(r))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(r))throw new RangeError("Input is not a safe number, it’s either too large or too small.");return n=function e(t){var n,r,o=arguments[1];if(0===t)return o?o.join(" ").replace(/,$/,""):"zero";o||(o=[]);t<0&&(o.push("minus"),t=Math.abs(t));t<20?(n=0,r=m[t]):t<d?(n=t%u,r=w[Math.floor(t/u)],n&&(r+="-"+m[n],n=0)):t<p?(n=t%d,r=e(Math.floor(t/d))+" hundred"):t<v?(n=t%p,r=e(Math.floor(t/p))+" thousand,"):t<b?(n=t%v,r=e(Math.floor(t/v))+" million,"):t<y?(n=t%b,r=e(Math.floor(t/b))+" billion,"):t<c?(n=t%y,r=e(Math.floor(t/y))+" trillion,"):t<=g&&(n=t%c,r=e(Math.floor(t/c))+" quadrillion,");o.push(r);return e(n,o)}(r),t?h(n):n}var M={toOrdinal:function(e){var t=parseInt(e,10);if(!f(t))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(t))throw new RangeError("Input is not a safe number, it’s either too large or too small.");var n=String(t),r=Math.abs(t%100),o=11<=r&&r<=13,i=n.charAt(n.length-1);return n+(o?"th":"1"===i?"st":"2"===i?"nd":"3"===i?"rd":"th")},toWords:x,toWordsOrdinal:function(e){return h(x(e))}};(module.exports&&(exports=module.exports=M),exports.numberToWords=M);}();
});

const imageGalleryCss = "@font-face{font-family:swiper-icons;font-style:normal;font-weight:400;src:url(\"data:application/font-woff;charset=utf-8;base64, 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\")}:root{--swiper-theme-color:#007aff}.swiper{list-style:none;margin-left:auto;margin-right:auto;overflow:hidden;padding:0}.swiper,.swiper-wrapper{position:relative;z-index:1}.swiper-wrapper{box-sizing:content-box;display:flex;transform:translateZ(0)}.swiper-slide,.swiper-wrapper{height:100%;transition-property:transform;width:100%}.swiper-slide{flex-shrink:0;position:relative}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{align-items:center;color:var(--swiper-navigation-color,var(--swiper-theme-color));cursor:pointer;display:flex;height:var(--swiper-navigation-size);justify-content:center;margin-top:calc(0px - var(--swiper-navigation-size)/2);position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/44*27);z-index:10}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);font-variant:normal;letter-spacing:0;line-height:1;text-transform:none!important}.swiper-button-prev{left:10px;right:auto}.swiper-button-prev:after{content:\"prev\"}.swiper-button-next{left:auto;right:10px}.swiper-button-next:after{content:\"next\"}.swiper-pagination{position:absolute;text-align:center;transform:translateZ(0);transition:opacity .3s;z-index:10}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.image-gallery{bottom:0;display:flex;flex-direction:column;left:0;position:fixed;right:0;top:0;z-index:800}@media (min-width:1024px){.image-gallery{display:grid;gap:2rem;grid-template-columns:repeat(10,minmax(0,1fr));padding-left:4rem;padding-right:4rem}}.image-gallery{background:#fff;opacity:0;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;visibility:hidden}.image-gallery--visible{opacity:1;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;visibility:visible}.image-gallery__info{cursor:default;display:block;font-size:.6rem;grid-column:span 3/span 3;padding:2rem 2rem 1rem;z-index:20}@media (min-width:768px){.image-gallery__info{padding-bottom:2.95rem}}@media (min-width:1024px){.image-gallery__info{display:flex;flex-direction:column;justify-content:space-between;padding-left:0;padding-right:0;padding-top:3rem}}.image-gallery__info{background:#fff}.image-gallery__info__title{font-size:1.5rem;font-weight:200;line-height:1.375;margin-bottom:.75rem;margin-right:.75rem;width:60%}@media (min-width:1024px){.image-gallery__info__title{font-size:2.5rem;margin-right:4rem}}.image-gallery__info__subtitle{font-size:1rem;font-weight:200;margin-bottom:2.5rem}@media (min-width:1024px){.image-gallery__info__subtitle{font-size:1.25rem;line-height:1.75rem}}.image-gallery__info__photographer__label{font-size:.6rem;font-weight:300;margin-bottom:.5rem;text-transform:uppercase}.image-gallery__info__photographer__title{font-size:.6rem;font-weight:200;margin-bottom:.75rem;text-transform:uppercase}.image-gallery__images{background:#f5f5f5;display:block;flex-grow:1;grid-column:span 7/span 7;position:relative;width:100%;z-index:10}@media (min-width:1024px){.image-gallery__images{width:calc(100% + 4rem)}}.image-gallery__images__swiper{bottom:0;left:0;position:absolute;right:0;top:0}.image-gallery__images__close{background:#f5f5f5;border-radius:5px;cursor:pointer;font-size:.6rem;margin:.5rem;padding:.5rem;position:absolute;right:0;text-decoration-line:underline;text-transform:uppercase;text-underline-offset:2px;top:0;z-index:10}.image-gallery .swiper{height:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.image-gallery .swiper-slide{align-items:center;background:#f5f5f5;display:flex;justify-content:center;text-align:center;width:100%}.image-gallery .swiper-slide img{max-height:100%;max-width:100%;-o-object-fit:cover;object-fit:cover}.image-gallery .swiper-button-next,.image-gallery .swiper-button-prev{color:#000}.image-gallery .swiper-button-next:after,.image-gallery .swiper-button-prev:after{align-items:center;display:flex;font-size:1rem;height:100vh;justify-content:center;padding:0 6rem}.image-gallery .swiper-button-prev{cursor:w-resize}.image-gallery .swiper-button-next{cursor:e-resize}.image-gallery .swiper-pagination{display:inline-block;font-size:.75rem;font-weight:300;left:inherit;position:absolute;right:0;top:0;width:inherit;z-index:100}";

const DEFAULT_SWIPER_OPTIONS = {
  modules: [index$1.Navigation, index$1.Pagination, index$1.Keyboard],
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent(number) {
      return index$1.zeroPad(number, 2);
    },
    formatFractionTotal(number) {
      return index$1.zeroPad(number, 2);
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
let ImageGallery = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.images = '[]';
    this.canEnquire = false;
    this.designDetail = null;
    this.canBook = false;
    this.bookUrl = null;
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
    this.swiper = new index$1.Swiper('.image-gallery__images__swiper', DEFAULT_SWIPER_OPTIONS);
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
    return (index.h(index.Host, null, index.h("tele-portal", null, index.h("div", { class: this.isModalOpen ? 'image-gallery image-gallery--visible' : 'image-gallery' }, index.h("div", { class: "image-gallery__info" }, index.h("div", { onClick: () => {
        this.isModalOpen = false;
      }, style: { position: 'relative' } }, index.h("div", { class: "image-gallery__info__title" }, this.postTitle), index.h("div", { class: "image-gallery__info__subtitle" }, "by ", this.postExcerpt), index.h("div", { class: "image-gallery__info__photographer__label" }, "Photographer"), index.h("div", { class: "flex justify-between items-center image-gallery__info__photographer__title" }, index.h("div", null, this._images[this.currentImageIndex] === undefined
      ? this._images[this.currentImageIndex].photographer
      : this.photographer), index.h("div", { class: "lg:hidden" }, index.h("add-to-moods-button", { theme: 'dark', "image-url": this._images[this.currentImageIndex].href, "post-id": this.postId, "content-location": 'left' }, index.h("span", { style: { marginRight: '0.5rem', fontSize: '0.5rem' } }, "Save Image to MOODS")))), index.h("div", { class: "swiper-pagination" })), index.h("div", { class: "hidden lg:block" }, index.h("add-to-moods-button", { theme: 'dark', "image-url": this._images[this.currentImageIndex].href, "post-id": this.postId, "content-location": 'right', style: { marginTop: '2.5rem' } }, index.h("span", { style: { marginLeft: '1rem', fontSize: '0.75rem' } }, "Save Image to MOODS"))), index.h("div", null, this.canEnquire && (index.h("div", { class: "hidden lg:block" }, index.h("enquire-modal", { postTitle: this.postTitle + ' by ' + this.postExcerpt, previewImage: this.previewImage }))), this.canBook && (index.h("div", null, index.h("div", { class: "block xl:grid xl:grid-cols-12 xl:gap-8 design-detail" }, index.h("a", { href: this.bookUrl, class: "block col-span-8", target: "_blank", style: { letterSpacing: '1.6px' } }, index.h("div", { class: "overflow-hidden relative w-full aspect-square" }, index.h("img", { class: "object-cover object-center w-full h-full", src: this.previewImage }))), index.h("div", { class: "flex flex-col col-span-4 justify-between mt-4 mb-8 text-2xs lg:mt-0 xl:mb-0" }, index.h("div", { class: "uppercase" }, index.h("div", { class: "font-light" }, "Book"), index.h("div", { class: "font-normal" }, this.postTitle)), index.h("div", { class: "font-light" }, "Find out more information regarding availability, pricing, and booking.")), index.h("a", { href: this.bookUrl, target: "_blank", class: "block col-span-8" }, index.h("simple-button", null, "Book"))))), !this.canEnquire && designDetail && (index.h("div", { class: "hidden lg:block" }, index.h("div", { class: "block xl:grid xl:grid-cols-12 xl:gap-8" }, index.h("display-card", { images: JSON.stringify([designDetail.image.url]), style: { marginBottom: '0' }, class: "col-span-8" }, index.h("div", { slot: "top-title", style: {
        fontSize: '0.6rem',
        letterSpacing: '1.6px',
        fontWeight: '300',
      } }, designDetail.designer || 'Unknown'), index.h("div", { slot: "top-subtitle", style: {
        fontSize: '0.6rem',
        letterSpacing: '1.6px',
        fontWeight: '200',
      } }, designDetail.category || 'N/A'), index.h("div", { slot: "bottom-title", style: {
        fontSize: '0.88rem',
        letterSpacing: '1.6px',
        fontWeight: '300',
      } }, designDetail.name || ''), index.h("div", { slot: "bottom-subtitle", style: {
        fontSize: '0.6rem',
        letterSpacing: '1.6px',
        fontWeight: '200',
      } }, designDetail.price || '')), index.h("div", { class: "flex flex-col col-span-4 mb-8 font-light text-2xs xl:mb-0" }, index.h("div", null, index.h("span", null, "As seen in image "), asSeenIns.map((image, i) => {
      const index$1 = parseFloat(image.value.index);
      if (i === asSeenIns.length - 1 && asSeenIns.length > 0) {
        return (index.h(index.Fragment, null, index.h("span", null, "and "), index.h("span", { class: "underline cursor-pointer", onClick: () => this.swiper.slideTo(index$1 + 1) }, numberToWords_min.toWords(index$1 + 1)), "."));
      }
      return (index.h(index.Fragment, null, index.h("span", { class: "underline cursor-pointer", onClick: () => this.swiper.slideTo(index$1 + 1) }, numberToWords_min.toWords(index$1 + 1)), ', '));
    })))))))), index.h("div", { class: "image-gallery__images" }, index.h("div", { class: "swiper image-gallery__images__swiper" }, index.h("div", { class: "swiper-wrapper" }, this._images.map(image => (index.h("div", { class: "swiper-slide" }, index.h("img", { src: image.href }))))), index.h("div", { class: "swiper-button-next" }), index.h("div", { class: "swiper-button-prev" })), index.h("div", { class: "image-gallery__images__close", onClick: () => {
        this.isModalOpen = false;
      } }, "Close"))))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "isModalOpen": ["clampBodyScroll"]
  }; }
};
ImageGallery.style = imageGalleryCss;

exports.image_gallery = ImageGallery;
