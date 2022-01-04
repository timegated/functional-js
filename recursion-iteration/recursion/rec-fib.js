function recFib (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return recFib(n - 2) + recFib(n - 1);
};

console.time();
console.log(recFib(40));
console.timeEnd();