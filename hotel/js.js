var days = 0;
var other = 0;
var sum = 0;
var coffee = 0;
var heated_sheats = 0;
var trip = 0;
var rooms = 0;
function reseat() {
  do_calc();
    $(idDays).html(days*50);
    $(idHeated_sheats).html(heated_sheats);
    $(idTrip).html(trip);
    $(idCoffee).html(coffee);
    $(idTotal).html(sum);




  window.print();
}

function do_calc() {
  days = document.getElementById('days').value - 0;
  rooms = document.getElementById('rooms').value - 0;
  // other = document.getElementById('other').value - 0;
  if($(idHeated).prop('checked')) {
    heated_sheats = other = ($(heated_sheatsA).val()-0) * 20 ;
  }

  if($(idTrip).prop('checked')) {
    trip = ($(tripA).val()-0) * 100;
    other += trip;
  }

  if($(idCoffee).prop('checked')) {
    coffee = ($(coffeeA).val()-0)*3
    other += coffee;
  }

  sum = (rooms*days*25)+other;
  $(idOther).val(other);
  document.getElementById('sum').innerHTML = sum;
  check();
}
function audio(song) {
  x = document.getElementById(song);
  x.play();
}
function check() {
$.post("check", {days: days}, function(data, status){
alert("Data: " + data + "\nStatus: " + status);
});
$.post("check", {rooms: rooms}, function(data, status){
alert("Data: " + data + "\nStatus: " + status);
});
$.post("check", {trip: trip}, function(data, status){
alert("Data: " + data + "\nStatus: " + status);
});
$.post("check", {coffee: coffee}, function(data, status){
alert("Data: " + data + "\nStatus: " + status);
});
$.post("check", {heted_sheats: heated_sheats}, function(data, status){
alert("Data: " + data + "\nStatus: " + status);
});
}
