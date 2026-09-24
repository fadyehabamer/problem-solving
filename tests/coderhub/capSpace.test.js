'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/capSpace.js";

test("inserts a space before each capital and lower-cases", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("capSpace('iLikeSwimming!')"), "i like swimming!");
  assert.deepEqual(run("capSpace('helloWorld')"), "hello world");
});

test("does not add a leading space when the first letter is capital", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("capSpace('HelloWorld')"), "hello world");
  assert.deepEqual(run("capSpace('')"), "");
});
