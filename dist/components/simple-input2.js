import { HTMLElement, createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const simpleInputCss = ":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;--color-gray:#ddd;display:block;font-family:var(--font-family)}.simple-input,.simple-input--text{display:block}.simple-input--text{border:none;border-bottom:1px solid var(--color-gray);letter-spacing:.05em;outline:none;padding-bottom:1rem;width:100%}.simple-input--text::-moz-placeholder{color:#999;letter-spacing:.05em;opacity:1!important}.simple-input--text::placeholder{color:#999;letter-spacing:.05em;opacity:1!important}";

const INPUT_TYPES = ['text', 'password', 'email', 'number', 'tel', 'url'];
let SimpleInput = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.valueChanged = createEvent(this, "valueChanged", 7);
    this.placeholder = 'Text here...';
    this.required = false;
    this.input = () => {
      let placeholder = this.placeholder;
      if (this.required) {
        placeholder += ' *';
      }
      return (h("input", { class: "simple-input--text", name: this.name, onInput: this.onInputChangeValue.bind(this), value: this.value, type: this.type, placeholder: placeholder, required: this.required }));
    };
  }
  onInputChangeValue(event) {
    this.value = event.target.value;
    this.valueChanged.emit(this.value);
  }
  renderInputOutsideShadowRoot(container, name, value) {
    let input = container.querySelector('input.hidden-input');
    if (!input) {
      input = container.ownerDocument.createElement('input');
      input.type = 'hidden';
      input.classList.add('hidden-input');
      container.appendChild(input);
    }
    input.name = name;
    input.value = value || '';
  }
  render() {
    const { el, value, name } = this;
    this.renderInputOutsideShadowRoot(el, name, value);
    return (h(Host, null, h("div", { class: "simple-input" }, INPUT_TYPES.includes(this.type) && this.input())));
  }
  get el() { return this; }
  static get style() { return simpleInputCss; }
};
SimpleInput = /*@__PURE__*/ proxyCustomElement(SimpleInput, [1, "simple-input", {
    "type": [1],
    "placeholder": [1],
    "required": [4],
    "name": [1],
    "value": [1537]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["simple-input"];
  components.forEach(tagName => { switch (tagName) {
    case "simple-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SimpleInput);
      }
      break;
  } });
}

export { SimpleInput as S, defineCustomElement as d };
