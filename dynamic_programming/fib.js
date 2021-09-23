/**
 * @param  {} n
 * @description Common recursive Fibonacci function
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
