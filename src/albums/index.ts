import qs from 'querystringify';
import { Album } from './types';
import { Base, BinaryBoolean, Pagination, UID } from '../base';

export class Albums extends Base {
    /**
     * This returns albums based on the provided search filters
     * @remarks MINIMUM_API_VERSION=380001
     * @param [params.filter] UID to find
     * @param [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
     * @param [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
     * @param [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
     * @param [params.include] albums, songs (include child objects in the response)
     * @param [params.offset]
     * @param [params.limit]
     * @see {@link https://ampache.org/api/api-json-methods#albums}
     */
    async albums (params?: {
        filter?: number,
        exact?: BinaryBoolean,
        add?: Date,
        update?: Date,
        include?: "albums" | "songs",
    } & Pagination) {
        let query = 'albums';
        query += qs.stringify(params, '&');
        let data = await this.request<{album: Album[]}>(query);
        return (data.album) ? data.album : data;
    }

    /**
     * This returns a single album based on the UID provided
     * @remarks MINIMUM_API_VERSION=380001
     * @param params.filter UID to find
     * @param [params.include] songs (include child objects in the response)
     * @see {@link https://ampache.org/api/api-json-methods#album}
     */
    album (params: {
        filter: UID,
        include?: 'songs'
    }) {
        let query = 'album';
        query += qs.stringify(params, '&');
        return this.request<Album>(query);
    }

    /**
     * This returns the albums of an artist
     * @remarks MINIMUM_API_VERSION=380001
     * @param params.filter UID to find
     * @param [params.offset]
     * @param [params.limit]
     * @see {@link https://ampache.org/api/api-json-methods#artist_albums}
     */
    async artistAlbums (params: {
        filter: UID
    } & Pagination) {
        let query = 'artist_albums';
        query += qs.stringify(params, '&');
        let data = await this.request<{album: Album[]}>(query);
        return (data.album) ? data.album : data;
    }

    /**
     * This returns the albums associated with the genre in question
     * @remarks MINIMUM_API_VERSION=380001
     * @param params.filter UID to find
     * @param [params.offset]
     * @param [params.limit]
     * @see {@link https://ampache.org/api/api-json-methods#genre_albums}
     */
    async genreAlbums (params?: {
        filter: UID
    } & Pagination) {
        let query = 'genre_albums';
        query += qs.stringify(params, '&');
        let data = await this.request<{album: Album[]}>(query);
        return (data.album) ? data.album : data;
    }
}
