const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 && n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

const gridTraveler_memoized = (m, n, memo = {}) => {
  const key = `${m},${n}`;

  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 && n === 0) return 0;

  memo[key] =
    gridTraveler_memoized(m - 1, n, memo) +
    gridTraveler_memoized(m, n - 1, memo);
  return memo[key];
};

const gridTraveler_tabulated = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  if (m < 1 || n < 1) return 0;
  table[1][1] = 1; // trivial case

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const curr = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += curr;
      if (i + 1 <= m) table[i + 1][j] += curr;
    }
  }

  return table[m][n];
};
