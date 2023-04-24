import Swiper from 'swiper';
declare type Image = {
  href: string;
  designDetail: any;
};
export declare class ImageGallery {
  el: HTMLDivElement;
  images: string;
  postId: number;
  postTitle: string;
  postExcerpt: string;
  previewImage: string;
  photographer: string;
  canEnquire: boolean;
  designDetail: string | null;
  isModalOpen: boolean;
  _images: Image[];
  _designDetail: any;
  swiper: Swiper;
  currentImageIndex: number;
  componentWillLoad(): void;
  componentDidLoad(): void;
  clampBodyScroll(isModalOpen: any, oldIsModalOpen: any): void;
  stopBodyScroll(): void;
  openImageGalleryHandler(event: CustomEvent<number>): void;
  keydownHandler(event: KeyboardEvent): void;
  render(): any;
}
export {};
