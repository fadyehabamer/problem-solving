'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/largestSmallest.js";

test("returns [largest, smallest]", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("largestSmallest([2, 4, 9, 23, 435])"), [435, 2]);
  assert.deepEqual(run("largestSmallest([-5, 10, 0])"), [10, -5]);
});

test("does not mutate the input array", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("var input = [3, 1, 2]; largestSmallest(input); input"), [3, 1, 2]);
});
