'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/oddsVsEvens.js";

test("compares the sums of odd and even digits", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("oddsVsEvens(123)"), "Odd");
  assert.deepEqual(run("oddsVsEvens(22)"), "Even");
  assert.deepEqual(run("oddsVsEvens(1102)"), "Equal");
});

test("ignores the minus sign of negative numbers", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("oddsVsEvens(-123)"), "Odd");
  assert.deepEqual(run("oddsVsEvens(-22)"), "Even");
});
