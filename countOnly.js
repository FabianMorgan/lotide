const assertEqual = function(actual, expected) { 
  if (actual === expected) {
    return console.log(`Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    return console.log(`Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {      
      if (results[item]) {
        console.log(results[item] += 1); 
      } else {
        console.log(results[item] = 1);
      }
    }
    
  }  
  return results;
}

const firstNames = [
  "karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": false, "Fang": true, "Agouhanna": false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
