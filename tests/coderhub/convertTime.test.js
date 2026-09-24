'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "CoderHub-Soloutions/convertTime.js";

test("converts 24-hour times to 12-hour", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("convertTime('21:00')"), "9:00 pm");
  assert.deepEqual(run("convertTime('09:05')"), "09:05 am");
});

test("handles noon and midnight in 24-hour input", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("convertTime('12:30')"), "12:30 pm");
  assert.deepEqual(run("convertTime('00:15')"), "12:15 am");
});

test("converts 12-hour times to 24-hour", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("convertTime('9:30 pm')"), "21:30");
  assert.deepEqual(run("convertTime('12:00 am')"), "0:00");
  assert.deepEqual(run("convertTime('12:45 pm')"), "12:45");
});
