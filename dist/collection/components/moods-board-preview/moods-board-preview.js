import { Component, Host, h, Prop } from '@stencil/core';
const FILLER_IMAGE_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAQAAACWCLlpAAAA4ElEQVR42u3QMREAAAgEIL9/Xmet4OxBBNJTHEWWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZP20NjklnrS/uTwAAAAASUVORK5CYII=';
export class MoodsBoard {
  render() {
    let thumbnails = this.board.images.map(image => image.imageUrl);
    if (this.board.images.length <= 4) {
      thumbnails = this.board.images.map(image => image.imageUrl);
      for (let i = 0; i < 4 - this.board.images.length; i++) {
        thumbnails.push(FILLER_IMAGE_URL);
      }
    }
    return (h(Host, null,
      h("div", { class: "moods-board-preview" },
        h("div", { class: "moods-board-preview__images" },
          thumbnails.slice(0, 4).map(image => (h("div", { class: "moods-board-preview__image" },
            h("img", { src: image })))),
          h("remove-overlay", { name: "Board", payload: JSON.stringify(this.board) })),
        h("div", { class: "moods-board-preview__saved" },
          this.board.images.length,
          " Saved"),
        h("div", { class: "moods-board-preview__export" }, "Export Collection"),
        h("div", { class: "moods-board-preview__name" }, this.board.name))));
  }
  static get is() { return "moods-board-preview"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["moods-board-preview.css"]
  }; }
  static get styleUrls() { return {
    "$": ["moods-board-preview.css"]
  }; }
  static get properties() { return {
    "board": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "MoodsBoardData",
        "resolved": "MoodsBoardData",
        "references": {
          "MoodsBoardData": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
}
