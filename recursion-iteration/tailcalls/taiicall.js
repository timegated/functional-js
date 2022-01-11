// Tail recursive functions
// Proper Tail Calls, introduced in 2015
// In certain engines (Safari) we can take advantage of this
// In something like Haskell this is already built in.

function recFib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Double recursive call
  return recFib(n - 2) + recFib(n - 1);
};