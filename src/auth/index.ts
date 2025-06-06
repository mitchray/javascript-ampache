import JsSHA from "jssha/dist/sha256";
import qs from "querystringify";
import fetch from "isomorphic-unfetch";
import { Base, Success } from "../base";
import { AuthResponse } from "./types";
import { outputDebugURL } from "../utils";

export class Auth extends Base {
  /**
   * Handles verifying a new handshake
   * @remarks MINIMUM_API_VERSION=380001
   * @param params.auth encrypted apikey OR password if using password auth
   * @param [params.user] username
   * @param [params.timestamp] UNIXTIME()
   * @param [params.version] version of Ampache API to establish connection with
   * @see {@link https://ampache.org/api/api-json-methods#handshake}
   */
  handshake(params: {
    auth: string;
    user?: string;
    timestamp?: number;
    version?: string;
  }) {
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
        return <AuthResponse>data;
      });
  }

  /**
   * This can be called without being authenticated, it is useful for determining if what the status
   * of the server is, and what version it is running/compatible with
   * @remarks MINIMUM_API_VERSION=380001
   * @param [params.auth] (Session ID) returns version information and extends the session if passed
   * @param [params.version] API Version that the application understands
   * @see {@link https://ampache.org/api/api-json-methods#ping}
   */
  ping(params?: { auth?: string; version?: string }) {
    let query = "ping";
    query += qs.stringify(params, "&");
    return this.request<AuthResponse>(query);
  }

  /**
   * Destroy a session using the session auth parameter
   * @remarks MINIMUM_API_VERSION=400001
   * @param params.auth Session ID to destroy
   * @see {@link https://ampache.org/api/api-json-methods#goodbye}
   */
  goodbye(params: { auth: string }) {
    let query = "goodbye";
    query += qs.stringify(params, "&");
    return this.request<Success>(query);
  }

  /**
   * Email a new password to the user (if allowed) using a reset token.
   * @remarks MINIMUM_API_VERSION=6.1.0
   * @param params.auth Password reset token
   * @see {@link https://ampache.org/api/api-json-methods#lost_password}
   */
  lostPassword(params: { auth: string }) {
    let query = "lost_password";
    query += qs.stringify(params, "&");
    return this.request<Success>(query);
  }

  /**
   * Encrypt your password into the accepted format.
   */
  encryptPassword(params: { password: string; time: number }) {
    let key = getSHA256(params.password);
    return getSHA256(params.time + key);

    function getSHA256(text) {
      let shaObj = new JsSHA("SHA-256", "TEXT", { encoding: "UTF8" });
      shaObj.update(text);

      return shaObj.getHash("HEX");
    }
  }
}
