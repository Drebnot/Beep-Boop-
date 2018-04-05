function bunchaNumbers(number) {
  var arrayNumbers = [];
  for (var i = 0; i <= number; i++) {
    arrayNumbers.push(i.toString());

  }
  return arrayNumbers;
}
arrayNumbers.forEach(function(string){
  var numberedString = parseINt(string);
  var splitNumberedString = string.split("");
})





$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();


  });
});
