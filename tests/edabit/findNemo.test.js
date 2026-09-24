'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "Edabit-problemSolving/findNemo.js";

test("reports the word position of Nemo", () => {
  const { run } = load(FILE);
  assert.equal(run("findNemo('I am finding Nemo !')"), "I found Nemo at 4!");
  assert.equal(run("findNemo('Nemo is me')"), "I found Nemo at 1!");
});

test("reports when Nemo is missing", () => {
  const { run } = load(FILE);
  assert.equal(run("findNemo('Is it Nemos, Nemona, Nemoor or Garfield?')"), "I can't find Nemo :(");
  assert.equal(run("findNemo('no fish here')"), "I can't find Nemo :(");
});
