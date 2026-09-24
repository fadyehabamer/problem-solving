'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/SortArray.js";

test("sorts ascending with S and descending otherwise", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("sortArray([2, 40, 9], 'S')"), [2, 9, 40]);
  assert.deepEqual(run("sortArray([2, 40, 9], 'D')"), [40, 9, 2]);
});

test("does not mutate the input array", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("var input = [3, 1, 2]; sortArray(input, 'S'); input"), [3, 1, 2]);
});
