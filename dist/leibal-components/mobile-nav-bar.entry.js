import { r as registerInstance, h, e as Host, i as getAssetPath } from './index-24a60cbb.js';

const mobileNavBarCss = ":host{display:block}.mobile-nav-bar{position:fixed;top:0px;left:0px;right:0px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));font-weight:300}.mobile-nav-bar__icons{position:absolute;z-index:50;display:flex;height:50px;width:100%;align-items:center;justify-content:space-between;border-bottom-width:1px;--tw-border-opacity:1;border-bottom-color:rgb(209 213 219 / var(--tw-border-opacity));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-duration:300ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-bottom-style:solid}.mobile-nav-bar__icons--open{--tw-border-opacity:1;border-bottom-color:rgb(255 255 255 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-duration:300ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mobile-nav-bar__icons--open .mobile-nav-bar__icon{filter:invert(1)}.mobile-nav-bar__icon{display:block;width:1rem;cursor:pointer;padding:1rem}.mobile-nav-bar__menu{position:absolute;z-index:40;box-sizing:border-box;display:flex;height:100vh;width:100%;flex-direction:column;justify-content:space-around;--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));visibility:hidden;opacity:0;transition:visibility 0s, opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);padding:2rem 1rem;padding-top:calc(50px + 3.5rem);padding-bottom:3.5rem}.mobile-nav-bar__menu--open{visibility:visible;opacity:1}.mobile-nav-bar__logo{margin-bottom:2rem;display:block;width:100px;filter:invert(1)}.mobile-nav-bar__menu-items{margin-bottom:3rem}.mobile-nav-bar__menu-links-container{position:absolute;height:100%;width:100%;visibility:hidden;opacity:0;transition:visibility 0s, opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mobile-nav-bar__menu-links-container--open{visibility:visible;opacity:1;transition:visibility 300ms, opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mobile-nav-bar__menu-links{position:absolute;top:0px;right:0px;left:0px;bottom:0px;z-index:60;display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.mobile-nav-bar__menu-links a{margin-bottom:0.5rem;font-size:13px;font-weight:300;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));text-decoration-line:none}.mobile-nav-bar__menu-links a:hover{text-decoration-line:underline;text-underline-offset:2px}.mobile-nav-bar__menu-item{margin-bottom:0.75rem;font-size:1.125rem;line-height:1.75rem;font-weight:400}.mobile-nav-bar__submenu-items{margin-bottom:3rem}.mobile-nav-bar__submenu-item{margin-bottom:0.25rem;font-size:13px}.mobile-nav-bar__newsletter{margin-bottom:2rem}.mobile-nav-bar__newsletter__header{margin-bottom:0.75rem;font-size:1.125rem;line-height:1.75rem;font-weight:400}.mobile-nav-bar__newsletter__input{display:flex;justify-content:space-between;padding-top:0.5rem;padding-bottom:0.5rem;border-bottom:1px solid #fff}.mobile-nav-bar__newsletter__input input{all:unset;flex-grow:1;font-size:13px}.mobile-nav-bar__newsletter__input button{all:unset;cursor:pointer;padding-left:1rem;font-size:13px}.mobile-nav-bar__links{margin-bottom:2rem;display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:1.5rem}.mobile-nav-bar__link-header{margin-bottom:0.75rem;font-size:1rem;line-height:1.5rem;font-weight:400}.mobile-nav-bar__link-item{font-size:12px}";

let MobileNavBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isOpen = true;
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
  render() {
    return (h(Host, null, h("div", { class: "mobile-nav-bar" }, h("div", { class: `mobile-nav-bar__icons ${this.isOpen ? 'mobile-nav-bar__icons--open' : ''}` }, h("div", null, this.isOpen ? (h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/close.png'), alt: "Close Menu", style: { width: '0.88rem', height: '0.88rem' }, onClick: () => (this.isOpen = false) })) : (h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/hamburger.png'), alt: "Open Menu", style: { width: '1.13rem', height: '1.13rem', marginLeft: '-0.13rem' }, onClick: () => (this.isOpen = true) }))), h("div", { style: { display: 'flex' } }, h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/shopping-bag.png'), alt: "Cart", style: { paddingRight: '0rem' } }), h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/user.png'), alt: "Account", style: { width: '0.9rem', height: '0.9rem' } }))), h("div", { class: `mobile-nav-bar__menu ${this.isOpen ? 'mobile-nav-bar__menu--open' : ''}` }, h("img", { class: "mobile-nav-bar__logo", src: getAssetPath('./assets/leibal-logo.png'), alt: "Logo" }), h("div", { style: { position: 'relative' } }, h("div", { class: `mobile-nav-bar__menu-links-container ${this.isShowingLinks ? 'mobile-nav-bar__menu-links-container--open' : ''}` }, this.linksType === 'blog' && (h("div", { class: "mobile-nav-bar__menu-links" }, h("div", { onClick: () => this.hideLinks(), style: { display: 'flex', alignItems: 'center', marginBottom: '.5rem' } }, h("img", { src: getAssetPath('./assets/arrow.png'), style: {
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
