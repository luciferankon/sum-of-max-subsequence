const add = (a, b) => a + b;

const findMaxSumOfSeq = numbers => {
  let currentSum = 0;
  let maxSequenceSum = numbers.reduce(add, 0);

  numbers.forEach(number => {
    currentSum = currentSum + number;
    if (currentSum > maxSequenceSum) maxSequenceSum = currentSum;
    if (currentSum < 0) currentSum = 0;
  });

  return maxSequenceSum;
};

const findSumOfMaxSubSequence = numbers => {
  const forwardSum = findMaxSumOfSeq(numbers);
  const backwardSum = findMaxSumOfSeq(numbers.reverse());
  return forwardSum > backwardSum ? forwardSum : backwardSum;
};

exports.findSumOfMaxSequence = findSumOfMaxSubSequence;