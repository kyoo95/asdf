const takeUntil = function (array, callback) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return newArray;
    }
    newArray.push(array[i]);
  }
  return newArray;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data1, x => x === ',');
console.log(results2);