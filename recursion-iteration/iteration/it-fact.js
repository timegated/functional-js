// Factorials in an iterative way.
function itFact(n) {
  let product = 1;
  while (n > 0) {
      product *= n;
      n--;
  }
  return product;
};

console.log(itFact(20));