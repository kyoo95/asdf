const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const countOnly = function (allItems, itemsToCount) {
  const createdObject = {};
  for (let items in itemsToCount) {
    if (itemsToCount[items])
      createdObject[items] = 0;
  }
  for (let a in createdObject) {
    for (let b in allItems) {
      if (a === allItems[b]) {
        createdObject[a]++;
      }
    }
  }
  console.log(createdObject);
  return createdObject;
}


const result1 = countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

