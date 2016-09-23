// Unity matrix
var unmatrix = [1,0,0,  // x-axis
               0,1,0,  // y-axis
               0,0,1]; // -

// Translation matrix move the original position by movement values.
var tx = 2; // move by x-axis
var ty = 2; // move by y-axis
var trmatrix = [1,0,tx,
               0,1,ty,
               0,0,1];

// Scaling matrix, scale the original points by the scaling values.
var sx = 2; // scale by x-axis
var sy = 2; // scale by y-axis
var scmatrix = [sx,0,0,
               0,sy,0,
               0,0,1];

// Rotation matrix
var t = 90; // rotate by (t)heta angle
var rtmatrix = [Math.cos(t),-Math.sin(t),0, // This matrix is rotating ccw.
               Math.sin(t),Math.cos(t),0,
               0          ,0          ,1];

// Shearing matrix
var kx = 2; // shear in x-axis
var ky = 2; // shear in y-axis
var shmatrix = [1,kx,0,
               ky,1,0,
               0,0,1];

// Reflection matrix
var rfmatrix = [0,-1,0,  // reflection in x-axis
               -1,0,0,  // reflection in y-axis
               0,0,1];


var m = function(vector, matrix) {
  // d is how many dimensions
  var d  = 3

  // Make vector to work in 1x3 dimensions as [x, y, 1];
  var v1 = vector.getPoint();
  v1.push(1);

  var v2 = [];

  for(var i = 0; i < d; i++) {
    n = 0;
    for(var j = 0; j < d; j++) {
      n += v1[j] * matrix[j + i * d];
      // i=0, j=0,1,2; 5*1 + 5*0 + 5*2
    }
    v2.push(n);
  }

  v2.pop();
  return v2;
}

//

var v = m(new Vector.vector2(1,1), shmatrix);
var vec = new Vector.vector2(v[0], v[1]);
console.log(vec);

var Matrix = Matrix || {};

/*
* [a, b, tx,
*  c, d, ty,
*  0, 0, 1]
*/

Matrix = function(matrix) {
  // Create default/identity matrix
  this.identity()
  this.t = this.transform;
}

Matrix.prototype.identity = function() {
  this.a = 1, this.b = 0,
  this.c = 0, this.d = 1,
  this.tx = 0, this.ty = 0;

  return this;
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

Matrix.prototype.translaterrrrr = function(tx, ty) {
  this.tx = tx;
  this.ty = ty;

  return this;
}

Matrix.prototype.scale = function(sx, sy) {
  /*
  *  a, b, tx,    sx, 0, 0
  *  c, d, ty,    0, sy, 0
  *  0, 0,  1     0,  0, 1
  */
  this.a = sx;
  this.d = sy;
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

      /*
      *  a, b, tx,
      *  c, d, ty,
      *  0, 0,  1
      */

      self.a = a1 * a2 + b1 * c2;
      self.b = a1 * b2 + b1 * d2;
      self.c = c1 * a2 + d1 * c2;
      self.d = c1 * b2 + d1 * d2;

      self.tx = a1 * tx2 + b2 * ty2 + tx;
      self.ty = c1 * tx2 + d1 * ty2 + ty;

      return self;
}

Matrix.prototype.rotate = function(a) {
  a *= Math.PI / 180;
  var cos = Math.cos(a),
      sin = Math.sin(a);
  return this.t(cos, sin, -sin, cos, 0, 0);
}

Matrix.prototype.rotateFromVector = function(x, y) {
  return this.rotate(Math.atan2(y, x));
}

Matrix.prototype.translate = function(tx, ty) {
  return this.t(1, 0, 0, 1, tx, ty);
}

Matrix.prototype.rotaterrrrr = function(angle) {
  // Angle defaults to ccw, -angle cw

  angle *= Math.PI / 180;

  var cos = Math.floor(Math.cos(angle));
  var sin = Math.sin(angle);

  /*
  * cos,-sin, 0
  * sin, cos, 0
  *   0,   0, 1
  */

  var a1 = this.a;
  var b1 = this.b;
  var c1 = this.c;
  var d1 = this.d;
  var tx = this.tx;
  var ty = this.ty;

  this.a = cos * a1 + sin * b1; // + 0 * tx
  this.b = cos * b1 - sin * a1; // + 0 * tx
  this.c = cos * c1 + sin * d1; // + 0 * ty
  this.d = cos * d1 - sin * c1; // + 0 * ty

  this.tx = cos * tx - sin * ty; // + 0 * 1
  this.ty = sin * tx + cos * ty; // + 0 * 1

  return this;
}

Matrix.prototype.skew = function(sx, sy) {
  this.b *= sx;
  this.c *= sy;

  return this;
}

Matrix.prototype.reflect = function() {
  this.b *= -1;
  this.c *= -1;

  return this;
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

Matrix.multiply = function(vector, matrix) {
    // d is how many dimensions
    var d  = 3

    // Make vector to work in 1x3 dimensions as [x, y, 1];
    var v1 = vector.getPoint();
    v1.push(1);

    var v2 = [];

    for(var i = 0; i < d; i++) {
      n = 0;
      for(var j = 0; j < d; j++) {
        n += v1[j] * matrix[j + i * d];
      }
      v2.push(n);
    }

    v2.pop();
    return v2;
}
