import { r as registerInstance, h, e as Host } from './index-24a60cbb.js';

const moodsBoardPreviewCss = ":host{display:block}.moods-board-preview{cursor:pointer}.moods-board-preview__images{position:relative;margin-bottom:1rem;display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));grid-template-rows:repeat(2, minmax(0, 1fr));gap:2px;padding:0.75rem;border:1px solid #e3e3e3}.moods-board-preview__image{aspect-ratio:1 / 1;overflow:hidden;border:1px solid #e3e3e3}.moods-board-preview__image img{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.moods-board-preview__saved{margin-bottom:0.25rem;font-size:0.6rem;font-weight:300;text-transform:uppercase}.moods-board-preview__export{margin-bottom:0.75rem;font-size:0.6rem;font-weight:200;text-transform:uppercase}.moods-board-preview__name{margin-bottom:0.5rem;font-size:0.85rem;font-weight:300}";

const FILLER_IMAGE_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAQAAACWCLlpAAAA4ElEQVR42u3QMREAAAgEIL9/Xmet4OxBBNJTHEWWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZP20NjklnrS/uTwAAAAASUVORK5CYII=';
let MoodsBoard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    let thumbnails = this.board.images.map(image => image.imageUrl);
    if (this.board.images.length <= 4) {
      thumbnails = this.board.images.map(image => image.imageUrl);
      for (let i = 0; i < 4 - this.board.images.length; i++) {
        thumbnails.push(FILLER_IMAGE_URL);
      }
    }
    return (h(Host, null, h("div", { class: "moods-board-preview" }, h("div", { class: "moods-board-preview__images" }, thumbnails.slice(0, 4).map(image => (h("div", { class: "moods-board-preview__image" }, h("img", { src: image })))), h("remove-overlay", { name: "Board", payload: JSON.stringify(this.board) })), h("div", { class: "moods-board-preview__saved" }, this.board.images.length, " Saved"), h("div", { class: "moods-board-preview__export" }, "Export Collection"), h("div", { class: "moods-board-preview__name" }, this.board.name))));
  }
};
MoodsBoard.style = moodsBoardPreviewCss;

export { MoodsBoard as moods_board_preview };
