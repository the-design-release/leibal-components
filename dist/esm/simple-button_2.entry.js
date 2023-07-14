import { r as registerInstance, h, H as Host, a as getElement } from './index-3f06ee34.js';

const simpleButtonCss = ":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.simple-button{align-items:center;background-color:var(--color-light);border-color:var(--color-dark);border-style:solid;border-width:1px;color:var(--color-dark);cursor:pointer;display:flex;justify-content:center;padding:1.5rem 1rem;position:relative;transition-duration:.3s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.simple-button--disabled{cursor:not-allowed;opacity:.5}@media (min-width:768px){.simple-button__text{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.simple-button__text{font-size:1.25rem;line-height:1.75rem}}.simple-button__icon{height:1rem;position:absolute;right:1rem;top:1rem;width:1rem}.simple-button--dark,.simple-button:active,.simple-button:hover{background-color:var(--color-dark);color:var(--color-light)}.simple-button--dark{border-color:var(--color-dark)}.simple-button--dark:active,.simple-button--dark:hover{background-color:var(--color-light);color:var(--color-dark)}";

let SimpleButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.theme = 'light';
    this.fillWidth = false;
    this.disabled = false;
  }
  render() {
    return (h(Host, null, h("div", { class: 'simple-button ' +
        (this.fillWidth ? 'simple-button--full-width ' : ' ') +
        (this.theme == 'dark' ? 'simple-button--dark ' : ' ') +
        (this.disabled ? 'simple-button--disabled' : ' '), role: "button", "aria-pressed": "false", tabindex: "0" }, h("div", { class: "simple-button__icon" }, h("slot", { name: "icon" })), h("div", { class: "simple-button__text" }, h("slot", null)))));
  }
};
SimpleButton.style = simpleButtonCss;

let TelePortal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  createPortal() {
    this.portal = document.createElement('div');
    document.body.prepend(this.portal);
  }
  moveElementToPortal() {
    this.portal.appendChild(this.el);
  }
  componentWillLoad() {
    this.createPortal();
  }
  componentDidLoad() {
    this.moveElementToPortal();
  }
  disconnectCallback() {
    this.portal.remove();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get el() { return getElement(this); }
};

export { SimpleButton as simple_button, TelePortal as tele_portal };
