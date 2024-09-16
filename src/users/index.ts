import qs from "querystringify";
import { UserResponse, UserSummary, ActivityResponse } from "./types";
import { Base, BinaryBoolean, ExtendedPagination, Success } from "../base";

export class Users extends Base {
  /**
   * Get ids and usernames for your site
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @see {@link https://ampache.org/api/api-json-methods#users}
   */
  users() {
    let query = "users";
    return this.request<{ user: UserSummary[] }>(query);
  }

  /**
   * This get a user's public information (or current user if username is omitted)
   * @remarks MINIMUM_API_VERSION=380001
   * @param [params.username] UID to find
   * @see {@link https://ampache.org/api/api-json-methods#user}
   */
  user(params?: { username?: string }) {
    let query = "user";
    query += qs.stringify(params, "&");
    return this.request<UserResponse>(query);
  }

  /**
   * Create a new user
   * ACCESS REQUIRED: 100 (Admin)
   * @remarks MINIMUM_API_VERSION=400001
   * @param params.username Username
   * @param params.password SHA256 hashed password
   * @param params.email  Email
   * @param [params.fullname] Full Name
   * @param [params.disable] 0, 1
   * @param [params.catalog_filter_group] Catalog filter group, default = 0
   * @see {@link https://ampache.org/api/api-json-methods#user_create}
   */
  userCreate(params: {
    username: string;
    password: string;
    email: string;
    fullname?: string;
    disable?: BinaryBoolean;
    catalog_filter_group?: number;
  }) {
    let query = "user_create";
    query += qs.stringify(params, "&");
    return this.request<Success>(query);
  }

  /**
   * Register as a new user if allowed.
   * @remarks MINIMUM_API_VERSION=6.0.0
   * @param params.username Username
   * @param params.password SHA256 hashed password
   * @param params.email  Email
   * @param [params.fullname] Full Name
   * @see {@link https://ampache.org/api/api-json-methods/#register}
   */
  register(params: {
    username: string;
    password: string;
    email: string;
    fullname?: string;
  }) {
    let query = "register";
    query += qs.stringify(params, "&");
    return this.request<Success>(query);
  }

  /**
   * Update an existing user
   * ACCESS REQUIRED: 100 (Admin)
   * @remarks MINIMUM_API_VERSION=400001
   * @param  params.username Username
   * @param  [params.password] Password
   * @param  [params.email] Email
   * @param  [params.fullname] Full Name
   * @param  [params.website] Website
   * @param  [params.state] State
   * @param  [params.city] City
   * @param  [params.disable] 0, 1
   * @param  [params.maxbitrate] Max bitrate for transcoding
   * @see {@link https://ampache.org/api/api-json-methods#user_update}
   * @deprecated Being removed in 7.0.0. Use `user_edit` instead.
   */
  userUpdate(params: {
    username: string;
    password?: string;
    email?: string;
    fullname?: string;
    website?: string;
    state?: string;
    city?: string;
    disable?: BinaryBoolean;
    maxbitrate?: string;
  }) {
    let query = "user_update";
    query += qs.stringify(params, "&");
    return this.request<Success>(query);
  }

  /**
   * Update an existing user
   * ACCESS REQUIRED: 100 (Admin)
   * @remarks MINIMUM_API_VERSION=6.0.0
   * @param  params.username Username
   * @param  [params.password] Password
   * @param  [params.email] Email
   * @param  [params.fullname] Full Name
   * @param  [params.website] Website
   * @param  [params.state] State
   * @param  [params.city] City
   * @param  [params.disable] 0, 1
   * @param  [params.maxbitrate] Max bitrate for transcoding
   * @param  [params.group] Catalog filter group, default = 0
   * @param  [params.fullname_public] show fullname in public display
   * @param  [params.reset_apikey] reset user Api Key
   * @param  [params.reset_streamtoken] reset user Stream Token
   * @param  [params.clear_stats] reset all stats for this user
   * @see {@link https://ampache.org/api/api-json-methods#user_edit}
   */
  userEdit(params: {
    username: string;
    password?: string;
    email?: string;
    fullname?: string;
    website?: string;
    state?: string;
    city?: string;
    maxbitrate?: string;
    group?: number;
    disable?: BinaryBoolean;
    fullname_public?: BinaryBoolean;
    reset_apikey?: BinaryBoolean;
    reset_streamtoken?: BinaryBoolean;
    clear_stats?: BinaryBoolean;
  }) {
    let query = "user_edit";
    query += qs.stringify(params, "&");
    return this.request<Success>(query);
  }

  /**
   * Delete an existing user.
   * ACCESS REQUIRED: 100 (Admin)
   * @remarks MINIMUM_API_VERSION=400001
   * @param params.filter UID of user to delete
   * @see {@link https://ampache.org/api/api-json-methods#user_delete}
   */
  userDelete(params: { filter: string }) {
    let query = "user_delete";
    query += qs.stringify(params, "&");
    return this.request<Success>(query);
  }

  /**
   * This gets the followers for the requested username
   * @remarks MINIMUM_API_VERSION=380001
   * @param params.username UID to find
   * @param [params.offset]
   * @param [params.limit]
   * @param [params.cond]
   * @param [params.sort]
   * @see {@link https://ampache.org/api/api-json-methods#followers}
   */
  followers(
    params: {
      username: string;
    } & ExtendedPagination,
  ) {
    let query = "followers";
    query += qs.stringify(params, "&");
    return this.request<{ user: UserSummary[] }>(query);
  }

  /**
   * Get a list of people that this user follows
   * @remarks MINIMUM_API_VERSION=380001
   * @see {@link https://ampache.org/api/api-json-methods#following}
   */
  following(params: { username: string }) {
    let query = "following";
    query += qs.stringify(params, "&");
    return this.request<{ user: UserSummary[] }>(query);
  }

  /**
   * This will follow/unfollow a user
   * @param params.username Username string to find
   * @see {@link https://ampache.org/api/api-json-methods#toggle_follow}
   */
  toggleFollow(params: { username: string }) {
    let query = "toggle_follow";
    query += qs.stringify(params, "&");
    return this.request<Success>(query);
  }

  /**
   * This get a user timeline
   * @remarks MINIMUM_API_VERSION=380001
   * @param params.username Username to find
   * @param [params.limit] Max results to return
   * @param [params.since] UNIXTIME
   * @see {@link https://ampache.org/api/api-json-methods#timeline}
   */
  timeline(params: { username: string; limit?: number; since?: number }) {
    let query = "timeline";
    query += qs.stringify(params, "&");
    return this.request<{ activity: ActivityResponse[] }>(query);
  }

  /**
   * This get current user friends timeline
   * @remarks MINIMUM_API_VERSION=380001
   * @param [params.limit] Max results to return
   * @param [params.since] UNIXTIME
   * @see {@link https://ampache.org/api/api-json-methods#friends_timeline}
   */
  friendsTimeline(params?: { limit?: number; since?: number }) {
    let query = "friends_timeline";
    query += qs.stringify(params, "&");
    return this.request<{ activity: ActivityResponse[] }>(query);
  }
}
