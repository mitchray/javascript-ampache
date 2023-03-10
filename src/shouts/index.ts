import qs from 'querystringify';
import { Shout } from './types';
import { Base } from '../base';

export class Shouts extends Base {
    /**
     * This gets the latest posted shouts
     * @remarks MINIMUM_API_VERSION=380001
     * @param [params.username] Username to find
     * @param [params.limit] Maximum number of results to return
     * @see {@link https://ampache.org/api/api-json-methods#last_shouts}
     */
    async last_shouts (params?: {
        username?: string,
        limit?: number
    }) {
        let query = 'last_shouts';
        query += qs.stringify(params, '&');
        let data = await this.request<{shout: Shout[]}>(query);
        return (data.shout) ? data.shout : data;
    }
}