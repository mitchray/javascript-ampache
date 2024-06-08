# Changelog

## [1.0.8] - 2024-06-08
- New `cond` and `sort` params for paginated collections

## [1.0.7] - 2024-04-30
- Restore the auth param when logging in debug mode

## [1.0.6] - 2024-02-09
## Requires Ampache 6.3.0
- Use Bearer header for auth. Your Ampache server will need `Access-Control-Allow-Headers`
  - Example config for Apache virtualhost: `Header set Access-Control-Allow-Headers "Authorization"`
- New `lostPassword` method
- New `bookmark` method
- New `userPlaylists` method
- New `userSmartlists` method
- New `playlistAdd` method
- New `index` method
- Bookmark updates
- More types for `shareCreate`
- `has_art` prop for everything with `art`
- `playlistAddSong` deprecated, use new `playlistAdd`

## [1.0.5] - 2023-09-21
## Requires Ampache 6.0.1
- Preferences are now an object


## [1.0.3] - 2023-08-13
### Updated
- New `album_artist` & `song_artist` types for ```advancedSearch```

### Fixed
- ```genre``` & ```podcast``` do not return arrays

## [1.0.2] - 2023-08-13
### Updated
- New `random` param on ```playlistSongs```

## [1.0.1] - 2023-05-13
- ```stream```, ```download``` & ```get_art``` return binary blobs

## [1.0.0] - 2023-05-13
- Initial release