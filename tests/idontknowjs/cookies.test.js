'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = 'IdontKnowJS/BOM/Cookies/main.js';

function run() {
  const writes = [];
  const document = {};
  Object.defineProperty(document, 'cookie', { set: (v) => writes.push(v), get: () => '' });
  load(FILE, { document, Date });
  return writes.map((raw) => {
    const [pair, ...attrs] = raw.split(';').map((s) => s.trim());
    const expires = attrs.find((a) => a.toLowerCase().startsWith('expires='));
    return { pair, expires: expires ? new Date(expires.slice(8)) : null };
  });
}

test('every cookie is written as name=value', () => {
  for (const { pair } of run()) {
    assert.match(pair, /^[^=:;\s]+=/, `"${pair}" is not name=value`);
  }
});

test('set and modify use a future expiry, delete uses a past one', () => {
  const now = Date.now();
  const cookies = run();
  const last = cookies.at(-1);
  for (const c of cookies.slice(0, -1)) {
    assert.ok(c.expires > now, `${c.pair} already expired at ${c.expires}`);
  }
  assert.ok(last.expires < now, 'delete should use a date in the past');
  assert.equal(last.pair.split('=')[0], cookies[0].pair.split('=')[0]);
});
