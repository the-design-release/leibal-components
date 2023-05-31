import { r as registerInstance, h, e as Host, i as getAssetPath } from './index-24a60cbb.js';
import { S as STORE_URL, B as BLOG_URL } from './platform-1d25d27e.js';

const mobileNavBarCss = ":host{display:block}.mobile-nav-bar{position:fixed;top:0px;left:0px;right:0px;z-index:100;font-weight:300}.mobile-nav-bar__icons{position:absolute;z-index:50;display:flex;height:50px;width:100%;align-items:center;justify-content:space-between;border-bottom-width:1px;--tw-border-opacity:1;border-bottom-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-duration:300ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-bottom-style:solid}.mobile-nav-bar__icons--open{--tw-border-opacity:1;border-bottom-color:rgb(255 255 255 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-duration:300ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mobile-nav-bar__icons--open .mobile-nav-bar__icon{filter:invert(1)}.mobile-nav-bar__icon{display:block;width:1rem;cursor:pointer;padding:1rem}.mobile-nav-bar__menu{position:absolute;z-index:40;box-sizing:border-box;display:flex;height:100vh;width:100%;flex-direction:column;justify-content:space-around;--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));visibility:hidden;opacity:0;transition:visibility 0s, opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);padding:2rem 1rem;padding-top:calc(50px + 3.5rem);padding-bottom:calc(50px + 3.5rem)}.mobile-nav-bar__menu--open{visibility:visible;opacity:1}.mobile-nav-bar__logo{margin-bottom:2rem;display:block;width:100px;filter:invert(1)}.mobile-nav-bar__menu-items{margin-bottom:3rem}.mobile-nav-bar__menu-links-container{position:absolute;height:100%;width:100%;visibility:hidden;opacity:0;transition:visibility 0s, opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mobile-nav-bar__menu-links-container--open{visibility:visible;opacity:1;transition:visibility 300ms 0, opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mobile-nav-bar__menu-links{position:absolute;top:0px;right:0px;left:0px;bottom:0px;z-index:60;display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.mobile-nav-bar__menu-links a{margin-bottom:0.5rem;font-size:13px;font-weight:300;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none}.mobile-nav-bar__menu-links a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline;text-underline-offset:2px}.mobile-nav-bar__menu-item{margin-bottom:0.75rem;font-size:1.125rem;line-height:1.75rem;font-weight:400}.mobile-nav-bar__submenu-items{margin-bottom:3rem}.mobile-nav-bar__submenu-item{margin-bottom:0.25rem;display:block;font-size:13px;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none}.mobile-nav-bar__newsletter{margin-bottom:2rem}.mobile-nav-bar__newsletter__header{margin-bottom:0.75rem;font-size:1.125rem;line-height:1.75rem;font-weight:400}.mobile-nav-bar__newsletter__input{display:flex;justify-content:space-between;padding-top:0.5rem;padding-bottom:0.5rem;border-bottom:1px solid #fff}.mobile-nav-bar__newsletter__input input{all:unset;flex-grow:1;font-size:13px}.mobile-nav-bar__newsletter__input button{all:unset;cursor:pointer;padding-left:1rem;font-size:13px}.mobile-nav-bar__links{margin-bottom:2rem;display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:1.5rem}.mobile-nav-bar__link-header{margin-bottom:0.75rem;font-size:1rem;line-height:1.5rem;font-weight:400}.mobile-nav-bar__link-item{display:block;font-size:12px;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none}.mobile-nav-bar__search{position:absolute;bottom:0px;left:0px;right:0px;display:flex;justify-content:space-between;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.mobile-nav-bar__search input{all:unset;display:block;width:100%;padding:1rem}.mobile-nav-bar__search button{all:unset;display:block;padding-left:3rem;padding-right:3rem;padding-top:1rem;padding-bottom:1rem;border-left:1px solid #888}";

let MobileNavBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isOpen = false;
    this.platform = 'blog';
    this.isShowingLinks = false;
    this.linksType = 'blog';
    this.searchText = '';
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
      } }, "Store >")), h("div", { class: "mobile-nav-bar__submenu-items" }, h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/submissions-form') }, "Submit"), h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/subscribe') }, "Subscribe"), h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/users') }, "Account"), h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('store', '/cart') }, "Cart"))), h("div", { class: "mobile-nav-bar__links" }, h("div", null, h("div", { class: "mobile-nav-bar__link-header" }, "About"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/contact-us') }, "Contact Us"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/submissions-form') }, "Submit"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/faq') }, "FAQ"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/privacy') }, "Privacy"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/terms-and-conditions') }, "Terms & Conditions"), h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/trades') }, "Trade Program")), h("div", null, h("div", { class: "mobile-nav-bar__link-header" }, "Connect"), h("a", { class: "mobile-nav-bar__link-item", href: "https://www.pinterest.com/leibal/" }, "Pinterest"), h("a", { class: "mobile-nav-bar__link-item", href: "https://instagram.com/leibal" }, "Instagram"), h("a", { class: "mobile-nav-bar__link-item", href: "http://www.facebook.com/Leibal" }, "Facebook"), h("a", { class: "mobile-nav-bar__link-item", href: "https://leibal.tumblr.com/" }, "Tumblr"), h("a", { class: "mobile-nav-bar__link-item", href: "https://www.linkedin.com/company/leibal/" }, "LinkedIn"), h("a", { class: "mobile-nav-bar__link-item", href: "https://www.tiktok.com/leibal" }, "TikTok"))), h("div", { class: "mobile-nav-bar__search" }, h("input", { class: "navbar__search__input", onInput: e => {
        this.searchText = e.target.value;
      }, onKeyPress: e => {
        if (e.key === 'Enter') {
          this.submitSearch();
        }
      }, type: "text", placeholder: "Start Typing..." }), h("button", null, "Search"))))));
  }
  static get assetsDirs() { return ["assets"]; }
};
MobileNavBar.style = mobileNavBarCss;

export { MobileNavBar as mobile_nav_bar };
