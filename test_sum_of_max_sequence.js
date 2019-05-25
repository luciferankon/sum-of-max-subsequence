const { findSumOfMaxSequence } = require("./sum_of_max_sequence");

const test = function(numbers, expected) {
  const actual = findSumOfMaxSequence(numbers);
  if (expected == actual) return "pass";
  return "fail";
};

console.log(test([1, 2, 3], 6));
console.log(test([1, 2, 2], 5));
console.log(test([1, -1, 2], 2));
console.log(test([-1, 1, -2], 1));
console.log(test([1, -2, 3], 3));
console.log(test([2, 3, -6, 4], 5));
console.log(test([2, 3, -1, 4], 8));
