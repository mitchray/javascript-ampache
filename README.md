# javascript-ampache

A JS client for the Ampache API.

## Installation

```bash
npm install javascript-ampache
```

## Usage

Import `javascript-ampache` module in your project and initialize it with the URL to your server e.g. http://music.com.au

```js
import AmpacheAPI from "javascript-ampache";

const API = new AmpacheAPI({
  url: "http://pathToYourAmpacheServer",
  sessionKey: yourSessionAuthKey,
}); // debug: true - will log the final GET to console

// either set the session key at time of instantiation or set/update with:
API.setSessionKey(yourSessionAuthKey);

let allUsers = API.users();

let thisAlbum = API.album({ filter: 123 });

let results = API.advancedSearch({
  type: "album",
  operator: "and",
  random: 1,
  limit: 20,
  rules: [
    ["title", 0, "monkey"], // Title contains 'monkey'
    ["myrating", 2, 4], // Rating is 4 stars
  ],
});
```

### Bearer token

You can send the session key in the `Authorization: Bearer` header instead of the `auth` query parameter by passing `useBearerToken: true` when creating the client:

```js
const API = new AmpacheAPI({
  url: "http://pathToYourAmpacheServer",
  sessionKey: yourSessionAuthKey,
  useBearerToken: true,
});
```

When using this from a browser, the Ampache server must allow the `Authorization` header (e.g. via `Access-Control-Allow-Headers`).

## Build

```bash
npm run build
```