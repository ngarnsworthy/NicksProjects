function check() {
  var c=document.getElementById('cach').value,
      p=document.getElementById('pasword').value
      ;
      if (c==52&&p==243) {
        document.location = "crack.html";
      } else {
        alert('wrong pasword and or cach');
      }
}
