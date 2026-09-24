'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "Edabit-problemSolving/arrayOfMultiples.js";

test("returns the first length multiples of num", () => {
  const { run } = load(FILE);
  assert.deepEqual(run("arrayOfMultiples(7, 5)"), [7, 14, 21, 28, 35]);
  assert.deepEqual(run("arrayOfMultiples(12, 3)"), [12, 24, 36]);
  assert.deepEqual(run("arrayOfMultiples(3, 0)"), []);
});
