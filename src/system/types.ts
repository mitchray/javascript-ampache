import { SongResponse } from "../songs/types";
import { AlbumResponse } from "../albums/types";
import { ArtistResponse } from "../artists/types";
import { PlaylistResponse } from "../playlists/types";
import { PodcastResponse, PodcastEpisodeResponse } from "../podcasts/types";
import { LiveStreamResponse } from "../live-streams/types";
import { VideoResponse } from "../videos/types";
import { UID } from "../base";

export type IndexType = SongResponse | AlbumResponse | ArtistResponse | PlaylistResponse | PodcastResponse | PodcastEpisodeResponse | LiveStreamResponse;

export type StatsType = SongResponse | AlbumResponse | ArtistResponse | VideoResponse | PlaylistResponse | PodcastResponse | PodcastEpisodeResponse;

export type IndexEntry = {
    id: UID,
    name: string,
    prefix: string,
    basename: string,
}