let thesis = { name: 'Chris', date: 1935, dog: 'Ralph', randomNumber: 12345.3333 };

// Modifying object directly (potentially dangerous);
function renameThesis(newName) {
  thesis.name = newName;
  console.log(newName);
};

// Taking in the old state and returning a new state with the alterations
function createNewThesis(newName, newDog) {
  return {
    ...thesis,
    name: newName,
    dog: newDog,
  };
};

// renameThesis('Church');
// console.log(thesis);

console.log(createNewThesis('Dong', 'Cupcake'));
console.log(createNewThesis('Wong', 'Hotdog'));