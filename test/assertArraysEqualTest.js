const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


eqArrays(assertArraysEqual([1, 2, 3], [1, 2, 3]), true); // => true
eqArrays(assertArraysEqual([1, 2, 3], [3, 2, 1]), false); // => false

eqArrays(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true); // => true
eqArrays(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), false); // => false

//assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3, 4, 5]), false);