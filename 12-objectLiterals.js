var obj = Object.create(someObject);
obj.myMethod = function(arg1, arg2) {
  // ...
};


// ES 2015

let obj = {
  __proto__: someObject,

  myMethod(arg1, arg2) {
    // ...
  }
}
