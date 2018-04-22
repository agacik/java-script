'use strict';

var kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe: function() {
        console.log("Imie obiektu; " + this.imie);
    }
};

var krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe: function() {
        console.log("Imie obiektu: " + this.imie);
    }
};

kaja.przedstawOsobe();
krystian.przedstawOsobe();

console.log(kaja.wzrost);

console.log(kaja);







class Osoba {
    constructor(imie,nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    wyswietliInfo() {
        console.log("Imię: " + this.imie, "Nazwisko: " + this.nazwisko);
    }
}

var agata = new Osoba("Agata", "Biesaga");
var marcin = new Osoba("Marcin", "Kwiatkowski");
agata.wyswietliInfo();