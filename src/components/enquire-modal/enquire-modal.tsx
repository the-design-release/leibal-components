import { Component, Host, h, Prop, State, Element, Watch, getAssetPath } from '@stencil/core';

type FormState = { firstName: string; lastName: string; email: string; location: string; moreText: string };

@Component({
  tag: 'enquire-modal',
  assetsDirs: ['assets'],
  styleUrl: 'enquire-modal.css',
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

  @State()
  formState: FormState = {
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    moreText: '',
  };

  contentElement?: HTMLFormElement;

  componentWillLoad() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentDidLoad() {
    window.dispatchEvent(new Event('scroll'));
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  // Calculate the position on the screen.
  getContentPageOffset() {
    // NOTE: This is a bit fucky, but works for me for now.
    // Get the child of the element so we can have borders between each grid section.
    const computedStyle = window.getComputedStyle(this.contentElement.querySelector('div'));
    const paddingOffset = parseFloat(computedStyle.paddingTop.replace('px', ''));
    const relativeOffset = this.el.getBoundingClientRect().top;
    const windowOffset = relativeOffset - paddingOffset;

    return windowOffset;
  }

  handleScroll() {
    // Move the modal to the correct position on the page.
    const offset = this.getContentPageOffset();
    this.contentElement.style.top = offset + 'px';

    // Hide if the content is not visible on the page.
    if (
      this.isModalOpen &&
      (offset < -this.contentElement.clientHeight ||
        offset + this.contentElement.clientHeight > window.innerHeight + this.contentElement.clientHeight)
    ) {
      this.isModalOpen = false;
    }
  }

  // Handle the enquire opening click.
  handleEnquireClick() {
    this.isModalOpen = !this.isModalOpen;

    if (this.isModalOpen) {
      const top = this.getContentPageOffset();

      // Move the content into view.
      if (top <= 5) {
        window.scrollBy({ behavior: 'smooth', top: top - 64, left: 0 });
      } else if (top + this.contentElement.clientHeight >= window.innerHeight + 5) {
        window.scrollBy({ behavior: 'smooth', top: top - this.contentElement.clientHeight + 64, left: 0 });
      }
    }
  }

  // Handle when the form data changes.
  handleFormChange(event) {
    this.formState = {
      ...this.formState,
      [event.target.name]: event.target.value,
    };
  }

  handleFormSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    let body = `Hello,%0D%0A%0D%0A`;
    body += `My name is ${this.formState.firstName} ${this.formState.lastName}, and I would like additional information regarding ${this.postTitle}.%0D%0A%0D%0A`;
    body += `I am currently located in ${this.formState.location}.%0D%0A%0D%0A`;
    body += `${this.formState.moreText.replace('\n', '%0D%0A')}`;

    const email = document.createElement('a');
    email.href = `mailto:sales@leibal.com?subject=Enquiry about ${this.postTitle}&body=${body}`;
    email.click();

    return false;
  }

  @Watch('isModalOpen')
  clampBodyScroll(isModalOpen, oldIsModalOpen) {
    if (isModalOpen === oldIsModalOpen) return;

    // TODO: How to handle this?
    // Let's keep it simple for now.
    // if (isModalOpen === true) {
    //   document.body.style.overflow = 'hidden';
    // } else {
    //   document.body.style.overflow = 'inherit';
    // }
  }

  renderEnquireCard = () => (
    <div class="col-span-3 w-full cursor-pointer enquire-card" onClick={this.handleEnquireClick.bind(this)}>
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
      <div class="text-xl enquire-card__button">
        <simple-button>Enquire</simple-button>
      </div>
    </div>
  );

  render() {
    return (
      <Host>
        {this.renderEnquireCard()}
        <tele-portal>
          <div
            class={this.isModalOpen ? 'enquire-modal__modal enquire-modal__modal--visible' : 'enquire-modal__modal'}
            onClick={() => {
              this.isModalOpen = false;
            }}
          >
            <form
              class="enquire-modal__modal__content"
              onClick={e => e.stopImmediatePropagation()}
              ref={el => (this.contentElement = el as HTMLFormElement)}
              onInput={this.handleFormChange.bind(this)}
              onSubmit={this.handleFormSubmit.bind(this)}
            >
              {this.renderEnquireCard()}
              <div class="enquire-modal__modal__form">
                <div>
                  <simple-input type="text" name="firstName" placeholder="First Name" required></simple-input>
                  <simple-input type="text" name="lastName" placeholder="Last Name" required></simple-input>
                  <simple-input type="text" name="email" placeholder="Email Address" required></simple-input>
                  <simple-input type="text" name="location" placeholder="Location" required></simple-input>
                  <div class="enquire-modal__modal__form__message">
                    <div class="enquire-modal__modal__form__message__title">Message</div>
                    <div class="enquire-modal__modal__form__message__body">
                      <p>Hello,</p>
                      <p>
                        My name is <u>{this.formState.firstName || '...'}</u> <u>{this.formState.lastName || '...'}</u>,
                        and I would like additional information regarding <u>{this.postTitle}</u>.
                      </p>
                      <p>
                        I am currently located in <u>{this.formState.location || '...'}</u>.
                      </p>
                      <div class="grow-wrap">
                        <textarea
                          class="enquire-modal__modal__form__message__more-text"
                          placeholder="Type to add more to your request."
                          name="moreText"
                          onInput={function () {
                            this.parentNode.dataset.replicatedValue = this.value;
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="enquire-modal__modal__submit">
                <div class="enquire-modal__modal__submit__disclaimer">
                  By sending this message your agree to our&nbsp;
                  <a href="#">Terms and Conditions</a>. For more information regarding how your data is processed,
                  please view of <a href="#">Privacy Policy</a>.
                </div>
                <div>
                  <simple-button
                    theme="dark"
                    onClick={(event: any) => {
                      const submitButton = event.target.nextSibling;
                      submitButton.click();
                    }}
                  >
                    Send
                  </simple-button>
                  <button type="submit" style={{ display: 'none' }} />
                </div>
              </div>
              <div
                class="enquire-modal__modal__close"
                onClick={() => {
                  this.isModalOpen = false;
                }}
              >
                <img src={getAssetPath('./assets/close-icon.png')} />
              </div>
            </form>
          </div>
        </tele-portal>
      </Host>
    );
  }
}
