import qs from "querystringify";
import { Base } from "../base.js";

export class Preferences extends Base {
  /**
   * Get your server preferences
   * ACCESS REQUIRED: 100 (Admin)
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @returns {Promise<import("./types.js").PreferencesResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#system_preferences}
   */
  systemPreferences() {
    let query = "system_preferences";
    return this.request(query);
  }

  /**
   * Get your system preference by name
   * ACCESS REQUIRED: 100 (Admin)
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @param {Object} params
   * @param {string} params.filter Preference name e.g ('notify_email', 'ajax_load')
   * @returns {Promise<import("./types.js").PreferenceResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#system_preference}
   */
  systemPreference(params) {
    let query = "system_preference";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Get your user preferences
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @returns {Promise<import("./types.js").PreferencesResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#user_preferences}
   */
  userPreferences() {
    let query = "user_preferences";
    return this.request(query);
  }

  /**
   * Get your user preference by name
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @param {Object} params
   * @param {string} params.filter Preference name e.g ('notify_email', 'ajax_load')
   * @returns {Promise<import("./types.js").PreferenceResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#user_preference}
   */
  userPreference(params) {
    let query = "user_preference";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

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
    let query = "preference_create";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

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
    let query = "preference_edit";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Delete a non-system preference by name
   * ACCESS REQUIRED: 100 (Admin)
   * @param {Object} params
   * @param {string} params.filter Preference name e.g ('notify_email', 'ajax_load')
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#preference_delete}
   */
  preferenceDelete(params) {
    let query = "preference_delete";
    query += qs.stringify(params, "&");
    return this.request(query);
  }
}
