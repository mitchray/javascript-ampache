import qs from "querystringify";
import { GenreResponse, GenresResponse } from "./types";
import { Base, BinaryBoolean, ExtendedPagination, UID } from "../base";

export class Genres extends Base {
  /**
   * This returns the genres (Tags) based on the specified filter
   * @remarks MINIMUM_API_VERSION=380001
   * @param [params.filter] UID to find
   * @param [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
   * @param [params.offset]
   * @param [params.limit]
   * @param [params.cond]
   * @param [params.sort]
   * @see {@link https://ampache.org/api/api-json-methods#genres}
   */
  async genres(
    params?: {
      filter?: string;
      exact?: BinaryBoolean;
    } & ExtendedPagination,
  ) {
    let query = "genres";
    query += qs.stringify(params, "&");
    return await this.request<GenresResponse>(query);
  }

  /**
   * This returns a single genre based on UID
   * @remarks MINIMUM_API_VERSION=380001
   * @param params.filter UID to find
   * @see {@link https://ampache.org/api/api-json-methods#genre}
   */
  async genre(params: { filter: UID }) {
    let query = "genre";
    query += qs.stringify(params, "&");
    return this.request<GenreResponse>(query);
  }
}
