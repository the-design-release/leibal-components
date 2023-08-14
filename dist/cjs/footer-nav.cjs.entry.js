'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-31caa8e8.js');
const platform = require('./platform-aba5f316.js');

const footerNavCss = ":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.footer-nav{display:grid;gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:4rem;margin-top:4rem}@media (min-width:1024px){.footer-nav{display:grid;gap:2rem;grid-template-columns:repeat(10,minmax(0,1fr));margin-bottom:6rem;margin-top:6rem}}.footer-nav__column{display:flex;flex-direction:column;margin-bottom:3rem}@media (min-width:1024px){.footer-nav__column{grid-column:span 2/span 2;margin-bottom:0}}.footer-nav__column:last-child{grid-column:span 2/span 2;justify-content:space-between}.footer-nav__title{font-size:.75rem;font-weight:400;letter-spacing:.1em;margin-bottom:3rem}.footer-nav__link{color:var(--color-dark);display:block;font-size:11px;margin-bottom:.75rem;text-decoration:none;text-underline-offset:2px}.footer-nav__link:hover{text-decoration:underline}.footer-nav__link:last-child{margin-bottom:0}.footer-nav__email-form{margin-bottom:4rem}@media (min-width:1024px){.footer-nav__email-form{margin-bottom:0}}.footer-nav__email-form{flex-grow:1}.footer-nav__email-form form{border-bottom:1px solid var(--color-dark);display:flex;font-size:.88rem;padding-bottom:.5rem}.footer-nav__email-form input[type=email]{all:unset;display:block;flex-grow:1;width:100%}.footer-nav__email-form input[type=submit]{all:unset;display:block;font-size:11px}.footer-nav__trademark{font-size:.6rem;font-weight:300;text-transform:uppercase}";

let FooterNav = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.platform = 'blog';
  }
  platformSpecificLink(platform$1, path) {
    const platformUrl = platform$1 === 'store' ? platform.STORE_URL : platform.BLOG_URL;
    if (this.platform === platform$1) {
      return path;
    }
    else {
      return new URL(path, platformUrl).toString();
    }
  }
  render() {
    const storeNewsletterForm = (index.h("form", { action: "https://leibal.us4.list-manage.com/subscribe/post?u=9891199121e89a545e0ba572a&id=55fd30c180&f_id=005bb1ebf0", method: "post", target: "_self" }, index.h("input", { type: "email", value: "", name: "EMAIL", class: "required email", id: "mce-EMAIL", required: true }), index.h("div", { style: { position: 'absolute', left: '-5000px' }, "aria-hidden": "true" }, index.h("input", { placeholder: "Enter Email", type: "text", name: "b_9891199121e89a545e0ba572a_3a78fd6a2d", tabindex: "-1", value: "" })), index.h("input", { type: "submit", value: "Send", name: "subscribe", id: "mc-embedded-subscribe", class: "button" })));
    const blogNewsletterForm = (index.h("form", { action: "https://leibal.us4.list-manage.com/subscribe/post?u=9891199121e89a545e0ba572a&id=3a78fd6a2d&f_id=0057b1ebf0", method: "post", target: "_self" }, index.h("input", { type: "email", value: "", name: "EMAIL", class: "required email", id: "mce-EMAIL", required: true }), index.h("div", { style: { position: 'absolute', left: '-5000px' }, "aria-hidden": "true" }, index.h("input", { placeholder: "Enter Email", type: "text", name: "b_9891199121e89a545e0ba572a_3a78fd6a2d", tabindex: "-1", value: "" })), index.h("input", { type: "submit", value: "Send", name: "subscribe", id: "mc-embedded-subscribe", class: "button" })));
    return (index.h(index.Host, null, index.h("div", { class: "footer-nav" }, index.h("div", { class: "footer-nav__column" }, index.h("div", { class: "footer-nav__title" }, "Stories"), index.h("div", { class: "footer-nav__links" }, index.h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/architecture') }, "Architecture"), index.h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/interiors') }, "Interiors"), index.h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/furniture') }, "Furniture"), index.h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/lighting') }, "Lighting"), index.h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/products') }, "Objects"), index.h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/category/travel') }, "Travel"))), index.h("div", { class: "footer-nav__column" }, index.h("div", { class: "footer-nav__title" }, "Store"), index.h("div", { class: "footer-nav__links" }, index.h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collection/seating') }, "Seating"), index.h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collection/tables') }, "Tables"), index.h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collection/lighting') }, "Lighting"), index.h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collection/storage') }, "Storage"), index.h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collection/outdoor') }, "Outdoor"), index.h("a", { class: "footer-nav__link", href: this.platformSpecificLink('store', '/collection/accessories') }, "Accessories"))), index.h("div", { class: "footer-nav__column" }, index.h("div", { class: "footer-nav__title" }, "About"), index.h("div", { class: "footer-nav__links" }, index.h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/contact-us') }, "Contact Us"), index.h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/submissions-form') }, "Submit"), index.h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/info#faq') }, "FAQ"), index.h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/info#privacy') }, "Privacy"), index.h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/info#terms') }, "Terms & Conditions"), index.h("a", { class: "footer-nav__link", href: this.platformSpecificLink('blog', '/info#trades') }, "Trade Program"))), index.h("div", { class: "footer-nav__column" }, index.h("div", { class: "footer-nav__title" }, "Connect"), index.h("div", { class: "footer-nav__links" }, index.h("a", { class: "footer-nav__link", href: "https://www.pinterest.com/leibal/" }, "Pinterest"), index.h("a", { class: "footer-nav__link", href: "https://instagram.com/leibal" }, "Instagram"), index.h("a", { class: "footer-nav__link", href: "http://www.facebook.com/Leibal" }, "Facebook"), index.h("a", { class: "footer-nav__link", href: "https://leibal.tumblr.com/" }, "Tumblr"), index.h("a", { class: "footer-nav__link", href: "https://www.linkedin.com/company/leibal/" }, "LinkedIn"), index.h("a", { class: "footer-nav__link", href: "https://www.tiktok.com/@leibal" }, "TikTok"))), index.h("div", { class: "footer-nav__column" }, index.h("div", { class: "footer-nav__title" }, "Newsletter"), index.h("div", { class: "footer-nav__email-form" }, this.platform === 'blog' ? blogNewsletterForm : storeNewsletterForm), index.h("div", { class: "footer-nav__trademark" }, "\u00A9 ", new Date().getUTCFullYear(), " LEIBAL LLC. ALL RIGHTS RESERVED")))));
  }
};
FooterNav.style = footerNavCss;

exports.footer_nav = FooterNav;
