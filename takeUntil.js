assertArraysEqual = require('./assertArraysEqual');
eqArrays = require('./eqArrays');

// I need 2 parameters
//include array & callback.

const takeUntil = (array, callback) => {
  let result = [];
  for (let val of array) {
    if (!callback(val)) {
      result.push(val); 
    } else {
     
    }
    
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

/* Expected output: [ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ] */



module.exports = takeUntil;