'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bb21c77a.js');

const removeOverlayCss = ":host{display:block}.remove-overlay,.remove-overlay__confirm{bottom:0;left:0;position:absolute;right:0;top:0;visibility:hidden}.remove-overlay__confirm{align-items:center;background:rgba(0,0,0,.5);display:flex;flex-direction:column;justify-content:center;line-height:1rem;opacity:0;padding:1rem;transition:opacity .2s ease-in-out,visibility .2s ease-in-out;z-index:5}.remove-overlay__confirm--visible{opacity:1;transition:opacity .2s ease-in-out;visibility:visible}.remove-overlay__icon{cursor:pointer;line-height:0;padding:1rem;position:absolute;right:0;top:0;z-index:10}.remove-overlay__icon img{width:1rem}.remove-overlay__icon{opacity:0;transition:opacity .2s ease-in-out,visibility .2s ease-in-out;visibility:hidden}.remove-overlay__icon--visible{opacity:1;transition:opacity .2s ease-in-out;visibility:visible}.remove-overlay__message{color:#f5f5f5;font-size:1rem;line-height:1.5rem;margin-bottom:1.5rem}.remove-overlay__buttons{display:flex;justify-content:space-around}.remove-overlay__button--confirm{margin-right:1rem!important}.remove-overlay__button{all:unset;background:transparent;border:1px solid #f5f5f5;color:#f5f5f5;cursor:pointer;display:block;font-size:1rem;line-height:1.5rem;padding:.5rem 1.5rem;transition:all .2s ease-in-out}.remove-overlay__button:hover{background:#f5f5f5;color:#000;cursor:pointer}";

let RemoveOverlay = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.removeOverlayEvent = index.createEvent(this, "removeOverlayEvent", 7);
    this.confirming = false;
    this.showIcon = false;
    this.payload = null;
    this.name = '';
    this.payloadJson = null;
  }
  payloadChangedHandler() {
    try {
      this.payloadJson = JSON.parse(this.payload);
    }
    catch (e) {
      console.error('Failed to parse remove-overlay payload: ', e);
    }
  }
  componentDidLoad() {
    try {
      this.payloadJson = JSON.parse(this.payload);
    }
    catch (e) {
      console.error('Failed to parse remove-overlay payload: ', e);
    }
    const parentEl = this.el.parentElement;
    if (!parentEl)
      return;
    parentEl.addEventListener('mouseenter', () => {
      if (!this.confirming)
        this.showIcon = true;
    });
    parentEl.addEventListener('mouseleave', () => {
      if (!this.confirming)
        this.showIcon = false;
    });
  }
  hideOverlay() {
    this.confirming = false;
  }
  showOverlay() {
    this.confirming = true;
  }
  toggleOverlay() {
    if (this.confirming) {
      this.hideOverlay();
    }
    else {
      this.showOverlay();
    }
  }
  handleRemoveClick() {
    this.toggleOverlay();
  }
  handleCancelClick() {
    this.hideOverlay();
  }
  handleConfirmClick() {
    this.hideOverlay();
    this.removeOverlayEvent.emit({
      payload: this.payloadJson,
    });
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "remove-overlay", onClick: e => {
        e.stopImmediatePropagation();
        e.preventDefault();
        return false;
      } }, index.h("div", { class: 'remove-overlay__confirm ' + (this.confirming ? 'remove-overlay__confirm--visible' : '') }, index.h("div", { class: "remove-overlay__message" }, "Remove ", this.name, "?"), index.h("div", { class: "remove-overlay__buttons" }, index.h("button", { class: "remove-overlay__button remove-overlay__button--confirm", onClick: this.handleConfirmClick.bind(this) }, "Yes"), index.h("button", { class: "remove-overlay__button remove-overlay__button--cancel", onClick: this.handleCancelClick.bind(this) }, "No"))), index.h("div", { class: 'remove-overlay__icon ' + (this.showIcon ? 'remove-overlay__icon--visible' : '') }, index.h("img", { src: index.getAssetPath('./assets/remove-icon.png'), onClick: this.handleRemoveClick.bind(this) })))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "payload": ["payloadChangedHandler"]
  }; }
};
RemoveOverlay.style = removeOverlayCss;

exports.remove_overlay = RemoveOverlay;
