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
  openMoodsGalleryHandler(event: CustomEvent<number>) {
    if (this.isModalOpen !== true) {
      this.isModalOpen = true;
    }

    // TODO: Update this to get the index of the image that was clicked.
    this.swiper.slideTo(event.detail, 0, false);
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
                  this.isModalOpen = false;
                }}
                style={{ position: 'relative' }}
              >
                <div class="moods-gallery__info__title">{this.postTitle()}</div>
                <div class="moods-gallery__info__subtitle">by {this.postExcerpt()}</div>
                <div class="moods-gallery__info__photographer__label">Photography</div>
                <div class="moods-gallery__info__photographer__title">{this.photographer()}</div>
                <div class="swiper-pagination"></div>
              </div>
              {/* TODO: Add remove from board button here! */}
              {/* <div>
                <add-to-moods-button
                  theme={'dark'}
                  image-url={this._images[this.currentImageIndex]}
                  post-id={this.postId}
                  content-location={'right'}
                >
                  <span style={{ marginLeft: '1rem', fontSize: '0.75rem' }}>Save Image to MOODS</span>
                </add-to-moods-button>
              </div>
              <div>
                {this.canEnquire && (
                  <enquire-modal
                    postTitle={this.postTitle + ' by ' + this.postExcerpt}
                    previewImage={this.previewImage}
                  />
                )}
              </div> */}
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
