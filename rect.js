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
      this.points = [new Vector.vector2(), new Vector.vector2(),
                     new Vector.vector2(), new Vector.vector2()];
      this.setPoints();

      this.left = this.pos.x;
      this.top  = this.pos.y;
      this.right = this.pos.x + this.w;
      this.bottom = this.pos.y + this.h;
}

Rect.prototype = {

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

      draw: function(data) {
        for(var i = 0; i < this.h; i++) {

        }
      }

}
