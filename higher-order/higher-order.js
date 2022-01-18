// Functional map and reduce implementation
const map = function(a, ...args) {
  return a.map(...args);
};

const reduce = function(a, ...args) {
  return a.reduce(...args);
};

const sum = (x, y) => x + y;
const square = x => x * x;

// Takes a function argument and returns a new function
function not(f) { // We pass even in as a parameter
  // Anonymous return function
  return function (...args) {
    let result = f.apply(this, args);
    return !result;
  };
};

const even = x => x % 2 === 0;
const odd = not(even);
console.log([1,2,3,4,5,6].every(odd));

// Mapper
function mapper(f) {
  return a => map(a, f);
};

const increment1 = x => x + 1;
const incrementAll = mapper(increment1);

console.log(incrementAll([1,2,3]));

// Composition
function compose(f,g) {
  return function(...args) {
    return f.call(this, g.apply(this, args));
  }
};

console.log('COMPOSE', compose(square, sum)(2,3))

// Partial Application
function partialLeft(f, ...outerArgs) {
  return function (...innerArgs) {
    let args = [...outerArgs, ...innerArgs];

    return f.apply(this, args);
  };
};

function partialRight(f, ...outerArgs) {
  return function (...innerArgs) {
    let args = [...innerArgs, ...outerArgs];

    return f.apply(this, args);
  }
}

function partial (f, ...outerArgs) {
  return function (...innerArgs) {
    let args = [...outerArgs];

    let innerIndex = 0;

    for(let i = 0; i < args.length; i++) {
      if (args[i] === undefined) args[i] = innerArgs[innerIndex];
      args.push(...innerArgs.slice(innerIndex));
      return f.apply(this, args);
    }
  };
};

const f = function(x,y,z) { 
  return x * (y - z);
};

console.log(
  partialLeft(f, 2)(3, 4),
  partialRight(f, 2)(3, 4),
  partial(f, undefined, 2)(3, 4)
);



// Example

const increment2 = partialLeft(sum, 1);
const cubeRoot = partialRight(Math.pow, 1/3);

console.log('CUBEROOT', cubeRoot(increment2(26)));
