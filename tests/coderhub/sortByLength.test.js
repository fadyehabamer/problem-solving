'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/sortByLength.js";

test("sorts words by length, then alphabetically", () => {
  const { run } = load(FILE);
  assert.equal(run("sortByLength('Have a nice day')"), "a day Have nice");
  assert.equal(run("sortByLength('bb a ccc')"), "a bb ccc");
});
