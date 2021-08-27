# Promise Stream

Converts promise-to-readable to readable stream.

# Example

```js
const promiseStream = require("promise-to-readable");
const fetch = require("node-fetch");

const promise = fetch("https://google.com").then(res => res.body);
const readable = promiseStream(promise);

readable.pipe(process.stdout);
```