function bunchaNumbers(number) {
  var arrayNumbers = [];
  for (var i = 0; i <= number; i++) {
    arrayNumbers.push(i.toString());

  }

}

$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();


  });
});
