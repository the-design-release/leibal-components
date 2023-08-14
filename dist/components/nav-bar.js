import { HTMLElement, h, Host, getAssetPath, proxyCustomElement } from '@stencil/core/internal/client';
import { S as STORE_URL, B as BLOG_URL } from './platform.js';

const navBarCss = "/*! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b{font-weight:bolder}code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}button,input,select,textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h1,p{margin:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}img,video{display:block;height:auto;max-width:100%;vertical-align:middle}[hidden]{display:none}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.visible{visibility:visible}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.z-10{z-index:10}.col-span-4{grid-column:span 4/span 4}.col-span-3{grid-column:span 3/span 3}.col-span-8{grid-column:span 8/span 8}.mb-8{margin-bottom:2rem}.mt-4{margin-top:1rem}.block{display:block}.flex{display:flex}.grid{display:grid}.contents{display:contents}.hidden{display:none}.aspect-square{aspect-ratio:1/1}.h-full{height:100%}.w-full{width:100%}.cursor-pointer{cursor:pointer}.resize{resize:both}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.overflow-hidden{overflow:hidden}.border-l{border-left-width:1px}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity))}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-light{font-weight:300}.font-normal{font-weight:400}.font-bold{font-weight:700}.uppercase{text-transform:uppercase}.underline{text-decoration-line:underline}.blur{--tw-blur:blur(8px)}.blur,.invert{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.invert{--tw-invert:invert(100%)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:host{--font-family:var(--leibal-components-font-family,sans-serif);--color-white:#fff;--color-light:#f3f3f3;--color-dim:#f5f5f5;--color-dark:#222;display:block;font-family:var(--font-family)}.navbar{background:var(--color-white);transition:top .2s ease-in-out}.navbar--scrolled{left:0;position:fixed;right:0;top:-110px;z-index:10}.navbar--scrolled.show{top:0}.navbar__logo{margin-right:2.5rem;margin-top:-3px;width:75px}.navbar__row{display:block;font-size:.6rem;grid-template-columns:repeat(10,minmax(0,1fr));justify-content:space-between;letter-spacing:.1em;overflow:hidden;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media (min-width:768px){.navbar__row{font-size:.88rem}}@media (min-width:1024px){.navbar__row{display:grid;font-size:.88rem}}@media (min-width:1280px){.navbar__row{font-size:.88rem}}.navbar__row{border-bottom:1px solid var(--color-dim)}.navbar__row__leading{display:flex;grid-column:span 1/span 1;margin-left:0;overflow:clip;padding:1rem 1.25rem 1rem 1rem}@media (min-width:1024px){.navbar__row__leading{grid-column:span 2/span 2;margin-left:2rem}}@media (min-width:1280px){.navbar__row__leading{padding-left:2rem}}.navbar__row__leading__logo{align-items:center;display:flex}.navbar__row__links{display:block;flex:1 1 0%;grid-column:span 6/span 6}@media (min-width:768px){.navbar__row__links{display:grid}}@media (min-width:1024px){.navbar__row__links{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (min-width:1280px){.navbar__row__links{grid-template-columns:repeat(6,minmax(0,1fr))}}.navbar__row__links a{align-items:center;display:flex;font-weight:300;padding:1rem 1.25rem;transition:color .3s ease-in-out,background .3s ease-in-out}.navbar__row__links a:hover{background:var(--color-dark);color:var(--color-light)}.navbar__row__links a:nth-child(5){display:none}@media (min-width:1280px){.navbar__row__links a:nth-child(5){display:block}}.navbar__row__links a:nth-child(6){display:none}@media (min-width:1280px){.navbar__row__links a:nth-child(6){display:block}}.navbar__row__action{display:grid;grid-column:span 3/span 3;grid-template-columns:repeat(2,minmax(0,1fr))}@media (min-width:1024px){.navbar__row__action{grid-column:span 2/span 2}}.navbar__row__action>*{padding:1rem 1.25rem}.navbar__row__action>:first-child{padding-right:0;text-align:center}@media (min-width:1024px){.navbar__row__action>:first-child{padding-right:2rem;text-align:right}}.navbar__row__action>:nth-child(2){background:var(--color-dark);color:var(--color-light);text-align:center;transition:color .3s ease-in-out,background .3s ease-in-out}.navbar__row__action>:nth-child(2):hover{background:var(--color-light);color:var(--color-dark)}.navbar__moods-logo{align-items:center;display:flex;justify-content:center}.navbar__moods-logo img{filter:invert(1);height:1.25rem;transition:filter .3s ease-in-out}.navbar__moods-logo:hover img{filter:invert(0)}.navbar__search{align-items:center;background:var(--color-dark);bottom:0;color:var(--color-light);display:flex;flex-grow:1;left:0;position:absolute;right:0;top:0;transform:translateX(100%);transition:transform .3s ease-in-out}.navbar__search__input{all:unset;border-left:1px solid #fff;display:block;margin-left:4rem;padding-left:.5rem;width:100%}.navbar__search__input::-moz-placeholder{color:#fff;opacity:1}.navbar__search__input::placeholder{color:#fff;opacity:1}.navbar__search--visible{transform:translateX(0);transition:transform .3s ease-in-out}@media (min-width:1024px){.lg\\:mt-0{margin-top:0}.lg\\:block{display:block}.lg\\:hidden{display:none}}@media (min-width:1280px){.xl\\:mb-0{margin-bottom:0}.xl\\:grid{display:grid}.xl\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.xl\\:gap-8{gap:2rem}}";

