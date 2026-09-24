'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "Edabit-problemSolving/changeEnough.js";

test("matches the Edabit examples", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("changeEnough([2, 100, 0, 0], 14.11)"), false);
  assert.deepEqual(run("changeEnough([0, 0, 20, 5], 0.75)"), true);
  assert.deepEqual(run("changeEnough([30, 40, 20, 5], 12.55)"), true);
  assert.deepEqual(run("changeEnough([10, 0, 0, 50], 3.85)"), false);
  assert.deepEqual(run("changeEnough([1, 0, 5, 219], 19.99)"), false);
});

test("is not fooled by floating-point rounding when change is exact", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("changeEnough([0, 0, 5, 9], 0.34)"), true);
  assert.deepEqual(run("changeEnough([0, 1, 5, 5], 0.4)"), true);
});

test("does not leak a global loop variable", () => {
  const { run, logs } = load(FILE);
  run('changeEnough([1, 0, 0, 0], 0.25)');
  assert.deepEqual(run("typeof i"), "undefined");
});
