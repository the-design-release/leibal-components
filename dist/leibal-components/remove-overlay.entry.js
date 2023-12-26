import { r as registerInstance, f as createEvent, h, e as Host, i as getAssetPath, g as getElement } from './index-24a60cbb.js';

const removeOverlayCss = ":host{display:block}.remove-overlay{position:absolute;top:0px;left:0px;right:0px;bottom:0px;visibility:hidden}.remove-overlay__confirm{position:absolute;top:0px;left:0px;right:0px;bottom:0px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem;line-height:1rem;background:rgba(0, 0, 0, 0.5);z-index:5;opacity:0;visibility:hidden;transition:opacity 0.2s ease-in-out, visibility 0.2s ease-in-out}.remove-overlay__confirm--visible{visibility:visible;opacity:1;transition:opacity 0.2s ease-in-out}.remove-overlay__icon{position:absolute;top:0px;right:0px;z-index:10;padding:1rem;cursor:pointer;line-height:0}.remove-overlay__icon img{width:1rem}.remove-overlay__icon{opacity:0;visibility:hidden;transition:opacity 0.2s ease-in-out, visibility 0.2s ease-in-out}.remove-overlay__icon--visible{visibility:visible;opacity:1;transition:opacity 0.2s ease-in-out}.remove-overlay__message{margin-bottom:1.5rem;font-size:1rem;line-height:1.5rem;color:#f5f5f5}.remove-overlay__buttons{display:flex;justify-content:space-around}.remove-overlay__button--confirm{margin-right:1rem !important}.remove-overlay__button{display:block;font-size:1rem;line-height:1.5rem;cursor:pointer;background:rgba(0, 0, 0, 0);all:unset;border:1px solid #f5f5f5;padding:0.5rem 1.5rem;transition:all 0.2s ease-in-out;color:#f5f5f5}.remove-overlay__button:hover{background:#f5f5f5;color:#000;cursor:pointer}";

let RemoveOverlay = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.removeOverlayEvent = createEvent(this, "removeOverlayEvent", 7);
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
    return (h(Host, null, h("div", { class: "remove-overlay", onClick: e => {
        e.stopImmediatePropagation();
        e.preventDefault();
        return false;
      } }, h("div", { class: 'remove-overlay__confirm ' + (this.confirming ? 'remove-overlay__confirm--visible' : '') }, h("div", { class: "remove-overlay__message" }, "Remove ", this.name, "?"), h("div", { class: "remove-overlay__buttons" }, h("button", { class: "remove-overlay__button remove-overlay__button--confirm", onClick: this.handleConfirmClick.bind(this) }, "Yes"), h("button", { class: "remove-overlay__button remove-overlay__button--cancel", onClick: this.handleCancelClick.bind(this) }, "No"))), h("div", { class: 'remove-overlay__icon ' + (this.showIcon ? 'remove-overlay__icon--visible' : '') }, h("img", { src: getAssetPath('./assets/remove-icon.png'), onClick: this.handleRemoveClick.bind(this) })))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return getElement(this); }
  static get watchers() { return {
    "payload": ["payloadChangedHandler"]
  }; }
};
RemoveOverlay.style = removeOverlayCss;

export { RemoveOverlay as remove_overlay };
