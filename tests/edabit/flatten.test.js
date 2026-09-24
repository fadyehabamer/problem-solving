'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "Edabit-problemSolving/flatten.js";

test("flattens one level", () => {
  const { run } = load(FILE);
  assert.deepEqual(run("flatten([[1, 2], [3], [], [4, 5]])"), [1, 2, 3, 4, 5]);
  assert.deepEqual(run("flatten([])"), []);
});

test("does not create an implicit global", () => {
  const { run } = load(FILE);
  assert.equal(run("flatten([[1]]); typeof arr2"), "undefined");
});
