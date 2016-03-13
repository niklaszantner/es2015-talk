// ES 2015

function findElement(array, predicate) {
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (predicate(element)) {
      return {element, index};
    }
  }
  return {element: undefined, index: -1};
}

let a = [7, 8, 9];
let {element, index} = findElement(a, x => x % 2 === 0); // element = 8, index = 1

let {index, element} = findElement(a, x => x % 2 === 0); // order does not matter :)
