'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/firstNVowels.js";

test("returns the first n vowels", () => {
  const { run } = load(FILE);
  assert.equal(run("firstNVowels('Sharpening skills', 3)"), "aei");
  assert.equal(run("firstNVowels('UNDERSTAND', 2)"), "UE");
  assert.equal(run("firstNVowels('hello', 2)"), "eo");
});

test("returns invalid when there are fewer than n vowels", () => {
  const { run } = load(FILE);
  assert.equal(run("firstNVowels('rhythm', 1)"), "invalid");
});
