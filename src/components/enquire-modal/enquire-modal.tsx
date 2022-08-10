import { Component, Host, h, Prop, State, Element, Watch } from '@stencil/core';

@Component({
  tag: 'enquire-modal',
  styleUrl: 'enquire-modal.css',
  shadow: true,
})
export class EnquireModal {
  @Element()
  el: HTMLDivElement;

  @Prop({ mutable: true, reflect: true })
  postTitle: string;

  @Prop({ mutable: true, reflect: true })
  previewImage: string;

  @State()
  isModalOpen: boolean = false;

  private contentElement?: HTMLDivElement;

  componentWillLoad() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentDidLoad() {
    window.dispatchEvent(new Event('scroll'));
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  getContentPageOffset() {
    const computedStyle = window.getComputedStyle(this.contentElement);
    const paddingOffset = parseFloat(computedStyle.paddingTop.replace('px', ''));
    const relativeOffset = this.el.getBoundingClientRect().top + window.scrollY;
    const windowOffset = relativeOffset - paddingOffset;

    return windowOffset;
  }

  handleScroll() {
    this.contentElement.style.top = this.getContentPageOffset().toString() + 'px';
  }

  handleEnquireClick() {
    this.isModalOpen = !this.isModalOpen;

    if (this.isModalOpen) {
      const top = this.getContentPageOffset() - window.scrollY;

      if (top < 0) {
        window.scrollBy({ behavior: 'smooth', top: top - 64, left: 0 });
      } else if (top > window.innerHeight) {
        console.log(top);
        window.scrollBy({ behavior: 'smooth', top: top + 64, left: 0 });
      }
    }
  }

  @Watch('isModalOpen')
  clampBodyScroll(isModalOpen, oldIsModalOpen) {
    if (isModalOpen === oldIsModalOpen) return;

    if (isModalOpen === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'inherit';
    }
  }

  renderEnquireCard = () => (
    <div class="enquire-card">
      <div class="enquire-card__preview-image">
        <div style={{ backgroundImage: `url(${this.previewImage})` }}></div>
      </div>
      <div class="enquire-card__info">
        <div class="mb-8">
          <div class="enquire-card__info__enquire">Enquire About</div>
          <div class="enquire-card__info__title">{this.postTitle}</div>
        </div>
        <div>Find out more information regarding purchasing, dimensions or lead times.</div>
      </div>
      <div class="enquire-card__button">
        <simple-button onClick={this.handleEnquireClick.bind(this)}>Enquire</simple-button>
      </div>
    </div>
  );

  render() {
    return (
      <Host>
        <div>{this.renderEnquireCard()}</div>
        <div
          class={this.isModalOpen ? 'enquire-modal__modal enquire-modal__modal--visible' : 'enquire-modal__modal'}
          onClick={() => {
            this.isModalOpen = false;
          }}
        >
          <div
            class="enquire-modal__modal__content"
            onClick={e => e.stopImmediatePropagation()}
            ref={el => (this.contentElement = el as HTMLDivElement)}
          >
            {this.renderEnquireCard()}
            <div class="col"></div>
            <div
              class="enquire-modal__modal__close"
              onClick={() => {
                this.isModalOpen = false;
              }}
            >
              x
            </div>
          </div>
        </div>
      </Host>
    );
  }
}