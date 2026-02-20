/**
 * @typedef {Object} UserSummary
 * @property {import("./base.js").UID} id
 * @property {string} username
 */

/**
 * @typedef {Object} UserResponse
 * @property {import("./base.js").UID} id
 * @property {string} username
 * @property {string} auth
 * @property {string} email
 * @property {number} access
 * @property {string|null} streamtoken
 * @property {number} fullname_public
 * @property {string|null} validation
 * @property {boolean} disabled
 * @property {number} create_date
 * @property {number} last_seen
 * @property {string|null} website
 * @property {string|null} state
 * @property {string|null} city
 */

/**
 * @typedef {Object} UsersResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {UserResponse[]} user
 */

/**
 * @typedef {Object} ActivityResponse
 * @property {import("./base.js").UID} id
 * @property {number} date
 * @property {string} object_type
 * @property {import("./base.js").UID} object_id
 * @property {string} action
 * @property {UserSummary} user
 */

export const usersMethods = {
  /**
   * Get ids and usernames for your site
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @returns {Promise<{ user: UserSummary[] }>}
   * @see {@link https://ampache.org/api/api-json-methods#users}
   */
  users() {
    return this.call("users");
  },

  /**
   * This get a user's public information (or current user if username is omitted)
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} [params]
   * @param {string} [params.username] Username of the user to get details for
   * @param {string} [params.filter] Alias of username (Ampache 7.9.0+)
   * @returns {Promise<UserResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#user}
   */
  user(params) {
    return this.call("user", params);
  },

  /**
   * Create a new user
   * ACCESS REQUIRED: 100 (Admin)
   * @remarks MINIMUM_API_VERSION=400001
   * @param {Object} params
   * @param {string} params.username Username
   * @param {string} params.password SHA256 hashed password
   * @param {string} params.email  Email
   * @param {string} [params.fullname] Full Name
   * @param {import("./base.js").BinaryBoolean} [params.disable] 0, 1
   * @param {number} [params.group] Catalog filter group (API param: group), default = 0
   * @returns {Promise<import("./base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#user_create}
   */
  userCreate(params) {
    return this.call("user_create", params);
  },

  /**
   * Register as a new user if allowed.
   * @remarks MINIMUM_API_VERSION=6.0.0
   * @param {Object} params
   * @param {string} params.username Username
   * @param {string} params.password SHA256 hashed password
   * @param {string} params.email  Email
   * @param {string} [params.fullname] Full Name
   * @returns {Promise<import("./base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods/#register}
   */
  register(params) {
    return this.call("register", params);
  },

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
   * @param {import("./base.js").BinaryBoolean} [params.disable] 0, 1
   * @param {string} [params.maxbitrate] Max bitrate for transcoding
   * @returns {Promise<import("./base.js").Success>}
   * @deprecated Being removed in 7.0.0. Use `user_edit` instead.
   * @see {@link https://ampache.org/api/api-json-methods#user_update}
   */
  userUpdate(params) {
    return this.call("user_update", params);
  },

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
   * @param {import("./base.js").BinaryBoolean} [params.disable] 0, 1
   * @param {import("./base.js").BinaryBoolean} [params.fullname_public] show fullname in public display
   * @param {import("./base.js").BinaryBoolean} [params.reset_apikey] reset user Api Key
   * @param {import("./base.js").BinaryBoolean} [params.reset_streamtoken] reset user Stream Token
   * @param {import("./base.js").BinaryBoolean} [params.clear_stats] reset all stats for this user
   * @param {string} [params.filter] Alias of username (Ampache 7.9.0+)
   * @returns {Promise<import("./base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#user_edit}
   */
  userEdit(params) {
    return this.call("user_edit", params);
  },

  /**
   * Delete an existing user.
   * ACCESS REQUIRED: 100 (Admin)
   * @remarks MINIMUM_API_VERSION=400001
   * @param {Object} params
   * @param {string} params.username Username of user to delete (required by API)
   * @param {string} [params.filter] Alias of username (Ampache 7.9.0+)
   * @returns {Promise<import("./base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#user_delete}
   */
  userDelete(params) {
    return this.call("user_delete", params);
  },

  /**
   * This gets the followers for the requested username
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {string} params.username UID to find
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<{ user: UserSummary[] }>}
   * @see {@link https://ampache.org/api/api-json-methods#followers}
   */
  followers(params) {
    return this.call("followers", params);
  },

  /**
   * Get a list of people that this user follows
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {string} params.username
   * @returns {Promise<{ user: UserSummary[] }>}
   * @see {@link https://ampache.org/api/api-json-methods#following}
   */
  following(params) {
    return this.call("following", params);
  },

  /**
   * This will follow/unfollow a user
   * @param {Object} params
   * @param {string} params.username Username string to find
   * @param {string} [params.filter] Alias of username (Ampache 7.9.0+)
   * @returns {Promise<import("./base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#toggle_follow}
   */
  toggleFollow(params) {
    return this.call("toggle_follow", params);
  },

  /**
   * This get a user timeline
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {string} params.username Username to find
   * @param {string} [params.filter] Alias of username (Ampache 7.9.0+)
   * @param {number} [params.limit] Max results to return
   * @param {number} [params.since] UNIXTIME
   * @returns {Promise<{ activity: ActivityResponse[] }>}
   * @see {@link https://ampache.org/api/api-json-methods#timeline}
   */
  timeline(params) {
    return this.call("timeline", params);
  },

  /**
   * This get current user friends timeline
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} [params]
   * @param {number} [params.limit] Max results to return
   * @param {number} [params.since] UNIXTIME
   * @returns {Promise<{ activity: ActivityResponse[] }>}
   * @see {@link https://ampache.org/api/api-json-methods#friends_timeline}
   */
  friendsTimeline(params) {
    return this.call("friends_timeline", params);
  },
};
