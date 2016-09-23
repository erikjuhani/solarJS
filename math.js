// More math functions
Math.convertDegrees = function(degrees) {
  return degrees * Math.radPerDegree;
}

Math.convertRadians = function(radians) {
  return radians * Math.degPerRadian;
}

Math.euclidean = function(pos0,pos1) {
  d1 = pos0.x - pos1.x;
  d2 = pos0.y - pos1.y;
  return Math.sqrt(d1*d1 + d2*d2);
}

Math.manhattan = function(pos0,pos1) {
  d1 = Math.abs(pos0.x - pos1.x);
  d2 = Math.abs(pos0.y - pos2.y);
  return d1 + d2;
}

// Math constants
Math.HALF_PI      = Math.PI/2;
Math.PI2          = Math.PI*2;
Math.degPerRadian = 180 / Math.PI;
Math.radPerDegree = Math.PI / 180;
Math.PY_CONST     = Math.sqrt(2);
