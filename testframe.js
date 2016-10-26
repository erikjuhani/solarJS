var screen = new Display(),
    counter = new Counter();
    screen.init();
    screen.set_size(600, 600);

var Particle = function(pos, mass) {
    this.pos = pos || new Vector.vector2();
    this.mass = mass || 10;
}

var then = Date.now();
var main = function() {
  screen.update();
  var now = Date.now();
  var dt = (now - then) / 1000;
  counter.tick(dt);
  then = now;

  screen.ctx.beginPath();
  screen.ctx.arc(300, 300, 10, 0, Math.PI2);
  screen.ctx.fill();

  requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

main();
