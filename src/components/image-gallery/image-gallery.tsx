import { Component, Element, Host, h, Prop, State, Watch, Listen, Fragment } from '@stencil/core';

import Swiper, { Navigation, Pagination, Keyboard, SwiperOptions } from 'swiper';
import { zeroPad } from '../../utils';
import converter from 'number-to-words';

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

type Image = {
  href: string;
  designDetail: any;
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
  postId: number;

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

  @Prop({ mutable: true, reflect: true })
  designDetail: string | null = null;

  @State()
  isModalOpen: boolean = false;

  // Parsed JSON images.
  _images: Image[] = [];
  _designDetail: any;

  swiper: Swiper;
  @State()
  currentImageIndex: number = 0;

  componentWillLoad() {
    this._images = JSON.parse(this.images);
    if (this.designDetail) {
      this._designDetail = JSON.parse(this.designDetail);
    }
  }

  componentDidLoad() {
    this.stopBodyScroll();
    this.swiper = new Swiper('.image-gallery__images__swiper', DEFAULT_SWIPER_OPTIONS);

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

  @Listen('openImageGallery', { target: 'body' })
  openImageGalleryHandler(event: CustomEvent<number>) {
    if (this.isModalOpen !== true) {
      this.isModalOpen = true;
    }

    this.swiper.slideTo(event.detail, 0, false);
  }

  @Listen('keydown', { target: 'body' })
  keydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.isModalOpen = false;
    }
  }

  render() {
    //
    // NOTE: Get the design detail for a specific image, not needed now.
    //
    // Get the first non thumbnail image.
    // const currentImage = this._images[this.currentImageIndex];
    // const currentImageDesignDetail =
    //   currentImage.designDetail && currentImage.designDetail.length > 0 ? currentImage.designDetail[0] : null;
    //

    const designDetail = this._designDetail;

    const asSeenIns = designDetail && designDetail.asSeenIn ? designDetail.asSeenIn : [];

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
                <div class="flex justify-between items-center image-gallery__info__photographer__title">
                  <div>{this.photographer}</div>
                  <div class="lg:hidden">
                    <add-to-moods-button
                      theme={'dark'}
                      image-url={this._images[this.currentImageIndex].href}
                      post-id={this.postId}
                      content-location={'left'}
                    >
                      <span style={{ marginRight: '0.5rem', fontSize: '0.5rem' }}>Save Image to MOODS</span>
                    </add-to-moods-button>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
              <div class="hidden lg:block">
                <add-to-moods-button
                  theme={'dark'}
                  image-url={this._images[this.currentImageIndex].href}
                  post-id={this.postId}
                  content-location={'right'}
                  style={{ marginTop: '2.5rem' }}
                >
                  <span style={{ marginLeft: '1rem', fontSize: '0.75rem' }}>Save Image to MOODS</span>
                </add-to-moods-button>
              </div>
              <div>
                {this.canEnquire && (
                  <div class="hidden lg:block">
                    <enquire-modal
                      postTitle={this.postTitle + ' by ' + this.postExcerpt}
                      previewImage={this.previewImage}
                    />
                  </div>
                )}
                {!this.canEnquire && designDetail && (
                  <div class="hidden lg:block">
                    <div class="image-gallery__info__subtitle">Design Details</div>

                    <div class="block xl:grid xl:grid-cols-12 xl:gap-8">
                      <display-card
                        images={JSON.stringify([designDetail.image.url])}
                        style={{ marginBottom: '0' }}
                        class="col-span-8"
                      >
                        <div slot="top-title">{designDetail.designer || 'Unknown'}</div>
                        <div slot="top-subtitle">{designDetail.category || 'N/A'}</div>
                        <div slot="bottom-title">{designDetail.name || ''}</div>
                        <div slot="bottom-subtitle">{designDetail.price || ''}</div>
                      </display-card>
                      <div class="flex flex-col col-span-4 mb-8 text-2xs xl:mb-0">
                        <div>
                          <span>As seen in image </span>
                          {asSeenIns.map((image, i) => {
                            const index = parseFloat(image.value.index);

                            if (i === asSeenIns.length - 1 && asSeenIns.length > 0) {
                              return (
                                <Fragment>
                                  <span>and </span>
                                  <span class="underline cursor-pointer" onClick={() => this.swiper.slideTo(index + 1)}>
                                    {converter.toWords(index + 1)}
                                  </span>
                                  .
                                </Fragment>
                              );
                            }
                            return (
                              <Fragment>
                                <span class="underline cursor-pointer" onClick={() => this.swiper.slideTo(index + 1)}>
                                  {converter.toWords(index + 1)}
                                </span>
                                {', '}
                              </Fragment>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div class="image-gallery__images">
              <div class="swiper image-gallery__images__swiper">
                <div class="swiper-wrapper">
                  {this._images.map(image => (
                    <div class="swiper-slide">
                      <img src={image.href} />
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
