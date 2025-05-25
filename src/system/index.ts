import qs from "querystringify";
import { SongsResponse } from "../songs/types";
import { ArtistsResponse } from "../artists/types";
import {
  Base,
  BinaryBoolean,
  ExtendedPagination,
  Pagination,
  Success,
  UID,
} from "../base";
import { AlbumsResponse } from "../albums/types";
import { VideosResponse } from "../videos/types";
import { PlaylistsResponse } from "../playlists/types";
import {
  PodcastsResponse,
  PodcastEpisodesResponse,
} from "../podcasts/types";
import { LiveStreamsResponse } from "../live-streams/types";
import { LabelsResponse } from "../labels/types";
import { GenresResponse } from "../genres/types";
import { UsersResponse } from "../users/types";
import { IndexEntry, NowPlayingResponse } from "./types";

export class System extends Base {
  /**
   * Check Ampache for updates and run the update if there is one.
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @see {@link https://ampache.org/api/api-json-methods#system_update}
   */
  systemUpdate() {
    let query = "system_update";
    return this.request<Success>(query);
  }

  /**
   * This takes a collection of inputs and returns ID + name for the object type
   * @remarks MINIMUM_API_VERSION=400001
   * @param params.type type of object to find
   * @param [params.filter] search the name of the object_type
   * @param [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
   * @param [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
   * @param [params.include] 0, 1 (include songs in a playlist or episodes in a podcast)
   * @param [params.hide_search] 0, 1 (if true do not include searches/smartlists in the result)
   * @param [params.offset]
   * @param [params.limit]
   * @param [params.cond]
   * @param [params.sort]
   * @see {@link https://ampache.org/api/api-json-methods#get_indexes}
   * @deprecated Being removed in 7.0.0. Use `list` instead.
   */
  getIndexes(
    params: {
      type:
        | "song"
        | "album"
        | "artist"
        | "album_artist"
        | "playlist"
        | "podcast"
        | "podcast_episode"
        | "live_stream"
        | "catalog"
        | "song_artist";
      filter?: string;
      add?: Date;
      update?: Date;
      include?: BinaryBoolean;
      hide_search?: BinaryBoolean;
    } & ExtendedPagination,
  ) {
    let query = "get_indexes";
    query += qs.stringify(params, "&");
    let data;

    switch (params.type) {
      case "song":
        data = this.request<SongsResponse>(query);
        break;
      case "album":
        data = this.request<AlbumsResponse>(query);
        break;
      case "artist":
      case "album_artist":
        data = this.request<ArtistsResponse>(query);
        break;
      case "playlist":
        data = this.request<PlaylistsResponse>(query);
        break;
      case "podcast":
        data = this.request<PodcastsResponse>(query);
        break;
      case "podcast_episode":
        data = this.request<PodcastEpisodesResponse>(query);
        break;
      case "live_stream":
        data = this.request<LiveStreamsResponse>(query);
        break;
      default:
        return false;
    }

    return data;
  }

  /**
   * This takes a named array of objects and returning `id`, `name`, `prefix` and `basename`
   * @remarks MINIMUM_API_VERSION=6.0.0
   * @param params.type type of object to find
   * @param [params.filter] Value is Alpha Match for returned results, may be more than one letter/number
   * @param [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
   * @param [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
   * @param [params.hide_search] 0, 1 (if true do not include searches/smartlists in the result)
   * @param [params.offset]
   * @param [params.limit]
   * @param [params.cond]
   * @param [params.sort]
   * @see {@link https://ampache.org/api/api-json-methods#list}
   */
  list(
    params: {
      type:
        | "song"
        | "album"
        | "artist"
        | "album_artist"
        | "playlist"
        | "podcast"
        | "podcast_episode"
        | "live_stream"
        | "catalog"
        | "song_artist";
      filter?: string;
      add?: Date;
      update?: Date;
      hide_search?: BinaryBoolean;
    } & ExtendedPagination,
  ) {
    let query = "list";
    query += qs.stringify(params, "&");
    return this.request<{ list: IndexEntry[] }>(query);
  }

