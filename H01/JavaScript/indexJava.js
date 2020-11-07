console.log("Hello world!");

for (var i=0; i<10; i++) {
    console.log("De waarde van i is " + i)
}

var mijnauto = {
    merk: "Ford",
    type: "Mondeo",
    aantalWielen: 4,
    kleur: "blauw",
    snelheid:0,

    toeteren: function() {
        console.log("TOET TOET!")
    },

    gasgeven: function() {
        this.snelheid += 5
        console.log(this.snelheid);
    }
}

mijnauto.gasgeven();
mijnauto.toeteren();