'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/countOnes.js";

test("counts the 1 bits of a number", () => {
  const { run } = load(FILE);
  assert.equal(run("countOnes(17)"), 2);
  assert.equal(run("countOnes(255)"), 8);
  assert.equal(run("countOnes(0)"), 0);
});
