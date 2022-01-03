let thesis = { name: 'Chris', date: 1935 };

// Modifying object directly (potentially dangerous);
function renameThesis(newName) {
  thesis.name = newName;
  console.log(newName);
};

// Taking in the old state and returning a new state with the alterations
function createNewThesis(oldThesis, newName) {
  return {
    name: newName,
    date: oldThesis.date,
  };
};

renameThesis('Church');
console.log(thesis);

console.log(createNewThesis(thesis, 'Dong'));