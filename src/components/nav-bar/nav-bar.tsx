import { Component, Host, Element, h, Prop, State, Watch, getAssetPath } from '@stencil/core';
import { PlatformType } from '../../utils/platform';

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class NavBar {
  @Element() el: HTMLElement;

  @Prop() authenticated: boolean = false;
  @Prop() platform: PlatformType = 'blog';
  @Prop() showMultiplier: number = 3;

  @State() deltaY: number = 0;
  @State() scrollY: number = window.scrollY;
  @State() scrolled: boolean = false;
  @State() scrollingUp: boolean = false;
  @State() scrolledUp: number = 0;
  @State() scrollThreshold: number = 500;

  private currentHeight: number = 150;

  componentWillLoad() {
    window.addEventListener('scroll', this.scrollListener.bind(this));
    window.addEventListener('resize', this.setHeight.bind(this));
  }

  componentDidLoad() {
    this.setHeight();
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.scrollListener.bind(this));
    window.removeEventListener('resize', this.setHeight.bind(this));
  }

  setHeight() {
    this.currentHeight = this.el.clientHeight;
  }

  scrollListener() {
    this.scrollY = window.scrollY;
  }

  @Watch('scrollY')
  watchScrollY(y, lastY) {
    this.deltaY = y - lastY;

    if (y < this.currentHeight * this.showMultiplier) {
      this.scrolled = false;
      // this.scrollingUp = false;
      return;
    } else {
      this.scrolled = true;
    }

    if (this.deltaY < 0) {
      if (this.scrolledUp++ >= this.scrollThreshold) {
        this.scrollingUp = true;
      }
    } else if (this.deltaY > 0) {
      this.scrollingUp = false;
      this.scrolledUp = 0;
    }
  }

  render() {
    return (
      <Host>
        <div style={{ height: (this.scrolled ? this.currentHeight : 0) + 'px' }}></div>
        <animatable-component animation="slideInDown" easing="ease-in" duration={250}>
          <nav class={'navbar ' + (this.scrolled ? 'navbar--scrolled ' : '') + (this.scrolledUp ? 'show' : '')}>
            <div class="navbar__row">
              <a
                href="#"
                class={
                  'navbar__row__leading navbar__row__leading__logo ' + (this.platform === 'blog' ? 'font-bold' : '')
                }
              >
                <div class="navbar__logo">
                  <img src={getAssetPath(`./assets/leibal-logo.png`)} />
                </div>
                <div>Stories</div>
              </a>
              <div class="navbar__row__links">
                <a href="#">Architecture</a>
                <a href="#">Interiors</a>
                <a href="#">Furniture</a>
                <a href="#">Lighting</a>
                <a href="#">Products</a>
                <a href="#">Travel</a>
              </div>
              <div class="navbar__row__action">
                <a href="#">Submit</a>
                <a href="#">Sign Up</a>
              </div>
            </div>
            <div class="navbar__row">
              <a href="#" class={'navbar__row__leading ' + (this.platform === 'shop' ? 'font-bold' : '')}>
                <div class="navbar__logo" style={{ opacity: '0', visibility: 'hidden' }}>
                  <img src={getAssetPath(`./assets/leibal-logo.png`)} />
                </div>
                Shop
              </a>
              <div class="navbar__row__links">
                <a href="#">Sofas</a>
                <a href="#">Chairs</a>
                <a href="#">Tables</a>
                <a href="#">Storage</a>
                <a href="#">Lighting</a>
                <a href="#">Accessories</a>
              </div>
              <div class="navbar__row__action">
                <a href="#">Trade</a>
                <a href="#">Login</a>
              </div>
            </div>
          </nav>
        </animatable-component>
      </Host>
    );
  }
}
