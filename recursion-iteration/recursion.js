// Functional, self-referential, stateless

function sum(numbers) {
  // base case
  if (numbers.length === 1) {
    return numbers[0];
  }

  // recursive case
  return numbers[0] + sum(numbers.slice(1));
}

// What happens when we run into really large arrays?
console.log(sum([0, 1, 2, 3, 4]));