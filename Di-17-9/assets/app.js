/* let currentAction = 'calculating';

// als calculating
// optellen, aftrekken, delen en vermenigvuldigen
if (currentAction == 'calculating') {
    let x = 5;
    let y = 3;
    console.log(x + y);
    console.log(x - y);
    console.log(x / y);
    console.log(x * y);
}

// als strings
// uppercase, length, match, substring  en charat
else if (currentAction == 'strings') {
    let message = 'Hallo, ik ben een string :)'
    console.log(message.toUpperCase());
    console.log(message.length);
    console.log(message.match(/string/));
    console.log(message.substring(0, 5));
    console.log(message.charAt(10));
}

// als boolean
// check of bepaald cijfer hoog genoeg is
else if (currentAction == 'boolean') {
    let cijfer = 8;
    console.log(cijfer >= 6);
}

// default
// currentAction kan niet worden uitgevoerd
else {
    console.log('currentAction kan niet worden uitgevoerd');
}

*/

// Huiswerk
// Programming basics cijfer

let eindcijfer = 10;
if (eindcijfer >= 9) {
    console.log('uitmuntend');
} else if (eindcijfer >= 7) {
    console.log('goed');
} else if (eindcijfer >= 6) {
    console.log('voldoende');
} else if (eindcijfer < 6) {
    console.log('onvoldoende');
}

// switch
// werkt aleen met hele getallen
// dit is niet handig
let switchEindcijfer = 9;
switch (switchEindcijfer) {
    case 1:
        console.log('onvoldoende')
        break;
    case 2:
        console.log('onvoldoende')
        break;
    case 3:
        console.log('onvoldoende')
        break;
    case 4:
        console.log('onvoldoende')
        break;
    case 5:
        console.log('onvoldoende')
        break;
    case 6:
        console.log('voldoende')
        break;
    case 7:
        console.log('goed')
        break;
    case 8:
        console.log('goed')
        break;
    case 9:
        console.log('uitmuntend')
        break;
    case 10:
        console.log('uitmuntend')
        break;
    default: console.log('dat is wel erg knap')
        break;
}

// codesnippet
let purchasedBook = true;
let job = 'teacher';
let inTrain = true;

if (purchasedBook == true && job == 'teacher' && inTrain == true) {
    console.log('Finally I can enjoy my book!');
} else if (purchasedBook == true && job == 'teacher' && inTrain == false) {
    console.log('I\'ll have to wait until I\'m in the train.');
} else if (purchasedBook == true && job !== 'teacher' && inTrain == true) {
    console.log('I lost my teaching job, but at least I have a book :)');
} else if (purchasedBook == true && job !== 'teacher' && inTrain == false) {
    console.log('No teaching, so I\'m home enjoying my book');
} else if (purchasedBook == false && job == 'teacher' && inTrain == true) {
    console.log('I should\'ve bought that book...');
} else if (purchasedBook == false && job == 'teacher' && inTrain == false) {
    console.log('I don\'t have my book yet and I gotta hurry for the train!');
} else if (purchasedBook == false && job !== 'teacher' && inTrain == true) {
    console.log('I don\'t teach anymore, so I don\'t need that book anymore');
} else if (purchasedBook == false && job !== 'teacher' && inTrain == false) {
    console.log('Life sucks :(');
}