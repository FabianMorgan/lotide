// test/eqArrays.js

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


console.log(eqArrays([1, 2, 3], [1, 2 ,3]));
console.log(eqArrays([1, 2, 3], [3, 2 ,1]));

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

console.log(eqArrays([1, 2, 3], [1, 2, 3, 4]));
console.log(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]));
