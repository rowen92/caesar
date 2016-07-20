"use strict";

var CaesarСipher = require("./caesar_cipher");
var caesarСipher = new CaesarСipher();

console.log( "Cipher:   " + caesarСipher.launch( "--h,e,l,l,o,!..." ) );
console.log( "Decipher: " + caesarСipher.launch( "--u,r,y,y,b,!..." ) );
