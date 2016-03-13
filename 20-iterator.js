// ES 2015

let fruits = ['Apple', 'Banana', 'Orange'];
for (let fruit of fruits) {
  console.log(fruit);
}

let fruits = ['Apple', 'Banana', 'Orange'];
for (let [index, fruit] of fruits.entries()) {
  console.log(index, fruit);
}

// iterator is implemented by Arrays, Maps and Sets
// WeakMap and WeakSet have no iterators
