// Break up a multi-arg function

function greet(greeting, name) {
  return `${greeting}, ${name}`;
};

function curryGreet(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  }
};

const greetItal = curryGreet('Ciao');
console.log(greetItal('Alonzo'));

const greetTex = curryGreet('Nice Shootin');

console.log(greetTex('Tex'));
console.log(greetTex('Alonzo'));