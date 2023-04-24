import { EventEmitter } from '../../stencil-public-runtime';
import { Theme } from '../../utils/theme';
export interface MoodsModalEvent {
  imageUrl: string;
  postId: number;
}
export declare class AddToMoodsButton {
  el: HTMLElement;
  imageUrl: string;
  postId: number | null;
  disabled: boolean;
  theme: Theme;
  showOnHover: boolean;
  contentLocation: 'left' | 'right';
  hidden: boolean;
  openMoodsModal: EventEmitter<MoodsModalEvent>;
  openMoodsModalHandler(): void;
  componentDidLoad(): void;
  render(): any;
}
