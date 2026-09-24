'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/countWords.js";

test("counts words in a sentence", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("countWords('Tell me how to make your day happy')"), 8);
});

test("ignores extra spaces and empty input", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("countWords('')"), 0);
  assert.deepEqual(run("countWords('  two   words ')"), 2);
});
