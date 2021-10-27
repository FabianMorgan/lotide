const assertEqual = function(actual, expected) { 
  if (actual === expected) {
    return console.log(`Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    return console.log(`Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

function head (arr) {
  let headNum = [];
  for (let h = 0; h < arr.length; h++)
  if(h === arr[0]) {
    headNum.push(arr[0])
  } 
   return headNum
}
console.log(head([2, 5, 3, 4, 5]));

function tail (arrTail) {
  let num = [];
  for (let i = 0; i < arrTail.length; i++) {
   if (i !== 0) {
     num.push(arrTail[i]);
   }
  } return num    
  }

console.log(tail([1, 2, 3, 4, 5]))
//arr[arr.length - 1] - last index of array

// TEST CODE
assertEqual('light', 'labs');
assertEqual(2, 3);

