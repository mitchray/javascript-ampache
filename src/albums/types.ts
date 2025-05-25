import { UID } from "../base";
import { GenreSummary } from "../genres/types";
import { ArtistSummary } from "../artists/types";
import { SongResponse } from "../songs/types";

export type AlbumSummary = {
  id: UID;
  name: string;
  prefix: string | null;
  basename: string;
};

export type AlbumResponse = {
  id: UID;
  name: string;
  prefix: string | null;
  basename: string;
  artist: ArtistSummary;
  artists: ArtistSummary[];
  songartists: ArtistSummary[];
  time: number;
  year: number | string;
  tracks?: SongResponse[];
  songcount: number;
  disccount: number;
  type: string | null;
  genre: GenreSummary[];
  art: string;
  has_art: boolean;
  flag: boolean;
  rating: number | null;
  averagerating: number | null;
  mbid: string | null;
};

export type AlbumsResponse = {
  total_count: number;
  md5: string;
  album: AlbumResponse[];
};
