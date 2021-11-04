const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  //Using Object.keys() to identify keys to loop through
  const myKeys = Object.keys(object);
  for (const key of myKeys) {
    if (object[key] === value) {
      return key;
    }
  }
};


module.exports = findKeyByValue;

