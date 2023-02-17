import qs from 'querystringify';
import { LiveStream } from './types';
import { Base, BinaryBoolean, Pagination, Success, UID } from '../base';

export class LiveStreams extends Base {
    /**
     * This returns live_streams based on the specified filter
     * @remarks MINIMUM_API_VERSION=5.1.0
     * @param [params.filter] Filter results to match this string
     * @param [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
     * @param [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
     * @param [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
     * @param [params.offset]
     * @param [params.limit]
     * @see {@link https://ampache.org/api/api-json-methods#live_streams}
     */
    async liveStreams (params?: {
        filter?: string,
        exact?: BinaryBoolean,
        add?: Date,
        update?: Date,
    } & Pagination) {
        let query = 'live_streams';
        query += qs.stringify(params, '&');
        let data = await this.request<{live_stream: LiveStream[]}>(query);
        return (data.live_stream) ? data.live_stream : data;
    }

    /**
     * This returns a single live_stream
     * @remarks MINIMUM_API_VERSION=5.1.0
     * @param params.filter UID to find
     * @see {@link https://ampache.org/api/api-json-methods#live_stream}
     */
    liveStream (params: {
        filter: UID,
    }) {
        let query = 'live_stream';
        query += qs.stringify(params, '&');
        return this.request<LiveStream>(query);
    }

    /**
     * Create a live_stream (radio station) object.
     * ACCESS REQUIRED: 50 (Content Manager)
     * @remarks MINIMUM_API_VERSION=6.0.0
     * @param params.name Stream title
     * @param params.url URL of the http/s stream
     * @param params.codec Stream codec
     * @param params.catalog Catalog ID to associate with this stream
     * @param [params.site_url] Homepage URL of the stream
     * @see {@link https://ampache.org/api/api-json-methods#live_stream_create}
     */
    liveStreamCreate (params: {
        name: string,
        url: string,
        codec: 'mp3' | 'flac' | 'ogg' | 'vorbis' | 'opus' | 'aac' | 'alac',
        catalog: string,
        site_url?: string
    }) {
        let query = 'live_stream_create';
        query += qs.stringify(params, '&');
        return this.request<LiveStream>(query);
    }

    /**
     * Edit a live_stream (radio station) object.
     * ACCESS REQUIRED: 50 (Content Manager)
     * @remarks MINIMUM_API_VERSION=6.0.0
     * @param params.filter Object to find
     * @param [params.name] Stream title
     * @param [params.url] URL of the http/s stream
     * @param [params.codec] Stream codec
     * @param [params.catalog] Catalog ID to associate with this stream
     * @param [params.site_url] Homepage URL of the stream
     * @see {@link https://ampache.org/api/api-json-methods#live_stream_edit}
     */
    liveStreamEdit (params: {
        filter: string,
        name?: string,
        url?: string,
        codec?: 'mp3' | 'flac' | 'ogg' | 'vorbis' | 'opus' | 'aac' | 'alac',
        catalog?: string,
        site_url?: string
    }) {
        let query = 'live_stream_edit';
        query += qs.stringify(params, '&');
        return this.request<LiveStream>(query);
    }

    /**
     * Delete a live_stream (radio station) object (if it exists)
     * ACCESS REQUIRED: 50 (Content Manager)
     * @remarks MINIMUM_API_VERSION=6.0.0
     * @param params.filter Object to find
     * @see {@link https://ampache.org/api/api-json-methods#live_stream_delete}
     */
    liveStreamDelete (params: {
        filter: string,
    }) {
        let query = 'live_stream_delete';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }
}