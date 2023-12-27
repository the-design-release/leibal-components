import { r as registerInstance, h, e as Host, i as getAssetPath, g as getElement } from './index-24a60cbb.js';

const enquireModalCss = ".enquire-card{--font-family:var(--leibal-components-font-family, sans-serif);--color-light:#fff;--color-dark:#222;font-family:var(--font-family);display:block;display:grid;cursor:pointer;grid-template-columns:repeat(12, minmax(0, 1fr));gap:2rem;grid-column:1/4}.enquire-card__preview-image{grid-column:span 6 / span 6}@media (min-width: 1024px){.enquire-card__preview-image{grid-column:span 8 / span 8}}.enquire-card__preview-image{position:relative;width:100%;aspect-ratio:auto 1 / 1;overflow:hidden}.enquire-card__preview-image>*{position:absolute;width:100%;height:100%;background-position:center;background-size:cover;opacity:0;transition:opacity 300ms ease-in-out}.enquire-card__preview-image>*:first-child{opacity:1}.enquire-card__preview-image:hover>*:nth-child(2){opacity:1}.enquire-card__info{grid-column:span 6 / span 6;display:flex;flex-direction:column;justify-content:space-between;font-size:0.6rem;font-weight:200}@media (min-width: 1024px){.enquire-card__info{grid-column:span 4 / span 4}}.enquire-card__info__enquire{margin-bottom:0.25rem;text-transform:uppercase}.enquire-card__info__title{font-weight:300;text-transform:uppercase}.enquire-card__button{grid-column:span 12 / span 12}@media (min-width: 1024px){.enquire-card__button{grid-column:span 8 / span 8}}.enquire-modal__modal{position:fixed;top:0px;bottom:0px;left:0px;right:0px;z-index:1000;opacity:0;visibility:hidden;background:rgba(0, 0, 0, 0.5);transition:visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s}.enquire-modal__modal--visible{opacity:1;visibility:visible;transition:visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s}.enquire-modal__modal__content{position:relative;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:2rem;padding-right:2rem}@media (min-width: 1024px){.enquire-modal__modal__content{display:grid}.enquire-modal__modal__content{grid-template-columns:repeat(10, minmax(0, 1fr))}.enquire-modal__modal__content{gap:2rem}.enquire-modal__modal__content{padding-left:4rem;padding-right:4rem}}.enquire-modal__modal__content>div{padding-top:2rem;padding-bottom:2rem}@media (min-width: 1024px){.enquire-modal__modal__content>div{padding-top:3rem;padding-bottom:3rem}}.enquire-modal__modal__content>div:first-child{display:none}@media (min-width: 1024px){.enquire-modal__modal__content>div:first-child{display:grid}}.enquire-modal__modal__content>div:last-child{padding:0px}.enquire-modal__modal__form{grid-column:span 5 / span 5;border:none}@media (min-width: 1024px){.enquire-modal__modal__form{padding-left:2rem;padding-right:2rem}.enquire-modal__modal__form{border:1px solid #eaeaea;border-top:none;border-bottom:none}}.enquire-modal__modal__form>div{display:block}@media (min-width: 1024px){.enquire-modal__modal__form>div{display:grid}.enquire-modal__modal__form>div{grid-template-columns:repeat(2, minmax(0, 1fr))}.enquire-modal__modal__form>div{gap:2rem}}.enquire-modal__modal__form>div>*{margin-bottom:2rem}@media (min-width: 1024px){.enquire-modal__modal__form>div>*{margin-bottom:0px}}.enquire-modal__modal__form__message{grid-column:span 2 / span 2;grid-row:span 2 / span 2}.enquire-modal__modal__form__message__title{margin-bottom:1rem;font-size:0.88rem;font-weight:200}.enquire-modal__modal__form__message__body{max-height:185px;overflow-y:auto;padding:1rem;font-size:0.88rem;font-weight:200;line-height:1.5rem;letter-spacing:0.05em;border:1px solid #eaeaea}.enquire-modal__modal__form__message__body p{margin-top:1rem;margin-bottom:1rem}.enquire-modal__modal__form__message__body p:first-child{margin-top:0px}.enquire-modal__modal__form__message__body p:last-child{margin-bottom:0px}.enquire-modal__modal__form__message__more-text{}.enquire-modal__modal__submit{grid-column:span 2 / span 2;display:block}@media (min-width: 1024px){.enquire-modal__modal__submit{display:flex}.enquire-modal__modal__submit{flex-direction:column}.enquire-modal__modal__submit{justify-content:space-between}}.enquire-modal__modal__submit__disclaimer{margin-bottom:2rem;font-size:0.6rem;letter-spacing:0.1em}.enquire-modal__modal__submit__disclaimer a{color:#000}.enquire-modal__modal__close{position:absolute;top:0.75rem;right:0.75rem;cursor:pointer;font-size:1.25rem;line-height:1.75rem;font-weight:200;line-height:1}.enquire-modal__modal__close img{width:1rem}.grow-wrap{display:grid}.grow-wrap::after{content:attr(data-replicated-value) ' ';white-space:pre-wrap;visibility:hidden}.grow-wrap>textarea{resize:none;overflow:hidden}.grow-wrap>textarea,.grow-wrap::after{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";font-size:12px;font-weight:200;letter-spacing:1px;margin-left:-1px;border:none;outline:none;width:100%;grid-area:1 / 1 / 2 / 2}";

let EnquireModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
        if (window.innerWidth < 768) {
          window.scrollBy({ behavior: 'smooth', top: top - 64, left: 0 });
        }
        else {
          window.scrollBy({ behavior: 'smooth', top: top - this.contentElement.clientHeight + 64, left: 0 });
        }
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
    body += `My name is ${this.formState.firstName} ${this.formState.lastName}, and I would like additional information regarding ${this.postTitle} (https://leibal.com${this.postUrl}).%0D%0A%0D%0A`;
    body += `I am currently located in ${this.formState.location}.%0D%0A%0D%0A`;
    body += `${this.formState.moreText.replace('\n', '%0D%0A')}`;
    const email = document.createElement('a');
    email.href = `mailto:sales@leibal.com?subject=Enquiry about ${this.postTitle}&body=${body}`;
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
      } }, h("form", { class: "enquire-modal__modal__content", onClick: e => e.stopImmediatePropagation(), ref: el => (this.contentElement = el), onInput: this.handleFormChange.bind(this), onSubmit: this.handleFormSubmit.bind(this) }, this.renderEnquireCard(), h("div", { class: "enquire-modal__modal__form" }, h("div", null, h("simple-input", { type: "text", name: "firstName", placeholder: "First Name", required: true }), h("simple-input", { type: "text", name: "lastName", placeholder: "Last Name", required: true }), h("simple-input", { type: "text", name: "email", placeholder: "Email Address", required: true }), h("simple-input", { type: "text", name: "location", placeholder: "Location", required: true }), h("div", { class: "enquire-modal__modal__form__message" }, h("div", { class: "enquire-modal__modal__form__message__title" }, "Message"), h("div", { class: "enquire-modal__modal__form__message__body" }, h("p", null, "Hello,"), h("p", null, "My name is ", h("u", null, this.formState.firstName || '...'), " ", h("u", null, this.formState.lastName || '...'), ", and I would like additional information regarding ", h("u", null, this.postTitle), " (https://leibal.com", this.postUrl, ")."), h("p", null, "I am currently located in ", h("u", null, this.formState.location || '...'), "."), h("div", { class: "grow-wrap" }, h("textarea", { class: "enquire-modal__modal__form__message__more-text", placeholder: "Type to add more to your request.", name: "moreText", onInput: function () {
        this.parentNode.dataset.replicatedValue = this.value;
      } })))))), h("div", { class: "enquire-modal__modal__submit" }, h("div", { class: "enquire-modal__modal__submit__disclaimer" }, "By sending this message your agree to our\u00A0", h("a", { href: "#" }, "Terms and Conditions"), ". For more information regarding how your data is processed, please view of ", h("a", { href: "#" }, "Privacy Policy"), "."), h("div", null, h("simple-button", { theme: "dark", onClick: (event) => {
        const submitButton = event.target.nextSibling;
        submitButton.click();
      } }, "Send"), h("button", { type: "submit", style: { display: 'none' } }))), h("div", { class: "enquire-modal__modal__close", onClick: () => {
        this.isModalOpen = false;
      } }, h("img", { src: getAssetPath('./assets/close-icon.png') })))))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return getElement(this); }
  static get watchers() { return {
    "isModalOpen": ["clampBodyScroll"]
  }; }
};
EnquireModal.style = enquireModalCss;

export { EnquireModal as enquire_modal };
