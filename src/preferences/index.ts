import qs from 'querystringify';
import { Base, BinaryBoolean, Success } from '../base';
import { Preference } from "./types";

export class Preferences extends Base {
    /**
     * Get your server preferences
     * ACCESS REQUIRED: 100 (Admin)
     * @remarks MINIMUM_API_VERSION=5.0.0
     * @see {@link https://ampache.org/api/api-json-methods#system_preferences}
     */
    async systemPreferences () {
        let query = 'system_preferences';
        return await this.request<{preference: Preference[]}>(query);
    }

    /**
     * Get your system preference by name
     * ACCESS REQUIRED: 100 (Admin)
     * @remarks MINIMUM_API_VERSION=5.0.0
     * @param params.systemPreference Preference name e.g ('notify_email', 'ajax_load')
     * @see {@link https://ampache.org/api/api-json-methods#system_preference}
     */
    async systemPreference (params: {
        filter: string,
    }) {
        let query = 'system_preference';
        query += qs.stringify(params, '&');
        return await this.request<{ preference: Preference }>(query);
    }

    /**
     * Get your user preferences
     * @remarks MINIMUM_API_VERSION=5.0.0
     * @see {@link https://ampache.org/api/api-json-methods#user_preferences}
     */
    async userPreferences () {
        let query = 'user_preferences';
        return await this.request<{preference: Preference[]}>(query);
    }

    /**
     * Get your user preference by name
     * @remarks MINIMUM_API_VERSION=5.0.0
     * @param params.filter Preference name e.g ('notify_email', 'ajax_load')
     * @see {@link https://ampache.org/api/api-json-methods#user_preference}
     */
    async userPreference (params: {
        filter: string,
    }) {
        let query = 'user_preference';
        query += qs.stringify(params, '&');
        return await this.request<{ preference: Preference }>(query);
    }

    /**
     * Add a new preference to your server
     * ACCESS REQUIRED: 100 (Admin)
     * @param params.filter Preference name e.g ('notify_email', 'ajax_load')
     * @param params.type boolean, integer, string, special
     * @param params.default string or integer default value
     * @param params.category Category type
     * @param [params.description]
     * @param [params.subcategory]
     * @param [params.level] access level required to change the value (default 100)
     * @see {@link https://ampache.org/api/api-json-methods#preference_create}
     */
    preferenceCreate(params: {
        filter: string,
        type: 'boolean' | 'integer' | 'string' | 'special',
        default: string | number,
        category: 'interface' | 'internal' | 'options' | 'playlist' | 'plugins' | 'streaming',
        description?: string,
        subcategory?: string,
        level?: number,
    }) {
        let query = 'preference_create';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }

    /**
     * Edit a preference value and apply to all users if allowed
     * ACCESS REQUIRED: 100 (Admin)
     * @remarks MINIMUM_API_VERSION=5.0.0
     * @param params.filter Preference name e.g ('notify_email', 'ajax_load')
     * @param params.value (string/integer) Preference value
     * @param [params.all] 0, 1 apply to all users
     * @see {@link https://ampache.org/api/api-json-methods#preference_edit}
     */
    preferenceEdit(params: {
        filter: string,
        value: string | number,
        all?: BinaryBoolean,
    }) {
        let query = 'preference_edit';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }

    /**
     * Delete a non-system preference by name
     * ACCESS REQUIRED: 100 (Admin)
     * @param params.filter Preference name e.g ('notify_email', 'ajax_load')
     * @see {@link https://ampache.org/api/api-json-methods#preference_delete}
     */
    preferenceDelete(params: {
        filter: string,
    }) {
        let query = 'preference_delete';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }
}