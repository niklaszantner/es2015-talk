function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString() {
  return '(' + this.x + ', ' + this.y + ')';
}


// ES 2015

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}
