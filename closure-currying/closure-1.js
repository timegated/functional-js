// Closure

function someClosure(param1) {
  if (typeof param1 !== 'number') throw new Error('Parameter needs to be a number');
  return function someOther(param2) {
    if (typeof param2 !== 'number') throw new Error('Parameter needs to be a number');
    return param1 + param2;
  };
};

const makeAdjectifier = (adjective) => {
  return (noun) => {
    return adjective + " " + noun;
  }
};

const coolify = makeAdjectifier('cool'); // Cool never changes in this declaration and remembered in subseqeuent calls.
const doSomething = someClosure(1);

console.log(doSomething(4));
console.log(doSomething(5));

console.log(coolify('workshop'));
console.log(coolify('drink'));