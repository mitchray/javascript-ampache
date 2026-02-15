import { albumsMethods } from "./albums/index.js";
import { artistsMethods } from "./artists/index.js";
import { authMethods } from "./auth/index.js";
import { bookmarksMethods } from "./bookmarks/index.js";
import { catalogsMethods } from "./catalogs/index.js";
import { genresMethods } from "./genres/index.js";
import { labelsMethods } from "./labels/index.js";
import { licensesMethods } from "./licenses/index.js";
import { liveStreamsMethods } from "./live-streams/index.js";
import { playlistsMethods } from "./playlists/index.js";
import { podcastsMethods } from "./podcasts/index.js";
import { preferencesMethods } from "./preferences/index.js";
import { sharesMethods } from "./shares/index.js";
import { shoutsMethods } from "./shouts/index.js";
import { songsMethods } from "./songs/index.js";
import { systemMethods } from "./system/index.js";
import { usersMethods } from "./users/index.js";
import { videosMethods } from "./videos/index.js";
import { Base } from "./base.js";

/**
 * @typedef {Base} AmpacheAPI
 * AmpacheAPI extends Base and has all domain methods (albums, artists, auth, etc.) on its prototype.
 */

class AmpacheAPI extends Base {}

Object.assign(AmpacheAPI.prototype, albumsMethods, artistsMethods, authMethods, bookmarksMethods, catalogsMethods, genresMethods, labelsMethods, licensesMethods, liveStreamsMethods, playlistsMethods, podcastsMethods, preferencesMethods, sharesMethods, shoutsMethods, songsMethods, systemMethods, usersMethods, videosMethods);

export default AmpacheAPI;
