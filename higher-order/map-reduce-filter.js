// Map, reduce, and filter allow us to think about processing data with functions instead of loops.

// Map
// returns a new array
const array1 = [1, 2, 3, 4, 5];

console.log(array1.map(item => {
  console.log({ item });
  return item + 2
}));

// Filter
// returns a new array
console.log(array1.filter(item => {
  console.log({ item });
  return item !== 1;
}));

// Reduce
// returns a single value
console.log(array1.reduce((item, acc) => {
  console.log({ item, acc });
  return item + acc;
}));


// Implementations of map, reduce, filter.
// Functional API
// My own noob impl.
const map = (array, func) => {
  if (array.length === 0 && Array.isArray(array)) return [];
  const copy = []
  for (let i = 0; i < array.length; i++) {
    copy.push(func(array[i]));
  }
  return copy;
};

console.log(map([1, 2, 3], (item) => item + 5));

// Helper functions
const head = () => {

};

const tail = () => {

};

const concat = () => {

};

// Filtering
const filter = (predicateFn, array) => {
  if (length(array) === 0) return [];
  const firstItem = head(array);
  const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
  return concat(filteredFirst, filter(predicateFn, tail(array)));
};

// Reducing
const reduce = () => {

};