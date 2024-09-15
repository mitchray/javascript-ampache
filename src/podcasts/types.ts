import { UID } from "../base";

export type PodcastResponse = {
  id: UID;
  name: string;
  description: string;
  language: string;
  copyright: string;
  feed_url: string;
  generator: string;
  website: string;
  build_date: string;
  sync_date: string;
  public_url: string;
  art: string;
  has_art: boolean;
  flag: boolean;
  rating: number | null;
  averaterating: number | null;
  podcast_episode: PodcastEpisodeResponse[];
};

export type PodcastsResponse = {
  total_count: number;
  md5: string;
  podcast: PodcastResponse[];
};

export type PodcastEpisodeResponse = {
  id: UID;
  title: string;
  name: string;
  description: string;
  category: string;
  author: string;
  author_full: string;
  website: string;
  pubdate: string;
  state: "completed" | "pending";
  filelength: string;
  filesize: string;
  filename: string;
  mime: string;
  time: number;
  size: number;
  bitrate: number;
  stream_bitrate: number;
  rate: number;
  mode: number | null;
  channels: number | null;
  public_url: string;
  url: string;
  catalog: UID;
  art: string;
  has_art: boolean;
  flag: boolean;
  rating: number | null;
  averagerating: number | null;
  playcount: number;
  played: number;
};

export type PodcastEpisodesResponse = {
  total_count: number;
  md5: string;
  podcast_episode: PodcastEpisodeResponse[];
};

export type DeletedPodcastEpisodeResponse = {
  id: UID;
  addition_time: number;
  delete_time: number;
  title: string;
  file: string;
  catalog: UID;
  total_count: number;
  total_skip: number;
  podcast: UID;
};

export type DeletedPodcastEpisodesResponse = {
  total_count: number;
  md5: string;
  deleted_podcast_episode: DeletedPodcastEpisodeResponse[];
};
