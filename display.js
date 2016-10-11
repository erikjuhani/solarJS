var Display = Display || {};

Display = function() {
      /*
      Create Canvas Element
      */
      //this.init();
}

Display.prototype = {
      init: function() {
        var canvas = document.createElement('canvas');
        canvas.id = 'displaySurface';
        this.id = canvas.id;
        this.ctx = canvas.getContext('2d');
        this.surface = new Surface();
        document.body.appendChild(canvas);
      },
      set_size: function(width, height) {
        if (this.get_init()) {
          var canvas = document.getElementById(this.id);
          this.surface.set_size(width, height);
          this.ctx = canvas.getContext('2d');
          this.surface.set_ctx(this.ctx);
          this.width = width;
          this.height = height;
          canvas.width = width;
          canvas.height = height;
        } else {
          console.error('DisplayError: cannot set size in set_size: function()');
        }
      },
      get_ctx: function() {
        return this.ctx;
      },
      get_init: function() {
        return this.id ? true : false;
      },
      update: function(surface) {
        var surface = surface || this.surface;
        if(surface) {
          this.clear();
          this.ctx.putImageData(this.surface.pixels, 0, 0);
        }
      },
      clear: function(surface) {
        this.ctx.clearRect(this.surface.rect.x, this.surface.rect.y, this.surface.width, this.surface.height);
      },
      blit: function(surface) {
        this.surface.blit(surface);
      }
}
