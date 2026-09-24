'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/octToBin.js";

test("converts octal strings to binary", () => {
  const { run } = load(FILE);
  assert.equal(run("octToBin('1000')"), "1000000000");
  assert.equal(run("octToBin('7')"), "111");
  assert.equal(run("octToBin('0')"), "0");
});
