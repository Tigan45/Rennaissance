
function afficher_div() {
    var div = document.getElementById("voir plus");
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }