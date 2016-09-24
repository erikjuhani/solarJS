var Texture = Texture || {};

Texture = function(src) {
  this.image = new Image();
  this.image.src = src;
  this.height = this.image.height;
  this.width  = this.image.width;
}
