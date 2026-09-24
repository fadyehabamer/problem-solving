'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { load, loadError } = require('../helpers/load');

const FILE = 'LeetCode-Problems/reverseInteger.js';

test('reverse returns a number without leading zeros', () => {
  const { run } = load(FILE);
  assert.equal(run('reverse(123)'), 321);
  assert.equal(run('reverse(120)'), 21);
  assert.equal(run('reverse(0)'), 0);
});

test('reverse keeps the sign of negative numbers', () => {
  const { run } = load(FILE);
  assert.equal(run('reverse(-123)'), -321);
  assert.equal(run('reverse(-10)'), -1);
});

test('reverse returns 0 when the result overflows 32-bit signed range', () => {
  const { run } = load(FILE);
  assert.equal(run('reverse(1534236469)'), 0);
  assert.equal(run('reverse(-2147483648)'), 0);
  assert.equal(run('reverse(1463847412)'), 2147483641);
});
