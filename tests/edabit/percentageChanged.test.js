'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "Edabit-problemSolving/percentageChanged.js";

test("reports decreases", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("percentageChanged('$800', '$600')"), "25% decrease");
  assert.deepEqual(run("percentageChanged(800, 600)"), "25% decrease");
});

test("reports increases", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("percentageChanged('$1000', '$2000')"), "100% increase");
  assert.deepEqual(run("percentageChanged('$100', '$101')"), "1% increase");
});
