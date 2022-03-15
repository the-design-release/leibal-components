import { Component, Host, Element, h, Prop, State, Watch } from '@stencil/core';
import { PlatformType } from '../../utils/platform';

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.css',
  shadow: true,
})
export class NavBar {
  @Element() el: HTMLElement;

  @Prop() authenticated: boolean = false;
  @Prop() platform: PlatformType = 'blog';
  @Prop() showMultiplier: number = 3;

  @State() deltaY: number = 0;
  @State() currentHeight: number = 150;
  @State() scrollY: number = window.scrollY;
  @State() scrolled: boolean = false;

  componentDidLoad() {
    this.setHeight.bind(this);
  }

  componentWillLoad() {
    window.addEventListener('scroll', this.scrollListener.bind(this));
    window.addEventListener('resize', this.setHeight.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.scrollListener.bind(this));
    window.removeEventListener('resize', this.setHeight.bind(this));
  }

  setHeight() {
    this.currentHeight = this.el.getBoundingClientRect().height;
  }

  scrollListener() {
    this.scrollY = window.scrollY;
  }

  @Watch('scrollY')
  watchScrollY() {
    // TODO: Fill me in!
  }

  render() {
    return (
      <Host>
        <nav class="navbar">
          <div class="navbar__row">
            <a href="#" class={'navbar__row__leading ' + (this.platform === 'blog' ? 'font-bold' : '')}>
              Leibal Stories
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
              Leibal Shop
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
      </Host>
    );
  }
}
