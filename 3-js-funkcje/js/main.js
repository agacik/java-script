'use strict';

function aktualnyRok() {
  console.log("2018");
}

aktualnyRok();

var aktualnyMiesiac = function() {
    console.log("Kwiecień")  
}
console.log(aktualnyMiesiac);
aktualnyMiesiac();


function dodajLiczby(pierszaLiczba, drugaLiczba) {
    
    var wynik = pierszaLiczba + drugaLiczba;
    
    return wynik;
}

var wynikZFunkcji = dodajLiczby(4,7);

console.log(wynikZFunkcji);