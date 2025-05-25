import { AlbumResponse } from "../albums/types";
import { SongsResponse } from "../songs/types";
import { GenreResponse } from "../genres/types";

export type ArtistSummary = {
  id: string;
  name: string;
  prefix: string | null;
  basename: string;
};

export type ArtistResponse = {
  id: string;
  name: string;
  prefix: string | null;
  basename: string;
  albums: AlbumResponse[];
  albumcount: number;
  songs: SongsResponse[];
  songcount: number;
  genre: GenreResponse[];
  art: string;
  has_art: boolean;
  flag: boolean;
  rating: number | null;
  averagerating: number | null;
  mbid: string | null;
  summary: string;
  time: number;
  yearformed: number;
  placeformed: string;
};

export type ArtistsResponse = {
  total_count: number;
  md5: string;
  artist: ArtistResponse[];
};
