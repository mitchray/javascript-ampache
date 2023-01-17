# javascript-ampache

A JS client for the Ampache API written in Typescript.

## Installation

```bash
npm install javascript-ampache
```

## Usage

Import `javascript-ampache` module in your project and initialize it with the URL to your server e.g. http://music.com.au

```js
import AmpacheAPI from 'javascript-ampache';

const API = new AmpacheAPI({ url: 'http://pathToYourAmpacheServer' }); // debug: true - will log the final GET to console

let allUsers = API.users();

let thisAlbum = API.album({ filter: 123 });

let results = API.advancedSearch({
    type: "album",
    operator: "and",
    random: 1,
    limit: 20,
    rules: [
        ['title', 0, 'monkey'], // Title contains 'monkey'
        ['myrating', 2, 4] // Rating is 4 stars
    ]
});
```

## Build
```bash
npm run build
```

### Special thanks
https://lyamkin.com/blog/how-to-build-api-client-library-in-js/ & https://github.com/ilyamkin/dev-to-js


