export declare class MoodsModal {
  el: HTMLElement;
  open: boolean;
  imageUrl: string;
  postId: number | null;
  boards: string;
  moodsApiUrl: string;
  wpApiNonce: string;
  isAuthenticated: boolean;
  container: HTMLDivElement;
  componentWillLoad(): void;
  componentDidLoad(): void;
  stopBodyScroll(): void;
  clampBodyWhenOpen(open: any, oldOpen: any): void;
  render(): any;
}
