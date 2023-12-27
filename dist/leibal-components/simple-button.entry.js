import { r as registerInstance, h, e as Host } from './index-24a60cbb.js';

const simpleButtonCss = ":host{--font-family:var(--leibal-components-font-family, sans-serif);--color-light:#fff;--color-dark:#222;font-family:var(--font-family);display:block}.simple-button{position:relative;display:flex;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;justify-content:center;padding-left:1rem;padding-right:1rem;padding-top:1.5rem;padding-bottom:1.5rem;font-weight:200;border-width:1px;border-style:solid;border-color:var(--color-dark);background-color:var(--color-light);color:var(--color-dark);transition-duration:300ms}.simple-button--disabled{cursor:not-allowed;opacity:0.5}@media (min-width: 768px){.simple-button__text{font-size:1.125rem;line-height:1.75rem}}@media (min-width: 1024px){.simple-button__text{font-size:1.25rem;line-height:1.75rem}}.simple-button__icon{position:absolute;top:1rem;right:1rem;width:1rem;height:1rem}.simple-button:hover,.simple-button:active{background-color:var(--color-dark);color:var(--color-light)}.simple-button--dark{border-color:var(--color-dark);background-color:var(--color-dark);color:var(--color-light)}.simple-button--dark:hover,.simple-button--dark:active{background-color:var(--color-light);color:var(--color-dark)}";

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

export { SimpleButton as simple_button };
