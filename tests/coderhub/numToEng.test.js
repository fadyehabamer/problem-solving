'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/numToEng.js";

test("spells out numbers with spaces between words", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("numToEng(0)"), "zero");
  assert.deepEqual(run("numToEng(21)"), "twenty one");
  assert.deepEqual(run("numToEng(115)"), "one hundred fifteen");
  assert.deepEqual(run("numToEng(999)"), "nine hundred ninety nine");
  assert.deepEqual(run("numToEng(1234)"), "one thousand two hundred thirty four");
});

test("has no trailing space on round hundreds", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("numToEng(100)"), "one hundred");
  assert.deepEqual(run("numToEng(2000)"), "two thousand");
});
