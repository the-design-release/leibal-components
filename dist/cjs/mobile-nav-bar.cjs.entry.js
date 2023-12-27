'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-31caa8e8.js');
const platform = require('./platform-aba5f316.js');

const mobileNavBarCss = ":host{display:block}.mobile-nav-bar{font-weight:200;left:0;position:fixed;right:0;top:0;z-index:100}.mobile-nav-bar__icons{align-items:center;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-bottom-color:rgb(209 213 219/var(--tw-border-opacity));border-bottom-style:solid;border-bottom-width:1px;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));height:50px;position:absolute;width:100%;z-index:50}.mobile-nav-bar__icons,.mobile-nav-bar__icons--open{--tw-border-opacity:1;--tw-bg-opacity:1;transition-duration:.3s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mobile-nav-bar__icons--open{--tw-text-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));border-bottom-color:rgb(255 255 255/var(--tw-border-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.mobile-nav-bar__icons--open .mobile-nav-bar__icon{filter:invert(1)}.mobile-nav-bar__icon{cursor:pointer;display:block;padding:1rem;width:1rem}.mobile-nav-bar__menu{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));box-sizing:border-box;color:rgb(255 255 255/var(--tw-text-opacity));display:flex;flex-direction:column;height:100vh;justify-content:space-between;opacity:0;padding:calc(50px + 3.5rem) 1rem;position:absolute;transition:visibility 0s,opacity .3s cubic-bezier(.4,0,.2,1);visibility:hidden;width:100%;z-index:40}.mobile-nav-bar__menu--open{opacity:1;visibility:visible}.mobile-nav-bar__logo{display:block;filter:invert(1);margin-bottom:2rem;width:100px}.mobile-nav-bar__menu-links-container{height:100%;opacity:0;position:absolute;transition:visibility 0s,opacity .3s cubic-bezier(.4,0,.2,1);visibility:hidden;width:100%}.mobile-nav-bar__menu-links-container--open{opacity:1;transition:visibility .3s 0,opacity .3s cubic-bezier(.4,0,.2,1);visibility:visible}.mobile-nav-bar__menu-links{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));bottom:0;display:flex;flex-direction:column;left:0;position:absolute;right:0;top:0;z-index:60}.mobile-nav-bar__menu-links a{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity));font-size:.88rem;font-weight:200;margin-bottom:.5rem;text-decoration-line:none}.mobile-nav-bar__menu-links a:hover{text-decoration-line:underline;text-underline-offset:2px}.mobile-nav-bar__menu-item{font-size:1.125rem;font-weight:300;line-height:1.75rem;margin-bottom:.75rem}.mobile-nav-bar__submenu-items{margin-bottom:3rem;margin-top:3rem}.mobile-nav-bar__submenu-item{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity));display:block;font-size:.88rem;margin-bottom:.25rem;text-decoration-line:none}.mobile-nav-bar__newsletter{margin-bottom:2rem}.mobile-nav-bar__newsletter__header{font-size:1.125rem;font-weight:300;line-height:1.75rem;margin-bottom:.75rem}.mobile-nav-bar__newsletter__input{border-bottom:1px solid #fff;display:flex;justify-content:space-between;padding-bottom:.5rem;padding-top:.5rem}.mobile-nav-bar__newsletter__input input{all:unset;flex-grow:1;font-size:.88rem}.mobile-nav-bar__newsletter__input button{all:unset;cursor:pointer;font-size:.88rem;padding-left:1rem}.mobile-nav-bar__links{display:grid;gap:1.5rem;grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:2rem}.mobile-nav-bar__link-header{font-size:1rem;font-weight:300;line-height:1.5rem;margin-bottom:.75rem}.mobile-nav-bar__link-item{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity));display:block;font-size:12px;text-decoration-line:none}.mobile-nav-bar__search{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));bottom:0;color:rgb(0 0 0/var(--tw-text-opacity));display:flex;justify-content:space-between;left:0;position:fixed;right:0}.mobile-nav-bar__search input{all:unset;display:block;padding:1rem;width:100%}.mobile-nav-bar__search button{all:unset;border-left:1px solid #888;display:block;padding:1rem 3rem}";

let MobileNavBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.isOpen = false;
    this.platform = 'blog';
    this.pageTitle = '';
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
  platformSpecificLink(platform$1, path) {
    const platformUrl = platform$1 === 'store' ? platform.STORE_URL : platform.BLOG_URL;
    if (this.platform === platform$1) {
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
    return (index.h(index.Host, null, index.h("div", { class: "mobile-nav-bar", onClick: () => {
        // Scroll to the top of the page.
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } }, index.h("div", { class: `mobile-nav-bar__icons ${this.isOpen ? 'mobile-nav-bar__icons--open' : ''}` }, index.h("div", { style: { display: 'flex', flexBasis: '0', flexGrow: '1', ridColumn: '2 span / 2 span' } }, this.isOpen ? (index.h("img", { class: "mobile-nav-bar__icon", src: index.getAssetPath('./assets/close.png'), alt: "Close Menu", style: { width: '0.88rem', height: '0.88rem' }, onClick: () => (this.isOpen = false) })) : (index.h("img", { class: "mobile-nav-bar__icon", src: index.getAssetPath('./assets/hamburger.png'), alt: "Open Menu", style: { width: '1.13rem', height: '1.13rem', marginLeft: '-0.13rem' }, onClick: () => (this.isOpen = true) }))), index.h("div", { style: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '12.5px',
        gridColumn: '4 span / 4 span',
        marginTop: '2px',
      } }, this.pageTitle.length >= 24 ? `${this.pageTitle.slice(0, 25)}...` : this.pageTitle), index.h("div", { style: { display: 'flex', justifyContent: 'flex-end' } }, index.h("a", { href: this.platformSpecificLink('store', '/cart') }, index.h("img", { class: "mobile-nav-bar__icon", src: index.getAssetPath('./assets/shopping-bag.png'), alt: "Cart", style: { paddingRight: '0.5rem' } })), index.h("a", { href: this.platformSpecificLink('blog', '/moods') }, index.h("img", { class: "mobile-nav-bar__icon", src: index.getAssetPath('./assets/user.png'), alt: "Account", style: { width: '0.9rem', height: '0.9rem', paddingLeft: '0.5rem' } })))), index.h("div", { ref: () => this.windowResizeEl, class: `mobile-nav-bar__menu ${this.isOpen ? 'mobile-nav-bar__menu--open' : ''}` }, index.h("div", null, index.h("img", { class: "mobile-nav-bar__logo", src: index.getAssetPath('./assets/leibal-logo.png'), alt: "Logo", style: { marginBottom: '3.5rem' }, onClick: () => {
        window.location.href = this.platformSpecificLink(this.platform, '/');
      } }), !this.isShowingLinks && (index.h("div", null, index.h("div", { class: "mobile-nav-bar__menu-item", onClick: () => {
        this.showLinks('blog');
      } }, "Stories"), index.h("div", { class: "mobile-nav-bar__menu-item", onClick: () => {
        this.showLinks('store');
      } }, "Store"))), index.h("div", { style: { position: 'relative' } }, index.h("div", { class: `mobile-nav-bar__menu-links-container ${this.isShowingLinks ? 'mobile-nav-bar__menu-links-container--open' : ''}` }, this.linksType === 'blog' && (index.h("div", { class: "mobile-nav-bar__menu-links" }, index.h("div", { onClick: () => this.hideLinks(), style: { display: 'flex', alignItems: 'center', marginBottom: '1.5rem' } }, index.h("img", { src: index.getAssetPath('./assets/arrow.png'), style: {
        width: '1rem',
        filter: 'invert(1)',
        transform: 'rotate(-180deg)',
        marginRight: '0.5rem',
      } }), ' ', "Stories"), index.h("div", { style: { marginLeft: '1.5rem' } }, index.h("div", null, index.h("a", { href: this.platformSpecificLink('blog', '/') }, "Home")), index.h("div", null, index.h("a", { href: this.platformSpecificLink('blog', '/category/architecture') }, "Architecture")), index.h("div", null, index.h("a", { href: this.platformSpecificLink('blog', '/category/interiors') }, "Interiors")), index.h("div", null, index.h("a", { href: this.platformSpecificLink('blog', '/category/furniture') }, "Furniture")), index.h("div", null, index.h("a", { href: this.platformSpecificLink('blog', '/category/lighting') }, "Lighting")), index.h("div", null, index.h("a", { href: this.platformSpecificLink('blog', '/category/products') }, "Objects")), index.h("div", null, index.h("a", { href: this.platformSpecificLink('blog', '/category/travel') }, "Travel"))))), this.linksType === 'store' && (index.h("div", { class: "mobile-nav-bar__menu-links" }, index.h("div", { onClick: () => this.hideLinks(), style: { display: 'flex', alignItems: 'center', marginBottom: '1.5rem' } }, index.h("img", { src: index.getAssetPath('./assets/arrow.png'), style: {
        width: '1rem',
        filter: 'invert(1)',
        transform: 'rotate(-180deg)',
        marginRight: '0.5rem',
      } }), ' ', "Store"), index.h("div", { style: { marginLeft: '1.5rem' } }, index.h("div", null, index.h("a", { href: this.platformSpecificLink('store', '/') }, "Home")), index.h("div", null, index.h("a", { href: this.platformSpecificLink('store', '/collections/seating') }, "Seating")), index.h("div", null, index.h("a", { href: this.platformSpecificLink('store', '/collections/tables') }, "Tables")), index.h("div", null, index.h("a", { href: this.platformSpecificLink('store', '/collections/lighting') }, "Lighting")), index.h("div", null, index.h("a", { href: this.platformSpecificLink('store', '/collections/storage') }, "Storage")), index.h("div", null, index.h("a", { href: this.platformSpecificLink('store', '/collections/outdoor') }, "Outdoor")), index.h("div", null, index.h("a", { href: this.platformSpecificLink('store', '/collections/accessories') }, "Accessories")))))))), index.h("div", { class: "mobile-nav-bar__submenu-items", style: { visibility: this.isShowingLinks ? 'hidden' : 'inherit' } }, index.h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/submissions-form') }, "Submit"), index.h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/subscribe') }, "Subscribe"), index.h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/my-account') }, "Account"), index.h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('store', '/cart') }, "Cart")), index.h("div", { class: "mobile-nav-bar__links" }, index.h("div", null, index.h("div", { class: "mobile-nav-bar__link-header" }, "About"), index.h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/contact-us') }, "Contact Us"), index.h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/submissions-form') }, "Submit"), index.h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/info#faq') }, "FAQ"), index.h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/info#privacy') }, "Privacy"), index.h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/info#terms') }, "Terms & Conditions"), index.h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/info#trades') }, "Trade Program")), index.h("div", null, index.h("div", { class: "mobile-nav-bar__link-header" }, "Connect"), index.h("a", { class: "mobile-nav-bar__link-item", href: "https://www.pinterest.com/leibal/" }, "Pinterest"), index.h("a", { class: "mobile-nav-bar__link-item", href: "https://instagram.com/leibal" }, "Instagram"), index.h("a", { class: "mobile-nav-bar__link-item", href: "http://www.facebook.com/Leibal" }, "Facebook"), index.h("a", { class: "mobile-nav-bar__link-item", href: "https://leibal.tumblr.com/" }, "Tumblr"), index.h("a", { class: "mobile-nav-bar__link-item", href: "https://www.linkedin.com/company/leibal/" }, "LinkedIn"), index.h("a", { class: "mobile-nav-bar__link-item", href: "https://www.tiktok.com/@leibal" }, "TikTok"))), index.h("div", { class: "mobile-nav-bar__search" }, index.h("input", { class: "navbar__search__input", onInput: e => {
        this.searchText = e.target.value;
      }, onKeyPress: e => {
        if (e.key === 'Enter') {
          this.submitSearch();
        }
      }, type: "text", placeholder: "Start Typing..." }), index.h("button", { onClick: () => {
        this.submitSearch();
      } }, "Search"))))));
  }
  static get assetsDirs() { return ["assets"]; }
  get windowResizeEl() { return index.getElement(this); }
};
MobileNavBar.style = mobileNavBarCss;

exports.mobile_nav_bar = MobileNavBar;
