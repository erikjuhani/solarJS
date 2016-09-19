var Timer = Timer || {};

Timer.clock = function() {
  this.previousTime = Date.now();
}

Timer.clock.tick = function() {
  var currentTime = Date.now();
  var dt = (currentTime - this.previousTime)/1000;
  this.previousTime = currentTime;
}
