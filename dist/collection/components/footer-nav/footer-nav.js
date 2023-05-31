import { Component, Host, h, Prop } from '@stencil/core';
export class FooterNav {
  constructor() {
    this.platform = 'blog';
  }
  render() {
    const storeNewsletterForm = (h("form", { action: "https://leibal.us4.list-manage.com/subscribe/post?u=9891199121e89a545e0ba572a&id=55fd30c180&f_id=005bb1ebf0", method: "post", target: "_self" },
      h("input", { type: "email", value: "", name: "EMAIL", class: "required email", id: "mce-EMAIL", required: true }),
      h("div", { style: { position: 'absolute', left: '-5000px' }, "aria-hidden": "true" },
        h("input", { type: "text", name: "b_9891199121e89a545e0ba572a_3a78fd6a2d", tabindex: "-1", value: "" })),
      h("input", { type: "submit", value: "Send", name: "subscribe", id: "mc-embedded-subscribe", class: "button" })));
    const blogNewsletterForm = (h("form", { action: "https://leibal.us4.list-manage.com/subscribe/post?u=9891199121e89a545e0ba572a&id=3a78fd6a2d&f_id=0057b1ebf0", method: "post", target: "_self" },
      h("input", { type: "email", value: "", name: "EMAIL", class: "required email", id: "mce-EMAIL", required: true }),
      h("div", { style: { position: 'absolute', left: '-5000px' }, "aria-hidden": "true" },
        h("input", { type: "text", name: "b_9891199121e89a545e0ba572a_3a78fd6a2d", tabindex: "-1", value: "" })),
      h("input", { type: "submit", value: "Send", name: "subscribe", id: "mc-embedded-subscribe", class: "button" })));
    return (h(Host, null,
      h("div", { class: "footer-nav" },
        h("div", { class: "footer-nav__column" },
          h("div", { class: "footer-nav__title" }, "Stories"),
          h("div", { class: "footer-nav__links" },
            h("a", { class: "footer-nav__link", href: "#" }, "Architecture"),
            h("a", { class: "footer-nav__link", href: "#" }, "Interiors"),
            h("a", { class: "footer-nav__link", href: "#" }, "Furniture"),
            h("a", { class: "footer-nav__link", href: "#" }, "Lighting"),
            h("a", { class: "footer-nav__link", href: "#" }, "Products"),
            h("a", { class: "footer-nav__link", href: "#" }, "Travel"))),
        h("div", { class: "footer-nav__column" },
          h("div", { class: "footer-nav__title" }, "Store"),
          h("div", { class: "footer-nav__links" },
            h("a", { class: "footer-nav__link", href: "#" }, "Sofas"),
            h("a", { class: "footer-nav__link", href: "#" }, "Chairs"),
            h("a", { class: "footer-nav__link", href: "#" }, "Tables"),
            h("a", { class: "footer-nav__link", href: "#" }, "Storage"),
            h("a", { class: "footer-nav__link", href: "#" }, "Lighting"),
            h("a", { class: "footer-nav__link", href: "#" }, "Accessories"))),
        h("div", { class: "footer-nav__column" },
          h("div", { class: "footer-nav__title" }, "About"),
          h("div", { class: "footer-nav__links" },
            h("a", { class: "footer-nav__link", href: "#" }, "Contact Us"),
            h("a", { class: "footer-nav__link", href: "#" }, "Submit"),
            h("a", { class: "footer-nav__link", href: "#" }, "FAQ"),
            h("a", { class: "footer-nav__link", href: "#" }, "Privacy"),
            h("a", { class: "footer-nav__link", href: "#" }, "Terms & Conditions"),
            h("a", { class: "footer-nav__link", href: "#" }, "Trade Program"))),
        h("div", { class: "footer-nav__column" },
          h("div", { class: "footer-nav__title" }, "Connect"),
          h("div", { class: "footer-nav__links" },
            h("a", { class: "footer-nav__link", href: "#" }, "Pinterest"),
            h("a", { class: "footer-nav__link", href: "#" }, "Instagram"),
            h("a", { class: "footer-nav__link", href: "#" }, "Facebook"),
            h("a", { class: "footer-nav__link", href: "#" }, "Twitter"),
            h("a", { class: "footer-nav__link", href: "#" }, "Tumblr"),
            h("a", { class: "footer-nav__link", href: "#" }, "LinkedIn"))),
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
