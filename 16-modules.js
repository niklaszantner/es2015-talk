// ES 2015

// lib/math.js
let notExported = 'foobar';
export function mySquare(x) {
  return x * x;
}
export const MY_CONSTANT = 42;


// main1.js
import {mySquare} from 'lib/math';
console.log(mySquare(3));


// main2.js
import * from 'lib/math';
console.log(math.mySquare(3));


// rename import with `as` similar to Python
