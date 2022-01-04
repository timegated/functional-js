// Imperative, looping, stateful

function sum(numbers) {
  let total = 0;
  // i is global
  for (i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(sum([1, 2, 3, 4]));