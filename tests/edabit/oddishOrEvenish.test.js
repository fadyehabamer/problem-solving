'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "Edabit-problemSolving/oddishOrEvenish.js";

test("classifies by the sum of digits", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("oddishOrEvenish(43)"), "Oddish");
  assert.deepEqual(run("oddishOrEvenish(373)"), "Oddish");
  assert.deepEqual(run("oddishOrEvenish(4433)"), "Evenish");
});

test("ignores the minus sign of negative numbers", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("oddishOrEvenish(-44)"), "Evenish");
  assert.deepEqual(run("oddishOrEvenish(-43)"), "Oddish");
});
