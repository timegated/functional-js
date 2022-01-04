// Return the result of a number added to the previous number
function itFib(n) {
  let product = 1;
  while (n > 0) {
      product *= n;
      n--;
  }
  return product;
};

console.log(itFib(20));