import { PlatformType } from '../../utils/platform';
export declare class NavBar {
  el: HTMLElement;
  searchInput?: HTMLInputElement;
  authenticated: boolean;
  platform: PlatformType;
  showMultiplier: number;
  deltaY: number;
  scrollY: number;
  scrolled: boolean;
  scrollingUp: boolean;
  scrolledUp: number;
  scrollThreshold: number;
  showSearch: boolean;
  searchText: string;
  currentHeight: number;
  componentWillLoad(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  setHeight(): void;
  scrollListener(): void;
  platformSpecificLink(platform: PlatformType, path: string): string;
  watchScrolled(scrolled: any, lastScrolled: any): void;
  watchScrollY(y: any, lastY: any): void;
  render(): any;
}
