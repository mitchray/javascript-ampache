import { UID } from "../base";

export type GenreSummary = {
  id: UID;
  name: string;
};

export type GenreResponse = {
  id: UID;
  name: string;
  albums: number;
  artists: number;
  songs: number;
  videos: number;
  playlists: number;
  live_streams: number;
};

export type GenresResponse = {
  total_count: number;
  md5: string;
  genre: GenreResponse[];
};
