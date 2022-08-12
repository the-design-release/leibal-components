import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'image-gallery-link',
})
export class ImageGalleryLink {
  @Prop({ mutable: true, reflect: true })
  imageIndex: number = 0;

  @Event({
    eventName: 'openImageGallery',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  openImageGallery: EventEmitter<number>;

  openImageGalleryHandler(index: number) {
    this.openImageGallery.emit(index);
  }

  render() {
    return (
      <Host onClick={() => this.openImageGalleryHandler(this.imageIndex + 1)}>
        <slot></slot>
      </Host>
    );
  }
}
