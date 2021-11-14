/**
 * @description Returns an array containing any combination of elements that add up exactly to targetSum
 * @param  {number} targetSum
 * @param  {number[]} arr
 */
const howSum = (targetSum, arr) => {
  // (m, n = arr.length) => O(n^m * m) times m because of the linear array copy
  // space O(m)
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let val of arr) {
    const remainder = targetSum - val;
    const res = howSum(remainder, arr);
    if (res !== null) [...res, val];
  }
  return null;
};

const howSum_memoized = (targetSum, arr, memo = {}) => {
  // (m, n = arr.length) => O(n*m * m) times m because of the linear array copy
  // space O(m*m) every targetSum in the memo has an array
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let val of arr) {
    const remainder = targetSum - val;
    const res = howSum_memoized(remainder, arr);
    if (res !== null) {
      memo[targetSum] = [...res, val];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

const howSum_tabulated = (targetSum, arr) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i < targetSum; i++) {
    if (table[i]) {
      for (let num of arr) {
        table[i + num] = [...table[i], num];
      }
    }
  }
  return table[targetSum];
};

console.log(howSum_tabulated(7, [5, 3, 4, 7]));