  /**
   * This takes a collection of inputs and return ID's for the object type.
   * @remarks MINIMUM_API_VERSION=6.3.0
   * @param params.type type of object to find
   * @param [params.filter] Value is Alpha Match for returned results, may be more than one letter/number
   * @param [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
   * @param [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
   * @param [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
   * @param [params.include] 0, 1, (include child objects)
   * @param [params.hide_search] 0, 1 (if true do not include searches/smartlists in the result)
   * @param [params.offset]
   * @param [params.limit]
   * @param [params.cond]
   * @param [params.sort]
   * @see {@link https://ampache.org/api/api-json-methods#index}
   */
  index(
    params: {
      type:
        | "catalog"
        | "song"
        | "album"
        | "artist"
        | "album_artist"
        | "song_artist"
        | "playlist"
        | "podcast"
        | "podcast_episode"
        | "share"
        | "video"
        | "live_stream";
      filter?: string;
      exact?: BinaryBoolean;
      add?: Date;
      update?: Date;
      include?: BinaryBoolean;
      hide_search?: BinaryBoolean;
    } & ExtendedPagination,
  ) {
    let query = "index";
    query += qs.stringify(params, "&");
    return this.request<{ index: [] }>(query);
  }

  /**
   * Return children of a parent object in a folder traversal/browse style
   * If you don't send any parameters you'll get a catalog list (the 'root' path)
   * @remarks MINIMUM_API_VERSION=6.0.0
   * @param [params.filter] object_id
   * @param [params.type] type of object to find
   * @param [params.catalog] catalog ID you are browsing (required on 'artist', 'album', 'podcast')
   * @param [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
   * @param [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
   * @param [params.offset]
   * @param [params.limit]
   * @param [params.cond]
   * @param [params.sort]
   * @see {@link https://ampache.org/api/api-json-methods#browse}
   */
  browse(
    params: {
      filter?: UID;
      type?: "root" | "catalog" | "artist" | "album" | "podcast";
      catalog?: number;
      add?: Date;
      update?: Date;
    } & ExtendedPagination,
  ) {
    let query = "browse";
    query += qs.stringify(params, "&");
    return this.request<{ browse: IndexEntry[] }>(query);
  }

  /**
   * Return similar artist IDs or similar song IDs compared to the input filter
   * @remarks MINIMUM_API_VERSION=420000
   * @param params.type type of object to check against
   * @param params.filter UID to find
   * @param [params.offset]
   * @param [params.limit]
   * @see {@link https://ampache.org/api/api-json-methods#get_similar}
   */
  getSimilar(
    params: {
      type: "song" | "artist";
      filter: UID;
    } & Pagination,
  ) {
    let query = "get_similar";
    query += qs.stringify(params, "&");
    let data;

    switch (params.type) {
      case "song":
        data = this.request<SongsResponse>(query);
        break;
      case "artist":
        data = this.request<ArtistsResponse>(query);
        break;
      default:
        return false;
    }

    return data;
  }

  /**
   * Get some items based on some simple search types and filters. (Random by default)
   * @remarks MINIMUM_API_VERSION=380001; CHANGED_IN_API_VERSION=400001
   * @param params.type Object type
   * @param [params.filter] newest, highest, frequent, recent, forgotten, flagged, random
   * @param [params.user_id] Filter results to a certain user by UID
   * @param [params.username] Filter results to a certain user by username
   * @param [params.offset]
   * @param [params.limit]
   * @see {@link https://ampache.org/api/api-json-methods#stats}
   */
  stats(
    params: {
      type:
        | "song"
        | "album"
        | "artist"
        | "video"
        | "playlist"
        | "podcast"
        | "podcast_episode";
      filter?:
        | "newest"
        | "highest"
        | "frequent"
        | "recent"
        | "forgotten"
        | "flagged"
        | "random";
      user_id?: number;
      username?: string;
    } & Pagination,
  ) {
    let query = "stats";
    query += qs.stringify(params, "&");
    let data;

    switch (params.type) {
      case "song":
        data = this.request<SongsResponse>(query);
        break;
      case "album":
        data = this.request<AlbumsResponse>(query);
        break;
      case "artist":
        data = this.request<ArtistsResponse>(query);
        break;
      case "video":
        data = this.request<VideosResponse>(query);
        break;
      case "playlist":
        data = this.request<PlaylistsResponse>(query);
        break;
      case "podcast":
        data = this.request<PodcastsResponse>(query);
        break;
      case "podcast_episode":
        data = this.request<PodcastEpisodesResponse>(query);
        break;
      default:
        return false;
    }

    return data;
  }

