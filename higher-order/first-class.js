// A term used to describe functions in Javascript and other languages
// It means they can be passed around as values - much like primitives.

// formula is a function
const firstClass = (n, formula) => {
  return formula(n);
};

console.log(firstClass(10, (n) => n + 1));
console.log(firstClass(10, (n) => n - 1));
console.log(firstClass(10, (n) => n * 100));