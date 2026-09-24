'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/match_array.js";

test("true when both arrays hold the same elements in any order", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("match_array(['word1', 'wo', 'word2'], ['word2', 'word1', 'wo'])"), true);
});

test("false when the arrays differ in length or counts", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("match_array(['a', 'b', 'c'], ['a'])"), false);
  assert.deepEqual(run("match_array(['a', 'a'], ['a', 'b'])"), false);
  assert.deepEqual(run("match_array(['a'], ['a', 'b'])"), false);
});
