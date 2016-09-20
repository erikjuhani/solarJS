// More math functions
Math.convertDegrees = function(degrees) {
  return degrees * Math.radPerDegree;
}

Math.convertRadians = function(radians) {
  return radians * Math.degPerRadian;
}

Math.HALF_PI = Math.PI/2;
Math.TWO_PI  = Math.PI*2;
Math.degPerRadian = 180 / Math.PI;
Math.radPerDegree = Math.PI / 180;
