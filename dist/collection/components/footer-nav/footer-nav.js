import { Component, Host, h } from '@stencil/core';
export class FooterNav {
  render() {
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
          h("div", { class: "footer-nav__title" }, "Subscribe"),
          h("div", { class: "footer-nav__email-form" }),
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
}
