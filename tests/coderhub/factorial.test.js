'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/factorial.js";

test("computes n!", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("factorial(0)"), 1);
  assert.deepEqual(run("factorial(1)"), 1);
  assert.deepEqual(run("factorial(5)"), 120);
});

test("rejects negative and non-integer input instead of recursing forever", () => {
  const { run, logs } = load(FILE);
  assert.throws(() => run("factorial(-1)"), /non-negative integer/);
  assert.throws(() => run("factorial(2.5)"), /non-negative integer/);
});
