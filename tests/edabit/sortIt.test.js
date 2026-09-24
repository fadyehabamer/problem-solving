'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "Edabit-problemSolving/sortIt.js";

test("sorts numbers and single-number arrays by value", () => {
  const { run } = load(FILE);
  assert.deepEqual(run("sortIt([4, 1, 3])"), [1, 3, 4]);
  assert.deepEqual(run("sortIt([[4], [1], [3]])"), [[1], [3], [4]]);
  assert.deepEqual(run("sortIt([4, [1], 3])"), [[1], 3, 4]);
  assert.deepEqual(run("sortIt([[4], 1, [3]])"), [1, [3], [4]]);
});

test("does not mutate the input array", () => {
  const { run } = load(FILE);
  assert.deepEqual(run("var input = [3, [1], 2]; sortIt(input); input"), [3, [1], 2]);
});
