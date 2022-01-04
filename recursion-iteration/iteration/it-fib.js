// More code less thinking, instructions are clear.
// Less abstract
function itFib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let current = 1;

  for (let i = n; i > 1; i--) {
    let next = prev + current;
    prev = current;
    current  = next;
  }
  
  return current;
};

console.time();
console.log(itFib(10));
console.timeEnd();