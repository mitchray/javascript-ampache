import fetch from "isomorphic-unfetch";
import qs from "querystringify";
import { outputDebugURL } from "./utils.js";

/**
 * @typedef {Object} Config
 * @property {string} url
 * @property {string} [sessionKey]
 * @property {boolean} [useBearerToken]
 * @property {boolean} [debug]
 */

/**
 * @typedef {Object} Success
 * @property {string} success
 */

/**
 * @typedef {Object} Pagination
 * @property {number} [offset] Return results starting from this index position
 * @property {number} [limit] Maximum number of results to return
 */

/**
 * @typedef {Object} ExtendedPagination
 * @property {number} [offset] Return results starting from this index position
 * @property {number} [limit] Maximum number of results to return
 * @property {string} [cond] Apply additional filters to the browse using ; separated comma string pairs (e.g. 'filter1,value1;filter2,value2')
 * @property {string} [sort] Sort name or comma-separated key pair. (e.g. 'name,order') Default order 'ASC' (e.g. 'name,ASC' == 'name')
 */

/** @typedef {0|1} BinaryBoolean */

/** @typedef {string|number} UID */

export class Base {
  /**
   * @param {Config} config
   */
  constructor(config) {
    this.sessionKey = config.sessionKey || null;
    this.url = config.url;
    this.version = "6.6.8";
    this.useBearerToken = config.useBearerToken || false;
    this.debug = config.debug || false;
  }

  /**
   * Build action string with optional params and call request.
   * @template T
   * @param {string} action API action name
   * @param {Object} [params] Optional query params
   * @returns {Promise<T>}
   */
  call(action, params) {
    const query = action + (params != null ? qs.stringify(params, "&") : "");
    return this.request(query);
  }

  /**
   * @param {string} endpoint Action and optional query string
   * @returns {string} Full request URL
   * @private
   */
  _buildURL(endpoint) {
    let url =
      this.url +
      "/server/json.server.php?action=" +
      endpoint +
      "&version=" +
      this.version;

    if (!this.useBearerToken) {
      url += "&auth=" + this.sessionKey;
    }

    if (this.debug) {
      outputDebugURL(url, this);
    }

    return url;
  }

  /**
   * @template T
   * @param {string} endpoint
   * @returns {Promise<T>}
   */
  request(endpoint) {
    const url = this._buildURL(endpoint);
    return fetch(url, {
      method: "GET",
      headers: this.useBearerToken ? { Authorization: "Bearer " + this.sessionKey } : {},
    }).then(async (r) => {
      if (r.ok) {
        return r.json();
      }
      let body = r.statusText;
      const contentType = r.headers.get("content-type");
      try {
        body = contentType && contentType.includes("application/json")
          ? await r.json()
          : await r.text();
      } catch (_) {
        // keep statusText if body read fails
      }
      const err = new Error(r.statusText);
      err.status = r.status;
      err.body = body;
      throw err;
    });
  }

  /**
   * @param {string} endpoint
   * @returns {Promise<Blob>}
   */
  binary(endpoint) {
    const url = this._buildURL(endpoint);
    return fetch(url, {
      method: "GET",
      headers: this.useBearerToken ? { Authorization: "Bearer " + this.sessionKey } : {},
    }).then((response) => response.blob());
  }

  /**
   * @param {string} sessionKey
   */
  setSessionKey(sessionKey) {
    this.sessionKey = sessionKey;
  }

  /**
   * Construct and return a URL
   * @param {string} endpoint
   * @param {Object} [params]
   * @returns {string}
   */
  rawURL(endpoint, params) {
    const query = endpoint + (params != null ? qs.stringify(params, "&") : "");
    return this._buildURL(query);
  }
}

export {};
