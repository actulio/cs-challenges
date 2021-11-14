/**
 * @description Common recursive Fibonacci function
 * @param  {number} n
 */
const fib_recursive = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

const fib_memoized = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib_memoized(n - 1, memo) + fib_memoized(n - 2, memo);
  return memo[n];
};

const fib_tabulated = (n) => {
  const table = Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  return table[n];
};
