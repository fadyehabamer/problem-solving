'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "Edabit-problemSolving/numbersSum.js";

test("sums only the integers", () => {
  const { run } = load(FILE);
  assert.equal(run("numbersSum([1, 3, 4, 'g'])"), 8);
  assert.equal(run("numbersSum([1, 2, '13', '4', '645'])"), 3);
  assert.equal(run("numbersSum([true, false, '123', '75'])"), 0);
});
