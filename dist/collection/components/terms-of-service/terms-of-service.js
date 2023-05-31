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
export class TermsOfService {
  constructor() {
    this.visibleSection = 'terms';
    this.subsectionIndex = 0;
  }
  sectionProps(section) {
    return {
      class: {
        'terms-of-service__section': true,
        'terms-of-service__section--active': this.visibleSection === section,
      },
      onClick: () => (this.visibleSection = section),
    };
  }
  subsectionProps(index) {
    return {
      class: {
        'terms-of-service__subsection-select': true,
        'terms-of-service__subsection-select--active': this.subsectionIndex === index,
      },
      onClick: () => (this.subsectionIndex = index),
    };
  }
  renderSections() {
    return (h("div", { class: "terms-of-service__sections" },
      h("sticky-scroller", { startOffset: 130 },
        h("button", Object.assign({}, this.sectionProps('faq')), "FAQ"),
        h("button", Object.assign({}, this.sectionProps('terms')), "Terms"),
        h("button", Object.assign({}, this.sectionProps('privacy')), "Privacy"))));
  }
  renderSubsectionContent() {
    const { sections } = CONTENT[this.visibleSection];
    const section = sections[this.subsectionIndex];
    return (h("div", { class: "terms-of-service__content" },
      h("div", { class: "terms-of-service__content__subsection" },
        h("div", { class: "terms-of-service__subsection__title" }, section.title.long),
        h("div", null, section.subsections.map(({ title, content }, index) => (h("div", { class: "terms-of-service__subsection__content", id: `subsection-${index}` },
          h("div", { class: "terms-of-service__subsection__content__title" }, title),
          h("div", { class: "terms-of-service__subsection__content__body" }, content))))))));
  }
  renderSubsections() {
    const { sections } = CONTENT[this.visibleSection];
    return (h("div", { style: { 'grid-column': 'span 3 / span 3' } },
      h("sticky-scroller", { startOffset: 130 },
        h("div", { class: "terms-of-service__subsections" }, sections.map(({ title }, index) => (h("button", Object.assign({}, this.subsectionProps(index)), title.short)))),
        h("div", { class: "terms-of-service__subheaders" }, sections[this.subsectionIndex].subsections.map(({ title }, index) => (h("button", { onClick: () => {
            const element = this.el.shadowRoot.querySelector(`#subsection-${index}`);
            const { top } = element.getBoundingClientRect();
            const offset = 60;
            window.scrollTo({ top: top + window.scrollY - offset, behavior: 'smooth' });
          } }, title)))))));
  }
  render() {
    return (h(Host, null,
      h("div", { class: "terms-of-service" },
        this.renderSections(),
        this.renderSubsections(),
        this.renderSubsectionContent())));
  }
  static get is() { return "terms-of-service"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["terms-of-service.css"]
  }; }
  static get styleUrls() { return {
    "$": ["terms-of-service.css"]
  }; }
  static get states() { return {
    "visibleSection": {},
    "subsectionIndex": {}
  }; }
  static get elementRef() { return "el"; }
}
