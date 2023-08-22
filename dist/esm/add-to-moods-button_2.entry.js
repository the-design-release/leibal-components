import { r as registerInstance, c as createEvent, h, g as getAssetPath, H as Host, a as getElement } from './index-3f06ee34.js';

const addToMoodsButtonCss = ":host{display:block}.add-to-moods-button{align-items:center;cursor:pointer;display:flex;transition:opacity .2s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none}.add-to-moods-button--show-on-hover{opacity:0}.add-to-moods-button--show-on-hover .add-to-moods-button__content-left,.add-to-moods-button--show-on-hover .add-to-moods-button__content-right{opacity:0;transition:opacity .2s ease-in-out}.add-to-moods-button--show-on-hover .add-to-moods-button__content-left--hover,.add-to-moods-button--show-on-hover .add-to-moods-button__content-right--hover,.add-to-moods-button--show-on-hover--hover{opacity:1;transition:opacity .2s ease-in-out}.add-to-moods-button img{margin-top:-.1rem;width:1.5rem}";

let AddToMoodsButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.openMoodsModal = createEvent(this, "openMoodsModal", 7);
    this.imageUrl = '';
    this.postId = null;
    this.disabled = false;
    this.theme = 'light';
    this.showOnHover = false;
    this.contentLocation = 'left';
    this.hidden = false;
  }
  openMoodsModalHandler() {
    if (!this.imageUrl || !this.postId)
      return;
    this.openMoodsModal.emit({
      imageUrl: this.imageUrl,
      postId: this.postId,
    });
  }
  componentDidLoad() {
    // Check if the parent element is being hovered.
    if (!this.showOnHover)
      return;
    this.hidden = true;
    // Get the parent element.
    const parent = this.el.parentElement;
    if (!parent)
      return;
    // Get the slots and the icon
    let leftSlot = this.el.shadowRoot.querySelector('.add-to-moods-button__content-left');
    let rightSlot = this.el.shadowRoot.querySelector('.add-to-moods-button__content-right');
    let icon = this.el.shadowRoot.querySelector('img');
    // Show the slots when hovering the icon.
    icon.addEventListener('mouseenter', () => {
      if (leftSlot)
        leftSlot.classList.add('add-to-moods-button__content-left--hover');
      if (rightSlot)
        rightSlot.classList.add('add-to-moods-button__content-right--hover');
    });
    icon.addEventListener('mouseleave', () => {
      if (leftSlot)
        leftSlot.classList.remove('add-to-moods-button__content-left--hover');
      if (rightSlot)
        rightSlot.classList.remove('add-to-moods-button__content-right--hover');
    });
    // Show the button when hovering the parent element.
    parent.addEventListener('mouseenter', () => {
      this.hidden = false;
    });
    parent.addEventListener('mouseleave', () => {
      this.hidden = true;
    });
  }
  render() {
    return (h(Host, null, h("div", { class: 'add-to-moods-button ' +
        (this.showOnHover ? 'add-to-moods-button--show-on-hover ' : ' ') +
        (!this.hidden && this.showOnHover ? 'add-to-moods-button--show-on-hover--hover ' : ' '), onClick: () => this.openMoodsModalHandler() }, this.contentLocation === 'left' && (h("div", { class: "add-to-moods-button__content-left" }, h("slot", null))), h("img", { src: this.theme == 'light' ? getAssetPath('./assets/add-icon.png') : getAssetPath('./assets/add-icon-dark.png'), alt: "Add To MOODS" }), this.contentLocation === 'right' && (h("div", { class: "add-to-moods-button__content-right" }, h("slot", null))))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return getElement(this); }
};
AddToMoodsButton.style = addToMoodsButtonCss;

const displayCardCss = "/*! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b{font-weight:bolder}code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}button,input,select,textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h1,p{margin:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}img,video{display:block;height:auto;max-width:100%;vertical-align:middle}[hidden]{display:none}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.visible{visibility:visible}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.z-10{z-index:10}.col-span-4{grid-column:span 4/span 4}.col-span-3{grid-column:span 3/span 3}.col-span-8{grid-column:span 8/span 8}.mb-8{margin-bottom:2rem}.mt-4{margin-top:1rem}.block{display:block}.flex{display:flex}.grid{display:grid}.contents{display:contents}.hidden{display:none}.aspect-square{aspect-ratio:1/1}.h-full{height:100%}.w-full{width:100%}.cursor-pointer{cursor:pointer}.resize{resize:both}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.overflow-hidden{overflow:hidden}.border-l{border-left-width:1px}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity))}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-light{font-weight:200}.font-normal{font-weight:300}.font-bold{font-weight:600}.uppercase{text-transform:uppercase}.underline{text-decoration-line:underline}.blur{--tw-blur:blur(8px)}.blur,.invert{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.invert{--tw-invert:invert(100%)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:host{margin-bottom:3rem}@media (min-width:1024px){:host{margin-bottom:5rem}}:host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.display-card{cursor:pointer;letter-spacing:.1em}.display-card__image{aspect-ratio:auto 1/1;overflow:hidden;position:relative;width:100%}.display-card__image>*{height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center center;object-position:center center;opacity:0;position:absolute;transition:opacity .3s ease-in-out;width:100%;z-index:1}.display-card__image>:first-child{opacity:1}.display-card__image:hover>:nth-child(2){opacity:1;z-index:2}.display-card__top{margin-bottom:1.25rem;margin-top:1.25rem}.display-card__top__title{font-size:.6rem;font-weight:300;margin-bottom:.25rem;text-transform:uppercase}.display-card__top__subtitle{font-size:.6rem;font-weight:200;text-transform:uppercase}.display-card__bottom__title{font-size:.88rem;font-weight:300;margin-bottom:.25rem}.display-card__bottom__subtitle{font-size:.6rem;font-weight:200}.display-card--featured{cursor:pointer;display:block;letter-spacing:.1em}@media (min-width:768px){.display-card--featured{display:grid;gap:2rem;grid-template-columns:repeat(6,minmax(0,1fr))}}.display-card--featured__right{display:flex;flex-direction:column;grid-column:span 2/span 2;justify-content:space-between}.display-card--featured__top{margin-bottom:1.75rem;margin-top:1.5rem}@media (min-width:768px){.display-card--featured__top{margin-bottom:0;margin-top:0}}.display-card--featured__top__title{font-size:1.875rem;font-weight:300;line-height:2.25rem;margin-bottom:1rem;padding-right:1rem}.display-card--featured__top__subtitle{font-size:1rem;font-weight:200;line-height:1.5rem}.display-card--featured__bottom__title{font-size:.6rem;font-weight:300;line-height:0px;margin-bottom:.75rem;text-transform:uppercase}.display-card--featured__bottom__title__name{margin-bottom:.25rem}.display-card--featured__bottom__subtitle,.display-card--featured__bottom__subtitle__name,.display-card--featured__bottom__title__name{font-size:.6rem;font-weight:200;text-transform:uppercase}.display-card--featured__bottom__subtitle__name{margin-bottom:.25rem}@media (min-width:1024px){.lg\\:mt-0{margin-top:0}.lg\\:block{display:block}.lg\\:hidden{display:none}}@media (min-width:1280px){.xl\\:mb-0{margin-bottom:0}.xl\\:grid{display:grid}.xl\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.xl\\:gap-8{gap:2rem}}";

let DisplayCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, this.cardType === 'normal' ? (h("a", { href: this.linkTo, class: "display-card" }, h("div", { class: "display-card__image" }, h("img", { src: this._images[0], loading: "lazy" }), h("img", { src: this._images[1], loading: "lazy" })), h("div", { class: "display-card__top" }, h("div", { class: "display-card__top__title" }, h("slot", { name: "top-title" })), h("div", { class: "display-card__top__subtitle" }, h("slot", { name: "top-subtitle" }))), h("div", { class: "display-card__bottom" }, h("div", { class: "display-card__bottom__title" }, h("slot", { name: "bottom-title" })), h("div", { class: "display-card__bottom__subtitle" }, h("slot", { name: "bottom-subtitle" }))))) : (h("a", { href: this.linkTo, class: "display-card--featured" }, h("div", { class: "col-span-4 display-card__image" }, h("img", { src: this._images[0], loading: "lazy" }), h("img", { src: this._images[1], loading: "lazy" })), h("div", { class: "display-card--featured__right" }, h("div", { class: "display-card--featured__top" }, h("div", { class: "display-card--featured__top__title" }, h("slot", { name: "top-title" })), h("div", { class: "display-card--featured__top__subtitle" }, h("slot", { name: "top-subtitle" }))), h("div", { class: "display-card--featured__bottom" }, h("div", { class: "display-card--featured__bottom__title" }, h("div", { class: "display-card--featured__bottom__title__name" }, this.bottomTitleName), h("slot", { name: "bottom-title" })), h("div", { class: "display-card--featured__bottom__subtitle" }, h("div", { class: "display-card--featured__bottom__subtitle__name" }, this.bottomSubtitleName), h("slot", { name: "bottom-subtitle" }))))))));
  }
  static get watchers() { return {
    "images": ["watchImages"]
  }; }
};
DisplayCard.style = displayCardCss;

export { AddToMoodsButton as add_to_moods_button, DisplayCard as display_card };
