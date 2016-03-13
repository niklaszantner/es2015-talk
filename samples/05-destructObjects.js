// ES 2015

let obj = {first: 'John', last: 'Doe'};

let {first: f, last: l} = obj;
console.log(f + ' ' + l); // John Doe


// property value shorthand for destruction
let obj = {first: 'John', last: 'Doe'};

let {first, last} = obj;
console.log(first + ' ' + last); // John Doe
