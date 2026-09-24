'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "Edabit-problemSolving/even.js";

test("returns only the even numbers", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("even([10, 122, 34, 5, 6, 8, 9, 32, 3])"), [10, 122, 34, 6, 8, 32]);
  assert.deepEqual(run("even([])"), []);
});

test('file runs without throwing', () => {
  assert.equal(loadError(FILE), null);
});
