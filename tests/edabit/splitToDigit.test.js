'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "Edabit-problemSolving/splitToDigit.js";

test("splits the value into characters", () => {
  const { run } = load(FILE);
  assert.deepEqual(run("splitToDigit(305)"), ["3", "0", "5"]);
});

test("does not create an implicit global", () => {
  const { run } = load(FILE);
  assert.equal(run("typeof new_arr"), "undefined");
});
