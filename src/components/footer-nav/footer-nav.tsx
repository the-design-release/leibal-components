import { Component, Host, h, Prop } from '@stencil/core';
import { PlatformType } from '../../utils/platform';

@Component({
  tag: 'footer-nav',
  styleUrl: 'footer-nav.css',
  shadow: true,
})
export class FooterNav {
  @Prop() platform: PlatformType = 'blog';

  render() {
    const storeNewsletterForm = (
      <form
        action="https://leibal.us4.list-manage.com/subscribe/post?u=9891199121e89a545e0ba572a&amp;id=55fd30c180&amp;f_id=005bb1ebf0"
        method="post"
        target="_self"
      >
        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required />
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input type="text" name="b_9891199121e89a545e0ba572a_3a78fd6a2d" tabindex="-1" value="" />
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
          <input type="text" name="b_9891199121e89a545e0ba572a_3a78fd6a2d" tabindex="-1" value="" />
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
              <a class="footer-nav__link" href="#">
                Architecture
              </a>
              <a class="footer-nav__link" href="#">
                Interiors
              </a>
              <a class="footer-nav__link" href="#">
                Furniture
              </a>
              <a class="footer-nav__link" href="#">
                Lighting
              </a>
              <a class="footer-nav__link" href="#">
                Products
              </a>
              <a class="footer-nav__link" href="#">
                Travel
              </a>
            </div>
          </div>
          {/* End Stories */}

          {/* Store */}
          <div class="footer-nav__column">
            <div class="footer-nav__title">Store</div>
            <div class="footer-nav__links">
              <a class="footer-nav__link" href="#">
                Sofas
              </a>
              <a class="footer-nav__link" href="#">
                Chairs
              </a>
              <a class="footer-nav__link" href="#">
                Tables
              </a>
              <a class="footer-nav__link" href="#">
                Storage
              </a>
              <a class="footer-nav__link" href="#">
                Lighting
              </a>
              <a class="footer-nav__link" href="#">
                Accessories
              </a>
            </div>
          </div>
          {/* End Store */}

          {/* About */}
          <div class="footer-nav__column">
            <div class="footer-nav__title">About</div>
            <div class="footer-nav__links">
              <a class="footer-nav__link" href="#">
                Contact Us
              </a>
              <a class="footer-nav__link" href="#">
                Submit
              </a>
              <a class="footer-nav__link" href="#">
                FAQ
              </a>
              <a class="footer-nav__link" href="#">
                Privacy
              </a>
              <a class="footer-nav__link" href="#">
                Terms &amp; Conditions
              </a>
              <a class="footer-nav__link" href="#">
                Trade Program
              </a>
            </div>
          </div>
          {/* End About */}

          {/* Connect */}
          <div class="footer-nav__column">
            <div class="footer-nav__title">Connect</div>
            <div class="footer-nav__links">
              <a class="footer-nav__link" href="#">
                Pinterest
              </a>
              <a class="footer-nav__link" href="#">
                Instagram
              </a>
              <a class="footer-nav__link" href="#">
                Facebook
              </a>
              <a class="footer-nav__link" href="#">
                Twitter
              </a>
              <a class="footer-nav__link" href="#">
                Tumblr
              </a>
              <a class="footer-nav__link" href="#">
                LinkedIn
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
