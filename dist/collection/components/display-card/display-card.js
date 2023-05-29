import { Component, h, Host, Prop, Watch } from '@stencil/core';
export class DisplayCard {
  constructor() {
    this.theme = 'light';
    this.cardType = 'normal';
    this.bottomTitleName = '';
    this.bottomSubtitleName = '';
    this.images = '';
    this.linkTo = '#';
  }
  watchImages(value) {
    if (typeof value === 'string') {
      this._images = JSON.parse(value);
    }
    else {
      this._images = value;
    }
  }
  componentWillLoad() {
    this.watchImages(this.images);
  }
  render() {
    return (h(Host, null, this.cardType === 'normal' ? (h("a", { href: this.linkTo, class: "display-card" },
      h("div", { class: "display-card__image" },
        h("div", { style: { backgroundImage: `url(${this._images[0]})` } }),
        h("div", { style: { backgroundImage: `url(${this._images[1]})` } })),
      h("div", { class: "display-card__top" },
        h("div", { class: "display-card__top__title" },
          h("slot", { name: "top-title" })),
        h("div", { class: "display-card__top__subtitle" },
          h("slot", { name: "top-subtitle" }))),
      h("div", { class: "display-card__bottom" },
        h("div", { class: "display-card__bottom__title" },
          h("slot", { name: "bottom-title" })),
        h("div", { class: "display-card__bottom__subtitle" },
          h("slot", { name: "bottom-subtitle" }))))) : (h("a", { href: this.linkTo, class: "display-card--featured" },
      h("div", { class: "col-span-4 display-card__image" },
        h("div", { style: { backgroundImage: `url(${this._images[0]})` } }),
        h("div", { style: { backgroundImage: `url(${this._images[1]})` } })),
      h("div", { class: "display-card--featured__right" },
        h("div", { class: "display-card--featured__top" },
          h("div", { class: "display-card--featured__top__title" },
            h("slot", { name: "top-title" })),
          h("div", { class: "display-card--featured__top__subtitle" },
            h("slot", { name: "top-subtitle" }))),
        h("div", { class: "display-card--featured__bottom" },
          h("div", { class: "display-card--featured__bottom__title" },
            h("div", { class: "display-card--featured__bottom__title__name" }, this.bottomTitleName),
            h("slot", { name: "bottom-title" })),
          h("div", { class: "display-card--featured__bottom__subtitle" },
            h("div", { class: "display-card--featured__bottom__subtitle__name" }, this.bottomSubtitleName),
            h("slot", { name: "bottom-subtitle" }))))))));
  }
  static get is() { return "display-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["display-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["display-card.css"]
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
    "cardType": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "DisplayCardType",
        "resolved": "\"featured\" | \"normal\"",
        "references": {
          "DisplayCardType": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "card-type",
      "reflect": true,
      "defaultValue": "'normal'"
    },
    "bottomTitleName": {
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
      "attribute": "bottom-title-name",
      "reflect": false,
      "defaultValue": "''"
    },
    "bottomSubtitleName": {
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
      "attribute": "bottom-subtitle-name",
      "reflect": false,
      "defaultValue": "''"
    },
    "images": {
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
      "attribute": "images",
      "reflect": false,
      "defaultValue": "''"
    },
    "linkTo": {
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
      "attribute": "link-to",
      "reflect": false,
      "defaultValue": "'#'"
    }
  }; }
  static get watchers() { return [{
      "propName": "images",
      "methodName": "watchImages"
    }]; }
}
