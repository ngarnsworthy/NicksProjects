var room = 0
var bed = 0
var other = 0
var sum = 0
function pay() {
  window.location("pay.html");
}
function reseat() {
  var room = getElementById('room');
  var bed = getElementById('bed');
  var other = getElementById('other');
  var sum = room*bed+other;
  window.print();
}
