import qs from "querystringify";
import { Base } from "../base.js";

export class Shares extends Base {
  /**
   * This searches the shares and returns... shares
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} [params]
   * @param {string} [params.filter] UID to find
   * @param {import("../base.js").BinaryBoolean} [params.exact] 0, 1 boolean to match the exact filter string
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<import("./types.js").SharesResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#shares}
   */
  shares(params) {
    let query = "shares";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Return a share from UID
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @returns {Promise<import("./types.js").ShareResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#share}
   */
  share(params) {
    let query = "share";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Create a public url that can be used by anyone to stream media.
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID of object you are sharing
   * @param {"song"|"album"|"artist"|"playlist"|"podcast"|"podcast_episode"|"video"} params.type
   * @param {string} [params.description] description (will be filled for you if empty)
   * @param {number} [params.expires] days to keep active
   * @returns {Promise<import("./types.js").ShareResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#share_create}
   */
  shareCreate(params) {
    let query = "share_create";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Update the description and/or expiration date for an existing share
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @param {import("../base.js").BinaryBoolean} [params.stream] 0, 1
   * @param {import("../base.js").BinaryBoolean} [params.download] 0, 1
   * @param {number} [params.expires] days to keep active
   * @param {string} [params.description] description
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#share_edit}
   */
  shareEdit(params) {
    let query = "share_edit";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Delete an existing share.
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID of share to delete
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#share_delete}
   */
  shareDelete(params) {
    let query = "share_delete";
    query += qs.stringify(params, "&");
    return this.request(query);
  }
}
