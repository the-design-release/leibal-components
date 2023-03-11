import { Component, Host, h, State, Element } from '@stencil/core';

const CONTENT = {
  faq: {
    sections: [
      {
        title: { short: 'Stories FAQ', long: 'Stories Frequently Asked Questions' },
        subsections: [{ title: 'What is Stories?', content: 'Sotries???' }],
      },
    ],
  },
  terms: {
    sections: [
      {
        title: { short: 'Stories T&C', long: 'Stories Terms & Conditions' },
        subsections: [
          { title: 'Terms', content: 'Some sick shit...' },
          { title: 'Shipping', content: 'Some sick shit...' },
          { title: 'Returns', content: 'Some sick shit...' },
          { title: 'Order Cancellation', content: 'Some sick shit...' },
          { title: 'User Warranties', content: 'Some sick shit...' },
          { title: 'Privacy Policy', content: 'Some sick shit...' },
        ],
      },
    ],
  },
  privacy: {
    sections: [
      {
        title: { short: 'Stories Privacy', long: 'Stories Privacy Policy' },
        subsections: [],
      },
    ],
  },
};

type Section = keyof typeof CONTENT;

@Component({
  tag: 'terms-of-service',
  styleUrl: 'terms-of-service.css',
  shadow: true,
})
export class TermsOfService {
  @Element()
  el;

  @State()
  visibleSection: Section = 'terms';

  @State()
  subsectionIndex: number = 0;

  sectionProps(section: Section) {
    return {
      class: {
        'terms-of-service__section': true,
        'terms-of-service__section--active': this.visibleSection === section,
      },
      onClick: () => (this.visibleSection = section),
    };
  }

  subsectionProps(index: number) {
    return {
      class: {
        'terms-of-service__subsection-select': true,
        'terms-of-service__subsection-select--active': this.subsectionIndex === index,
      },
      onClick: () => (this.subsectionIndex = index),
    };
  }

  renderSections() {
    return (
      <div class="terms-of-service__sections">
        <sticky-scroller startOffset={130}>
          <button {...this.sectionProps('faq')}>FAQ</button>
          <button {...this.sectionProps('terms')}>Terms</button>
          <button {...this.sectionProps('privacy')}>Privacy</button>
        </sticky-scroller>
      </div>
    );
  }

  renderSubsectionContent() {
    const { sections } = CONTENT[this.visibleSection];
    const section = sections[this.subsectionIndex];

    return (
      <div class="terms-of-service__content">
        <div class="terms-of-service__content__subsection">
          <div class="terms-of-service__subsection__title">{section.title.long}</div>
          <div>
            {section.subsections.map(({ title, content }, index) => (
              <div class="terms-of-service__subsection__content" id={`subsection-${index}`}>
                <div class="terms-of-service__subsection__content__title">{title}</div>
                <div class="terms-of-service__subsection__content__body">{content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  renderSubsections() {
    const { sections } = CONTENT[this.visibleSection];

    return (
      <div style={{ 'grid-column': 'span 3 / span 3' }}>
        <sticky-scroller startOffset={130}>
          <div class="terms-of-service__subsections">
            {sections.map(({ title }, index) => (
              <button {...this.subsectionProps(index)}>{title.short}</button>
            ))}
          </div>
          <div class="terms-of-service__subheaders">
            {sections[this.subsectionIndex].subsections.map(({ title }, index) => (
              <button
                onClick={() => {
                  const element = this.el.shadowRoot.querySelector(`#subsection-${index}`);
                  const { top } = element.getBoundingClientRect();
                  const offset = 60;

                  window.scrollTo({ top: top + window.scrollY - offset, behavior: 'smooth' });
                }}
              >
                {title}
              </button>
            ))}
          </div>
        </sticky-scroller>
      </div>
    );
  }

  render() {
    return (
      <Host>
        <div class="terms-of-service">
          {this.renderSections()}
          {this.renderSubsections()}
          {this.renderSubsectionContent()}
        </div>
      </Host>
    );
  }
}
