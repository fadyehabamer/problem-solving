'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "Edabit-problemSolving/sevenBoom.js";

test("returns Boom! when any number contains a 7", () => {
  const { run } = load(FILE);
  assert.equal(run("sevenBoom([1, 2, 3, 4, 5, 6, 7])"), "Boom!");
  assert.equal(run("sevenBoom([35, 4, 9, 37])"), "Boom!");
  assert.equal(run("sevenBoom([2, 55, 60, 97, 86])"), "Boom!");
});

test("reports when there is no 7", () => {
  const { run } = load(FILE);
  assert.equal(run("sevenBoom([8, 6, 33, 100])"), "there is no 7 in the array");
});
