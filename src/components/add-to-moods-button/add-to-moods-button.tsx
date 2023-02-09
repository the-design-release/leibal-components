import { Component, Element, Host, Event, Prop, EventEmitter, h, getAssetPath, State } from '@stencil/core';
import { Theme } from '../../utils/theme';

export interface MoodsModalEvent {
  imageUrl: string;
  postId: number;
}

@Component({
  tag: 'add-to-moods-button',
  styleUrl: 'add-to-moods-button.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class AddToMoodsButton {
  @Element()
  el: HTMLElement;

  @Prop({ mutable: true, reflect: true })
  imageUrl: string = '';

  @Prop({ mutable: true, reflect: true })
  postId: number | null = null;

  @Prop({ mutable: true, reflect: true })
  disabled: boolean = false;

  @Prop({ mutable: true, reflect: true })
  theme: Theme = 'light';

  @Prop({ mutable: true, reflect: true })
  showOnHover: boolean = false;

  @Prop({ mutable: true, reflect: true })
  contentLocation: 'left' | 'right' = 'left';

  @State()
  hidden: boolean = false;

  @Event({
    eventName: 'openMoodsModal',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  openMoodsModal: EventEmitter<MoodsModalEvent>;

  openMoodsModalHandler() {
    if (!this.imageUrl || !this.postId) return;

    this.openMoodsModal.emit({
      imageUrl: this.imageUrl,
      postId: this.postId,
    });
  }

  componentDidLoad() {
    // Check if the parent element is being hovered.
    if (!this.showOnHover) return;
    this.hidden = true;

    // Get the parent element.
    const parent = this.el.parentElement;
    if (!parent) return;

    // Get the slots and the icon
    let leftSlot = this.el.shadowRoot.querySelector('.add-to-moods-button__content-left');
    let rightSlot = this.el.shadowRoot.querySelector('.add-to-moods-button__content-right');
    let icon = this.el.shadowRoot.querySelector('img');

    // Show the slots when hovering the icon.
    icon.addEventListener('mouseenter', () => {
      if (leftSlot) leftSlot.classList.add('add-to-moods-button__content-left--hover');
      if (rightSlot) rightSlot.classList.add('add-to-moods-button__content-right--hover');
    });

    icon.addEventListener('mouseleave', () => {
      if (leftSlot) leftSlot.classList.remove('add-to-moods-button__content-left--hover');
      if (rightSlot) rightSlot.classList.remove('add-to-moods-button__content-right--hover');
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
    return (
      <Host>
        <div
          class={
            'add-to-moods-button add-to-moods-button--show-on-hover ' +
            (!this.hidden ? 'add-to-moods-button--show-on-hover--hover' : '')
          }
          onClick={() => this.openMoodsModalHandler()}
        >
          {this.contentLocation === 'left' && (
            <div class="add-to-moods-button__content-left">
              <slot></slot>
            </div>
          )}
          <img
            src={this.theme == 'light' ? getAssetPath('./assets/icon.png') : getAssetPath('./assets/icon-dark.png')}
            alt="Add To MOODS"
          />
          {this.contentLocation === 'right' && (
            <div class="add-to-moods-button__content-right">
              <slot></slot>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
