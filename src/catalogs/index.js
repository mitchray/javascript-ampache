/**
 * @typedef {Object} CatalogResponse
 * @property {import("../base.js").UID} id
 * @property {string} name
 * @property {"local"|"remote"} type
 * @property {"podcast"|"clip"|"tvshow"|"movie"|"personal_video"|"music"} gather_types
 * @property {boolean} enabled
 * @property {number} last_add
 * @property {number} last_clean
 * @property {number} last_update
 * @property {string} path
 * @property {string} rename_pattern
 * @property {string} sort_pattern
 */

/**
 * @typedef {Object} CatalogsResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {CatalogResponse[]} catalog
 */

import qs from "querystringify";

export const catalogsMethods = {
  /**
   * This searches the catalogs and returns... catalogs
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} [params]
   * @param {"music"|"clip"|"tvshow"|"movie"|"personal_video"|"podcast"} [params.filter] Catalog type
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<CatalogsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#catalogs}
   */
  catalogs(params) {
    let query = "catalogs";
    query += qs.stringify(params, "&");
    return this.request(query);
  },

  /**
   * Return catalog by UID
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @returns {Promise<CatalogResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#catalog}
   */
  catalog(params) {
    let query = "catalog";
    query += qs.stringify(params, "&");
    return this.request(query);
  },

  /**
   * Kick off a catalog update or clean for the selected catalog
   * ACCESS REQUIRED: 75 (Catalog Manager)
   * @remarks MINIMUM_API_VERSION=400001
   * @param {Object} params
   * @param {"add_to_catalog"|"clean_catalog"} params.task add_to_catalog, clean_catalog
   * @param {import("../base.js").UID} params.catalog UID of catalog
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#catalog_action}
   */
  catalogAction(params) {
    let query = "catalog_action";
    query += qs.stringify(params, "&");
    return this.request(query);
  },

  /**
   * Perform actions on local catalog files. Single file versions of catalog add, clean, verify and remove (delete).
   * Make sure you remember to urlencode those file names!
   * ACCESS REQUIRED: 50 (Content Manager)
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {string} params.file FULL path to local file
   * @param {string} params.task add, clean, verify, remove, (can include comma-separated values)
   * @param {import("../base.js").UID} params.catalog UID of catalog
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#catalog_file}
   */
  catalogFile(params) {
    let query = "catalog_file";
    query += qs.stringify(params, "&");
    return this.request(query);
  },

  /**
   * Create a new catalog.
   * ACCESS REQUIRED: 75 (Catalog Manager)
   * @remarks MINIMUM_API_VERSION=6.0.0
   * @param {Object} params
   * @param {string} params.name Name for the catalog
   * @param {string} params.path URL or folder path for your catalog
   * @param {"local"|"beets"|"remote"|"subsonic"|"seafile"|"beetsremote"} [params.type] Default: 'local'
   * @param {"music"|"podcast"|"clip"|"tvshow"|"movie"|"personal_video"} [params.media_type] Default: 'music'
   * @param {string} [params.file_pattern] Pattern used identify tags from the file name. Default: '%T - %t'
   * @param {string} [params.folder_pattern] Pattern used identify tags from the folder name. Default: '%a/%A'
   * @param {string} [params.username] login to remote catalog
   * @param {string} [params.password] password to remote catalog
   * @returns {Promise<CatalogResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#catalog_add}
   */
  catalogAdd(params) {
    let query = "catalog_add";
    query += qs.stringify(params, "&");
    return this.request(query);
  },

  /**
   * Delete an existing catalog. (if it exists)
   * ACCESS REQUIRED: 75 (Catalog Manager)
   * @remarks MINIMUM_API_VERSION=6.0.0
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter ID of the catalog
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#catalog_delete}
   */
  catalogDelete(params) {
    let query = "catalog_delete";
    query += qs.stringify(params, "&");
    return this.request(query);
  },
};
