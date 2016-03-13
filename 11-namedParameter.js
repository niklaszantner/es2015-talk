// ES 2015

function myFunction(arg0, {opt1, opt2}) {
  return [opt1, opt2];
}
// {opt1, opt2} is identical to {opt1: opt1, opt2: opt2}

myFunction(0, {opt2: 'b', opt1: 'a'}); // ['a', 'b']
