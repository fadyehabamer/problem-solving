'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/addFive.js";

test("adds 5 to every element", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("addFive([1, 2, -7])"), [6, 7, -2]);
  assert.deepEqual(run("addFive(['hi'])"), ["hi5"]);
  assert.deepEqual(run("addFive([])"), []);
});

test("does not mutate the input array", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("var input = [1, 2]; addFive(input); input"), [1, 2]);
});
