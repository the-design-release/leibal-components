import { Component, Element, Host, h, Prop, State, Watch, Event, getAssetPath } from '@stencil/core';
export class RemoveOverlay {
  constructor() {
    this.confirming = false;
    this.showIcon = false;
    this.payload = null;
    this.name = '';
    this.payloadJson = null;
  }
  payloadChangedHandler() {
    try {
      this.payloadJson = JSON.parse(this.payload);
    }
    catch (e) {
      console.error('Failed to parse remove-overlay payload: ', e);
    }
  }
  componentDidLoad() {
    try {
      this.payloadJson = JSON.parse(this.payload);
    }
    catch (e) {
      console.error('Failed to parse remove-overlay payload: ', e);
    }
    const parentEl = this.el.parentElement;
    if (!parentEl)
      return;
    parentEl.addEventListener('mouseenter', () => {
      if (!this.confirming)
        this.showIcon = true;
    });
    parentEl.addEventListener('mouseleave', () => {
      if (!this.confirming)
        this.showIcon = false;
    });
  }
  hideOverlay() {
    this.confirming = false;
  }
  showOverlay() {
    this.confirming = true;
  }
  toggleOverlay() {
    if (this.confirming) {
      this.hideOverlay();
    }
    else {
      this.showOverlay();
    }
  }
  handleRemoveClick() {
    this.toggleOverlay();
  }
  handleCancelClick() {
    this.hideOverlay();
  }
  handleConfirmClick() {
    this.hideOverlay();
    this.removeOverlayEvent.emit({
      payload: this.payloadJson,
    });
  }
  render() {
    return (h(Host, null,
      h("div", { class: "remove-overlay", onClick: e => {
          e.stopImmediatePropagation();
          e.preventDefault();
          return false;
        } },
        h("div", { class: 'remove-overlay__confirm ' + (this.confirming ? 'remove-overlay__confirm--visible' : '') },
          h("div", { class: "remove-overlay__message" },
            "Remove ",
            this.name,
            "?"),
          h("div", { class: "remove-overlay__buttons" },
            h("button", { class: "remove-overlay__button remove-overlay__button--confirm", onClick: this.handleConfirmClick.bind(this) }, "Yes"),
            h("button", { class: "remove-overlay__button remove-overlay__button--cancel", onClick: this.handleCancelClick.bind(this) }, "No"))),
        h("div", { class: 'remove-overlay__icon ' + (this.showIcon ? 'remove-overlay__icon--visible' : '') },
          h("img", { src: getAssetPath('./assets/remove-icon.png'), onClick: this.handleRemoveClick.bind(this) })))));
  }
  static get is() { return "remove-overlay"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["remove-overlay.css"]
  }; }
  static get styleUrls() { return {
    "$": ["remove-overlay.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "payload": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "payload",
      "reflect": true,
      "defaultValue": "null"
    },
    "name": {
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
      "attribute": "name",
      "reflect": true,
      "defaultValue": "''"
    }
  }; }
  static get states() { return {
    "confirming": {},
    "showIcon": {}
  }; }
  static get events() { return [{
      "method": "removeOverlayEvent",
      "name": "removeOverlayEvent",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "RemoveOverlayEvent",
        "resolved": "RemoveOverlayEvent",
        "references": {
          "RemoveOverlayEvent": {
            "location": "local"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "payload",
      "methodName": "payloadChangedHandler"
    }]; }
}
