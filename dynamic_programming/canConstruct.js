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

const canConstruct_tabulated = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true; // the empty string can always be generated

  for (let i = 0; i <= target.length; i++) {
    if (!table[i]) continue;

    for (let word of wordBank) {
      // if the word matches the characters starting at position "i"
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] = true;
      }
    }
  }
  return table[target.length];
};

console.log(
  canConstruct_tabulated("abcdef", ["ab", "abc", "cd", "def", "abcd"])
);
