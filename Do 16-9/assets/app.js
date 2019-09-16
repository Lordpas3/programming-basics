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

//let opdracht 3 = 1400 + 'ik woon in Naboo';
//Met deze code krijg je een Syntax error, je kan geen string en nummer bij elkaar optellen.
