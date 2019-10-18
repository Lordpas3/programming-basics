// console shout
function doNotShoutMyName(myName) {
    let message = '...whispering...' + myName;
    return message;
}

let messageOutsideTheFunction = doNotShoutMyName('Pascal');
console.log(messageOutsideTheFunction);


// give a name
function giveMeSomeNiceName(gender) {
    let myNewName = null;
    if (gender == 'male') {
        myNewName = 'Arnold';
    } else if (gender == 'female') {
        myNewName = 'Samantha';
    } else {
        myNewName = 'there are only 2 genders, change my mind';
    }
    return myNewName;
}

let myNewNameOutside = giveMeSomeNiceName('female');
console.log(myNewNameOutside);


// knor knor
function pig(numberOfPigs) {
    piggies = '';
    for (numberOfPigs > 0; numberOfPigs > 0; --numberOfPigs) {
        piggies += '\u{1F437}';
    }
    return piggies + 'knor!';
}

console.log(pig(7));


// factorial
function factorial(num) {
    fact = num;
    --num;
    for (num; num > 0; --num) {
        fact *= num;
    }
    return fact;
}

console.log(factorial(5));


// huiswerk
console.warn('huiswerk hieronder');


// opdracht 1
// het nummer is het maximale nummer dat je kan krijgen in de fib code
function fib(num) {
    let aa = 1;
    let ab = 1;
    while (aa < num) {
        ab += aa;
        aa = ab - aa;
        console.log(aa)
    }
    return aa + ' is het laatste getal in de reeks';
}
console.log(fib(20000))

// opdracht 2
function countdown(jaartal) {
    console.log(10);
    console.log(9);
    console.log(8);
    console.log(7);
    console.log(6);
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
    console.log('Happy ' + jaartal);
}
countdown(2020);

// opdracht 3
// eerst roep ik de functie op, dan pas defineer ik hem, hoisting lost dit op

opdracht3('hoi');

function opdracht3(string) {
    console.log(string + ' is wat ik type');
}
// dit werkt omdat JavaScript alle functies als het ware naar boven haald en daar mee begint

function opdracht31(eenString) {
    console.log(ookEenString + ' is wat ik hierna type');
    let ookEenString = eenString;
}

opdracht31('hallo')
// dit werkt niet omdat JavaScrip we de let omhoog haalt, maar niet de gelijkstelling, dus krijg je een reference error