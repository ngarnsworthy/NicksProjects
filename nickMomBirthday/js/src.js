var
  show = function(a_id, a_show) {
    document.getElementById(a_id).style.display = a_show ? 'block' : 'none';
  },

  showImg = function() {
    var interval;
    show("idImg", true);
    show("idBl", true);
    show("idBu", false);
    setTimeout(function() {
      show("idImg", false);
      show("idBl", false);
      show("idBu", true);
    }, 10000);
  };
