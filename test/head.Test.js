// test/head.js

const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3, 4]", () => {
    assert.strictEqual(head([1, 2, 3, 4]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});



// TEST CODE
console.log(head(['light', 'labs']));
console.log(head([2, 3]));
console.log(head([2, 3, 4]));

