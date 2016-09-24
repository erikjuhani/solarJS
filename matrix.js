var Matrix = Matrix || {};

/*
*  a, b, tx,
*  c, d, ty,
*  0, 0,  1
*/

Matrix = function() {
  // Create default/identity matrix
  this.a = 1,
  this.b = 0,
  this.c = 0,
  this.d = 1,
  this.tx = 0,
  this.ty = 0;
  this.t = this.transform;
}

Matrix.prototype.combine = function(matrix) {
  var a1 = this.a;
  var b1 = this.b;
  var c1 = this.c;
  var d1 = this.d;
  var tx1 = this.tx;
  var ty1 = this.ty;

  this.a = matrix.a * a1 + matrix.b * c1; // + matrix.tx * 0
  this.b = matrix.a * b1 + matrix.b * d1; // + matrix.tx * 0
  this.c = matrix.c * a1 + matrix.d * c1; // + matrix.ty * 0
  this.d = matrix.c * b1 + matrix.d * d1; // + matrix.ty * 0

  this.tx = matrix.a * tx1 + matrix.b * ty1 + matrix.tx; // * 1
  this.ty = matrix.c * tx1 + matrix.d * ty1 + matrix.ty; // * 1

  return this;
}

Matrix.prototype.transform = function(a2, b2, c2, d2, tx2, ty2) {
  var self = this,
        a1 = self.a,
        b1 = self.b,
        c1 = self.c,
        d1 = self.d,
        tx = self.tx,
        ty = self.ty;

      self.a = a1 * a2 + b1 * c2;
      self.b = a1 * b2 + b1 * d2;
      self.c = c1 * a2 + d1 * c2;
      self.d = c1 * b2 + d1 * d2;

      self.tx = a1 * tx2 + b2 * ty2 + tx;
      self.ty = c1 * tx2 + d1 * ty2 + ty;

      return self;
}

Matrix.prototype.identity = function() {
  return this.t(1,0,0,1,0,0);
}

Matrix.prototype.translate = function(tx, ty) {
  return this.t(1, 0, 0, 1, tx, ty);
}

Matrix.prototype.scale = function(sx, sy) {
  return this.t(sx, 0, 0, sy, 0, 0);
}

Matrix.prototype.rotate = function(a) {
  a *= Math.PI / 180;
  var cos = Math.cos(a),
      sin = Math.sin(a);
  return this.t(cos, sin, -sin, cos, 0, 0);
}

Matrix.prototype.shear = function(sx, sy) {
  return this.t(1, sx, sy, 1, 0, 0);
}

Matrix.prototype.reflect = function() {
  return this.t(-1, 0, 0, -1, 0, 0);
}

Matrix.prototype.apply = function(vector) {

  /*
  * x     a, b, tx
  * y     c, d, ty
  * 1     0, 0,  1
  */

  var x = vector.x;
  var y = vector.y;

  var a1 = this.a;
  var b1 = this.b;
  var c1 = this.c;
  var d1 = this.d;

  var x1 = x*a1 + y*b1 + this.tx;
  var y1 = x*c1 + y*d1 + this.ty;

  return new Vector.vector2(x1, y1);
}
