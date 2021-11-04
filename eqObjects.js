const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (object1, object2) {
  const arrayKey1 = Object.keys(object1.length);
  const arrayKey2 = Object.keys(object2.length);
  if (arrayKey1 !== arrayKey2) {
    return false;
  }
  for (const letter of object1) {
    if (Array.isArray(object1[letter]) && Array.isArray(object2[letter])) {
      return eqArrays(object1[letter], object2[letter]);
    } else {
      if (object1[letter] !== object2[letter]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
