function main() {
  window.onload = function(){
    window.Solar  = {};

    var keys   = Object.keys(modules),
        r      = document.getElementsByTagName('script'),
        values = {},
        paths  = [];

    for(var i=0, len = keys.length; i < len; ++i) {
      var val = modules[keys[i]];
      Object.assign(values, val);
    }

    for(var key in values) {
      Solar[values[key].split('.', 1)] = eval('('+key+')');
      paths.push(values[key]);
    }

    for(var i = r.length; --i;) {
      if(paths.indexOf(r[i].getAttribute('src')) !== -1) document.body.removeChild(r[i]);
    }
  }
}

var modules = {
    core : {
      Display           : 'display.js',
      InputController   : 'input.js',
      Math              : 'math.js',
      Matrix            : 'matrix.js',
      Rect              : 'rect.js',
      SoundLib          : 'soundlib.js',
      Surface           : 'surface.js',
      Timer             : 'timer.js',
      'Vector.vector2'  : 'vector.js'
    },
    custom : {
    }
};

function load() {
  var keys      = Object.keys(modules),
      values    = [];

      for(var i=0, len = keys.length; i < len; ++i) {
        var val = Object.keys(modules[keys[i]]).map(key => modules[keys[i]][key]);
        Array.prototype.push.apply(values, val);
      }

      for(var i=0, len = values.length; i < len; ++i) {
        var s     = document.createElement('script');
            s.src = values[i];

        document.body.appendChild(s);
      }

      // Callback
      main();
}

load();
