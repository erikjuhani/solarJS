var Viewport = Viewport || {};

Viewport = function(x, y, width, height) {
      /**
      * @default 0
      */
      this.x = x || 0;

      /**
      * @default 0
      */
      this.y = y || 0;

      /**
      * @default 0
      */
      this.w = width || 0;

      /**
      * @default 0
      */
      this.h = height || 0;

      /**
      * @default none
      */
      this.target = null;

}
