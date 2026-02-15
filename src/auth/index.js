/**
 * @typedef {Object} AuthResponse
 * @property {string} add
 * @property {number} albums
 * @property {string} api
 * @property {number} artists
 * @property {string} auth
 * @property {number} catalogs
 * @property {string} compatible
 * @property {string} clean
 * @property {number} genres
 * @property {number} labels
 * @property {number} licenses
 * @property {number} live_streams
 * @property {number} playlists
 * @property {number} podcasts
 * @property {number} podcast_episodes
 * @property {string} server
 * @property {string} session_expire
 * @property {number} shares
 * @property {number} songs
 * @property {string} update
 * @property {number} user
 * @property {string} username
 * @property {string} version
 * @property {number} videos
 * @property {number} max_song
 * @property {number} max_album
 * @property {number} max_artist
 * @property {number} max_video
 * @property {number} max_podcast
 * @property {number} max_podcast_episode
 */

import qs from "querystringify";
import fetch from "isomorphic-unfetch";
import { outputDebugURL, encryptPassword as encryptPasswordUtil } from "../utils.js";

export const authMethods = {
  /**
   * Handles verifying a new handshake
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {string} params.auth encrypted apikey OR password if using password auth
   * @param {string} [params.user] username
   * @param {number} [params.timestamp] UNIXTIME()
   * @param {string} [params.version] version of Ampache API to establish connection with
   * @returns {Promise<AuthResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#handshake}
   */
  handshake(params) {
    let token = params.auth;

    // generate a timestamp if one wasn't provided
    if (!params.timestamp) {
      params.timestamp = Math.floor(new Date().getTime() / 1000);
    }

    // override the fallback API version with specified
    if (params.version) {
      this.version = params.version;
    }

    // drop timestamp if no user provided (i.e. logging in with API key)
    if (!params.user) {
      delete params.timestamp;
    }

    // not needed if using Bearer token
    if (this.useBearerToken) {
      delete params.auth;
    }

    let query = this.url + "/server/json.server.php?action=handshake";
    query += qs.stringify(params, "&");

    if (this.debug) {
      outputDebugURL(query, this);
    }

    return fetch(query, {
      method: "GET",
      headers: this.useBearerToken ? { Authorization: "Bearer " + token } : {},
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.auth) {
          this.sessionKey = data.auth;
        }
        return /** @type {AuthResponse} */ (data);
      });
  },

  /**
   * This can be called without being authenticated, it is useful for determining if what the status
   * of the server is, and what version it is running/compatible with
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} [params]
   * @param {string} [params.auth] (Session ID) returns version information and extends the session if passed
   * @param {string} [params.version] API Version that the application understands
   * @returns {Promise<AuthResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#ping}
   */
  ping(params) {
    return this.call("ping", params);
  },

  /**
   * Destroy a session using the session auth parameter
   * @remarks MINIMUM_API_VERSION=400001
   * @param {Object} params
   * @param {string} params.auth Session ID to destroy
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#goodbye}
   */
  goodbye(params) {
    return this.call("goodbye", params);
  },

  /**
   * Email a new password to the user (if allowed) using a reset token.
   * @remarks MINIMUM_API_VERSION=6.1.0
   * @param {Object} params
   * @param {string} params.auth Password reset token
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#lost_password}
   */
  lostPassword(params) {
    return this.call("lost_password", params);
  },

  /**
   * Encrypt your password into the accepted format.
   * @param {Object} params
   * @param {string} params.password
   * @param {number} params.time
   * @returns {string}
   */
  encryptPassword(params) {
    return encryptPasswordUtil(params.password, params.time);
  },
};
