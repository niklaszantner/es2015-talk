// ES 2015

// Sets
let s = new Set();
s.add('ONE').add('LOGIC').add('ONE');
s.size === 2;
s.has('ONE') === true;

// Maps
let m = new Map();
m.set('DATA', 42);
m.set(s, 34);
m.get(s) === 34; // true

// Weak Maps
let wm = new WeakMap();
wm.set(s, {extra: 42});
wm.size === undefined; // size() is not defined

// Weak Sets
let ws = new WeakSet();
ws.add(s);
ws.add({data: 42});


// Weak* are not enumerable
// items in Weak* can be garbage collected
