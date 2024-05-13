import { r as registerInstance, h, g as getAssetPath, H as Host, a as getElement, F as Fragment, c as createEvent } from './index-3f06ee34.js';
import { S as STORE_URL, B as BLOG_URL } from './platform-1d25d27e.js';

const enquireModalCss = ".enquire-card{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;cursor:pointer;display:block;display:grid;font-family:var(--font-family);gap:2rem;grid-column:1/4;grid-template-columns:repeat(12,minmax(0,1fr))}.enquire-card__preview-image{grid-column:span 6/span 6}@media (min-width:1024px){.enquire-card__preview-image{grid-column:span 8/span 8}}.enquire-card__preview-image{aspect-ratio:auto 1/1;overflow:hidden;position:relative;width:100%}.enquire-card__preview-image>*{background-position:50%;background-size:cover;height:100%;opacity:0;position:absolute;transition:opacity .3s ease-in-out;width:100%}.enquire-card__preview-image:hover>:nth-child(2),.enquire-card__preview-image>:first-child{opacity:1}.enquire-card__info{display:flex;flex-direction:column;font-size:.6rem;font-weight:200;grid-column:span 6/span 6;justify-content:space-between}@media (min-width:1024px){.enquire-card__info{grid-column:span 4/span 4}}.enquire-card__info__enquire{margin-bottom:.25rem;text-transform:uppercase}.enquire-card__info__title{font-weight:300;text-transform:uppercase}.enquire-card__button{grid-column:span 12/span 12}@media (min-width:1024px){.enquire-card__button{grid-column:span 8/span 8}}.enquire-modal__modal{background:rgba(0,0,0,.5);bottom:0;left:0;opacity:0;position:fixed;right:0;top:0;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;visibility:hidden;z-index:1000}.enquire-modal__modal--visible{opacity:1;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;visibility:visible}.enquire-modal__modal__content{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));padding-left:2rem;padding-right:2rem;position:relative}@media (min-width:1024px){.enquire-modal__modal__content{display:grid;gap:2rem;grid-template-columns:repeat(10,minmax(0,1fr));padding-left:4rem;padding-right:4rem}}.enquire-modal__modal__content>div{padding-bottom:2rem;padding-top:2rem}@media (min-width:1024px){.enquire-modal__modal__content>div{padding-bottom:3rem;padding-top:3rem}}.enquire-modal__modal__content>div:first-child{display:none}@media (min-width:1024px){.enquire-modal__modal__content>div:first-child{display:grid}}.enquire-modal__modal__content>div:last-child{padding:0}.enquire-modal__modal__form{border:none;grid-column:span 5/span 5}@media (min-width:1024px){.enquire-modal__modal__form{border:1px solid #eaeaea;border-bottom:none;border-top:none;padding-left:2rem;padding-right:2rem}}.enquire-modal__modal__form>div{display:block}@media (min-width:1024px){.enquire-modal__modal__form>div{display:grid;gap:2rem;grid-template-columns:repeat(2,minmax(0,1fr))}}.enquire-modal__modal__form>div>*{margin-bottom:2rem}@media (min-width:1024px){.enquire-modal__modal__form>div>*{margin-bottom:0}}.enquire-modal__modal__form__message{grid-column:span 2/span 2;grid-row:span 2/span 2}.enquire-modal__modal__form__message__title{font-size:.88rem;font-weight:200;margin-bottom:1rem;margin-top:3rem}.enquire-modal__modal__form__message__body{border:1px solid #eaeaea;font-size:.88rem;font-weight:200;letter-spacing:.05em;line-height:1.5rem;max-height:212px;overflow-y:auto;padding:1rem}.enquire-modal__modal__form__message__body p{margin-bottom:1rem;margin-top:1rem}.enquire-modal__modal__form__message__body p:first-child{margin-top:0}.enquire-modal__modal__form__message__body p:last-child{margin-bottom:0}.enquire-modal__modal__submit{display:block;grid-column:span 2/span 2}@media (min-width:1024px){.enquire-modal__modal__submit{display:flex;flex-direction:column;justify-content:space-between}}.enquire-modal__modal__submit__disclaimer{font-size:.6rem;letter-spacing:.1em;margin-bottom:2rem}.enquire-modal__modal__submit__disclaimer a{color:#000}.enquire-modal__modal__close{cursor:pointer;font-size:1.25rem;font-weight:200;line-height:1.75rem;line-height:1;position:absolute;right:.75rem;top:.75rem}.enquire-modal__modal__close img{width:1rem}.grow-wrap{display:grid}.grow-wrap:after{content:attr(data-replicated-value) \" \";visibility:hidden;white-space:pre-wrap}.grow-wrap>textarea{overflow:hidden;resize:none}.grow-wrap:after,.grow-wrap>textarea{border:none;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:12px;font-weight:200;grid-area:1/1/2/2;letter-spacing:1px;margin-left:-1px;outline:none;width:100%}";

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
        if (window.innerWidth < 768) {
          window.scrollBy({ behavior: 'smooth', top: top - 64, left: 0 });
        }
        else {
          window.scrollBy({ behavior: 'smooth', top: top - this.contentElement.clientHeight + 64, left: 0 });
        }
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
    body += `My name is ${this.formState.firstName} ${this.formState.lastName}, and I would like additional information regarding ${this.postTitle} (https://leibal.com${this.postUrl}).%0D%0A%0D%0A`;
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
    return (h(Host, null, this.renderEnquireCard(), h("tele-portal", null, h("div", { class: this.isModalOpen ? 'enquire-modal__modal enquire-modal__modal--visible' : 'enquire-modal__modal', onClick: () => {
        this.isModalOpen = false;
      } }, h("form", { class: "enquire-modal__modal__content", onClick: e => e.stopImmediatePropagation(), ref: el => (this.contentElement = el), onInput: this.handleFormChange.bind(this), onSubmit: this.handleFormSubmit.bind(this) }, this.renderEnquireCard(), h("div", { class: "enquire-modal__modal__form" }, h("div", null, h("simple-input", { type: "text", name: "firstName", placeholder: "First Name", required: true }), h("simple-input", { type: "text", name: "lastName", placeholder: "Last Name", required: true }), h("simple-input", { type: "text", name: "email", placeholder: "Email Address", required: true }), h("simple-input", { type: "text", name: "location", placeholder: "Location", required: true }), h("div", { class: "enquire-modal__modal__form__message" }, h("div", { class: "enquire-modal__modal__form__message__title" }, "Message"), h("div", { class: "enquire-modal__modal__form__message__body" }, h("p", null, "Hello,"), h("p", null, "My name is ", h("u", null, this.formState.firstName || '...'), " ", h("u", null, this.formState.lastName || '...'), ", and I would like additional information regarding ", h("u", null, this.postTitle), " (https://leibal.com", this.postUrl, ")."), h("p", null, "I am currently located in ", h("u", null, this.formState.location || '...'), "."), h("div", { class: "grow-wrap" }, h("textarea", { class: "enquire-modal__modal__form__message__more-text", placeholder: "Type to add more to your request.", name: "moreText", onInput: function () {
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

const navBarV2Css = ":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-white:#fff;--color-light:#f3f3f3;--color-dim:#ddd;--color-dark:#222;display:block;font-family:var(--font-family)}.container{left:0;position:fixed;right:0;top:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:500}.menu{grid-gap:2rem;background:var(--color-white);border-bottom:1px solid #f5f5f5;display:grid;grid-template-columns:repeat(10,1fr);height:4.375rem;padding:0 4rem;position:relative;z-index:500}.moods img{display:inline-block;max-width:4rem}.logo{align-items:center;cursor:pointer;display:flex}.logo img{height:auto;width:100%;width:5.2rem}.master-link{align-items:center;color:#000;display:flex;font-size:.9375rem;font-style:normal;font-weight:200;letter-spacing:.09375rem;line-height:normal}.master-link:hover{cursor:pointer}.master-link--active{text-decoration:underline;text-decoration-color:var(--color-dim);text-decoration-thickness:.025rem;text-underline-offset:.1rem;text-underline-position:under}.master-link a{color:#000;text-decoration:none;text-decoration-thickness:1px;text-underline-position:under}.master-link a:hover{cursor:pointer;text-decoration:underline}.sub-link{align-items:center;color:#000;display:flex;font-size:.8rem;font-style:normal;font-weight:200;letter-spacing:.09375rem;line-height:normal;padding:1.81rem 0!important}.sub-link a{color:#000;text-decoration:none;text-decoration-thickness:1px;text-underline-position:under}.sub-link a:hover{cursor:pointer;text-decoration:underline}.sub-link .inactive{color:#aaa}.empty-space{grid-column:span 4/span 4}.search{align-items:center;background:var(--color-dark);border-left:1px solid var(--color-white);color:var(--color-white);display:flex;justify-content:center;position:relative;width:calc(100% + 3.95rem);z-index:2500}.submenu{left:0;position:fixed;right:0;transform:translateY(-100%);transition:transform .2s ease-in-out;z-index:100}.submenu--open{transform:translateY(0)}.search-bar{background:var(--color-dark);color:var(--color-white);left:0;position:fixed;right:0;transform:translateX(100%);transition:transform .3s ease-in-out;z-index:2000}.search-bar--open{transform:translateX(0)}.search-bar input{all:unset;border-left:1px solid #fff;display:block;font-weight:200;padding-left:.5rem;width:100%}.search-bar input::-moz-placeholder{color:#fff;font-weight:200;opacity:1}.search-bar input::placeholder{color:#fff;font-weight:200;opacity:1}.search-bar-container{align-items:center;display:flex;grid-column:span 9/span 9;justify-content:center}";

let NavBarV2 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.authenticated = false;
    this.platform = 'blog';
    this.isSearchOpen = false;
    this.currentMenu = null;
    this.searchText = '';
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
    return (h(Host, null, h("div", { class: "container" }, h("div", { class: "menu" }, h("div", { class: "logo" }, h("img", { src: getAssetPath('./assets/leibal-logo.png'), alt: "logo", onClick: () => {
        window.location.href = this.platformSpecificLink(this.platform, '/');
      } })), h("div", { class: `master-link ${this.currentMenu == 'read' && 'master-link--active'}`, onClick: () => {
        this.currentMenu = this.currentMenu == 'read' ? null : 'read';
      } }, "Read"), h("div", { class: `master-link ${this.currentMenu == 'shop' && 'master-link--active'}`, onClick: () => {
        this.currentMenu = this.currentMenu == 'shop' ? null : 'shop';
      } }, "Shop"), h("div", { class: "empty-space" }), this.platform == 'blog' && (h(Fragment, null, h("div", { class: "master-link" }, h("a", { href: "/submissions-form" }, "Submit")), h("div", { class: "master-link moods" }, this.authenticated ? (h("a", { href: this.platformSpecificLink('blog', '/moods') }, h("img", { src: getAssetPath('./assets/moods.png'), alt: "MOODS" }))) : (h("a", { href: this.platformSpecificLink('blog', '/subscription/subscribe') }, "Sign Up"))))), this.platform == 'store' && (h(Fragment, null, h("div", { class: "master-link" }, h("a", { href: "https://leibal.com/info/#trades" }, "Trade")), h("div", { class: "master-link" }, h("a", { href: this.platformSpecificLink('store', `/cart`) }, "Cart")))), h("div", { class: "master-link search", onClick: () => {
        if (this.currentMenu != null)
          this.currentMenu = null;
        this.isSearchOpen = !this.isSearchOpen;
        console.log(this.searchInput);
        this.searchInput.focus();
      } }, "Search"), h("div", { class: `menu search-bar ${this.isSearchOpen && 'search-bar--open'}` }, h("div", { class: "search-bar-container" }, h("input", { ref: el => (this.searchInput = el), class: "navbar__search__input", onInput: e => {
        this.searchText = e.target.value;
      }, onKeyPress: e => {
        if (e.key === 'Enter') {
          this.searchInput.blur();
          this.isSearchOpen = false;
          if (this.platform === 'blog') {
            window.location.href = this.platformSpecificLink('blog', `/?s=${this.searchText}`);
          }
          else {
            window.location.href = this.platformSpecificLink('store', `/search?q=${this.searchText}`);
          }
        }
      }, type: "text", placeholder: "Start Typing..." })))), h("div", { class: `menu submenu ${this.currentMenu == 'read' && 'submenu--open'}` }, h("div", null), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('blog', '/') }, "Read All")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('blog', '/category/architecture') }, "Architecture")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('blog', '/category/interiors') }, "Interiors")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('blog', '/category/furniture') }, "Furniture")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('blog', '/category/lighting') }, "Lighting")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('blog', '/category/products') }, "Objects")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('blog', '/category/travel') }, "Travel")), h("div", { class: "sub-link inactive" }), h("div", null)), h("div", { class: `menu submenu ${this.currentMenu == 'shop' && 'submenu--open'}` }, h("div", null), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('store', '/collections/all') }, "Shop All")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('store', '/collections/seating') }, "Seating")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('store', '/collections/tables') }, "Tables")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('store', '/collections/lighting') }, "Lighting")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('store', '/collections/storage') }, "Storage")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('store', '/collections/outdoor') }, "Outdoor")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('store', '/collections/accessories') }, "Accessories")), h("div", { class: "sub-link" }), h("div", null)))));
  }
};
NavBarV2.style = navBarV2Css;

