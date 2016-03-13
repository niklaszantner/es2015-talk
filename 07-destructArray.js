// ES 2015

let [x, y] = ['a', 'b']; // x='a', y='b'

let [first, second, ...rest] = ['a', 'b', 'c', 'd']; // first='a', second='b', rest = ['c', 'd']

[x, y] = [y, x]; // swap like a pro ;)

let [all, year, month, day] = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('2016-03-09');
