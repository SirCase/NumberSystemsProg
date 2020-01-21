function ConversionPart1() {

    var UnsignedInt = "" + document.getElementById("1_UnsignedInt").value;
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);

    var digits = [];

    for (var i = 0; i < UnsignedInt.length; i++){
      var digit = UnsignedInt.charAt(i);
      digits.push(fixAboveNine(digit));
    }
    var baseTenValue = 0;
    for (var i = 0; i < digits.length; i++){
      baseTenValue = baseTenValue * UnsignedIntBaseFrom + digits[i];
    }
    var output = [];
    while (baseTenValue != 0){
      output.unshift(baseTenValue % UnsignedIntBaseTo);
      baseTenValue = Math.floor(baseTenValue / UnsignedIntBaseTo);
    }
    var outputValue = "";
    for (var i = 0; i < output.length; i++){
      outputValue += undoAboveNine(output[i]);
    }
    outputValue= outputValue==""? 0: outputValue;
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);
}
function fixAboveNine(digit){
  switch (digit) {
    case 'A':
      return 10;
      break;
    case 'B':
      return 11;
      break;
    case 'C':
      return 12;
      break;
    case 'D':
      return 13;
      break;
    case 'E':
      return 14;
      break;
    case 'F':
      return 15;
      break;
    default:
      return parseInt(digit);
      break;
  }
}
function undoAboveNine(digit){
  switch (digit) {
    case 10:
      return 'A';
      break;
    case 11:
      return 'B';
      break;
    case 12:
      return 'C';
      break;
    case 13:
      return 'D';
      break;
    case 14:
      return 'E';
      break;
    case 15:
      return 'F';
      break;
    default:
      return parseInt(digit);
      break;
  }
}
