import { PlatformType } from '../../utils/platform';
export declare class FooterNav {
  platform: PlatformType;
  platformSpecificLink(platform: PlatformType, path: string): string;
  render(): any;
}
