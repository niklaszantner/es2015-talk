// ES 2015

function myFunction(x, y=3) {
  return [x, y];
}

myFunction(1, 2); // [1, 2]
myFunction(1); // [1, 3]
myFunction(); // [undefined, 3]
