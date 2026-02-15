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
export {};
