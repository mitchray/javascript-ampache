import qs from "querystringify";
import { Base } from "../base.js";

export class Labels extends Base {
  /**
   * This returns labels based on the specified filter
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} [params]
   * @param {string} [params.filter] Filter results to match this string
   * @param {import("../base.js").BinaryBoolean} [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
   * @param {Date} [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
   * @param {Date} [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<import("./types.js").LabelsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#labels}
   */
  labels(params) {
    let query = "labels";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This returns a single label
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @returns {Promise<import("./types.js").LabelResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#label}
   */
  label(params) {
    let query = "label";
    query += qs.stringify(params, "&");
    return this.request(query);
  }
}
