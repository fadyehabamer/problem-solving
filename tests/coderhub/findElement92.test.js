'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/findElement92.js";

test("returns the index of the first 92", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("findElement92([1, 92, 3, 92])"), 1);
  assert.deepEqual(run("findElement92([92])"), 0);
});

test("returns 92 when there is no 92, including an empty array", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("findElement92([1, 2])"), 92);
  assert.deepEqual(run("findElement92([])"), 92);
});
