import { Component, Host, h, State, Watch, Prop, Element } from '@stencil/core';
export class MoodsModal {
  constructor() {
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
    return (h(Host, null,
      h("tele-portal", null,
        h("div", { ref: el => {
            this.container = el;
          }, tabIndex: -1, class: 'moods-modal ' + (this.open ? 'moods-modal--visible' : '') },
          h("div", { class: "moods-modal__content" },
            h("div", { class: "moods-modal__left" },
              h("img", { src: this.imageUrl })),
            h("div", { class: "moods-modal__right" },
              h("div", { class: "moods-modal__success" },
                h("div", { class: "moods-modal__success__text" }, "Saved!")),
              h("div", { class: "moods-modal__close", onClick: () => (this.open = false) }, "Close"),
              h("div", { class: "moods-modal__picker" },
                h("div", null,
                  h("div", { class: "moods-modal__text" }, "Choose A Board"),
                  h("moods-board-picker", { boards: this.boards })))))))));
  }
  static get is() { return "moods-modal"; }
  static get originalStyleUrls() { return {
    "$": ["moods-modal.css"]
  }; }
  static get styleUrls() { return {
    "$": ["moods-modal.css"]
  }; }
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
      "reflect": true,
      "defaultValue": "''"
    },
    "moodsApiUrl": {
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
      "attribute": "moods-api-url",
      "reflect": true,
      "defaultValue": "''"
    },
    "wpApiNonce": {
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
      "attribute": "wp-api-nonce",
      "reflect": true,
      "defaultValue": "''"
    },
    "isAuthenticated": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "is-authenticated",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "open": {},
    "imageUrl": {},
    "postId": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "open",
      "methodName": "stopBodyScroll"
    }, {
      "propName": "open",
      "methodName": "clampBodyWhenOpen"
    }]; }
}
