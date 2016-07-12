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
 * @param  {integer} shift  Shift the meanings of the letters
 * @param  {string} str     The string that need to encrypt
 * @return {string}         The encrypted string
 */
CaesarСipher.prototype.call = function( str ) {

  this.str = str.toLowerCase();

  var symbols = this.str.split(""),
    lengthSymbols = symbols.length,
    encryptedSymbols = [],
    unicodeNumber,
    i = 0;

  for ( ; i < lengthSymbols; i++ ) {

    if ( symbols[ i ].match( /[a-z]/ ) ) {

      if ( symbols[ i ].charCodeAt() < 110 ) {
        unicodeNumber = 13 + symbols[ i ].charCodeAt();
      } else {
        unicodeNumber = (13 + symbols[ i ].charCodeAt()) - 26;
      }

    } else {
      unicodeNumber = symbols[ i ].charCodeAt();
    }

    encryptedSymbols.push( String.fromCharCode( unicodeNumber ) );
  }

  return encryptedSymbols.join("");
};

module.exports = CaesarСipher;
