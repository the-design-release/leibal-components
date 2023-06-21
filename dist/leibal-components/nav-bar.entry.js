import { r as registerInstance, h, e as Host, i as getAssetPath, g as getElement } from './index-24a60cbb.js';
import { S as STORE_URL, B as BLOG_URL } from './platform-1d25d27e.js';

const navBarCss = "*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}::before,::after{--tw-content:''}:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";}body{margin:0;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0;}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none;}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af;}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af;}button,[role=\"button\"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto}[hidden]{display:none}*,::before,::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.visible{visibility:visible}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.z-10{z-index:10}.col-span-4{grid-column:span 4 / span 4}.col-span-3{grid-column:span 3 / span 3}.col-span-8{grid-column:span 8 / span 8}.mb-8{margin-bottom:2rem}.block{display:block}.flex{display:flex}.grid{display:grid}.contents{display:contents}.hidden{display:none}.w-full{width:100%}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.resize{resize:both}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.border{border-width:1px}.border-l{border-left-width:1px}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.underline{text-decoration-line:underline}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.blur{--tw-blur:blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:host{--font-family:var(--leibal-components-font-family, sans-serif);--color-white:#fff;--color-light:#f3f3f3;--color-dim:#f5f5f5;--color-dark:#222;display:block;font-family:var(--font-family)}.navbar{background:var(--color-white);transition:top 200ms ease-in-out}@keyframes slide-down{from{}}.navbar--scrolled{position:fixed;z-index:10;left:0;right:0;top:-110px}.navbar--scrolled.show{top:0}.navbar__logo{margin-right:2.5rem;width:75px;margin-top:-3px}.navbar__row{-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;position:relative;display:block;grid-template-columns:repeat(10, minmax(0, 1fr));justify-content:space-between;font-size:9px;letter-spacing:0.1em}@media (min-width: 768px){.navbar__row{font-size:13px}}@media (min-width: 1024px){.navbar__row{display:grid}.navbar__row{font-size:13px}}@media (min-width: 1280px){.navbar__row{font-size:13px}}.navbar__row{border-bottom:1px solid var(--color-dim)}.navbar__row__leading{grid-column:span 1 / span 1;margin-left:0px;display:flex;overflow:clip;padding-right:1.25rem;padding-top:1rem;padding-bottom:1rem;padding-left:1rem}@media (min-width: 1024px){.navbar__row__leading{grid-column:span 2 / span 2}.navbar__row__leading{margin-left:2rem}}@media (min-width: 1280px){.navbar__row__leading{padding-left:2rem}}.navbar__row__leading__logo{display:flex;align-items:center}.navbar__row__links{grid-column:span 6 / span 6;display:block;flex:1 1 0%}@media (min-width: 768px){.navbar__row__links{display:grid}}@media (min-width: 1024px){.navbar__row__links{grid-template-columns:repeat(4, minmax(0, 1fr))}}@media (min-width: 1280px){.navbar__row__links{grid-template-columns:repeat(6, minmax(0, 1fr))}}.navbar__row__links a{display:flex;align-items:center;padding-left:1.25rem;padding-right:1.25rem;padding-top:1rem;padding-bottom:1rem;font-weight:300;transition:color 0.3s ease-in-out, background 0.3s ease-in-out}.navbar__row__links a:hover{color:var(--color-light);background:var(--color-dark)}.navbar__row__links a:nth-child(5){display:none}@media (min-width: 1280px){.navbar__row__links a:nth-child(5){display:block}}.navbar__row__links a:nth-child(6){display:none}@media (min-width: 1280px){.navbar__row__links a:nth-child(6){display:block}}.navbar__row__action{grid-column:span 3 / span 3;display:grid;grid-template-columns:repeat(2, minmax(0, 1fr))}@media (min-width: 1024px){.navbar__row__action{grid-column:span 2 / span 2}}.navbar__row__action>*{padding-left:1.25rem;padding-right:1.25rem;padding-top:1rem;padding-bottom:1rem}.navbar__row__action>*:first-child{padding-right:0px;text-align:center}@media (min-width: 1024px){.navbar__row__action>*:first-child{padding-right:2rem}.navbar__row__action>*:first-child{text-align:right}}.navbar__row__action>*:nth-child(2){background:var(--color-dark);color:var(--color-light);text-align:center;transition:color 0.3s ease-in-out, background 0.3s ease-in-out}.navbar__row__action>*:nth-child(2):hover{color:var(--color-dark);background:var(--color-light)}.navbar__moods-logo{display:flex;align-items:center;justify-content:center}.navbar__moods-logo img{height:1.25rem;filter:invert(1);transition:filter 0.3s ease-in-out}.navbar__moods-logo:hover img{filter:invert(0)}.navbar__search{position:absolute;top:0px;right:0px;bottom:0px;left:0px;display:flex;flex-grow:1;align-items:center;background:var(--color-dark);color:var(--color-light);transform:translateX(100%);transition:transform 0.3s ease-in-out}.navbar__search__input{all:unset;margin-left:4rem;display:block;width:100%;padding-left:0.5rem;border-left:1px solid white}.navbar__search__input::-moz-placeholder{color:white;opacity:1}.navbar__search__input::placeholder{color:white;opacity:1}.navbar__search--visible{transform:translateX(0);transition:transform 0.3s ease-in-out}@media (min-width: 1024px){.lg\\:block{display:block}.lg\\:hidden{display:none}}@media (min-width: 1280px){.xl\\:mb-0{margin-bottom:0px}.xl\\:grid{display:grid}.xl\\:grid-cols-12{grid-template-columns:repeat(12, minmax(0, 1fr))}.xl\\:gap-8{gap:2rem}}";

let NavBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("div", { style: { height: (this.scrolled ? this.currentHeight : 0) + 'px' } }), h("nav", { class: 'navbar ' + (this.scrolled ? 'navbar--scrolled ' : '') + (this.scrolledUp ? 'show' : '') }, h("div", { class: "navbar__row" }, h("a", { href: this.platformSpecificLink('blog', '/'), class: 'navbar__row__leading navbar__row__leading__logo ' + (this.platform === 'blog' ? 'font-bold' : '') }, h("div", { class: "navbar__logo" }, h("img", { src: getAssetPath(`./assets/leibal-logo.png`) })), h("a", { href: "/" }, "Stories")), h("div", { class: "navbar__row__links" }, h("a", { href: this.platformSpecificLink('blog', '/category/architecture') }, "Architecture"), h("a", { href: this.platformSpecificLink('blog', '/category/interiors') }, "Interiors"), h("a", { href: this.platformSpecificLink('blog', '/category/furniture') }, "Furniture"), h("a", { href: this.platformSpecificLink('blog', '/category/lighting') }, "Lighting"), h("a", { href: this.platformSpecificLink('blog', '/category/products') }, "Objects"), h("a", { href: this.platformSpecificLink('blog', '/category/travel') }, "Travel")), h("div", { class: "navbar__row__action" }, h("a", { href: "/submissions-form" }, "Submit"), this.authenticated ? (h("a", { href: this.platformSpecificLink('blog', '/moods'), class: "navbar__moods-logo" }, h("img", { src: getAssetPath(`./assets/moods-white.png`) }))) : (h("a", { href: this.platformSpecificLink('blog', '/subscription/subscribe') }, "Sign Up")))), h("div", { class: "navbar__row" }, h("div", { class: 'navbar__search ' + (this.showSearch ? 'navbar__search--visible' : '') }, h("input", { ref: el => (this.searchInput = el), class: "navbar__search__input", onInput: e => {
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
  get el() { return getElement(this); }
  static get watchers() { return {
    "scrolled": ["watchScrolled"],
    "scrollY": ["watchScrollY"]
  }; }
};
NavBar.style = navBarCss;

export { NavBar as nav_bar };
