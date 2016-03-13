// ES 2015

function* generatorFunction() {
  yield 0;
  yield 1;
  yield 2;
}

let myGenerator = generatorFunction();
console.log(myGenerator.next()); // { value: 0, done: false }
console.log(myGenerator.next()); // { value: 1, done: false }
console.log(myGenerator.next()); // { value: 2, done: false }
console.log(myGenerator.next()); // { value: undefined, done: true }


// function* can be used with return to return some value with the last next call
