// Get the modal
var modal = document.getElementById('id01');
var validate = function() {
  var match = document.getElementById('idPassword').value ===
              document.getElementById('idPassword2').value;

  if(!match) {
    alert("Passwords must match!");
  }
  return match;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
