// ES 2015

function myFunction(arg0, ...others) {
  return others;
}

myFunction(0, 1, 2, 3); // [1, 2, 3]
myFunction(0); // []
myFunction(); // []
