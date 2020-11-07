var fotos = [1,2,3,4,5,6,7,8,9];
var slideholder = document.getElementById("slideholder");
var teller = 1;

slideholder.style.backgroundImage = "url('Img/Animal1.jpg')";

slideholder.addEventListener("click", function(){
        slideholder.style.backgroundImage = "url('Img/Animal" + anderanimal() + ".jpg')";

});

function anderanimal() {
    if (teller >= fotos.length) {
        teller = 1;
    }
    else {
        teller++
    }
    return teller;
}

