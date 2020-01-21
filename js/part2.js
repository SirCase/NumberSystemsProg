function ConversionPart2() {
    //
    var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);

    var value = "000000000000000000000000" + (SignedDecimalInt >>> 0).toString(2);
    var twos = "000000000000000000000000" + (-SignedDecimalInt >>> 0).toString(2);

    FormatAndShowOutput([space(value.substring(value.length-24)), space(twos.substring(twos.length-24)), SignedDecimalInt], 2);
}
