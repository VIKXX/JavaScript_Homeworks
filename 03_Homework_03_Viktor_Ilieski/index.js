// Задача 1.

let book = {
    name: "Harry Potter: The Complete Series",
    published: "October 8, 2021",
    author: "Joanne K. Rowling ",
    originalLanguage: "English",
    genres: ["Fantasy Fiction", "Adventure fiction", "Contemporary fantasy"]
}

let car = {
    model: "Skoda",
    owner: {
        name: "Viktor",
        surname: "Ilieski",
        city: "Prilep-Skopje"
    },
    performance: {
        engine: "2.0TDI 150Hp",
        navigation: true,
    }
}

let student2 = {
    name: "Viktor",
    surname: "Ilieski",
    university: "Ss. Cyril and Methodius Skopje",
    facutly: "FINKI",
    passedExams: {
        webDesign: "Grade: A",
        internetTechnologies: "Grade: B",
        calculus1: "Grade: A"
    }
}

// Задача 2.a

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Задача 2.b
let start = 3
let end = 10

let sum = 0;
for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        sum = sum + i
    }
}
console.log(sum)

// Задача 2.v

let person = {
    name: "Viktor Ilieski",
    age: 32,
    city: "Skopje"
}

for (let key in person) {
    console.log(key + ":" + person[key])
}

// Задача 2.g

let colors = ["red", "green", "blue", "purple", "yellow"]
for (let color of colors) {
    console.log(color.length, color)
}

// Задача 3.a

let count = 5

while (count >= 1) {
    console.log(count)
    count--
}

// Задача 3.b

let num = 10
do {
    console.log(num)
    num--

    if (num === 4) {
        break
    }
}
while (num >= 0)


// Задача 4
let students = [

    {
        name: "Viktor",
        surname: "Ilieski",
        age: 32,
        address: {
            city: "Skopje",
            zipCode: 1000,
            street: {
                name: "Bote Bocevski",
                number: 20,
                zipCode: 1000
            }
        }
    },
    {
        name: "Aleksandra",
        surname: "Ilieski",
        age: 29,
        address: {
            city: "Skopje",
            zipCode: 1000,
            street: {
                name: "Kiro Krstevski",
                number: 25,
                zipCode: 1000
            }
        }
    },

]
console.log(students[0].address.city)
console.log(students[1].address.street["name"]);

// Задача 5.a

for (i = 1; i <= 100; i += 4) {
    console.log(i)
}

// Задача 5.b
for (i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// Задача 6.a

let citys = ["Prilep", "Skopje", "Bitola", "Kavadarci", "Tetovo", "Delchevo", "Veles", "Kavadarci", "Ohrid", "Struga"]
for (let city in citys) {
    console.log(citys[city]);
}

// Задача 6.b

let cities = ["Prilep", "Skopje", "Bitola", "Kavadarci", "Tetovo", "Delchevo", "Veles", "Kavadarci", "Ohrid", "Struga"]
for (let key of cities) {
    console.log(key);
}