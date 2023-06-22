import { Component, Host, h, State, Listen } from '@stencil/core';
export class ToolTip {
  constructor() {
    this.bottomOffset = 0;
    this.show = false;
  }
  handleMouseEnter() {
    this.show = true;
  }
  handleMouseLeave() {
    this.show = false;
  }
  handleResize() {
    this.calculateWrapperHeight();
  }
  componentDidLoad() {
    this.calculateWrapperHeight();
  }
  calculateWrapperHeight() {
    const { height } = this.wrapperEl.getBoundingClientRect();
    this.bottomOffset = height;
  }
  render() {
    return (h(Host, null,
      h("div", { class: "tooltip" },
        h("div", { style: { bottom: this.bottomOffset - 1 + 'px' }, class: 'tooltip__content ' + (this.show ? 'tooltip__content--visible' : '') },
          h("slot", { name: "content" })),
        h("div", { ref: el => (this.wrapperEl = el) },
          h("slot", { name: "wrapper" })))));
  }
  static get is() { return "tool-tip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tool-tip.css"]
  }; }
  static get styleUrls() { return {
    "$": ["tool-tip.css"]
  }; }
  static get states() { return {
    "bottomOffset": {},
    "show": {}
  }; }
  static get listeners() { return [{
      "name": "mouseenter",
      "method": "handleMouseEnter",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "mouseleave",
      "method": "handleMouseLeave",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "resize",
      "method": "handleResize",
      "target": undefined,
      "capture": false,
      "passive": true
    }]; }
}
