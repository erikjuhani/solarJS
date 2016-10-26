var Rect = Rect || {};

Rect = function(pos, width, height)
{
      /**
      * @default 0, 0
      */
      this.pos = pos || new Vector.vector2();

      /**
      * @default 0
      */
      this.w = width || 0;

      /**
      * @default 0
      */
      this.h = height || 0;

      /**
      * @default 0, 0, 0, 0
      */
      this.points = [this.pos, new Vector.vector2(), new Vector.vector2(), new Vector.vector2()];
      this.setPoints();

      this.left = this.pos.x;
      this.top  = this.pos.y;
      this.right = this.pos.x + this.w;
      this.bottom = this.pos.y + this.h;
}

Rect.prototype = {

      left: function() {
        return this.pos;
      },
      right: function() {
        return this.pos;
      },
      bottom: function() {
        return this.pos
      },

      set_size: function(width, height) {
        this.w = width;
        this.h = height;
      },
      setPoints: function() {
        var x = this.pos.x,
            y = this.pos.y;
        this.points[0].set(x, y);
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
