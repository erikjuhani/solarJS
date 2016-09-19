// Unity matrix
var umatrix = [1,0,0,  // x-axis
               0,1,0,  // y-axis
               0,0,1]; // -

// Translation matrix move the original position by movement values.
var tx = 2; // move by x-axis
var ty = 2; // move by y-axis
var tmatrix = [1,0,tx,
               0,1,ty,
               0,0,1];

// Scaling matrix, scale the original points by the scaling values.
var sx = 2; // scale by x-axis
var sy = 2; // scale by y-axis
var smatrix = [sx,0,0,
               0,sy,0,
               0,0,1];

// Rotation matrix
var t = 35; // rotate by (t)heta angle
var smatrix = [Math.cos(t),-Math.sin(t),0, // This matrix is rotating ccw.
               Math.sin(t),Math.cos(t),0,
               0          ,0          ,1];

// Shearing matrix
var kx = 2; // shear in x-axis
var ky = 2; // shear in y-axis
var smatrix = [1,kx,0,
               ky,1,0,
               0,0,1];

// Reflection matrix
var rmatrix = [0,1,0,  // reflection in x-axis
               1,0,0,  // reflection in y-axis
               0,0,1];
