'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-31caa8e8.js');

const moodsBoardCss = ":host{display:block}.moods-board{cursor:default;display:block;font-size:13px}@media (min-width:768px){.moods-board{display:grid;gap:1rem;grid-template-columns:repeat(10,minmax(0,1fr))}.moods-board__sidebar{grid-column:span 2/span 2}}.moods-board__contents{display:block;gap:2rem}@media (min-width:768px){.moods-board__contents{display:grid;grid-column:span 8/span 8;grid-template-columns:repeat(4,minmax(0,1fr))}}.moods-board__content{cursor:pointer;margin-bottom:4rem}.moods-board__content__image{width:100%}.moods-board__content__title{font-size:9px;margin-bottom:.25rem;margin-top:1rem;text-transform:uppercase}.moods-board__content__subtitle{font-size:9px;font-weight:300;text-transform:uppercase}.moods-board__create-board{cursor:pointer;margin-bottom:.5rem;padding-bottom:.5rem;padding-top:.5rem}.moods-board__create-board:hover{font-weight:700;-webkit-text-decoration-line:underline;text-decoration-line:underline;text-underline-offset:2px}.moods-board__sort__header{margin-bottom:.5rem}.moods-board__sort-by{cursor:pointer;margin-bottom:.5rem;margin-left:1.5rem}.moods-board__sort-by--selected{font-weight:700;-webkit-text-decoration-line:underline;text-decoration-line:underline;text-underline-offset:2px}";

let MoodsBoard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.openMoodsGallery = index.createEvent(this, "openMoodsGallery", 7);
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
    return (index.h(index.Host, null, index.h("div", { class: "moods-board" }, index.h("div", { class: "moods-board__sidebar" }, index.h("sticky-scroller", { startOffset: 130 }, index.h("div", null, index.h("div", { class: "moods-board__create-board" }, "Export Collection"), index.h("div", { class: "moods-board__sort" }, index.h("div", { class: "moods-board__sort__header" }, "Sort Saved"), index.h("div", { class: 'moods-board__sort-by ' + this.sortSelectedClass('timestamp', 'desc'), onClick: () => this.setSort('timestamp', 'desc') }, "Latest"), index.h("div", { class: 'moods-board__sort-by ' + this.sortSelectedClass('timestamp', 'asc'), onClick: () => this.setSort('timestamp', 'asc') }, "Oldest"), index.h("div", { class: 'moods-board__sort-by ' + this.sortSelectedClass('postTitle', 'asc'), onClick: () => this.setSort('postTitle', 'asc') }, "A - Z"), index.h("div", { class: 'moods-board__sort-by ' + this.sortSelectedClass('postTitle', 'desc'), onClick: () => this.setSort('postTitle', 'desc') }, "Z - A"))))), index.h("div", { class: "moods-board__contents" }, columns.map(column => (index.h("div", null, column.map(board => (index.h("div", { class: "moods-board__content", onClick: () => {
        this.openMoodsGallery.emit(board);
      } }, index.h("div", { style: { position: 'relative', lineHeight: '0' } }, index.h("img", { class: "moods-board__content__image", src: board.imageUrl, alt: board.postTitle }), index.h("remove-overlay", { payload: JSON.stringify(board), name: "Image" })), index.h("div", { class: "moods-board__content__title" }, board.postTitle), index.h("div", { class: "moods-board__content__subtitle" }, board.postSubtitle)))))))))));
  }
  get el() { return index.getElement(this); }
};
MoodsBoard.style = moodsBoardCss;

exports.moods_board = MoodsBoard;
