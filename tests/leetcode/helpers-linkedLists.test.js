'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = 'LeetCode-Problems/helpers/linkedLists.js';

test('linked list example parses and runs', () => {
  assert.equal(loadError(FILE), null);
});

test('insert, search and delete behave as documented', () => {
  const { logs } = load(FILE);
  assert.deepEqual(logs, [[10], [20], [30], [true], [10], [30], [false]]);
});
