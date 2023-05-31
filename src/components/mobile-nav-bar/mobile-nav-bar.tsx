import { Component, Host, Prop, State, getAssetPath, h } from '@stencil/core';
import { BLOG_URL, PlatformType, STORE_URL } from '../../utils/platform';

@Component({
  tag: 'mobile-nav-bar',
  styleUrl: 'mobile-nav-bar.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class MobileNavBar {
  @State() isOpen: boolean = false;
  @Prop() platform: PlatformType = 'blog';
  @State() isShowingLinks: boolean = false;
  @State() linksType: PlatformType = 'blog';

  showLinks(platform: PlatformType) {
    this.isShowingLinks = true;
    this.linksType = platform;
  }

  hideLinks() {
    this.isShowingLinks = false;
  }

  platformSpecificLink(platform: PlatformType, path: string): string {
    const platformUrl = platform === 'store' ? STORE_URL : BLOG_URL;
    if (this.platform === platform) {
      return path;
    } else {
      return new URL(path, platformUrl).toString();
    }
  }

  render() {
    return (
      <Host>
        <div class="mobile-nav-bar">
          <div class={`mobile-nav-bar__icons ${this.isOpen ? 'mobile-nav-bar__icons--open' : ''}`}>
            <div>
              {this.isOpen ? (
                <img
                  class="mobile-nav-bar__icon"
                  src={getAssetPath('./assets/close.png')}
                  alt="Close Menu"
                  style={{ width: '0.88rem', height: '0.88rem' }}
                  onClick={() => (this.isOpen = false)}
                />
              ) : (
                <img
                  class="mobile-nav-bar__icon"
                  src={getAssetPath('./assets/hamburger.png')}
                  alt="Open Menu"
                  style={{ width: '1.13rem', height: '1.13rem', marginLeft: '-0.13rem' }}
                  onClick={() => (this.isOpen = true)}
                />
              )}
            </div>
            <div style={{ display: 'flex' }}>
              <img
                class="mobile-nav-bar__icon"
                src={getAssetPath('./assets/shopping-bag.png')}
                alt="Cart"
                style={{ paddingRight: '0.5rem' }}
              />
              <img
                class="mobile-nav-bar__icon"
                src={getAssetPath('./assets/user.png')}
                alt="Account"
                style={{ width: '0.9rem', height: '0.9rem', paddingLeft: '0.5rem' }}
              />
            </div>
          </div>
          <div class={`mobile-nav-bar__menu ${this.isOpen ? 'mobile-nav-bar__menu--open' : ''}`}>
            <img
              class="mobile-nav-bar__logo"
              src={getAssetPath('./assets/leibal-logo.png')}
              alt="Logo"
              onClick={() => {
                window.location.href = this.platformSpecificLink(this.platform, '/');
              }}
            />

            <div style={{ position: 'relative' }}>
              <div
                class={`mobile-nav-bar__menu-links-container ${
                  this.isShowingLinks ? 'mobile-nav-bar__menu-links-container--open' : ''
                }`}
              >
                {this.linksType === 'blog' && (
                  <div class="mobile-nav-bar__menu-links">
                    <div
                      onClick={() => this.hideLinks()}
                      style={{ display: 'flex', alignItems: 'center', marginBottom: '.5rem' }}
                    >
                      <img
                        src={getAssetPath('./assets/arrow.png')}
                        style={{
                          width: '1rem',
                          filter: 'invert(1)',
                          transform: 'rotate(-180deg)',
                          marginRight: '0.5rem',
                        }}
                      />{' '}
                      Stories
                    </div>
                    <div>
                      <div>
                        <a href={this.platformSpecificLink('blog', '/category/architecture')}>Architecture</a>
                      </div>
                      <div>
                        <a href={this.platformSpecificLink('blog', '/category/interiors')}>Interiors</a>
                      </div>
                      <div>
                        <a href={this.platformSpecificLink('blog', '/category/furniture')}>Furniture</a>
                      </div>
                      <div>
                        <a href={this.platformSpecificLink('blog', '/category/lighting')}>Lighting</a>
                      </div>
                      <div>
                        <a href={this.platformSpecificLink('blog', '/category/objects')}>Objects</a>
                      </div>
                      <div>
                        <a href={this.platformSpecificLink('blog', '/category/travel')}>Travel</a>
                      </div>
                    </div>
                  </div>
                )}

                {this.linksType === 'store' && (
                  <div class="mobile-nav-bar__menu-links">
                    <div
                      onClick={() => this.hideLinks()}
                      style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}
                    >
                      <img
                        src={getAssetPath('./assets/arrow.png')}
                        style={{
                          width: '1rem',
                          filter: 'invert(1)',
                          transform: 'rotate(-180deg)',
                          marginRight: '0.5rem',
                        }}
                      />{' '}
                      Store
                    </div>
                    <div>
                      {/* TODO: Seating, Tables, Lighting, Storage, Outdoor, Accessories */}
                      <div>
                        <a href={this.platformSpecificLink('store', '/collection/seating')}>Seating</a>
                      </div>
                      <div>
                        <a href={this.platformSpecificLink('store', '/collection/tables')}>Tables</a>
                      </div>
                      <div>
                        <a href={this.platformSpecificLink('store', '/collection/lighting')}>Lighting</a>
                      </div>
                      <div>
                        <a href={this.platformSpecificLink('store', '/collection/storage')}>Storage</a>
                      </div>
                      <div>
                        <a href={this.platformSpecificLink('store', '/collection/outdoor')}>Outdoor</a>
                      </div>
                      <div>
                        <a href={this.platformSpecificLink('store', '/collection/accessories')}>Accessories</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div class="mobile-nav-bar__menu-items">
                <div
                  class="mobile-nav-bar__menu-item"
                  onClick={() => {
                    this.showLinks('blog');
                  }}
                >
                  Stories &gt;
                </div>
                <div
                  class="mobile-nav-bar__menu-item"
                  onClick={() => {
                    this.showLinks('store');
                  }}
                >
                  Store &gt;
                </div>
              </div>

              <div class="mobile-nav-bar__submenu-items">
                <a class="mobile-nav-bar__submenu-item" href={this.platformSpecificLink('blog', '/submissions')}>
                  Submit
                </a>
                <a class="mobile-nav-bar__submenu-item" href={this.platformSpecificLink('blog', '/subscribe')}>
                  Subscribe
                </a>
                <a class="mobile-nav-bar__submenu-item" href={this.platformSpecificLink('blog', '/users')}>
                  Account
                </a>
                <a class="mobile-nav-bar__submenu-item" href={this.platformSpecificLink('store', '/cart')}>
                  Cart
                </a>
              </div>

              {/* <div class="mobile-nav-bar__newsletter">
                <div class="mobile-nav-bar__newsletter__header">Newsletter</div>
                <div class="mobile-nav-bar__newsletter__input">
                  <input type="text" />
                  <button>Send</button>
                </div>
              </div> */}
            </div>

            <div class="mobile-nav-bar__links">
              <div>
                <div class="mobile-nav-bar__link-header">About</div>
                <a class="mobile-nav-bar__link-item" href={this.platformSpecificLink('blog', '/contact-us')}>
                  Contact Us
                </a>
                <a class="mobile-nav-bar__link-item" href={this.platformSpecificLink('blog', '/submissions')}>
                  Submit
                </a>
                <a class="mobile-nav-bar__link-item" href={this.platformSpecificLink('blog', '/faq')}>
                  FAQ
                </a>
                <a class="mobile-nav-bar__link-item" href={this.platformSpecificLink('blog', '/privacy')}>
                  Privacy
                </a>
                <a class="mobile-nav-bar__link-item" href={this.platformSpecificLink('blog', '/toc')}>
                  Terms &amp; Conditions
                </a>
                <a class="mobile-nav-bar__link-item" href={this.platformSpecificLink('blog', '/trades')}>
                  Trade Program
                </a>
              </div>
              <div>
                <div class="mobile-nav-bar__link-header">Connect</div>
                <a class="mobile-nav-bar__link-item" href="https://www.pinterest.com/leibal/">
                  Pinterest
                </a>
                <a class="mobile-nav-bar__link-item" href="https://instagram.com/leibal">
                  Instagram
                </a>
                <a class="mobile-nav-bar__link-item" href="http://www.facebook.com/Leibal">
                  Facebook
                </a>
                <a class="mobile-nav-bar__link-item" href="https://leibal.tumblr.com/">
                  Tumblr
                </a>
                <a class="mobile-nav-bar__link-item" href="https://www.linkedin.com/company/leibal/">
                  LinkedIn
                </a>
                <a class="mobile-nav-bar__link-item" href="https://www.tiktok.com/leibal">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
