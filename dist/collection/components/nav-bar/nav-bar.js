import { Component, Host, Element, h, Prop, State, Watch, getAssetPath } from '@stencil/core';
import { STORE_URL, BLOG_URL } from '../../utils/platform';
export class NavBar {
  constructor() {
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
    return (h(Host, null,
      h("div", { style: { height: (this.scrolled ? this.currentHeight : 0) + 'px' } }),
      h("nav", { class: 'navbar ' + (this.scrolled ? 'navbar--scrolled ' : '') + (this.scrolledUp ? 'show' : '') },
        h("div", { class: "navbar__row" },
          h("a", { href: this.platformSpecificLink('blog', '/'), class: 'navbar__row__leading navbar__row__leading__logo ' + (this.platform === 'blog' ? 'font-bold' : '') },
            h("div", { class: "navbar__logo" },
              h("img", { src: getAssetPath(`./assets/leibal-logo.png`) })),
            h("a", { href: this.platformSpecificLink('blog', '/') }, "Stories")),
          h("div", { class: "navbar__row__links" },
            h("a", { href: this.platformSpecificLink('blog', '/category/architecture') }, "Architecture"),
            h("a", { href: this.platformSpecificLink('blog', '/category/interiors') }, "Interiors"),
            h("a", { href: this.platformSpecificLink('blog', '/category/furniture') }, "Furniture"),
            h("a", { href: this.platformSpecificLink('blog', '/category/lighting') }, "Lighting"),
            h("a", { href: this.platformSpecificLink('blog', '/category/products') }, "Objects"),
            h("a", { href: this.platformSpecificLink('blog', '/category/travel') }, "Travel")),
          h("div", { class: "navbar__row__action" },
            h("a", { href: "/submissions-form" }, "Submit"),
            this.authenticated ? (h("a", { href: this.platformSpecificLink('blog', '/moods'), class: "navbar__moods-logo" },
              h("img", { src: getAssetPath(`./assets/moods-white.png`) }))) : (h("a", { href: this.platformSpecificLink('blog', '/subscription/subscribe') }, "Sign Up")))),
        h("div", { class: "navbar__row" },
          h("div", { class: 'navbar__search ' + (this.showSearch ? 'navbar__search--visible' : '') },
            h("input", { ref: el => (this.searchInput = el), class: "navbar__search__input", onInput: e => {
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
              }, type: "text", placeholder: "Start Typing..." })),
          h("a", { href: this.platformSpecificLink('store', '/'), class: 'navbar__row__leading ' + (this.platform === 'store' ? 'font-bold' : '') },
            h("div", { class: "navbar__logo", style: { opacity: '0', visibility: 'hidden' } },
              h("img", { src: getAssetPath(`./assets/leibal-logo.png`) })),
            "Store"),
          h("div", { class: "navbar__row__links" },
            h("a", { href: this.platformSpecificLink('store', '/collections/seating') }, "Seating"),
            h("a", { href: this.platformSpecificLink('store', '/collections/tables') }, "Tables"),
            h("a", { href: this.platformSpecificLink('store', '/collections/lighting') }, "Lighting"),
            h("a", { href: this.platformSpecificLink('store', '/collections/storage') }, "Storage"),
            h("a", { href: this.platformSpecificLink('store', '/collections/outdoor') }, "Outdoor"),
            h("a", { href: this.platformSpecificLink('store', '/collections/accessories') }, "Accessories")),
          h("div", { class: "navbar__row__action" },
            h("a", { href: this.platformSpecificLink('store', '/cart'), class: "border-l border-white cursor-pointer" }, "Cart"),
            h("a", { class: "z-10 cursor-pointer", onClick: () => {
                this.showSearch = !this.showSearch;
                setTimeout(() => {
                  if (this.showSearch) {
                    this.searchInput.focus();
                  }
                }, 300);
              } }, "Search"))))));
  }
  static get is() { return "nav-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["nav-bar.css"]
  }; }
  static get styleUrls() { return {
    "$": ["nav-bar.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "authenticated": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "authenticated",
      "reflect": false,
      "defaultValue": "false"
    },
    "platform": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PlatformType",
        "resolved": "\"blog\" | \"store\"",
        "references": {
          "PlatformType": {
            "location": "import",
            "path": "../../utils/platform"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "platform",
      "reflect": false,
      "defaultValue": "'blog'"
    },
    "showMultiplier": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "show-multiplier",
      "reflect": false,
      "defaultValue": "1"
    }
  }; }
  static get states() { return {
    "deltaY": {},
    "scrollY": {},
    "scrolled": {},
    "scrollingUp": {},
    "scrolledUp": {},
    "scrollThreshold": {},
    "showSearch": {},
    "searchText": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "scrolled",
      "methodName": "watchScrolled"
    }, {
      "propName": "scrollY",
      "methodName": "watchScrollY"
    }]; }
}
