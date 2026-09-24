'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/inputValue.js";

test("classifies numeric strings", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("inputType('12')"), "integer");
  assert.deepEqual(run("inputType('3.14')"), "double");
  assert.deepEqual(run("inputType('gaf')"), "string");
});

test("handles negative numbers", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("inputType('-12')"), "integer");
  assert.deepEqual(run("inputType('-0.5')"), "double");
});

test("does not call arbitrary text with a dot a double", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("inputType('a.b')"), "string");
  assert.deepEqual(run("inputType('1.2.3')"), "string");
  assert.deepEqual(run("inputType('.')"), "string");
});
