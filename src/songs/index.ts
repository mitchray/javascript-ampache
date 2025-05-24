import qs from "querystringify";
import { SongResponse, SongsResponse, DeletedSongsResponse } from "./types";
import {
  Base,
  BinaryBoolean,
  ExtendedPagination,
  Pagination,
  Success,
  UID,
} from "../base";

export class Songs extends Base {
  /**
   * Returns songs based on the specified filter
   * @remarks MINIMUM_API_VERSION=380001
   * @param [params.filter] Filter results to match this string
   * @param [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
   * @param [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
   * @param [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
   * @param [params.offset]
   * @param [params.limit]
   * @param [params.cond]
   * @param [params.sort]
   * @see {@link https://ampache.org/api/api-json-methods#songs}
   */
  songs(
    params?: {
      filter?: string;
      exact?: BinaryBoolean;
      add?: Date;
      update?: Date;
    } & ExtendedPagination,
  ) {
    let query = "songs";
    query += qs.stringify(params, "&");
    return this.request<SongsResponse>(query);
  }

  /**
   * Returns a single song
   * @remarks MINIMUM_API_VERSION=380001
   * @param params.filter UID to find
   * @see {@link https://ampache.org/api/api-json-methods#song}
   */
  song(params: { filter: UID }) {
    let query = "song";
    query += qs.stringify(params, "&");
    return this.request<SongResponse>(query);
  }

  /**
   * Songs of the specified artist
   * @remarks MINIMUM_API_VERSION=380001
   * @param params.filter UID to find
   * @param [params.top50] 0, 1 (if true filter to the artist top 50)
   * @param [params.offset]
   * @param [params.limit]
   * @param [params.cond]
   * @param [params.sort]
   * @see {@link https://ampache.org/api/api-json-methods#artist_songs}
   */
  artistSongs(
    params: {
      filter: UID;
      top50?: BinaryBoolean;
    } & ExtendedPagination,
  ) {
    let query = "artist_songs";
    query += qs.stringify(params, "&");
    return this.request<SongsResponse>(query);
  }

  /**
   * Songs of the specified album
   * @remarks MINIMUM_API_VERSION=380001
   * @param params.filter UID to find
   * @param [params.offset]
   * @param [params.limit]
   * @param [params.cond]
   * @param [params.sort]
   * @see {@link https://ampache.org/api/api-json-methods#album_songs}
   */
  albumSongs(
    params: {
      filter: UID;
    } & ExtendedPagination,
  ) {
    let query = "album_songs";
    query += qs.stringify(params, "&");
    return this.request<SongsResponse>(query);
  }

  /**
   * Songs of the specified genre
   * @remarks MINIMUM_API_VERSION=380001
   * @param params.filter UID to find
   * @param [params.offset]
   * @param [params.limit]
   * @param [params.cond]
   * @param [params.sort]
   * @see {@link https://ampache.org/api/api-json-methods#genre_songs}
   */
  genreSongs(
    params: {
      filter: UID;
    } & ExtendedPagination,
  ) {
    let query = "genre_songs";
    query += qs.stringify(params, "&");
    return this.request<SongsResponse>(query);
  }

  /**
   * This returns the songs for a playlist
   * @remarks MINIMUM_API_VERSION=380001
   * @param params.filter UID to find
   * @param [params.random] 0, 1 (if true get random songs using limit)
   * @param [params.offset]
   * @param [params.limit]
   * @see {@link https://ampache.org/api/api-json-methods#playlist_songs}
   */
  playlistSongs(
    params: {
      filter: UID;
      random?: BinaryBoolean;
    } & Pagination,
  ) {
    let query = "playlist_songs";
    query += qs.stringify(params, "&");
    return this.request<SongsResponse>(query);
  }

  /**
   * This returns the songs for a license
   * @remarks MINIMUM_API_VERSION=420000
   * @param params.filter UID to find
   * @param [params.offset]
   * @param [params.limit]
   * @param [params.cond]
   * @param [params.sort]
   * @see {@link https://ampache.org/api/api-json-methods#license_songs}
   */
  licenseSongs(
    params: {
      filter: UID;
    } & ExtendedPagination,
  ) {
    let query = "license_songs";
    query += qs.stringify(params, "&");
    return this.request<SongsResponse>(query);
  }

  /**
   * Delete an existing song. (if you are allowed to)
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @param params.filter UID of song to delete
   * @see {@link https://ampache.org/api/api-json-methods#song_delete}
   */
  songDelete(params: { filter: UID }) {
    let query = "song_delete";
    query += qs.stringify(params, "&");
    return this.request<Success>(query);
  }

  /**
   * Get the full song file tags using VaInfo
   * This is used to get tags for remote catalogs to allow maximum data to be returned
   * @remarks MINIMUM_API_VERSION=7.5.0
   * @param params.filter UID of song to fetch
   * @see {@link https://ampache.org/api/api-json-methods#song_tags}
   */
  // songTags(params: { filter: UID }) {
  //   let query = "song_tags";
  //   query += qs.stringify(params, "&");
  //   return this.request<SongResponse>(query); // TODO update reponse
  // }

  /**
   * This takes a URL and returns the song object in question
   * @remarks MINIMUM_API_VERSION=380001
   * @param params.url Full Ampache URL from server
   * @see {@link https://ampache.org/api/api-json-methods#url_to_song}
   */
  urlToSong(params: { url: string }) {
    let query = "url_to_song";
    params.url = encodeURIComponent(params.url);
    query += qs.stringify(params, "&");
    return this.request<SongResponse>(query);
  }

  /**
   * This searches the songs and returns... songs
   * @remarks MINIMUM_API_VERSION=380001
   * @param params.filter Filter results to match this string
   * @param [params.offset]
   * @param [params.limit]
   * @see {@link https://ampache.org/api/api-json-methods#search_songs}
   */
  searchSongs(
    params: {
      filter: string;
    } & Pagination,
  ) {
    let query = "search_songs";
    query += qs.stringify(params, "&");
    return this.request<SongsResponse>(query);
  }

  /**
   * Returns songs that have been deleted from the server
   * @remarks MINIMUM_API_VERSION=500000
   * @param [params.offset]
   * @param [params.limit]
   * @see {@link https://ampache.org/api/api-json-methods#deleted_songs}
   */
  deletedSongs(params?: {} & Pagination) {
    let query = "deleted_songs";
    query += qs.stringify(params, "&");
    return this.request<DeletedSongsResponse>(query);
  }
}
