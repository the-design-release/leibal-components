import { EventEmitter } from '../../stencil-public-runtime';
export declare class ImageGalleryLink {
  imageIndex: number;
  openImageGallery: EventEmitter<number>;
  openImageGalleryHandler(index: number): void;
  render(): any;
}
