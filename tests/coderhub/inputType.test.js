'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/inputType.js";

test("classifies strings, integers and doubles", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("checkInput('a')"), "string");
  assert.deepEqual(run("checkInput(5)"), "integer");
  assert.deepEqual(run("checkInput(-5)"), "integer");
  assert.deepEqual(run("checkInput(5.5)"), "double");
});

test('file runs without throwing', () => {
  assert.equal(loadError(FILE), null);
});
