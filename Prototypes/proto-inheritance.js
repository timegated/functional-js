// constructor call makes an object its own prototype
// relationship implied by classes is a copy relationship

function CreateObj(name, action) {
  this.name = name;
  this.action = action;
};

// We can add methods directly to the objects prototype
// These methods run all the way up the chain now matter how many of these we create with new
CreateObj.prototype.ask = function (question) {
  return `${question} ${this.name}`
};
console.log(new CreateObj('Dirk', 'Runs').ask('This is the plumbing for the class keyword'));


// Same applies here
function WorkShop (teacher) {
  this.teacher = teacher;
}

// This is all part of JS's Behavior Delegation pattern
WorkShop.prototype.squareRoots = function (n) {
  return `Hey there! Here is the square root of ${n}: ${Math.round(Math.sqrt(n))}`;
};

const workOne = new WorkShop('Someone');

console.log(metaWorkOne);
console.log(workOne);
console.log(workOne.squareRoots(4))
console.log(workOne.squareRoots(6))
