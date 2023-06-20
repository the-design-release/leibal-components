'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-31caa8e8.js');

const addToMoodsButtonCss = ":host{display:block}.add-to-moods-button{align-items:center;cursor:pointer;display:flex;transition:opacity .2s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none}.add-to-moods-button--show-on-hover{opacity:0}.add-to-moods-button--show-on-hover .add-to-moods-button__content-left,.add-to-moods-button--show-on-hover .add-to-moods-button__content-right{opacity:0;transition:opacity .2s ease-in-out}.add-to-moods-button--show-on-hover .add-to-moods-button__content-left--hover,.add-to-moods-button--show-on-hover .add-to-moods-button__content-right--hover,.add-to-moods-button--show-on-hover--hover{opacity:1;transition:opacity .2s ease-in-out}.add-to-moods-button img{margin-top:-.1rem;width:1.5rem}";

let AddToMoodsButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.openMoodsModal = index.createEvent(this, "openMoodsModal", 7);
    this.imageUrl = '';
    this.postId = null;
    this.disabled = false;
    this.theme = 'light';
    this.showOnHover = false;
    this.contentLocation = 'left';
    this.hidden = false;
  }
  openMoodsModalHandler() {
    if (!this.imageUrl || !this.postId)
      return;
    this.openMoodsModal.emit({
      imageUrl: this.imageUrl,
      postId: this.postId,
    });
  }
  componentDidLoad() {
    // Check if the parent element is being hovered.
    if (!this.showOnHover)
      return;
    this.hidden = true;
    // Get the parent element.
    const parent = this.el.parentElement;
    if (!parent)
      return;
    // Get the slots and the icon
    let leftSlot = this.el.shadowRoot.querySelector('.add-to-moods-button__content-left');
    let rightSlot = this.el.shadowRoot.querySelector('.add-to-moods-button__content-right');
    let icon = this.el.shadowRoot.querySelector('img');
    // Show the slots when hovering the icon.
    icon.addEventListener('mouseenter', () => {
      if (leftSlot)
        leftSlot.classList.add('add-to-moods-button__content-left--hover');
      if (rightSlot)
        rightSlot.classList.add('add-to-moods-button__content-right--hover');
    });
    icon.addEventListener('mouseleave', () => {
      if (leftSlot)
        leftSlot.classList.remove('add-to-moods-button__content-left--hover');
      if (rightSlot)
        rightSlot.classList.remove('add-to-moods-button__content-right--hover');
    });
    // Show the button when hovering the parent element.
    parent.addEventListener('mouseenter', () => {
      this.hidden = false;
    });
    parent.addEventListener('mouseleave', () => {
      this.hidden = true;
    });
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: 'add-to-moods-button ' +
        (this.showOnHover ? 'add-to-moods-button--show-on-hover ' : ' ') +
        (!this.hidden && this.showOnHover ? 'add-to-moods-button--show-on-hover--hover ' : ' '), onClick: () => this.openMoodsModalHandler() }, this.contentLocation === 'left' && (index.h("div", { class: "add-to-moods-button__content-left" }, index.h("slot", null))), index.h("img", { src: this.theme == 'light' ? index.getAssetPath('./assets/add-icon.png') : index.getAssetPath('./assets/add-icon-dark.png'), alt: "Add To MOODS" }), this.contentLocation === 'right' && (index.h("div", { class: "add-to-moods-button__content-right" }, index.h("slot", null))))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return index.getElement(this); }
};
AddToMoodsButton.style = addToMoodsButtonCss;

const displayCardCss = "/*! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b{font-weight:bolder}code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}button,input,select,textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h1,p{margin:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}img,video{display:block;height:auto;max-width:100%;vertical-align:middle}[hidden]{display:none}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.visible{visibility:visible}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.z-10{z-index:10}.col-span-4{grid-column:span 4/span 4}.col-span-3{grid-column:span 3/span 3}.col-span-8{grid-column:span 8/span 8}.mb-8{margin-bottom:2rem}.block{display:block}.flex{display:flex}.grid{display:grid}.contents{display:contents}.hidden{display:none}.w-full{width:100%}.cursor-pointer{cursor:pointer}.resize{resize:both}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.border-l{border-left-width:1px}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity))}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.underline{text-decoration-line:underline}.blur{--tw-blur:blur(8px)}.blur,.invert{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.invert{--tw-invert:invert(100%)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:host{margin-bottom:3rem}@media (min-width:1024px){:host{margin-bottom:5rem}}:host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.display-card{cursor:pointer;letter-spacing:.1em}.display-card__image{aspect-ratio:auto 1/1;overflow:hidden;position:relative;width:100%}.display-card__image>*{background-position:50%;background-size:cover;height:100%;opacity:0;position:absolute;transition:opacity .3s ease-in-out;width:100%;z-index:1}.display-card__image>:first-child{opacity:1}.display-card__image:hover>:nth-child(2){opacity:1;z-index:2}.display-card__top{margin-bottom:1.25rem;margin-top:1.25rem}.display-card__top__title{font-size:9px;font-weight:400;margin-bottom:.25rem;text-transform:uppercase}.display-card__top__subtitle{font-size:9px;font-weight:300;text-transform:uppercase}.display-card__bottom__title{font-size:13px;font-weight:400;margin-bottom:.25rem}.display-card__bottom__subtitle{font-size:9px;font-weight:300}.display-card--featured{cursor:pointer;display:block;letter-spacing:.1em}@media (min-width:768px){.display-card--featured{display:grid;gap:2rem;grid-template-columns:repeat(6,minmax(0,1fr))}}.display-card--featured__right{display:flex;flex-direction:column;grid-column:span 2/span 2;justify-content:space-between}.display-card--featured__top{margin-bottom:1.75rem;margin-top:1.5rem}@media (min-width:768px){.display-card--featured__top{margin-bottom:0;margin-top:0}}.display-card--featured__top__title{font-size:1.875rem;font-weight:400;line-height:2.25rem;margin-bottom:1rem;padding-right:1rem}.display-card--featured__top__subtitle{font-size:1rem;font-weight:300;line-height:1.5rem}.display-card--featured__bottom__title{font-size:9px;font-weight:400;line-height:0px;margin-bottom:.75rem;text-transform:uppercase}.display-card--featured__bottom__title__name{margin-bottom:.25rem}.display-card--featured__bottom__subtitle,.display-card--featured__bottom__subtitle__name,.display-card--featured__bottom__title__name{font-size:9px;font-weight:300;text-transform:uppercase}.display-card--featured__bottom__subtitle__name{margin-bottom:.25rem}@media (min-width:1024px){.lg\\:block{display:block}.lg\\:hidden{display:none}}@media (min-width:1280px){.xl\\:mb-0{margin-bottom:0}.xl\\:grid{display:grid}.xl\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.xl\\:gap-8{gap:2rem}}";

let DisplayCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.theme = 'light';
    this.cardType = 'normal';
    this.bottomTitleName = '';
    this.bottomSubtitleName = '';
    this.images = '';
    this.linkTo = '#';
  }
  watchImages(value) {
    if (typeof value === 'string') {
      this._images = JSON.parse(value);
    }
    else {
      this._images = value;
    }
  }
  componentWillLoad() {
    this.watchImages(this.images);
  }
  render() {
    return (index.h(index.Host, null, this.cardType === 'normal' ? (index.h("a", { href: this.linkTo, class: "display-card" }, index.h("div", { class: "display-card__image" }, index.h("div", { style: { backgroundImage: `url(${this._images[0]})` } }), index.h("div", { style: { backgroundImage: `url(${this._images[1]})` } })), index.h("div", { class: "display-card__top" }, index.h("div", { class: "display-card__top__title" }, index.h("slot", { name: "top-title" })), index.h("div", { class: "display-card__top__subtitle" }, index.h("slot", { name: "top-subtitle" }))), index.h("div", { class: "display-card__bottom" }, index.h("div", { class: "display-card__bottom__title" }, index.h("slot", { name: "bottom-title" })), index.h("div", { class: "display-card__bottom__subtitle" }, index.h("slot", { name: "bottom-subtitle" }))))) : (index.h("a", { href: this.linkTo, class: "display-card--featured" }, index.h("div", { class: "col-span-4 display-card__image" }, index.h("div", { style: { backgroundImage: `url(${this._images[0]})` } }), index.h("div", { style: { backgroundImage: `url(${this._images[1]})` } })), index.h("div", { class: "display-card--featured__right" }, index.h("div", { class: "display-card--featured__top" }, index.h("div", { class: "display-card--featured__top__title" }, index.h("slot", { name: "top-title" })), index.h("div", { class: "display-card--featured__top__subtitle" }, index.h("slot", { name: "top-subtitle" }))), index.h("div", { class: "display-card--featured__bottom" }, index.h("div", { class: "display-card--featured__bottom__title" }, index.h("div", { class: "display-card--featured__bottom__title__name" }, this.bottomTitleName), index.h("slot", { name: "bottom-title" })), index.h("div", { class: "display-card--featured__bottom__subtitle" }, index.h("div", { class: "display-card--featured__bottom__subtitle__name" }, this.bottomSubtitleName), index.h("slot", { name: "bottom-subtitle" }))))))));
  }
  static get watchers() { return {
    "images": ["watchImages"]
  }; }
};
DisplayCard.style = displayCardCss;

class Helper {
  static getDescendantProperty(object, path, list = []) {
    let firstSegment;
    let remaining;
    let dotIndex;
    let value;
    let index;
    let length;

    if (path) {
      dotIndex = path.indexOf('.');

      if (dotIndex === -1) {
        firstSegment = path;
      } else {
        firstSegment = path.slice(0, dotIndex);
        remaining = path.slice(dotIndex + 1);
      }

      value = object[firstSegment];
      if (value !== null && typeof value !== 'undefined') {
        if (! remaining && (typeof value === 'string' || typeof value === 'number')) {
          list.push(value);
        } else if (Object.prototype.toString.call(value) === '[object Array]') {
          for (index = 0, length = value.length; index < length; index++) {
            Helper.getDescendantProperty(value[index], remaining, list);
          }
        } else if (remaining) {
          Helper.getDescendantProperty(value, remaining, list);
        }
      }
    } else {
      list.push(object);
    }

    return list;
  }
}

class FuzzySearch {
  constructor(haystack = [], keys = [], options = {}) {
    if (! Array.isArray(keys)) {
      options = keys;
      keys = [];
    }

    this.haystack = haystack;
    this.keys = keys;
    this.options = Object.assign({
      caseSensitive: false,
      sort: false,
    }, options);
  }

  search(query = '') {
    if (query === '') {
      return this.haystack;
    }

    const results = [];

    for (let i = 0; i < this.haystack.length; i++) {
      const item = this.haystack[i];

      if (this.keys.length === 0) {
        const score = FuzzySearch.isMatch(item, query, this.options.caseSensitive);

        if (score) {
          results.push({ item, score });
        }
      } else {
        for (let y = 0; y < this.keys.length; y++) {
          const propertyValues = Helper.getDescendantProperty(item, this.keys[y]);

          let found = false;

          for (let z = 0; z < propertyValues.length; z++) {
            const score = FuzzySearch.isMatch(propertyValues[z], query, this.options.caseSensitive);

            if (score) {
              found = true;

              results.push({ item, score });

              break;
            }
          }

          if (found) {
            break;
          }
        }
      }
    }

    if (this.options.sort) {
      results.sort((a, b) => a.score - b.score);
    }

    return results.map(result => result.item);
  }

  static isMatch(item, query, caseSensitive) {
    item = String(item);
    query = String(query);

    if (! caseSensitive) {
      item = item.toLocaleLowerCase();
      query = query.toLocaleLowerCase();
    }

    const indexes = FuzzySearch.nearestIndexesFor(item, query);

    if (! indexes) {
      return false;
    }

    // Exact matches should be first.
    if (item === query) {
      return 1;
    }

    // If we have more than 2 letters, matches close to each other should be first.
    if (indexes.length > 1) {
      return 2 + (indexes[indexes.length - 1] - indexes[0]);
    }

    // Matches closest to the start of the string should be first.
    return 2 + indexes[0];
  }

  static nearestIndexesFor(item, query) {
    const letters = query.split('');
    let indexes = [];

    const indexesOfFirstLetter = FuzzySearch.indexesOfFirstLetter(item, query);

    indexesOfFirstLetter.forEach((startingIndex, loopingIndex) => {
      let index = startingIndex + 1;

      indexes[loopingIndex] = [startingIndex];

      for (let i = 1; i < letters.length; i++) {
        const letter = letters[i];

        index = item.indexOf(letter, index);

        if (index === -1) {
          indexes[loopingIndex] = false;

          break;
        }

        indexes[loopingIndex].push(index);

        index++;
      }
    });

    indexes = indexes.filter(letterIndexes => letterIndexes !== false);

    if (! indexes.length) {
      return false;
    }

    return indexes.sort((a, b) => {
      if (a.length === 1) {
        return a[0] - b[0];
      }

      a = a[a.length - 1] - a[0];
      b = b[b.length - 1] - b[0];

      return a - b;
    })[0];
  }

