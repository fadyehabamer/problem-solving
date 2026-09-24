'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "Edabit-problemSolving/bmi.js";

test("returns the comparison of both BMIs", () => {
  const { run } = load(FILE);
  assert.equal(run("bmi()"), "they are equal");
});
