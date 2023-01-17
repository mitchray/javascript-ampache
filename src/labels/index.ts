import qs from 'querystringify';
import { Label } from './types';
import { Base, BinaryBoolean, Pagination, UID } from '../base';

export class Labels extends Base {
    /**
     * This returns labels based on the specified filter
     * @remarks MINIMUM_API_VERSION=420000
     * @param [params.filter] Filter results to match this string
     * @param [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
     * @param [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
     * @param [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
     * @param [params.offset]
     * @param [params.limit]
     * @see {@link https://ampache.org/api/api-json-methods#labels}
     */
    async labels (params?: {
        filter?: string,
        exact?: BinaryBoolean,
        add?: Date,
        update?: Date,
    } & Pagination) {
        let query = 'labels';
        query += qs.stringify(params, '&');
        let data = await this.request<{label: Label[]}>(query);
        return (data.label) ? data.label : data;
    }

    /**
     * This returns a single label
     * @remarks MINIMUM_API_VERSION=420000
     * @param params.filter UID to find
     * @see {@link https://ampache.org/api/api-json-methods#label}
     */
    label (params: {
        filter: UID,
    }) {
        let query = 'label';
        query += qs.stringify(params, '&');
        return this.request<Label>(query);
    }
}