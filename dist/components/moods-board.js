import { HTMLElement, createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './remove-overlay2.js';
import { d as defineCustomElement$2 } from './sticky-scroller2.js';

const moodsBoardCss = ":host{display:block}.moods-board{cursor:default;display:block;font-size:13px}@media (min-width:768px){.moods-board{display:grid;gap:1rem;grid-template-columns:repeat(10,minmax(0,1fr))}.moods-board__sidebar{grid-column:span 2/span 2}}.moods-board__contents{display:block;gap:2rem}@media (min-width:768px){.moods-board__contents{display:grid;grid-column:span 8/span 8;grid-template-columns:repeat(4,minmax(0,1fr))}}.moods-board__content{cursor:pointer;margin-bottom:4rem}.moods-board__content__image{width:100%}.moods-board__content__title{font-size:9px;margin-bottom:.25rem;margin-top:1rem;text-transform:uppercase}.moods-board__content__subtitle{font-size:9px;font-weight:300;text-transform:uppercase}.moods-board__create-board{cursor:pointer;margin-bottom:.5rem;padding-bottom:.5rem;padding-top:.5rem}.moods-board__create-board:hover{font-weight:700;-webkit-text-decoration-line:underline;text-decoration-line:underline;text-underline-offset:2px}.moods-board__sort__header{margin-bottom:.5rem}.moods-board__sort-by{cursor:pointer;margin-bottom:.5rem;margin-left:1.5rem}.moods-board__sort-by--selected{font-weight:700;-webkit-text-decoration-line:underline;text-decoration-line:underline;text-underline-offset:2px}";

let MoodsBoard$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.openMoodsGallery = createEvent(this, "openMoodsGallery", 7);
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
    return (h(Host, null, h("div", { class: "moods-board" }, h("div", { class: "moods-board__sidebar" }, h("sticky-scroller", { startOffset: 130 }, h("div", null, h("div", { class: "moods-board__create-board" }, "Export Collection"), h("div", { class: "moods-board__sort" }, h("div", { class: "moods-board__sort__header" }, "Sort Saved"), h("div", { class: 'moods-board__sort-by ' + this.sortSelectedClass('timestamp', 'desc'), onClick: () => this.setSort('timestamp', 'desc') }, "Latest"), h("div", { class: 'moods-board__sort-by ' + this.sortSelectedClass('timestamp', 'asc'), onClick: () => this.setSort('timestamp', 'asc') }, "Oldest"), h("div", { class: 'moods-board__sort-by ' + this.sortSelectedClass('postTitle', 'asc'), onClick: () => this.setSort('postTitle', 'asc') }, "A - Z"), h("div", { class: 'moods-board__sort-by ' + this.sortSelectedClass('postTitle', 'desc'), onClick: () => this.setSort('postTitle', 'desc') }, "Z - A"))))), h("div", { class: "moods-board__contents" }, columns.map(column => (h("div", null, column.map(board => (h("div", { class: "moods-board__content", onClick: () => {
        this.openMoodsGallery.emit(board);
      } }, h("div", { style: { position: 'relative', lineHeight: '0' } }, h("img", { class: "moods-board__content__image", src: board.imageUrl, alt: board.postTitle }), h("remove-overlay", { payload: JSON.stringify(board), name: "Image" })), h("div", { class: "moods-board__content__title" }, board.postTitle), h("div", { class: "moods-board__content__subtitle" }, board.postSubtitle)))))))))));
  }
  get el() { return this; }
  static get style() { return moodsBoardCss; }
};
MoodsBoard$1 = /*@__PURE__*/ proxyCustomElement(MoodsBoard$1, [1, "moods-board", {
    "boardId": [1537, "board-id"],
    "wpNonce": [1537, "wp-nonce"],
    "images": [1],
    "imageList": [32],
    "sortBy": [32],
    "sortOrder": [32]
  }, [[0, "removeOverlayEvent", "removeOverlayHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["moods-board", "remove-overlay", "sticky-scroller"];
  components.forEach(tagName => { switch (tagName) {
    case "moods-board":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MoodsBoard$1);
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

const MoodsBoard = MoodsBoard$1;
const defineCustomElement = defineCustomElement$1;

export { MoodsBoard, defineCustomElement };
