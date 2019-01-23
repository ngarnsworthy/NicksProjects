// var fs = require('fs');
var days = 0;
var other = 0;
var sum = 0;
var coffee = 0;
var heated_sheats = 0;
var trip = 0;
var rooms = 0;
var discount_A = 0;
var discountlist = [];

  function reseat() {
  do_calc(1);
    $(idDays).html(rooms*days*50);
    $(idHeated_sheats).html(heated_sheats);
    $(idTrip).html(trip);
    $(idCoffee).html(coffee);
    $(idDiscount).html(discount_A);
    $(idTotal).html(sum);
  window.print();
}

function do_calc(doSplice) {
  other = 0
  days = document.getElementById('days').value - 0;
  rooms = document.getElementById('rooms').value - 0;
  discount_A = document.getElementById('discount').value;
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

  if ($(ifDiscout).prop('checked')) {
    let idx = discountlist.indexOf(discount_A);

    if ( idx !== -1 ) {
      other = other-50
      if (doSplice == 1) {
      discountlist.splice(idx, 1);
      }
      save();
    }
  }

  sum = (rooms*days*25)+other;
  $(idOther).val(other);
  document.getElementById('sum').innerHTML = sum;
}
function audio(song) {
  x = document.getElementById(song);
  x.play();
}
function checkPasword() {
  username = $(idCouponUserName).val();
  pasword = $(idCouponPasword).val();
  if (username === "ngarnsworthy" && pasword === "nr9t7SgftyW7grr1t8fHyggjg6rf93ygmyffyfqtf2y9yémyfrfr") {
    $('#idHide').show();
  }
}
function addCoupon() {
couponNumber = $('#idNewCoupon').val();
discountlist.push(couponNumber)
save();
}

function fetchCoupons() {
  fetch("getCoupons").then(function(v) {
    v.json().then(j=> {
      discountlist = j;
    })
  });
}


function save() {
  $.post("saveCoupons", JSON.stringify(discountlist) , undefined, "json");
}
