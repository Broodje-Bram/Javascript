var oogfotos = [1,2,3,4];
var neusfotos = [1,2,3,4];
var mondfotos = [1,2,3,4];

var ogen = document.getElementById("ogen");
var neus = document.getElementById("neus");
var mond = document.getElementById("mond");

var neusteller = 1;
var oogteller = 1;
var mondteller = 1;

ogen.style.backgroundImage = "url('Img/Ogen/Ogen1')";
neus.style.backgroundImage = "url('Img/Neus/Neus1')";
mond.style.backgroundImage = "url('Img/Mond/Mond1')";

ogen.addEventListener("click", function(){
    ogen.style.backgroundImage = "url('Img/Ogen/Ogen" + andereoog() + ".png')";

});
neus.addEventListener("click", function(){
    neus.style.backgroundImage = "url('Img/Neus/Neus" + andereneus() + ".png')";

});
mond.addEventListener("click", function(){
    mond.style.backgroundImage = "url('Img/Mond/Mond" + anderemond() + ".png')";

});

function andereoog() {
    if (oogteller >= oogfotos.length) {
        oogteller = 1;
    }
    else {
        oogteller++
    }
    return oogteller;
}
function andereneus() {
    if (neusteller >= neusfotos.length) {
        neusteller = 1;
    }
    else {
        neusteller++
    }
    return neusteller;
}
function anderemond() {
    if (mondteller >= mondfotos.length) {
        mondteller = 1;
    }
    else {
        mondteller++
    }
    return mondteller;
}