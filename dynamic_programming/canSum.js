/**
 * @description Calculate if positive numbers inside given array can sum to targetSum
 * @param  {} targetSum
 * @param  {} arr
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
