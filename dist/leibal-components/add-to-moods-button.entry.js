import { r as registerInstance, f as createEvent, h, e as Host, i as getAssetPath, g as getElement } from './index-24a60cbb.js';

const addToMoodsButtonCss = ":host{display:block}.add-to-moods-button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;align-items:center;transition:opacity 0.2s ease-in-out}.add-to-moods-button--show-on-hover{opacity:0}.add-to-moods-button--show-on-hover .add-to-moods-button__content-left,.add-to-moods-button--show-on-hover .add-to-moods-button__content-right{transition:opacity 0.2s ease-in-out;opacity:0}.add-to-moods-button--show-on-hover .add-to-moods-button__content-left--hover,.add-to-moods-button--show-on-hover .add-to-moods-button__content-right--hover{transition:opacity 0.2s ease-in-out;opacity:1}.add-to-moods-button--show-on-hover--hover{opacity:1;transition:opacity 0.2s ease-in-out}.add-to-moods-button img{width:1.5rem;margin-top:-0.1rem;}";

let AddToMoodsButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.openMoodsModal = createEvent(this, "openMoodsModal", 7);
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
    return (h(Host, null, h("div", { class: 'add-to-moods-button ' +
        (this.showOnHover ? 'add-to-moods-button--show-on-hover ' : ' ') +
        (!this.hidden && this.showOnHover ? 'add-to-moods-button--show-on-hover--hover ' : ' '), onClick: () => this.openMoodsModalHandler() }, this.contentLocation === 'left' && (h("div", { class: "add-to-moods-button__content-left" }, h("slot", null))), h("img", { src: this.theme == 'light' ? getAssetPath('./assets/add-icon.png') : getAssetPath('./assets/add-icon-dark.png'), alt: "Add To MOODS" }), this.contentLocation === 'right' && (h("div", { class: "add-to-moods-button__content-right" }, h("slot", null))))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return getElement(this); }
};
AddToMoodsButton.style = addToMoodsButtonCss;

export { AddToMoodsButton as add_to_moods_button };
