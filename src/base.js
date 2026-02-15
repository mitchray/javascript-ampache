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
   * @template T
   * @param {string} endpoint
   * @returns {Promise<T>}
   */
  request(endpoint) {
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

    return fetch(url, {
      method: "GET",
      headers: this.useBearerToken ? { Authorization: "Bearer " + this.sessionKey } : {},
    }).then((r) => {
      if (r.ok) {
        return r.json();
      }
      throw new Error(r.statusText);
    });
  }

  /**
   * @param {string} endpoint
   * @returns {Promise<Blob>}
   */
  binary(endpoint) {
    let url =
      this.url +
      "/server/json.server.php?action=" + endpoint +
      "&version=" + this.version;

    if (!this.useBearerToken) {
      url += "&auth=" + this.sessionKey;
    }

    if (this.debug) {
      outputDebugURL(url, this);
    }

    return fetch(url, {
      method: "GET",
      headers: this.useBearerToken ? { Authorization: "Bearer " + this.sessionKey } : {},
    })
      .then((response) => response.blob())
      .then((r) => {
        return r;
      });
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
    let query = endpoint;
    query += qs.stringify(params, "&");

    let url =
      this.url +
      "/server/json.server.php?action=" + query +
      "&version=" + this.version;

    if (!this.useBearerToken) {
      url += "&auth=" + this.sessionKey;
    }

    if (this.debug) {
      outputDebugURL(url, this);
    }

    return url;
  }
}

export {};
