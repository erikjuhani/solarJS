var Surface = Surface || {};

Surface = function(x, y, width, height) {
      this.rect = new Rect(new Vector.vector2(x, y), width, height);
      this.width = width || 0;
      this.height = height || 0;
      this.pixels;
}

Surface.prototype = {
      blit: function(surface) {
        var yp = surface.rect.pos.y;
        var xp = surface.rect.pos.x;
        console.log(yp);

        for(var i=0; i < surface.pixels.length; i++) {
          this.pixels.data[i * ] = surface.pixels[i];
        }
        for(var y=0; y < surface.height; y++) {
          for(var x=0; x < surface.width; x++) {
            var i = (x + y * surface.width) * 4;
            this.pixels.data[i] = surface.pixels.data[i];
            this.pixels.data[i+1] = surface.pixels.data[i+1];
            this.pixels.data[i+2] = surface.pixels.data[i+2];
            this.pixels.data[i+3] = surface.pixels.data[i+3];
          }
        }
        this.ctx.putImageData(this.pixels, 0, 0);
      },
      set_color: function(rgba) { // rgba = {r: 0, g: 0, b: 0, a: 255}
        var rgba = rgba || [0, 0, 0, 255];
        for(var y=0; y < this.height; y++) {
          for(var x=0; x < this.width; x++) {
            var i = (x + y * this.width) * 4;
            this.pixels.data[i] = rgba[0];
            this.pixels.data[i+1] = rgba[1];
            this.pixels.data[i+2] = rgba[2];
            this.pixels.data[i+3] = rgba[3];
          }
        }
        this.ctx.putImageData(this.pixels, 0, 0);
      },
      get_rect: function() {
        return this.rect;
      },
      get_size: function() {
        return { width: this.rect.w, height: this.rect.h };
      },
      get_width: function() {
        return this.rect.w;
      },
      get_height: function() {
        return this.rect.h;
      },
      get_rect: function() {
        return this.rect;
      },
      set_size: function(width, height) {
        this.rect.set_size(width, height);
        this.width = this.rect.w;
        this.height = this.rect.h;
      },
      get_ctx: function() {
        if(this.ctx) return this.ctx;
      },
      set_ctx: function(ctx) {
        this.ctx = ctx;
        this.pixels = ctx.getImageData(this.rect.pos.x, this.rect.pos.y, this.width, this.height);
      }
}
