import { Albums } from "./albums";
import { Artists } from "./artists";
import { Auth } from "./auth";
import { Bookmarks } from "./bookmarks";
import { Catalogs } from "./catalogs";
import { Genres } from "./genres";
import { Labels } from "./labels";
import { Licenses } from "./licenses";
import { LiveStreams } from "./live-streams";
import { Playlists } from "./playlists";
import { Podcasts } from "./podcasts";
import { Preferences } from "./preferences";
import { Shares } from "./shares";
import { Shouts } from "./shouts";
import { Songs } from "./songs";
import { System } from "./system";
import { Users } from "./users";
import { Videos } from "./videos";
import { applyMixins } from "./utils";
import { Base } from "./base";

class AmpacheAPI extends Base {}
interface AmpacheAPI
  extends Albums,
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
    Videos {}
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
