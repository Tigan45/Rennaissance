
function afficher_div() {
    var div = document.getElementById("voir plus");
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
    var nom= document.getElementById('voir plus').innerHTML = "voir moins";
    alert (nom);
  }
  