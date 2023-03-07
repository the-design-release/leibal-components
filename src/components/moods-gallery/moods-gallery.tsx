import { Component, Element, Host, h, Prop, State, Watch, Listen } from '@stencil/core';

import Swiper, { Navigation, Pagination, Keyboard, SwiperOptions } from 'swiper';
import { zeroPad } from '../../utils';
import { MoodsBoardImage } from '../moods-board-preview/moods-board-preview';

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
  tag: 'moods-gallery',
  styleUrl: 'moods-gallery.css',
})
export class ImageGallery {
  @Element()
  el: HTMLDivElement;

  @Prop({ mutable: true, reflect: true })
  images: string = '[]';

  @State()
  isModalOpen: boolean = false;

  // Parsed JSON images.
  _images: MoodsBoardImage[] = [];

  swiper: Swiper;

  @State()
  currentImageIndex: number = 0;

  componentWillLoad() {
    this._images = JSON.parse(this.images);
  }

  componentDidLoad() {
    this.stopBodyScroll();
    this.swiper = new Swiper('.moods-gallery__images__swiper', DEFAULT_SWIPER_OPTIONS);

    // Update the currentImageIndex when the slide changes.
    this.swiper.on('slideChange', () => {
      this.currentImageIndex = this.swiper.realIndex;
    });
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

  @Listen('openMoodsGallery', { target: 'body' })
  openMoodsGalleryHandler(event: CustomEvent<MoodsBoardImage>) {
    if (this.isModalOpen !== true) {
      this.isModalOpen = true;
    }
    console.log(event.detail);

    // Get the index of the image that was clicked.
    const index = this._images.findIndex(image => image.imageUrl === event.detail.imageUrl);

    this.swiper.slideTo(index + 1, 0, false);
  }

  @Listen('keydown', { target: 'body' })
  keydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.isModalOpen = false;
    }
  }

  postTitle() {
    return this._images[this.currentImageIndex].postTitle;
  }

  postExcerpt() {
    return this._images[this.currentImageIndex].postSubtitle;
  }

  photographer() {
    return this._images[this.currentImageIndex].photographer || 'Unknown';
  }

  render() {
    return (
      <Host>
        <tele-portal>
          <div class={this.isModalOpen ? 'moods-gallery moods-gallery--visible' : 'moods-gallery'}>
            <div class="moods-gallery__info">
              <div
                onClick={() => {
                  location.href = this._images[this.currentImageIndex].postUrl;
                }}
                style={{ position: 'relative', cursor: 'pointer' }}
              >
                <div class="moods-gallery__info__title">{this.postTitle()}</div>
                <div class="moods-gallery__info__subtitle">{this.postExcerpt()}</div>
                <div class="moods-gallery__info__photographer__label">Photography</div>
                <div class="moods-gallery__info__photographer__title">{this.photographer()}</div>
                <div class="swiper-pagination"></div>
              </div>
              {/* TODO: Add remove from board button here! */}
            </div>
            <div class="moods-gallery__images">
              <div class="swiper moods-gallery__images__swiper">
                <div class="swiper-wrapper">
                  {this._images.map(image => (
                    <div class="swiper-slide">
                      <img src={image.imageUrl} />
                    </div>
                  ))}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
              </div>
              <div
                class="moods-gallery__images__close"
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
