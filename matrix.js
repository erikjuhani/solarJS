var Matrix = Matrix || {};

/**
*   @
*   Example of use:
*   As a variable
*   var matrix = new Matrix().translate(20, 0); --- Move 20 pixels to right in horizontal-direction.
*
*   Matrix chaining
*   matrix.translate(20, 0).rotate(5).translate(-20, 0);
*   First translates, then rotates and then translates again.
*
*   Setting up a matrix (a, b, c, d, tx, ty)
*   var matrix = new Matrix().set(1, 0, 0, 1, 20, 0);
*   is same as
*   var matrix = new Matrix().translate(20, 0);
*
*/

Matrix = function() {
      /*
      *  Create an identity matrix, when creating a new Matrix
      */
      this.identity();
      this._t = this.transform;
}

Matrix.prototype = {
      /*
      *  a, b, tx,
      *  c, d, ty,
      *  0, 0,  1
      */

      set: function(a, b, c, d, tx, ty) {

        this.a = a, this.b = b, this.tx = tx,
        this.c = c, this.d = d, this.ty = ty;

        return this;
      },

      combine: function(m) {
        var self = this,
              a1 = self.a,
              b1 = self.b,
              c1 = self.c,
              d1 = self.d,
              tx = self.tx,
              ty = self.ty;

        self.a = m.a * a1 + m.b * c1; // + matrix.tx * 0
        self.b = m.a * b1 + m.b * d1; // + matrix.tx * 0
        self.c = m.c * a1 + m.d * c1; // + matrix.ty * 0
        self.d = m.c * b1 + m.d * d1; // + matrix.ty * 0

        self.tx = m.a * tx + m.b * ty + m.tx; // * 1
        self.ty = m.c * tx + m.d * ty + m.ty; // * 1

        return self;
      },

      transform: function(a2, b2, c2, d2, tx2, ty2) {
        var self = new Matrix(),
              a1 = self.a,
              b1 = self.b,
              c1 = self.c,
              d1 = self.d,
              tx = self.tx,
              ty = self.ty;

        self.a = a1 * a2 + b1 * c2;
        self.b = a1 * b2 + b1 * d2;
        self.c = c1 * a2 + d1 * c2;
        self.d = c1 * b2 + d1 * d2;

        self.tx = a1 * tx2 + b2 * ty2 + tx;
        self.ty = c1 * tx2 + d1 * ty2 + ty;

        return this.combine(self);
      },

      apply: function(vector) {

        /*
        * x     a, b, tx
        * y     c, d, ty
        * 1     0, 0,  1
        */

        var x = vector.x,
            y = vector.y,

            a1 = this.a,
            b1 = this.b,
            c1 = this.c,
            d1 = this.d,

            x1 = x*a1 + y*b1 + this.tx,
            y1 = x*c1 + y*d1 + this.ty;

        return new Vector.vector2(x1, y1);
      },

      reset: function() {
        this.identity();
      },

      identity: function() {
        return this.set(1,0,0,1,0,0);
      },

      translate: function(tx, ty) {
        return this._t(1, 0, 0, 1, tx, ty);
      },

      scale: function(sx, sy) {
        return this._t(sx, 0, 0, sy, 0, 0);
      },

      rotate: function(a) {
        a *= Math.toR;
        var cos = Math.cos(a),
            sin = Math.sin(a);
        return this._t(cos, sin, -sin, cos, 0, 0);
      },

      shear: function(sx, sy) {
        return this._t(1, sx, sy, 1, 0, 0);
      },

      reflect: function() {
        return this._t(-1, 0, 0, -1, 0, 0);
      }

}
