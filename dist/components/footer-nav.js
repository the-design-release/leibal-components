import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { S as STORE_URL, B as BLOG_URL } from './platform.js';

const footerNavCss = ":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.footer-nav{display:grid;gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:4rem;margin-top:4rem}@media (min-width:1024px){.footer-nav{display:grid;gap:2rem;grid-template-columns:repeat(10,minmax(0,1fr));margin-bottom:6rem;margin-top:6rem}}.footer-nav__column{display:flex;flex-direction:column;margin-bottom:3rem}@media (min-width:1024px){.footer-nav__column{grid-column:span 2/span 2;margin-bottom:0}}.footer-nav__column:last-child{grid-column:span 2/span 2;justify-content:space-between}.footer-nav__title{font-size:.75rem;font-weight:400;letter-spacing:.1em;margin-bottom:3rem}.footer-nav__link{color:var(--color-dark);display:block;font-size:11px;margin-bottom:.75rem;text-decoration:none;text-underline-offset:2px}.footer-nav__link:hover{text-decoration:underline}.footer-nav__link:last-child{margin-bottom:0}.footer-nav__email-form{margin-bottom:4rem}@media (min-width:1024px){.footer-nav__email-form{margin-bottom:0}}.footer-nav__email-form{flex-grow:1}.footer-nav__email-form form{border-bottom:1px solid var(--color-dark);display:flex;font-size:.88rem;padding-bottom:.5rem}.footer-nav__email-form input[type=email]{all:unset;display:block;flex-grow:1;width:100%}.footer-nav__email-form input[type=submit]{all:unset;display:block;font-size:11px}.footer-nav__trademark{font-size:.6rem;font-weight:300;text-transform:uppercase}";

let FooterNav$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
    const storeNewsletterForm = (h("form", { action: "https://leibal.us4.list-manage.com/subscribe/post?u=9891199121e89a545e0ba572a&id=55fd30c180&f_id=005bb1ebf0", method: "post", target: "_self" }, h("input", { type: "email", value: "", name: "EMAIL", class: "required email", id: "mce-EMAIL", required: true }), h("div", { style: { position: 'absolute', left: '-5000px' }, "aria-hidden": "true" }, h("input", { placeholder: "Enter Email", type: "text", name: "b_9891199121e89a545e0ba572a_3a78fd6a2d", tabindex: "-1", value: "" })), h("input", { type: "submit", value: "Send", name: "subscribe", id: "mc-embedded-subscribe", class: "button" })));
    const blogNewsletterForm = (h("form", { action: "https://leibal.us4.list-manage.com/subscribe/post?u=9891199121e89a545e0ba572a&id=3a78fd6a2d&f_id=0057b1ebf0", method: "post", target: "_self" }, h("input", { type: "email", value: "", name: "EMAIL", class: "required email", id: "mce-EMAIL", required: true }), h("div", { style: { position: 'absolute', left: '-5000px' }, "aria-hidden": "true" }, h("input", { placeholder: "Enter Email", type: "text", name: "b_9891199121e89a545e0ba572a_3a78fd6a2d", tabindex: "-1", value: "" })), h("input", { type: "submit", value: "Send", name: "subscribe", id: "mc-embedded-subscribe", class: "button" })));
    return (h(Host, null, h("div", { class: "footer-nav" }, h("div", { class: "footer-nav__column" }, h("div", { class: "footer-nav__title" }, "Stories"), h("div", { class: "footer-nav__links" }, h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/architecture') }, "Architecture"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/interiors') }, "Interiors"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/furniture') }, "Furniture"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/lighting') }, "Lighting"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/products') }, "Objects"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/travel') }, "Travel"))), h("div", { class: "footer-nav__column" }, h("div", { class: "footer-nav__title" }, "Store"), h("div", { class: "footer-nav__links" }, h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collection/seating') }, "Seating"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collection/tables') }, "Tables"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collection/lighting') }, "Lighting"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collection/storage') }, "Storage"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collection/outdoor') }, "Outdoor"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collection/accessories') }, "Accessories"))), h("div", { class: "footer-nav__column" }, h("div", { class: "footer-nav__title" }, "About"), h("div", { class: "footer-nav__links" }, h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/contact-us') }, "Contact Us"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/submissions-form') }, "Submit"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/info#faq') }, "FAQ"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/info#privacy') }, "Privacy"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/info#terms') }, "Terms & Conditions"), h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/info#trades') }, "Trade Program"))), h("div", { class: "footer-nav__column" }, h("div", { class: "footer-nav__title" }, "Connect"), h("div", { class: "footer-nav__links" }, h("a", { class: "footer-nav__link", href: "https://www.pinterest.com/leibal/" }, "Pinterest"), h("a", { class: "footer-nav__link", href: "https://instagram.com/leibal" }, "Instagram"), h("a", { class: "footer-nav__link", href: "http://www.facebook.com/Leibal" }, "Facebook"), h("a", { class: "footer-nav__link", href: "https://leibal.tumblr.com/" }, "Tumblr"), h("a", { class: "footer-nav__link", href: "https://www.linkedin.com/company/leibal/" }, "LinkedIn"), h("a", { class: "footer-nav__link", href: "https://www.tiktok.com/@leibal" }, "TikTok"))), h("div", { class: "footer-nav__column" }, h("div", { class: "footer-nav__title" }, "Newsletter"), h("div", { class: "footer-nav__email-form" }, this.platform === 'blog' ? blogNewsletterForm : storeNewsletterForm), h("div", { class: "footer-nav__trademark" }, "\u00A9 ", new Date().getUTCFullYear(), " LEIBAL LLC. ALL RIGHTS RESERVED")))));
  }
  static get style() { return footerNavCss; }
};
FooterNav$1 = /*@__PURE__*/ proxyCustomElement(FooterNav$1, [1, "footer-nav", {
    "platform": [1]
  }]);
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
