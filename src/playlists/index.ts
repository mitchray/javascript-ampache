import qs from 'querystringify';
import { Playlist } from './types';
import { Song } from "../songs/types";
import { Base, BinaryBoolean, Pagination, Success, UID } from '../base';

export class Playlists extends Base {
    /**
     * This returns playlists based on the specified filter
     * @remarks MINIMUM_API_VERSION=380001
     * @param [params.filter] Filter results to match this string
     * @param [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
     * @param [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
     * @param [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
     * @param [params.hide_search] 0, 1 (if true do not include searches/smartlists in the result)
     * @param [params.show_dupes] 0, 1 (if true ignore 'api_hide_dupe_searches' setting)
     * @param [params.offset]
     * @param [params.limit]
     * @see {@link https://ampache.org/api/api-json-methods#playlists}
     */
    async playlists (params?: {
        filter?: string,
        exact?: BinaryBoolean,
        add?: Date,
        update?: Date,
        hide_search?: BinaryBoolean,
        show_dupes?: BinaryBoolean,
    } & Pagination) {
        let query = 'playlists';
        query += qs.stringify(params, '&');
        let data = await this.request<{playlist: Playlist[]}>(query);
        return (data.playlist) ? data.playlist : data;
    }

    /**
     * This returns smartlists based on the specified filter. NOTE: Filtered from Playlists() so pagination is invalid.
     * @remarks MINIMUM_API_VERSION=380001
     * @param [params.filter] Filter results to match this string
     * @param [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
     * @param [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
     * @param [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
     * @param [params.show_dupes] 0, 1 (if true ignore 'api_hide_dupe_searches' setting)
     * @see {@link https://ampache.org/api/api-json-methods#playlists}
     */
    async smartlists (params?: {
        filter?: string,
        exact?: BinaryBoolean,
        add?: Date,
        update?: Date,
        show_dupes?: BinaryBoolean,
    }) {
        let query = 'playlists';
        query += qs.stringify(params, '&');
        let data = await this.request<{playlist: Playlist[]}>(query);

        let results = (data.playlist) ? data.playlist : data;

        // filter out regular playlists
        if (Array.isArray(results)) {
            results = results.filter(function(item) {
                return item.id.toString().match(/^smart_/);
            })
        }

        return results;
    }

    /**
     * This returns a single playlist
     * @remarks MINIMUM_API_VERSION=380001
     * @param params.filter UID to find
     * @see {@link https://ampache.org/api/api-json-methods#playlist}
     */
    playlist (params: {
        filter: UID
    }) {
        let query = 'playlist';
        query += qs.stringify(params, '&');
        return this.request<Playlist>(query);
    }

    /**
     * This creates a new playlist and returns it
     * @remarks MINIMUM_API_VERSION=380001
     * @param params.name Playlist name
     * @param [params.type] public, private (Playlist type)
     * @see {@link https://ampache.org/api/api-json-methods#playlist_create}
     */
    playlistCreate (params: {
        name: string,
        type?: 'public' | 'private',
    }) {
        let query = 'playlist_create';
        query += qs.stringify(params, '&');
        return this.request<Playlist>(query);
    }

    /**
     * This modifies name and type of a playlist.
     * NOTE items and tracks must be sent together and be of equal length.
     * @remarks MINIMUM_API_VERSION=400001
     * @param params.filter UID to find
     * @param [params.name] Playlist name
     * @param [params.type] public, private (Playlist type)
     * @param [params.owner] Change playlist owner to the user id (-1 = System playlist)
     * @param [params.items] comma-separated song_id's (replaces existing items with a new id)
     * @param [params.tracks] comma-separated playlisttrack numbers matched to 'items' in order
     * @see {@link https://ampache.org/api/api-json-methods#playlist_edit}
     */
    playlistEdit (params: {
        filter: UID,
        name?: string,
        type?: 'public' | 'private',
        owner?: string,
        items?: string,
        tracks?: string,
    }) {
        let query = 'playlist_edit';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }

    /**
     * This deletes a playlist
     * @remarks MINIMUM_API_VERSION=380001
     * @param params.filter UID of playlist to delete
     * @see {@link https://ampache.org/api/api-json-methods#playlist_delete}
     */
    playlistDelete (params: {
        filter: UID,
    }) {
        let query = 'playlist_delete';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }

    /**
     * This adds a song to a playlist
     * @remarks MINIMUM_API_VERSION=380001; CHANGED_IN_API_VERSION=400003
     * @param params.filter UID of Playlist
     * @param params.song UID of song to add to playlist
     * @param [params.check] 0, 1 Whether to check and ignore duplicates (default = 0)
     * @see {@link https://ampache.org/api/api-json-methods#playlist_add_song}
     */
    playlistAddSong (params: {
        filter: UID,
        song: UID,
        check?: BinaryBoolean,
    }) {
        let query = 'playlist_add_song';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }

    /**
     * This remove a song from a playlist
     * @remarks MINIMUM_API_VERSION=380001; CHANGED_IN_API_VERSION=400001
     * @param params.filter UID of Playlist
     * @param [params.song] UID of song to remove from playlist
     * @param [params.track] Track number to remove from playlist
     * @see {@link https://ampache.org/api/api-json-methods#playlist_remove_song}
     */
    playlistRemoveSong (params: {
        filter: UID,
        song?: UID,
        track?: number,
    }) {
        let query = 'playlist_remove_song';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }

    /**
     * Get a list of song JSON, indexes or id's based on some simple search criteria
     * @remarks MINIMUM_API_VERSION=400001; CHANGED_IN_API_VERSION=400002; 'recent' will search for tracks played after 'Popular Threshold' days; 'forgotten' will search for tracks played before 'Popular Threshold' days; 'unplayed' added in 400002 for searching unplayed tracks
     * @param [params.mode] (default = 'random')
     * @param [params.filter] string LIKE matched to song title
     * @param [params.album] UID of album
     * @param [params.artist] UID of artist
     * @param [params.flag] 0, 1 (get flagged songs only. default = 0)
     * @param [params.format] song, index, id (default = 'song')
     * @param [params.offset]
     * @param [params.limit]
     * @see {@link https://ampache.org/api/api-json-methods#playlist_generate}
     */
    async playlistGenerate (params?: {
        mode?: 'recent' | 'forgotten' | 'unplayed' | 'random',
        filter?: string,
        album?: number,
        artist?: number,
        flag?: BinaryBoolean,
        format?: 'song' | 'index' | 'id',
    } & Pagination) {
        let query = 'playlist_generate';
        query += qs.stringify(params, '&');
        let data = await this.request<{song: Song[]}>(query);
        return (data.song) ? data.song : data;
    }
}