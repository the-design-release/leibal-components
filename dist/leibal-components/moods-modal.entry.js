import { r as registerInstance, h, e as Host, g as getElement } from './index-24a60cbb.js';

const moodsModalCss = ":host{display:block}.moods-modal{position:fixed;top:0px;left:0px;z-index:1000;height:100vh;width:100%}.moods-modal>*{box-sizing:border-box}.moods-modal{opacity:0;visibility:hidden;background:#fff;transition:visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s}.moods-modal--visible{opacity:1;visibility:visible;transition:visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s}.moods-modal__content{display:block;height:100%}@media (min-width: 768px){.moods-modal__content{display:grid}.moods-modal__content{grid-template-columns:repeat(2, minmax(0, 1fr))}}.moods-modal__left{z-index:20;display:flex;flex-direction:column;justify-content:center;padding:3rem}@media (min-width: 1024px){.moods-modal__left{padding:8rem}}.moods-modal__left{background:#f5f5f5}.moods-modal__left>*{max-height:60vh;-o-object-fit:contain;object-fit:contain}.moods-modal__right{position:relative;padding:3rem}.moods-modal__close{position:absolute;top:0px;right:0px;cursor:pointer;padding:1rem;font-size:9px;font-weight:300;text-transform:uppercase;-webkit-text-decoration-line:underline;text-decoration-line:underline;text-underline-offset:2px}.moods-modal__picker{display:flex;height:100%;flex-direction:column;align-items:center;justify-content:center}.moods-modal__picker>*{width:100%;max-width:409px}.moods-modal__text{margin-bottom:2rem}.moods-modal__success{position:absolute;top:0px;right:0px;left:0px;bottom:0px;z-index:10;display:flex;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition:transform 0.3s ease-in-out;transform:translateX(-100%)}.moods-modal__success--visible{transform:translateX(0);transition:transform 0.3s ease-in-out}.moods-modal__success__text{font-size:1.25rem;line-height:1.75rem}";

let MoodsModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
  static get watchers() { return {
    "open": ["stopBodyScroll", "clampBodyWhenOpen"]
  }; }
};
MoodsModal.style = moodsModalCss;

export { MoodsModal as moods_modal };
