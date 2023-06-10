import { PlatformType } from '../../utils/platform';
export declare class MobileNavBar {
  isOpen: boolean;
  platform: PlatformType;
  isShowingLinks: boolean;
  linksType: PlatformType;
  searchText: string;
  windowResizeEl: HTMLDivElement;
  componentDidMount(): void;
  showLinks(platform: PlatformType): void;
  hideLinks(): void;
  platformSpecificLink(platform: PlatformType, path: string): string;
  submitSearch(): void;
  render(): any;
}
