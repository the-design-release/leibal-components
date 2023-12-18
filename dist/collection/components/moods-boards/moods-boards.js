import { Component, Host, h, Prop, State, Watch, getAssetPath, Listen } from '@stencil/core';
export class MoodsBoards {
  constructor() {
    this.boardsList = [];
    // Sorting
    this.sortBy = 'timestamp';
    this.sortOrder = 'desc';
    // Create Board
    this.creatingBoard = false;
    this.creatingBoardName = '';
    this.apiUrl = '/wp-json/moods/v1/create';
  }
  boardsChanged(newValue) {
    this.boardsList = JSON.parse(newValue);
  }
  setSort(sortBy, sortOrder) {
    this.sortBy = sortBy;
    this.sortOrder = sortOrder;
  }
  sortSelectedClass(sortBy, sortOrder) {
    const selected = this.sortBy == sortBy && this.sortOrder == sortOrder;
    return selected ? 'moods-boards__sort-by--selected' : '';
  }
  async createBoard() {
    const formData = new FormData();
    formData.append('title', this.creatingBoardName);
    fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'X-WP-Nonce': this.wpNonce,
      },
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
      console.log('Success:', data);
      this.boardsList.push(data);
      this.creatingBoard = false;
      this.creatingBoardName = '';
    });
  }
  // Listen for remove-overlay event
  removeOverlayHandler(event) {
    const payload = event.detail.payload;
    const data = new FormData();
    data.append('id', payload.id);
    fetch('/wp-json/moods/v1/delete', {
      method: 'POST',
      headers: {
        'X-WP-Nonce': this.wpNonce,
      },
      body: data,
    })
      .then(response => response.json())
      .then(_ => {
      this.boardsList = this.boardsList.filter(board => board.id != payload.id);
    });
  }
  componentWillLoad() {
    this.boardsList = JSON.parse(this.boards);
  }
  render() {
    return (h(Host, null,
      h("div", { class: "moods-boards" },
        h("div", { class: "moods-boards__sidebar" },
          h("sticky-scroller", { startOffset: 130 },
            h("div", { style: { marginBottom: '4rem' } },
              h("div", { class: "moods-boards__create-board" }, this.creatingBoard ? (h("div", { class: "moods-boards__create-board__input" },
                h("input", { onKeyDown: e => {
                    if (e.key == 'Escape') {
                      this.creatingBoard = false;
                    }
                    if (e.key == 'Enter') {
                      this.createBoard();
                    }
                  }, onInput: (e) => {
                    this.creatingBoardName = e.target.value;
                  }, type: "text", placeholder: "Type Board Title" }),
                h("div", { class: "moods-boards__create-board__button", onClick: async () => {
                    await this.createBoard();
                  } },
                  h("img", { src: getAssetPath('./assets/arrow.png'), alt: "Submit" })))) : (h("a", { onClick: () => {
                  this.creatingBoard = true;
                } }, "Create New Board"))),
              h("div", { class: "moods-boards__sort" },
                h("div", { class: "moods-boards__sort__header" }, "Sort Boards"),
                h("div", { class: 'moods-boards__sort-by ' + this.sortSelectedClass('timestamp', 'desc'), onClick: () => this.setSort('timestamp', 'desc') }, "Latest"),
                h("div", { class: 'moods-boards__sort-by ' + this.sortSelectedClass('timestamp', 'asc'), onClick: () => this.setSort('timestamp', 'asc') }, "Oldest"),
                h("div", { class: 'moods-boards__sort-by ' + this.sortSelectedClass('name', 'asc'), onClick: () => this.setSort('name', 'asc') }, "A - Z"),
                h("div", { class: 'moods-boards__sort-by ' + this.sortSelectedClass('name', 'desc'), onClick: () => this.setSort('name', 'desc') }, "Z - A"))))),
        h("div", { class: "moods-boards__content" }, this.boardsList
          .sort((_x, _y) => {
          let x = _x[this.sortBy];
          let y = _y[this.sortBy];
          // Order by last image timestamp or createdAt
          if (this.sortBy == 'timestamp') {
            x =
              Array.isArray(_x.images) && _x.images.length > 0 ? _x.images.slice(-1)[0].timestamp : _x.timestamp;
            y =
              Array.isArray(_y.images) && _y.images.length > 0 ? _y.images.slice(-1)[0].timestamp : _y.timestamp;
          }
          if (this.sortOrder == 'asc') {
            return x > y ? 1 : -1;
          }
          else {
            return x < y ? 1 : -1;
          }
        })
          .map(board => (h("a", { href: board.url, class: "moods-boards__preview" },
          h("moods-board-preview", { board: board }))))))));
  }
  static get is() { return "moods-boards"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["moods-boards.css"]
  }; }
  static get styleUrls() { return {
    "$": ["moods-boards.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "boards": {
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
      "attribute": "boards",
      "reflect": true
    },
    "apiUrl": {
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
      "attribute": "api-url",
      "reflect": true,
      "defaultValue": "'/wp-json/moods/v1/create'"
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
      "reflect": true
    }
  }; }
  static get states() { return {
    "boardsList": {},
    "sortBy": {},
    "sortOrder": {},
    "creatingBoard": {},
    "creatingBoardName": {}
  }; }
  static get watchers() { return [{
      "propName": "boards",
      "methodName": "boardsChanged"
    }]; }
  static get listeners() { return [{
      "name": "removeOverlayEvent",
      "method": "removeOverlayHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
