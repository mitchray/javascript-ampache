import qs from "querystringify";
import { Base } from "../base.js";

export class Shouts extends Base {
  /**
   * This gets the latest posted shouts
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} [params]
   * @param {string} [params.username] Username to find
   * @param {number} [params.limit] Maximum number of results to return
   * @returns {Promise<{ shout: import("./types.js").ShoutResponse[] }>}
   * @see {@link https://ampache.org/api/api-json-methods#last_shouts}
   */
  last_shouts(params) {
    let query = "last_shouts";
    query += qs.stringify(params, "&");
    return this.request(query);
  }
}
