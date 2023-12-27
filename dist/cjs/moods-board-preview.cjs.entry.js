'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-31caa8e8.js');

const moodsBoardPreviewCss = ":host{display:block}.moods-board-preview{cursor:pointer}.moods-board-preview__images{border:1px solid #e3e3e3;display:grid;gap:2px;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr));margin-bottom:1rem;padding:.75rem;position:relative}.moods-board-preview__image{aspect-ratio:1/1;border:1px solid #e3e3e3;overflow:hidden}.moods-board-preview__image img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.moods-board-preview__saved{font-size:.6rem;font-weight:300;margin-bottom:.25rem;text-transform:uppercase}.moods-board-preview__export{font-size:.6rem;font-weight:200;margin-bottom:.75rem;text-transform:uppercase}.moods-board-preview__name{font-size:.85rem;font-weight:300;margin-bottom:.5rem}";

const FILLER_IMAGE_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAQAAACWCLlpAAAA4ElEQVR42u3QMREAAAgEIL9/Xmet4OxBBNJTHEWWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZP20NjklnrS/uTwAAAAASUVORK5CYII=';
let MoodsBoard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    let thumbnails = this.board.images.map(image => image.imageUrl);
    if (this.board.images.length <= 4) {
      thumbnails = this.board.images.map(image => image.imageUrl);
      for (let i = 0; i < 4 - this.board.images.length; i++) {
        thumbnails.push(FILLER_IMAGE_URL);
      }
    }
    return (index.h(index.Host, null, index.h("div", { class: "moods-board-preview" }, index.h("div", { class: "moods-board-preview__images" }, thumbnails.slice(0, 4).map(image => (index.h("div", { class: "moods-board-preview__image" }, index.h("img", { src: image })))), index.h("remove-overlay", { name: "Board", payload: JSON.stringify(this.board) })), index.h("div", { class: "moods-board-preview__saved" }, this.board.images.length, " Saved"), index.h("div", { class: "moods-board-preview__export" }, "Export Collection"), index.h("div", { class: "moods-board-preview__name" }, this.board.name))));
  }
};
MoodsBoard.style = moodsBoardPreviewCss;

exports.moods_board_preview = MoodsBoard;
