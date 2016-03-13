// ES 2015

function* iterEntries(object) {
  let keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    yield [key, object[key]];
  }
}

let myObject = {foo: 3, bar: 7};
for (let  [key, value] of iterEntries(myObject)) {
  console.log(key, value);
}
