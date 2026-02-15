/**
 * @typedef {Object} LabelResponse
 * @property {import("./base.js").UID} id
 * @property {string} name
 * @property {number} artists
 * @property {string|null} summary
 * @property {string|null} external_link
 * @property {string|null} address
 * @property {string|null} category
 * @property {string|null} email
 * @property {string|null} website
 * @property {import("./base.js").UID} user
 */

/**
 * @typedef {Object} LabelsResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {LabelResponse[]} label
 */

export const labelsMethods = {
  /**
   * This returns labels based on the specified filter
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} [params]
   * @param {string} [params.filter] Filter results to match this string
   * @param {import("./base.js").BinaryBoolean} [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
   * @param {Date} [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
   * @param {Date} [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<LabelsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#labels}
   */
  labels(params) {
    return this.call("labels", params);
  },

  /**
   * This returns a single label
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID to find
   * @returns {Promise<LabelResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#label}
   */
  label(params) {
    return this.call("label", params);
  },
};