  /**
   * This rates a library item
   * @remarks MINIMUM_API_VERSION=380001
   * @param params.type Object type
   * @param params.id UID to find
   * @param params.rating Rating to apply
   * @see {@link https://ampache.org/api/api-json-methods#rate}
   */
  rate(params: {
    type:
      | "song"
      | "album"
      | "artist"
      | "playlist"
      | "podcast"
      | "podcast_episode"
      | "video"
      | "tvshow"
      | "tvshow_season";
    id: UID;
    rating: 0 | 1 | 2 | 3 | 4 | 5;
  }) {
    let query = "rate";
    query += qs.stringify(params, "&");
    return this.request<Success>(query);
  }

  /**
   * This flags a library item as a favorite
   * @remarks MINIMUM_API_VERSION=400001
   * @param params.type Object type
   * @param params.id UID to find
   * @param params.flag 0, 1
   * @param [params.date] UNIXTIME
   * @see {@link https://ampache.org/api/api-json-methods#flag}
   */
  flag(params: {
    type:
      | "song"
      | "album"
      | "artist"
      | "playlist"
      | "podcast"
      | "podcast_episode"
      | "video"
      | "tvshow"
      | "tvshow_season";
    id: UID;
    flag: BinaryBoolean;
    date?: number;
  }) {
    let query = "flag";
    query += qs.stringify(params, "&");
    return this.request<Success>(query);
  }

  /**
   * Take a song_id and update the object_count and user_activity table with a play. This allows other sources to record play history to Ampache.
   * If you don't supply a user id (optional) then just fall back to you.
   * ACCESS REQUIRED: 100 (Admin) permission to change another user's play history
   * @remarks MINIMUM_API_VERSION=400001
   * @param params.id UID of song
   * @param [params.user] UID of user
   * @param [params.client] Client string
   * @param [params.date] UNIXTIME
   * @see {@link https://ampache.org/api/api-json-methods#record_play}
   */
  recordPlay(params: { id: UID; user?: UID; client?: string; date?: number }) {
    let query = "record_play";
    query += qs.stringify(params, "&");
    return this.request<Success>(query);
  }

  /**
   * Search for a song using text info and then record a play if found. This allows other sources to record play history to ampache
   * @remarks MINIMUM_API_VERSION=400001
   * @param params.song HTML encoded string
   * @param params.artist HTML encoded string
   * @param params.album HTML encoded string
   * @param [params.songmbid] Song MBID
   * @param [params.artistmbid] Artist MBID
   * @param [params.albummbid] Album MBID
   * @param [params.song_mbid] Alias of songmbid
   * @param [params.artist_mbid] Alias of artistmbid
   * @param [params.album_mbid] Alias of albummbid
   * @param [params.date] UNIXTIME
   * @param [params.client] Client string
   * @see {@link https://ampache.org/api/api-json-methods#scrobble}
   */
  scrobble(params: {
    song: string;
    artist: string;
    album: string;
    songmbid?: string;
    artistmbid?: string;
    albummbid?: string;
    song_mbid?: string;
    artist_mbid?: string;
    album_mbid?: string;
    date?: number;
    client?: string;
  }) {
    let query = "scrobble";
    query += qs.stringify(params, "&");
    return this.request<Success>(query);
  }

  /**
   * Update a single album, artist, song from the tag data
   * @remarks MINIMUM_API_VERSION=400001
   * @param params.type Object type
   * @param params.id UID to find
   * @see {@link https://ampache.org/api/api-json-methods#update_from_tags}
   */
  updateFromTags(params: { type: "song" | "artist" | "album"; id: UID }) {
    let query = "update_from_tags";
    query += qs.stringify(params, "&");
    return this.request<Success>(query);
  }

  /**
   * Update artist information and fetch similar artists from last.fm
   * Make sure lastfm_API_key is set in your configuration file
   * ACCESS REQUIRED: 75 (Catalog Manager)
   * @remarks MINIMUM_API_VERSION=400001
   * @param params.id UID to find
   * @see {@link https://ampache.org/api/api-json-methods#update_artist_info}
   */
  updateArtistInfo(params: { id: UID }) {
    let query = "update_artist_info";
    query += qs.stringify(params, "&");
    return this.request<Success>(query);
  }

