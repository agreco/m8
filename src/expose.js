	iter( PACKAGE ) || ( PACKAGE = root );

	defs( ( __lib__ = expose( __lib__, Name, ENV == 'commonjs' ? module : PACKAGE ) ), {
	// properties
		ENV    : ENV, global : { value : root }, modes : { value : modes },
	// methods
		bless      : bless,      coerce : coerce, copy   : copy,   def    : def,    defs  : defs,
		describe   : describe,   empty  : empty,  exists : exists, expose : expose, got   : got,
		has        : has,        id     : id,     iter   : iter,   len    : len,    merge : merge,
		nativeType : nativeType, noop   : function() {},           obj    : obj,    range : range,
		remove     : remove,     tostr  : tostr,  type   : type,   valof  : valof,  x     : x
	}, 'w' );

	x( Object, Array, Boolean, Function );
