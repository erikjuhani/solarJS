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
canvas.width = 500;
canvas.height = 500;
ctx = canvas.getContext('2d');

var texture  = new Texture('https://mir-s3-cdn-cf.behance.net/project_modules/disp/0a7a9323462631.5632376426e94.jpg');
var keyboard = new InputController.keyboard();
var mouse    = new InputController.mouse();
var vector   = new Vector.vector2(150, 150);
var vec      = new Vector.vector2(250, 250);
var vector2  = new Vector.vector2(25, 50);
var square   = [new Vector.vector2(0, 0), new Vector.vector2(40,0), new Vector.vector2(0,40), new Vector.vector2(40,40)];

console.log(texture);
console.log(vector.getPoint());
console.log(Math.convertRadians(vector.getAngle()));
for(var i = 0; i < square.length; i++) {
  square[i] = new Matrix().translate(230, 230).apply(square[i]);
};
var matrix = new Matrix().translate(-250,-250).combine(new Matrix().rotate(1)).combine(new Matrix().translate(250,250));

var then   = Date.now();
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

  ctx.beginPath();
  ctx.moveTo(vector.x+15, vector.y+15);
  ctx.lineTo(250, 250);
  ctx.stroke();


  ctx.fillRect(vector.x, vector.y, 30, 30);

  then = now;

  requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

main()