  /**
   * Updates a single album, artist, song running the gather_art process.
   * Doesn't overwrite existing art by default.
   * ACCESS REQUIRED: 75 (Catalog Manager)
   * @remarks MINIMUM_API_VERSION=400001
   * @param params.id UID to update
   * @param params.type Object type
   * @param [params.overwrite]
   * @see {@link https://ampache.org/api/api-json-methods#update_art}
   */
  updateArt(params: {
    id: UID;
    type: "artist" | "album" | "song";
    overwrite?: BinaryBoolean;
  }) {
    let query = "update_art";
    query += qs.stringify(params, "&");
    return this.request<Success>(query);
  }

  /**
   * Streams a given media file. Takes the file id in parameter with optional max bit rate, file format, time offset,
   * size and estimate content length option.
   * NOTE search and playlist will only stream a random object from the list.
   * @remarks MINIMUM_API_VERSION=400001
   * @param params.id UID to find
   * @param params.type Object type
   * @param [params.bitrate] Max bitrate for transcoding
   * @param [params.format] mp3, ogg, raw, etc. (raw returns the original format)
   * @param [params.offset] Time offset
   * @param [params.length] 0, 1 (estimate content length)
   * @see {@link https://ampache.org/api/api-json-methods#stream}
   */
  stream(params: {
    id: UID;
    type: "song" | "podcast_episode" | "search" | "playlist";
    bitrate?: number;
    format?: string;
    offset?: number;
    length?: BinaryBoolean;
  }) {
    let query = "stream";
    query += qs.stringify(params, "&");
    return this.binary(query);
  }

  /**
   * Downloads a given media file. set format=raw to download the full file
   * NOTE search and playlist will only download a random object from the list
   * @remarks MINIMUM_API_VERSION=400001
   * @param params.id UID to find
   * @param params.type Object type
   * @param [params.format] mp3, ogg, raw, etc. (raw returns the original format)
   * @param [params.bitrate] max bitrate for transcoding in bytes (e.g 192000=192Kb)
   * @see {@link https://ampache.org/api/api-json-methods#download}
   */
  download(params: {
    id: UID;
    type: "song" | "podcast_episode" | "search" | "playlist";
    format?: string;
    bitrate?: number;
  }) {
    let query = "download";
    query += qs.stringify(params, "&");
    return this.binary(query);
  }

  /**
   * Get an art image file.
   * @remarks MINIMUM_API_VERSION=400001
   * @param params.id UID to find
   * @param params.type Object type
   * @see {@link https://ampache.org/api/api-json-methods#get_art}
   */
  getArt(params: {
    id: UID;
    type: "song" | "artist" | "album" | "playlist" | "search" | "podcast";
  }) {
    let query = "get_art";
    query += qs.stringify(params, "&");
    return this.binary(query);
  }

