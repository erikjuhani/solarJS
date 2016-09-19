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

var keyboard = new InputController.keyboard();
var mouse    = new InputController.mouse();
var vector   = new Vector.vector2(5, 3);
var trmatrix = new Matrix.translation(2, 2);

var then     = Date.now();
var main = function() {
  var now = Date.now();
  var dt = (now - then) / 1000;

  if(keyboard.LEFT) {
    console.log('LEFT');
  }
  if(keyboard.RIGHT) {
    console.log('RIGHT');
  }

  if(mouse.LEFT || mouse.MIDDLE || mouse.RIGHT) {
    console.log(mouse.get_pressed());
    var product  = Matrix.multiply(vector, trmatrix);
    vector       = new Vector.vector2(product[0], product[1]);
    console.log(vector.getPoint());
  }

  then = now;

  requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

main()
