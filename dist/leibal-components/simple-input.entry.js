import { r as registerInstance, f as createEvent, h, e as Host, g as getElement } from './index-24a60cbb.js';

const simpleInputCss = ":host{--font-family:var(--leibal-components-font-family, sans-serif);--color-light:#fff;--color-dark:#222;--color-gray:#ddd;font-family:var(--font-family);display:block}.simple-input{display:block}.simple-input--text{display:block;width:100%;padding-bottom:1rem;letter-spacing:0.05em;border:none;outline:none;border-bottom:1px solid var(--color-gray)}.simple-input--text::-moz-placeholder{letter-spacing:0.05em;opacity:1 !important;color:#999}.simple-input--text:-ms-input-placeholder{letter-spacing:0.05em;opacity:1 !important;color:#999}.simple-input--text::placeholder{letter-spacing:0.05em;opacity:1 !important;color:#999}";

const INPUT_TYPES = ['text', 'password', 'email', 'number', 'tel', 'url'];
let SimpleInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
SimpleInput.style = simpleInputCss;

export { SimpleInput as simple_input };
