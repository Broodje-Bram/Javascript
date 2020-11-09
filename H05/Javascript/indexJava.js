fotos = document.getElementById("fotos");
createfotoHouder();
createdierenfotos()

function createfotoHouder() {
    for (var i = 0; i <9; i++) {
        fotoHouder = document.createElement("div");
        fotoHouder.className = "foto_houder";
        fotoHouder.id = "foto_houder" + i;
        fotos.appendChild(fotoHouder);
    }
}

function createdierenfotos() {
    fotoHouder = document.getElementsByClassName("foto_houder");
    for (var i = 0; 1 < fotoHouder.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i+1);
       dierenfoto = document.createElement("img");
       dierenfoto.src = "Img/Animal" + (i + 1) + ".jpg";
       dierenfoto.id = (i+1);
       dierenfoto.addEventListener("click", function () {
           maakfavoriet(this.id);
       });
       fotoHouder[i].appendChild(favoriet);
       fotoHouder[i].appendChild(dierenfoto);
    }
}

function maakfavoriet(id) {
    notsofavoriet = document.getElementsByClassName("favoriet");

    for (var i = 0; i < notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage = "none"
    }

    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('Img/ScorpionSpear.png')"
}
