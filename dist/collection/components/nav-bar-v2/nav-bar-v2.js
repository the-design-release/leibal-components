import { Component, Host, h, getAssetPath, State, Prop, Fragment } from '@stencil/core';
import { STORE_URL, BLOG_URL } from '../../utils/platform';
export class NavBarV2 {
  constructor() {
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
    return (h(Host, null,
      h("div", { class: "container" },
        h("div", { class: "menu" },
          h("div", { class: "logo" },
            h("img", { src: getAssetPath('./assets/leibal-logo.png'), alt: "logo", onClick: () => {
                window.location.href = this.platformSpecificLink(this.platform, '/');
              } })),
          h("div", { class: `master-link ${this.currentMenu == 'read' && 'master-link--active'}`, onClick: () => {
              this.currentMenu = this.currentMenu == 'read' ? null : 'read';
            } }, "Read"),
          h("div", { class: `master-link ${this.currentMenu == 'shop' && 'master-link--active'}`, onClick: () => {
              this.currentMenu = this.currentMenu == 'shop' ? null : 'shop';
            } }, "Shop"),
          h("div", { class: "empty-space" }),
          this.platform == 'blog' && (h(Fragment, null,
            h("div", { class: "master-link" },
              h("a", { href: "/submissions-form" }, "Submit")),
            h("div", { class: "master-link" }, this.authenticated ? (h("a", { href: this.platformSpecificLink('blog', '/moods') }, "MOODS")) : (h("a", { href: this.platformSpecificLink('blog', '/subscription/subscribe') }, "Sign Up"))))),
          this.platform == 'store' && (h(Fragment, null,
            h("div", { class: "master-link" },
              h("a", { href: "https://leibal.com/info/#trades" }, "Trade")),
            h("div", { class: "master-link" },
              h("a", { href: this.platformSpecificLink('store', `/cart`) }, "Cart")))),
          h("div", { class: "master-link search", onClick: () => {
              if (this.currentMenu != null)
                this.currentMenu = null;
              this.isSearchOpen = !this.isSearchOpen;
              console.log(this.searchInput);
              this.searchInput.focus();
            } }, "Search"),
          h("div", { class: `menu search-bar ${this.isSearchOpen && 'search-bar--open'}` },
            h("div", { class: "search-bar-container" },
              h("input", { ref: el => (this.searchInput = el), class: "navbar__search__input", onInput: e => {
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
                }, type: "text", placeholder: "Start Typing..." })))),
        h("div", { class: `menu submenu ${this.currentMenu == 'read' && 'submenu--open'}` },
          h("div", null),
          h("div", { class: "sub-link" },
            h("a", { href: this.platformSpecificLink('blog', '/') }, "Read All")),
          h("div", { class: "sub-link" },
            h("a", { href: this.platformSpecificLink('blog', '/category/architecture') }, "Architecture")),
          h("div", { class: "sub-link" },
            h("a", { href: this.platformSpecificLink('blog', '/category/interiors') }, "Interiors")),
          h("div", { class: "sub-link" },
            h("a", { href: this.platformSpecificLink('blog', '/category/furniture') }, "Furniture")),
          h("div", { class: "sub-link" },
            h("a", { href: this.platformSpecificLink('blog', '/category/lighting') }, "Lighting")),
          h("div", { class: "sub-link" },
            h("a", { href: this.platformSpecificLink('blog', '/category/objects') }, "Objects")),
          h("div", { class: "sub-link" },
            h("a", { href: this.platformSpecificLink('blog', '/category/travel') }, "Travel")),
          h("div", { class: "sub-link inactive" },
            h("a", { href: "#" }, "City Guides")),
          h("div", null)),
        h("div", { class: `menu submenu ${this.currentMenu == 'shop' && 'submenu--open'}` },
          h("div", null),
          h("div", { class: "sub-link" },
            h("a", { href: this.platformSpecificLink('store', '/collections/all') }, "Shop All")),
          h("div", { class: "sub-link" },
            h("a", { href: this.platformSpecificLink('store', '/collections/seating') }, "Seating")),
          h("div", { class: "sub-link" },
            h("a", { href: this.platformSpecificLink('store', '/collections/tables') }, "Tables")),
          h("div", { class: "sub-link" },
            h("a", { href: this.platformSpecificLink('store', '/collections/lighting') }, "Lighting")),
          h("div", { class: "sub-link" },
            h("a", { href: this.platformSpecificLink('store', '/collections/storage') }, "Storage")),
          h("div", { class: "sub-link" },
            h("a", { href: this.platformSpecificLink('store', '/collections/outdoor') }, "Outdoor")),
          h("div", { class: "sub-link" },
            h("a", { href: this.platformSpecificLink('store', '/collections/accessories') }, "Accessories")),
          h("div", { class: "sub-link" },
            h("a", { href: this.platformSpecificLink('store', '/collections/brands') }, "Brands")),
          h("div", null)))));
  }
  static get is() { return "nav-bar-v2"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["nav-bar-v2.css"]
  }; }
  static get styleUrls() { return {
    "$": ["nav-bar-v2.css"]
  }; }
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
    }
  }; }
  static get states() { return {
    "isSearchOpen": {},
    "currentMenu": {},
    "searchText": {}
  }; }
}
