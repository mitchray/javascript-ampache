import qs from 'querystringify';
import { User, UserSummary, Activity } from './types';
import { Base, BinaryBoolean, Success } from '../base';

export class Users extends Base {
    /**
     * Get ids and usernames for your site
     * @remarks MINIMUM_API_VERSION=5.0.0
     * @see {@link https://ampache.org/api/api-json-methods#users}
     */
    async users() {
        let query = 'users';
        let data = await this.request<{user: UserSummary[]}>(query);
        return (data.user) ? data.user : data;
    }

    /**
     * This get a user's public information
     * @remarks MINIMUM_API_VERSION=380001
     * @param params.username UID to find
     * @see {@link https://ampache.org/api/api-json-methods#user}
     */
    async user (params: {
        username: string
    }) {
        let query = 'user';
        query += qs.stringify(params, '&');
        return await this.request<User>(query);
    }

    /**
     * Create a new user
     * ACCESS REQUIRED: 100 (Admin)
     * @remarks MINIMUM_API_VERSION=400001
     * @param params.username Username
     * @param params.password SHA256 hashed password
     * @param params.email  Email
     * @param [params.fullname] Full Name
     * @param [params.disable] 0, 1
     * @param [params.catalog_filter_group] Catalog filter group, default = 0
     * @see {@link https://ampache.org/api/api-json-methods#user_create}
     */
    userCreate (params: {
        username: string,
        password: string,
        email: string,
        fullname?: string,
        disable?: BinaryBoolean,
        catalog_filter_group?: number
    }) {
        let query = 'user_create';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }

    /**
     * Register as a new user if allowed.
     * @remarks MINIMUM_API_VERSION=6.0.0
     * @param params.username Username
     * @param params.password SHA256 hashed password
     * @param params.email  Email
     * @param [params.fullname] Full Name
     * @see {@link https://ampache.org/api/api-json-methods/#register}
     */
    register (params: {
        username: string,
        password: string,
        email: string,
        fullname?: string
    }) {
        let query = 'register';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }

    /**
     * Update an existing user
     * ACCESS REQUIRED: 100 (Admin)
     * @remarks MINIMUM_API_VERSION=400001
     * @param  params.username Username
     * @param  [params.password] Password
     * @param  [params.email] Email
     * @param  [params.fullname] Full Name
     * @param  [params.website] Website
     * @param  [params.state] State
     * @param  [params.city] City
     * @param  [params.disable] 0, 1
     * @param  [params.maxbitrate] Max bitrate for transcoding
     * @see {@link https://ampache.org/api/api-json-methods#user_update}
     */
    userUpdate (params: {
        username: string,
        password?: string,
        email?: string,
        fullname?: string,
        website?: string,
        state?: string,
        city?: string,
        disable?: BinaryBoolean,
        maxbitrate?: string
    }) {
        let query = 'user_update';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }

    /**
     * Delete an existing user.
     * ACCESS REQUIRED: 100 (Admin)
     * @remarks MINIMUM_API_VERSION=400001
     * @param params.filter UID of user to delete
     * @see {@link https://ampache.org/api/api-json-methods#user_delete}
     */
    userDelete (params: {
        filter: string,
    }) {
        let query = 'user_delete';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }

    /**
     * This gets the followers for the requested username
     * @remarks MINIMUM_API_VERSION=380001
     * @param params.username UID to find
     * @see {@link https://ampache.org/api/api-json-methods#followers}
     */
    async followers (params: {
        username: string,
    }) {
        let query = 'followers';
        query += qs.stringify(params, '&');
        let data = await this.request<{user: UserSummary[]}>(query);
        return (data.user) ? data.user : data;
    }

    /**
     * Get a list of people that this user follows
     * @remarks MINIMUM_API_VERSION=380001
     * @see {@link https://ampache.org/api/api-json-methods#following}
     */
    async following (params: {
        username: string,
    }) {
        let query = 'following';
        query += qs.stringify(params, '&');
        let data = await this.request<{user: UserSummary[]}>(query);
        return (data.user) ? data.user : data;
    }

    /**
     * This will follow/unfollow a user
     * @param params.username Username string to find
     * @see {@link https://ampache.org/api/api-json-methods#toggle_follow}
     */
    toggleFollow(params: {
        username: string,
    }) {
        let query = 'toggle_follow';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }

    /**
     * This get a user timeline
     * @remarks MINIMUM_API_VERSION=380001
     * @param params.username Username to find
     * @param [params.limit] Max results to return
     * @param [params.since] UNIXTIME
     * @see {@link https://ampache.org/api/api-json-methods#timeline}
     */
    async timeline (params: {
        username: string,
        limit?: number,
        since?: number,
    }) {
        let query = 'timeline';
        query += qs.stringify(params, '&');
        let data = await this.request<{activity: Activity[]}>(query);
        return (data.activity) ? data.activity : data;
    }

    /**
     * This get current user friends timeline
     * @remarks MINIMUM_API_VERSION=380001
     * @param [params.limit] Max results to return
     * @param [params.since] UNIXTIME
     * @see {@link https://ampache.org/api/api-json-methods#friends_timeline}
     */
    async friendsTimeline (params?: {
        limit?: number,
        since?: number,
    }) {
        let query = 'friends_timeline';
        query += qs.stringify(params, '&');
        let data = await this.request<{activity: Activity[]}>(query);
        return (data.activity) ? data.activity : data;
    }
}