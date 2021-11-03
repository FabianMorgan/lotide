// const _ = require('./index.js')

const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const countOnly = require('./countOnly');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  countOnly,
  without,
};
console.log(module.exports);