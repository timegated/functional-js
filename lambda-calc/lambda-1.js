// Lambda calculus as a basis for computation with small function abstractions
const log = (input) => console.log(input);

const loud = (msg) => input => console.log(`${msg}: ${input}`);

const lambdaOne = x => y => x + y;

function lambdaOneFn (x) {
  return function (y) {
    return x + y;
  }
};

// console.log(lambdaOne(5)(1));
// console.log(lambdaOneFn(5)(2));

// Church Numerals
let zero = f => x => x;
let one = f => x => f(x);
let two = f => x => f(f(x));
let three = f => x => f(f(f(x)));

const toNumber = n => n(i => i + 1)(0);

// log(toNumber(three));
// log(toNumber(zero));
// loud('Some input here')(toNumber(two));


// Arithmetic

// Addition
const add = n => m => f => x => m(f)(n(f)(x));

const four = add(one)(three);

console.log(toNumber(four));
console.log(toNumber(add(three)(two)));

// Multiplication

const multiply = n => m => f => x => m(n(f))(x);

console.log(toNumber(multiply(four)(three)));
console.log(toNumber(multiply(three)(two)));

// Control Flow

const ifThenElse = bool => thn => els => bool(thn)(els);
const troo = thn => els => thn;
const falz = thn => els => els;

const tired = falz;

const coffeesToday = ifThenElse(tired)(three)(one);toNumber(coffeesToday);
console.log(toNumber(coffeesToday));

// Church Encoding
const toBoolean = bool => bool(true)(false);

console.log(typeof toBoolean(troo));
console.log(typeof toBoolean(falz));

const not = bool => thn => els => bool(els)(thn);

log(toBoolean(not(falz)));

const or = A => B => A(A)(B);
const and = A => B => A(B)(A);

console.log(toBoolean(or(falz)(falz)));
console.log(toBoolean(and(troo)(falz)));