'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-31caa8e8.js');

const addToMoodsButtonCss = ":host{display:block}.add-to-moods-button{align-items:center;cursor:pointer;display:flex;transition:opacity .2s ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.add-to-moods-button--show-on-hover{opacity:0}.add-to-moods-button--show-on-hover .add-to-moods-button__content-left,.add-to-moods-button--show-on-hover .add-to-moods-button__content-right{opacity:0;transition:opacity .2s ease-in-out}.add-to-moods-button--show-on-hover .add-to-moods-button__content-left--hover,.add-to-moods-button--show-on-hover .add-to-moods-button__content-right--hover,.add-to-moods-button--show-on-hover--hover{opacity:1;transition:opacity .2s ease-in-out}.add-to-moods-button img{margin-top:-.1rem;width:1.5rem}";

let AddToMoodsButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.openMoodsModal = index.createEvent(this, "openMoodsModal", 7);
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
    return (index.h(index.Host, null, index.h("div", { class: 'add-to-moods-button ' +
        (this.showOnHover ? 'add-to-moods-button--show-on-hover ' : ' ') +
        (!this.hidden && this.showOnHover ? 'add-to-moods-button--show-on-hover--hover ' : ' '), onClick: () => this.openMoodsModalHandler() }, this.contentLocation === 'left' && (index.h("div", { class: "add-to-moods-button__content-left" }, index.h("slot", null))), index.h("img", { src: this.theme == 'light' ? index.getAssetPath('./assets/add-icon.png') : index.getAssetPath('./assets/add-icon-dark.png'), alt: "Add To MOODS" }), this.contentLocation === 'right' && (index.h("div", { class: "add-to-moods-button__content-right" }, index.h("slot", null))))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return index.getElement(this); }
};
AddToMoodsButton.style = addToMoodsButtonCss;

const displayCardCss = "/*! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}button{text-transform:none}[type=button],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h1,p{margin:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}img{display:block;height:auto;max-width:100%;vertical-align:middle}[hidden]{display:none}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.visible{visibility:visible}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.z-10{z-index:10}.col-span-4{grid-column:span 4/span 4}.col-span-3{grid-column:span 3/span 3}.col-span-8{grid-column:span 8/span 8}.mb-8{margin-bottom:2rem}.block{display:block}.flex{display:flex}.grid{display:grid}.contents{display:contents}.hidden{display:none}.w-full{width:100%}.cursor-pointer{cursor:pointer}.resize{resize:both}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.border-l{border-left-width:1px}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity))}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.blur{--tw-blur:blur(8px)}.blur,.invert{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.invert{--tw-invert:invert(100%)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:host{margin-bottom:3rem}@media (min-width:1024px){:host{margin-bottom:5rem}}:host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.display-card{cursor:pointer;letter-spacing:.1em}.display-card__image{aspect-ratio:auto 1/1;overflow:hidden;position:relative;width:100%}.display-card__image>*{background-position:50%;background-size:cover;height:100%;opacity:0;position:absolute;transition:opacity .3s ease-in-out;width:100%;z-index:1}.display-card__image>:first-child{opacity:1}.display-card__image:hover>:nth-child(2){opacity:1;z-index:2}.display-card__top{margin-bottom:1.25rem;margin-top:1.25rem}.display-card__top__title{font-size:9px;font-weight:400;margin-bottom:.25rem;text-transform:uppercase}.display-card__top__subtitle{font-size:9px;font-weight:300;text-transform:uppercase}.display-card__bottom__title{font-size:13px;font-weight:400;margin-bottom:.25rem}.display-card__bottom__subtitle{font-size:9px;font-weight:300}.display-card--featured{cursor:pointer;display:block;letter-spacing:.1em}@media (min-width:768px){.display-card--featured{display:grid;gap:2rem;grid-template-columns:repeat(6,minmax(0,1fr))}}.display-card--featured__right{display:flex;flex-direction:column;grid-column:span 2/span 2;justify-content:space-between}.display-card--featured__top{margin-bottom:1.75rem;margin-top:1.5rem}@media (min-width:768px){.display-card--featured__top{margin-bottom:0;margin-top:0}}.display-card--featured__top__title{font-size:1.875rem;font-weight:400;line-height:2.25rem;margin-bottom:1rem;padding-right:1rem}.display-card--featured__top__subtitle{font-size:1rem;font-weight:300;line-height:1.5rem}.display-card--featured__bottom__title{font-size:9px;font-weight:400;line-height:0px;margin-bottom:.75rem;text-transform:uppercase}.display-card--featured__bottom__title__name{margin-bottom:.25rem}.display-card--featured__bottom__subtitle,.display-card--featured__bottom__subtitle__name,.display-card--featured__bottom__title__name{font-size:9px;font-weight:300;text-transform:uppercase}.display-card--featured__bottom__subtitle__name{margin-bottom:.25rem}@media (min-width:1024px){.lg\\:block{display:block}.lg\\:hidden{display:none}}@media (min-width:1280px){.xl\\:mb-0{margin-bottom:0}.xl\\:grid{display:grid}.xl\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.xl\\:gap-8{gap:2rem}}";

let DisplayCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, this.cardType === 'normal' ? (index.h("a", { href: this.linkTo, class: "display-card" }, index.h("div", { class: "display-card__image" }, index.h("div", { style: { backgroundImage: `url(${this._images[0]})` } }), index.h("div", { style: { backgroundImage: `url(${this._images[1]})` } })), index.h("div", { class: "display-card__top" }, index.h("div", { class: "display-card__top__title" }, index.h("slot", { name: "top-title" })), index.h("div", { class: "display-card__top__subtitle" }, index.h("slot", { name: "top-subtitle" }))), index.h("div", { class: "display-card__bottom" }, index.h("div", { class: "display-card__bottom__title" }, index.h("slot", { name: "bottom-title" })), index.h("div", { class: "display-card__bottom__subtitle" }, index.h("slot", { name: "bottom-subtitle" }))))) : (index.h("a", { href: this.linkTo, class: "display-card--featured" }, index.h("div", { class: "col-span-4 display-card__image" }, index.h("div", { style: { backgroundImage: `url(${this._images[0]})` } }), index.h("div", { style: { backgroundImage: `url(${this._images[1]})` } })), index.h("div", { class: "display-card--featured__right" }, index.h("div", { class: "display-card--featured__top" }, index.h("div", { class: "display-card--featured__top__title" }, index.h("slot", { name: "top-title" })), index.h("div", { class: "display-card--featured__top__subtitle" }, index.h("slot", { name: "top-subtitle" }))), index.h("div", { class: "display-card--featured__bottom" }, index.h("div", { class: "display-card--featured__bottom__title" }, index.h("div", { class: "display-card--featured__bottom__title__name" }, this.bottomTitleName), index.h("slot", { name: "bottom-title" })), index.h("div", { class: "display-card--featured__bottom__subtitle" }, index.h("div", { class: "display-card--featured__bottom__subtitle__name" }, this.bottomSubtitleName), index.h("slot", { name: "bottom-subtitle" }))))))));
  }
  static get watchers() { return {
    "images": ["watchImages"]
  }; }
};
DisplayCard.style = displayCardCss;

