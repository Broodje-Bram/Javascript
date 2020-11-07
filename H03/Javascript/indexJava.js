var plaatjes = document.getElementsByTagName("img");

var random = 0;
for (var i = 0; i < plaatjes.length; i++) {
    var random = Math.floor(Math.random() * 9) + 1;
    plaatjes[i].src = "img/Animal" + random + ".jpg";
}