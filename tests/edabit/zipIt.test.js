'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "Edabit-problemSolving/zipIt.js";

test("pairs each woman with the man at the same position", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("zipIt(['Elise', 'Mary'], ['John', 'Rick'])"), [["Elise", "John"], ["Mary", "Rick"]]);
  assert.deepEqual(run("zipIt(['Ana', 'Amy', 'Lisa'], ['Bob', 'Josh', 'Tim'])"), [["Ana", "Bob"], ["Amy", "Josh"], ["Lisa", "Tim"]]);
});

test("reports mismatched sizes", () => {
  const { run, logs } = load(FILE);
  assert.deepEqual(run("zipIt(['Ana', 'Amy', 'Lisa'], ['Bob', 'Josh'])"), "sizes don't match");
});
