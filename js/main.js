// Business Logic

var beepBoop = function(number) {
  return true;
};




$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = beepBoop(number);
    $("#result").text(result);
  });
});
