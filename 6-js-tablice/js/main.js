'use strict';


var imiona = ["Agata", "Marcin", "Marek"]

imiona[3] = "Ania";
imiona[2] = "Eugeniusz";

imiona.push("Gerald");


imiona.pop();
imiona.pop();



imiona.unshift("Robert");
imiona.shift("Piotr");

console.log(imiona);
console.log(imiona.length);

console.log(imiona.join(". "));

console.log(imiona.reverse());

var liczby = [22, 33, 1, 3, 64, 21];

console.log(liczby.sort().reverse());

