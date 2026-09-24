'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/cumulativeAddition.js";

test("returns [sum, length]", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("cumulativeAddition([1, 2, 4])"), [7, 3]);
  assert.deepEqual(run("cumulativeAddition([-5, 5])"), [0, 2]);
});

test("handles an empty array", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("cumulativeAddition([])"), [0, 0]);
});
