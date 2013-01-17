/*
 * ThemeRoller main class JavaScript file
 * @requires jQuery (external), Model, Panel, ParserCSS, ParserLESS, Util
 *
 * ** ADD LICENSE HERE **
 */
/*!
 * ThemeRoller http://git.io/Ab6hUg
 */
(function( exports, $, Model, Panel, ParserCSS, ParserLESS, Util, undefined ) {

/**
 * class ThemeRoller
 *
 * The main class required to set up a ThemeRoller instance in the browser.
 *
 * ```javascript
 * new ThemeRoller({
 *   css: fetchCss(), // String or a Deferred that will pass the String.
 *   // or less: fetchLess()
 *   panel: {
 *     element: $( "#panel" ),
 *     structure: {
 *       // Group
 *       "Content Body": {
 *         // SubGroup (Datatype Widget Name)
 *         "LinkColor": [ "body-link-color", "body-link-hover", "a-body-link-active", "a-body-link-visited" ],
 *         "TextColor": "body-color",
 *         "TextShadow": "body-shadow"
 *       }
 *     }
 *   },
 *   preview: $( "#preview" ),
 *   // Redefine widget that handles a datatype.
 *   datatypes: {
 *     TextColor: FarbtasticColorpicker
 *   }
 * });
 * 
 * ```
 *
 * Events:
 * - change( ev, attribute, value ): Triggered when a style attribute is changed
 *   using the panel.
 *
 */

var pick = Util.pick;

/**
 * new ThemeRoller( params )
 * - params [ Object ]: Detailed below.
 *
 * params:
 * - css [ String / Deferred ]: Default CSS styles with the comments markup. Use
 *   css or less exclusively.
 * - datatypes [ JSON ]: JSON mapping `datatype name` x `datatype Widget`. See
 *   Panel for more details.
 * - less [ String / Deferred ]: LESS styles with its default variable values.
 *   Use less or css exclusively.
 * - panel [ Object ]: See Panel constructor params for more details.
 * - preview [ String / jQuery element ]: Element where Preview will be created
 *   at. TODO: define whether user or us is going to create Preview content.
 */
function ThemeRoller( params ) {
  // Initializing params with {}, plus cloning it since we may change it below.
  params = $.extend( {}, params || {} );

  // Are required params present?
  var requiredParams = [ "panel", "preview" ];
  var missing = requiredParams.filter(function( requiredParam ) {
    return !( requiredParam in params );
  });
  if ( !params.css && !params.less ) {
    missing.push( "CSS or LESS" );
  }
  if ( missing.length ) {
    throw new Error( "Missing \"" + missing.join( "\", \"" ) + "\" styles" );
  }

  // Are params valid?
  // TODO check if params are valid

  // Parser
  if ( params.css ) {
    this.parser = new ParserCSS();
  } else {
    this.parser = new ParserLESS();
  }

  // Model
  this.model = new Model( this.parser.extractVariables() );

  // Create Panel
  var panelParams = $.extend( params.panel, pick( params, [ "datatypes" ] ), {
    model: this.model
  });
  this.panel = new Panel( panelParams );
  this.panel.create();
};

ThemeRoller.prototype = {
};

/**
 * Export public interface
 */
exports.ThemeRoller = ThemeRoller;

}( this, jQuery, Model, Panel, ParserCSS, ParserLESS, Util ));
// vim:ts=2:st=2:sw=2:et:tw=80:
