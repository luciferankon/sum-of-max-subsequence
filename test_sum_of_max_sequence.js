const { findSumOfMaxSubSequence } = require("./sum_of_max_sequence");

const test = function(numbers, expected) {
  const actual = findSumOfMaxSubSequence(numbers);
  if (expected == actual) return "pass";
  return "fail";
};

console.log(test([1, 2, 3], 6));
console.log(test([1, 2, 2], 5));
console.log(test([1, -1, 2], 2));
console.log(test([-1, 1, -2], 1));
console.log(test([1, -2, 3], 3));
