import qs from "querystringify";
import { Base } from "../base.js";

export class Users extends Base {
  /**
   * Get ids and usernames for your site
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @returns {Promise<{ user: import("./types.js").UserSummary[] }>}
   * @see {@link https://ampache.org/api/api-json-methods#users}
   */
  users() {
    let query = "users";
    return this.request(query);
  }

  /**
   * This get a user's public information (or current user if username is omitted)
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} [params]
   * @param {string} [params.username] UID to find
   * @returns {Promise<import("./types.js").UserResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#user}
   */
  user(params) {
    let query = "user";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Create a new user
   * ACCESS REQUIRED: 100 (Admin)
   * @remarks MINIMUM_API_VERSION=400001
   * @param {Object} params
   * @param {string} params.username Username
   * @param {string} params.password SHA256 hashed password
   * @param {string} params.email  Email
   * @param {string} [params.fullname] Full Name
   * @param {import("../base.js").BinaryBoolean} [params.disable] 0, 1
   * @param {number} [params.catalog_filter_group] Catalog filter group, default = 0
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#user_create}
   */
  userCreate(params) {
    let query = "user_create";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Register as a new user if allowed.
   * @remarks MINIMUM_API_VERSION=6.0.0
   * @param {Object} params
   * @param {string} params.username Username
   * @param {string} params.password SHA256 hashed password
   * @param {string} params.email  Email
   * @param {string} [params.fullname] Full Name
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods/#register}
   */
  register(params) {
    let query = "register";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Update an existing user
   * ACCESS REQUIRED: 100 (Admin)
   * @remarks MINIMUM_API_VERSION=400001
   * @param {Object} params
   * @param {string} params.username Username
   * @param {string} [params.password] Password
   * @param {string} [params.email] Email
   * @param {string} [params.fullname] Full Name
   * @param {string} [params.website] Website
   * @param {string} [params.state] State
   * @param {string} [params.city] City
   * @param {import("../base.js").BinaryBoolean} [params.disable] 0, 1
   * @param {string} [params.maxbitrate] Max bitrate for transcoding
   * @returns {Promise<import("../base.js").Success>}
   * @deprecated Being removed in 7.0.0. Use `user_edit` instead.
   * @see {@link https://ampache.org/api/api-json-methods#user_update}
   */
  userUpdate(params) {
    let query = "user_update";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Update an existing user
   * ACCESS REQUIRED: 100 (Admin)
   * @remarks MINIMUM_API_VERSION=6.0.0
   * @param {Object} params
   * @param {string} params.username Username
   * @param {string} [params.password] Password
   * @param {string} [params.email] Email
   * @param {string} [params.fullname] Full Name
   * @param {string} [params.website] Website
   * @param {string} [params.state] State
   * @param {string} [params.city] City
   * @param {string} [params.maxbitrate] Max bitrate for transcoding
   * @param {number} [params.group] Catalog filter group, default = 0
   * @param {import("../base.js").BinaryBoolean} [params.disable] 0, 1
   * @param {import("../base.js").BinaryBoolean} [params.fullname_public] show fullname in public display
   * @param {import("../base.js").BinaryBoolean} [params.reset_apikey] reset user Api Key
   * @param {import("../base.js").BinaryBoolean} [params.reset_streamtoken] reset user Stream Token
   * @param {import("../base.js").BinaryBoolean} [params.clear_stats] reset all stats for this user
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#user_edit}
   */
  userEdit(params) {
    let query = "user_edit";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Delete an existing user.
   * ACCESS REQUIRED: 100 (Admin)
   * @remarks MINIMUM_API_VERSION=400001
   * @param {Object} params
   * @param {string} params.filter UID of user to delete
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#user_delete}
   */
  userDelete(params) {
    let query = "user_delete";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This gets the followers for the requested username
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {string} params.username UID to find
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<{ user: import("./types.js").UserSummary[] }>}
   * @see {@link https://ampache.org/api/api-json-methods#followers}
   */
  followers(params) {
    let query = "followers";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Get a list of people that this user follows
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {string} params.username
   * @returns {Promise<{ user: import("./types.js").UserSummary[] }>}
   * @see {@link https://ampache.org/api/api-json-methods#following}
   */
  following(params) {
    let query = "following";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This will follow/unfollow a user
   * @param {Object} params
   * @param {string} params.username Username string to find
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#toggle_follow}
   */
  toggleFollow(params) {
    let query = "toggle_follow";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This get a user timeline
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {string} params.username Username to find
   * @param {number} [params.limit] Max results to return
   * @param {number} [params.since] UNIXTIME
   * @returns {Promise<{ activity: import("./types.js").ActivityResponse[] }>}
   * @see {@link https://ampache.org/api/api-json-methods#timeline}
   */
  timeline(params) {
    let query = "timeline";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This get current user friends timeline
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} [params]
   * @param {number} [params.limit] Max results to return
   * @param {number} [params.since] UNIXTIME
   * @returns {Promise<{ activity: import("./types.js").ActivityResponse[] }>}
   * @see {@link https://ampache.org/api/api-json-methods#friends_timeline}
   */
  friendsTimeline(params) {
    let query = "friends_timeline";
    query += qs.stringify(params, "&");
    return this.request(query);
  }
}
