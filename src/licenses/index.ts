import qs from 'querystringify';
import { License } from './types';
import { Base, BinaryBoolean, ExtendedPagination, UID } from '../base';

export class Licenses extends Base {
    /**
     * This returns licenses based on the specified filter
     * @remarks MINIMUM_API_VERSION=420000
     * @param [params.filter] Filter results to match this string
     * @param [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
     * @param [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
     * @param [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
     * @param [params.offset]
     * @param [params.limit]
     * @param [params.cond]
     * @param [params.sort]
     * @see {@link https://ampache.org/api/api-json-methods#licenses}
     */
    async licenses (params?: {
        filter?: string,
        exact?: BinaryBoolean,
        add?: Date,
        update?: Date,
    } & ExtendedPagination) {
        let query = 'licenses';
        query += qs.stringify(params, '&');
        let data = await this.request<{license: License[]}>(query);
        return (data.license) ? data.license : data;
    }

    /**
     * This returns a single license
     * @remarks MINIMUM_API_VERSION=420000
     * @param params.filter UID to find
     * @see {@link https://ampache.org/api/api-json-methods#license}
     */
    license (params: {
        filter: UID,
    }) {
        let query = 'license';
        query += qs.stringify(params, '&');
        return this.request<License>(query);
    }
}