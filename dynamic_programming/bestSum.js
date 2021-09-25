/**
 * @description Returns an array containing the shortest combination of numbers that add up exactly to targetSum
 * @param  {} targetSum
 * @param  {} arr
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

console.log(bestSum_memoized(100, [1, 2, 5, 25]));
