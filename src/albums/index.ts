import qs from "querystringify";
import { AlbumResponse, AlbumsResponse } from "./types";
import { Base, BinaryBoolean, ExtendedPagination, UID } from "../base";

export class Albums extends Base {
  /**
   * This returns albums based on the provided search filters
   * @remarks MINIMUM_API_VERSION=380001
   * @param [params.filter] UID to find
   * @param [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
   * @param [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
   * @param [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
   * @param [params.include] albums, songs (include child objects in the response)
   * @param [params.offset]
   * @param [params.limit]
   * @param [params.cond]
   * @param [params.sort]
   * @see {@link https://ampache.org/api/api-json-methods#albums}
   */
  albums(
    params?: {
      filter?: number;
      exact?: BinaryBoolean;
      add?: Date;
      update?: Date;
      include?: "albums" | "songs";
    } & ExtendedPagination,
  ) {
    let query = "albums";
    query += qs.stringify(params, "&");
    return this.request<AlbumsResponse>(query);
  }

  /**
   * This returns a single album based on the UID provided
   * @remarks MINIMUM_API_VERSION=380001
   * @param params.filter UID to find
   * @param [params.include] songs (include child objects in the response)
   * @see {@link https://ampache.org/api/api-json-methods#album}
   */
  album(params: { filter: UID; include?: "songs" }) {
    let query = "album";
    query += qs.stringify(params, "&");
    return this.request<AlbumResponse>(query);
  }

  /**
   * This returns the albums of an artist
   * @remarks MINIMUM_API_VERSION=380001
   * @param params.filter UID to find
   * @param [params.album_artist] 0, 1 (if true filter for album artists only)
   * @param [params.offset]
   * @param [params.limit]
   * @param [params.cond]
   * @param [params.sort]
   * @see {@link https://ampache.org/api/api-json-methods#artist_albums}
   */
  artistAlbums(
    params: {
      filter: UID;
      album_artist?: BinaryBoolean;
    } & ExtendedPagination,
  ) {
    let query = "artist_albums";
    query += qs.stringify(params, "&");
    return this.request<AlbumsResponse>(query);
  }

  /**
   * This returns the albums associated with the genre in question
   * @remarks MINIMUM_API_VERSION=380001
   * @param params.filter UID to find
   * @param [params.offset]
   * @param [params.limit]
   * @param [params.cond]
   * @param [params.sort]
   * @see {@link https://ampache.org/api/api-json-methods#genre_albums}
   */
  genreAlbums(
    params?: {
      filter: UID;
    } & ExtendedPagination,
  ) {
    let query = "genre_albums";
    query += qs.stringify(params, "&");
    return this.request<AlbumsResponse>(query);
  }
}
