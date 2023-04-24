import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const displayCardCss = "/*! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}button{text-transform:none}[type=button],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h1,p{margin:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}img{display:block;height:auto;max-width:100%;vertical-align:middle}[hidden]{display:none}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.visible{visibility:visible}.relative{position:relative}.sticky{position:sticky}.z-10{z-index:10}.col-span-4{grid-column:span 4/span 4}.col-span-3{grid-column:span 3/span 3}.col-span-8{grid-column:span 8/span 8}.mb-8{margin-bottom:2rem}.block{display:block}.flex{display:flex}.grid{display:grid}.contents{display:contents}.hidden{display:none}.w-full{width:100%}.cursor-pointer{cursor:pointer}.resize{resize:both}.flex-col{flex-direction:column}.border-l{border-left-width:1px}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity))}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.blur{--tw-blur:blur(8px)}.blur,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:host{margin-bottom:3rem}@media (min-width:1024px){:host{margin-bottom:5rem}}:host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.display-card{cursor:pointer;letter-spacing:.1em}.display-card__image{aspect-ratio:auto 1/1;overflow:hidden;position:relative;width:100%}.display-card__image>*{background-position:50%;background-size:cover;height:100%;opacity:0;position:absolute;transition:opacity .3s ease-in-out;width:100%}.display-card__image:hover>:nth-child(2),.display-card__image>:first-child{opacity:1}.display-card__top{margin-bottom:1.25rem;margin-top:1.25rem}.display-card__top__title{font-size:9px;font-weight:400;margin-bottom:.25rem;text-transform:uppercase}.display-card__top__subtitle{font-size:9px;font-weight:300;text-transform:uppercase}.display-card__bottom__title{font-size:13px;font-weight:400;margin-bottom:.25rem}.display-card__bottom__subtitle{font-size:9px;font-weight:300}.display-card--featured{cursor:pointer;display:block;letter-spacing:.1em}@media (min-width:768px){.display-card--featured{display:grid;gap:2rem;grid-template-columns:repeat(6,minmax(0,1fr))}}.display-card--featured__right{display:flex;flex-direction:column;grid-column:span 2/span 2;justify-content:space-between}.display-card--featured__top{margin-bottom:1.75rem;margin-top:1.5rem}@media (min-width:768px){.display-card--featured__top{margin-bottom:0;margin-top:0}}.display-card--featured__top__title{font-size:1.875rem;font-weight:400;line-height:2.25rem;margin-bottom:1rem;padding-right:1rem}.display-card--featured__top__subtitle{font-size:1rem;font-weight:300;line-height:1.5rem}.display-card--featured__bottom__title{font-size:9px;font-weight:400;margin-bottom:.75rem;text-transform:uppercase}.display-card--featured__bottom__title__name{font-size:9px;font-weight:300;margin-bottom:.25rem;text-transform:uppercase}.display-card--featured__bottom__subtitle{font-size:9px;font-weight:400;text-transform:uppercase}.display-card--featured__bottom__subtitle__name{font-size:9px;font-weight:300;margin-bottom:.25rem;text-transform:uppercase}@media (min-width:1280px){.xl\\:mb-0{margin-bottom:0}.xl\\:grid{display:grid}.xl\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.xl\\:gap-8{gap:2rem}}";

let DisplayCard = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.theme = 'light';
    this.cardType = 'normal';
    this.bottomTitleName = '';
    this.bottomSubtitleName = '';
    this.images = '';
    this.linkTo = '#';
  }
  watchImages(value) {
    if (typeof value === 'string') {
      this._images = JSON.parse(value);
    }
    else {
      this._images = value;
    }
  }
  componentWillLoad() {
    this.watchImages(this.images);
  }
  render() {
    return (h(Host, null, this.cardType === 'normal' ? (h("a", { href: this.linkTo, class: "display-card" }, h("div", { class: "display-card__image" }, h("div", { style: { backgroundImage: `url(${this._images[0]})` } }), h("div", { style: { backgroundImage: `url(${this._images[1]})` } })), h("div", { class: "display-card__top" }, h("div", { class: "display-card__top__title" }, h("slot", { name: "top-title" })), h("div", { class: "display-card__top__subtitle" }, h("slot", { name: "top-subtitle" }))), h("div", { class: "display-card__bottom" }, h("div", { class: "display-card__bottom__title" }, h("slot", { name: "bottom-title" })), h("div", { class: "display-card__bottom__subtitle" }, h("slot", { name: "bottom-subtitle" }))))) : (h("a", { href: this.linkTo, class: "display-card--featured" }, h("div", { class: "col-span-4 display-card__image" }, h("div", { style: { backgroundImage: `url(${this._images[0]})` } }), h("div", { style: { backgroundImage: `url(${this._images[1]})` } })), h("div", { class: "display-card--featured__right" }, h("div", { class: "display-card--featured__top" }, h("div", { class: "display-card--featured__top__title" }, h("slot", { name: "top-title" })), h("div", { class: "display-card--featured__top__subtitle" }, h("slot", { name: "top-subtitle" }))), h("div", { class: "display-card--featured__bottom" }, h("div", { class: "display-card--featured__bottom__title" }, h("div", { class: "display-card--featured__bottom__title__name" }, this.bottomTitleName), h("slot", { name: "bottom-title" })), h("div", { class: "display-card--featured__bottom__subtitle" }, h("div", { class: "display-card--featured__bottom__subtitle__name" }, this.bottomSubtitleName), h("slot", { name: "bottom-subtitle" }))))))));
  }
  static get watchers() { return {
    "images": ["watchImages"]
  }; }
  static get style() { return displayCardCss; }
};
DisplayCard = /*@__PURE__*/ proxyCustomElement(DisplayCard, [1, "display-card", {
    "theme": [1537],
    "cardType": [1537, "card-type"],
    "bottomTitleName": [1025, "bottom-title-name"],
    "bottomSubtitleName": [1025, "bottom-subtitle-name"],
    "images": [1025],
    "linkTo": [1025, "link-to"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["display-card"];
  components.forEach(tagName => { switch (tagName) {
    case "display-card":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DisplayCard);
      }
      break;
  } });
}

export { DisplayCard as D, defineCustomElement as d };
