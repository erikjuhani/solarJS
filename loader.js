var Import = Import || {},
    Load   = Load || {};

Import = function(src) {
      var s     = document.createElement('script');
          s.src = src;

      document.body.appendChild(s);
}

/**
*     arguments ['core', 'custom']
*/
Load = function(args) {
  console.log(modules.display);
  console.log(args);
      for(var i=0; i<args.length;++i) {
        console.log(args[i]);
        modules.core[args[i]]   ? new Import(args[i]) : '';
      }
}
