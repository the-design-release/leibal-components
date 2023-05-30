import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const footerNavCss = ":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.footer-nav{display:grid;gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:4rem;margin-top:4rem}@media (min-width:1024px){.footer-nav{display:grid;gap:2rem;grid-template-columns:repeat(10,minmax(0,1fr));margin-bottom:6rem;margin-top:6rem}}.footer-nav__column{display:flex;flex-direction:column;margin-bottom:3rem}@media (min-width:1024px){.footer-nav__column{grid-column:span 2/span 2;margin-bottom:0}}.footer-nav__column:last-child{grid-column:span 2/span 2;justify-content:space-between}.footer-nav__title{font-size:1rem;font-weight:400;letter-spacing:.1em;line-height:1.5rem;margin-bottom:3rem}.footer-nav__link{color:var(--color-dark);display:block;font-size:13px;margin-bottom:.75rem;text-decoration:none;text-underline-offset:2px}.footer-nav__link:hover{text-decoration:underline}.footer-nav__link:last-child{margin-bottom:0}.footer-nav__trademark{font-size:9px;font-weight:300;text-transform:uppercase}";

let FooterNav$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("div", { class: "footer-nav" }, h("div", { class: "footer-nav__column" }, h("div", { class: "footer-nav__title" }, "Stories"), h("div", { class: "footer-nav__links" }, h("a", { class: "footer-nav__link", href: "#" }, "Architecture"), h("a", { class: "footer-nav__link", href: "#" }, "Interiors"), h("a", { class: "footer-nav__link", href: "#" }, "Furniture"), h("a", { class: "footer-nav__link", href: "#" }, "Lighting"), h("a", { class: "footer-nav__link", href: "#" }, "Products"), h("a", { class: "footer-nav__link", href: "#" }, "Travel"))), h("div", { class: "footer-nav__column" }, h("div", { class: "footer-nav__title" }, "Store"), h("div", { class: "footer-nav__links" }, h("a", { class: "footer-nav__link", href: "#" }, "Sofas"), h("a", { class: "footer-nav__link", href: "#" }, "Chairs"), h("a", { class: "footer-nav__link", href: "#" }, "Tables"), h("a", { class: "footer-nav__link", href: "#" }, "Storage"), h("a", { class: "footer-nav__link", href: "#" }, "Lighting"), h("a", { class: "footer-nav__link", href: "#" }, "Accessories"))), h("div", { class: "footer-nav__column" }, h("div", { class: "footer-nav__title" }, "About"), h("div", { class: "footer-nav__links" }, h("a", { class: "footer-nav__link", href: "#" }, "Contact Us"), h("a", { class: "footer-nav__link", href: "#" }, "Submit"), h("a", { class: "footer-nav__link", href: "#" }, "FAQ"), h("a", { class: "footer-nav__link", href: "#" }, "Privacy"), h("a", { class: "footer-nav__link", href: "#" }, "Terms & Conditions"), h("a", { class: "footer-nav__link", href: "#" }, "Trade Program"))), h("div", { class: "footer-nav__column" }, h("div", { class: "footer-nav__title" }, "Connect"), h("div", { class: "footer-nav__links" }, h("a", { class: "footer-nav__link", href: "#" }, "Pinterest"), h("a", { class: "footer-nav__link", href: "#" }, "Instagram"), h("a", { class: "footer-nav__link", href: "#" }, "Facebook"), h("a", { class: "footer-nav__link", href: "#" }, "Twitter"), h("a", { class: "footer-nav__link", href: "#" }, "Tumblr"), h("a", { class: "footer-nav__link", href: "#" }, "LinkedIn"))), h("div", { class: "footer-nav__column" }, h("div", { class: "footer-nav__title" }, "Newsletter: "), h("div", { class: "footer-nav__email-form" }), h("div", { class: "footer-nav__trademark" }, "\u00A9 ", new Date().getUTCFullYear(), " LEIBAL LLC. ALL RIGHTS RESERVED")))));
  }
  static get style() { return footerNavCss; }
};
FooterNav$1 = /*@__PURE__*/ proxyCustomElement(FooterNav$1, [1, "footer-nav"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["footer-nav"];
  components.forEach(tagName => { switch (tagName) {
    case "footer-nav":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FooterNav$1);
      }
      break;
  } });
}

const FooterNav = FooterNav$1;
const defineCustomElement = defineCustomElement$1;

export { FooterNav, defineCustomElement };
