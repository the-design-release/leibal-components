import { Component, Host, h, Prop, State, Element, Watch, getAssetPath } from '@stencil/core';
export class EnquireModal {
  constructor() {
    this.isModalOpen = false;
    this.formState = {
      firstName: '',
      lastName: '',
      email: '',
      location: '',
      moreText: '',
    };
    this.renderEnquireCard = () => (h("div", { class: "col-span-3 w-full cursor-pointer enquire-card", onClick: this.handleEnquireClick.bind(this) },
      h("div", { class: "enquire-card__preview-image" },
        h("div", { style: { backgroundImage: `url(${this.previewImage})` } })),
      h("div", { class: "enquire-card__info" },
        h("div", { class: "mb-8" },
          h("div", { class: "enquire-card__info__enquire" }, "Enquire About"),
          h("div", { class: "enquire-card__info__title" }, this.postTitle)),
        h("div", null, "Find out more information regarding purchasing, dimensions or lead times.")),
      h("div", { class: "text-xl enquire-card__button" },
        h("simple-button", null, "Enquire"))));
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
    return (h(Host, null,
      this.renderEnquireCard(),
      h("tele-portal", null,
        h("div", { class: this.isModalOpen ? 'enquire-modal__modal enquire-modal__modal--visible' : 'enquire-modal__modal', onClick: () => {
            this.isModalOpen = false;
          } },
          h("form", { class: "enquire-modal__modal__content", onClick: e => e.stopImmediatePropagation(), ref: el => (this.contentElement = el), onInput: this.handleFormChange.bind(this), onSubmit: this.handleFormSubmit.bind(this) },
            this.renderEnquireCard(),
            h("div", { class: "enquire-modal__modal__form" },
              h("div", null,
                h("simple-input", { type: "text", name: "firstName", placeholder: "First Name", required: true }),
                h("simple-input", { type: "text", name: "lastName", placeholder: "Last Name", required: true }),
                h("simple-input", { type: "text", name: "email", placeholder: "Email Address", required: true }),
                h("simple-input", { type: "text", name: "location", placeholder: "Location", required: true }),
                h("div", { class: "enquire-modal__modal__form__message" },
                  h("div", { class: "enquire-modal__modal__form__message__title" }, "Message"),
                  h("div", { class: "enquire-modal__modal__form__message__body" },
                    h("p", null, "Hello,"),
                    h("p", null,
                      "My name is ",
                      h("u", null, this.formState.firstName || '...'),
                      " ",
                      h("u", null, this.formState.lastName || '...'),
                      ", and I would like additional information regarding ",
                      h("u", null, this.postTitle),
                      " (https://leibal.com",
                      this.postUrl,
                      ")."),
                    h("p", null,
                      "I am currently located in ",
                      h("u", null, this.formState.location || '...'),
                      "."),
                    h("div", { class: "grow-wrap" },
                      h("textarea", { class: "enquire-modal__modal__form__message__more-text", placeholder: "Type to add more to your request.", name: "moreText", onInput: function () {
                          this.parentNode.dataset.replicatedValue = this.value;
                        } })))))),
            h("div", { class: "enquire-modal__modal__submit" },
              h("div", { class: "enquire-modal__modal__submit__disclaimer" },
                "By sending this message your agree to our\u00A0",
                h("a", { href: "#" }, "Terms and Conditions"),
                ". For more information regarding how your data is processed, please view of ",
                h("a", { href: "#" }, "Privacy Policy"),
                "."),
              h("div", null,
                h("simple-button", { theme: "dark", onClick: (event) => {
                    const submitButton = event.target.nextSibling;
                    submitButton.click();
                  } }, "Send"),
                h("button", { type: "submit", style: { display: 'none' } }))),
            h("div", { class: "enquire-modal__modal__close", onClick: () => {
                this.isModalOpen = false;
              } },
              h("img", { src: getAssetPath('./assets/close-icon.png') })))))));
  }
  static get is() { return "enquire-modal"; }
  static get originalStyleUrls() { return {
    "$": ["enquire-modal.css"]
  }; }
  static get styleUrls() { return {
    "$": ["enquire-modal.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "postTitle": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "post-title",
      "reflect": true
    },
    "postUrl": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "post-url",
      "reflect": true
    },
    "previewImage": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "preview-image",
      "reflect": true
    }
  }; }
  static get states() { return {
    "isModalOpen": {},
    "formState": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "isModalOpen",
      "methodName": "clampBodyScroll"
    }]; }
}
