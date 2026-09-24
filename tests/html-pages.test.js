'use strict';
// Static checks on the GitHub Pages entry points: local links must resolve and the
// IdontKnowJS landing page must reach every browser demo in that folder.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { ROOT } = require('./helpers/load');

function htmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'tests') return [];
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(full);
    return entry.name.endsWith('.html') ? [full] : [];
  });
}

function localLinks(file) {
  const html = fs.readFileSync(file, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
  return [...html.matchAll(/\s(?:src|href)="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((url) => !/^(?:[a-z]+:|\/\/|#|\$\{)/i.test(url))
    .map((url) => {
      let target = path.resolve(path.dirname(file), decodeURIComponent(url.split(/[?#]/)[0]));
      if (url.endsWith('/') || (fs.existsSync(target) && fs.statSync(target).isDirectory())) {
        target = path.join(target, 'index.html');
      }
      return { url, target };
    });
}

for (const file of htmlFiles(ROOT)) {
  test(`${path.relative(ROOT, file)}: local src/href targets exist`, () => {
    const missing = localLinks(file).filter((l) => !fs.existsSync(l.target)).map((l) => l.url);
    assert.deepEqual(missing, []);
  });
}

test('IdontKnowJS/index.html links every browser demo in the folder', () => {
  const dir = path.join(ROOT, 'IdontKnowJS');
  const index = path.join(dir, 'index.html');
  const linked = new Set(localLinks(index).map((l) => l.target));
  const demos = htmlFiles(dir).filter((f) => f !== index);
  assert.deepEqual(demos.filter((d) => !linked.has(d)).map((d) => path.relative(dir, d)), []);
});
