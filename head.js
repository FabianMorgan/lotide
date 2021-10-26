const assertEqual = function(actual, expected) { 
  if (actual === expected) {
    return console.log(`Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    return console.log(`Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

function head (arr) {
  if(arr.length) 
   return arr[0]
}
// TEST CODE
assertEqual('light', 'labs');
assertEqual(2, 3);


