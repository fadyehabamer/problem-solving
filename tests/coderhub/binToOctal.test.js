'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/binToOctal.js";

test("converts binary strings to octal", () => {
  const { run } = load(FILE);
  assert.equal(run("binToOctal('1000000000')"), "1000");
  assert.equal(run("binToOctal('111')"), "7");
  assert.equal(run("binToOctal('0')"), "0");
});
