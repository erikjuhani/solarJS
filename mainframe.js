/*
*
* This is the mainframe for testing purposes.
*
*/

/*
*
* Disable the default context menu.
*
*/

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);

/*
var canvas = document.getElementById('gameWindow');
canvas.width = 500;
canvas.height = 500;
ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.fillStyle = '#cccccc';
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fill();
*/

var screen = new Display();
screen.init();
screen.set_size(800, 600);
console.log(screen);

var texture  = new Texture('https://mir-s3-cdn-cf.behance.net/project_modules/disp/0a7a9323462631.5632376426e94.jpg');
var keyboard = new InputController.keyboard();
var mouse    = new InputController.mouse();
var vector   = new Vector.vector2(150, 150);
var vec      = new Vector.vector2(250, 250);
var vector2  = new Vector.vector2(25, 50);
var counter  = new Counter();
var rect     = new Rect(vector, 40, 40);
var vp       = new Viewport();
var sl       = new SoundLib();
var pour     = new SoundLib.sound('pour', './sounds/pour.wav');
var water    = new SoundLib.sound('water', './sounds/water.wav');
var water2   = new SoundLib.sound('water2', './sounds/water.wav');
var square   = [new Vector.vector2(0, 0), new Vector.vector2(40,0), new Vector.vector2(0,40), new Vector.vector2(40,40)];
var blackSquare = new Surface(50, 50, 50, 50);
var background = new Surface(0, 0, screen.width, screen.height);
background.set_ctx(screen.get_ctx());
background.set_color([200, 150, 100, 255]);
blackSquare.set_ctx(screen.get_ctx());
blackSquare.set_color([0, 0, 0, 255]);
background.blit(blackSquare);
screen.blit(background);

//sl.loadDir('./sounds/pour.wav');
//water2.getBuffer();
console.log(water2);
sl.loadSound(water);
sl.loadSound(pour);
//pour.play(0.1);
//water.play(0.2, 11.757369995117188);
console.log(pour);
console.log(sl.sounds);

console.log(rect.top);
console.log(texture);
console.log(vector.get());
console.log(Math.toRadians(vector.getAngle()));
for(var i = 0; i < square.length; i++) {
  square[i] = new Matrix().translate(230, 230).apply(square[i]);
};

var testmatrix = new Matrix().translate(-250, -250).rotate(1).translate(250,250);
console.log(testmatrix);

console.log(vp);

console.log(screen);
var then = Date.now();
var main = function() {
  screen.update();
  var now = Date.now();
  var dt = (now - then) / 1000;
  counter.tick(dt);

  if(keyboard.LEFT) {
    console.log(Math.HALF_PI);
  }
  if(keyboard.RIGHT) {
    console.log('RIGHT');
  }

  if(mouse.LEFT || mouse.MIDDLE || mouse.RIGHT) {
    rect.pos = new Matrix().rotate(1).apply(rect.pos);
    for(var i = 0; i < square.length; i++) {
      square[i] = testmatrix.apply(square[i]);
      rect.points[i] = new Matrix().rotate(1).apply(rect.points[i]);
    };
  }
  rect.pos = testmatrix.apply(rect.pos);
  for(var i = 0; i < rect.points.length; i++) {
    rect.points[i] = testmatrix.apply(rect.points[i]);
  };

  screen.ctx.beginPath();
  screen.ctx.moveTo(square[0].x,square[0].y);
  screen.ctx.lineTo(square[1].x,square[1].y);
  screen.ctx.lineTo(square[3].x,square[3].y);
  screen.ctx.lineTo(square[2].x,square[2].y);
  screen.ctx.lineTo(square[0].x,square[0].y);
  screen.ctx.stroke();

  screen.ctx.beginPath();
  screen.ctx.moveTo(rect.points[0].x,rect.points[0].y);
  screen.ctx.lineTo(rect.points[1].x,rect.points[1].y);
  screen.ctx.lineTo(rect.points[2].x,rect.points[2].y);
  screen.ctx.lineTo(rect.points[3].x,rect.points[3].y);
  screen.ctx.lineTo(rect.points[0].x,rect.points[0].y);
  screen.ctx.stroke();

  screen.ctx.beginPath();
  screen.ctx.moveTo(rect.pos.x, rect.pos.y);
  screen.ctx.lineTo(250, 250);
  screen.ctx.stroke();

  then = now;

  requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

main()
