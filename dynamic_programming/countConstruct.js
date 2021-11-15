/**
 * @description Returns the total number of ways target can be constructed by concatenating elements of wordBank
 * @param  {string} target
 * @param  {string[]} wordBank
 */
const countConstruct = (target, wordBank) => {
  if (target === "") return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const rest = target.slice(word.length);
      const nWays = countConstruct(rest, wordBank);
      totalCount += nWays;
    }
  }
  return totalCount;
};

const countConstruct_memoized = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const rest = target.slice(word.length);
      const nWays = countConstruct(rest, wordBank, memo);
      totalCount += nWays;
    }
  }
  memo[target] = totalCount;
  return totalCount;
};

const countConstruct_tabulated = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i];
      }
    }
  }
  return table[target.length];
};

console.log(
  countConstruct_tabulated("abcdef", ["ab", "abc", "cd", "def", "abcd"])
);
