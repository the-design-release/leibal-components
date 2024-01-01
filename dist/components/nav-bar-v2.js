import { HTMLElement, h, Host, getAssetPath, Fragment, proxyCustomElement } from '@stencil/core/internal/client';
import { S as STORE_URL, B as BLOG_URL } from './platform.js';

const navBarV2Css = ":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-white:#fff;--color-light:#f3f3f3;--color-dim:#ddd;--color-dark:#222;display:block;font-family:var(--font-family)}.container{left:0;position:fixed;right:0;top:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:500}.menu{grid-gap:2rem;background:var(--color-white);border-bottom:1px solid #f5f5f5;display:grid;grid-template-columns:repeat(10,1fr);height:4.375rem;padding:0 3.75rem;position:relative;z-index:500}.logo{align-items:center;cursor:pointer;display:flex}.logo img{height:auto;width:100%;width:5.2rem}.master-link{align-items:center;color:#000;display:flex;font-size:.9375rem;font-style:normal;font-weight:200;letter-spacing:.09375rem;line-height:normal}.master-link:hover{cursor:pointer}.master-link--active{text-decoration:underline;text-decoration-color:var(--color-dim);text-decoration-thickness:.025rem;text-underline-offset:.1rem;text-underline-position:under}.master-link a{color:#000;text-decoration:none;text-decoration-thickness:1px;text-underline-position:under}.master-link a:hover{cursor:pointer;text-decoration:underline}.sub-link{align-items:center;color:#000;display:flex;font-size:.8rem;font-style:normal;font-weight:200;letter-spacing:.09375rem;line-height:normal;padding:1.81rem 0!important}.sub-link a{color:#000;text-decoration:none;text-decoration-thickness:1px;text-underline-position:under}.sub-link a:hover{cursor:pointer;text-decoration:underline}.sub-link .inactive{color:#aaa}.empty-space{grid-column:span 4/span 4}.search{align-items:center;background:var(--color-dark);border-left:1px solid var(--color-white);color:var(--color-white);display:flex;justify-content:center;position:relative;width:calc(100% + 3.75rem);z-index:2500}.submenu{left:0;position:fixed;right:0;transform:translateY(-100%);transition:transform .2s ease-in-out;z-index:100}.submenu--open{transform:translateY(0)}.search-bar{background:var(--color-dark);color:var(--color-white);left:0;position:fixed;right:0;transform:translateX(100%);transition:transform .3s ease-in-out;z-index:2000}.search-bar--open{transform:translateX(0)}.search-bar input{all:unset;border-left:1px solid #fff;display:block;font-weight:200;padding-left:.5rem;width:100%}.search-bar input::-moz-placeholder{color:#fff;font-weight:200;opacity:1}.search-bar input::placeholder{color:#fff;font-weight:200;opacity:1}.search-bar-container{align-items:center;display:flex;grid-column:span 9/span 9;justify-content:center}";

let NavBarV2$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
      } }, "Shop"), h("div", { class: "empty-space" }), this.platform == 'blog' && (h(Fragment, null, h("div", { class: "master-link" }, h("a", { href: "/submissions-form" }, "Submit")), h("div", { class: "master-link" }, this.authenticated ? (h("a", { href: this.platformSpecificLink('blog', '/moods') }, "MOODS")) : (h("a", { href: this.platformSpecificLink('blog', '/subscription/subscribe') }, "Sign Up"))))), this.platform == 'store' && (h(Fragment, null, h("div", { class: "master-link" }, h("a", { href: "https://leibal.com/info/#trades" }, "Trade")), h("div", { class: "master-link" }, h("a", { href: this.platformSpecificLink('store', `/cart`) }, "Cart")))), h("div", { class: "master-link search", onClick: () => {
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
  static get style() { return navBarV2Css; }
};
NavBarV2$1 = /*@__PURE__*/ proxyCustomElement(NavBarV2$1, [1, "nav-bar-v2", {
    "authenticated": [4],
    "platform": [1],
    "isSearchOpen": [32],
    "currentMenu": [32],
    "searchText": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["nav-bar-v2"];
  components.forEach(tagName => { switch (tagName) {
    case "nav-bar-v2":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavBarV2$1);
      }
      break;
  } });
}

const NavBarV2 = NavBarV2$1;
const defineCustomElement = defineCustomElement$1;

export { NavBarV2, defineCustomElement };
