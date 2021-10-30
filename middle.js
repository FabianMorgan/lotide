// 1. test length of both arrays are equal
// 2. test if type of elements in both arrays are equal
// 3. test if value of each item in both arrays are equal

const eqArrays = function(arr1, arr2) {
  
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let val1 of arr1) {
    if (arr1[val1] !== arr2[val1]) {
      return false;

    }
  }
  return true;
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion failed:  ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  //returning [] for arrays with 1 or 2 elements.
  let endArray = [];
  if (array.length <= 2) {
    return endArray;
  } else if (array.length % 2 === 0) {
    // Returning 2 middle elements for arrays with even numbers.
    return endArray = [array[(array.length / 2) - 1], array[array.length / 2]];
  } else {
    //returning 1 middle element for arrays with odd numbers.
    return endArray = [array[(array.length - 1) / 2]];
  }
};


console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
