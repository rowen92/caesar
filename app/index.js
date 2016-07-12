"use strict";

var CaesarСipher = require("./caesar_cipher");
var caesarСipher = new CaesarСipher();
console.log( "Cipher:   " + caesarСipher.call( "--h,e,l,l,o,!..." ) );
console.log( "Decipher: " + caesarСipher.call( "--u,r,y,y,b,!..." ) );
