
/**
 * Takes in an array and a number (a selection) and returns 
 * @param {Array} array 
 * @param {number} number 
 * @returns {Array}
 */
function selection_sort(array, number) {
  var i, j; // counters
  var min; // index of minimum
  var temp;
  for (i = 0; i < number; i++) {
    min = i;
    for (j = i+1; j < number; j++) {
      if (array[j] < array[min]) min = j;
    }
    // Now Swap
    if (min != i) {
      temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
};

console.log(selection_sort([175, 65, 22,2, 3, 7, 8, 24, 45, 100], 200));
