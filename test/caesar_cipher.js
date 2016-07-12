var CaesarCipher = require("../app/caesar_cipher");
var expect = require("chai" ).expect;

describe("Caesar cipher", function() {
  it("should encrypt the string", function() {
    var caesarCipher = new CaesarCipher();
    var result  = caesarCipher.call("abc xy-z.");
    expect( result ).to.be.eql("nop kl-m.");
  });

  it("should decrypt the string", function() {
    var caesarCipher = new CaesarCipher();
    var result  = caesarCipher.call("n opklm!");
    expect( result ).to.be.eql("a bcxyz!");
  });

  it("should not encrypt the string", function() {
    var caesarCipher = new CaesarCipher();
    var result  = caesarCipher.call("abc xy-z.");
    expect( result ).to.be.not.eql("nopklm");
  });

  it("should not decrypt the string", function() {
    var caesarCipher = new CaesarCipher();
    var result  = caesarCipher.call("n opklm!");
    expect( result ).to.be.not.eql("abcxyz");
  });
});
