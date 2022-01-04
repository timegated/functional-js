// How do optimize this to handle large values?
// We could do memoization OR tail call optimization
function recFib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Double recursive call
  return recFib(n - 2) + recFib(n - 1);
};

// console.time();
// console.log(recFib(40));
// console.timeEnd();

// Memoized
const recFibMem = (function () {
  let memo = [0, 1];

  const fib = function (n) {
    let result = memo[n];

    // console.log({ result });

    if (typeof result !== 'number') {
      result = recFibMem(n - 2) + recFibMem(n - 1);
      memo[n] = result;
    }

    // Double recursive call
    return result;
  };

  return fib;
})();

// console.time();
// console.log(recFibMem(40));
// console.timeEnd();


// Memoizer

const memoizer = function (memo, formula) {
  console.log({ formula });
  console.log({ memo });

  let recur = function (n) {
    let result = memo[n];

    if (typeof result !== 'number') {
      result = formula(recur, n);
      memo[n] = result;
    }

    return result;
  };
  return recur;
};

// No all we need to do is supply whatever formula we need to operate on some data.
const fibMemo = memoizer([0, 1], function fiboNacho(recur, n) {
  return recur(n - 1) + recur(n - 2);
});

const factorial = memoizer([1,1], function factorial(recur, n) {
  return n * recur(n - 1);
});

// We've abstracted away the work of creating individual recursive functions per use-case and
// instead have a function that produces memoized functions based on whatever formula we supply.
console.time();
console.log(factorial(10));
console.timeEnd();