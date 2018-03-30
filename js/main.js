
var numberInput = parseInt($("#number-input").val());

if (numberInput = 0) {
  $("#beep").show();
}
conole.log(numberInput);




$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();


// var result = beepBoopfunction(numberInput);
// $("result").text(result);
  });
});
