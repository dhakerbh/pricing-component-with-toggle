function change() {
  var checkbox = document.getElementById("checkbx");
  if (checkbox.checked) {
    document.getElementById("priceb").innerHTML = "$19.99";
    document.getElementById("pricep").innerHTML = "$24.99";
    document.getElementById("pricem").innerHTML = "$39.99";
  } else {
    document.getElementById("priceb").innerHTML = "$199.99";
    document.getElementById("pricep").innerHTML = "$249.99";
    document.getElementById("pricem").innerHTML = "$399.99";
  }
}
