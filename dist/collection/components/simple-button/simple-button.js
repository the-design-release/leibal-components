import { Component, Host, h, Prop } from '@stencil/core';
export class SimpleButton {
  constructor() {
    this.theme = 'light';
    this.fillWidth = false;
    this.disabled = false;
    this.transparentBackground = false;
  }
  render() {
    return (h(Host, null,
      h("div", { class: 'simple-button ' +
          (this.fillWidth ? 'simple-button--full-width ' : ' ') +
          (this.theme == 'dark' ? 'simple-button--dark ' : ' ') +
          (this.disabled ? 'simple-button--disabled' : ' ') +
          (this.transparentBackground ? 'simple-button--transparent' : ' '), role: "button", "aria-pressed": "false", tabindex: "0" },
        h("div", { class: "simple-button__icon" },
          h("slot", { name: "icon" })),
        h("div", { class: "simple-button__text" },
          h("slot", null)))));
  }
  static get is() { return "simple-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["simple-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["simple-button.css"]
  }; }
  static get properties() { return {
    "theme": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "Theme",
        "resolved": "\"dark\" | \"light\"",
        "references": {
          "Theme": {
            "location": "import",
            "path": "../../utils/theme"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "theme",
      "reflect": true,
      "defaultValue": "'light'"
    },
    "fillWidth": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "fill-width",
      "reflect": false,
      "defaultValue": "false"
    },
    "disabled": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "transparentBackground": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "transparent-background",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
