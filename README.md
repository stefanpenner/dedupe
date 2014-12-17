versions of stuff:

```js
{ http_parser: '2.3',
  node: '0.11.14',
  v8: '3.26.33',
  uv: '1.0.0',
  zlib: '1.2.3',
  modules: '14',
  openssl: '1.0.1i',
  npm: '2.1.12',
  dedupe: '1.0.0' }
```

`dedupe`, depends on `dedupe_a` and `dedupe_b` which both depend on `mkdirp`.

Both `dedupe_a` and `dedupe_b` re-export `mkdirp` for `dedupe` proper to invoke. Unfortunately, it appears that `dedupe_b` gets `mkdirp` but `dedupe_a` does not.

running:

```sh
git clone https://github.com/stefanpenner/dedupe.git
cd dedupe
npm i
node index
```

expected results

```
require("dedupe_a") succeeded
require("dedupe_b") succeeded

```

actual results:

```
require("dedupe_a") failed
Cannot find module 'mkdirp'
Error: Cannot find module 'mkdirp'
    at Function.Module._resolveFilename (module.js:336:15)
    at Function.Module._load (module.js:278:25)
    at Module.require (module.js:365:17)
    at require (module.js:384:17)
    at Object.<anonymous> (/Users/stefan/src/dedupe/node_modules/dedupe_a/index.js:1:80)
    at Module._compile (module.js:460:26)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Module.require (module.js:365:17)
require("dedupe_b") succeeded
```
