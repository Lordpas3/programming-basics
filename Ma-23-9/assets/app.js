/*

// 1.
let i = 11;
while (i >= 1) {
    --i;
    console.log(i)
}

// 2.
let message = 'Het is maandag!';
let mes = 0;
while (mes < message.length) {
    console.log(message.charAt(mes));
    mes++
}

// 3.
let g = 'Geweldig';
let charg = 7;
while (charg >= 0){
    console.log(g.charAt(charg));
    --charg
}

// 1.
let h = 0;
for (h=0;h < 11;h++)
    console.log(h)


// 2.
let m = 'Het is maandag!';
let mm = 0;
for (mm=0; mm < m.length; mm++)
    console.log(m.charAt(mm));

*/


// huiswerk 1
for (let h2 = 1; h2 <= 25; h2++) {
    if (h2 % 4 == 0) {
        console.log( h2 + ' is deelbaar door 4')
    } else {
        console.log( h2 + ' is niet deelbaar door 4')
    }
}

// huiswerk 2
let aa = 1;
let ab = 1;
while (aa < 100) {
    console.log(aa)
    ab = ab + aa;
    aa = ab - aa;
}

// huiswerk 3
let start = true
let array3 = [2, 4, 8, 9, 12, 13];
let add = 0;
for (let i = 0; i < array3.length; i++) {
    add = array3[i] + add;
    console.log(add);
}