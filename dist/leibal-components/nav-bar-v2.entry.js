import { r as registerInstance, h, e as Host, i as getAssetPath, F as Fragment } from './index-24a60cbb.js';
import { S as STORE_URL, B as BLOG_URL } from './platform-1d25d27e.js';

const navBarV2Css = ":host{--font-family:var(--leibal-components-font-family, sans-serif);--color-white:#fff;--color-light:#f3f3f3;--color-dim:#ddd;--color-dark:#222;display:block;font-family:var(--font-family)}.container{position:fixed;top:0;left:0;right:0;z-index:1000;-webkit-user-select:none;-moz-user-select:none;user-select:none}.menu{position:relative;z-index:1000;display:grid;grid-template-columns:repeat(10, 1fr);grid-gap:2rem;height:4.375rem;padding:0 3.75rem;background:var(--color-white);border-bottom:1px solid #f5f5f5}.logo{display:flex;align-items:center;cursor:pointer}.logo img{width:100%;width:5.2rem;height:auto}.master-link{color:#000;font-size:0.9375rem;font-style:normal;font-weight:200;line-height:normal;letter-spacing:0.09375rem;display:flex;align-items:center}.master-link:hover{cursor:pointer}.master-link--active{text-decoration:underline;text-underline-position:under;text-decoration-thickness:0.025rem;text-decoration-color:var(--color-dim);text-underline-offset:0.1rem}.master-link a{color:#000;text-decoration:none;text-underline-position:under;text-decoration-thickness:1px}.master-link a:hover{cursor:pointer;text-decoration:underline}.sub-link{color:#000;font-size:0.8rem;font-style:normal;font-weight:200;line-height:normal;letter-spacing:0.09375rem;padding:1.81rem 0 !important;display:flex;align-items:center}.sub-link a{color:#000;text-decoration:none;text-underline-position:under;text-decoration-thickness:1px}.sub-link a:hover{cursor:pointer;text-decoration:underline}.sub-link .inactive{color:#aaa}.empty-space{grid-column:span 4 / span 4}.search{position:relative;width:calc(100% + 3.75rem);background:var(--color-dark);color:var(--color-white);display:flex;justify-content:center;align-items:center;z-index:2500;border-left:1px solid var(--color-white)}.submenu{position:fixed;left:0;right:0;transform:translateY(-100%);transition:transform 0.2s ease-in-out;z-index:100}.submenu--open{transform:translateY(0)}.search-bar{position:fixed;left:0;right:0;transform:translateX(100%);transition:transform 0.3s ease-in-out;z-index:2000;background:var(--color-dark);color:var(--color-white)}.search-bar--open{transform:translateX(0)}.search-bar input{all:unset;display:block;width:100%;padding-left:0.5rem;border-left:1px solid white;font-weight:200}.search-bar input::-moz-placeholder{font-weight:200;color:white;opacity:1}.search-bar input::placeholder{font-weight:200;color:white;opacity:1}.search-bar-container{display:flex;justify-content:center;align-items:center;grid-column:span 9 / span 9}";

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
      }, type: "text", placeholder: "Start Typing..." })))), h("div", { class: `menu submenu ${this.currentMenu == 'read' && 'submenu--open'}` }, h("div", null), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('blog', '/') }, "Read All")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('blog', '/category/architecture') }, "Architecture")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('blog', '/category/interiors') }, "Interiors")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('blog', '/category/furniture') }, "Furniture")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('blog', '/category/lighting') }, "Lighting")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('blog', '/category/objects') }, "Objects")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('blog', '/category/travel') }, "Travel")), h("div", { class: "sub-link inactive" }), h("div", null)), h("div", { class: `menu submenu ${this.currentMenu == 'shop' && 'submenu--open'}` }, h("div", null), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('store', '/collections/all') }, "Shop All")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('store', '/collections/seating') }, "Seating")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('store', '/collections/tables') }, "Tables")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('store', '/collections/lighting') }, "Lighting")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('store', '/collections/storage') }, "Storage")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('store', '/collections/outdoor') }, "Outdoor")), h("div", { class: "sub-link" }, h("a", { href: this.platformSpecificLink('store', '/collections/accessories') }, "Accessories")), h("div", { class: "sub-link" }), h("div", null)))));
  }
};
NavBarV2.style = navBarV2Css;

export { NavBarV2 as nav_bar_v2 };
