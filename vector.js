var Vector = Vector || {};

Vector.vector2 = function(x, y)
{
  this.set(x, y);
}

Vector.vector2.prototype = {

      set: function(x, y) {
        /**
        *  Make a template vector with values (0, 1) if no params are given
        */
        this.x = x || 0;
        this.y = y || 1;
      },
      get: function() {
        return { x: this.x, y: this.y };
      },
      getLength: function() {
        var x = this.x,
            y = this.y;
        return Math.sqrt(x*x + y*y)
      },
      setLength: function(length) {
        var angle = this.getAngle();
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
      },
      getAngle: function() {
        return Math.atan2(this.x, this.y);
      },
      setAngle: function(angle) {
        var length = this.getLength();
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
      },
      normalize: function() {
        var length = this.getLength();
        return new Vector.vector2(this.x/length, this.y/length);
      },
      scale: function(value) {
        return new Vector.vector2(this.x*value, this.y*value);
      },
      divide: function(value) {
        return new Vector.vector2(this.x/value, this.y/value);
      },
      add: function(v) {
        return new Vector.vector2(this.y+v.x, this.y+v.y);
      },
      subtract: function(v) {
        return new Vector.vector2(this.x-v.x, this.y-v.y);
      },
      dot: function(v) {
        return new Vector.vector2(this.x*v.x, this.y*v.y);
      },
      clone: function() {
        return new Vector.vector2(this.x, this.y);
      }

}
