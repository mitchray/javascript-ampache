/**
 * @typedef {Object} PreferenceResponse
 * @property {import("../base.js").UID} id
 * @property {string} name
 * @property {string} level
 * @property {string} description
 * @property {string} value
 * @property {string} type
 * @property {string} category
 * @property {string|null} subcategory
 * @property {boolean} has_access
 * @property {string} [values]
 */

/**
 * @typedef {Object} PreferencesResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {PreferenceResponse[]} preference
 */

export const preferencesMethods = {
  /**
   * Get your server preferences
   * ACCESS REQUIRED: 100 (Admin)
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @returns {Promise<PreferencesResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#system_preferences}
   */
  systemPreferences() {
    return this.call("system_preferences");
  },

  /**
   * Get your system preference by name
   * ACCESS REQUIRED: 100 (Admin)
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @param {Object} params
   * @param {string} params.filter Preference name e.g ('notify_email', 'ajax_load')
   * @returns {Promise<PreferenceResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#system_preference}
   */
  systemPreference(params) {
    return this.call("system_preference", params);
  },

  /**
   * Get your user preferences
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @returns {Promise<PreferencesResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#user_preferences}
   */
  userPreferences() {
    return this.call("user_preferences");
  },

  /**
   * Get your user preference by name
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @param {Object} params
   * @param {string} params.filter Preference name e.g ('notify_email', 'ajax_load')
   * @returns {Promise<PreferenceResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#user_preference}
   */
  userPreference(params) {
    return this.call("user_preference", params);
  },

  /**
   * Add a new preference to your server
   * ACCESS REQUIRED: 100 (Admin)
   * @param {Object} params
   * @param {string} params.filter Preference name e.g ('notify_email', 'ajax_load')
   * @param {"boolean"|"integer"|"string"|"special"} params.type boolean, integer, string, special
   * @param {string|number} params.default string or integer default value
   * @param {"interface"|"internal"|"options"|"playlist"|"plugins"|"streaming"} params.category Category type
   * @param {string} [params.description]
   * @param {string} [params.subcategory]
   * @param {number} [params.level] access level required to change the value (default 100)
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#preference_create}
   */
  preferenceCreate(params) {
    return this.call("preference_create", params);
  },

  /**
   * Edit a preference value and apply to all users if allowed
   * ACCESS REQUIRED: 100 (Admin)
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @param {Object} params
   * @param {string} params.filter Preference name e.g ('notify_email', 'ajax_load')
   * @param {string|number} params.value (string/integer) Preference value
   * @param {import("../base.js").BinaryBoolean} [params.all] 0, 1 apply to all users
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#preference_edit}
   */
  preferenceEdit(params) {
    return this.call("preference_edit", params);
  },

  /**
   * Delete a non-system preference by name
   * ACCESS REQUIRED: 100 (Admin)
   * @param {Object} params
   * @param {string} params.filter Preference name e.g ('notify_email', 'ajax_load')
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#preference_delete}
   */
  preferenceDelete(params) {
    return this.call("preference_delete", params);
  },
};
