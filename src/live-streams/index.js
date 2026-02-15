import qs from "querystringify";
import { Base } from "../base.js";

export class LiveStreams extends Base {
  /**
   * This returns live_streams based on the specified filter
   * @remarks MINIMUM_API_VERSION=5.1.0
   * @param {Object} [params]
   * @param {string} [params.filter] Filter results to match this string
   * @param {import("../base.js").BinaryBoolean} [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
   * @param {Date} [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
   * @param {Date} [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<import("./types.js").LiveStreamsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#live_streams}
   */
  liveStreams(params) {
    let query = "live_streams";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This returns a single live_stream
   * @remarks MINIMUM_API_VERSION=5.1.0
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @returns {Promise<import("./types.js").LiveStreamResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#live_stream}
   */
  liveStream(params) {
    let query = "live_stream";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Create a live_stream (radio station) object.
   * ACCESS REQUIRED: 50 (Content Manager)
   * @remarks MINIMUM_API_VERSION=6.0.0
   * @param {Object} params
   * @param {string} params.name Stream title
   * @param {string} params.url URL of the http/s stream
   * @param {"mp3"|"flac"|"ogg"|"vorbis"|"opus"|"aac"|"alac"} params.codec Stream codec
   * @param {string} params.catalog Catalog ID to associate with this stream
   * @param {string} [params.site_url] Homepage URL of the stream
   * @returns {Promise<import("./types.js").LiveStreamResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#live_stream_create}
   */
  liveStreamCreate(params) {
    let query = "live_stream_create";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Edit a live_stream (radio station) object.
   * ACCESS REQUIRED: 50 (Content Manager)
   * @remarks MINIMUM_API_VERSION=6.0.0
   * @param {Object} params
   * @param {string} params.filter Object to find
   * @param {string} [params.name] Stream title
   * @param {string} [params.url] URL of the http/s stream
   * @param {"mp3"|"flac"|"ogg"|"vorbis"|"opus"|"aac"|"alac"} [params.codec] Stream codec
   * @param {string} [params.catalog] Catalog ID to associate with this stream
   * @param {string} [params.site_url] Homepage URL of the stream
   * @returns {Promise<import("./types.js").LiveStreamResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#live_stream_edit}
   */
  liveStreamEdit(params) {
    let query = "live_stream_edit";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Delete a live_stream (radio station) object (if it exists)
   * ACCESS REQUIRED: 50 (Content Manager)
   * @remarks MINIMUM_API_VERSION=6.0.0
   * @param {Object} params
   * @param {string} params.filter Object to find
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#live_stream_delete}
   */
  liveStreamDelete(params) {
    let query = "live_stream_delete";
    query += qs.stringify(params, "&");
    return this.request(query);
  }
}
