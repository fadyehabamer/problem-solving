'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/replaceThe.js";

test("replaces the with a / an", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("replaceThe('I like to go to the park')"), "I like to go to a park");
  assert.deepEqual(run("replaceThe('the apple')"), "an apple");
});

test("does not crash when the sentence ends with the", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("replaceThe('I saw the')"), "I saw the");
});
