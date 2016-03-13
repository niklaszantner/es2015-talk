var squares = [1, 2, 3].map(function (x) {return x * x});

// ES 2015

let squares = [1, 2, 3].map(x => x * x);

let arrayOfObjects = [
  {id: 23, name: 'Foo'},
  {id: 42, name: 'Bar'}
];
let ids = arrayOfObjects.map(x => x.id); // [23, 42]
