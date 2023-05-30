import { r as registerInstance, h, g as getAssetPath, H as Host } from './index-3f06ee34.js';
import { S as STORE_URL, B as BLOG_URL } from './platform-1d25d27e.js';

const mobileNavBarCss = ":host{display:block}.mobile-nav-bar{font-weight:300;left:0;position:fixed;right:0;top:0;z-index:100}.mobile-nav-bar__icons{align-items:center;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-bottom-color:rgb(209 213 219/var(--tw-border-opacity));border-bottom-style:solid;border-bottom-width:1px;display:flex;height:50px;justify-content:space-between;position:absolute;width:100%;z-index:50}.mobile-nav-bar__icons,.mobile-nav-bar__icons--open{--tw-border-opacity:1;--tw-bg-opacity:1;transition-duration:.3s;transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mobile-nav-bar__icons--open{--tw-text-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));border-bottom-color:rgb(255 255 255/var(--tw-border-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.mobile-nav-bar__icons--open .mobile-nav-bar__icon{filter:invert(1)}.mobile-nav-bar__icon{cursor:pointer;display:block;padding:1rem;width:1rem}.mobile-nav-bar__menu{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));box-sizing:border-box;color:rgb(255 255 255/var(--tw-text-opacity));display:flex;flex-direction:column;height:100vh;justify-content:space-around;opacity:0;padding:calc(50px + 3.5rem) 1rem 3.5rem;position:absolute;transition:visibility 0s,opacity .3s cubic-bezier(.4,0,.2,1);visibility:hidden;width:100%;z-index:40}.mobile-nav-bar__menu--open{opacity:1;visibility:visible}.mobile-nav-bar__logo{display:block;filter:invert(1);margin-bottom:2rem;width:100px}.mobile-nav-bar__menu-items{margin-bottom:3rem}.mobile-nav-bar__menu-links-container{height:100%;opacity:0;position:absolute;transition:visibility 0s,opacity .3s cubic-bezier(.4,0,.2,1);visibility:hidden;width:100%}.mobile-nav-bar__menu-links-container--open{opacity:1;transition:visibility .3s 0,opacity .3s cubic-bezier(.4,0,.2,1);visibility:visible}.mobile-nav-bar__menu-links{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));bottom:0;display:flex;flex-direction:column;left:0;position:absolute;right:0;top:0;z-index:60}.mobile-nav-bar__menu-links a{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity));font-size:13px;font-weight:300;margin-bottom:.5rem;-webkit-text-decoration-line:none;text-decoration-line:none}.mobile-nav-bar__menu-links a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline;text-underline-offset:2px}.mobile-nav-bar__menu-item{font-size:1.125rem;font-weight:400;line-height:1.75rem;margin-bottom:.75rem}.mobile-nav-bar__submenu-items{margin-bottom:3rem}.mobile-nav-bar__submenu-item{font-size:13px;margin-bottom:.25rem}.mobile-nav-bar__newsletter{margin-bottom:2rem}.mobile-nav-bar__newsletter__header{font-size:1.125rem;font-weight:400;line-height:1.75rem;margin-bottom:.75rem}.mobile-nav-bar__newsletter__input{border-bottom:1px solid #fff;display:flex;justify-content:space-between;padding-bottom:.5rem;padding-top:.5rem}.mobile-nav-bar__newsletter__input input{all:unset;flex-grow:1;font-size:13px}.mobile-nav-bar__newsletter__input button{all:unset;cursor:pointer;font-size:13px;padding-left:1rem}.mobile-nav-bar__links{display:grid;gap:1.5rem;grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:2rem}.mobile-nav-bar__link-header{font-size:1rem;font-weight:400;line-height:1.5rem;margin-bottom:.75rem}.mobile-nav-bar__link-item{font-size:12px}";

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
    return (h(Host, null, h("div", { class: "mobile-nav-bar" }, h("div", { class: `mobile-nav-bar__icons ${this.isOpen ? 'mobile-nav-bar__icons--open' : ''}` }, h("div", null, this.isOpen ? (h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/close.png'), alt: "Close Menu", style: { width: '0.88rem', height: '0.88rem' }, onClick: () => (this.isOpen = false) })) : (h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/hamburger.png'), alt: "Open Menu", style: { width: '1.13rem', height: '1.13rem', marginLeft: '-0.13rem' }, onClick: () => (this.isOpen = true) }))), h("div", { style: { display: 'flex' } }, h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/shopping-bag.png'), alt: "Cart", style: { paddingRight: '0rem' } }), h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/user.png'), alt: "Account", style: { width: '0.9rem', height: '0.9rem' } }))), h("div", { class: `mobile-nav-bar__menu ${this.isOpen ? 'mobile-nav-bar__menu--open' : ''}` }, h("img", { class: "mobile-nav-bar__logo", src: getAssetPath('./assets/leibal-logo.png'), alt: "Logo", onClick: () => {
        window.location.href = this.platformSpecificLink(this.platform, '/');
      } }), h("div", { style: { position: 'relative' } }, h("div", { class: `mobile-nav-bar__menu-links-container ${this.isShowingLinks ? 'mobile-nav-bar__menu-links-container--open' : ''}` }, this.linksType === 'blog' && (h("div", { class: "mobile-nav-bar__menu-links" }, h("div", { onClick: () => this.hideLinks(), style: { display: 'flex', alignItems: 'center', marginBottom: '.5rem' } }, h("img", { src: getAssetPath('./assets/arrow.png'), style: {
        width: '1rem',
        filter: 'invert(1)',
        transform: 'rotate(-180deg)',
        marginRight: '0.5rem',
      } }), ' ', "Stories"), h("div", null, h("div", null, h("a", { href: "#" }, "Architecture")), h("div", null, h("a", { href: "#" }, "Interiors")), h("div", null, h("a", { href: "#" }, "Furniture")), h("div", null, h("a", { href: "#" }, "Lighting")), h("div", null, h("a", { href: "#" }, "Objects")), h("div", null, h("a", { href: "#" }, "Travel"))))), this.linksType === 'store' && (h("div", { class: "mobile-nav-bar__menu-links" }, h("div", { onClick: () => this.hideLinks(), style: { display: 'flex', alignItems: 'center', marginBottom: '1.5rem' } }, h("img", { src: getAssetPath('./assets/arrow.png'), style: {
        width: '1rem',
        filter: 'invert(1)',
        transform: 'rotate(-180deg)',
        marginRight: '0.5rem',
      } }), ' ', "Store"), h("div", null, h("div", null, h("a", { href: "#" }, "Sofas")), h("div", null, h("a", { href: "#" }, "Lighting")), h("div", null, h("a", { href: "#" }, "Accessories")), h("div", null, h("a", { href: "#" }, "Lighting")), h("div", null, h("a", { href: "#" }, "Objects")), h("div", null, h("a", { href: "#" }, "Trinkets")))))), h("div", { class: "mobile-nav-bar__menu-items" }, h("div", { class: "mobile-nav-bar__menu-item", onClick: () => {
        this.showLinks('blog');
      } }, "Stories >"), h("div", { class: "mobile-nav-bar__menu-item", onClick: () => {
        this.showLinks('store');
      } }, "Store >")), h("div", { class: "mobile-nav-bar__submenu-items" }, h("div", { class: "mobile-nav-bar__submenu-item" }, "Submit"), h("div", { class: "mobile-nav-bar__submenu-item" }, "Subscribe"), h("div", { class: "mobile-nav-bar__submenu-item" }, "Account"), h("div", { class: "mobile-nav-bar__submenu-item" }, "Cart")), h("div", { class: "mobile-nav-bar__newsletter" }, h("div", { class: "mobile-nav-bar__newsletter__header" }, "Newsletter"), h("div", { class: "mobile-nav-bar__newsletter__input" }, h("input", { type: "text" }), h("button", null, "Send")))), h("div", { class: "mobile-nav-bar__links" }, h("div", null, h("div", { class: "mobile-nav-bar__link-header" }, "About"), h("div", { class: "mobile-nav-bar__link-item" }, "Contact Us"), h("div", { class: "mobile-nav-bar__link-item" }, "Submit"), h("div", { class: "mobile-nav-bar__link-item" }, "FAQ"), h("div", { class: "mobile-nav-bar__link-item" }, "Privacy"), h("div", { class: "mobile-nav-bar__link-item" }, "Terms & Conditions"), h("div", { class: "mobile-nav-bar__link-item" }, "Trade Program")), h("div", null, h("div", { class: "mobile-nav-bar__link-header" }, "Connect"), h("div", { class: "mobile-nav-bar__link-item" }, "Pinterest"), h("div", { class: "mobile-nav-bar__link-item" }, "Instagram"), h("div", { class: "mobile-nav-bar__link-item" }, "Facebook"), h("div", { class: "mobile-nav-bar__link-item" }, "Twitter"), h("div", { class: "mobile-nav-bar__link-item" }, "Tumblr"), h("div", { class: "mobile-nav-bar__link-item" }, "LinkedIn")))))));
  }
  static get assetsDirs() { return ["assets"]; }
};
MobileNavBar.style = mobileNavBarCss;

export { MobileNavBar as mobile_nav_bar };
