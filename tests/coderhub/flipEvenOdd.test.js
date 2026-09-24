'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/flipEvenOdd.js";

test("adds 1 to evens and subtracts 1 from odds", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("filpEvenOdd([24, 13, 14, 18])"), [25, 12, 15, 19]);
});

test("does not mutate the input array", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("var input = [24, 13]; filpEvenOdd(input); input"), [24, 13]);
});
