'use strict';

var jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian", 
            nazwisko: "Dziopa", 
            wzrost: 180, 
            oczy: "niebieskie", 
            zainteresowania: [ 
                { nazwa: "podroze" }, 
                { nazwa: "gotowanie" }
            ] 
        },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "gotowanie" },
                { nazwa: "języki" }
            ]
        },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "programowanie" },
                { nazwa: "podroze" },
                { nazwa: "języki" }
            ]

        }
    ]
}

console.log(jsonOsoby);


for (var i=0; i < jsonOsoby.osoby.length; i++) {
    console.log("Zainteresowanie dla: " + jsonOsoby.osoby[i].imie + " ma wartość " + jsonOsoby.osoby[i].zainteresowania[0].nazwa);
    
    var zainteresowania = jsonOsoby.osoby[i].zainteresowania;
    
    for (var j=0; j < zainteresowania.length; j++) {
        console.log(zainteresowania[j].nazwa);
    }
} 

//
//
//var osoby = jsonOsoby.osoby;
//osoby.forEach(function(osoba,index) {
//    console.log("Osoba: " + osoba.imie);
//    
//    var zainteresowania = osoba.zainteresowania;
//    zainteresowania.forEach(function(zainteresowania,i) {
//        console.log("Zainteresowania" + zainteresowania.nazwa)
//    })
//    
//})
//
//
//
//

//
//jsonOsoby.osoby[2].zainteresowania.forEach( function (element, index) {
//    console.log(element.nazwa);
//});

//console.log(jsonOsoby.osoby[2].zainteresowania);







//jsonOsoby.osoby[0].zainteresowania.forEach( function(zainteresowanie, index) {
//    console.log("index: " + index + " zainteresowanie: " + zainteresowanie.nazwa)
//});