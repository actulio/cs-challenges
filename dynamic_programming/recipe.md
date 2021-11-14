# Memoization Recipe

- First make it work and then make it efficient;
- Break down large problem into smaller instances;
- Visualize the problem as a tree;
- Implement the tree using recursion;
- Add a memo object and share amongst all recursive calls;
- Add a new base case to return memo values
- Store return values into the memo (change return values to saving to the memo before returning).

# Tabulation Recipe

- Visualize the problem as a table;
- Size the table based on the input;
- Initialize the table with default values;
- Seed the trivial answer into the table (for Fibonacci, `fib(0) = 0` and `fib(1) = 1`);
- Iterate through the table to fill further positions based on the current position (`fib(i) = fib(i+1) + fib(i+2)`).
