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
console.log(test([10, -2, -9, 5, -1, -11, 12], 12));
console.log(test([-2, -1], -1));
console.log(test([3, 1, -2, 3], 5));
console.log(test([2, 3, -6, 4], 5));
console.log(test([2, 3, -1, 4], 8));
console.log(test([], 0));
console.log(test([1], 1));
console.log(test([-1, -1], -1));
