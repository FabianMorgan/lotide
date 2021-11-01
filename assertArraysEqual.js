// 1. test length of both arrays are equal
// 2. test if type of elements in both arrays are equal
// 3. test if value of each item in both arrays are equal

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion passed: ${array1} === ${array2}`);
  } else {
      console.log(`Assertion failed:  ${array1} !== ${array2}`)
    }
};

module.exports = assertArraysEqual;

  
