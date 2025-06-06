import { ArtistSummary } from "../artists/types";
import { GenreSummary } from "../genres/types";
import { UID } from "../base";
import { AlbumSummary } from "../albums/types";

export type SongResponse = {
  id: UID;
  title: string;
  name: string;
  artist: ArtistSummary;
  album: AlbumSummary;
  albumartist: ArtistSummary;
  disk: number;
  track: number;
  filename: string;
  genre: GenreSummary[];
  playlisttrack: number;
  time: number;
  year: number | string;
  format: string;
  stream_format: string;
  rate: number;
  mode: string;
  mime: string;
  stream_mime: string;
  url: string;
  size: number;
  mbid: string | null;
  album_mbid: string | null;
  artist_mbid: string | null;
  art: string;
  has_art: boolean;
  flag: boolean;
  rating: number | null;
  averagerating: number | null;
  playcount: number;
  catalog: number;
  composer: string;
  channels: number | null;
  comment: string;
  license: string | null;
  publisher: string;
  language: string;
  lyrics: string;
  replaygain_album_gain: number | null;
  replaygain_album_peak: number | null;
  replaygain_track_gain: number | null;
  replaygain_track_peak: number | null;
  r128_album_gain: number | null;
  r128_track_gain: number | null;
};

export type SongsResponse = {
  total_count: number;
  md5: string;
  song: SongResponse[];
};

export type DeletedSongResponse = {
  id: UID;
  addition_time: number;
  delete_time: number;
  update_time: number;
  title: string;
  file: string;
  catalog: UID;
  total_count: number;
  total_skip: number;
  album: UID;
  artist: UID;
};

export type DeletedSongsResponse = {
  total_count: number;
  md5: string;
  deleted_song: DeletedSongResponse[];
};
