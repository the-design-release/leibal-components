declare type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  moreText: string;
};
export declare class EnquireModal {
  el: HTMLDivElement;
  postTitle: string;
  postUrl: string;
  previewImage: string;
  isModalOpen: boolean;
  formState: FormState;
  contentElement?: HTMLFormElement;
  componentWillLoad(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  getContentPageOffset(): number;
  handleScroll(): void;
  handleEnquireClick(): void;
  handleFormChange(event: any): void;
  handleFormSubmit(event: any): boolean;
  clampBodyScroll(isModalOpen: any, oldIsModalOpen: any): void;
  renderEnquireCard: () => any;
  render(): any;
}
export {};
