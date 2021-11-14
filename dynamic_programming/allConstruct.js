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
