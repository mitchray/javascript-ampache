# Changelog

## [2.0.1] - 2026-02-20

## Requires Ampache 7.9.1 Build 11+

- Refactored project to simplify structure
- ```smartlist``` method
- ```smartlists``` method - Native support now, so longer a filtered list from ```playlists```
- ```smartlist_songs``` method
- ```smartlist_delete``` method
- ```get_kyrics``` method

## [1.2.0] - 2025-11-08

- Add `search_rules` method

## [1.1.10] - 2025-05-30

- Use Bearer token in Authorization header for handshake() if that is enabled

## [1.1.9] - 2025-05-30

- Opt-in to Bearer token (losing my mind)

## [1.1.6] - 2025-05-27

- get_art has a `size` param

## [1.1.5] - 2025-05-26

- Had not run build since v1.1.1...

## [1.1.4] - 2025-05-25

- Was missing some updates from API 6.3.0 - 6.6.8

## [1.1.3] - 2025-05-25

- Update Ampache API version

## Requires Ampache 7.4.0

## [1.1.2] - 2025-05-24

## Requires Ampache 7.4.0

- Add `is_hidden` & `merge` to genre object
- Add `user` to playlist object
- Add `has_access` to preference objects

## [1.1.1] - 2024-09-23

- getBookmark 'all' param
- Return promise from playlists method

## [1.1.0] - 2024-09-16

- Return the full response instead of just the array of items 
  - Breaks backwards compatibility with earlier versions of the API which sent only the array of items
  - e.g. `md5` hash and `total_count` will now be included where applicable, with an additional property containing the array of items named after the requested object type

## [1.0.9] - 2024-06-28

- Added `rawURL` method for generating URLs based on an endpoint + params

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

- New `album_artist` & `song_artist` types for `advancedSearch`

### Fixed

- `genre` & `podcast` do not return arrays

## [1.0.2] - 2023-08-13

### Updated

- New `random` param on `playlistSongs`

## [1.0.1] - 2023-05-13

- `stream`, `download` & `get_art` return binary blobs

## [1.0.0] - 2023-05-13

- Initial release
