// assertEqual.js
const assertEqual = require('./assertEqual');


const countLetters = function(count) {
  let counting = {};
  for (const letter of count) {

    //get rid of spaces so the function doesn't count them.
    if (letter !== " ") {

      //if the function already counted the letter, add 1
      if (counting[letter]) {
        counting[letter] += 1;

      } else {
        //if the counting object doesn't already have the letter, add it
        counting[letter] = 1
      }
    }
  }
  return counting;
};


console.log(countLetters("lighthouse labs"));


module.exports = countLetters;


