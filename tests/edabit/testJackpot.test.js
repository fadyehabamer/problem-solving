'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "Edabit-problemSolving/testJackpot.js";

test("detects four identical symbols", () => {
  const { run } = load(FILE);
  assert.equal(run("testJackpot(['@', '@', '@', '@'])"), true);
  assert.equal(run("testJackpot(['abc', 'abc', 'abc', 'abc'])"), true);
  assert.equal(run("testJackpot(['@', '@', '@', '-'])"), false);
});

test("does not create an implicit global", () => {
  const { run } = load(FILE);
  assert.equal(run("typeof i"), "undefined");
});
