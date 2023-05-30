import { Component, Host, Prop, State, getAssetPath, h } from '@stencil/core';
import { BLOG_URL, STORE_URL } from '../../utils/platform';
export class MobileNavBar {
  constructor() {
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
    return (h(Host, null,
      h("div", { class: "mobile-nav-bar" },
        h("div", { class: `mobile-nav-bar__icons ${this.isOpen ? 'mobile-nav-bar__icons--open' : ''}` },
          h("div", null, this.isOpen ? (h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/close.png'), alt: "Close Menu", style: { width: '0.88rem', height: '0.88rem' }, onClick: () => (this.isOpen = false) })) : (h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/hamburger.png'), alt: "Open Menu", style: { width: '1.13rem', height: '1.13rem', marginLeft: '-0.13rem' }, onClick: () => (this.isOpen = true) }))),
          h("div", { style: { display: 'flex' } },
            h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/shopping-bag.png'), alt: "Cart", style: { paddingRight: '0rem' } }),
            h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/user.png'), alt: "Account", style: { width: '0.9rem', height: '0.9rem' } }))),
        h("div", { class: `mobile-nav-bar__menu ${this.isOpen ? 'mobile-nav-bar__menu--open' : ''}` },
          h("img", { class: "mobile-nav-bar__logo", src: getAssetPath('./assets/leibal-logo.png'), alt: "Logo", onClick: () => {
              window.location.href = this.platformSpecificLink(this.platform, '/');
            } }),
          h("div", { style: { position: 'relative' } },
            h("div", { class: `mobile-nav-bar__menu-links-container ${this.isShowingLinks ? 'mobile-nav-bar__menu-links-container--open' : ''}` },
              this.linksType === 'blog' && (h("div", { class: "mobile-nav-bar__menu-links" },
                h("div", { onClick: () => this.hideLinks(), style: { display: 'flex', alignItems: 'center', marginBottom: '.5rem' } },
                  h("img", { src: getAssetPath('./assets/arrow.png'), style: {
                      width: '1rem',
                      filter: 'invert(1)',
                      transform: 'rotate(-180deg)',
                      marginRight: '0.5rem',
                    } }),
                  ' ',
                  "Stories"),
                h("div", null,
                  h("div", null,
                    h("a", { href: "#" }, "Architecture")),
                  h("div", null,
                    h("a", { href: "#" }, "Interiors")),
                  h("div", null,
                    h("a", { href: "#" }, "Furniture")),
                  h("div", null,
                    h("a", { href: "#" }, "Lighting")),
                  h("div", null,
                    h("a", { href: "#" }, "Objects")),
                  h("div", null,
                    h("a", { href: "#" }, "Travel"))))),
              this.linksType === 'store' && (h("div", { class: "mobile-nav-bar__menu-links" },
                h("div", { onClick: () => this.hideLinks(), style: { display: 'flex', alignItems: 'center', marginBottom: '1.5rem' } },
                  h("img", { src: getAssetPath('./assets/arrow.png'), style: {
                      width: '1rem',
                      filter: 'invert(1)',
                      transform: 'rotate(-180deg)',
                      marginRight: '0.5rem',
                    } }),
                  ' ',
                  "Store"),
                h("div", null,
                  h("div", null,
                    h("a", { href: "#" }, "Sofas")),
                  h("div", null,
                    h("a", { href: "#" }, "Lighting")),
                  h("div", null,
                    h("a", { href: "#" }, "Accessories")),
                  h("div", null,
                    h("a", { href: "#" }, "Lighting")),
                  h("div", null,
                    h("a", { href: "#" }, "Objects")),
                  h("div", null,
                    h("a", { href: "#" }, "Trinkets")))))),
            h("div", { class: "mobile-nav-bar__menu-items" },
              h("div", { class: "mobile-nav-bar__menu-item", onClick: () => {
                  this.showLinks('blog');
                } }, "Stories >"),
              h("div", { class: "mobile-nav-bar__menu-item", onClick: () => {
                  this.showLinks('store');
                } }, "Store >")),
            h("div", { class: "mobile-nav-bar__submenu-items" },
              h("div", { class: "mobile-nav-bar__submenu-item" }, "Submit"),
              h("div", { class: "mobile-nav-bar__submenu-item" }, "Subscribe"),
              h("div", { class: "mobile-nav-bar__submenu-item" }, "Account"),
              h("div", { class: "mobile-nav-bar__submenu-item" }, "Cart")),
            h("div", { class: "mobile-nav-bar__newsletter" },
              h("div", { class: "mobile-nav-bar__newsletter__header" }, "Newsletter"),
              h("div", { class: "mobile-nav-bar__newsletter__input" },
                h("input", { type: "text" }),
                h("button", null, "Send")))),
          h("div", { class: "mobile-nav-bar__links" },
            h("div", null,
              h("div", { class: "mobile-nav-bar__link-header" }, "About"),
              h("div", { class: "mobile-nav-bar__link-item" }, "Contact Us"),
              h("div", { class: "mobile-nav-bar__link-item" }, "Submit"),
              h("div", { class: "mobile-nav-bar__link-item" }, "FAQ"),
              h("div", { class: "mobile-nav-bar__link-item" }, "Privacy"),
              h("div", { class: "mobile-nav-bar__link-item" }, "Terms & Conditions"),
              h("div", { class: "mobile-nav-bar__link-item" }, "Trade Program")),
            h("div", null,
              h("div", { class: "mobile-nav-bar__link-header" }, "Connect"),
              h("div", { class: "mobile-nav-bar__link-item" }, "Pinterest"),
              h("div", { class: "mobile-nav-bar__link-item" }, "Instagram"),
              h("div", { class: "mobile-nav-bar__link-item" }, "Facebook"),
              h("div", { class: "mobile-nav-bar__link-item" }, "Twitter"),
              h("div", { class: "mobile-nav-bar__link-item" }, "Tumblr"),
              h("div", { class: "mobile-nav-bar__link-item" }, "LinkedIn")))))));
  }
  static get is() { return "mobile-nav-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mobile-nav-bar.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mobile-nav-bar.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
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
    "isOpen": {},
    "isShowingLinks": {},
    "linksType": {}
  }; }
}
