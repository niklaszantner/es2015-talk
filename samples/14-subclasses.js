function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString() {
  return '(' + this.x + ', ' + this.y + ')';
}

function ColorPoint(x, y, color) {
  Point.call(this, x, y);
  this.color = color;
}
ColorPoint.prototype = Object.create(Point.prototype);
ColorPoint.prototype.constructor = ColorPoint;
ColorPoint.prototype.toString = function() {
  return this.color + ' ' + Point.prototype.toString.call(this);
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

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y)
    this.color = color;
  }

  toString() {
    return `${this.color} ${this.super()}`;
  }
}
