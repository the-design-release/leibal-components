import Swiper from 'swiper';
import { MoodsBoardImage } from '../moods-board-preview/moods-board-preview';
export declare class ImageGallery {
  el: HTMLDivElement;
  images: string;
  isModalOpen: boolean;
  _images: MoodsBoardImage[];
  swiper: Swiper;
  currentImageIndex: number;
  componentWillLoad(): void;
  componentDidLoad(): void;
  clampBodyScroll(isModalOpen: any, oldIsModalOpen: any): void;
  stopBodyScroll(): void;
  openMoodsGalleryHandler(event: CustomEvent<MoodsBoardImage>): void;
  keydownHandler(event: KeyboardEvent): void;
  postTitle(): string;
  postExcerpt(): string;
  photographer(): string;
  render(): any;
}
