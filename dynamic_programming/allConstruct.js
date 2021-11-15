/**
 * @description Returns a 2D array containing all of the ways that target can be constructed with wordBank
 * @param  {string} target
 * @param  {string} wordBank
 */
const allConstruct = (target, wordBank) => {
  if (target === "") return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const rest = target.slice(word.length);
      const restWays = allConstruct(rest, wordBank);
      const targetWays = restWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }

  return result;
};

const allConstruct_tabulated = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCandidate = table[i].map((subArr) => [...subArr, word]);
        table[i + word.length].push(...newCandidate);
      }
    }
  }
  return table[target.length];
};

console.log(
  allConstruct_tabulated("abcdef", ["ab", "abc", "cd", "def", "abcd"])
);
