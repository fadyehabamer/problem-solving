'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/primeNums.js";

test("keeps only primes", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("primeNums([12, 4, 44, 89])"), [89]);
  assert.deepEqual(run("primeNums([2, 3, 9, 25])"), [2, 3]);
});

test("does not treat 0, 1 or negatives as prime", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("primeNums([0, 1, -7, 2])"), [2]);
});
