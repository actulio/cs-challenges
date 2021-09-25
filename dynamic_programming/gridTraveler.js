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