let NavBar$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.authenticated = false;
    this.platform = 'blog';
    this.showMultiplier = 1;
    this.deltaY = 0;
    this.scrollY = window.scrollY;
    this.scrolled = false;
    this.scrollingUp = false;
    this.scrolledUp = 0;
    this.scrollThreshold = 500;
    this.showSearch = false;
    this.searchText = '';
    this.currentHeight = 150;
  }
  componentWillLoad() {
    window.addEventListener('scroll', this.scrollListener.bind(this));
    window.addEventListener('resize', this.setHeight.bind(this));
  }
  componentDidLoad() {
    this.setHeight();
  }
  disconnectedCallback() {
    window.removeEventListener('scroll', this.scrollListener.bind(this));
    window.removeEventListener('resize', this.setHeight.bind(this));
  }
  setHeight() {
    this.currentHeight = this.el.clientHeight;
  }
  scrollListener() {
    this.scrollY = window.scrollY;
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
  watchScrolled(scrolled, lastScrolled) {
    if (scrolled === false && lastScrolled === true) {
      this.el.animate([{ transform: 'translateY(0px)' }, { transform: 'translateY(-150px)' }], {
        duration: 150,
        iterations: 1,
      });
    }
  }
  watchScrollY(y, lastY) {
    this.deltaY = y - lastY;
    if (y < this.currentHeight * this.showMultiplier) {
      this.scrolled = false;
      // this.scrollingUp = false;
      return;
    }
    else {
      this.scrolled = true;
    }
    if (this.deltaY < 0) {
      if (this.scrolledUp++ >= this.scrollThreshold) {
        this.scrollingUp = true;
      }
    }
    else if (this.deltaY > 0) {
      this.scrollingUp = false;
      this.scrolledUp = 0;
    }
  }
  render() {
    return (h(Host, null, h("div", { style: { height: (this.scrolled ? this.currentHeight : 0) + 'px' } }), h("nav", { class: 'navbar ' + (this.scrolled ? 'navbar--scrolled ' : '') + (this.scrolledUp ? 'show' : '') }, h("div", { class: "navbar__row" }, h("a", { href: this.platformSpecificLink('blog', '/'), class: 'navbar__row__leading navbar__row__leading__logo ' + (this.platform === 'blog' ? 'font-bold' : '') }, h("div", { class: "navbar__logo" }, h("img", { src: getAssetPath(`./assets/leibal-logo.png`) })), h("a", { href: this.platformSpecificLink('blog', '/') }, "Stories")), h("div", { class: "navbar__row__links" }, h("a", { href: this.platformSpecificLink('blog', '/category/architecture') }, "Architecture"), h("a", { href: this.platformSpecificLink('blog', '/category/interiors') }, "Interiors"), h("a", { href: this.platformSpecificLink('blog', '/category/furniture') }, "Furniture"), h("a", { href: this.platformSpecificLink('blog', '/category/lighting') }, "Lighting"), h("a", { href: this.platformSpecificLink('blog', '/category/products') }, "Objects"), h("a", { href: this.platformSpecificLink('blog', '/category/travel') }, "Travel")), h("div", { class: "navbar__row__action" }, h("a", { href: "/submissions-form" }, "Submit"), this.authenticated ? (h("a", { href: this.platformSpecificLink('blog', '/moods'), class: "navbar__moods-logo" }, h("img", { src: getAssetPath(`./assets/moods-white.png`) }))) : (h("a", { href: this.platformSpecificLink('blog', '/subscription/subscribe') }, "Sign Up")))), h("div", { class: "navbar__row" }, h("div", { class: 'navbar__search ' + (this.showSearch ? 'navbar__search--visible' : '') }, h("input", { ref: el => (this.searchInput = el), class: "navbar__search__input", onInput: e => {
        this.searchText = e.target.value;
      }, onKeyPress: e => {
        if (e.key === 'Enter') {
          this.searchInput.blur();
          this.showSearch = false;
          if (this.platform === 'blog') {
            window.location.href = this.platformSpecificLink('blog', `/?s=${this.searchText}`);
          }
          else {
            window.location.href = this.platformSpecificLink('store', `/search?q=${this.searchText}`);
          }
        }
      }, type: "text", placeholder: "Start Typing..." })), h("a", { href: this.platformSpecificLink('store', '/'), class: 'navbar__row__leading ' + (this.platform === 'store' ? 'font-bold' : '') }, h("div", { class: "navbar__logo", style: { opacity: '0', visibility: 'hidden' } }, h("img", { src: getAssetPath(`./assets/leibal-logo.png`) })), "Store"), h("div", { class: "navbar__row__links" }, h("a", { href: this.platformSpecificLink('store', '/collections/seating') }, "Seating"), h("a", { href: this.platformSpecificLink('store', '/collections/tables') }, "Tables"), h("a", { href: this.platformSpecificLink('store', '/collections/lighting') }, "Lighting"), h("a", { href: this.platformSpecificLink('store', '/collections/storage') }, "Storage"), h("a", { href: this.platformSpecificLink('store', '/collections/outdoor') }, "Outdoor"), h("a", { href: this.platformSpecificLink('store', '/collections/accessories') }, "Accessories")), h("div", { class: "navbar__row__action" }, h("a", { href: this.platformSpecificLink('store', '/cart'), class: "border-l border-white cursor-pointer" }, "Cart"), h("a", { class: "z-10 cursor-pointer", onClick: () => {
        this.showSearch = !this.showSearch;
        setTimeout(() => {
          if (this.showSearch) {
            this.searchInput.focus();
          }
        }, 300);
      } }, "Search"))))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "scrolled": ["watchScrolled"],
    "scrollY": ["watchScrollY"]
  }; }
  static get style() { return navBarCss; }
};
NavBar$1 = /*@__PURE__*/ proxyCustomElement(NavBar$1, [1, "nav-bar", {
    "authenticated": [4],
    "platform": [1],
    "showMultiplier": [2, "show-multiplier"],
    "deltaY": [32],
    "scrollY": [32],
    "scrolled": [32],
    "scrollingUp": [32],
    "scrolledUp": [32],
    "scrollThreshold": [32],
    "showSearch": [32],
    "searchText": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["nav-bar"];
  components.forEach(tagName => { switch (tagName) {
    case "nav-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavBar$1);
      }
      break;
  } });
}

const NavBar = NavBar$1;
const defineCustomElement = defineCustomElement$1;

export { NavBar, defineCustomElement };
