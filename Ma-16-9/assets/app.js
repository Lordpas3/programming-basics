const firstName = 'Pascal';
const lastName = 'van der Maden';
let age = 20;

let message = `Mijn naam is ${firstName} ${lastName} en ik ben ${age} jaren oud`;


let priceOfAnApple = 0.59;
let numberOfApples = 200;
let price = priceOfAnApple*numberOfApples;


let hz = 'Please visit the HZ University of applied science';
const rep = hz.replace('applied', 'mad');


// Even nummer, is het getal even? true = ja, false = nee.

let number = 29;
const even = number % 2;


console.log(even == 0);


// String aanpassen

let programming = 'Programming is not so cool';

console.log(programming.replace(" not",""));


// Vergelijken

let opdracht3 = 1400;
let opdracht31 = 'ik woon in Naboo';
console.log(opdracht3==opdracht31);
// Je kan geen nummer met een string vergelijken, vandaar dat dit onzin is