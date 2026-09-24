'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/wordRepeat.js";

test("repeats with single spaces between and no trailing space", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("wordRepeat('abc', 3)"), "abc abc abc");
  assert.deepEqual(run("wordRepeat('abc', 1)"), "abc");
  assert.deepEqual(run("wordRepeat('abc', 0)"), "");
});
