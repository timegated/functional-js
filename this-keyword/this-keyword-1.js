// this exists so we can invoke functions in different contexts
// This is the implicit binding
var someObj = {
  name: 'Some Name',
  ask: function (msg) {
    return `${msg}: ${this.name}`
  },
  askAgain: function() {
    return this.ask('This is a pre-ordained message:');
  }
};

console.log(someObj.ask('This is the message'));
console.log(someObj.askAgain());