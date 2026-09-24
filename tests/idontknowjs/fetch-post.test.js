'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { setImmediate: tick } = require('node:timers/promises');
const { load, ROOT } = require('../helpers/load');

const DIR = "IdontKnowJS/DOM/Fetch 'Post Method'";

function setup(fetchImpl) {
  const alerts = [];
  const el = () => ({ value: '', addEventListener() {} });
  const { run } = load(`${DIR}/main.js`, {
    document: { getElementById: el },
    fetch: fetchImpl,
    Swal: { fire: (opts) => alerts.push(opts) },
  });
  return { run, alerts };
}

test('shows the success alert when the POST succeeds', async () => {
  const { run, alerts } = setup(async () => ({ ok: true, json: async () => ({ id: 101 }) }));
  run('postRequest("t", "b", "1")');
  for (let i = 0; i < 5; i++) await tick();
  assert.equal(alerts.length, 1);
  assert.equal(alerts[0].title, 'Success');
});

test('does not claim success when the request fails', async () => {
  const { run, alerts } = setup(() => Promise.reject(new Error('offline')));
  run('postRequest("t", "b", "1")');
  for (let i = 0; i < 5; i++) await tick();
  assert.equal(alerts.length, 1);
  assert.notEqual(alerts[0].title, 'Success');
});

test('every <label for> points at an existing input id', () => {
  const html = fs.readFileSync(path.join(ROOT, DIR, 'index.html'), 'utf8');
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  const missing = [...html.matchAll(/<label for="([^"]+)"/g)].map((m) => m[1]).filter((f) => !ids.has(f));
  assert.deepEqual(missing, []);
});
