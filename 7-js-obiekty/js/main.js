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