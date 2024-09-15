import { UID } from "../base";

export type BookmarkResponse = {
  id: UID;
  type: "song" | "video" | "podcast_episode";
  position: number;
  client?: string;
  date?: number;
};

export type BookmarksResponse = {
  total_count: number;
  md5: string;
  bookmark: BookmarkResponse[];
};
