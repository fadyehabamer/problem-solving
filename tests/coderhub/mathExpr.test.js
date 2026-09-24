'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/mathExpr.js";

test("accepts valid numeric expressions", () => {
  const { run } = load(FILE);
  assert.equal(run("mathExpr('4 + 5 * 2')"), true);
  assert.equal(run("mathExpr('(8 - 2) / 3')"), true);
});

test("rejects bitwise and invalid expressions", () => {
  const { run } = load(FILE);
  assert.equal(run("mathExpr('7&0')"), false);
  assert.equal(run("mathExpr('4 +')"), false);
  assert.equal(run("mathExpr('abc')"), false);
});
