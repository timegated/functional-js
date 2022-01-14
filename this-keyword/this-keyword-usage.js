// four different ways to use this

// dot calls obj.method()

// Implicit binding
function ask (msg) {
  return `${msg} ${this.name}`;
};

const someObj = {
  name: 'Name1',
  ask: ask,
};

const someObj2 = {
  name: 'Name2',
  ask: ask,
};

console.log(someObj.ask('Message 1'))
console.log(someObj2.ask('Message 2'));

console.log(ask.call(someObj, 'This is a message for someObj'));