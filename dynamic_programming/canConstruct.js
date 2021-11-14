/**
 * @description Returns a boolean indicating whether or not the target can be constructed by concatenating elements of wordBank
 * @param {string} target
 * @param {string[]} wordBank
 */
const canConstruct = (target, wordBank) => {
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      // is it a prefix?
      const rest = target.slice(word.length); // rest = target - prefix
      if (canConstruct(rest, wordBank) === true) return true;
    }
  }
  return false;
};

const canConstruct_memoized = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      // is it a prefix?
      const rest = target.slice(word.length); // rest = target - prefix
      if (canConstruct(rest, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
      return true;
    }
  }

  memo[target] = false;
  return false;
};
