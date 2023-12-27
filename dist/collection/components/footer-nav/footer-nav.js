import { Component, Host, h, Prop } from '@stencil/core';
import { BLOG_URL, STORE_URL } from '../../utils/platform';
export class FooterNav {
  constructor() {
    this.platform = 'blog';
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
    const storeNewsletterForm = (h("form", { action: "https://leibal.us4.list-manage.com/subscribe/post?u=9891199121e89a545e0ba572a&id=55fd30c180&f_id=005bb1ebf0", method: "post", target: "_self" },
      h("input", { type: "email", value: "", name: "EMAIL", class: "required email", id: "mce-EMAIL", required: true }),
      h("div", { style: { position: 'absolute', left: '-5000px' }, "aria-hidden": "true" },
        h("input", { placeholder: "Enter Email", type: "text", name: "b_9891199121e89a545e0ba572a_3a78fd6a2d", tabindex: "-1", value: "" })),
      h("input", { type: "submit", value: "Send", name: "subscribe", id: "mc-embedded-subscribe", class: "button" })));
    const blogNewsletterForm = (h("form", { action: "https://leibal.us4.list-manage.com/subscribe/post?u=9891199121e89a545e0ba572a&id=3a78fd6a2d&f_id=0057b1ebf0", method: "post", target: "_self" },
      h("input", { type: "email", value: "", name: "EMAIL", class: "required email", id: "mce-EMAIL", required: true }),
      h("div", { style: { position: 'absolute', left: '-5000px' }, "aria-hidden": "true" },
        h("input", { placeholder: "Enter Email", type: "text", name: "b_9891199121e89a545e0ba572a_3a78fd6a2d", tabindex: "-1", value: "" })),
      h("input", { type: "submit", value: "Send", name: "subscribe", id: "mc-embedded-subscribe", class: "button" })));
    return (h(Host, null,
      h("div", { class: "footer-nav" },
        h("div", { class: "footer-nav__column" },
          h("div", { class: "footer-nav__title" }, "Stories"),
          h("div", { class: "footer-nav__links" },
            h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/architecture') }, "Architecture"),
            h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/interiors') }, "Interiors"),
            h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/furniture') }, "Furniture"),
            h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/lighting') }, "Lighting"),
            h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/products') }, "Objects"),
            h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/travel') }, "Travel"))),
        h("div", { class: "footer-nav__column" },
          h("div", { class: "footer-nav__title" }, "Store"),
          h("div", { class: "footer-nav__links" },
            h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collections/seating') }, "Seating"),
            h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collections/tables') }, "Tables"),
            h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collections/lighting') }, "Lighting"),
            h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collections/storage') }, "Storage"),
            h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collections/outdoor') }, "Outdoor"),
            h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collections/accessories') }, "Accessories"))),
        h("div", { class: "footer-nav__column" },
          h("div", { class: "footer-nav__title" }, "About"),
          h("div", { class: "footer-nav__links" },
            h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/contact-us') }, "Contact Us"),
            h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/submissions-form') }, "Submit"),
            h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/info#faq') }, "FAQ"),
            h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/info#privacy') }, "Privacy"),
            h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/info#terms') }, "Terms & Conditions"),
            h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/info#trades') }, "Trade Program"))),
        h("div", { class: "footer-nav__column" },
          h("div", { class: "footer-nav__title" }, "Connect"),
          h("div", { class: "footer-nav__links" },
            h("a", { class: "footer-nav__link", href: "https://www.pinterest.com/leibal/" }, "Pinterest"),
            h("a", { class: "footer-nav__link", href: "https://instagram.com/leibal" }, "Instagram"),
            h("a", { class: "footer-nav__link", href: "http://www.facebook.com/Leibal" }, "Facebook"),
            h("a", { class: "footer-nav__link", href: "https://leibal.tumblr.com/" }, "Tumblr"),
            h("a", { class: "footer-nav__link", href: "https://www.linkedin.com/company/leibal/" }, "LinkedIn"),
            h("a", { class: "footer-nav__link", href: "https://www.tiktok.com/@leibal" }, "TikTok"))),
        h("div", { class: "footer-nav__column" },
          h("div", { class: "footer-nav__title" }, "Newsletter"),
          h("div", { class: "footer-nav__email-form" }, this.platform === 'blog' ? blogNewsletterForm : storeNewsletterForm),
          h("div", { class: "footer-nav__trademark" },
            "\u00A9 ",
            new Date().getUTCFullYear(),
            " LEIBAL LLC. ALL RIGHTS RESERVED")))));
  }
  static get is() { return "footer-nav"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["footer-nav.css"]
  }; }
  static get styleUrls() { return {
    "$": ["footer-nav.css"]
  }; }
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
}
