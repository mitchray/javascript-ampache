/**
 * @typedef {Object} LicenseResponse
 * @property {import("../base.js").UID} id
 * @property {string} name
 * @property {string} description
 * @property {string} external_link
 */

/**
 * @typedef {Object} LicensesResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {LicenseResponse[]} license
 */

export const licensesMethods = {
  /**
   * This returns licenses based on the specified filter
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
   * @returns {Promise<LicensesResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#licenses}
   */
  licenses(params) {
    return this.call("licenses", params);
  },

  /**
   * This returns a single license
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @returns {Promise<LicenseResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#license}
   */
  license(params) {
    return this.call("license", params);
  },
};
