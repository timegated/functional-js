// Pure functions
// input  --> output

// Impure function
let someName = "Al";

function greet() {
  console.log(`Hello ${someName}`);
}

greet();

someName = "Alan";

greet();


// Pure
// deterministic units
function greet2(name) {
  console.log(`Hello ${name}`);
}

greet2('Dork');
greet2(null);