/*
 * ThemeRoller Panel JavaScript file
 * @requires jQuery (external), EventEmitter (external)
 *
 * ** ADD LICENSE HERE **
 */
(function( exports, $, EventEmitter, undefined ) {

/**
 * class Panel
 *
 * ThemeRoller Panel, created automatically in sync with model data.
 *
 * Events:
 * - change( ev, attribute, value ): Triggered when a style attribute is changed
 *   on the panel.
 *
 */

/**
 * Default datatypes map
 */
var datatypes = {
};

/**
 * new Panel( params )
 * - params [ Object ]: Detailed below.
 *
 * params:
 * - element [ String / jQuery element ]: Element where Panel will be created
 *   at.
 * - model [ Model ]: Styles model.
 * - structure [ Object ]: Key/Value pairs of group-name/widgets(subgroups).
 *   Each widget(subgroup) [ Object ] is another Key/Value pairs of
 *   widget-name(subgroup-name)/style-property-variable-name(s). Details below.
 *
 * structure: TODO better name?
 * - eg.
 *   {
 *     // Group
 *     "Content Body": {
 *       // SubGroup (Datatype Widget Name)
 *       "LinkColor": [ "body-link-color", "body-link-hover",
 *                      "a-body-link-active", "a-body-link-visited" ],
 *       "TextColor": "body-color",
 *       "TextShadow": "body-shadow"
 *     }
 *   }
 */
function Panel( params ) {
  this.element = $( params.element );

  // Are required params present?
  var requiredParams = [ "element", "model", "structure" ];
  var missing = requiredParams.filter(function( requiredParam ) {
    return !( requiredParam in params );
  });
  if ( missing.length ) {
    throw new Error( "Missing \"" + missing.join( "\", \"" ) + "\" styles" );
  }

  // Are params valid?
  if ( !this.element.length ) {
    throw new Error( "Invalid element" );
  }
  // TODO check if params are valid

};

Panel.prototype = {

  /**
   * panel.create()
   * 
   * Create panel based on model attributes and its datatypes.
   */
  create: function() {
    // TODO implement:
    // - Create markup for each group x each widget.
    // - Instantiate each widget with its corresponding element and model.
    //   Widget( element, variables );

    // TODO: What else do we need to know from variables? Just the variable-name
    // and its value? Is it good to know which style property it represents
    // (so Widget can validate if passed variable is correct)? Or any other
    // stuff??

    // TODO use template? https://github.com/wycats/handlebars.js/
    // we can compile it when deploying the minified vesion.
    // handlebars runtime adds an extra overhead of ~1k only.
  }
};

/**
 * Export public interface
 */
exports.Panel = Panel;

}( this, jQuery, EventEmitter ));
// vim:ts=2:st=2:sw=2:et:tw=80:
