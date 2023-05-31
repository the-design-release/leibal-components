import { r as registerInstance, c as createEvent, h, g as getAssetPath, H as Host, a as getElement, F as Fragment } from './index-3f06ee34.js';
import { S as STORE_URL, B as BLOG_URL } from './platform-1d25d27e.js';
import { S as Swiper, N as Navigation, P as Pagination, K as Keyboard, z as zeroPad } from './index-219c5654.js';

const addToMoodsButtonCss = ":host{display:block}.add-to-moods-button{align-items:center;cursor:pointer;display:flex;transition:opacity .2s ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.add-to-moods-button--show-on-hover{opacity:0}.add-to-moods-button--show-on-hover .add-to-moods-button__content-left,.add-to-moods-button--show-on-hover .add-to-moods-button__content-right{opacity:0;transition:opacity .2s ease-in-out}.add-to-moods-button--show-on-hover .add-to-moods-button__content-left--hover,.add-to-moods-button--show-on-hover .add-to-moods-button__content-right--hover,.add-to-moods-button--show-on-hover--hover{opacity:1;transition:opacity .2s ease-in-out}.add-to-moods-button img{margin-top:-.1rem;width:1.5rem}";

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

const displayCardCss = "/*! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}button{text-transform:none}[type=button],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h1,p{margin:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}img{display:block;height:auto;max-width:100%;vertical-align:middle}[hidden]{display:none}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.visible{visibility:visible}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.z-10{z-index:10}.col-span-4{grid-column:span 4/span 4}.col-span-3{grid-column:span 3/span 3}.col-span-8{grid-column:span 8/span 8}.mb-8{margin-bottom:2rem}.block{display:block}.flex{display:flex}.grid{display:grid}.contents{display:contents}.hidden{display:none}.w-full{width:100%}.cursor-pointer{cursor:pointer}.resize{resize:both}.flex-col{flex-direction:column}.border-l{border-left-width:1px}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity))}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.blur{--tw-blur:blur(8px)}.blur,.invert{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.invert{--tw-invert:invert(100%)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:host{margin-bottom:3rem}@media (min-width:1024px){:host{margin-bottom:5rem}}:host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.display-card{cursor:pointer;letter-spacing:.1em}.display-card__image{aspect-ratio:auto 1/1;overflow:hidden;position:relative;width:100%}.display-card__image>*{background-position:50%;background-size:cover;height:100%;opacity:0;position:absolute;transition:opacity .3s ease-in-out;width:100%;z-index:1}.display-card__image>:first-child{opacity:1}.display-card__image:hover>:nth-child(2){opacity:1;z-index:2}.display-card__top{margin-bottom:1.25rem;margin-top:1.25rem}.display-card__top__title{font-size:9px;font-weight:400;margin-bottom:.25rem;text-transform:uppercase}.display-card__top__subtitle{font-size:9px;font-weight:300;text-transform:uppercase}.display-card__bottom__title{font-size:13px;font-weight:400;margin-bottom:.25rem}.display-card__bottom__subtitle{font-size:9px;font-weight:300}.display-card--featured{cursor:pointer;display:block;letter-spacing:.1em}@media (min-width:768px){.display-card--featured{display:grid;gap:2rem;grid-template-columns:repeat(6,minmax(0,1fr))}}.display-card--featured__right{display:flex;flex-direction:column;grid-column:span 2/span 2;justify-content:space-between}.display-card--featured__top{margin-bottom:1.75rem;margin-top:1.5rem}@media (min-width:768px){.display-card--featured__top{margin-bottom:0;margin-top:0}}.display-card--featured__top__title{font-size:1.875rem;font-weight:400;line-height:2.25rem;margin-bottom:1rem;padding-right:1rem}.display-card--featured__top__subtitle{font-size:1rem;font-weight:300;line-height:1.5rem}.display-card--featured__bottom__title{font-size:9px;font-weight:400;margin-bottom:.75rem;text-transform:uppercase}.display-card--featured__bottom__title__name{font-size:9px;font-weight:300;margin-bottom:.25rem;text-transform:uppercase}.display-card--featured__bottom__subtitle{font-size:9px;font-weight:400;text-transform:uppercase}.display-card--featured__bottom__subtitle__name{font-size:9px;font-weight:300;margin-bottom:.25rem;text-transform:uppercase}@media (min-width:1024px){.lg\\:block{display:block}}@media (min-width:1280px){.xl\\:mb-0{margin-bottom:0}.xl\\:grid{display:grid}.xl\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.xl\\:gap-8{gap:2rem}}";

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
    return (h(Host, null, this.cardType === 'normal' ? (h("a", { href: this.linkTo, class: "display-card" }, h("div", { class: "display-card__image" }, h("div", { style: { backgroundImage: `url(${this._images[0]})` } }), h("div", { style: { backgroundImage: `url(${this._images[1]})` } })), h("div", { class: "display-card__top" }, h("div", { class: "display-card__top__title" }, h("slot", { name: "top-title" })), h("div", { class: "display-card__top__subtitle" }, h("slot", { name: "top-subtitle" }))), h("div", { class: "display-card__bottom" }, h("div", { class: "display-card__bottom__title" }, h("slot", { name: "bottom-title" })), h("div", { class: "display-card__bottom__subtitle" }, h("slot", { name: "bottom-subtitle" }))))) : (h("a", { href: this.linkTo, class: "display-card--featured" }, h("div", { class: "col-span-4 display-card__image" }, h("div", { style: { backgroundImage: `url(${this._images[0]})` } }), h("div", { style: { backgroundImage: `url(${this._images[1]})` } })), h("div", { class: "display-card--featured__right" }, h("div", { class: "display-card--featured__top" }, h("div", { class: "display-card--featured__top__title" }, h("slot", { name: "top-title" })), h("div", { class: "display-card--featured__top__subtitle" }, h("slot", { name: "top-subtitle" }))), h("div", { class: "display-card--featured__bottom" }, h("div", { class: "display-card--featured__bottom__title" }, h("div", { class: "display-card--featured__bottom__title__name" }, this.bottomTitleName), h("slot", { name: "bottom-title" })), h("div", { class: "display-card--featured__bottom__subtitle" }, h("div", { class: "display-card--featured__bottom__subtitle__name" }, this.bottomSubtitleName), h("slot", { name: "bottom-subtitle" }))))))));
  }
  static get watchers() { return {
    "images": ["watchImages"]
  }; }
};
DisplayCard.style = displayCardCss;

const enquireModalCss = ".enquire-card{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;cursor:pointer;display:block;display:grid;font-family:var(--font-family);gap:2rem;grid-column:1/4;grid-template-columns:repeat(12,minmax(0,1fr))}.enquire-card__preview-image{grid-column:span 6/span 6}@media (min-width:1024px){.enquire-card__preview-image{grid-column:span 8/span 8}}.enquire-card__preview-image{aspect-ratio:auto 1/1;overflow:hidden;position:relative;width:100%}.enquire-card__preview-image>*{background-position:50%;background-size:cover;height:100%;opacity:0;position:absolute;transition:opacity .3s ease-in-out;width:100%}.enquire-card__preview-image:hover>:nth-child(2),.enquire-card__preview-image>:first-child{opacity:1}.enquire-card__info{display:flex;flex-direction:column;font-size:9px;font-weight:300;grid-column:span 6/span 6;justify-content:space-between}@media (min-width:1024px){.enquire-card__info{grid-column:span 4/span 4}}.enquire-card__info__enquire{margin-bottom:.25rem;text-transform:uppercase}.enquire-card__info__title{font-weight:400;text-transform:uppercase}.enquire-card__button{grid-column:span 12/span 12}@media (min-width:1024px){.enquire-card__button{grid-column:span 8/span 8}}.enquire-modal__modal{background:rgba(0,0,0,.5);bottom:0;left:0;opacity:0;position:fixed;right:0;top:0;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;visibility:hidden;z-index:1000}.enquire-modal__modal--visible{opacity:1;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;visibility:visible}.enquire-modal__modal__content{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));padding-left:2rem;padding-right:2rem;position:relative}@media (min-width:1024px){.enquire-modal__modal__content{display:grid;gap:2rem;grid-template-columns:repeat(10,minmax(0,1fr));padding-left:4rem;padding-right:4rem}}.enquire-modal__modal__content>div{padding-bottom:2rem;padding-top:2rem}@media (min-width:1024px){.enquire-modal__modal__content>div{padding-bottom:3rem;padding-top:3rem}}.enquire-modal__modal__content>div:first-child{display:none}@media (min-width:1024px){.enquire-modal__modal__content>div:first-child{display:grid}}.enquire-modal__modal__content>div:last-child{padding:0}.enquire-modal__modal__form{border:none;grid-column:span 5/span 5}@media (min-width:1024px){.enquire-modal__modal__form{border:1px solid #eaeaea;border-bottom:none;border-top:none;padding-left:2rem;padding-right:2rem}}.enquire-modal__modal__form>div{display:block}@media (min-width:1024px){.enquire-modal__modal__form>div{display:grid;gap:2rem;grid-template-columns:repeat(2,minmax(0,1fr))}}.enquire-modal__modal__form>div>*{margin-bottom:2rem}@media (min-width:1024px){.enquire-modal__modal__form>div>*{margin-bottom:0}}.enquire-modal__modal__form__message{grid-column:span 2/span 2;grid-row:span 2/span 2}.enquire-modal__modal__form__message__title{font-size:13px;font-weight:300;margin-bottom:1rem}.enquire-modal__modal__form__message__body{border:1px solid #eaeaea;font-size:13px;font-weight:300;letter-spacing:.05em;line-height:1.5rem;max-height:185px;overflow-y:auto;padding:1rem}.enquire-modal__modal__form__message__body p{margin-bottom:1rem;margin-top:1rem}.enquire-modal__modal__form__message__body p:first-child{margin-top:0}.enquire-modal__modal__form__message__body p:last-child{margin-bottom:0}.enquire-modal__modal__submit{display:block;grid-column:span 2/span 2}@media (min-width:1024px){.enquire-modal__modal__submit{display:flex;flex-direction:column;justify-content:space-between}}.enquire-modal__modal__submit__disclaimer{font-size:9px;letter-spacing:.1em;margin-bottom:2rem}.enquire-modal__modal__submit__disclaimer a{color:#000}.enquire-modal__modal__close{cursor:pointer;font-size:1.25rem;font-weight:300;line-height:1.75rem;line-height:1;position:absolute;right:.75rem;top:.75rem}.enquire-modal__modal__close img{width:1rem}.grow-wrap{display:grid}.grow-wrap:after{content:attr(data-replicated-value) \" \";visibility:hidden;white-space:pre-wrap}.grow-wrap>textarea{overflow:hidden;resize:none}.grow-wrap:after,.grow-wrap>textarea{border:none;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:12px;font-weight:300;grid-area:1/1/2/2;letter-spacing:1px;margin-left:-1px;outline:none;width:100%}";

let EnquireModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isModalOpen = false;
    this.formState = {
      firstName: '',
      lastName: '',
      email: '',
      location: '',
      moreText: '',
    };
    this.renderEnquireCard = () => (h("div", { class: "col-span-3 w-full cursor-pointer enquire-card", onClick: this.handleEnquireClick.bind(this) }, h("div", { class: "enquire-card__preview-image" }, h("div", { style: { backgroundImage: `url(${this.previewImage})` } })), h("div", { class: "enquire-card__info" }, h("div", { class: "mb-8" }, h("div", { class: "enquire-card__info__enquire" }, "Enquire About"), h("div", { class: "enquire-card__info__title" }, this.postTitle)), h("div", null, "Find out more information regarding purchasing, dimensions or lead times.")), h("div", { class: "text-xl enquire-card__button" }, h("simple-button", null, "Enquire"))));
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
    email.href = `mailto:info@leibal.com?subject=Enquiry about ${this.postTitle}&body=${body}`;
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
    return (h(Host, null, this.renderEnquireCard(), h("tele-portal", null, h("div", { class: this.isModalOpen ? 'enquire-modal__modal enquire-modal__modal--visible' : 'enquire-modal__modal', onClick: () => {
        this.isModalOpen = false;
      } }, h("form", { class: "enquire-modal__modal__content", onClick: e => e.stopImmediatePropagation(), ref: el => (this.contentElement = el), onInput: this.handleFormChange.bind(this), onSubmit: this.handleFormSubmit.bind(this) }, this.renderEnquireCard(), h("div", { class: "enquire-modal__modal__form" }, h("div", null, h("simple-input", { type: "text", name: "firstName", placeholder: "First Name", required: true }), h("simple-input", { type: "text", name: "lastName", placeholder: "Last Name", required: true }), h("simple-input", { type: "text", name: "email", placeholder: "Email Address", required: true }), h("simple-input", { type: "text", name: "location", placeholder: "Location", required: true }), h("div", { class: "enquire-modal__modal__form__message" }, h("div", { class: "enquire-modal__modal__form__message__title" }, "Message"), h("div", { class: "enquire-modal__modal__form__message__body" }, h("p", null, "Hello,"), h("p", null, "My name is ", h("u", null, this.formState.firstName || '...'), " ", h("u", null, this.formState.lastName || '...'), ", and I would like additional information regarding ", h("u", null, this.postTitle), "."), h("p", null, "I am currently located in ", h("u", null, this.formState.location || '...'), "."), h("div", { class: "grow-wrap" }, h("textarea", { class: "enquire-modal__modal__form__message__more-text", placeholder: "Type to add more to your request.", name: "moreText", onInput: function () {
        this.parentNode.dataset.replicatedValue = this.value;
      } })))))), h("div", { class: "enquire-modal__modal__submit" }, h("div", { class: "enquire-modal__modal__submit__disclaimer" }, "By sending this message your agree to our\u00A0", h("a", { href: "#" }, "Terms and Conditions"), ". For more information regarding how your data is processed, please view of ", h("a", { href: "#" }, "Privacy Policy"), "."), h("div", null, h("simple-button", { theme: "dark", onClick: (event) => {
        const submitButton = event.target.nextSibling;
        submitButton.click();
      } }, "Send"), h("button", { type: "submit", style: { display: 'none' } }))), h("div", { class: "enquire-modal__modal__close", onClick: () => {
        this.isModalOpen = false;
      } }, h("img", { src: getAssetPath('./assets/close-icon.png') })))))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return getElement(this); }
  static get watchers() { return {
    "isModalOpen": ["clampBodyScroll"]
  }; }
};
EnquireModal.style = enquireModalCss;

const footerNavCss = ":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.footer-nav{display:grid;gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:4rem;margin-top:4rem}@media (min-width:1024px){.footer-nav{display:grid;gap:2rem;grid-template-columns:repeat(10,minmax(0,1fr));margin-bottom:6rem;margin-top:6rem}}.footer-nav__column{display:flex;flex-direction:column;margin-bottom:3rem}@media (min-width:1024px){.footer-nav__column{grid-column:span 2/span 2;margin-bottom:0}}.footer-nav__column:last-child{grid-column:span 2/span 2;justify-content:space-between}.footer-nav__title{font-size:1rem;font-weight:400;letter-spacing:.1em;line-height:1.5rem;margin-bottom:3rem}.footer-nav__link{color:var(--color-dark);display:block;font-size:13px;margin-bottom:.75rem;text-decoration:none;text-underline-offset:2px}.footer-nav__link:hover{text-decoration:underline}.footer-nav__link:last-child{margin-bottom:0}.footer-nav__email-form{flex-grow:1}.footer-nav__email-form form{border-bottom:1px solid var(--color-dark);display:flex;font-size:13px;padding-bottom:.5rem}.footer-nav__email-form input[type=email]{all:unset;display:block;flex-grow:1;width:100%}.footer-nav__email-form input[type=submit]{all:unset;display:block}.footer-nav__trademark{font-size:9px;font-weight:300;text-transform:uppercase}";

let FooterNav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.platform = 'blog';
  }
  platformSpecificLink(platform, path) {
    const platformUrl = platform === 'store' ? STORE_URL : BLOG_URL;
    if (this.platform === platform) {
      return path;
    }
    else {
      return new URL(path, platformUrl).toString();
    }
  }
  render() {
    const storeNewsletterForm = (h("form", { action: "https://leibal.us4.list-manage.com/subscribe/post?u=9891199121e89a545e0ba572a&id=55fd30c180&f_id=005bb1ebf0", method: "post", target: "_self" }, h("input", { type: "email", value: "", name: "EMAIL", class: "required email", id: "mce-EMAIL", required: true }), h("div", { style: { position: 'absolute', left: '-5000px' }, "aria-hidden": "true" }, h("input", { placeholder: "Enter Email", type: "text", name: "b_9891199121e89a545e0ba572a_3a78fd6a2d", tabindex: "-1", value: "" })), h("input", { type: "submit", value: "Send", name: "subscribe", id: "mc-embedded-subscribe", class: "button" })));
    const blogNewsletterForm = (h("form", { action: "https://leibal.us4.list-manage.com/subscribe/post?u=9891199121e89a545e0ba572a&id=3a78fd6a2d&f_id=0057b1ebf0", method: "post", target: "_self" }, h("input", { type: "email", value: "", name: "EMAIL", class: "required email", id: "mce-EMAIL", required: true }), h("div", { style: { position: 'absolute', left: '-5000px' }, "aria-hidden": "true" }, h("input", { placeholder: "Enter Email", type: "text", name: "b_9891199121e89a545e0ba572a_3a78fd6a2d", tabindex: "-1", value: "" })), h("input", { type: "submit", value: "Send", name: "subscribe", id: "mc-embedded-subscribe", class: "button" })));
    return (h(Host, null, h("div", { class: "footer-nav" }, h("div", { class: "footer-nav__column" }, h("div", { class: "footer-nav__title" }, "Stories"), h("div", { class: "footer-nav__links" }, h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/architecture') }, "Architecture"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/interiors') }, "Interiors"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/furniture') }, "Furniture"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/lighting') }, "Lighting"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/products') }, "Products"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/travel') }, "Travel"))), h("div", { class: "footer-nav__column" }, h("div", { class: "footer-nav__title" }, "Store"), h("div", { class: "footer-nav__links" }, h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collection/seating') }, "Seating"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collection/tables') }, "Tables"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collection/lighting') }, "Lighting"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collection/storage') }, "Storage"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collection/outdoor') }, "Outdoor"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collection/accessories') }, "Accessories"))), h("div", { class: "footer-nav__column" }, h("div", { class: "footer-nav__title" }, "About"), h("div", { class: "footer-nav__links" }, h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/contact-us') }, "Contact Us"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/submissions') }, "Submit"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/faq') }, "FAQ"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/privacy') }, "Privacy"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/toc') }, "Terms & Conditions"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/trades') }, "Trade Program"))), h("div", { class: "footer-nav__column" }, h("div", { class: "footer-nav__title" }, "Connect"), h("div", { class: "footer-nav__links" }, h("a", { class: "footer-nav__link", href: "https://www.pinterest.com/leibal/" }, "Pinterest"), h("a", { class: "footer-nav__link", href: "https://instagram.com/leibal" }, "Instagram"), h("a", { class: "footer-nav__link", href: "http://www.facebook.com/Leibal" }, "Facebook"), h("a", { class: "footer-nav__link", href: "https://leibal.tumblr.com/" }, "Tumblr"), h("a", { class: "footer-nav__link", href: "https://www.linkedin.com/company/leibal/" }, "LinkedIn"), h("a", { class: "footer-nav__link", href: "https://www.tiktok.com/leibal" }, "TikTok"))), h("div", { class: "footer-nav__column" }, h("div", { class: "footer-nav__title" }, "Newsletter"), h("div", { class: "footer-nav__email-form" }, this.platform === 'blog' ? blogNewsletterForm : storeNewsletterForm), h("div", { class: "footer-nav__trademark" }, "\u00A9 ", new Date().getUTCFullYear(), " LEIBAL LLC. ALL RIGHTS RESERVED")))));
  }
};
FooterNav.style = footerNavCss;

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire();
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var numberToWords_min = createCommonjsModule(function (module, exports) {
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

const imageGalleryCss = "@font-face{font-family:swiper-icons;font-style:normal;font-weight:400;src:url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\")}:root{--swiper-theme-color:#007aff}.swiper{list-style:none;margin-left:auto;margin-right:auto;overflow:hidden;padding:0}.swiper,.swiper-wrapper{position:relative;z-index:1}.swiper-wrapper{box-sizing:content-box;display:flex;transform:translateZ(0)}.swiper-slide,.swiper-wrapper{height:100%;transition-property:transform;width:100%}.swiper-slide{flex-shrink:0;position:relative}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{align-items:center;color:var(--swiper-navigation-color,var(--swiper-theme-color));cursor:pointer;display:flex;height:var(--swiper-navigation-size);justify-content:center;margin-top:calc(0px - var(--swiper-navigation-size)/2);position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/44*27);z-index:10}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);font-variant:normal;letter-spacing:0;line-height:1;text-transform:none!important}.swiper-button-prev{left:10px;right:auto}.swiper-button-prev:after{content:\"prev\"}.swiper-button-next{left:auto;right:10px}.swiper-button-next:after{content:\"next\"}.swiper-pagination{position:absolute;text-align:center;transform:translateZ(0);transition:opacity .3s;z-index:10}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.image-gallery{bottom:0;display:flex;flex-direction:column;left:0;position:fixed;right:0;top:0;z-index:800}@media (min-width:1024px){.image-gallery{display:grid;gap:2rem;grid-template-columns:repeat(10,minmax(0,1fr));padding-left:4rem;padding-right:4rem}}.image-gallery{background:#fff;opacity:0;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;visibility:hidden}.image-gallery--visible{opacity:1;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;visibility:visible}.image-gallery__info{cursor:default;display:block;font-size:9px;grid-column:span 3/span 3;padding:2rem 2rem 2.75rem;z-index:20}@media (min-width:1024px){.image-gallery__info{display:flex;flex-direction:column;justify-content:space-between;padding-left:0;padding-right:0;padding-top:3rem}}.image-gallery__info{background:#fff}.image-gallery__info__title{font-size:1.5rem;font-weight:300;line-height:1.375;margin-bottom:.75rem;margin-right:.75rem;width:60%}@media (min-width:1024px){.image-gallery__info__title{font-size:2.5rem;margin-right:4rem}}.image-gallery__info__subtitle{font-size:1rem;font-weight:300;margin-bottom:2.5rem}@media (min-width:1024px){.image-gallery__info__subtitle{font-size:1.25rem;line-height:1.75rem}}.image-gallery__info__photographer__label{font-weight:300;margin-bottom:.25rem;text-transform:uppercase}.image-gallery__info__photographer__title{font-weight:700;margin-bottom:.75rem;text-transform:uppercase}.image-gallery__images{background:#f5f5f5;display:block;flex-grow:1;grid-column:span 7/span 7;position:relative;width:100%;z-index:10}@media (min-width:1024px){.image-gallery__images{width:calc(100% + 4rem)}}.image-gallery__images__swiper{bottom:0;left:0;position:absolute;right:0;top:0}.image-gallery__images__close{background:#f5f5f5;border-radius:5px;cursor:pointer;font-size:9px;margin:.5rem;padding:.5rem;position:absolute;right:0;-webkit-text-decoration-line:underline;text-decoration-line:underline;text-transform:uppercase;text-underline-offset:2px;top:0;z-index:10}.image-gallery .swiper{height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.image-gallery .swiper-slide{align-items:center;background:#f5f5f5;display:flex;justify-content:center;text-align:center;width:100%}.image-gallery .swiper-slide img{max-height:100%;max-width:100%;-o-object-fit:cover;object-fit:cover}.image-gallery .swiper-button-next,.image-gallery .swiper-button-prev{color:#000}.image-gallery .swiper-button-next:after,.image-gallery .swiper-button-prev:after{align-items:center;display:flex;font-size:1rem;height:100vh;justify-content:center;padding:0 6rem}.image-gallery .swiper-button-prev{cursor:w-resize}.image-gallery .swiper-button-next{cursor:e-resize}.image-gallery .swiper-pagination{display:inline-block;font-size:.75rem;left:inherit;position:absolute;right:0;top:0;width:inherit;z-index:100}";

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
let ImageGallery = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("tele-portal", null, h("div", { class: this.isModalOpen ? 'image-gallery image-gallery--visible' : 'image-gallery' }, h("div", { class: "image-gallery__info" }, h("div", { onClick: () => {
        this.isModalOpen = false;
      }, style: { position: 'relative' } }, h("div", { class: "image-gallery__info__title" }, this.postTitle), h("div", { class: "image-gallery__info__subtitle" }, "by ", this.postExcerpt), h("div", { class: "image-gallery__info__photographer__label" }, "Photography"), h("div", { class: "image-gallery__info__photographer__title" }, this.photographer), h("div", { class: "swiper-pagination" })), h("div", null, h("add-to-moods-button", { theme: 'dark', "image-url": this._images[this.currentImageIndex].href, "post-id": this.postId, "content-location": 'right', style: { marginTop: '2.5rem' } }, h("span", { style: { marginLeft: '1rem', fontSize: '0.75rem' } }, "Save Image to MOODS"))), h("div", null, this.canEnquire && (h("enquire-modal", { postTitle: this.postTitle + ' by ' + this.postExcerpt, previewImage: this.previewImage })), !this.canEnquire && designDetail && (h("div", { class: "hidden lg:block" }, h("div", { class: "image-gallery__info__subtitle" }, "Design Details"), h("div", { class: "block xl:grid xl:grid-cols-12 xl:gap-8" }, h("display-card", { images: JSON.stringify([designDetail.image.url]), style: { marginBottom: '0' }, class: "col-span-8" }, h("div", { slot: "top-title" }, designDetail.designer || 'Unknown'), h("div", { slot: "top-subtitle" }, designDetail.category || 'N/A'), h("div", { slot: "bottom-title" }, designDetail.name || ''), h("div", { slot: "bottom-subtitle" }, designDetail.price || '')), h("div", { class: "flex flex-col col-span-4 mb-8 text-2xs xl:mb-0" }, h("div", null, h("span", null, "As seen in image "), asSeenIns.map((image, i) => {
      const index = parseFloat(image.value.index);
      if (i === asSeenIns.length - 1 && asSeenIns.length > 0) {
        return (h(Fragment, null, h("span", null, "and "), h("span", { class: "underline cursor-pointer", onClick: () => this.swiper.slideTo(index + 1) }, numberToWords_min.toWords(index + 1)), "."));
      }
      return (h(Fragment, null, h("span", { class: "underline cursor-pointer", onClick: () => this.swiper.slideTo(index + 1) }, numberToWords_min.toWords(index + 1)), ', '));
    })))))))), h("div", { class: "image-gallery__images" }, h("div", { class: "swiper image-gallery__images__swiper" }, h("div", { class: "swiper-wrapper" }, this._images.map(image => (h("div", { class: "swiper-slide" }, h("img", { src: image.href }))))), h("div", { class: "swiper-button-next" }), h("div", { class: "swiper-button-prev" })), h("div", { class: "image-gallery__images__close", onClick: () => {
        this.isModalOpen = false;
      } }, "Close"))))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "isModalOpen": ["clampBodyScroll"]
  }; }
};
ImageGallery.style = imageGalleryCss;

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

const mobileNavBarCss = ":host{display:block}.mobile-nav-bar{font-weight:300;left:0;position:fixed;right:0;top:0;z-index:100}.mobile-nav-bar__icons{align-items:center;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-bottom-color:rgb(209 213 219/var(--tw-border-opacity));border-bottom-style:solid;border-bottom-width:1px;display:flex;height:50px;justify-content:space-between;position:absolute;width:100%;z-index:50}.mobile-nav-bar__icons,.mobile-nav-bar__icons--open{--tw-border-opacity:1;--tw-bg-opacity:1;transition-duration:.3s;transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mobile-nav-bar__icons--open{--tw-text-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));border-bottom-color:rgb(255 255 255/var(--tw-border-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.mobile-nav-bar__icons--open .mobile-nav-bar__icon{filter:invert(1)}.mobile-nav-bar__icon{cursor:pointer;display:block;padding:1rem;width:1rem}.mobile-nav-bar__menu{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));box-sizing:border-box;color:rgb(255 255 255/var(--tw-text-opacity));display:flex;flex-direction:column;height:100vh;justify-content:space-around;opacity:0;padding:calc(50px + 3.5rem) 1rem 3.5rem;position:absolute;transition:visibility 0s,opacity .3s cubic-bezier(.4,0,.2,1);visibility:hidden;width:100%;z-index:40}.mobile-nav-bar__menu--open{opacity:1;visibility:visible}.mobile-nav-bar__logo{display:block;filter:invert(1);margin-bottom:2rem;width:100px}.mobile-nav-bar__menu-items{margin-bottom:3rem}.mobile-nav-bar__menu-links-container{height:100%;opacity:0;position:absolute;transition:visibility 0s,opacity .3s cubic-bezier(.4,0,.2,1);visibility:hidden;width:100%}.mobile-nav-bar__menu-links-container--open{opacity:1;transition:visibility .3s 0,opacity .3s cubic-bezier(.4,0,.2,1);visibility:visible}.mobile-nav-bar__menu-links{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));bottom:0;display:flex;flex-direction:column;left:0;position:absolute;right:0;top:0;z-index:60}.mobile-nav-bar__menu-links a{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity));font-size:13px;font-weight:300;margin-bottom:.5rem;-webkit-text-decoration-line:none;text-decoration-line:none}.mobile-nav-bar__menu-links a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline;text-underline-offset:2px}.mobile-nav-bar__menu-item{font-size:1.125rem;font-weight:400;line-height:1.75rem;margin-bottom:.75rem}.mobile-nav-bar__submenu-items{margin-bottom:3rem}.mobile-nav-bar__submenu-item{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity));display:block;font-size:13px;margin-bottom:.25rem;-webkit-text-decoration-line:none;text-decoration-line:none}.mobile-nav-bar__newsletter{margin-bottom:2rem}.mobile-nav-bar__newsletter__header{font-size:1.125rem;font-weight:400;line-height:1.75rem;margin-bottom:.75rem}.mobile-nav-bar__newsletter__input{border-bottom:1px solid #fff;display:flex;justify-content:space-between;padding-bottom:.5rem;padding-top:.5rem}.mobile-nav-bar__newsletter__input input{all:unset;flex-grow:1;font-size:13px}.mobile-nav-bar__newsletter__input button{all:unset;cursor:pointer;font-size:13px;padding-left:1rem}.mobile-nav-bar__links{display:grid;gap:1.5rem;grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:2rem}.mobile-nav-bar__link-header{font-size:1rem;font-weight:400;line-height:1.5rem;margin-bottom:.75rem}.mobile-nav-bar__link-item{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity));display:block;font-size:12px;-webkit-text-decoration-line:none;text-decoration-line:none}";

let MobileNavBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isOpen = false;
    this.platform = 'blog';
    this.isShowingLinks = false;
    this.linksType = 'blog';
  }
  showLinks(platform) {
    this.isShowingLinks = true;
    this.linksType = platform;
  }
  hideLinks() {
    this.isShowingLinks = false;
  }
  platformSpecificLink(platform, path) {
    const platformUrl = platform === 'store' ? STORE_URL : BLOG_URL;
    if (this.platform === platform) {
      return path;
    }
    else {
      return new URL(path, platformUrl).toString();
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "mobile-nav-bar" }, h("div", { class: `mobile-nav-bar__icons ${this.isOpen ? 'mobile-nav-bar__icons--open' : ''}` }, h("div", null, this.isOpen ? (h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/close.png'), alt: "Close Menu", style: { width: '0.88rem', height: '0.88rem' }, onClick: () => (this.isOpen = false) })) : (h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/hamburger.png'), alt: "Open Menu", style: { width: '1.13rem', height: '1.13rem', marginLeft: '-0.13rem' }, onClick: () => (this.isOpen = true) }))), h("div", { style: { display: 'flex' } }, h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/shopping-bag.png'), alt: "Cart", style: { paddingRight: '0.5rem' } }), h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/user.png'), alt: "Account", style: { width: '0.9rem', height: '0.9rem', paddingLeft: '0.5rem' } }))), h("div", { class: `mobile-nav-bar__menu ${this.isOpen ? 'mobile-nav-bar__menu--open' : ''}` }, h("img", { class: "mobile-nav-bar__logo", src: getAssetPath('./assets/leibal-logo.png'), alt: "Logo", onClick: () => {
        window.location.href = this.platformSpecificLink(this.platform, '/');
      } }), h("div", { style: { position: 'relative' } }, h("div", { class: `mobile-nav-bar__menu-links-container ${this.isShowingLinks ? 'mobile-nav-bar__menu-links-container--open' : ''}` }, this.linksType === 'blog' && (h("div", { class: "mobile-nav-bar__menu-links" }, h("div", { onClick: () => this.hideLinks(), style: { display: 'flex', alignItems: 'center', marginBottom: '.5rem' } }, h("img", { src: getAssetPath('./assets/arrow.png'), style: {
        width: '1rem',
        filter: 'invert(1)',
        transform: 'rotate(-180deg)',
        marginRight: '0.5rem',
      } }), ' ', "Stories"), h("div", null, h("div", null, h("a", { href: this.platformSpecificLink('blog', '/category/architecture') }, "Architecture")), h("div", null, h("a", { href: this.platformSpecificLink('blog', '/category/interiors') }, "Interiors")), h("div", null, h("a", { href: this.platformSpecificLink('blog', '/category/furniture') }, "Furniture")), h("div", null, h("a", { href: this.platformSpecificLink('blog', '/category/lighting') }, "Lighting")), h("div", null, h("a", { href: this.platformSpecificLink('blog', '/category/objects') }, "Objects")), h("div", null, h("a", { href: this.platformSpecificLink('blog', '/category/travel') }, "Travel"))))), this.linksType === 'store' && (h("div", { class: "mobile-nav-bar__menu-links" }, h("div", { onClick: () => this.hideLinks(), style: { display: 'flex', alignItems: 'center', marginBottom: '1.5rem' } }, h("img", { src: getAssetPath('./assets/arrow.png'), style: {
        width: '1rem',
        filter: 'invert(1)',
        transform: 'rotate(-180deg)',
        marginRight: '0.5rem',
      } }), ' ', "Store"), h("div", null, h("div", null, h("a", { href: this.platformSpecificLink('store', '/collection/seating') }, "Seating")), h("div", null, h("a", { href: this.platformSpecificLink('store', '/collection/tables') }, "Tables")), h("div", null, h("a", { href: this.platformSpecificLink('store', '/collection/lighting') }, "Lighting")), h("div", null, h("a", { href: this.platformSpecificLink('store', '/collection/storage') }, "Storage")), h("div", null, h("a", { href: this.platformSpecificLink('store', '/collection/outdoor') }, "Outdoor")), h("div", null, h("a", { href: this.platformSpecificLink('store', '/collection/accessories') }, "Accessories")))))), h("div", { class: "mobile-nav-bar__menu-items" }, h("div", { class: "mobile-nav-bar__menu-item", onClick: () => {
        this.showLinks('blog');
      } }, "Stories >"), h("div", { class: "mobile-nav-bar__menu-item", onClick: () => {
        this.showLinks('store');
      } }, "Store >")), h("div", { class: "mobile-nav-bar__submenu-items" }, h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/submissions') }, "Submit"), h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/subscribe') }, "Subscribe"), h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/users') }, "Account"), h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('store', '/cart') }, "Cart"))), h("div", { class: "mobile-nav-bar__links" }, h("div", null, h("div", { class: "mobile-nav-bar__link-header" }, "About"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/contact-us') }, "Contact Us"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/submissions') }, "Submit"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/faq') }, "FAQ"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/privacy') }, "Privacy"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/toc') }, "Terms & Conditions"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/trades') }, "Trade Program")), h("div", null, h("div", { class: "mobile-nav-bar__link-header" }, "Connect"), h("a", { class: "mobile-nav-bar__link-item", href: "https://www.pinterest.com/leibal/" }, "Pinterest"), h("a", { class: "mobile-nav-bar__link-item", href: "https://instagram.com/leibal" }, "Instagram"), h("a", { class: "mobile-nav-bar__link-item", href: "http://www.facebook.com/Leibal" }, "Facebook"), h("a", { class: "mobile-nav-bar__link-item", href: "https://leibal.tumblr.com/" }, "Tumblr"), h("a", { class: "mobile-nav-bar__link-item", href: "https://www.linkedin.com/company/leibal/" }, "LinkedIn"), h("a", { class: "mobile-nav-bar__link-item", href: "https://www.tiktok.com/leibal" }, "TikTok")))))));
  }
  static get assetsDirs() { return ["assets"]; }
};
MobileNavBar.style = mobileNavBarCss;

const simpleButtonCss = ":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.simple-button{align-items:center;background-color:var(--color-light);border:1px solid var(--color-dark);color:var(--color-dark);cursor:pointer;display:flex;justify-content:center;padding:1.5rem 1rem;position:relative;transition-duration:.3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.simple-button--disabled{cursor:not-allowed;opacity:.5}@media (min-width:768px){.simple-button__text{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.simple-button__text{font-size:1.25rem;line-height:1.75rem}}.simple-button__icon{height:1rem;position:absolute;right:1rem;top:1rem;width:1rem}.simple-button--dark,.simple-button:active,.simple-button:hover{background-color:var(--color-dark);color:var(--color-light)}.simple-button--dark{border-color:var(--color-dark)}.simple-button--dark:active,.simple-button--dark:hover{background-color:var(--color-light);color:var(--color-dark)}";

let SimpleButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.theme = 'light';
    this.fillWidth = false;
    this.disabled = false;
  }
  render() {
    return (h(Host, null, h("div", { class: 'simple-button ' +
        (this.fillWidth ? 'simple-button--full-width ' : ' ') +
        (this.theme == 'dark' ? 'simple-button--dark ' : ' ') +
        (this.disabled ? 'simple-button--disabled' : ' '), role: "button", "aria-pressed": "false", tabindex: "0" }, h("div", { class: "simple-button__icon" }, h("slot", { name: "icon" })), h("div", { class: "simple-button__text" }, h("slot", null)))));
  }
};
SimpleButton.style = simpleButtonCss;

const simpleInputCss = ":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;--color-gray:#ddd;display:block;font-family:var(--font-family)}.simple-input,.simple-input--text{display:block}.simple-input--text{border:none;border-bottom:1px solid var(--color-gray);letter-spacing:.05em;outline:none;padding-bottom:1rem;width:100%}.simple-input--text::-moz-placeholder{color:#999;letter-spacing:.05em;opacity:1!important}.simple-input--text:-ms-input-placeholder{color:#999;letter-spacing:.05em;opacity:1!important}.simple-input--text::placeholder{color:#999;letter-spacing:.05em;opacity:1!important}";

const INPUT_TYPES = ['text', 'password', 'email', 'number', 'tel', 'url'];
let SimpleInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChanged = createEvent(this, "valueChanged", 7);
    this.placeholder = 'Text here...';
    this.required = false;
    this.input = () => {
      let placeholder = this.placeholder;
      if (this.required) {
        placeholder += ' *';
      }
      return (h("input", { class: "simple-input--text", name: this.name, onInput: this.onInputChangeValue.bind(this), value: this.value, type: this.type, placeholder: placeholder, required: this.required }));
    };
  }
  onInputChangeValue(event) {
    this.value = event.target.value;
    this.valueChanged.emit(this.value);
  }
  renderInputOutsideShadowRoot(container, name, value) {
    let input = container.querySelector('input.hidden-input');
    if (!input) {
      input = container.ownerDocument.createElement('input');
      input.type = 'hidden';
      input.classList.add('hidden-input');
      container.appendChild(input);
    }
    input.name = name;
    input.value = value || '';
  }
  render() {
    const { el, value, name } = this;
    this.renderInputOutsideShadowRoot(el, name, value);
    return (h(Host, null, h("div", { class: "simple-input" }, INPUT_TYPES.includes(this.type) && this.input())));
  }
  get el() { return getElement(this); }
};
SimpleInput.style = simpleInputCss;

let TelePortal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  createPortal() {
    this.portal = document.createElement('div');
    document.body.prepend(this.portal);
  }
  moveElementToPortal() {
    this.portal.appendChild(this.el);
  }
  componentWillLoad() {
    this.createPortal();
  }
  componentDidLoad() {
    this.moveElementToPortal();
  }
  disconnectCallback() {
    this.portal.remove();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get el() { return getElement(this); }
};

export { AddToMoodsButton as add_to_moods_button, DisplayCard as display_card, EnquireModal as enquire_modal, FooterNav as footer_nav, ImageGallery as image_gallery, ImageGalleryLink as image_gallery_link, MobileNavBar as mobile_nav_bar, SimpleButton as simple_button, SimpleInput as simple_input, TelePortal as tele_portal };
