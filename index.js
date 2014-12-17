try {
  require('dedupe_a');
  console.log('require("dedupe_a") succeeded');
} catch(e) {
  console.log('require("dedupe_a") failed');
  throw e;
}

try {
  require('dedupe_b');
  console.log('require("dedupe_b") succeeded');
} catch(e) {
  console.log('require("dedupe_b") failed');
  throw e;
}


