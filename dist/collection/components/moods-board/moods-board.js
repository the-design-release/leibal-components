import { Component, Event, Host, h, Prop, State, Element, Listen } from '@stencil/core';
export class MoodsBoard {
  constructor() {
    // Boards
    this.boardId = '';
    this.wpNonce = null;
    this.imageList = [];
    // Sorting
    this.sortBy = 'timestamp';
    this.sortOrder = 'desc';
  }
  setSort(sortBy, sortOrder) {
    this.sortBy = sortBy;
    this.sortOrder = sortOrder;
  }
  sortSelectedClass(sortBy, sortOrder) {
    const selected = this.sortBy == sortBy && this.sortOrder == sortOrder;
    return selected ? 'moods-board__sort-by--selected' : '';
  }
  componentWillLoad() {
    this.imageList = JSON.parse(this.images);
  }
  // Listen for remove-overlay event
  removeOverlayHandler(event) {
    const payload = event.detail.payload;
    const data = new FormData();
    data.append('id', this.boardId);
    data.append('image_url', payload.imageUrl);
    fetch('/wp-json/moods/v1/remove-from-board', {
      method: 'POST',
      headers: {
        'X-WP-Nonce': this.wpNonce,
      },
      body: data,
    })
      .then(response => response.json())
      .then(_ => {
      this.imageList = this.imageList.filter(image => image.imageUrl != payload.imageUrl);
    });
  }
  render() {
    let images = this.imageList.map((image, index) => (Object.assign({ index }, image)));
    images = this.imageList.sort((x, y) => {
      if (this.sortOrder == 'asc') {
        return x[this.sortBy] > y[this.sortBy] ? 1 : -1;
      }
      else {
        return x[this.sortBy] < y[this.sortBy] ? 1 : -1;
      }
    });
    const columns = [];
    for (let i = 0; i < 4; i++) {
      columns.push(images.filter((_, index) => index % 4 == i));
    }
    return (h(Host, null,
      h("div", { class: "moods-board" },
        h("div", { class: "moods-board__sidebar" },
          h("sticky-scroller", { startOffset: 130 },
            h("div", { style: { marginBottom: '4rem' } },
              h("div", { class: "moods-board__create-board" }, "Export Collection"),
              h("div", { class: "moods-board__sort" },
                h("div", { class: "moods-board__sort__header" }, "Sort Saved"),
                h("div", { class: 'moods-board__sort-by ' + this.sortSelectedClass('timestamp', 'desc'), onClick: () => this.setSort('timestamp', 'desc') }, "Latest"),
                h("div", { class: 'moods-board__sort-by ' + this.sortSelectedClass('timestamp', 'asc'), onClick: () => this.setSort('timestamp', 'asc') }, "Oldest"),
                h("div", { class: 'moods-board__sort-by ' + this.sortSelectedClass('postTitle', 'asc'), onClick: () => this.setSort('postTitle', 'asc') }, "A - Z"),
                h("div", { class: 'moods-board__sort-by ' + this.sortSelectedClass('postTitle', 'desc'), onClick: () => this.setSort('postTitle', 'desc') }, "Z - A"))))),
        h("div", { class: "moods-board__contents" }, columns.map(column => (h("div", null, column.map(board => (h("div", { class: "moods-board__content", onClick: () => {
            this.openMoodsGallery.emit(board);
          } },
          h("div", { style: { position: 'relative', lineHeight: '0' } },
            h("img", { class: "moods-board__content__image", src: board.imageUrl, alt: board.postTitle }),
            h("remove-overlay", { payload: JSON.stringify(board), name: "Image" })),
          h("div", { class: "moods-board__content__title" }, board.postTitle),
          h("div", { class: "moods-board__content__subtitle" }, board.postSubtitle)))))))))));
  }
  static get is() { return "moods-board"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["moods-board.css"]
  }; }
  static get styleUrls() { return {
    "$": ["moods-board.css"]
  }; }
  static get properties() { return {
    "boardId": {
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
      "attribute": "board-id",
      "reflect": true,
      "defaultValue": "''"
    },
    "wpNonce": {
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
      "attribute": "wp-nonce",
      "reflect": true,
      "defaultValue": "null"
    },
    "images": {
      "type": "string",
      "mutable": false,
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
      "reflect": false
    }
  }; }
  static get states() { return {
    "imageList": {},
    "sortBy": {},
    "sortOrder": {}
  }; }
  static get events() { return [{
      "method": "openMoodsGallery",
      "name": "openMoodsGallery",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "MoodsBoardImage",
        "resolved": "MoodsBoardImage",
        "references": {
          "MoodsBoardImage": {
            "location": "import",
            "path": "../moods-board-preview/moods-board-preview"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "removeOverlayEvent",
      "method": "removeOverlayHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
