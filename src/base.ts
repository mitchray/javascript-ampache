import fetch from "isomorphic-unfetch";
import qs from "querystringify";

type Config = {
  url: string;
  sessionKey?: string;
  useBearerToken: false;
  debug?: boolean;
};

export type Success = {
  success: string;
};

/**
 * @param [offset] Return results starting from this index position
 * @param [limit] Maximum number of results to return
 */
export type Pagination = {
  offset?: number;
  limit?: number;
};

/**
 * @param [offset] Return results starting from this index position
 * @param [limit] Maximum number of results to return
 * @param [cond] Apply additional filters to the browse using ; separated comma string pairs (e.g. 'filter1,value1;filter2,value2')
 * @param [sort] Sort name or comma-separated key pair. (e.g. 'name,order') Default order 'ASC' (e.g. 'name,ASC' == 'name')
 */
export type ExtendedPagination = Pagination & {
  cond?: string;
  sort?: string;
};

export type BinaryBoolean = 0 | 1;

export type UID = string | number;

export abstract class Base {
  sessionKey: string;
  url: string;
  version: string = "6.6.8";
  useBearerToken: boolean;
  debug: boolean;

  constructor(config: Config) {
    this.sessionKey = config.sessionKey || null;
    this.url = config.url;
    this.useBearerToken = config.useBearerToken || false;
    this.debug = config.debug || false;
  }

  protected request<T>(endpoint: string): Promise<T> {
    let authString = "&auth=" + this.sessionKey;
    let url =
      this.url +
      "/server/json.server.php?action=" +
      endpoint +
      "&version=" +
      this.version;

    if (!this.useBearerToken) {
      url += authString;
    }

    if (this.debug) {
      console.debug(
        "javascript-ampache query URL %c" + url + authString,
        "color: black; font-style: italic; background-color: orange;padding: 2px",
      );
    }

    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: this.useBearerToken ? "Bearer " + this.sessionKey : undefined,
      },
    }).then((r) => {
      if (r.ok) {
        return r.json();
      }
      throw new Error(r.statusText);
    });
  }

  protected binary<T>(endpoint: string): Promise<Blob> {
    let authString = "&auth=" + this.sessionKey;
    let url =
      this.url +
      "/server/json.server.php?action=" + endpoint +
      "&version=" + this.version;

    if (!this.useBearerToken) {
      url += authString;
    }

    if (this.debug) {
      console.debug(
        "javascript-ampache query URL %c" + url + this.useBearerToken ? "&auth=" + this.sessionKey : "",
        "color: black; font-style: italic; background-color: orange;padding: 2px",
      );
    }

    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: this.useBearerToken ? "Bearer " + this.sessionKey : undefined,
      },
    })
      .then((response) => response.blob())
      .then((r) => {
        return r;
      });
  }

  public setSessionKey(sessionKey: string) {
    this.sessionKey = sessionKey;
  }

  /**
   * Construct and return a URL
   * @param endpoint
   * @param [params]
   */
  public rawURL(endpoint: string, params?: {}) {
    let query = endpoint;
    query += qs.stringify(params, "&");

    let url =
      this.url +
      "/server/json.server.php?action=" + query +
      "&version=" + this.version;

    if (this.debug) {
      console.debug(
        "javascript-ampache query URL %c" + url + this.useBearerToken ? "&auth=" + this.sessionKey : "",
        "color: black; font-style: italic; background-color: orange;padding: 2px",
      );
    }

    return url;
  }
}
