"use strict";

/**
 * Caesar cipher module
 * @module app/caesar
 */

/**
 * Represents a Caesar cipher
 * @constructor
 */
function CaesarСipher() {};

/**
 * Caesar cipher
 * @method
 * @param  {string} str     The string that need to encrypt
 * @return {string}         The encrypted string
 */
CaesarСipher.prototype.launch = function( str ) {

  this.str = str.toLowerCase();

  var symbols = this.str.split(""),
    lengthSymbols = symbols.length,
    encryptedSymbols = [],
    unicodeNumber,
    i = 0,
    charCodeOfSymbol;

  for ( ; i < lengthSymbols; i++ ) {
    charCodeOfSymbol = symbols[ i ].charCodeAt( 0 );

    if ( symbols[ i ].match( /[a-z]/ ) ) {

      if ( charCodeOfSymbol < 110 ) {
        unicodeNumber = 13 + charCodeOfSymbol;
      } else {
        unicodeNumber = (13 + charCodeOfSymbol) - 26;
      }

    } else {
      unicodeNumber = charCodeOfSymbol;
    }

    encryptedSymbols.push( String.fromCharCode( unicodeNumber ) );
  }

  return encryptedSymbols.join("");
};

module.exports = CaesarСipher;
