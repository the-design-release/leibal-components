import { Component, Element, Host, h, Prop, State, Watch, Event, EventEmitter, getAssetPath } from '@stencil/core';

export interface RemoveOverlayEvent {
  payload: any;
}

@Component({
  tag: 'remove-overlay',
  styleUrl: 'remove-overlay.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class RemoveOverlay {
  @Element()
  el: HTMLElement;

  @State()
  confirming: boolean = false;

  @State()
  showIcon: boolean = false;

  @Prop({ mutable: true, reflect: true })
  payload: any = null;

  @Prop({ mutable: true, reflect: true })
  name: string = '';

  payloadJson: any = null;

  @Watch('payload')
  payloadChangedHandler() {
    try {
      this.payloadJson = JSON.parse(this.payload);
    } catch (e) {
      console.error('Failed to parse remove-overlay payload: ', e);
    }
  }

  @Event({
    eventName: 'removeOverlayEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  removeOverlayEvent: EventEmitter<RemoveOverlayEvent>;

  componentDidLoad() {
    const parentEl = this.el.shadowRoot.parentElement;
    if (!parentEl) return;

    parentEl.addEventListener('mouseenter', () => {
      if (!this.confirming) this.showIcon = true;
    });

    parentEl.addEventListener('mouseleave', () => {
      if (!this.confirming) this.showIcon = false;
    });
  }

  hideOverlay() {
    this.confirming = false;
    this.showIcon = false;
  }

  showOverlay() {
    this.confirming = true;
    this.showIcon = true;
  }

  handleRemoveClick() {
    this.showOverlay();
  }

  handleCancelClick() {
    this.hideOverlay();
  }

  handleConfirmClick() {
    this.hideOverlay();

    this.removeOverlayEvent.emit({
      payload: this.payloadJson,
    });
  }

  render() {
    return (
      <Host>
        <div class="remove-overlay">
          <div class={'remove-overlay__confirm ' + (this.confirming ? 'remove-overlay__confirm--visible' : '')}>
            <div class="remove-overlay__message">Remove {this.name}?</div>
            <div class="remove-overlay__buttons">
              <button
                class="remove-overlay__button remove-overlay__button--confirm"
                onClick={this.handleConfirmClick.bind(this)}
              >
                Yes
              </button>
              <button
                class="remove-overlay__button remove-overlay__button--cancel"
                onClick={this.handleCancelClick.bind(this)}
              >
                No
              </button>
            </div>
          </div>
          <div class={'remove-overlay__icon ' + (this.showIcon ? 'remove-overlay__icon--visible' : '')}>
            <img src={getAssetPath('./assets/icon.png')} onClick={this.handleRemoveClick.bind(this)} />
          </div>
        </div>
      </Host>
    );
  }
}
