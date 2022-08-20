import { Component, Element, Host, h, Prop, State, Watch, Listen } from '@stencil/core';

import Swiper, { Navigation, Pagination, Keyboard, SwiperOptions } from 'swiper';
import { zeroPad } from '../../utils';

const DEFAULT_SWIPER_OPTIONS: SwiperOptions = {
  modules: [Navigation, Pagination, Keyboard],
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent(number) {
      return zeroPad(number, 2);
    },
    formatFractionTotal(number) {
      return zeroPad(number, 2);
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  centeredSlides: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
};

@Component({
  tag: 'image-gallery',
  styleUrl: 'image-gallery.css',
})
export class ImageGallery {
  @Element()
  el: HTMLDivElement;

  @Prop({ mutable: true, reflect: true })
  images: string = '[]';

  @Prop({ mutable: true, reflect: true })
  postTitle: string;

  @Prop({ mutable: true, reflect: true })
  postExcerpt: string;

  @Prop({ mutable: true, reflect: true })
  previewImage: string;

  @Prop({ mutable: true, reflect: true })
  photographer: string;

  @Prop({ mutable: true, reflect: true })
  canEnquire: boolean = false;

  @State()
  isModalOpen: boolean = false;

  // Parsed JSON images.
  _images: string[] = [];

  swiper: Swiper;

  componentWillLoad() {
    this._images = JSON.parse(this.images);
  }

  componentDidLoad() {
    this.stopBodyScroll();
    this.swiper = new Swiper('.image-gallery__images__swiper', DEFAULT_SWIPER_OPTIONS);
  }

  @Watch('isModalOpen')
  clampBodyScroll(isModalOpen, oldIsModalOpen) {
    if (isModalOpen === oldIsModalOpen) return;

    this.stopBodyScroll();
  }

  stopBodyScroll() {
    if (this.isModalOpen === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'inherit';
    }
  }

  @Listen('openImageGallery', { target: 'body' })
  openImageGalleryHandler(event: CustomEvent<number>) {
    if (this.isModalOpen !== true) {
      this.isModalOpen = true;
    }

    this.swiper.slideTo(event.detail);
  }

  @Listen('keydown', { target: 'body' })
  keydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.isModalOpen = false;
    }
  }

  render() {
    return (
      <Host>
        <tele-portal>
          <div class={this.isModalOpen ? 'image-gallery image-gallery--visible' : 'image-gallery'}>
            <div class="image-gallery__info">
              <div
                onClick={() => {
                  this.isModalOpen = false;
                }}
                style={{ position: 'relative' }}
              >
                <div class="image-gallery__info__title">{this.postTitle}</div>
                <div class="image-gallery__info__subtitle">by {this.postExcerpt}</div>
                <div class="image-gallery__info__photographer__label">Photography</div>
                <div class="image-gallery__info__photographer__title">{this.photographer}</div>
                <div class="swiper-pagination"></div>
              </div>
              <div>{/* TODO: Moods button */}</div>
              <div>
                {this.canEnquire && (
                  <enquire-modal
                    postTitle={this.postTitle + ' by ' + this.postExcerpt}
                    previewImage={this.previewImage}
                  />
                )}
              </div>
            </div>
            <div class="image-gallery__images">
              <div class="swiper image-gallery__images__swiper">
                <div class="swiper-wrapper">
                  {this._images.map(image => (
                    <div class="swiper-slide">
                      <img src={image} />
                    </div>
                  ))}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
              </div>
              <div
                class="image-gallery__images__close"
                onClick={() => {
                  this.isModalOpen = false;
                }}
              >
                Close
              </div>
            </div>
          </div>
        </tele-portal>
      </Host>
    );
  }
}
