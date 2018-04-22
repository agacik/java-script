'use strict';
//Typ liczbowy
var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);


//Typ string
var wyplataStr = "5000";
var premiaStr = "2500";
var calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + premiaStr;

console.log(calkowitaWyplataStr);


//Typ prawda-fałsz
var czyJestSmog;
czyJestSmog = true;

if (czyJestSmog) {
    console.log("Jest SMOG");
} else {
    console.log("Nie ma SMOGu");
}


//Typy specjalnie
var niezdefiniowanaZmiaenna;
var nullowanZmienna = null;

console.log(niezdefiniowanaZmiaenna);
console.log(nullowanZmienna);