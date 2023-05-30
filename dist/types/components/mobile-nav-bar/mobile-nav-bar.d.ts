import { PlatformType } from '../../utils/platform';
export declare class MobileNavBar {
  isOpen: boolean;
  platform: PlatformType;
  isShowingLinks: boolean;
  linksType: PlatformType;
  showLinks(platform: PlatformType): void;
  hideLinks(): void;
  platformSpecificLink(platform: PlatformType, path: string): string;
  render(): any;
}
