// More math functions
Math.toRadians = function(d) { return d * Math.toR; }
Math.toDegrees = function(r) { return r * Math.toD; }

Math.euclidean = function(pos0,pos1) {
  d1 = pos0.x - pos1.x;
  d2 = pos0.y - pos1.y;
  return Math.sqrt(d1*d1 + d2*d2);
}

Number.prototype.clamp = function(min, max) {
  return Math.max(Math.min(this, max), min);
  /*return this > max ? max : this < min ? min : this;*/
}

Math.manhattan = function(pos0,pos1) {
  d1 = Math.abs(pos0.x - pos1.x);
  d2 = Math.abs(pos0.y - pos2.y);
  return d1 + d2;
}

// Math constants
Math.HALF_PI      = Math.PI/2;
Math.PI2          = Math.PI*2;
Math.PY_CONST     = Math.sqrt(2);
Math.toD          = 180 / Math.PI;
Math.toR          = Math.PI / 180;
