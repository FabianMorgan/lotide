const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');



const words = ["love", "joy", "peace", "patience", "faithfulness", "kindness", "goodness", "gentleness", "self-control"];

const map = function(array, callback) {  
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
    console.log(results)
  }  
  return results;
};
map(words);

module.exports = map;