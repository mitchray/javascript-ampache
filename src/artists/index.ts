import qs from 'querystringify';
import { Artist } from './types';
import { Base, BinaryBoolean, Pagination, UID } from '../base';

export class Artists extends Base {
    /**
     * This takes a collection of inputs and returns artist objects
     * @remarks MINIMUM_API_VERSION=380001
     * @param [params.filter] Filter results to match this string
     * @param [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
     * @param [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
     * @param [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
     * @param [params.include] (albums | songs) include child objects in the response
     * @param [params.album_artist] 0, 1 (if true filter for album artists only)
     * @param [params.offset]
     * @param [params.limit]
     * @see {@link https://ampache.org/api/api-json-methods#artists}
     */
    async artists (params?: {
        filter?: string,
        exact?: BinaryBoolean,
        add?: Date,
        update?: Date,
        include?: 'albums' | 'songs',
        album_artist?: BinaryBoolean,
    } & Pagination) {
        let query = 'artists';
        query += qs.stringify(params, '&');
        let data = await this.request<{artist: Artist[]}>(query);
        return (data.artist) ? data.artist : data;
    }

    /**
     * This returns a single artist based on the UID of said artist
     * @remarks MINIMUM_API_VERSION=380001
     * @param params.filter UID to find
     * @param [params.include] (albums | songs) include child objects in the response
     * @see {@link https://ampache.org/api/api-json-methods#artist}
     */
    artist (params: {
        filter: UID,
        include?: 'albums' | 'songs',
    }) {
        let query = 'artist';
        query += qs.stringify(params, '&');
        return this.request<Artist>(query);
    }

    /**
     * This returns the artists associated with the genre in question as defined by the UID
     * @remarks MINIMUM_API_VERSION=380001
     * @param params.filter UID to find
     * @param [params.offset]
     * @param [params.limit]
     * @see {@link https://ampache.org/api/api-json-methods#genre_artists}
     */
    async genreArtists (params: {
        filter: UID
    } & Pagination) {
        let query = 'genre_artists';
        query += qs.stringify(params, '&');
        let data = await this.request<{artist: Artist[]}>(query);
        return (data.artist) ? data.artist : data;
    }

    /**
     * This returns the artists associated with the label in question as defined by the UID
     * @remarks MINIMUM_API_VERSION=420000
     * @param params.filter UID of find
     * @param [params.offset]
     * @param [params.limit]
     * @see {@link https://ampache.org/api/api-json-methods#label_artists}
     */
    async labelArtists (params: {
        filter: UID
    } & Pagination) {
        let query = 'label_artists';
        query += qs.stringify(params, '&');
        let data = await this.request<{artist: Artist[]}>(query);
        return (data.artist) ? data.artist : data;
    }
}