'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "Edabit-problemSolving/calculator.js";

test("returns the result of each operation", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("calculator(2, '+', 2)"), 4);
  assert.deepEqual(run("calculator(10, '-', 7)"), 3);
  assert.deepEqual(run("calculator(2, '*', 3)"), 6);
  assert.deepEqual(run("calculator(10, '/', 2)"), 5);
});

test("returns the divide-by-zero message", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("calculator(1, '/', 0)"), "Can't divide by 0!");
});
