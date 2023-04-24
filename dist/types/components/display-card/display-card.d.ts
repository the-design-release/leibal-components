import { Theme } from '../../utils/theme';
export declare type DisplayCardType = 'normal' | 'featured';
export declare class DisplayCard {
  theme: Theme;
  cardType: DisplayCardType;
  bottomTitleName: string;
  bottomSubtitleName: string;
  images: string;
  linkTo: string;
  _images: string[];
  watchImages(value: any): void;
  componentWillLoad(): void;
  render(): any;
}
