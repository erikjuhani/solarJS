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
var then     = Date.now();

var main = function() {
  var now = Date.now();
  var dt = (now - then) / 1000;

  if(mouse.LEFT || mouse.MIDDLE || mouse.RIGHT) {
    console.log(mouse.get_pressed());
  }

  then = now;

  requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

main()
