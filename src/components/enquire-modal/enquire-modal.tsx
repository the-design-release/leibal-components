import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'enquire-modal',
  styleUrl: 'enquire-modal.css',
  shadow: true,
})
export class EnquireModal {
  @Prop({ mutable: true, reflect: true })
  postTitle: string;

  @Prop({ mutable: true, reflect: true })
  previewImage: string;

  @State()
  isModalOpen: boolean = false;

  renderEnquireCard = () => (
    <div class="enquire-modal">
      <div class="enquire-modal__preview-image">
        <div style={{ backgroundImage: `url(${this.previewImage})` }}></div>
      </div>
      <div class="enquire-modal__info">
        <div class="mb-8">
          <div class="enquire-modal__info__enquire">Enquire About</div>
          <div class="enquire-modal__info__title">{this.postTitle}</div>
        </div>
        <div>Find out more information regarding purchasing, dimensions or lead times.</div>
      </div>
      <div class="enquire-modal__button">
        <simple-button
          onClick={() => {
            this.isModalOpen = !this.isModalOpen;
          }}
        >
          Enquire
        </simple-button>
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
          <div class="enquire-modal__modal__content" onClick={e => e.stopImmediatePropagation()}>
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
