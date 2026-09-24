'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = "IdontKnowJS/Core JS/Don't use delete with arrays/main.js";

test('delete-vs-splice example runs to the end', () => {
  assert.equal(loadError(FILE), null);
});

test('splice section logs the length before and after removing an item', () => {
  const { logs } = load(FILE);
  assert.deepEqual(logs.slice(-3), [[5], [[2, 3, 4, 5]], [4]]);
});
