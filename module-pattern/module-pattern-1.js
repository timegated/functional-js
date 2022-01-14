// AKA name space pattern, collecting functionality.


// Not a module, missing concept of encapsulation
var workShop = {
  teacher: 'Name',
  ask (question) {
    return console.log(this.teacher, question);
  },
};

console.log(workShop.ask('Is this a module?'));

// Module pattern encapsulates data with closure

// We can't access teacher
var workShopper = (function Module(teacher) {
  var publicAPI = {ask, };
  return publicAPI;

  // ********

  function ask(question) {
    console.log(teacher, question);
  };
})('Kyle');

// We can only access ask.
workShopper.ask('This is a module');