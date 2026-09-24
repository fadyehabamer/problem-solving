'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/addStrNums.js";

test("returns the sum of two numeric strings", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("addStrNums('3', '4')"), 7);
  assert.deepEqual(run("addStrNums('10', '-4')"), 6);
});

test("returns 0 (not -1) when the sum is zero", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("addStrNums('0', '0')"), 0);
  assert.deepEqual(run("addStrNums('-3', '3')"), 0);
});

test("returns -1 when an input is not a number", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("addStrNums('dee', '6')"), -1);
  assert.deepEqual(run("addStrNums('6', '')"), -1);
});
