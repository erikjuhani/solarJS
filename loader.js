var Import = Import || {},
    Load   = Load || {};

Import = function(src) {
      var s     = document.createElement('script');
          s.src = src;

      document.body.appendChild(s);
}

/**
*     arguments
*/
Load = function() {
  var keys      = Object.keys(modules),
      values    = [];

      for(var i=0, len = keys.length; i < len; ++i) {
        var val = Object.keys(modules[keys[i]]).map(key => modules[keys[i]][key]);
        Array.prototype.push.apply(values, val);
      }

      for(var i=0, len = values.length; i < len; ++i) {
         new Import(values[i]);
      }
}
