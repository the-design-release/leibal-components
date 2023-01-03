import { Component, Host, Event, Prop, EventEmitter, h, getAssetPath } from '@stencil/core';
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
  @Prop({ mutable: true, reflect: true })
  imageUrl: string = '';

  @Prop({ mutable: true, reflect: true })
  postId: number | null = null;

  @Prop({ mutable: true, reflect: true })
  disabled: boolean = false;

  @Prop({ mutable: true, reflect: true })
  theme: Theme = 'light';

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

  render() {
    return (
      <Host>
        <div class="add-to-moods-button" onClick={() => this.openMoodsModalHandler()}>
          <img
            src={this.theme == 'light' ? getAssetPath('./assets/icon.png') : getAssetPath('./assets/icon-dark.png')}
            alt="Add To MOODS"
          />
          <slot></slot>
        </div>
      </Host>
    );
  }
}
