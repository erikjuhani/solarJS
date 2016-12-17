Load(core);

window.onload = function(){
  window.Solar  = {};

  Solar.input   = InputController;
  Solar.display = Display;
  Solar.rect    = Rect;
  Solar.surface = Surface;
  Solar.clock   = Timer;
  Solar.vector  = Vector.vector2;

  //console.log(Solar);
};
