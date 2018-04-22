'use strict';
//Pętla for

for (var i = 1; i <= 5; i++) {
    console.log(i);
}

//Pętla for each

var tablica = ["Krystian", "Monika", "Danuta", "Agata"];

for (var i=0; i < tablica.length; i++) {
    console.log("Element z indexem: " + i + " ma wartość " + tablica[i]);
}

tablica.forEach(function(element, index) {
    console.log("Element z indexem: " + index + " ma wartość " + element)
});

//Pętla while

var it = 0;
while (it < 6) {
    console.log(it);
    it++;
};

//Pętla do while

var iter = 8;
do {
    iter++;
    console.log(iter);
} while (iter < 10)
    
    
var a = 0;

while (a < 10) {
    console.log(a++);
    
    if (a == 5) {
        break;
    }
}


for (var b = 0; b < 10; b++) {
    if (b == 5) {
        continue;
    } else {
        console.log(b);
    }
    console.log("--");
}

