'use strict';

var liczba1 = 13, liczba2 = 5;

var wynik;

wynik = liczba1 % liczba2;
console.log(wynik += 3);

if (wynik == 7) {
    console.log("PRAWDA");
} else {
    console.log("FAŁSZ");    
}

if ("2" === 2) {
    console.log("PRAWDA");
} else {
    console.log("FAŁSZ");    
};

(wynik > --wynik) ? console.log("to jest prawdziwe") | : |; console.log("to jest nie prawdziwe");