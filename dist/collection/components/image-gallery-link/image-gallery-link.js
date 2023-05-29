import { Component, Host, h, Prop, Event } from '@stencil/core';
export class ImageGalleryLink {
  constructor() {
    this.imageIndex = 0;
  }
  openImageGalleryHandler(index) {
    this.openImageGallery.emit(index);
  }
  render() {
    return (h(Host, { onClick: () => this.openImageGalleryHandler(this.imageIndex + 1) },
      h("slot", null)));
  }
  static get is() { return "image-gallery-link"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["image-gallery-link.css"]
  }; }
  static get styleUrls() { return {
    "$": ["image-gallery-link.css"]
  }; }
  static get properties() { return {
    "imageIndex": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "image-index",
      "reflect": true,
      "defaultValue": "0"
    }
  }; }
  static get events() { return [{
      "method": "openImageGallery",
      "name": "openImageGallery",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      }
    }]; }
}
