
function ConversionPart3() {
  var floatToConvert = parseFloat(document.getElementById("3_Float").value);
  var sign = (floatToConvert >= 0 ? "0":"1");
  var wholeDecimal = Math.floor(Math.abs(floatToConvert))
  var wholeBinary = wholeDecimal.toString(2);
  var fracDecimal = Math.abs(floatToConvert) - wholeDecimal;
  var fracBinary = "";
  while (fracDecimal != 0 && fracBinary.length + wholeBinary.length < 24){
    fracDecimal *= 2;
    fracBinary += (fracDecimal >=1 ? "1":"0");
    fracDecimal = fracDecimal - Math.floor(fracDecimal);
  }
  var mantissa = (wholeBinary + fracBinary + "00000000000000000000000").substring(1, 24);
  var exponentDecimal = wholeBinary.length-1 + 127;
  var exponentBinary = exponentDecimal.toString(2);
  var output = sign + exponentBinary + mantissa;
  // Show the output on the screen
  FormatAndShowOutput([floatToConvert, space(output)], 3);
}


// If you dare read a comment before starting to program..
// 3434000.5 has a binary representation of
//  1101000110011000010000.1
// In NORMALIZED scientific notation (i.e. scientific notation for Base 2)
// 1.1010001100110000100001 * 2^21
// ... so mantissa is 11010001100110000100001

// For the final 32 bits.. we have
// ... so 1010001100110000100001 for mantissa (because of explicit leading 1)
// ... so for bits (0-22) 10100011001100001000010
// ... so exponent representation in +128 format is 21+128 = 149 = (bits 23-30) 10010101
// ... so final sign bit = (bit 31) 0
