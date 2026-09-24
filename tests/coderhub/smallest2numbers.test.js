'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/smallest2numbers.js";

test("sums the two smallest numbers", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("sumTwoSmallestNums([19, 5, 42, 2, 77])"), 7);
  assert.deepEqual(run("sumTwoSmallestNums([-3, 10, -1])"), -4);
});

test("does not mutate the input array", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("var input = [19, 5, 42, 2]; sumTwoSmallestNums(input); input"), [19, 5, 42, 2]);
});
