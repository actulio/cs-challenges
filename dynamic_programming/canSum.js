/**
 * @description Calculate if positive numbers inside given array can sum to targetSum
 * @param  {string} targetSum
 * @param  {string[]} arr
 */
const canSum = (targetSum, arr) => {
  // (m, n = arr.length) => O(n^m)
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let val of arr) {
    const remainder = targetSum - val;
    if (canSum(remainder, arr)) return true;
  }
  return false;
};

const canSum_memoized = (targetSum, arr, memo = {}) => {
  // (m, n = arr.length) => O(m*n)
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let val of arr) {
    const remainder = targetSum - val;
    if (canSum_memoized(remainder, arr, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

const canSum_tabulated = (targetSum, arr) => {
  const table = Array(targetSum).fill(false);
  table[0] = true; // trivial case

  for (let i = 0; i < targetSum; i++) {
    if (table[i]) {
      for (let num of arr) {
        table[i + num] = true;
      }
    }
  }
  return table[targetSum];
};
