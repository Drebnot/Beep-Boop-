var arrayNumbers = [];
function bunchaNumbers(number) {
  // arrayNumbers = [];
  for (var i = 0; i <= number; i++) {
    arrayNumbers.push(i.toString());

  }
  return arrayNumbers;
}
arrayNumbers.forEach(function(string){
  var numberedString = parseINt(string);
  var splitNumberedString = string.split("")
  if (numberedString % 3 === 0 && numberedString != 0) {
    arrayNumbers.splice("I'm sorry Dave. I'm afraid I can't do that.");
  } else if (splitNumberedString.indexOf("1") > 0) {
    arrayNUmbers.splice(string, 1, "Boop");
  } else if (splitNumberedString.indexOf("0") > 0) {
    arrayNumbers.splice(string, 1, "Beep");
  }
});





$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();


  });
});
