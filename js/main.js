function FormatAndShowOutput(values, part) {
   switch (part) {
     case 1:
      document.getElementById('ConversionOutput').textContent =
        values[0] + " in base " + Number(values[1]) + " is " +
        values[3] + " in base " + Number(values[2]);
     break;
     case 2:
       document.getElementById('ConversionOutput').textContent =
          values[2] + " has a binary rep of: " + values[0] +
          " and a two's complement rep: " + values[1];
       break;
     case 3:
        document.getElementById('ConversionOutput').textContent = values[0] +
          " is represented in IEEE 754 by the following " + values[1];
        break;
     default:
        alert("WTF HAVE YOU DONE!!!");
        break;
   }
}
function space(number){
  var output = "";
  for (var i = 0; i < number.length; i+=8){
     output += number.substring(i, i+8) + " ";
  }
  return output.substring(0, output.length-1);
}
