'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/leftDigit.js";

test("returns the first digit in the string", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("leftDigit('fad13')"), 1);
  assert.deepEqual(run("leftDigit('TrAdE2W1n95!')"), 2);
});

test("treats 0 as a digit", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("leftDigit('fa0d13')"), 0);
});