const simpleButtonCss = ":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.simple-button{align-items:center;background-color:var(--color-light);border-color:var(--color-dark);border-style:solid;border-width:1px;color:var(--color-dark);cursor:pointer;display:flex;font-weight:200;justify-content:center;padding:1.5rem 1rem;position:relative;transition-duration:.3s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.simple-button--disabled{cursor:not-allowed;opacity:.5}.simple-button--transparent{background-color:transparent;border-color:var(--color-light);color:var(--color-light)}.simple-button--transparent:active,.simple-button--transparent:hover{background-color:var(--color-light);color:var(--color-dark)}@media (min-width:768px){.simple-button__text{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.simple-button__text{font-size:1.25rem;line-height:1.75rem}}.simple-button__icon{height:1rem;position:absolute;right:1rem;top:1rem;width:1rem}.simple-button--dark,.simple-button:active,.simple-button:hover{background-color:var(--color-dark);color:var(--color-light)}.simple-button--dark{border-color:var(--color-dark)}.simple-button--dark:active,.simple-button--dark:hover{background-color:var(--color-light);color:var(--color-dark)}";

let SimpleButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.theme = 'light';
    this.fillWidth = false;
    this.disabled = false;
    this.transparentBackground = false;
  }
  render() {
    return (h(Host, null, h("div", { class: 'simple-button ' +
        (this.fillWidth ? 'simple-button--full-width ' : ' ') +
        (this.theme == 'dark' ? 'simple-button--dark ' : ' ') +
        (this.disabled ? 'simple-button--disabled' : ' ') +
        (this.transparentBackground ? 'simple-button--transparent' : ' '), role: "button", "aria-pressed": "false", tabindex: "0" }, h("div", { class: "simple-button__icon" }, h("slot", { name: "icon" })), h("div", { class: "simple-button__text" }, h("slot", null)))));
  }
};
SimpleButton.style = simpleButtonCss;

const simpleInputCss = ":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;--color-gray:#ddd;display:block;font-family:var(--font-family)}.simple-input,.simple-input--text{display:block}.simple-input--text{border:none;border-bottom:1px solid var(--color-gray);letter-spacing:.05em;outline:none;padding-bottom:1rem;width:100%}.simple-input--text::-moz-placeholder{color:#999;font-family:var(--font-family);font-weight:300;letter-spacing:.05em;opacity:1!important}.simple-input--text::placeholder{color:#999;font-family:var(--font-family);font-weight:300;letter-spacing:.05em;opacity:1!important}";

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

export { EnquireModal as enquire_modal, NavBarV2 as nav_bar_v2, SimpleButton as simple_button, SimpleInput as simple_input, TelePortal as tele_portal };
