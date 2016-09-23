var Vector = Vector || {};

Vector.vector2 = function(x, y) {
  this.setPoint(x, y);
}

Vector.vector2.prototype.getPoint = function() {
  return this.point;
}

Vector.vector2.prototype.setPoint = function(x, y) {
  // Make a base vector with values (1, 1) if no units are given
  if ((x == 0 || x == null) && (y == 0 || y == null)) x = 1, y = 1;
  this.point = [x, y];
  this.x = x;
  this.y = y;
}

Vector.vector2.prototype.getLength = function() {
  x = this.x;
  y = this.y;
  return Math.sqrt(x*x + y*y);
}

Vector.vector2.prototype.setAngle = function(angle)
{
  var length = this.getLength();
  this.x = Math.cos(angle) * length;
  this.y = Math.sin(angle) * length;
}

Vector.vector2.prototype.getAngle = function() {
  return Math.atan2(this.x, this.y);
}

Vector.vector2.prototype.getUnitVector = function() {
  var length = this.getLength();
  return new Vector.vector2(this.x/length, this.y/length);
}

Vector.vector2.prototype.add = function(v2) {
  return new Vector.vector2(this.x + v2.x, this.y + v2.y)
}


/*
class Vector2f {
  constructor(x, y) {
    this.setPos(x, y);
  }

  setX(x) {
    this._x = x;
  }

  setY(y) {
    this._y = y;
  }

  setPos(x, y) {
    this._x = x;
    this._y = y;
  }

  setAngle(angle) {
    var length = this.getLength();
    this._x = Math.cos(angle) * length;
    this._y = Math.sin(angle) * length;
  }

  setLength(length) {
    var angle = this.getAngle();
    this._x = Math.cos(angle) * length;
    this._y = Math.sin(angle) * length;
  }

  getX() {
    return this._x;
  }

  getY() {
    return this._y;
  }

  getPos() {
    return [this._x, this._y];
  }

  getLength() {
    x = this._x;
    y = this._y;
    return Math.sqrt(x*x + y*y);
  }

  getAngle() {
    return Math.atan2(this._x, this._y);
  }

  getUnitVector() {
    var length = this.getLength();
    return new Vector2f(this._x/length, this._y/length);
  }

  add(v2) {
    return new Vector2f(this._x+v2.getX(), this._y+v2.getY());
  }

  subtract(v2) {
    return new Vector2f(this._x-v2.getX(), this._y-v2.getY());
  }

  scale(value) {
    return new Vector2f(this._x*value, this._y*value);
  }

  divide(value) {
    return new Vector2f(this._x/value, this._y/value);
  }
}
*/
