'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bb21c77a.js');

const termsOfServiceCss = ":host{display:block}.terms-of-service{display:block;font-size:13px;font-weight:300}@media (min-width:768px){.terms-of-service{display:grid;gap:2rem;grid-template-columns:repeat(10,minmax(0,1fr))}}.terms-of-service * button{all:unset;cursor:pointer;display:block}@media (min-width:768px){.terms-of-service__sections{grid-column:span 2/span 2}}.terms-of-service__sections>*{margin-bottom:.5rem!important}.terms-of-service__section--active,.terms-of-service__subsection-select--active{font-weight:600!important}.terms-of-service__subsections{margin-bottom:4rem}@media (min-width:768px){.terms-of-service__subsections{grid-column:span 3/span 3;margin-bottom:6rem}}.terms-of-service__subheaders>*,.terms-of-service__subsections>*{margin-bottom:.5rem!important}.terms-of-service__subheaders>:hover{font-weight:600!important}@media (min-width:768px){.terms-of-service__content{grid-column:span 5/span 5}}.terms-of-service__subsection__title{font-size:1.875rem;line-height:2.25rem;margin-bottom:1rem}.terms-of-service__subsection__content{padding-top:4rem}.terms-of-service__subsection__content__title{font-size:1.125rem;font-weight:400;line-height:1.75rem;margin-bottom:2rem}";

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
let TermsOfService = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("div", { class: "terms-of-service__sections" }, index.h("sticky-scroller", { startOffset: 130 }, index.h("button", Object.assign({}, this.sectionProps('faq')), "FAQ"), index.h("button", Object.assign({}, this.sectionProps('terms')), "Terms"), index.h("button", Object.assign({}, this.sectionProps('privacy')), "Privacy"))));
  }
  renderSubsectionContent() {
    const { sections } = CONTENT[this.visibleSection];
    const section = sections[this.subsectionIndex];
    return (index.h("div", { class: "terms-of-service__content" }, index.h("div", { class: "terms-of-service__content__subsection" }, index.h("div", { class: "terms-of-service__subsection__title" }, section.title.long), index.h("div", null, section.subsections.map(({ title, content }, index$1) => (index.h("div", { class: "terms-of-service__subsection__content", id: `subsection-${index$1}` }, index.h("div", { class: "terms-of-service__subsection__content__title" }, title), index.h("div", { class: "terms-of-service__subsection__content__body" }, content))))))));
  }
  renderSubsections() {
    const { sections } = CONTENT[this.visibleSection];
    return (index.h("div", { style: { 'grid-column': 'span 3 / span 3' } }, index.h("sticky-scroller", { startOffset: 130 }, index.h("div", { class: "terms-of-service__subsections" }, sections.map(({ title }, index$1) => (index.h("button", Object.assign({}, this.subsectionProps(index$1)), title.short)))), index.h("div", { class: "terms-of-service__subheaders" }, sections[this.subsectionIndex].subsections.map(({ title }, index$1) => (index.h("button", { onClick: () => {
        const element = this.el.shadowRoot.querySelector(`#subsection-${index$1}`);
        const { top } = element.getBoundingClientRect();
        const offset = 60;
        window.scrollTo({ top: top + window.scrollY - offset, behavior: 'smooth' });
      } }, title)))))));
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "terms-of-service" }, this.renderSections(), this.renderSubsections(), this.renderSubsectionContent())));
  }
  get el() { return index.getElement(this); }
};
TermsOfService.style = termsOfServiceCss;

exports.terms_of_service = TermsOfService;
