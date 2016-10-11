var Renderer = Renderer || {};

Renderer = function(canvas, ctx) {
      this.pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      this.draw = function() {
        for(var y=0; y < this.pixels.height; y++) {
          for(var x=0; x < this.pixels.width; x++) {
            var i = (x + y * canvas.height) * 4;
            var r = this.pixels[i],
                g = this.pixels[i+1],
                b = this.pixels[i+2],
                a = this.pixels[i+3];
            var rgba = {r: r, g: g, b: b, a: a};
            console.log(rgba);
          }
        }
      }
}

Renderer.prototype = {

}
