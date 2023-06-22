import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './moods-board-picker2.js';
import { d as defineCustomElement$3 } from './simple-button2.js';
import { d as defineCustomElement$2 } from './tele-portal2.js';

const moodsModalCss = ":host{display:block}.moods-modal{height:100vh;left:0;position:fixed;top:0;width:100%;z-index:1000}.moods-modal>*{box-sizing:border-box}.moods-modal{background:#fff;opacity:0;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;visibility:hidden}.moods-modal--visible{opacity:1;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;visibility:visible}.moods-modal__content{display:block;height:100%}@media (min-width:768px){.moods-modal__content{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}.moods-modal__left{display:flex;flex-direction:column;justify-content:center;padding:3rem;z-index:20}@media (min-width:1024px){.moods-modal__left{padding:8rem}}.moods-modal__left{background:#f5f5f5}.moods-modal__left>*{max-height:40vh}@media (min-width:1024px){.moods-modal__left>*{max-height:60vh}}.moods-modal__left>*{-o-object-fit:contain;object-fit:contain}.moods-modal__right{padding:3rem;position:relative}.moods-modal__close{cursor:pointer;font-size:9px;font-weight:300;padding:1rem;position:absolute;right:0;text-decoration-line:underline;text-transform:uppercase;text-underline-offset:2px;top:0}.moods-modal__picker{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center}.moods-modal__picker>*{max-width:409px;width:100%}.moods-modal__text{margin-bottom:2rem}.moods-modal__success{--tw-bg-opacity:1;--tw-text-opacity:1;align-items:center;background-color:rgb(0 0 0/var(--tw-bg-opacity));bottom:0;color:rgb(255 255 255/var(--tw-text-opacity));display:flex;justify-content:center;left:0;position:absolute;right:0;top:0;transform:translateX(-100%);z-index:10}.moods-modal__success,.moods-modal__success--visible{transition:transform .3s ease-in-out}.moods-modal__success--visible{transform:translateX(0)}.moods-modal__success__text{font-size:1.25rem;line-height:1.75rem}";

let MoodsModal$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.open = false;
    this.imageUrl = '';
    this.postId = null;
    this.boards = '';
    this.moodsApiUrl = '';
    this.wpApiNonce = '';
    this.isAuthenticated = false;
  }
  componentWillLoad() {
    document.addEventListener('openMoodsModal', (event) => {
      this.open = true;
      this.imageUrl = event.detail.imageUrl;
      this.postId = event.detail.postId;
      if (!this.isAuthenticated) {
        setTimeout(() => {
          this.open = false;
          document.location.href = '/subscription/subscribe';
        }, 1000);
      }
    });
  }
  componentDidLoad() {
    this.container.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.open = false;
      }
    });
    document.addEventListener('moodsBoardPicked', (event) => {
      if (this.moodsApiUrl === '') {
        console.error('moodsApiUrl prop is not set.');
        return;
      }
      if (this.wpApiNonce === '') {
        console.error('wpApiNonce prop is not set.');
        return;
      }
      const board = event.detail.board;
      const data = new FormData();
      data.append('id', board.id || null);
      data.append('post_id', this.postId.toString());
      data.append('name', board.name);
      data.append('image_url', this.imageUrl);
      fetch(this.moodsApiUrl, {
        method: 'POST',
        headers: {
          'X-WP-Nonce': this.wpApiNonce,
        },
        body: data,
      })
        .then(response => {
        if (response.status === 200) {
          // Awful hack but it works.
          let boards = JSON.parse(this.boards);
          boards.push(board);
          this.boards = JSON.stringify(boards);
          // TODO: Trigger a success message animation.
        }
      })
        .catch(error => {
        console.error(error);
      });
      document.querySelector('.moods-modal__success').classList.add('moods-modal__success--visible');
      setTimeout(() => {
        this.open = false;
      }, 1000);
      setTimeout(() => {
        document.querySelector('.moods-modal__success').classList.remove('moods-modal__success--visible');
      }, 1500);
    });
  }
  stopBodyScroll() {
    if (this.open === true) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'inherit';
    }
  }
  clampBodyWhenOpen(open, oldOpen) {
    if (open === oldOpen)
      return;
    if (open) {
      this.container.focus();
    }
  }
  render() {
    return (h(Host, null, h("tele-portal", null, h("div", { ref: el => {
        this.container = el;
      }, tabIndex: -1, class: 'moods-modal ' + (this.open ? 'moods-modal--visible' : '') }, h("div", { class: "moods-modal__content" }, h("div", { class: "moods-modal__left" }, h("img", { src: this.imageUrl })), h("div", { class: "moods-modal__right" }, h("div", { class: "moods-modal__success" }, h("div", { class: "moods-modal__success__text" }, "Saved!")), h("div", { class: "moods-modal__close", onClick: () => (this.open = false) }, "Close"), h("div", { class: "moods-modal__picker" }, h("div", null, h("div", { class: "moods-modal__text" }, "Choose A Board"), h("moods-board-picker", { boards: this.boards })))))))));
  }
  get el() { return this; }
  static get watchers() { return {
    "open": ["stopBodyScroll", "clampBodyWhenOpen"]
  }; }
  static get style() { return moodsModalCss; }
};
MoodsModal$1 = /*@__PURE__*/ proxyCustomElement(MoodsModal$1, [0, "moods-modal", {
    "boards": [1537],
    "moodsApiUrl": [1537, "moods-api-url"],
    "wpApiNonce": [1537, "wp-api-nonce"],
    "isAuthenticated": [1540, "is-authenticated"],
    "open": [32],
    "imageUrl": [32],
    "postId": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["moods-modal", "moods-board-picker", "simple-button", "tele-portal"];
  components.forEach(tagName => { switch (tagName) {
    case "moods-modal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MoodsModal$1);
      }
      break;
    case "moods-board-picker":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "simple-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "tele-portal":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MoodsModal = MoodsModal$1;
const defineCustomElement = defineCustomElement$1;

export { MoodsModal, defineCustomElement };
