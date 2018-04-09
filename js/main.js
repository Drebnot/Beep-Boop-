var arrayNumbers = [];
function bunchaNumbers(number) {
  var zeroNumber = 0;
  for (var i = 0; i <= number; i++) {
    arrayNumbers.push(""+zeroNumber);
    zeroNumber++;
  }
 arrayNumbers.push(""+number);
;
arrayNumbers.forEach(function(string){
  var numberedString = parseInt(string);
  var splitNumberedString = string.split("");
  if (numberedString % 3 === 0 && numberedString != 0) {
    arrayNumbers.splice("I'm sorry Dave. I'm afraid I can't do that.");
  } else if (splitNumberedString.indexOf("1") > 0) {
    arrayNumbers.splice(string, 1, "Boop");
  } else if (splitNumberedString.indexOf("0") > 0) {
    arrayNumbers.splice(string, 1, "Beep");
  }

});

return arrayNumbers;

}





$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();


  });
});
