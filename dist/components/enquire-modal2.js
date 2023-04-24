import { HTMLElement, h, Host, getAssetPath, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './simple-button2.js';
import { d as defineCustomElement$2 } from './simple-input2.js';
import { d as defineCustomElement$1 } from './tele-portal2.js';

const enquireModalCss = ".enquire-card{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;cursor:pointer;display:block;font-family:var(--font-family)}@media (min-width:1024px){.enquire-card{display:grid;gap:2rem;grid-template-columns:repeat(12,minmax(0,1fr))}}.enquire-card{grid-column:1/4}@media (min-width:1024px){.enquire-card__preview-image{grid-column:span 8/span 8}}.enquire-card__preview-image{aspect-ratio:auto 1/1;overflow:hidden;position:relative;width:100%}.enquire-card__preview-image>*{background-position:50%;background-size:cover;height:100%;opacity:0;position:absolute;transition:opacity .3s ease-in-out;width:100%}.enquire-card__preview-image:hover>:nth-child(2),.enquire-card__preview-image>:first-child{opacity:1}.enquire-card__info{display:flex;flex-direction:column;font-size:9px;font-weight:300}@media (min-width:1024px){.enquire-card__info{grid-column:span 4/span 4;justify-content:space-between}}.enquire-card__info__enquire{margin-bottom:.25rem;text-transform:uppercase}.enquire-card__info__title{font-weight:400;text-transform:uppercase}.enquire-card__button{grid-column:span 8/span 8}.enquire-modal__modal{background:rgba(0,0,0,.5);bottom:0;left:0;opacity:0;position:fixed;right:0;top:0;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;visibility:hidden;z-index:1000}.enquire-modal__modal--visible{opacity:1;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;visibility:visible}.enquire-modal__modal__content{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));padding-left:2rem;padding-right:2rem;position:relative}@media (min-width:1024px){.enquire-modal__modal__content{display:grid;gap:2rem;grid-template-columns:repeat(10,minmax(0,1fr));padding-left:4rem;padding-right:4rem}}.enquire-modal__modal__content>div{padding-bottom:2rem;padding-top:2rem}@media (min-width:1024px){.enquire-modal__modal__content>div{padding-bottom:3rem;padding-top:3rem}}.enquire-modal__modal__content>div:first-child{display:none}@media (min-width:1024px){.enquire-modal__modal__content>div:first-child{display:grid}}.enquire-modal__modal__content>div:last-child{padding:0}.enquire-modal__modal__form{border:none;grid-column:span 5/span 5}@media (min-width:1024px){.enquire-modal__modal__form{border:1px solid #eaeaea;border-bottom:none;border-top:none;padding-left:2rem;padding-right:2rem}}.enquire-modal__modal__form>div{display:block}@media (min-width:1024px){.enquire-modal__modal__form>div{display:grid;gap:2rem;grid-template-columns:repeat(2,minmax(0,1fr))}}.enquire-modal__modal__form>div>*{margin-bottom:2rem}@media (min-width:1024px){.enquire-modal__modal__form>div>*{margin-bottom:0}}.enquire-modal__modal__form__message{grid-column:span 2/span 2;grid-row:span 2/span 2}.enquire-modal__modal__form__message__title{font-size:13px;font-weight:300;margin-bottom:1rem}.enquire-modal__modal__form__message__body{border:1px solid #eaeaea;font-size:13px;font-weight:300;letter-spacing:.05em;line-height:1.5rem;max-height:185px;overflow-y:auto;padding:1rem}.enquire-modal__modal__form__message__body p{margin-bottom:1rem;margin-top:1rem}.enquire-modal__modal__form__message__body p:first-child{margin-top:0}.enquire-modal__modal__form__message__body p:last-child{margin-bottom:0}.enquire-modal__modal__submit{display:block;grid-column:span 2/span 2}@media (min-width:1024px){.enquire-modal__modal__submit{display:flex;flex-direction:column;justify-content:space-between}}.enquire-modal__modal__submit__disclaimer{font-size:9px;letter-spacing:.1em;margin-bottom:2rem}.enquire-modal__modal__submit__disclaimer a{color:#000}.enquire-modal__modal__close{cursor:pointer;font-size:1.25rem;font-weight:300;line-height:1.75rem;line-height:1;position:absolute;right:.75rem;top:.75rem}.enquire-modal__modal__close img{width:1rem}.grow-wrap{display:grid}.grow-wrap:after{content:attr(data-replicated-value) \" \";visibility:hidden;white-space:pre-wrap}.grow-wrap>textarea{overflow:hidden;resize:none}.grow-wrap:after,.grow-wrap>textarea{border:none;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:12px;font-weight:300;grid-area:1/1/2/2;letter-spacing:1px;margin-left:-1px;outline:none;width:100%}";

let EnquireModal = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.isModalOpen = false;
    this.formState = {
      firstName: '',
      lastName: '',
      email: '',
      location: '',
      moreText: '',
    };
    this.renderEnquireCard = () => (h("div", { class: "col-span-3 w-full cursor-pointer enquire-card", onClick: this.handleEnquireClick.bind(this) }, h("div", { class: "enquire-card__preview-image" }, h("div", { style: { backgroundImage: `url(${this.previewImage})` } })), h("div", { class: "enquire-card__info" }, h("div", { class: "mb-8" }, h("div", { class: "enquire-card__info__enquire" }, "Enquire About"), h("div", { class: "enquire-card__info__title" }, this.postTitle)), h("div", null, "Find out more information regarding purchasing, dimensions or lead times.")), h("div", { class: "text-xl enquire-card__button" }, h("simple-button", null, "Enquire"))));
  }
  componentWillLoad() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentDidLoad() {
    window.dispatchEvent(new Event('scroll'));
  }
  disconnectedCallback() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  // Calculate the position on the screen.
  getContentPageOffset() {
    // NOTE: This is a bit fucky, but works for me for now.
    // Get the child of the element so we can have borders between each grid section.
    const computedStyle = window.getComputedStyle(this.contentElement.querySelector('div'));
    const paddingOffset = parseFloat(computedStyle.paddingTop.replace('px', ''));
    const relativeOffset = this.el.getBoundingClientRect().top;
    const windowOffset = relativeOffset - paddingOffset;
    return windowOffset;
  }
  handleScroll() {
    // Move the modal to the correct position on the page.
    const offset = this.getContentPageOffset();
    this.contentElement.style.top = offset + 'px';
    // Hide if the content is not visible on the page.
    if (this.isModalOpen &&
      (offset < -this.contentElement.clientHeight ||
        offset + this.contentElement.clientHeight > window.innerHeight + this.contentElement.clientHeight)) {
      this.isModalOpen = false;
    }
  }
  // Handle the enquire opening click.
  handleEnquireClick() {
    this.isModalOpen = !this.isModalOpen;
    if (this.isModalOpen) {
      const top = this.getContentPageOffset();
      // Move the content into view.
      if (top <= 5) {
        window.scrollBy({ behavior: 'smooth', top: top - 64, left: 0 });
      }
      else if (top + this.contentElement.clientHeight >= window.innerHeight + 5) {
        window.scrollBy({ behavior: 'smooth', top: top - this.contentElement.clientHeight + 64, left: 0 });
      }
    }
  }
  // Handle when the form data changes.
  handleFormChange(event) {
    this.formState = Object.assign(Object.assign({}, this.formState), { [event.target.name]: event.target.value });
  }
  handleFormSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    let body = `Hello,%0D%0A%0D%0A`;
    body += `My name is ${this.formState.firstName} ${this.formState.lastName}, and I would like additional information regarding ${this.postTitle}.%0D%0A%0D%0A`;
    body += `I am currently located in ${this.formState.location}.%0D%0A%0D%0A`;
    body += `${this.formState.moreText.replace('\n', '%0D%0A')}`;
    const email = document.createElement('a');
    email.href = `mailto:info@leibal.com?subject=Enquiry about ${this.postTitle}&body=${body}`;
    email.click();
    return false;
  }
  clampBodyScroll(isModalOpen, oldIsModalOpen) {
    if (isModalOpen === oldIsModalOpen)
      return;
    // TODO: How to handle this?
    // Let's keep it simple for now.
    // if (isModalOpen === true) {
    //   document.body.style.overflow = 'hidden';
    // } else {
    //   document.body.style.overflow = 'inherit';
    // }
  }
  render() {
    return (h(Host, null, this.renderEnquireCard(), h("tele-portal", null, h("div", { class: this.isModalOpen ? 'enquire-modal__modal enquire-modal__modal--visible' : 'enquire-modal__modal', onClick: () => {
        this.isModalOpen = false;
      } }, h("form", { class: "enquire-modal__modal__content", onClick: e => e.stopImmediatePropagation(), ref: el => (this.contentElement = el), onInput: this.handleFormChange.bind(this), onSubmit: this.handleFormSubmit.bind(this) }, this.renderEnquireCard(), h("div", { class: "enquire-modal__modal__form" }, h("div", null, h("simple-input", { type: "text", name: "firstName", placeholder: "First Name", required: true }), h("simple-input", { type: "text", name: "lastName", placeholder: "Last Name", required: true }), h("simple-input", { type: "text", name: "email", placeholder: "Email Address", required: true }), h("simple-input", { type: "text", name: "location", placeholder: "Location", required: true }), h("div", { class: "enquire-modal__modal__form__message" }, h("div", { class: "enquire-modal__modal__form__message__title" }, "Message"), h("div", { class: "enquire-modal__modal__form__message__body" }, h("p", null, "Hello,"), h("p", null, "My name is ", h("u", null, this.formState.firstName || '...'), " ", h("u", null, this.formState.lastName || '...'), ", and I would like additional information regarding ", h("u", null, this.postTitle), "."), h("p", null, "I am currently located in ", h("u", null, this.formState.location || '...'), "."), h("div", { class: "grow-wrap" }, h("textarea", { class: "enquire-modal__modal__form__message__more-text", placeholder: "Type to add more to your request.", name: "moreText", onInput: function () {
        this.parentNode.dataset.replicatedValue = this.value;
      } })))))), h("div", { class: "enquire-modal__modal__submit" }, h("div", { class: "enquire-modal__modal__submit__disclaimer" }, "By sending this message your agree to our\u00A0", h("a", { href: "#" }, "Terms and Conditions"), ". For more information regarding how your data is processed, please view of ", h("a", { href: "#" }, "Privacy Policy"), "."), h("div", null, h("simple-button", { theme: "dark", onClick: (event) => {
        const submitButton = event.target.nextSibling;
        submitButton.click();
      } }, "Send"), h("button", { type: "submit", style: { display: 'none' } }))), h("div", { class: "enquire-modal__modal__close", onClick: () => {
        this.isModalOpen = false;
      } }, h("img", { src: getAssetPath('./assets/close-icon.png') })))))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "isModalOpen": ["clampBodyScroll"]
  }; }
  static get style() { return enquireModalCss; }
};
EnquireModal = /*@__PURE__*/ proxyCustomElement(EnquireModal, [0, "enquire-modal", {
    "postTitle": [1537, "post-title"],
    "previewImage": [1537, "preview-image"],
    "isModalOpen": [32],
    "formState": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["enquire-modal", "simple-button", "simple-input", "tele-portal"];
  components.forEach(tagName => { switch (tagName) {
    case "enquire-modal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, EnquireModal);
      }
      break;
    case "simple-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "simple-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "tele-portal":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { EnquireModal as E, defineCustomElement as d };
