/*
let lijst = document.getElementsByTagName('li');
console.log(lijst)

let lijst1 = lijst[0];
console.log(lijst1);

lijst[3].classList.add('yellow');

// referentie
let body = document.getElementById('body');
// creëren
let h1 = document.createElement('h1');
h1.innerText = 'Mooie header!';
// toevoegen (append)
body.prepend(h1);

const groceryList = [
    {
        name: 'Tandenborstel',
        price: 1.99
    },
    {
        name: 'Kaas',
        price: 4.95
    },
    {
        name: 'Geforce TTX 2080TI',
        price: 1600
    },
    {
        name: 'Ijsthee',
        price: 2.49
    },
];
*/
function writeToTheDom() {
    // groceryList[0].name en groceryList[0].price
    // 1. op welke plek in de DOM
    // 2. welke elementen?
    // tr, td (name), td(price)
    // 3. append
    let tabel = document.getElementById('groceryList');

    for (let i = 0; i < groceryList.length; i++) {
        let tabr = document.createElement('tr');
        tabel.append(tabr);

        let tdName = document.createElement('td');
        tdName.innerText = groceryList[i].name;
        tabel.append(tdName);

        let tdPrice = document.createElement('td');
        tdPrice.innerText = groceryList[i].price;
        tabel.append(tdPrice);
    }
}
// writeToTheDom();

// Huiswerk 1
function tabel() {
    let tab = document.getElementsByClassName('cijfer');
    let x = 0;
    for (let i = 0; i < tab.length; i++) {
        x = x + Number(tab[i].innerText);
        console.log(x);
    }
    let y = x / tab.length;
    console.log(y)

    let tabR = document.createElement('tr');
    tabR.innerText = y;
    let table = document.getElementById('table')
    table.append(tabR);
};

tabel();

// Huiswerk 2
function HW2() {
    let ulist = document.getElementsByTagName('li');
    for (let i = 1; i < ulist.length; i += 2) {
        console.log(ulist[i].innerText);   
        ulist[i].classList.add('red');
    }
}

HW2();

// Huiswerk 3
function createImageElement(imageSrcName) {
    let body = document.getElementById('body');
    let addImg = document.createElement('img');
    addImg.src = imageSrcName;
    body.append(addImg);
}
createImageElement('https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg');