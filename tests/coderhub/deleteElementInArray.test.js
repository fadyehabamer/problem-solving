'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/deleteElementInArray.js";

test("removes the element at the index", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("deleteElementInArray([2, 4, 88], 2)"), [2, 4]);
  assert.deepEqual(run("deleteElementInArray([2, 4, 88], 0)"), [4, 88]);
});

test("does not mutate the input array", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("var input = [2, 4, 88]; deleteElementInArray(input, 1); input"), [2, 4, 88]);
});