  static indexesOfFirstLetter(item, query) {
    const match = query[0];

    return item.split('').map((letter, index) => {
      if (letter !== match) {
        return false;
      }

      return index;
    }).filter(index => index !== false);
  }
}

const moodsBoardPickerCss = ":host{display:block}.moods-board-picker{display:block;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}.moods-board-picker__container{background:#fff;border:1px solid #000;padding:1rem 1.5rem;position:relative}.moods-board-picker__selected{display:flex;width:100%}.moods-board-picker__selected__arrow{cursor:pointer}.moods-board-picker__selected__arrow,.moods-board-picker__selected__arrow--open{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.moods-board-picker__selected__arrow--open{transform:rotate(180deg)}.moods-board-picker__title{font-size:9px;font-weight:300;margin-bottom:.5rem;text-transform:uppercase;width:100%}.moods-board-picker__input{border-width:0;display:block;font-weight:300;padding:0;width:100%}.moods-board-picker__input,.moods-board-picker__input:focus{outline:2px solid transparent;outline-offset:2px}.moods-board-picker__input{background:none;font-size:1rem;letter-spacing:1.5px}.moods-board-picker__input::-moz-placeholder{color:#000;font-family:Roboto,sans-serif;font-size:1rem;letter-spacing:1.5px;opacity:1}.moods-board-picker__input::placeholder{color:#000;font-family:Roboto,sans-serif;font-size:1rem;letter-spacing:1.5px;opacity:1}.moods-board-picker__input::-moz-selection{background:none}.moods-board-picker__input::selection{background:none}.moods-board-picker__options{left:0;position:absolute;right:0;top:0;z-index:10}@media (min-width:1024px){.moods-board-picker__options{top:auto}}.moods-board-picker__options{background:#fff;border:1px solid #000;margin-top:-1px;max-height:275px;opacity:0;overflow-x:hidden;overflow-y:auto;scrollbar-width:none;transform:translateY(-100%);transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;visibility:hidden}.moods-board-picker__options--visible{opacity:1;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;visibility:visible}.moods-board-picker__options::-webkit-scrollbar{display:none}@media (min-width:1024px){.moods-board-picker__options{transform:translateY(0)}}.moods-board-picker__option{cursor:pointer;display:block;padding:.75rem 1.5rem;transition-duration:.3s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);width:100%}.moods-board-picker__option:first-child{padding-top:0}.moods-board-picker__option:hover{background:#000;color:#fff;transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.moods-board-picker__option--no-results{cursor:default!important;text-decoration:none!important}.moods-board-picker__new-board{align-items:center;display:flex;justify-content:space-between;padding-left:1.5rem;padding-right:1.5rem;padding-top:1.5rem}.moods-board-picker__new-board>:first-child{width:100%}.moods-board-picker__new-board>:last-child{cursor:pointer;margin-left:1.5rem}.moods-board-picker__new-board-icon{width:1.5rem}.moods-board-picker__new-board-input{--tw-border-opacity:1;border-bottom-width:1px;border-color:rgb(0 0 0/var(--tw-border-opacity));margin-bottom:.5rem;padding-bottom:1rem}.moods-board-picker__button{margin-top:2rem;width:100%}";

let MoodsBoardPicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.moodsBoardPicked = index.createEvent(this, "moodsBoardPicked", 7);
    this.boards = '';
    this.open = false;
    this.moodBoards = [];
    this.inputValue = '';
    this.newBoardName = '';
  }
  componentDidLoad() {
    try {
      this.moodBoards = JSON.parse(this.boards);
    }
    finally {
      this.searcher = new FuzzySearch(this.moodBoards, ['name'], {
        caseSensitive: false,
      });
    }
    // Close on click outside
    document.addEventListener('click', (event) => {
      if (!this.el.contains(event.target)) {
        this.open = false;
      }
    });
  }
  toggleOpen() {
    this.open = !this.open;
  }
  onInputKeyDown(event) {
    if (event.key === 'Enter') {
      if (!this.selectedMoodBoard) {
        this.selectedMoodBoard = this.moodBoards[0];
      }
      this.toggleOpen();
      return;
    }
    if (event.key === 'Escape') {
      event.stopPropagation();
      event.preventDefault();
      this.open = false;
      return;
    }
    if (!this.open) {
      this.open = true;
    }
  }
  onInputInput(event) {
    this.inputValue = event.target.value;
    if (this.inputValue) {
      this.moodBoards = this.searcher.search(this.inputValue);
      // TODO: How to handle no search results?
      // if (this.moodBoards.length === 0) {
      //   this.moodBoards = JSON.parse(this.boards);
      // }
    }
    else {
      this.moodBoards = JSON.parse(this.boards);
    }
  }
  selectedMoodBoardChanged(selectedMoodBoard, oldSelectedMoodBoard) {
    if (selectedMoodBoard !== oldSelectedMoodBoard) {
      this.inputValue = selectedMoodBoard.name;
    }
  }
  handleNewBoardInput(event) {
    this.newBoardName = event.target.value;
  }
  handleNewBoardClick() {
    this.selectedMoodBoard = {
      postId: null,
      name: this.newBoardName,
    };
    this.newBoardName = '';
    this.open = false;
  }
  handleBoardClick() {
    this.moodsBoardPicked.emit({
      board: this.selectedMoodBoard,
    });
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "moods-board-picker" }, index.h("div", { onClick: () => this.toggleOpen(), class: "moods-board-picker__container" }, index.h("div", { class: "moods-board-picker__title" }, "Save Into:"), index.h("div", { class: "moods-board-picker__selected" }, index.h("input", { class: "moods-board-picker__input", type: "text", value: this.inputValue, onKeyDown: this.onInputKeyDown.bind(this), onInput: this.onInputInput.bind(this), onClick: e => {
        if (this.open) {
          e.stopImmediatePropagation();
          return false;
        }
      }, placeholder: "Search..." }), index.h("span", { class: 'moods-board-picker__selected__arrow ' +
        (this.open ? 'moods-board-picker__selected__arrow--open' : '') }, "\u25BC"))), index.h("div", { class: 'moods-board-picker__options ' + (this.open ? 'moods-board-picker__options--visible' : '') }, index.h("div", { class: "moods-board-picker__new-board" }, index.h("div", null, index.h("div", { class: "moods-board-picker__title" }, "Create New Board:"), index.h("input", { class: "moods-board-picker__input moods-board-picker__new-board-input", type: "text", placeholder: "Start Typing...", onInput: this.handleNewBoardInput.bind(this), onKeyDown: e => {
        if (e.key === 'Enter') {
          this.handleNewBoardClick();
        }
      }, value: this.newBoardName })), index.h("div", { onClick: this.handleNewBoardClick.bind(this) }, index.h("img", { class: "moods-board-picker__new-board-icon", src: index.getAssetPath('./assets/plus.png') }))), this.moodBoards.length === 0 && (index.h("div", { class: "moods-board-picker__option moods-board-picker__option--no-results" }, "No results")), this.moodBoards.map(moodBoard => (index.h("div", { class: "moods-board-picker__option", onClick: () => {
        this.selectedMoodBoard = moodBoard;
        this.toggleOpen();
      } }, moodBoard.name)))), index.h("simple-button", { theme: "dark", onClick: () => {
        this.handleBoardClick();
      }, class: "moods-board-picker__button" }, "Save"))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "selectedMoodBoard": ["selectedMoodBoardChanged"]
  }; }
};
MoodsBoardPicker.style = moodsBoardPickerCss;

const moodsModalCss = ":host{display:block}.moods-modal{height:100vh;left:0;position:fixed;top:0;width:100%;z-index:1000}.moods-modal>*{box-sizing:border-box}.moods-modal{background:#fff;opacity:0;transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;visibility:hidden}.moods-modal--visible{opacity:1;transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;visibility:visible}.moods-modal__content{display:block;height:100%}@media (min-width:768px){.moods-modal__content{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}.moods-modal__left{display:flex;flex-direction:column;justify-content:center;padding:3rem;z-index:20}@media (min-width:1024px){.moods-modal__left{padding:8rem}}.moods-modal__left{background:#f5f5f5}.moods-modal__left>*{max-height:40vh}@media (min-width:1024px){.moods-modal__left>*{max-height:60vh}}.moods-modal__left>*{-o-object-fit:contain;object-fit:contain}.moods-modal__right{padding:3rem;position:relative}.moods-modal__close{cursor:pointer;font-size:9px;font-weight:300;padding:1rem;position:absolute;right:0;text-decoration-line:underline;text-transform:uppercase;text-underline-offset:2px;top:0}.moods-modal__picker{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center}.moods-modal__picker>*{max-width:409px;width:100%}.moods-modal__text{margin-bottom:2rem}.moods-modal__success{--tw-bg-opacity:1;--tw-text-opacity:1;align-items:center;background-color:rgb(0 0 0/var(--tw-bg-opacity));bottom:0;color:rgb(255 255 255/var(--tw-text-opacity));display:flex;justify-content:center;left:0;position:absolute;right:0;top:0;transform:translateX(-100%);z-index:10}.moods-modal__success,.moods-modal__success--visible{transition:transform .3s ease-in-out}.moods-modal__success--visible{transform:translateX(0)}.moods-modal__success__text{font-size:1.25rem;line-height:1.75rem}";

let MoodsModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, index.h("tele-portal", null, index.h("div", { ref: el => {
        this.container = el;
      }, tabIndex: -1, class: 'moods-modal ' + (this.open ? 'moods-modal--visible' : '') }, index.h("div", { class: "moods-modal__content" }, index.h("div", { class: "moods-modal__left" }, index.h("img", { src: this.imageUrl })), index.h("div", { class: "moods-modal__right" }, index.h("div", { class: "moods-modal__success" }, index.h("div", { class: "moods-modal__success__text" }, "Saved!")), index.h("div", { class: "moods-modal__close", onClick: () => (this.open = false) }, "Close"), index.h("div", { class: "moods-modal__picker" }, index.h("div", null, index.h("div", { class: "moods-modal__text" }, "Choose A Board"), index.h("moods-board-picker", { boards: this.boards })))))))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "open": ["stopBodyScroll", "clampBodyWhenOpen"]
  }; }
};
MoodsModal.style = moodsModalCss;

const simpleButtonCss = ":host{--font-family:var(--leibal-components-font-family,sans-serif);--color-light:#fff;--color-dark:#222;display:block;font-family:var(--font-family)}.simple-button{align-items:center;background-color:var(--color-light);border-color:var(--color-dark);border-style:solid;border-width:1px;color:var(--color-dark);cursor:pointer;display:flex;justify-content:center;padding:1.5rem 1rem;position:relative;transition-duration:.3s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.simple-button--disabled{cursor:not-allowed;opacity:.5}@media (min-width:768px){.simple-button__text{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.simple-button__text{font-size:1.25rem;line-height:1.75rem}}.simple-button__icon{height:1rem;position:absolute;right:1rem;top:1rem;width:1rem}.simple-button--dark,.simple-button:active,.simple-button:hover{background-color:var(--color-dark);color:var(--color-light)}.simple-button--dark{border-color:var(--color-dark)}.simple-button--dark:active,.simple-button--dark:hover{background-color:var(--color-light);color:var(--color-dark)}";

let SimpleButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.theme = 'light';
    this.fillWidth = false;
    this.disabled = false;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: 'simple-button ' +
        (this.fillWidth ? 'simple-button--full-width ' : ' ') +
        (this.theme == 'dark' ? 'simple-button--dark ' : ' ') +
        (this.disabled ? 'simple-button--disabled' : ' '), role: "button", "aria-pressed": "false", tabindex: "0" }, index.h("div", { class: "simple-button__icon" }, index.h("slot", { name: "icon" })), index.h("div", { class: "simple-button__text" }, index.h("slot", null)))));
  }
};
SimpleButton.style = simpleButtonCss;

