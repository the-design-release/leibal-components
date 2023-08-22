import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './remove-overlay2.js';

const moodsBoardPreviewCss = ":host{display:block}.moods-board-preview{cursor:pointer}.moods-board-preview__images{border:1px solid #e3e3e3;display:grid;gap:2px;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr));margin-bottom:1rem;padding:.75rem;position:relative}.moods-board-preview__image{aspect-ratio:1/1;border:1px solid #e3e3e3;overflow:hidden}.moods-board-preview__image img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.moods-board-preview__saved{font-size:.6rem;margin-bottom:.25rem;text-transform:uppercase}.moods-board-preview__export{font-size:.6rem;font-weight:200;margin-bottom:.75rem;text-transform:uppercase}.moods-board-preview__name{font-size:1rem;line-height:1.5rem;margin-bottom:.5rem}";

const FILLER_IMAGE_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAQAAACWCLlpAAAA4ElEQVR42u3QMREAAAgEIL9/Xmet4OxBBNJTHEWWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZMmSJUuWLFmyZP20NjklnrS/uTwAAAAASUVORK5CYII=';
let MoodsBoard = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  static get style() { return moodsBoardPreviewCss; }
};
MoodsBoard = /*@__PURE__*/ proxyCustomElement(MoodsBoard, [1, "moods-board-preview", {
    "board": [16]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["moods-board-preview", "remove-overlay"];
  components.forEach(tagName => { switch (tagName) {
    case "moods-board-preview":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MoodsBoard);
      }
      break;
    case "remove-overlay":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { MoodsBoard as M, defineCustomElement as d };
