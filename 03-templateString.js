var eventName = 'Nutshell';
var out = 'Hello ' + eventName + ' audience\nFeel free to ask questions anytime.';
console.log(out);


// ES 2015

let eventName = 'Nutshell';
let out = `Hello ${eventName} audience
Feel free to ask questions anytime.`;

let rawString = raw`Escapes are \n ignored`;

let slug = '/2016/03/Next-Generation-JavaScript.html'
let parts = slug.match(XRegExp.rx`
    ^# match at start of string only
    / (?<year> [^/]+ ) # capture top dir as year
    / (?<month> [^/]+ ) # capture top subdir as month
    / (?<title> [^/]+ ) # file name base
    \.html? # file name extension .html or .html
    $ # end of string
  `);
console.log(parts.year);
