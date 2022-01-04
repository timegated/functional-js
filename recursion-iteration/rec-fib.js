
function recFib(n) {
  if (n === 0) return 1;
  return n * recFib(n - 1);
};

console.log(recFib(20));