'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "Edabit-problemSolving/squareDigits.js";

test("returns the squared digits as a number", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("squareDigits(9119)"), 811181);
  assert.deepEqual(run("squareDigits(2483)"), 416649);
  assert.deepEqual(run("squareDigits(3212)"), 9414);
});
