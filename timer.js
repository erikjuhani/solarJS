var Timer = Timer || {};

Timer.clock = function() {
  this.previousTime = Date.now();
}

Timer.clock.tick = function() {
  var currentTime = Date.now();
  var dt = (currentTime - this.previousTime)/1000;
  this.previousTime = currentTime;
}

var Counter = Counter || {};

Counter = function(m) {
  this.time = 0;
  this.m = m;
  this.t = 0;
}

Counter.prototype.tick = function(dt) {
  this.time += dt * 1000;
  if(this.time > this.m) {
    this.t++;
    this.reset();
  }
}

Counter.prototype.reset = function() {
  this.time = 0;
}

Counter.prototype.resetAll = function() {
  this.time = 0;
  this.t = 0;
}