const enquireModalCss = ".enquire-card{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;cursor:pointer;display:block;display:grid;font-family:var(--font-family);gap:2rem;grid-column:1/4;grid-template-columns:repeat(12,minmax(0,1fr))}.enquire-card__preview-image{grid-column:span 6/span 6}@media (min-width:1024px){.enquire-card__preview-image{grid-column:span 8/span 8}}.enquire-card__preview-image{aspect-ratio:auto 1/1;overflow:hidden;position:relative;width:100%}.enquire-card__preview-image>*{background-position:50%;background-size:cover;height:100%;opacity:0;position:absolute;transition:opacity .3s ease-in-out;width:100%}.enquire-card__preview-image:hover>:nth-child(2),.enquire-card__preview-image>:first-child{opacity:1}.enquire-card__info{display:flex;flex-direction:column;font-size:9px;font-weight:300;grid-column:span 6/span 6;justify-content:space-between}@media (min-width:1024px){.enquire-card__info{grid-column:span 4/span 4}}.enquire-card__info__enquire{margin-bottom:.25rem;text-transform:uppercase}.enquire-card__info__title{font-weight:400;text-transform:uppercase}.enquire-card__button{grid-column:span 12/span 12}@media (min-width:1024px){.enquire-card__button{grid-column:span 8/span 8}}.enquire-modal__modal{background:rgba(0,0,0,.5);bottom:0;left:0;opacity:0;position:fixed;right:0;top:0;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;visibility:hidden;z-index:1000}.enquire-modal__modal--visible{opacity:1;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;visibility:visible}.enquire-modal__modal__content{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));padding-left:2rem;padding-right:2rem;position:relative}@media (min-width:1024px){.enquire-modal__modal__content{display:grid;gap:2rem;grid-template-columns:repeat(10,minmax(0,1fr));padding-left:4rem;padding-right:4rem}}.enquire-modal__modal__content>div{padding-bottom:2rem;padding-top:2rem}@media (min-width:1024px){.enquire-modal__modal__content>div{padding-bottom:3rem;padding-top:3rem}}.enquire-modal__modal__content>div:first-child{display:none}@media (min-width:1024px){.enquire-modal__modal__content>div:first-child{display:grid}}.enquire-modal__modal__content>div:last-child{padding:0}.enquire-modal__modal__form{border:none;grid-column:span 5/span 5}@media (min-width:1024px){.enquire-modal__modal__form{border:1px solid #eaeaea;border-bottom:none;border-top:none;padding-left:2rem;padding-right:2rem}}.enquire-modal__modal__form>div{display:block}@media (min-width:1024px){.enquire-modal__modal__form>div{display:grid;gap:2rem;grid-template-columns:repeat(2,minmax(0,1fr))}}.enquire-modal__modal__form>div>*{margin-bottom:2rem}@media (min-width:1024px){.enquire-modal__modal__form>div>*{margin-bottom:0}}.enquire-modal__modal__form__message{grid-column:span 2/span 2;grid-row:span 2/span 2}.enquire-modal__modal__form__message__title{font-size:13px;font-weight:300;margin-bottom:1rem}.enquire-modal__modal__form__message__body{border:1px solid #eaeaea;font-size:13px;font-weight:300;letter-spacing:.05em;line-height:1.5rem;max-height:185px;overflow-y:auto;padding:1rem}.enquire-modal__modal__form__message__body p{margin-bottom:1rem;margin-top:1rem}.enquire-modal__modal__form__message__body p:first-child{margin-top:0}.enquire-modal__modal__form__message__body p:last-child{margin-bottom:0}.enquire-modal__modal__submit{display:block;grid-column:span 2/span 2}@media (min-width:1024px){.enquire-modal__modal__submit{display:flex;flex-direction:column;justify-content:space-between}}.enquire-modal__modal__submit__disclaimer{font-size:9px;letter-spacing:.1em;margin-bottom:2rem}.enquire-modal__modal__submit__disclaimer a{color:#000}.enquire-modal__modal__close{cursor:pointer;font-size:1.25rem;font-weight:300;line-height:1.75rem;line-height:1;position:absolute;right:.75rem;top:.75rem}.enquire-modal__modal__close img{width:1rem}.grow-wrap{display:grid}.grow-wrap:after{content:attr(data-replicated-value) \" \";visibility:hidden;white-space:pre-wrap}.grow-wrap>textarea{overflow:hidden;resize:none}.grow-wrap:after,.grow-wrap>textarea{border:none;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:12px;font-weight:300;grid-area:1/1/2/2;letter-spacing:1px;margin-left:-1px;outline:none;width:100%}";

let EnquireModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.isModalOpen = false;
    this.formState = {
      firstName: '',
      lastName: '',
      email: '',
      location: '',
      moreText: '',
    };
    this.renderEnquireCard = () => (index.h("div", { class: "col-span-3 w-full cursor-pointer enquire-card", onClick: this.handleEnquireClick.bind(this) }, index.h("div", { class: "enquire-card__preview-image" }, index.h("div", { style: { backgroundImage: `url(${this.previewImage})` } })), index.h("div", { class: "enquire-card__info" }, index.h("div", { class: "mb-8" }, index.h("div", { class: "enquire-card__info__enquire" }, "Enquire About"), index.h("div", { class: "enquire-card__info__title" }, this.postTitle)), index.h("div", null, "Find out more information regarding purchasing, dimensions or lead times.")), index.h("div", { class: "text-xl enquire-card__button" }, index.h("simple-button", null, "Enquire"))));
  }
  componentWillLoad() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentDidLoad() {
    window.dispatchEvent(new Event('scroll'));
  }
  disconnectedCallback() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  // Calculate the position on the screen.
  getContentPageOffset() {
    // NOTE: This is a bit fucky, but works for me for now.
    // Get the child of the element so we can have borders between each grid section.
    const computedStyle = window.getComputedStyle(this.contentElement.querySelector('div'));
    const paddingOffset = parseFloat(computedStyle.paddingTop.replace('px', ''));
    const relativeOffset = this.el.getBoundingClientRect().top;
    const windowOffset = relativeOffset - paddingOffset;
    return windowOffset;
  }
  handleScroll() {
    // Move the modal to the correct position on the page.
    const offset = this.getContentPageOffset();
    this.contentElement.style.top = offset + 'px';
    // Hide if the content is not visible on the page.
    if (this.isModalOpen &&
      (offset < -this.contentElement.clientHeight ||
        offset + this.contentElement.clientHeight > window.innerHeight + this.contentElement.clientHeight)) {
      this.isModalOpen = false;
    }
  }
  // Handle the enquire opening click.
  handleEnquireClick() {
    this.isModalOpen = !this.isModalOpen;
    if (this.isModalOpen) {
      const top = this.getContentPageOffset();
      // Move the content into view.
      if (top <= 5) {
        window.scrollBy({ behavior: 'smooth', top: top - 64, left: 0 });
      }
      else if (top + this.contentElement.clientHeight >= window.innerHeight + 5) {
        window.scrollBy({ behavior: 'smooth', top: top - this.contentElement.clientHeight + 64, left: 0 });
      }
    }
  }
  // Handle when the form data changes.
  handleFormChange(event) {
    this.formState = Object.assign(Object.assign({}, this.formState), { [event.target.name]: event.target.value });
  }
  handleFormSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    let body = `Hello,%0D%0A%0D%0A`;
    body += `My name is ${this.formState.firstName} ${this.formState.lastName}, and I would like additional information regarding ${this.postTitle}.%0D%0A%0D%0A`;
    body += `I am currently located in ${this.formState.location}.%0D%0A%0D%0A`;
    body += `${this.formState.moreText.replace('\n', '%0D%0A')}`;
    const email = document.createElement('a');
    email.href = `mailto:sales@leibal.com?subject=Enquiry about ${this.postTitle}&body=${body}`;
    email.click();
    return false;
  }
  clampBodyScroll(isModalOpen, oldIsModalOpen) {
    if (isModalOpen === oldIsModalOpen)
      return;
    // TODO: How to handle this?
    // Let's keep it simple for now.
    // if (isModalOpen === true) {
    //   document.body.style.overflow = 'hidden';
    // } else {
    //   document.body.style.overflow = 'inherit';
    // }
  }
  render() {
    return (index.h(index.Host, null, this.renderEnquireCard(), index.h("tele-portal", null, index.h("div", { class: this.isModalOpen ? 'enquire-modal__modal enquire-modal__modal--visible' : 'enquire-modal__modal', onClick: () => {
        this.isModalOpen = false;
      } }, index.h("form", { class: "enquire-modal__modal__content", onClick: e => e.stopImmediatePropagation(), ref: el => (this.contentElement = el), onInput: this.handleFormChange.bind(this), onSubmit: this.handleFormSubmit.bind(this) }, this.renderEnquireCard(), index.h("div", { class: "enquire-modal__modal__form" }, index.h("div", null, index.h("simple-input", { type: "text", name: "firstName", placeholder: "First Name", required: true }), index.h("simple-input", { type: "text", name: "lastName", placeholder: "Last Name", required: true }), index.h("simple-input", { type: "text", name: "email", placeholder: "Email Address", required: true }), index.h("simple-input", { type: "text", name: "location", placeholder: "Location", required: true }), index.h("div", { class: "enquire-modal__modal__form__message" }, index.h("div", { class: "enquire-modal__modal__form__message__title" }, "Message"), index.h("div", { class: "enquire-modal__modal__form__message__body" }, index.h("p", null, "Hello,"), index.h("p", null, "My name is ", index.h("u", null, this.formState.firstName || '...'), " ", index.h("u", null, this.formState.lastName || '...'), ", and I would like additional information regarding ", index.h("u", null, this.postTitle), "."), index.h("p", null, "I am currently located in ", index.h("u", null, this.formState.location || '...'), "."), index.h("div", { class: "grow-wrap" }, index.h("textarea", { class: "enquire-modal__modal__form__message__more-text", placeholder: "Type to add more to your request.", name: "moreText", onInput: function () {
        this.parentNode.dataset.replicatedValue = this.value;
      } })))))), index.h("div", { class: "enquire-modal__modal__submit" }, index.h("div", { class: "enquire-modal__modal__submit__disclaimer" }, "By sending this message your agree to our\u00A0", index.h("a", { href: "#" }, "Terms and Conditions"), ". For more information regarding how your data is processed, please view of ", index.h("a", { href: "#" }, "Privacy Policy"), "."), index.h("div", null, index.h("simple-button", { theme: "dark", onClick: (event) => {
        const submitButton = event.target.nextSibling;
        submitButton.click();
      } }, "Send"), index.h("button", { type: "submit", style: { display: 'none' } }))), index.h("div", { class: "enquire-modal__modal__close", onClick: () => {
        this.isModalOpen = false;
      } }, index.h("img", { src: index.getAssetPath('./assets/close-icon.png') })))))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "isModalOpen": ["clampBodyScroll"]
  }; }
};
EnquireModal.style = enquireModalCss;

exports.add_to_moods_button = AddToMoodsButton;
exports.display_card = DisplayCard;
exports.enquire_modal = EnquireModal;
