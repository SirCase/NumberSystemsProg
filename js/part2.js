function ConversionPart2() {

    var SignedDecimalInt = document.getElementById("2_SignedInt").value;
    var neg = SignedDecimalInt >=0? false: true;

    for (var i = 0; i < SignedDecimalInt.length; i++){
      var digit = SignedDecimalInt.charAt(i);
    }
    var baseTwoValue = [];
    var baseTenValue = Math.abs(SignedDecimalInt);
    while (baseTenValue != 0){
      baseTwoValue.unshift(baseTenValue % 2);
      baseTenValue = Math.floor(baseTenValue / 2);
    }
    var value = "";
    var twos = "";
      for (var i = 0; i < baseTwoValue.length; i++){
        value += baseTwoValue[i];
      }
      value = 0 + value;
      baseTwoValue = flipVals(baseTwoValue);
      for (var i = 0; i < baseTwoValue.length; i++){
        twos += baseTwoValue[i];
      }
      twos = (SignedDecimalInt == 0? 0:1 )+ twos;
      if (neg){
        var temp = twos;
        twos = value;
        value = temp;
      }

    FormatAndShowOutput([space(value), space(twos), SignedDecimalInt], 2);
}
function flipVals(array){
  for (var i = 0; i < array.length; i++){
    array[i] = array[i] == 0? 1:0;
  }
  var a = array.length-1;
  while(array[a] == 1){
    a--;
  }
  array[a] = 1;
  for (var i = a + a; i < array.length; i++){
    array[i] = 0;
  }
  return array;
}
