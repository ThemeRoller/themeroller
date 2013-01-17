/*
 * ThemeRoller ParserLESS JavaScript file
 * @requires jQuery (external)
 *
 * ** ADD LICENSE HERE **
 */
(function( exports, $, undefined ) {

/**
 * class ParserLESS
 *
 * ThemeRoller ParserLESS, 
 *
 * Events:
 * - 
 *
 */

/**
 * new ParserLESS( )
 * - 
 *
 */
function ParserLESS( ) {
};

ParserLESS.prototype = {

  /**
   * parser.extractVariables() -> [ Object ]
   * + Returns Key/Pais of variable-name/default-value.
   *
   * Parses LESS and extracts all the variables and its default values.
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
exports.ParserLESS = ParserLESS;

}( this, jQuery ));
// vim:ts=2:st=2:sw=2:et:tw=80:
