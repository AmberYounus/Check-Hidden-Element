function checkHidden() {
  var x = document.getElementById("myDIV");
  if (window.getComputedStyle(x).visibility === "hidden") {
    x.style.visibility = "visible";
  }
}

