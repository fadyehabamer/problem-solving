'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../helpers/load');

const FILE = "Edabit-problemSolving/capToFront.js";

test("moves capital letters to the front", () => {
  const { run } = load(FILE);
  assert.equal(run("capToFront('hApPy')"), "APhpy");
  assert.equal(run("capToFront('moveMENT')"), "MENTmove");
  assert.equal(run("capToFront('shOrtCAKE')"), "OCAKEshrt");
});
