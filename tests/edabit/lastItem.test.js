'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "Edabit-problemSolving/lastItem.js";

test("returns the last element of an array or string", () => {
  const { run } = load(FILE);
  assert.equal(run("lastItem([1, 2, 3, 4])"), 4);
  assert.equal(run("lastItem('Edabit')"), "t");
  assert.equal(run("lastItem([])"), undefined);
});
