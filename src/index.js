import { albumsMethods } from "./albums.js";
import { artistsMethods } from "./artists.js";
import { authMethods } from "./auth.js";
import { bookmarksMethods } from "./bookmarks.js";
import { catalogsMethods } from "./catalogs.js";
import { genresMethods } from "./genres.js";
import { labelsMethods } from "./labels.js";
import { licensesMethods } from "./licenses.js";
import { liveStreamsMethods } from "./live-streams.js";
import { playlistsMethods } from "./playlists.js";
import { podcastsMethods } from "./podcasts.js";
import { preferencesMethods } from "./preferences.js";
import { sharesMethods } from "./shares.js";
import { shoutsMethods } from "./shouts.js";
import { songsMethods } from "./songs.js";
import { systemMethods } from "./system.js";
import { usersMethods } from "./users.js";
import { videosMethods } from "./videos.js";
import { Base } from "./base.js";

/**
 * @typedef {Base} AmpacheAPI
 * AmpacheAPI extends Base and has all domain methods (albums, artists, auth, etc.) on its prototype.
 */

class AmpacheAPI extends Base {}

Object.assign(AmpacheAPI.prototype, albumsMethods, artistsMethods, authMethods, bookmarksMethods, catalogsMethods, genresMethods, labelsMethods, licensesMethods, liveStreamsMethods, playlistsMethods, podcastsMethods, preferencesMethods, sharesMethods, shoutsMethods, songsMethods, systemMethods, usersMethods, videosMethods);

export default AmpacheAPI;
