/*
 * ThemeRoller ParserCSS JavaScript file
 * @requires jQuery (external)
 *
 * ** ADD LICENSE HERE **
 */
(function( exports, $, undefined ) {

/**
 * class ParserCSS
 *
 * ThemeRoller ParserCSS, 
 *
 * Events:
 * - 
 *
 */

/**
 * new ParserCSS( )
 * - 
 *
 */
function ParserCSS( ) {
};

ParserCSS.prototype = {

  /**
   * parser.extractVariables() -> [ Object ]
   * + Returns Key/Pais of variable-name/default-value.
   *
   * Parses CSS and extracts all the variables via the comments-markup
   * `/*{variable-name}* /` and its default values.
   */
  extractVariables: function() {},

  /**
   * parser.render() -> [ String ]
   * + Returns the CSS with variables replaced.
   * 
   */
  render: function() {}
};

/**
 * Export public interface
 */
exports.ParserCSS = ParserCSS;

}( this, jQuery ));
// vim:ts=2:st=2:sw=2:et:tw=80:
