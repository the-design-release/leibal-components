import { r as registerInstance, h, g as getAssetPath, H as Host, a as getElement, c as createEvent } from './index-3f06ee34.js';
import { S as STORE_URL, B as BLOG_URL } from './platform-1d25d27e.js';

const enquireModalCss = ".enquire-card{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;cursor:pointer;display:block;display:grid;font-family:var(--font-family);gap:2rem;grid-column:1/4;grid-template-columns:repeat(12,minmax(0,1fr))}.enquire-card__preview-image{grid-column:span 6/span 6}@media (min-width:1024px){.enquire-card__preview-image{grid-column:span 8/span 8}}.enquire-card__preview-image{aspect-ratio:auto 1/1;overflow:hidden;position:relative;width:100%}.enquire-card__preview-image>*{background-position:50%;background-size:cover;height:100%;opacity:0;position:absolute;transition:opacity .3s ease-in-out;width:100%}.enquire-card__preview-image:hover>:nth-child(2),.enquire-card__preview-image>:first-child{opacity:1}.enquire-card__info{display:flex;flex-direction:column;font-size:.6rem;font-weight:200;grid-column:span 6/span 6;justify-content:space-between}@media (min-width:1024px){.enquire-card__info{grid-column:span 4/span 4}}.enquire-card__info__enquire{margin-bottom:.25rem;text-transform:uppercase}.enquire-card__info__title{font-weight:300;text-transform:uppercase}.enquire-card__button{grid-column:span 12/span 12}@media (min-width:1024px){.enquire-card__button{grid-column:span 8/span 8}}.enquire-modal__modal{background:rgba(0,0,0,.5);bottom:0;left:0;opacity:0;position:fixed;right:0;top:0;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;visibility:hidden;z-index:1000}.enquire-modal__modal--visible{opacity:1;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;visibility:visible}.enquire-modal__modal__content{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));padding-left:2rem;padding-right:2rem;position:relative}@media (min-width:1024px){.enquire-modal__modal__content{display:grid;gap:2rem;grid-template-columns:repeat(10,minmax(0,1fr));padding-left:4rem;padding-right:4rem}}.enquire-modal__modal__content>div{padding-bottom:2rem;padding-top:2rem}@media (min-width:1024px){.enquire-modal__modal__content>div{padding-bottom:3rem;padding-top:3rem}}.enquire-modal__modal__content>div:first-child{display:none}@media (min-width:1024px){.enquire-modal__modal__content>div:first-child{display:grid}}.enquire-modal__modal__content>div:last-child{padding:0}.enquire-modal__modal__form{border:none;grid-column:span 5/span 5}@media (min-width:1024px){.enquire-modal__modal__form{border:1px solid #eaeaea;border-bottom:none;border-top:none;padding-left:2rem;padding-right:2rem}}.enquire-modal__modal__form>div{display:block}@media (min-width:1024px){.enquire-modal__modal__form>div{display:grid;gap:2rem;grid-template-columns:repeat(2,minmax(0,1fr))}}.enquire-modal__modal__form>div>*{margin-bottom:2rem}@media (min-width:1024px){.enquire-modal__modal__form>div>*{margin-bottom:0}}.enquire-modal__modal__form__message{grid-column:span 2/span 2;grid-row:span 2/span 2}.enquire-modal__modal__form__message__title{font-size:.88rem;font-weight:200;margin-bottom:1rem}.enquire-modal__modal__form__message__body{border:1px solid #eaeaea;font-size:.88rem;font-weight:200;letter-spacing:.05em;line-height:1.5rem;max-height:185px;overflow-y:auto;padding:1rem}.enquire-modal__modal__form__message__body p{margin-bottom:1rem;margin-top:1rem}.enquire-modal__modal__form__message__body p:first-child{margin-top:0}.enquire-modal__modal__form__message__body p:last-child{margin-bottom:0}.enquire-modal__modal__submit{display:block;grid-column:span 2/span 2}@media (min-width:1024px){.enquire-modal__modal__submit{display:flex;flex-direction:column;justify-content:space-between}}.enquire-modal__modal__submit__disclaimer{font-size:.6rem;letter-spacing:.1em;margin-bottom:2rem}.enquire-modal__modal__submit__disclaimer a{color:#000}.enquire-modal__modal__close{cursor:pointer;font-size:1.25rem;font-weight:200;line-height:1.75rem;line-height:1;position:absolute;right:.75rem;top:.75rem}.enquire-modal__modal__close img{width:1rem}.grow-wrap{display:grid}.grow-wrap:after{content:attr(data-replicated-value) \" \";visibility:hidden;white-space:pre-wrap}.grow-wrap>textarea{overflow:hidden;resize:none}.grow-wrap:after,.grow-wrap>textarea{border:none;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:12px;font-weight:200;grid-area:1/1/2/2;letter-spacing:1px;margin-left:-1px;outline:none;width:100%}";

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

const mobileNavBarCss = ":host{display:block}.mobile-nav-bar{font-weight:200;left:0;position:fixed;right:0;top:0;z-index:100}.mobile-nav-bar__icons{align-items:center;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-bottom-color:rgb(209 213 219/var(--tw-border-opacity));border-bottom-style:solid;border-bottom-width:1px;display:flex;height:50px;justify-content:space-between;position:absolute;width:100%;z-index:50}.mobile-nav-bar__icons,.mobile-nav-bar__icons--open{--tw-border-opacity:1;--tw-bg-opacity:1;transition-duration:.3s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mobile-nav-bar__icons--open{--tw-text-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));border-bottom-color:rgb(255 255 255/var(--tw-border-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.mobile-nav-bar__icons--open .mobile-nav-bar__icon{filter:invert(1)}.mobile-nav-bar__icon{cursor:pointer;display:block;padding:1rem;width:1rem}.mobile-nav-bar__menu{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));box-sizing:border-box;color:rgb(255 255 255/var(--tw-text-opacity));display:flex;flex-direction:column;height:100vh;justify-content:space-between;opacity:0;padding:calc(50px + 3.5rem) 1rem;position:absolute;transition:visibility 0s,opacity .3s cubic-bezier(.4,0,.2,1);visibility:hidden;width:100%;z-index:40}.mobile-nav-bar__menu--open{opacity:1;visibility:visible}.mobile-nav-bar__logo{display:block;filter:invert(1);margin-bottom:2rem;width:100px}.mobile-nav-bar__menu-links-container{height:100%;opacity:0;position:absolute;transition:visibility 0s,opacity .3s cubic-bezier(.4,0,.2,1);visibility:hidden;width:100%}.mobile-nav-bar__menu-links-container--open{opacity:1;transition:visibility .3s 0,opacity .3s cubic-bezier(.4,0,.2,1);visibility:visible}.mobile-nav-bar__menu-links{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));bottom:0;display:flex;flex-direction:column;left:0;position:absolute;right:0;top:0;z-index:60}.mobile-nav-bar__menu-links a{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity));font-size:.88rem;font-weight:200;margin-bottom:.5rem;text-decoration-line:none}.mobile-nav-bar__menu-links a:hover{text-decoration-line:underline;text-underline-offset:2px}.mobile-nav-bar__menu-item{font-size:1.125rem;font-weight:300;line-height:1.75rem;margin-bottom:.75rem}.mobile-nav-bar__submenu-items{margin-bottom:3rem;margin-top:3rem}.mobile-nav-bar__submenu-item{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity));display:block;font-size:.88rem;margin-bottom:.25rem;text-decoration-line:none}.mobile-nav-bar__newsletter{margin-bottom:2rem}.mobile-nav-bar__newsletter__header{font-size:1.125rem;font-weight:300;line-height:1.75rem;margin-bottom:.75rem}.mobile-nav-bar__newsletter__input{border-bottom:1px solid #fff;display:flex;justify-content:space-between;padding-bottom:.5rem;padding-top:.5rem}.mobile-nav-bar__newsletter__input input{all:unset;flex-grow:1;font-size:.88rem}.mobile-nav-bar__newsletter__input button{all:unset;cursor:pointer;font-size:.88rem;padding-left:1rem}.mobile-nav-bar__links{display:grid;gap:1.5rem;grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:2rem}.mobile-nav-bar__link-header{font-size:1rem;font-weight:300;line-height:1.5rem;margin-bottom:.75rem}.mobile-nav-bar__link-item{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity));display:block;font-size:12px;text-decoration-line:none}.mobile-nav-bar__search{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));bottom:0;color:rgb(0 0 0/var(--tw-text-opacity));display:flex;justify-content:space-between;left:0;position:fixed;right:0}.mobile-nav-bar__search input{all:unset;display:block;padding:1rem;width:100%}.mobile-nav-bar__search button{all:unset;border-left:1px solid #888;display:block;padding:1rem 3rem}";

let MobileNavBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isOpen = false;
    this.platform = 'blog';
    this.isShowingLinks = false;
    this.linksType = 'blog';
    this.searchText = '';
  }
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.windowResizeEl.style.height = `${window.innerHeight}px`;
    });
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
  submitSearch() {
    if (this.platform === 'blog') {
      window.location.href = this.platformSpecificLink('blog', `/?s=${this.searchText}`);
    }
    else {
      window.location.href = this.platformSpecificLink('store', `/search?q=${this.searchText}`);
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "mobile-nav-bar" }, h("div", { class: `mobile-nav-bar__icons ${this.isOpen ? 'mobile-nav-bar__icons--open' : ''}` }, h("div", null, this.isOpen ? (h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/close.png'), alt: "Close Menu", style: { width: '0.88rem', height: '0.88rem' }, onClick: () => (this.isOpen = false) })) : (h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/hamburger.png'), alt: "Open Menu", style: { width: '1.13rem', height: '1.13rem', marginLeft: '-0.13rem' }, onClick: () => (this.isOpen = true) }))), h("div", { style: { display: 'flex' } }, h("a", { href: this.platformSpecificLink('store', '/cart') }, h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/shopping-bag.png'), alt: "Cart", style: { paddingRight: '0.5rem' } })), h("a", { href: this.platformSpecificLink('blog', '/moods') }, h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/user.png'), alt: "Account", style: { width: '0.9rem', height: '0.9rem', paddingLeft: '0.5rem' } })))), h("div", { ref: () => this.windowResizeEl, class: `mobile-nav-bar__menu ${this.isOpen ? 'mobile-nav-bar__menu--open' : ''}` }, h("div", null, h("img", { class: "mobile-nav-bar__logo", src: getAssetPath('./assets/leibal-logo.png'), alt: "Logo", style: { marginBottom: '3.5rem' }, onClick: () => {
        window.location.href = this.platformSpecificLink(this.platform, '/');
      } }), !this.isShowingLinks && (h("div", null, h("div", { class: "mobile-nav-bar__menu-item", onClick: () => {
        this.showLinks('blog');
      } }, "Stories"), h("div", { class: "mobile-nav-bar__menu-item", onClick: () => {
        this.showLinks('store');
      } }, "Store"))), h("div", { style: { position: 'relative' } }, h("div", { class: `mobile-nav-bar__menu-links-container ${this.isShowingLinks ? 'mobile-nav-bar__menu-links-container--open' : ''}` }, this.linksType === 'blog' && (h("div", { class: "mobile-nav-bar__menu-links" }, h("div", { onClick: () => this.hideLinks(), style: { display: 'flex', alignItems: 'center', marginBottom: '1.5rem' } }, h("img", { src: getAssetPath('./assets/arrow.png'), style: {
        width: '1rem',
        filter: 'invert(1)',
        transform: 'rotate(-180deg)',
        marginRight: '0.5rem',
      } }), ' ', "Stories"), h("div", { style: { marginLeft: '1.5rem' } }, h("div", null, h("a", { href: this.platformSpecificLink('blog', '/') }, "Home")), h("div", null, h("a", { href: this.platformSpecificLink('blog', '/category/architecture') }, "Architecture")), h("div", null, h("a", { href: this.platformSpecificLink('blog', '/category/interiors') }, "Interiors")), h("div", null, h("a", { href: this.platformSpecificLink('blog', '/category/furniture') }, "Furniture")), h("div", null, h("a", { href: this.platformSpecificLink('blog', '/category/lighting') }, "Lighting")), h("div", null, h("a", { href: this.platformSpecificLink('blog', '/category/products') }, "Objects")), h("div", null, h("a", { href: this.platformSpecificLink('blog', '/category/travel') }, "Travel"))))), this.linksType === 'store' && (h("div", { class: "mobile-nav-bar__menu-links" }, h("div", { onClick: () => this.hideLinks(), style: { display: 'flex', alignItems: 'center', marginBottom: '1.5rem' } }, h("img", { src: getAssetPath('./assets/arrow.png'), style: {
        width: '1rem',
        filter: 'invert(1)',
        transform: 'rotate(-180deg)',
        marginRight: '0.5rem',
      } }), ' ', "Store"), h("div", { style: { marginLeft: '1.5rem' } }, h("div", null, h("a", { href: this.platformSpecificLink('store', '/') }, "Home")), h("div", null, h("a", { href: this.platformSpecificLink('store', '/collections/seating') }, "Seating")), h("div", null, h("a", { href: this.platformSpecificLink('store', '/collections/tables') }, "Tables")), h("div", null, h("a", { href: this.platformSpecificLink('store', '/collections/lighting') }, "Lighting")), h("div", null, h("a", { href: this.platformSpecificLink('store', '/collections/storage') }, "Storage")), h("div", null, h("a", { href: this.platformSpecificLink('store', '/collections/outdoor') }, "Outdoor")), h("div", null, h("a", { href: this.platformSpecificLink('store', '/collections/accessories') }, "Accessories")))))))), h("div", { class: "mobile-nav-bar__submenu-items", style: { visibility: this.isShowingLinks ? 'hidden' : 'inherit' } }, h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/submissions-form') }, "Submit"), h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/subscribe') }, "Subscribe"), h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/my-account') }, "Account"), h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('store', '/cart') }, "Cart")), h("div", { class: "mobile-nav-bar__links" }, h("div", null, h("div", { class: "mobile-nav-bar__link-header" }, "About"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/contact-us') }, "Contact Us"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/submissions-form') }, "Submit"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/info#faq') }, "FAQ"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/info#privacy') }, "Privacy"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/info#terms') }, "Terms & Conditions"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/info#trades') }, "Trade Program")), h("div", null, h("div", { class: "mobile-nav-bar__link-header" }, "Connect"), h("a", { class: "mobile-nav-bar__link-item", href: "https://www.pinterest.com/leibal/" }, "Pinterest"), h("a", { class: "mobile-nav-bar__link-item", href: "https://instagram.com/leibal" }, "Instagram"), h("a", { class: "mobile-nav-bar__link-item", href: "http://www.facebook.com/Leibal" }, "Facebook"), h("a", { class: "mobile-nav-bar__link-item", href: "https://leibal.tumblr.com/" }, "Tumblr"), h("a", { class: "mobile-nav-bar__link-item", href: "https://www.linkedin.com/company/leibal/" }, "LinkedIn"), h("a", { class: "mobile-nav-bar__link-item", href: "https://www.tiktok.com/@leibal" }, "TikTok"))), h("div", { class: "mobile-nav-bar__search" }, h("input", { class: "navbar__search__input", onInput: e => {
        this.searchText = e.target.value;
      }, onKeyPress: e => {
        if (e.key === 'Enter') {
          this.submitSearch();
        }
      }, type: "text", placeholder: "Start Typing..." }), h("button", { onClick: () => {
        this.submitSearch();
      } }, "Search"))))));
  }
  static get assetsDirs() { return ["assets"]; }
  get windowResizeEl() { return getElement(this); }
};
MobileNavBar.style = mobileNavBarCss;

const simpleButtonCss = ":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.simple-button{align-items:center;background-color:var(--color-light);border-color:var(--color-dark);border-style:solid;border-width:1px;color:var(--color-dark);cursor:pointer;display:flex;font-weight:200;justify-content:center;padding:1.5rem 1rem;position:relative;transition-duration:.3s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.simple-button--disabled{cursor:not-allowed;opacity:.5}@media (min-width:768px){.simple-button__text{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.simple-button__text{font-size:1.25rem;line-height:1.75rem}}.simple-button__icon{height:1rem;position:absolute;right:1rem;top:1rem;width:1rem}.simple-button--dark,.simple-button:active,.simple-button:hover{background-color:var(--color-dark);color:var(--color-light)}.simple-button--dark{border-color:var(--color-dark)}.simple-button--dark:active,.simple-button--dark:hover{background-color:var(--color-light);color:var(--color-dark)}";

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

export { EnquireModal as enquire_modal, MobileNavBar as mobile_nav_bar, SimpleButton as simple_button, SimpleInput as simple_input, TelePortal as tele_portal };
