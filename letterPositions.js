const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      results;

    } else if (results[sentence[i]]) {
      results[sentence[i]].push(i);
      
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};
console.log(letterPositions("howdy y'all"));
//console.log(assertArraysEqual(letterPositions("lighthouse Labs").i [1]));


module.exports = letterPositions;