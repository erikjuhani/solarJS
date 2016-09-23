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

var canvas = document.getElementById('gameWindow');
canvas.width = 1000;
canvas.height = 1000;
ctx = canvas.getContext('2d');

var keyboard = new InputController.keyboard();
var mouse    = new InputController.mouse();
var vector   = new Vector.vector2(250, 250);
var vector2  = new Vector.vector2(25, 50);
var square = [new Vector.vector2(230, 460), new Vector.vector2(270,460), new Vector.vector2(230,500), new Vector.vector2(270,500)];

console.log(vector.getPoint());
console.log(Math.convertRadians(vector.getAngle()));

var then     = Date.now();
var main = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var now = Date.now();
  var dt = (now - then) / 1000;

  if(keyboard.LEFT) {
    console.log(Math.HALF_PI);
  }
  if(keyboard.RIGHT) {
    console.log('RIGHT');
  }

  if(mouse.LEFT || mouse.MIDDLE || mouse.RIGHT) {
    var matrix = new Matrix().translate(250,250).rotate(1).translate(-250, -250);
    vector = matrix.apply(vector);
    for(var i = 0; i < square.length; i++) {
      square[i] = matrix.apply(square[i]);
    };
  }
  ctx.beginPath();
  ctx.moveTo(square[0].x,square[0].y);
  ctx.lineTo(square[1].x,square[1].y);
  ctx.lineTo(square[3].x,square[3].y);
  ctx.lineTo(square[2].x,square[2].y);
  ctx.lineTo(square[0].x,square[0].y);
  ctx.stroke();

  ctx.fillRect(vector.x, vector.y, 30, 30);

  then = now;

  requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

main()
