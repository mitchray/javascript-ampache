import { UID } from "../base";
import { GenreSummary } from "../genres/types";

export type VideoResponse = {
  id: UID;
  title: string;
  mime: string;
  resolution: string;
  size: number;
  genre: GenreSummary[];
  time: number;
  url: string;
  art: string;
  has_art: boolean;
  flag: boolean;
  rating: number | null;
  averagerating: number | null;
  playcount: number;
};

export type VideosResponse = {
  total_count: number;
  md5: string;
  video: VideoResponse[];
};

export type DeletedVideoResponse = {
  id: UID;
  addition_time: number;
  delete_time: number;
  title: string;
  file: string;
  catalog: UID;
  total_count: number;
  total_skip: number;
};

export type DeletedVideosResponse = {
  total_count: number;
  md5: string;
  deleted_video: DeletedVideoResponse[];
};
