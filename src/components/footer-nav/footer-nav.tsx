import { Component, Host, h, Prop } from '@stencil/core';
import { BLOG_URL, PlatformType, STORE_URL } from '../../utils/platform';

@Component({
  tag: 'footer-nav',
  styleUrl: 'footer-nav.css',
  shadow: true,
})
export class FooterNav {
  @Prop() platform: PlatformType = 'blog';

  platformSpecificLink(platform: PlatformType, path: string): string {
    const platformUrl = platform === 'store' ? STORE_URL : BLOG_URL;
    if (this.platform === platform) {
      return path;
    } else {
      return new URL(path, platformUrl).toString();
    }
  }

  render() {
    const storeNewsletterForm = (
      <form
        action="https://leibal.us4.list-manage.com/subscribe/post?u=9891199121e89a545e0ba572a&amp;id=55fd30c180&amp;f_id=005bb1ebf0"
        method="post"
        target="_self"
      >
        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required />
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input
            placeholder="Enter Email"
            type="text"
            name="b_9891199121e89a545e0ba572a_3a78fd6a2d"
            tabindex="-1"
            value=""
          />
        </div>
        <input type="submit" value="Send" name="subscribe" id="mc-embedded-subscribe" class="button" />
      </form>
    );

    const blogNewsletterForm = (
      <form
        action="https://leibal.us4.list-manage.com/subscribe/post?u=9891199121e89a545e0ba572a&amp;id=3a78fd6a2d&amp;f_id=0057b1ebf0"
        method="post"
        target="_self"
      >
        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required />
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input
            placeholder="Enter Email"
            type="text"
            name="b_9891199121e89a545e0ba572a_3a78fd6a2d"
            tabindex="-1"
            value=""
          />
        </div>
        <input type="submit" value="Send" name="subscribe" id="mc-embedded-subscribe" class="button" />
      </form>
    );

    return (
      <Host>
        <div class="footer-nav">
          {/* Stories */}
          <div class="footer-nav__column">
            <div class="footer-nav__title">Stories</div>
            <div class="footer-nav__links">
              <a class="footer-nav__link" href={this.platformSpecificLink('blog', '/category/architecture')}>
                Architecture
              </a>
              <a class="footer-nav__link" href={this.platformSpecificLink('blog', '/category/interiors')}>
                Interiors
              </a>
              <a class="footer-nav__link" href={this.platformSpecificLink('blog', '/category/furniture')}>
                Furniture
              </a>
              <a class="footer-nav__link" href={this.platformSpecificLink('blog', '/category/lighting')}>
                Lighting
              </a>
              <a class="footer-nav__link" href={this.platformSpecificLink('blog', '/category/products')}>
                Products
              </a>
              <a class="footer-nav__link" href={this.platformSpecificLink('blog', '/category/travel')}>
                Travel
              </a>
            </div>
          </div>
          {/* End Stories */}

          {/* Store */}
          <div class="footer-nav__column">
            <div class="footer-nav__title">Store</div>
            <div class="footer-nav__links">
              <a class="footer-nav__link" href={this.platformSpecificLink('store', '/collection/seating')}>
                Seating
              </a>
              <a class="footer-nav__link" href={this.platformSpecificLink('store', '/collection/tables')}>
                Tables
              </a>
              <a class="footer-nav__link" href={this.platformSpecificLink('store', '/collection/lighting')}>
                Lighting
              </a>
              <a class="footer-nav__link" href={this.platformSpecificLink('store', '/collection/storage')}>
                Storage
              </a>
              <a class="footer-nav__link" href={this.platformSpecificLink('store', '/collection/outdoor')}>
                Outdoor
              </a>
              <a class="footer-nav__link" href={this.platformSpecificLink('store', '/collection/accessories')}>
                Accessories
              </a>
            </div>
          </div>
          {/* End Store */}

          {/* About */}
          <div class="footer-nav__column">
            <div class="footer-nav__title">About</div>
            <div class="footer-nav__links">
              <a class="footer-nav__link" href={this.platformSpecificLink('blog', '/contact-us')}>
                Contact Us
              </a>
              <a class="footer-nav__link" href={this.platformSpecificLink('blog', '/submissions-form')}>
                Submit
              </a>
              <a class="footer-nav__link" href={this.platformSpecificLink('blog', '/faq')}>
                FAQ
              </a>
              <a class="footer-nav__link" href={this.platformSpecificLink('blog', '/privacy')}>
                Privacy
              </a>
              <a class="footer-nav__link" href={this.platformSpecificLink('blog', '/terms-and-conditions')}>
                Terms &amp; Conditions
              </a>
              <a class="footer-nav__link" href={this.platformSpecificLink('blog', '/trades')}>
                Trade Program
              </a>
            </div>
          </div>
          {/* End About */}

          {/* Connect */}
          <div class="footer-nav__column">
            <div class="footer-nav__title">Connect</div>
            <div class="footer-nav__links">
              <a class="footer-nav__link" href="https://www.pinterest.com/leibal/">
                Pinterest
              </a>
              <a class="footer-nav__link" href="https://instagram.com/leibal">
                Instagram
              </a>
              <a class="footer-nav__link" href="http://www.facebook.com/Leibal">
                Facebook
              </a>
              <a class="footer-nav__link" href="https://leibal.tumblr.com/">
                Tumblr
              </a>
              <a class="footer-nav__link" href="https://www.linkedin.com/company/leibal/">
                LinkedIn
              </a>
              <a class="footer-nav__link" href="https://www.tiktok.com/leibal">
                TikTok
              </a>
            </div>
          </div>
          {/* End Connect */}

          {/* Subscribe */}
          <div class="footer-nav__column">
            <div class="footer-nav__title">Newsletter</div>
            <div class="footer-nav__email-form">
              {this.platform === 'blog' ? blogNewsletterForm : storeNewsletterForm}
            </div>
            <div class="footer-nav__trademark">
              &copy; {new Date().getUTCFullYear()} LEIBAL LLC. ALL RIGHTS RESERVED
            </div>
          </div>
          {/* End Subscribe */}
        </div>
      </Host>
    );
  }
}
