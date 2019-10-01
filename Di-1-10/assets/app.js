let me = {
    name: 'Pascal',
    age: 20,
    previousDiploma: 'Havo',
    hobbies: ['Game\'s spelen', 'Computeren', 'Wereldoverheersing'],
    vervoersmiddel: {
        naam: 'auto',
        wielen: 4,
    },
    familie: ['moeder', 'vader', 'kat', 'hond', 'broer'],
    vroom: function () {
        console.log(`Mijn favoriete vervoersmiddel is een ${me.vervoersmiddel.naam} en die heeft ${me.vervoersmiddel.wielen} wielen.`);
    },
    huisgenoten: function huisgenoten() {
        me.familie.forEach(function (fam) {
            console.log(fam);
        })
    }
};
me.vroom();
me.huisgenoten();
me.currentStudy = 'Hbo-ict';
//console.log(`Mijn favoriete vervoersmiddel is een ${me.vervoersmiddel.naam} en die heeft ${me.vervoersmiddel.wielen} wielen.`);
// met een for loop
//for (i=0; i<me.familie.length; i++){
//   console.log(me.familie[i])
//}
// met de punt notatie
//me.familie.forEach(function(fam) {
//    console.log(fam);
//})




const products = [
    {
        articleName: 'tandenborstel',
        price: 2.19
    },
    {
        articleName: 'deodorant',
        price: 3.19
    },
    {
        articleName: 'kippenvlees',
        price: 4.99
    },
];

let sum = 0;
products.forEach(function (value) {
    sum += value.price;
    console.log(value.price);
});
console.log(sum);

// huiswerk 
// staat al in JSON?

const teachers = [
    {
        name: 'Loek',
        profession: 'Teacher',
        brand: 'Linux',
        hoursPerWeek: 12,
        salary: 666.69,
    },
    {
        name: 'Daan',
        profession: 'Teacher',
        brand: 'Arduino',
        hoursPerWeek: 9,
        salary: 1012.00,
    },
    {
        name: 'Rimmert',
        profession: 'Teacher',
        brand: 'Apple',
        hoursPerWeek: 16,
        salary: 12.50,
    }
]

// opdracht 1 1
teachers.forEach(function (val) {
    console.log(`I have a ${val.profession} named ${val.name} and he likes to work on a ${val.brand} computer`)
})


// opdracht 2
let opdracht2 = {
    teachers: [
        {
            name: 'Loek',
            profession: 'Teacher',
            brand: 'Linux',
            hoursPerWeek: 12,
            salary: 666.69,
        },
        {
            name: 'Daan',
            profession: 'Teacher',
            brand: 'Arduino',
            hoursPerWeek: 9,
            salary: 1012.00,
        },
        {
            name: 'Rimmert',
            profession: 'Teacher',
            brand: 'Apple',
            hoursPerWeek: 16,
            salary: 12.50,
        }
    ],
    hourlyPay: function () {
        for (i = 0; i < opdracht2.teachers.length; i++) {
            let x = opdracht2.teachers[i].salary;
            let y = opdracht2.teachers[i].hoursPerWeek;
            console.log(`${opdracht2.teachers[i].name} verdiend ${x / y} euro per uur`);
       }
    }
}
opdracht2.hourlyPay();