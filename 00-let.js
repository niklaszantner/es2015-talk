var x = 'foo';

while (true) {
  var x = 'bar'
  console.log(x); // bar
  break;
}

console.log(x); // bar


// ES 2015

let x = 'foo';

while (true) {
  let x = 'bar'
  console.log(x); // bar
  break;
}

console.log(x); // foo

// let prevents hoisting
// duplicate declaration of same variable with let in same block not possible
// use const to declare constants (immutable) with semantics of let
