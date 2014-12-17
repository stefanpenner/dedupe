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

Both `dedupe_a` and `dedupe_b` re-export `mkdirp` for `dedupe` proper to invoke.

running:

```sh
git clone https://github.com/stefanpenner/dedupe.git
cd dedupe
npm i
npm dedupe
```

Now mkdirp appears in the users package.json, and it becomes their
responsbility to maintain a dedupe friendly version of mkdirp.

Additionally, if the user already has a a version of mkdirp but it is not a
dedupe friendly version the dedupe stragety again is thrwated.

Now imagine this with 10 or 20 deps, it explodes into an un-maintainable state
very quickly. Even at low numbers 1 or 2 this isn't at all reasonable


