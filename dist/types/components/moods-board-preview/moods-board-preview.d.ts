export interface MoodsBoardImage {
  postId: string;
  postTitle: string;
  postSubtitle: string;
  postUrl: string;
  photographer?: string;
  imageUrl: string;
  timestamp: string;
}
export interface MoodsBoardData {
  id: string;
  postId: string;
  name: string;
  images: MoodsBoardImage[];
  timestamp: string;
  url: string;
}
export declare class MoodsBoard {
  board: MoodsBoardData;
  render(): any;
}
