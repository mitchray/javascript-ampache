import qs from 'querystringify';
import { Catalog } from './types';
import {Base, ExtendedPagination, Success, UID} from '../base';

export class Catalogs extends Base {
    /**
     * This searches the catalogs and returns... catalogs
     * @remarks MINIMUM_API_VERSION=420000
     * @param [params.filter] Catalog type
     * @param [params.offset]
     * @param [params.limit]
     * @param [params.cond]
     * @param [params.sort]
     * @see {@link https://ampache.org/api/api-json-methods#catalogs}
     */
    async catalogs (params?: {
        filter?: 'music' | 'clip' | 'tvshow' | 'movie' | 'personal_video' | 'podcast',
    } & ExtendedPagination) {
        let query = 'catalogs';
        query += qs.stringify(params, '&');
        return await this.request<{catalog: Catalog[]}>(query);
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

    /**
     * Create a new catalog.
     * ACCESS REQUIRED: 75 (Catalog Manager)
     * @remarks MINIMUM_API_VERSION=6.0.0
     * @param params.name Name for the catalog
     * @param params.path URL or folder path for your catalog
     * @param [params.type] Default: 'local'
     * @param [params.media_type] Default: 'music'
     * @param [params.file_pattern] Pattern used identify tags from the file name. Default: '%T - %t'
     * @param [params.folder_pattern] Pattern used identify tags from the folder name. Default: '%a/%A'
     * @param [params.username] login to remote catalog
     * @param [params.password] password to remote catalog
     * @see {@link https://ampache.org/api/api-json-methods#catalog_add}
     */
    catalogAdd(params: {
        name: string,
        path: string,
        type?: 'local' | 'beets' | 'remote' | 'subsonic' | 'seafile' | 'beetsremote',
        media_type?: 'music' | 'podcast' | 'clip' | 'tvshow' | 'movie' | 'personal_video',
        file_pattern?: string,
        folder_pattern?: string,
        username?: string,
        password?: string,
    }) {
        let query = 'catalog_add';
        query += qs.stringify(params, '&');
        return this.request<Catalog>(query);
    }

    /**
     * Delete an existing catalog. (if it exists)
     * ACCESS REQUIRED: 75 (Catalog Manager)
     * @remarks MINIMUM_API_VERSION=6.0.0
     * @param params.filter ID of the catalog
     * @see {@link https://ampache.org/api/api-json-methods#catalog_delete}
     */
    catalogDelete(params: {
        filter: UID,
    }) {
        let query = 'catalog_delete';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }
}