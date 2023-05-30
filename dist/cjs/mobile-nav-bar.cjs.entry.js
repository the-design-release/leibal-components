'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-31caa8e8.js');
const platform = require('./platform-aba5f316.js');

const mobileNavBarCss = ":host{display:block}.mobile-nav-bar{font-weight:300;left:0;position:fixed;right:0;top:0;z-index:100}.mobile-nav-bar__icons{align-items:center;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-bottom-color:rgb(209 213 219/var(--tw-border-opacity));border-bottom-style:solid;border-bottom-width:1px;display:flex;height:50px;justify-content:space-between;position:absolute;width:100%;z-index:50}.mobile-nav-bar__icons,.mobile-nav-bar__icons--open{--tw-border-opacity:1;--tw-bg-opacity:1;transition-duration:.3s;transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mobile-nav-bar__icons--open{--tw-text-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));border-bottom-color:rgb(255 255 255/var(--tw-border-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.mobile-nav-bar__icons--open .mobile-nav-bar__icon{filter:invert(1)}.mobile-nav-bar__icon{cursor:pointer;display:block;padding:1rem;width:1rem}.mobile-nav-bar__menu{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));box-sizing:border-box;color:rgb(255 255 255/var(--tw-text-opacity));display:flex;flex-direction:column;height:100vh;justify-content:space-around;opacity:0;padding:calc(50px + 3.5rem) 1rem 3.5rem;position:absolute;transition:visibility 0s,opacity .3s cubic-bezier(.4,0,.2,1);visibility:hidden;width:100%;z-index:40}.mobile-nav-bar__menu--open{opacity:1;visibility:visible}.mobile-nav-bar__logo{display:block;filter:invert(1);margin-bottom:2rem;width:100px}.mobile-nav-bar__menu-items{margin-bottom:3rem}.mobile-nav-bar__menu-links-container{height:100%;opacity:0;position:absolute;transition:visibility 0s,opacity .3s cubic-bezier(.4,0,.2,1);visibility:hidden;width:100%}.mobile-nav-bar__menu-links-container--open{opacity:1;transition:visibility .3s 0,opacity .3s cubic-bezier(.4,0,.2,1);visibility:visible}.mobile-nav-bar__menu-links{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));bottom:0;display:flex;flex-direction:column;left:0;position:absolute;right:0;top:0;z-index:60}.mobile-nav-bar__menu-links a{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity));font-size:13px;font-weight:300;margin-bottom:.5rem;-webkit-text-decoration-line:none;text-decoration-line:none}.mobile-nav-bar__menu-links a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline;text-underline-offset:2px}.mobile-nav-bar__menu-item{font-size:1.125rem;font-weight:400;line-height:1.75rem;margin-bottom:.75rem}.mobile-nav-bar__submenu-items{margin-bottom:3rem}.mobile-nav-bar__submenu-item{font-size:13px;margin-bottom:.25rem}.mobile-nav-bar__newsletter{margin-bottom:2rem}.mobile-nav-bar__newsletter__header{font-size:1.125rem;font-weight:400;line-height:1.75rem;margin-bottom:.75rem}.mobile-nav-bar__newsletter__input{border-bottom:1px solid #fff;display:flex;justify-content:space-between;padding-bottom:.5rem;padding-top:.5rem}.mobile-nav-bar__newsletter__input input{all:unset;flex-grow:1;font-size:13px}.mobile-nav-bar__newsletter__input button{all:unset;cursor:pointer;font-size:13px;padding-left:1rem}.mobile-nav-bar__links{display:grid;gap:1.5rem;grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:2rem}.mobile-nav-bar__link-header{font-size:1rem;font-weight:400;line-height:1.5rem;margin-bottom:.75rem}.mobile-nav-bar__link-item{font-size:12px}";

let MobileNavBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
  platformSpecificLink(platform$1, path) {
    const platformUrl = platform$1 === 'store' ? platform.STORE_URL : platform.BLOG_URL;
    if (this.platform === platform$1) {
      return path;
    }
    else {
      return new URL(path, platformUrl).toString();
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "mobile-nav-bar" }, index.h("div", { class: `mobile-nav-bar__icons ${this.isOpen ? 'mobile-nav-bar__icons--open' : ''}` }, index.h("div", null, this.isOpen ? (index.h("img", { class: "mobile-nav-bar__icon", src: index.getAssetPath('./assets/close.png'), alt: "Close Menu", style: { width: '0.88rem', height: '0.88rem' }, onClick: () => (this.isOpen = false) })) : (index.h("img", { class: "mobile-nav-bar__icon", src: index.getAssetPath('./assets/hamburger.png'), alt: "Open Menu", style: { width: '1.13rem', height: '1.13rem', marginLeft: '-0.13rem' }, onClick: () => (this.isOpen = true) }))), index.h("div", { style: { display: 'flex' } }, index.h("img", { class: "mobile-nav-bar__icon", src: index.getAssetPath('./assets/shopping-bag.png'), alt: "Cart", style: { paddingRight: '0rem' } }), index.h("img", { class: "mobile-nav-bar__icon", src: index.getAssetPath('./assets/user.png'), alt: "Account", style: { width: '0.9rem', height: '0.9rem' } }))), index.h("div", { class: `mobile-nav-bar__menu ${this.isOpen ? 'mobile-nav-bar__menu--open' : ''}` }, index.h("img", { class: "mobile-nav-bar__logo", src: index.getAssetPath('./assets/leibal-logo.png'), alt: "Logo", onClick: () => {
        window.location.href = this.platformSpecificLink(this.platform, '/');
      } }), index.h("div", { style: { position: 'relative' } }, index.h("div", { class: `mobile-nav-bar__menu-links-container ${this.isShowingLinks ? 'mobile-nav-bar__menu-links-container--open' : ''}` }, this.linksType === 'blog' && (index.h("div", { class: "mobile-nav-bar__menu-links" }, index.h("div", { onClick: () => this.hideLinks(), style: { display: 'flex', alignItems: 'center', marginBottom: '.5rem' } }, index.h("img", { src: index.getAssetPath('./assets/arrow.png'), style: {
        width: '1rem',
        filter: 'invert(1)',
        transform: 'rotate(-180deg)',
        marginRight: '0.5rem',
      } }), ' ', "Stories"), index.h("div", null, index.h("div", null, index.h("a", { href: "#" }, "Architecture")), index.h("div", null, index.h("a", { href: "#" }, "Interiors")), index.h("div", null, index.h("a", { href: "#" }, "Furniture")), index.h("div", null, index.h("a", { href: "#" }, "Lighting")), index.h("div", null, index.h("a", { href: "#" }, "Objects")), index.h("div", null, index.h("a", { href: "#" }, "Travel"))))), this.linksType === 'store' && (index.h("div", { class: "mobile-nav-bar__menu-links" }, index.h("div", { onClick: () => this.hideLinks(), style: { display: 'flex', alignItems: 'center', marginBottom: '1.5rem' } }, index.h("img", { src: index.getAssetPath('./assets/arrow.png'), style: {
        width: '1rem',
        filter: 'invert(1)',
        transform: 'rotate(-180deg)',
        marginRight: '0.5rem',
      } }), ' ', "Store"), index.h("div", null, index.h("div", null, index.h("a", { href: "#" }, "Sofas")), index.h("div", null, index.h("a", { href: "#" }, "Lighting")), index.h("div", null, index.h("a", { href: "#" }, "Accessories")), index.h("div", null, index.h("a", { href: "#" }, "Lighting")), index.h("div", null, index.h("a", { href: "#" }, "Objects")), index.h("div", null, index.h("a", { href: "#" }, "Trinkets")))))), index.h("div", { class: "mobile-nav-bar__menu-items" }, index.h("div", { class: "mobile-nav-bar__menu-item", onClick: () => {
        this.showLinks('blog');
      } }, "Stories >"), index.h("div", { class: "mobile-nav-bar__menu-item", onClick: () => {
        this.showLinks('store');
      } }, "Store >")), index.h("div", { class: "mobile-nav-bar__submenu-items" }, index.h("div", { class: "mobile-nav-bar__submenu-item" }, "Submit"), index.h("div", { class: "mobile-nav-bar__submenu-item" }, "Subscribe"), index.h("div", { class: "mobile-nav-bar__submenu-item" }, "Account"), index.h("div", { class: "mobile-nav-bar__submenu-item" }, "Cart")), index.h("div", { class: "mobile-nav-bar__newsletter" }, index.h("div", { class: "mobile-nav-bar__newsletter__header" }, "Newsletter"), index.h("div", { class: "mobile-nav-bar__newsletter__input" }, index.h("input", { type: "text" }), index.h("button", null, "Send")))), index.h("div", { class: "mobile-nav-bar__links" }, index.h("div", null, index.h("div", { class: "mobile-nav-bar__link-header" }, "About"), index.h("div", { class: "mobile-nav-bar__link-item" }, "Contact Us"), index.h("div", { class: "mobile-nav-bar__link-item" }, "Submit"), index.h("div", { class: "mobile-nav-bar__link-item" }, "FAQ"), index.h("div", { class: "mobile-nav-bar__link-item" }, "Privacy"), index.h("div", { class: "mobile-nav-bar__link-item" }, "Terms & Conditions"), index.h("div", { class: "mobile-nav-bar__link-item" }, "Trade Program")), index.h("div", null, index.h("div", { class: "mobile-nav-bar__link-header" }, "Connect"), index.h("div", { class: "mobile-nav-bar__link-item" }, "Pinterest"), index.h("div", { class: "mobile-nav-bar__link-item" }, "Instagram"), index.h("div", { class: "mobile-nav-bar__link-item" }, "Facebook"), index.h("div", { class: "mobile-nav-bar__link-item" }, "Twitter"), index.h("div", { class: "mobile-nav-bar__link-item" }, "Tumblr"), index.h("div", { class: "mobile-nav-bar__link-item" }, "LinkedIn")))))));
  }
  static get assetsDirs() { return ["assets"]; }
};
MobileNavBar.style = mobileNavBarCss;

exports.mobile_nav_bar = MobileNavBar;
