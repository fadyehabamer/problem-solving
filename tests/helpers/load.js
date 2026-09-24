'use strict';
// Loads a solution file into an isolated vm context (no module changes needed)
// so its functions can be exercised from node:test without dependencies.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..', '..');

function toLocal(value) {
  try {
    return structuredClone(value); // copy plain data into this realm for deepStrictEqual
  } catch {
    return value;
  }
}

function load(relPath, globals = {}) {
  const logs = [];
  const context = vm.createContext({
    console: { log: (...args) => logs.push(args.map(toLocal)), error: () => {} },
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
    ...globals,
  });
  const code = fs.readFileSync(path.join(ROOT, relPath), 'utf8');
  vm.runInContext(code, context, { filename: relPath, timeout: 2000 });
  return {
    context,
    logs,
    // Evaluate an expression in the solution's global scope (sees top-level let/const/functions).
    run: (expr, timeout = 1000) => toLocal(vm.runInContext(expr, context, { timeout })),
  };
}

// Like load(), but returns the error thrown while running the file (or null).
function loadError(relPath, globals = {}) {
  try {
    load(relPath, globals);
    return null;
  } catch (err) {
    return err;
  }
}

module.exports = { load, loadError, ROOT };
