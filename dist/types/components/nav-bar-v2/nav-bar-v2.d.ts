import { PlatformType } from '../../utils/platform';
export declare class NavBarV2 {
  searchInput?: HTMLInputElement;
  authenticated: boolean;
  platform: PlatformType;
  isSearchOpen: boolean;
  currentMenu: 'read' | 'shop' | null;
  searchText: string;
  platformSpecificLink(platform: PlatformType, path: string): string;
  render(): any;
}
