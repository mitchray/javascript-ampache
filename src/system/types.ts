import { Song } from "../songs/types";
import { Album } from "../albums/types";
import { Artist } from "../artists/types";
import { Playlist } from "../playlists/types";
import { Podcast, PodcastEpisode } from "../podcasts/types";
import { LiveStream } from "../live-streams/types";
import { Video } from "../videos/types";

export type IndexType = Song | Album | Artist | Playlist | Podcast | PodcastEpisode | LiveStream;

export type StatsType = Song | Album | Artist | Video | Playlist | Podcast | PodcastEpisode;