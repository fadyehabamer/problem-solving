'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "Edabit-problemSolving/dividesEvenly.js";

test("returns true when a is divisible by b", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("dividesEvenly(98, 7)"), true);
  assert.deepEqual(run("dividesEvenly(78, 6)"), true);
  assert.deepEqual(run("dividesEvenly(3, 3)"), true);
});

test("returns false otherwise", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("dividesEvenly(85, 4)"), false);
  assert.deepEqual(run("dividesEvenly(3, 6)"), false);
});
