var Rect = Rect || {};

Rect = function(pos, width, height)
{
      /**
      * @default 0, 0
      */
      this.pos = pos || new Vector.vector2();

      /**
      * @default 1
      */
      this.w = width || 1;

      /**
      * @default 1
      */
      this.h = height || 1;

      /**
      * @default 0, 0, 0, 0
      */
      this.points = [this.pos.clone(), new Vector.vector2(), new Vector.vector2(), new Vector.vector2()];
}

Rect.prototype = {
      top: function() {
        return this.pos.y
      },
      left: function() {
        return this.pos.x;
      },
      right: function() {
        return this.pos.x + this.w;
      },
      bottom: function() {
        return this.pos.y + this.h;
      },

      set_size: function(width, height) {
        this.w = width;
        this.h = height;
      },
      setPoints: function() {
        var x = this.pos.x,
            y = this.pos.y;
        this.points[0].set(this.top(), this.left());
        this.points[1].set(x + this.w, y);
        this.points[2].set(x + this.w, y + this.h);
        this.points[3].set(x, y + this.h);
      },

      // For any update functions
      updatePoints: function() {
        var x = this.pos.x,
            y = this.pos.y;
        this.points[0].set(x, y);
        this.points[1].set(x + this.w, y);
        this.points[2].set(x + this.w, y + this.h);
        this.points[3].set(x, y + this.h);
      },

      draw: function(surface) {
        for(var y=0; y < this.h; y++) {
          for(var x=0; x < this.w; x++) {
            return;
          }
        }
      }

}
