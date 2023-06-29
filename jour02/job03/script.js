var compteur = 0;


function addone() {
    compteur++;
    document.getElementById("compteur").innerHTML = compteur;
}

var button = document.getElementById("button");
button.addEventListener("click", addone);