  /**
   * This is for controlling localplay
   * @param params.command The command to send to the localplay controller
   * @param [params.oid] Object UID
   * @param [params.type] Object type
   * @param [params.clear] 0, 1 (Clear the current playlist before adding)
   * @remarks MINIMUM_API_VERSION=380001; CHANGED_IN_API_VERSION=5.0.0
   * @see {@link https://ampache.org/api/api-json-methods#localplay}
   */
  localplay(params: {
    command:
      | "next"
      | "prev"
      | "stop"
      | "play"
      | "pause"
      | "add"
      | "volume_up"
      | "volume_down"
      | "volume_mute"
      | "delete_all"
      | "skip"
      | "status";
    oid?: number;
    type?:
      | "song"
      | "video"
      | "podcast_episode"
      | "channel"
      | "broadcast"
      | "democratic"
      | "live_stream";
    clear?: BinaryBoolean;
  }) {
    let query = "localplay";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Get the list of songs in your localplay playlist
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @see {@link https://ampache.org/api/api-json-methods#localplay_songs}
   */
  localplaySongs() {
    let query = "localplay_songs";
    return this.request(query);
  }

  /**
   * This is for controlling democratic play (Songs only). VOTE: +1 vote for the oid. DEVOTE: -1 vote for the oid.
   * PLAYLIST: Return an array of song items with an additional VOTE COUNT element.
   * PLAY: Returns the URL for playing democratic play.
   * @remarks MINIMUM_API_VERSION=380001
   * @param params.oid UID of song
   * @param params.method vote, devote, playlist, play
   * @see {@link https://ampache.org/api/api-json-methods#democratic}
   */
  democratic(params: {
    oid: UID;
    method: "vote" | "devote" | "playlist" | "play";
  }) {
    let query = "democratic";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Get what is currently being played by all users.
   * @remarks MINIMUM_API_VERSION=6.3.1
   * @see {@link https://ampache.org/api/api-json-methods#now_playing}
   */
  nowPlaying() {
    let query = "now_playing";
    return this.request<{ now_playing: NowPlayingResponse[] }>(query);
  }

  /**
   * Inform the server about the state of your client. (Song you are playing, Play/Pause state, etc.)
   * @remarks MINIMUM_API_VERSION=6.4.0
   * @param params.filter $object_id currently playing/stopping
   * @param [params.type] song, video, podcast_episode (Default: song)
   * @param [params.state] play, stop (Default: play)
   * @param [params.time] current play time in whole seconds (Default: 0)
   * @param [params.client] agent/client name
   * @see {@link https://ampache.org/api/api-json-methods#player}
   */
  player(params: {
    filter: UID;
    type?: "song" | "video" | "podcast_episode";
    state?: "play" | "stop";
    time?: number;
    client?: string;
  }) {
    let query = "player";
    query += qs.stringify(params, "&");
    return this.request<{ now_playing: NowPlayingResponse[] }>(query);
  }

  /**
   * Perform an advanced search given passed rules.
   * You'll want to consult the docs for this.
   * @remarks MINIMUM_API_VERSION=380001
   * @param params.operator and, or (whether to match one rule or all)
   * @param params.type Object type to return
   * @param params.rules An array of rules
   * @param [params.random] 0, 1 (random order of results; default to 0)
   * @param [params.offset]
   * @param [params.limit]
   * @see {@link https://ampache.org/api/api-json-methods#advanced_search}
   */
  advancedSearch(
    params: {
      operator: "and" | "or";
      type:
        | "song"
        | "album"
        | "album_disk"
        | "artist"
        | "album_artist"
        | "song_artist"
        | "label"
        | "playlist"
        | "podcast"
        | "podcast_episode"
        | "genre"
        | "user"
        | "video";
      rules: Array<Array<string>>;
      random?: BinaryBoolean;
    } & Pagination,
  ) {
    let query = "advanced_search";

    for (let i = 0; i < params.rules.length; i++) {
      const thisRule = params.rules[i];
      const ruleNumber = i + 1;

      params["rule_" + ruleNumber] = thisRule[0];
      params["rule_" + ruleNumber + "_operator"] = thisRule[1];
      params["rule_" + ruleNumber + "_input"] = thisRule[2];

      if (thisRule[0] === "metadata") {
        params["rule_" + ruleNumber + "_subtype"] = thisRule[3];
      }
    }

    // drop the initial 'rules' as it was split into its parts
    delete params.rules;

    query += qs.stringify(params, "&");

    let data;

    switch (params.type) {
      case "song":
        data = this.request<SongsResponse>(query);
        break;
      case "album":
        data = this.request<AlbumsResponse>(query);
        break;
      case "artist":
      case "album_artist":
      case "song_artist":
        data = this.request<ArtistsResponse>(query);
        break;
      case "label":
        data = this.request<LabelsResponse>(query);
        break;
      case "playlist":
        data = this.request<PlaylistsResponse>(query);
        break;
      case "podcast":
        data = this.request<PodcastsResponse>(query);
        break;
      case "podcast_episode":
        data = this.request<PodcastEpisodesResponse>(query);
        break;
      case "genre":
        data = this.request<GenresResponse>(query);
        break;
      case "user":
        data = this.request<UsersResponse>(query);
        break;
      case "video":
        data = this.request<VideosResponse>(query);
        break;
      default:
        return false;
    }

    return data;
  }

  // alias of advanced_search
  search = this.advancedSearch;
}
