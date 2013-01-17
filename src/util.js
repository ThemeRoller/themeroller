/*
 * ThemeRoller Util JavaScript file
 * @requires jQuery (external)
 *
 * ** ADD LICENSE HERE **
 */
(function( exports, $, undefined ) {

/**
 * ThemeRoller Util, javascript helpers.
 */

function omit( obj, keys ) {
  var key,
    copy = {};
  for ( key in obj ) {
    if ( $.inArray( key, keys ) === -1 ) {
      copy[ key ] = obj[ key ];
    }
  }
  return copy;
}

function pick( obj, keys ) {
  var copy = {};
  $.each( keys, function( i, key ) {
    if ( key in obj ) {
      copy[ key ] = obj[ key ];
    }
  });
  return copy;
}

/**
 * Export public interface
 */
exports.Util = {
  omit: omit,
  pick: pick
};

}( this, jQuery ));
// vim:ts=2:st=2:sw=2:et:tw=80:
