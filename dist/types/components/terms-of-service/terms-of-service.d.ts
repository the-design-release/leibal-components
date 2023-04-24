declare const CONTENT: {
  faq: {
    sections: {
      title: {
        short: string;
        long: string;
      };
      subsections: {
        title: string;
        content: string;
      }[];
    }[];
  };
  terms: {
    sections: {
      title: {
        short: string;
        long: string;
      };
      subsections: {
        title: string;
        content: string;
      }[];
    }[];
  };
  privacy: {
    sections: {
      title: {
        short: string;
        long: string;
      };
      subsections: any[];
    }[];
  };
};
declare type Section = keyof typeof CONTENT;
export declare class TermsOfService {
  el: any;
  visibleSection: Section;
  subsectionIndex: number;
  sectionProps(section: Section): {
    class: {
      'terms-of-service__section': boolean;
      'terms-of-service__section--active': boolean;
    };
    onClick: () => "faq" | "terms" | "privacy";
  };
  subsectionProps(index: number): {
    class: {
      'terms-of-service__subsection-select': boolean;
      'terms-of-service__subsection-select--active': boolean;
    };
    onClick: () => number;
  };
  renderSections(): any;
  renderSubsectionContent(): any;
  renderSubsections(): any;
  render(): any;
}
export {};
