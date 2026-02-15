import { Albums } from "./albums/index.js";
import { Artists } from "./artists/index.js";
import { Auth } from "./auth/index.js";
import { Bookmarks } from "./bookmarks/index.js";
import { Catalogs } from "./catalogs/index.js";
import { Genres } from "./genres/index.js";
import { Labels } from "./labels/index.js";
import { Licenses } from "./licenses/index.js";
import { LiveStreams } from "./live-streams/index.js";
import { Playlists } from "./playlists/index.js";
import { Podcasts } from "./podcasts/index.js";
import { Preferences } from "./preferences/index.js";
import { Shares } from "./shares/index.js";
import { Shouts } from "./shouts/index.js";
import { Songs } from "./songs/index.js";
import { System } from "./system/index.js";
import { Users } from "./users/index.js";
import { Videos } from "./videos/index.js";
import { applyMixins } from "./utils.js";
import { Base } from "./base.js";

/**
 * @typedef {Base & Albums & Artists & Auth & Bookmarks & Catalogs & Genres & Labels & Licenses & LiveStreams & Playlists & Podcasts & Preferences & Shares & Shouts & Songs & System & Users & Videos} AmpacheAPI
 */

class AmpacheAPI extends Base {}
applyMixins(AmpacheAPI, [
  Albums,
  Artists,
  Auth,
  Bookmarks,
  Catalogs,
  Genres,
  Labels,
  Licenses,
  LiveStreams,
  Playlists,
  Podcasts,
  Preferences,
  Shares,
  Shouts,
  Songs,
  System,
  Users,
  Videos,
]);

export default AmpacheAPI;
