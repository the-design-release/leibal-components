import { HTMLElement, h, Host, getAssetPath, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './moods-board-preview2.js';
import { d as defineCustomElement$3 } from './remove-overlay2.js';
import { d as defineCustomElement$2 } from './sticky-scroller2.js';

const moodsBoardsCss = ":host{display:block}.moods-boards{cursor:default;display:block;font-size:13px}@media (min-width:768px){.moods-boards{display:grid;gap:1rem;grid-template-columns:repeat(10,minmax(0,1fr))}.moods-boards__sidebar{grid-column:span 2/span 2}}.moods-boards__content{display:block}@media (min-width:768px){.moods-boards__content{display:grid;gap:2rem;grid-column:span 8/span 8;grid-template-columns:repeat(4,minmax(0,1fr));row-gap:4rem}}.moods-boards__create-board{margin-bottom:.5rem}.moods-boards__create-board__input{align-items:center;border-bottom:1px solid #888;display:flex;padding-bottom:.5rem;padding-top:.5rem}.moods-boards__create-board__input input{all:unset;cursor:text;flex:1 1 0%}.moods-boards__create-board__button{align-items:center;cursor:pointer;display:flex;margin-left:.5rem}.moods-boards__create-board__button img{opacity:.7;width:16px}.moods-boards__create-board a{display:block;padding-bottom:.5rem;padding-top:.5rem}.moods-boards__create-board a:hover{cursor:pointer;font-weight:700;text-decoration-line:underline;text-underline-offset:2px}.moods-boards__sort__header{margin-bottom:.5rem}.moods-boards__sort-by{cursor:pointer;margin-bottom:.5rem;margin-left:1.5rem}.moods-boards__sort-by--selected{font-weight:700;text-decoration-line:underline;text-underline-offset:2px}.moods-boards a{color:inherit;text-decoration-line:none}";

let MoodsBoards$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
    return (h(Host, null, h("div", { class: "moods-boards" }, h("div", { class: "moods-boards__sidebar" }, h("sticky-scroller", { startOffset: 130 }, h("div", null, h("div", { class: "moods-boards__create-board" }, this.creatingBoard ? (h("div", { class: "moods-boards__create-board__input" }, h("input", { onKeyDown: e => {
        if (e.key == 'Escape') {
          this.creatingBoard = false;
        }
        if (e.key == 'Enter') {
          this.createBoard();
        }
      }, onInput: (e) => {
        this.creatingBoardName = e.target.value;
      }, type: "text", placeholder: "Type Board Title" }), h("div", { class: "moods-boards__create-board__button", onClick: async () => {
        await this.createBoard();
      } }, h("img", { src: getAssetPath('./assets/arrow.png'), alt: "Submit" })))) : (h("a", { onClick: () => {
        this.creatingBoard = true;
      } }, "Create New Board"))), h("div", { class: "moods-boards__sort" }, h("div", { class: "moods-boards__sort__header" }, "Sort Boards"), h("div", { class: 'moods-boards__sort-by ' + this.sortSelectedClass('timestamp', 'desc'), onClick: () => this.setSort('timestamp', 'desc') }, "Latest"), h("div", { class: 'moods-boards__sort-by ' + this.sortSelectedClass('timestamp', 'asc'), onClick: () => this.setSort('timestamp', 'asc') }, "Oldest"), h("div", { class: 'moods-boards__sort-by ' + this.sortSelectedClass('name', 'asc'), onClick: () => this.setSort('name', 'asc') }, "A - Z"), h("div", { class: 'moods-boards__sort-by ' + this.sortSelectedClass('name', 'desc'), onClick: () => this.setSort('name', 'desc') }, "Z - A"))))), h("div", { class: "moods-boards__content" }, this.boardsList
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
      .map(board => (h("a", { href: board.url }, h("moods-board-preview", { board: board }))))))));
  }
  static get assetsDirs() { return ["assets"]; }
  static get watchers() { return {
    "boards": ["boardsChanged"]
  }; }
  static get style() { return moodsBoardsCss; }
};
MoodsBoards$1 = /*@__PURE__*/ proxyCustomElement(MoodsBoards$1, [1, "moods-boards", {
    "boards": [1537],
    "apiUrl": [1537, "api-url"],
    "wpNonce": [1537, "wp-nonce"],
    "boardsList": [32],
    "sortBy": [32],
    "sortOrder": [32],
    "creatingBoard": [32],
    "creatingBoardName": [32]
  }, [[0, "removeOverlayEvent", "removeOverlayHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["moods-boards", "moods-board-preview", "remove-overlay", "sticky-scroller"];
  components.forEach(tagName => { switch (tagName) {
    case "moods-boards":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MoodsBoards$1);
      }
      break;
    case "moods-board-preview":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "remove-overlay":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "sticky-scroller":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MoodsBoards = MoodsBoards$1;
const defineCustomElement = defineCustomElement$1;

export { MoodsBoards, defineCustomElement };
