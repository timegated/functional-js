// Functions can also be created using the new keyword

const f = new Function('x', 'y', 'return x*y'); // Expects any number of string arguments

// Always creates an anonymous function
// Always scoped to the global level
// New function object each time this is invoked
console.log(f(4, 5));