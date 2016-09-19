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

Matrix.translation = function(tx, ty) {
  var matrix = [1,0,tx,
                 0,1,ty,
                 0,0,1];
  return matrix;
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
