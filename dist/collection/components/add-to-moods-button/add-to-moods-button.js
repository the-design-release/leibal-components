import { Component, Element, Host, Event, Prop, h, getAssetPath, State } from '@stencil/core';
export class AddToMoodsButton {
  constructor() {
    this.imageUrl = '';
    this.postId = null;
    this.disabled = false;
    this.theme = 'light';
    this.showOnHover = false;
    this.contentLocation = 'left';
    this.hidden = false;
  }
  openMoodsModalHandler() {
    if (!this.imageUrl || !this.postId)
      return;
    this.openMoodsModal.emit({
      imageUrl: this.imageUrl,
      postId: this.postId,
    });
  }
  componentDidLoad() {
    // Check if the parent element is being hovered.
    if (!this.showOnHover)
      return;
    this.hidden = true;
    // Get the parent element.
    const parent = this.el.parentElement;
    if (!parent)
      return;
    // Get the slots and the icon
    let leftSlot = this.el.shadowRoot.querySelector('.add-to-moods-button__content-left');
    let rightSlot = this.el.shadowRoot.querySelector('.add-to-moods-button__content-right');
    let icon = this.el.shadowRoot.querySelector('img');
    // Show the slots when hovering the icon.
    icon.addEventListener('mouseenter', () => {
      if (leftSlot)
        leftSlot.classList.add('add-to-moods-button__content-left--hover');
      if (rightSlot)
        rightSlot.classList.add('add-to-moods-button__content-right--hover');
    });
    icon.addEventListener('mouseleave', () => {
      if (leftSlot)
        leftSlot.classList.remove('add-to-moods-button__content-left--hover');
      if (rightSlot)
        rightSlot.classList.remove('add-to-moods-button__content-right--hover');
    });
    // Show the button when hovering the parent element.
    parent.addEventListener('mouseenter', () => {
      this.hidden = false;
    });
    parent.addEventListener('mouseleave', () => {
      this.hidden = true;
    });
  }
  render() {
    return (h(Host, null,
      h("div", { class: 'add-to-moods-button ' +
          (this.showOnHover ? 'add-to-moods-button--show-on-hover ' : ' ') +
          (!this.hidden && this.showOnHover ? 'add-to-moods-button--show-on-hover--hover ' : ' '), onClick: () => this.openMoodsModalHandler() },
        this.contentLocation === 'left' && (h("div", { class: "add-to-moods-button__content-left" },
          h("slot", null))),
        h("img", { src: this.theme == 'light' ? getAssetPath('./assets/add-icon.png') : getAssetPath('./assets/add-icon-dark.png'), alt: "Add To MOODS" }),
        this.contentLocation === 'right' && (h("div", { class: "add-to-moods-button__content-right" },
          h("slot", null))))));
  }
  static get is() { return "add-to-moods-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["add-to-moods-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["add-to-moods-button.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "imageUrl": {
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
      "attribute": "image-url",
      "reflect": true,
      "defaultValue": "''"
    },
    "postId": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number | null",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "post-id",
      "reflect": true,
      "defaultValue": "null"
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
      "reflect": true,
      "defaultValue": "false"
    },
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
    "showOnHover": {
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
      "attribute": "show-on-hover",
      "reflect": true,
      "defaultValue": "false"
    },
    "contentLocation": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "'left' | 'right'",
        "resolved": "\"left\" | \"right\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "content-location",
      "reflect": true,
      "defaultValue": "'left'"
    }
  }; }
  static get states() { return {
    "hidden": {}
  }; }
  static get events() { return [{
      "method": "openMoodsModal",
      "name": "openMoodsModal",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "MoodsModalEvent",
        "resolved": "MoodsModalEvent",
        "references": {
          "MoodsModalEvent": {
            "location": "local"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
}
