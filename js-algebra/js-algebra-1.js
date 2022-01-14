// Linear Equations
function linearOne (x, set) {
  if (x <= 0) return;
  if (typeof x !== 'number') throw new Error('x must be a number');
  let result = linearOne(x - 1) * linearOne(x - 1) + 4;
  var err = new Error('result was not recognized as a number');

  return Number.isNaN(result) ? err : result;
};

// console.log(linearOne(10));

function solutionSet(n = Math.floor(Math.random * 10)) {
  if (n === 0) return 1;

  return n + solutionSet(n - 1);
};


console.log(solutionSet());
