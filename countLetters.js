const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const countLetters = function (phrase) {
  const countStats = {};
  for (let letter of phrase.split('')) {
    countStats[letter] = 0;
  }
  for (let a in countStats) {
    for (let b of phrase.split('')) {
      if (a === b) {
        countStats[a]++;
      }
    }
  }
  return countStats;
}

console.log(countLetters("forty two is the answer to all life"));