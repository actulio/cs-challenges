/**
 * @description Returns an array containing any combination of elements that add up exactly to targetSum
 * @param  {} targetSum
 * @param  {} arr
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
