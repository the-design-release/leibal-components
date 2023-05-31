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
            h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/shopping-bag.png'), alt: "Cart", style: { paddingRight: '0.5rem' } }),
            h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/user.png'), alt: "Account", style: { width: '0.9rem', height: '0.9rem', paddingLeft: '0.5rem' } }))),
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
                    h("a", { href: this.platformSpecificLink('blog', '/category/architecture') }, "Architecture")),
                  h("div", null,
                    h("a", { href: this.platformSpecificLink('blog', '/category/interiors') }, "Interiors")),
                  h("div", null,
                    h("a", { href: this.platformSpecificLink('blog', '/category/furniture') }, "Furniture")),
                  h("div", null,
                    h("a", { href: this.platformSpecificLink('blog', '/category/lighting') }, "Lighting")),
                  h("div", null,
                    h("a", { href: this.platformSpecificLink('blog', '/category/objects') }, "Objects")),
                  h("div", null,
                    h("a", { href: this.platformSpecificLink('blog', '/category/travel') }, "Travel"))))),
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
                    h("a", { href: this.platformSpecificLink('store', '/collection/seating') }, "Seating")),
                  h("div", null,
                    h("a", { href: this.platformSpecificLink('store', '/collection/tables') }, "Tables")),
                  h("div", null,
                    h("a", { href: this.platformSpecificLink('store', '/collection/lighting') }, "Lighting")),
                  h("div", null,
                    h("a", { href: this.platformSpecificLink('store', '/collection/storage') }, "Storage")),
                  h("div", null,
                    h("a", { href: this.platformSpecificLink('store', '/collection/outdoor') }, "Outdoor")),
                  h("div", null,
                    h("a", { href: this.platformSpecificLink('store', '/collection/accessories') }, "Accessories")))))),
            h("div", { class: "mobile-nav-bar__menu-items" },
              h("div", { class: "mobile-nav-bar__menu-item", onClick: () => {
                  this.showLinks('blog');
                } }, "Stories >"),
              h("div", { class: "mobile-nav-bar__menu-item", onClick: () => {
                  this.showLinks('store');
                } }, "Store >")),
            h("div", { class: "mobile-nav-bar__submenu-items" },
              h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/submissions') }, "Submit"),
              h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/subscribe') }, "Subscribe"),
              h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/users') }, "Account"),
              h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('store', '/cart') }, "Cart"))),
          h("div", { class: "mobile-nav-bar__links" },
            h("div", null,
              h("div", { class: "mobile-nav-bar__link-header" }, "About"),
              h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/contact-us') }, "Contact Us"),
              h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/submissions') }, "Submit"),
              h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/faq') }, "FAQ"),
              h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/privacy') }, "Privacy"),
              h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/toc') }, "Terms & Conditions"),
              h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/trades') }, "Trade Program")),
            h("div", null,
              h("div", { class: "mobile-nav-bar__link-header" }, "Connect"),
              h("a", { class: "mobile-nav-bar__link-item", href: "https://www.pinterest.com/leibal/" }, "Pinterest"),
              h("a", { class: "mobile-nav-bar__link-item", href: "https://instagram.com/leibal" }, "Instagram"),
              h("a", { class: "mobile-nav-bar__link-item", href: "http://www.facebook.com/Leibal" }, "Facebook"),
              h("a", { class: "mobile-nav-bar__link-item", href: "https://leibal.tumblr.com/" }, "Tumblr"),
              h("a", { class: "mobile-nav-bar__link-item", href: "https://www.linkedin.com/company/leibal/" }, "LinkedIn"),
              h("a", { class: "mobile-nav-bar__link-item", href: "https://www.tiktok.com/leibal" }, "TikTok")))))));
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