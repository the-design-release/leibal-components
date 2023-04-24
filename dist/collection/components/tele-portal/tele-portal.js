import { Component, Host, h, Element } from '@stencil/core';
export class TelePortal {
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
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "tele-portal"; }
  static get encapsulation() { return "shadow"; }
  static get elementRef() { return "el"; }
}