// Use require here to keep TS happy...
// TS has a confilicting internal type with this module
// const ResizeObserver = require('resize-observer-polyfill');
const getScrollParent = node => {
  let parent = node;
  while ((parent = parent.parentElement)) {
    const overflowYVal = getComputedStyle(parent, null).getPropertyValue('overflow-y');
    if (parent === document.body)
      return window;
    if (overflowYVal === 'auto' || overflowYVal === 'scroll')
      return parent;
  }
  return window;
};
const offsetTill = (node, target) => {
  let current = node;
  let offset = 0;
  // If target is not an offsetParent itself, subtract its offsetTop and set correct target
  if (target.firstChild && target.firstChild.offsetParent !== target) {
    offset += node.offsetTop - target.offsetTop;
    target = node.offsetParent;
    offset += -node.offsetTop;
  }
  do {
    offset += current.offsetTop;
    current = current.offsetParent;
  } while (current && current !== target);
  return offset;
};
const getParentNode = node => {
  let currentParent = node.parentNode;
  while (currentParent) {
    const style = getComputedStyle(currentParent, null);
    if (style.getPropertyValue('display') !== 'contents')
      break;
    currentParent = currentParent.parentNode;
  }
  return currentParent || window;
};
let stickyProp = null;
if (typeof CSS !== 'undefined' && CSS.supports) {
  if (CSS.supports('position', 'sticky'))
    stickyProp = 'sticky';
  else if (CSS.supports('position', '-webkit-sticky'))
    stickyProp = '-webkit-sticky';
}
// Inspired by https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
let passiveArg = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    // eslint-disable-next-line getter-return
    get() {
      passiveArg = { passive: true };
    },
  });
  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
}
catch (e) { }
const registerNode = (node, { offsetTop, offsetBottom, bottom }) => {
  const scrollPane = getScrollParent(node);
  let latestScrollY = scrollPane === window ? window.scrollY : scrollPane.scrollTop;
  const unsubs = [];
  let mode, offset, nodeHeight, naturalTop, parentHeight, scrollPaneOffset, viewPortHeight;
  const getCurrentOffset = () => {
    if (mode === 'relative')
      return offset;
    if (mode === 'stickyTop') {
      return Math.max(0, scrollPaneOffset + latestScrollY - naturalTop + offsetTop);
    }
    if (mode === 'stickyBottom') {
      return Math.max(0, scrollPaneOffset + latestScrollY + viewPortHeight - (naturalTop + nodeHeight + offsetBottom));
    }
  };
  const changeToStickyBottomIfBoxTooLow = scrollY => {
    if (scrollY + scrollPaneOffset + viewPortHeight >= naturalTop + nodeHeight + offset + offsetBottom) {
      changeMode('stickyBottom');
    }
  };
  const changeMode = newMode => {
    mode = newMode;
    if (newMode === 'relative') {
      node.style.position = 'relative';
      if (bottom) {
        const nextBottom = Math.max(0, parentHeight - nodeHeight - offset);
        node.style.bottom = `${nextBottom}px`;
      }
      else {
        node.style.top = `${offset}px`;
      }
    }
    else {
      node.style.position = stickyProp;
      if (newMode === 'stickyBottom') {
        if (bottom) {
          node.style.bottom = `${offsetBottom}px`;
        }
        else {
          node.style.top = `${viewPortHeight - nodeHeight - offsetBottom}px`;
        }
      }
      else {
        // stickyTop
        if (bottom) {
          node.style.bottom = `${viewPortHeight - nodeHeight - offsetBottom}px`;
        }
        else {
          node.style.top = `${offsetTop}px`;
        }
      }
    }
    offset = getCurrentOffset();
  };
  const initial = () => {
    if (bottom) {
      if (mode !== 'stickyBottom')
        changeMode('stickyBottom');
    }
    else {
      if (mode !== 'stickyTop')
        changeMode('stickyTop');
    }
  };
  const addListener = (element, event, handler, passive = undefined) => {
    element.addEventListener(event, handler, passive);
    unsubs.push(() => element.removeEventListener(event, handler));
  };
  const handleScroll = () => {
    const scrollY = scrollPane === window ? window.scrollY : scrollPane.scrollTop;
    if (scrollY === latestScrollY)
      return;
    if (nodeHeight + offsetTop + offsetBottom <= viewPortHeight) {
      // Just make it sticky if node smaller than viewport
      initial();
      latestScrollY = scrollY;
      return;
    }
    const scrollDelta = scrollY - latestScrollY;
    offset = getCurrentOffset();
    if (scrollDelta > 0) {
      // scroll down
      if (mode === 'stickyTop') {
        if (scrollY + scrollPaneOffset + offsetTop > naturalTop) {
          if (scrollY + scrollPaneOffset + viewPortHeight <= naturalTop + nodeHeight + offset + offsetBottom) {
            changeMode('relative');
          }
          else {
            changeMode('stickyBottom');
          }
        }
      }
      else if (mode === 'relative') {
        changeToStickyBottomIfBoxTooLow(scrollY);
      }
    }
    else {
      // scroll up
      if (mode === 'stickyBottom') {
        if (scrollPaneOffset + scrollY + viewPortHeight < naturalTop + parentHeight + offsetBottom) {
          if (scrollPaneOffset + scrollY + offsetTop >= naturalTop + offset) {
            changeMode('relative');
          }
          else {
            changeMode('stickyTop');
          }
        }
      }
      else if (mode === 'relative') {
        if (scrollPaneOffset + scrollY + offsetTop < naturalTop + offset) {
          changeMode('stickyTop');
        }
      }
    }
    latestScrollY = scrollY;
  };
  const handleWindowResize = () => {
    viewPortHeight = window.innerHeight;
    scrollPaneOffset = 0;
    handleScroll();
  };
  const handleScrollPaneResize = () => {
    viewPortHeight = scrollPane.offsetHeight;
    // Only applicable if scrollPane is an offsetParent
    if (scrollPane.firstChild.offsetParent === scrollPane) {
      scrollPaneOffset = scrollPane.getBoundingClientRect().top;
    }
    else {
      scrollPaneOffset = 0;
    }
    handleScroll();
  };
  const handleParentNodeResize = () => {
    const parentNode = getParentNode(node);
    const computedParentStyle = getComputedStyle(parentNode, null);
    const parentPaddingTop = parseInt(computedParentStyle.getPropertyValue('padding-top'), 10);
    const parentPaddingBottom = parseInt(computedParentStyle.getPropertyValue('padding-bottom'), 10);
    const verticalParentPadding = parentPaddingTop + parentPaddingBottom;
    naturalTop = offsetTill(parentNode, scrollPane) + parentPaddingTop + scrollPaneOffset;
    const oldParentHeight = parentHeight;
    parentHeight = parentNode.getBoundingClientRect().height - verticalParentPadding;
    if (mode === 'relative') {
      if (bottom) {
        changeMode('relative');
      }
      else {
        // If parent height decreased...
        if (oldParentHeight > parentHeight) {
          changeToStickyBottomIfBoxTooLow(latestScrollY);
        }
      }
    }
    if (oldParentHeight !== parentHeight && mode === 'relative') {
      latestScrollY = Number.POSITIVE_INFINITY;
      handleScroll();
    }
  };
  const handleNodeResize = ({ initial: initialArg } = { initial: false }) => {
    const prevHeight = nodeHeight;
    nodeHeight = node.getBoundingClientRect().height;
    if (!initialArg && prevHeight !== nodeHeight) {
      if (nodeHeight + offsetTop + offsetBottom <= viewPortHeight) {
        // Just make it sticky if node smaller than viewport
        mode = undefined;
        initial();
        return;
      }
      else {
        const diff = prevHeight - nodeHeight;
        const lowestPossible = parentHeight - nodeHeight;
        const nextOffset = Math.min(lowestPossible, getCurrentOffset() + (bottom ? diff : 0));
        offset = Math.max(0, nextOffset);
        if (!bottom || mode !== 'stickyBottom')
          changeMode('relative');
      }
    }
  };
  const addResizeObserver = (n, handler) => {
    const ro = new ResizeObserver(handler);
    ro.observe(n);
    unsubs.push(() => ro.disconnect());
  };
  addListener(scrollPane, 'scroll', handleScroll, passiveArg);
  addListener(scrollPane, 'mousewheel', handleScroll, passiveArg);
  if (scrollPane === window) {
    addListener(window, 'resize', handleWindowResize);
    handleWindowResize();
  }
  else {
    addResizeObserver(scrollPane, handleScrollPaneResize);
    handleScrollPaneResize();
  }
  addResizeObserver(getParentNode(node), handleParentNodeResize);
  handleParentNodeResize();
  addResizeObserver(node, handleNodeResize);
  handleNodeResize({ initial: true });
  initial();
  return () => unsubs.forEach(fn => fn());
};
let StickyScroller = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.startOffset = 0;
    this.endOffset = 0;
    this.bottom = false;
    this.mode = 'relative';
    this.argsRef = {
      offsetTop: this.startOffset,
      offsetBottom: this.endOffset,
      bottom: this.bottom,
      mode: this.mode,
    };
  }
  componentWillLoad() {
    window.addEventListener('load', () => {
      registerNode(this.el, this.argsRef);
    });
  }
  componentShouldUpdate() {
    this.argsRef = { offsetTop: this.startOffset, offsetBottom: this.endOffset, bottom: this.bottom, mode: this.mode };
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};

let TelePortal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  createPortal() {
    this.portal = document.createElement('div');
    document.body.prepend(this.portal);
  }
  moveElementToPortal() {
    this.portal.appendChild(this.el);
  }
  componentWillLoad() {
    this.createPortal();
  }
  componentDidLoad() {
    this.moveElementToPortal();
  }
  disconnectCallback() {
    this.portal.remove();
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};

exports.add_to_moods_button = AddToMoodsButton;
exports.display_card = DisplayCard;
exports.moods_board_picker = MoodsBoardPicker;
exports.moods_modal = MoodsModal;
exports.simple_button = SimpleButton;
exports.sticky_scroller = StickyScroller;
exports.tele_portal = TelePortal;
