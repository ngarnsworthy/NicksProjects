var days = 0;
var other = 0;
var sum = 0;

function reseat() {
  do_calc();
  $(idDays).html(bed);
  $(idOther).html(other);


  window.print();
}

function do_calc() {
  days = document.getElementById('days').value - 0;
  // other = document.getElementById('other').value - 0;
  if($(idHeated).prop('checked')) {
    other = ($(heated_sheatsA).val()-0) * 10;
  }

  if($(idTrip).prop('checked')) {
    other += ($(tripA).val()-0) * 20;
  }

  if($(idCoffee).prop('checked')) {
    other += ($(coffeeA).val()-0);
  }

  sum = (days*50)+other;
  $(idOther).val(other);
  document.getElementById('sum').innerHTML = sum;
}
