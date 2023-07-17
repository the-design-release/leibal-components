import { Component, Element, Host, Prop, State, getAssetPath, h } from '@stencil/core';
import { BLOG_URL, STORE_URL } from '../../utils/platform';
export class MobileNavBar {
  constructor() {
    this.isOpen = false;
    this.platform = 'blog';
    this.isShowingLinks = false;
    this.linksType = 'blog';
    this.searchText = '';
  }
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.windowResizeEl.style.height = `${window.innerHeight}px`;
    });
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
  submitSearch() {
    if (this.platform === 'blog') {
      window.location.href = this.platformSpecificLink('blog', `/?s=${this.searchText}`);
    }
    else {
      window.location.href = this.platformSpecificLink('store', `/search?q=${this.searchText}`);
    }
  }
  render() {
    return (h(Host, null,
      h("div", { class: "mobile-nav-bar" },
        h("div", { class: `mobile-nav-bar__icons ${this.isOpen ? 'mobile-nav-bar__icons--open' : ''}` },
          h("div", null, this.isOpen ? (h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/close.png'), alt: "Close Menu", style: { width: '0.88rem', height: '0.88rem' }, onClick: () => (this.isOpen = false) })) : (h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/hamburger.png'), alt: "Open Menu", style: { width: '1.13rem', height: '1.13rem', marginLeft: '-0.13rem' }, onClick: () => (this.isOpen = true) }))),
          h("div", { style: { display: 'flex' } },
            h("a", { href: this.platformSpecificLink('store', '/cart') },
              h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/shopping-bag.png'), alt: "Cart", style: { paddingRight: '0.5rem' } })),
            h("a", { href: this.platformSpecificLink('blog', '/moods') },
              h("img", { class: "mobile-nav-bar__icon", src: getAssetPath('./assets/user.png'), alt: "Account", style: { width: '0.9rem', height: '0.9rem', paddingLeft: '0.5rem' } })))),
        h("div", { ref: () => this.windowResizeEl, class: `mobile-nav-bar__menu ${this.isOpen ? 'mobile-nav-bar__menu--open' : ''}` },
          h("div", null,
            h("img", { class: "mobile-nav-bar__logo", src: getAssetPath('./assets/leibal-logo.png'), alt: "Logo", style: { marginBottom: '3.5rem' }, onClick: () => {
                window.location.href = this.platformSpecificLink(this.platform, '/');
              } }),
            !this.isShowingLinks && (h("div", null,
              h("div", { class: "mobile-nav-bar__menu-item", onClick: () => {
                  this.showLinks('blog');
                } }, "Stories"),
              h("div", { class: "mobile-nav-bar__menu-item", onClick: () => {
                  this.showLinks('store');
                } }, "Store"))),
            h("div", { style: { position: 'relative' } },
              h("div", { class: `mobile-nav-bar__menu-links-container ${this.isShowingLinks ? 'mobile-nav-bar__menu-links-container--open' : ''}` },
                this.linksType === 'blog' && (h("div", { class: "mobile-nav-bar__menu-links" },
                  h("div", { onClick: () => this.hideLinks(), style: { display: 'flex', alignItems: 'center', marginBottom: '1.5rem' } },
                    h("img", { src: getAssetPath('./assets/arrow.png'), style: {
                        width: '1rem',
                        filter: 'invert(1)',
                        transform: 'rotate(-180deg)',
                        marginRight: '0.5rem',
                      } }),
                    ' ',
                    "Stories"),
                  h("div", { style: { marginLeft: '1.5rem' } },
                    h("div", null,
                      h("a", { href: this.platformSpecificLink('blog', '/') }, "Home")),
                    h("div", null,
                      h("a", { href: this.platformSpecificLink('blog', '/category/architecture') }, "Architecture")),
                    h("div", null,
                      h("a", { href: this.platformSpecificLink('blog', '/category/interiors') }, "Interiors")),
                    h("div", null,
                      h("a", { href: this.platformSpecificLink('blog', '/category/furniture') }, "Furniture")),
                    h("div", null,
                      h("a", { href: this.platformSpecificLink('blog', '/category/lighting') }, "Lighting")),
                    h("div", null,
                      h("a", { href: this.platformSpecificLink('blog', '/category/products') }, "Objects")),
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
                  h("div", { style: { marginLeft: '1.5rem' } },
                    h("div", null,
                      h("a", { href: this.platformSpecificLink('store', '/') }, "Home")),
                    h("div", null,
                      h("a", { href: this.platformSpecificLink('store', '/collections/seating') }, "Seating")),
                    h("div", null,
                      h("a", { href: this.platformSpecificLink('store', '/collections/tables') }, "Tables")),
                    h("div", null,
                      h("a", { href: this.platformSpecificLink('store', '/collections/lighting') }, "Lighting")),
                    h("div", null,
                      h("a", { href: this.platformSpecificLink('store', '/collections/storage') }, "Storage")),
                    h("div", null,
                      h("a", { href: this.platformSpecificLink('store', '/collections/outdoor') }, "Outdoor")),
                    h("div", null,
                      h("a", { href: this.platformSpecificLink('store', '/collections/accessories') }, "Accessories")))))))),
          h("div", { class: "mobile-nav-bar__submenu-items", style: { visibility: this.isShowingLinks ? 'hidden' : 'inherit' } },
            h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/submissions-form') }, "Submit"),
            h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/subscribe') }, "Subscribe"),
            h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('blog', '/my-account') }, "Account"),
            h("a", { class: "mobile-nav-bar__submenu-item", href: this.platformSpecificLink('store', '/cart') }, "Cart")),
          h("div", { class: "mobile-nav-bar__links" },
            h("div", null,
              h("div", { class: "mobile-nav-bar__link-header" }, "About"),
              h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/contact-us') }, "Contact Us"),
              h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/submissions-form') }, "Submit"),
              h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/info#faq') }, "FAQ"),
              h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/info#privacy') }, "Privacy"),
              h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/info#terms') }, "Terms & Conditions"),
              h("a", { class: "mobile-nav-bar__link-item", href: this.platformSpecificLink('blog', '/info#trades') }, "Trade Program")),
            h("div", null,
              h("div", { class: "mobile-nav-bar__link-header" }, "Connect"),
              h("a", { class: "mobile-nav-bar__link-item", href: "https://www.pinterest.com/leibal/" }, "Pinterest"),
              h("a", { class: "mobile-nav-bar__link-item", href: "https://instagram.com/leibal" }, "Instagram"),
              h("a", { class: "mobile-nav-bar__link-item", href: "http://www.facebook.com/Leibal" }, "Facebook"),
              h("a", { class: "mobile-nav-bar__link-item", href: "https://leibal.tumblr.com/" }, "Tumblr"),
              h("a", { class: "mobile-nav-bar__link-item", href: "https://www.linkedin.com/company/leibal/" }, "LinkedIn"),
              h("a", { class: "mobile-nav-bar__link-item", href: "https://www.tiktok.com/@leibal" }, "TikTok"))),
          h("div", { class: "mobile-nav-bar__search" },
            h("input", { class: "navbar__search__input", onInput: e => {
                this.searchText = e.target.value;
              }, onKeyPress: e => {
                if (e.key === 'Enter') {
                  this.submitSearch();
                }
              }, type: "text", placeholder: "Start Typing..." }),
            h("button", { onClick: () => {
                this.submitSearch();
              } }, "Search"))))));
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
    "linksType": {},
    "searchText": {}
  }; }
  static get elementRef() { return "windowResizeEl"; }
}
