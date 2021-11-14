/**
 * @description Returns an array containing the shortest combination of numbers that add up exactly to targetSum
 * @param  {number} targetSum
 * @param  {number[]} arr
 */
const bestSum = (targetSum, arr) => {
  // (m, n = arr.length), time O(n^m * m) branching factor * height of tree * sizeOfArray
  // space O(m * m), stored array
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortest = null;

  for (let val of arr) {
    // branching factor
    const remainder = targetSum - val;
    const res = bestSum(remainder, arr);
    if (res !== null) {
      const combination = [...res, val];
      if (shortest.length === null || combination.length < shortest.length) {
        shortest = combination;
      }
    }
  }
  return shortest;
};

const bestSum_memoized = (targetSum, arr, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortest = null;

  for (let val of arr) {
    // branching factor
    const remainder = targetSum - val;
    const res = bestSum_memoized(remainder, arr, memo);
    if (res !== null) {
      const combination = [...res, val];
      if (shortest === null || combination.length < shortest.length) {
        shortest = combination;
      }
    }
  }

  memo[targetSum] = shortest;
  return shortest;
};

const bestSum_tabulated = (targetSum, arr) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i]) {
      for (let num of arr) {
        const candidate = [...table[i], num];
        if (!table[i + num] || table[i + num].length > candidate.length) {
          table[i + num] = candidate;
        }
      }
    }
  }
  return table[targetSum];
};

console.log(bestSum_tabulated(100, [1, 2, 5, 25]));
