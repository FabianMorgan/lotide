// 1. test length of both arrays are equal
// 2. test if type of elements in both arrays are equal
// 3. test if value of each item in both arrays are equal

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

module.exports = middle;


