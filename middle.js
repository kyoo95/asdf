const middle = function (array1) {
  if (array1.length <= 2) {
    return [];
  } else if (array1.length % 2 === 0) {
    var middle = [array1[(array1.length) / 2 - 1], array1[(array1.length / 2)]];
    return middle;
  } else {
    var oddMiddle = [Math.floor((array1.length) / 2) + 1];
    return oddMiddle;
  }
}


module.exports = middle;