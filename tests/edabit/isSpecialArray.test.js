'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "Edabit-problemSolving/isSpecialArray.js";

test("checks even indexes hold evens and odd indexes hold odds", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])"), true);
  assert.deepEqual(run("isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])"), false);
  assert.deepEqual(run("isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])"), false);
});

test("handles negative odd numbers", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("isSpecialArray([2, -3, -4, -1])"), true);
});
