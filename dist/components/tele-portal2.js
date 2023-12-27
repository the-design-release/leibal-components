import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

let TelePortal = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  get el() { return this; }
};
TelePortal = /*@__PURE__*/ proxyCustomElement(TelePortal, [1, "tele-portal"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["tele-portal"];
  components.forEach(tagName => { switch (tagName) {
    case "tele-portal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TelePortal);
      }
      break;
  } });
}

export { TelePortal as T, defineCustomElement as d };
