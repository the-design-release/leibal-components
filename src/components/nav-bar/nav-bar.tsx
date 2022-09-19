import { Component, Host, Element, h, Prop, State, Watch, getAssetPath } from '@stencil/core';
import { PlatformType, STORE_URL, BLOG_URL } from '../../utils/platform';

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
  @Prop() showMultiplier: number = 1;

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

  platformSpecificLink(platform: PlatformType, path: string): string {
    const platformUrl = platform === 'store' ? STORE_URL : BLOG_URL;
    if (this.platform === platform) {
      return path;
    } else {
      return new URL(path, platformUrl).toString();
    }
  }

  @Watch('scrolled')
  watchScrolled(scrolled, lastScrolled) {
    if (scrolled === false && lastScrolled === true) {
      this.el.animate([{ transform: 'translateY(0px)' }, { transform: 'translateY(-150px)' }], {
        duration: 150,
        iterations: 1,
      });
    }
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
        <nav class={'navbar ' + (this.scrolled ? 'navbar--scrolled ' : '') + (this.scrolledUp ? 'show' : '')}>
          <div class="navbar__row">
            <a
              href={this.platformSpecificLink('blog', '/')}
              class={'navbar__row__leading navbar__row__leading__logo ' + (this.platform === 'blog' ? 'font-bold' : '')}
            >
              <div class="navbar__logo">
                <img src={getAssetPath(`./assets/leibal-logo.png`)} />
              </div>
              <a href="/">Stories</a>
            </a>
            <div class="navbar__row__links">
              <a href={this.platformSpecificLink('blog', '/category/architecture')}>Architecture</a>
              <a href={this.platformSpecificLink('blog', '/category/interiors')}>Interiors</a>
              <a href={this.platformSpecificLink('blog', '/category/furniture')}>Furniture</a>
              <a href={this.platformSpecificLink('blog', '/category/lighting')}>Lighting</a>
              <a href={this.platformSpecificLink('blog', '/category/products')}>Products</a>
              <a href={this.platformSpecificLink('blog', '/category/travel')}>Travel</a>
            </div>
            <div class="navbar__row__action">
              <a href="/submissions">Submit</a>
              <a href="/register">Sign Up</a>
            </div>
          </div>
          <div class="navbar__row">
            <a
              href={this.platformSpecificLink('store', '/')}
              class={'navbar__row__leading ' + (this.platform === 'store' ? 'font-bold' : '')}
            >
              <div class="navbar__logo" style={{ opacity: '0', visibility: 'hidden' }}>
                <img src={getAssetPath(`./assets/leibal-logo.png`)} />
              </div>
              Store
            </a>
            <div class="navbar__row__links">
              <a href={this.platformSpecificLink('store', '/collections/new')}>New</a>
              <a href={this.platformSpecificLink('store', '/collections/furniture')}>Furniture</a>
              <a href={this.platformSpecificLink('store', '/collections/lighting')}>Lighting</a>
              <a href={this.platformSpecificLink('store', '/collections/accessories')}>Accessories</a>
              <a href={this.platformSpecificLink('store', '/collections/outdoor')}>Outdoor</a>
              <a href={this.platformSpecificLink('store', '/collections/brands')}>Brands</a>
            </div>
            <div class="navbar__row__action">
              <a href="/cart">Cart</a>
              <a href="/search">Search</a>
            </div>
          </div>
        </nav>
      </Host>
    );
  }
}
