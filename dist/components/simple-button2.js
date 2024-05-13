import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const simpleButtonCss = ":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.simple-button{align-items:center;background-color:var(--color-light);border-color:var(--color-dark);border-style:solid;border-width:1px;color:var(--color-dark);cursor:pointer;display:flex;font-weight:200;justify-content:center;padding:1.5rem 1rem;position:relative;transition-duration:.3s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.simple-button--disabled{cursor:not-allowed;opacity:.5}.simple-button--transparent{background-color:transparent;border-color:var(--color-light);color:var(--color-light)}.simple-button--transparent:active,.simple-button--transparent:hover{background-color:var(--color-light);color:var(--color-dark)}@media (min-width:768px){.simple-button__text{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.simple-button__text{font-size:1.25rem;line-height:1.75rem}}.simple-button__icon{height:1rem;position:absolute;right:1rem;top:1rem;width:1rem}.simple-button--dark,.simple-button:active,.simple-button:hover{background-color:var(--color-dark);color:var(--color-light)}.simple-button--dark{border-color:var(--color-dark)}.simple-button--dark:active,.simple-button--dark:hover{background-color:var(--color-light);color:var(--color-dark)}";

let SimpleButton = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.theme = 'light';
    this.fillWidth = false;
    this.disabled = false;
    this.transparentBackground = false;
  }
  render() {
    return (h(Host, null, h("div", { class: 'simple-button ' +
        (this.fillWidth ? 'simple-button--full-width ' : ' ') +
        (this.theme == 'dark' ? 'simple-button--dark ' : ' ') +
        (this.disabled ? 'simple-button--disabled' : ' ') +
        (this.transparentBackground ? 'simple-button--transparent' : ' '), role: "button", "aria-pressed": "false", tabindex: "0" }, h("div", { class: "simple-button__icon" }, h("slot", { name: "icon" })), h("div", { class: "simple-button__text" }, h("slot", null)))));
  }
  static get style() { return simpleButtonCss; }
};
SimpleButton = /*@__PURE__*/ proxyCustomElement(SimpleButton, [1, "simple-button", {
    "theme": [1537],
    "fillWidth": [1028, "fill-width"],
    "disabled": [1028],
    "transparentBackground": [1028, "transparent-background"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["simple-button"];
  components.forEach(tagName => { switch (tagName) {
    case "simple-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SimpleButton);
      }
      break;
  } });
}

export { SimpleButton as S, defineCustomElement as d };
