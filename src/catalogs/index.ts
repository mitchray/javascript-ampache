import qs from 'querystringify';
import { Catalog } from './types';
import { Base, Success, UID } from '../base';

export class Catalogs extends Base {
    /**
     * This searches the catalogs and returns... catalogs
     * @remarks MINIMUM_API_VERSION=420000
     * @param [params.filter] Catalog type
     * @see {@link https://ampache.org/api/api-json-methods#catalogs}
     */
    async catalogs (params?: {
        filter?: 'music' | 'clip' | 'tvshow' | 'movie' | 'personal_video' | 'podcast',
    }) {
        let query = 'catalogs';
        query += qs.stringify(params, '&');
        let data = await this.request<{catalog: Catalog[]}>(query);
        return (data.catalog) ? data.catalog : data;
    }

    /**
     * Return catalog by UID
     * @remarks MINIMUM_API_VERSION=420000
     * @param params.filter UID to find
     * @see {@link https://ampache.org/api/api-json-methods#catalog}
     */
    catalog (params: {
        filter: UID,
    }) {
        let query = 'catalog';
        query += qs.stringify(params, '&');
        return this.request<Catalog>(query);
    }

    /**
     * Kick off a catalog update or clean for the selected catalog
     * ACCESS REQUIRED: 75 (Catalog Manager)
     * @remarks MINIMUM_API_VERSION=400001
     * @param params.task add_to_catalog, clean_catalog
     * @param params.catalog UID of catalog
     * @see {@link https://ampache.org/api/api-json-methods#catalog_action}
     */
    catalogAction(params: {
        task: 'add_to_catalog' | 'clean_catalog',
        catalog: UID,
    }) {
        let query = 'catalog_action';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }

    /**
     * Perform actions on local catalog files. Single file versions of catalog add, clean, verify and remove (delete).
     * Make sure you remember to urlencode those file names!
     * ACCESS REQUIRED: 50 (Content Manager)
     * @remarks MINIMUM_API_VERSION=420000
     * @param params.file FULL path to local file
     * @param params.task add, clean, verify, remove, (can include comma-separated values)
     * @param params.catalog UID of catalog
     * @see {@link https://ampache.org/api/api-json-methods#catalog_file}
     */
    catalogFile(params: {
        file: string,
        task: string,
        catalog: UID,
    }) {
        let query = 'catalog_file';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }
}