// Задача 1.

books = [
    { title: "Book 1", author: "Author A", year: 2000 },
    { title: "Book 2", author: "Author B", year: 2010 },
    { title: "Book 3", author: "Author C", year: 2020 },
]

//Да се искористи методот forEach() за итерирање низ низата книги и испечатете го насловот и авторот на секоја книга во конзолата.

books.forEach(book => {
    console.log(book.title, book.author);
});

//Да се искористи методот find() за да се најде првата книга издадена после 2000та година.
let book = books.find(book => book.year > 2000)
console.log(book);


// Задача 2.

person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main Street",
        city: "New York",
        state: "NY",
        postalCode: "10001",
    },
    hobbies: ["Reading", "Traveling", "Cooking"],
}
//а. Да се креира уште еден објект кој што ќе се вика additionalInfo и ќе ги содржи својствата:

additionalInfo = {
    email: ("viktor_ilieski@hotmail.com"),
    phone: ("+38971369551"),
    education: {
        degree: ("Master Degree"),
        major: ("360 Credits"),
    }
}

const conObject = { ...person, ...additionalInfo }
console.log(conObject);

//б. За следниот даден објект:

user = {
    id: 123,
    username: "jsmith",
    fullName: { firstName: "John", lastName: "Smith" },
    contact: { email: "john@example.com", phone: "555-555-5555" },
    addresses: [
        {
            type: "home",
            street: "123 Main Street",
            city: "New York",
            state: "NY",
            zip: "10001",
        },
        {
            type: "work",
            street: "456 Market Street",
            city: "San Francisco",
            state: "CA",
            zip: "94105",
        },
    ],
}

//Да се употреби деструктурирање(destructuring) за да се извлечат следниве информации од објектот во променливи:

//Својството username
const { username } = user
console.log(username)

//Својствата firstName and lastName од fullName
const { firstName, lastName } = user.fullName
console.log(user.fullName);

//Својството email од contact
const { email } = user.contact
console.log(email)

//home address (првиот елемент од addresses низата) во променливи: homeStreet, homeCity, homeState и homeZip.
// const { homeStreet, homeState, homeZip } = user.addresses[0]
const { street: homeStreet, city: homeCity, state: homeState, zip: homeZip } = user.addresses[0]
console.log(homeStreet, homeCity, homeState, homeZip)

//work address (вториот елемент од addresses низата) во променливи: workStreet, workCity, workState и workZip.
const { street: workStreet, city: workCity, state: workState, zip: workZip } = user.addresses[1]
console.log(workStreet, workCity, workState, workZip)


// Задача 3.

const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
]

//а. Испечатете ги сите земји што имаат „land“ во своето име и направете ги со големи букви.

for (country of countries) {
    if (country.endsWith("land")) {
        console.log([country.toUpperCase()])
    }
}

// //б. Испечатете ги сите земји што завршуваат со 'ia' и нивното име е поголемо од 7 букви.

for (country of countries) {
    if (country.endsWith("ia") && country.length > 7) {
        console.log([country])
    }
}


// Задача 4.
let zooAnimals = [
    {
        id: "0938aa23-f153-4937-9f88-4858b24d6bce",
        name: "lions",
        popularity: 4,
        location: "NE",
        residents: [
            {
                name: "Zena",
                sex: "female",
                age: 12,
            },
            {
                name: "Maxwell",
                sex: "male",
                age: 15,
            },
            {
                name: "Faustino",
                sex: "male",
                age: 7,
            },
            {
                name: "Dee",
                sex: "female",
                age: 14,
            },
        ],
    },
    {
        id: "e8481c1d-42ea-4610-8e11-1752cfc05a46",
        name: "tigers",
        popularity: 5,
        location: "NW",
        residents: [
            {
                name: "Shu",
                sex: "female",
                age: 19,
            },
            {
                name: "Esther",
                sex: "female",
                age: 17,
            },
        ],
    },
    {
        id: "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
        name: "bears",
        popularity: 5,
        location: "NW",
        residents: [
            {
                name: "Hiram",
                sex: "male",
                age: 4,
            },
            {
                name: "Edwardo",
                sex: "male",
                age: 4,
            },
            {
                name: "Milan",
                sex: "male",
                age: 4,
            },
        ],
    },
    {
        id: "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
        name: "penguins",
        popularity: 4,
        location: "SE",
        residents: [
            {
                name: "Joe",
                sex: "male",
                age: 10,
            },
            {
                name: "Tad",
                sex: "male",
                age: 12,
            },
            {
                name: "Keri",
                sex: "female",
                age: 2,
            },
            {
                name: "Nicholas",
                sex: "male",
                age: 2,
            },
        ],
    },
    {
        id: "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
        name: "otters",
        popularity: 4,
        location: "SE",
        residents: [
            {
                name: "Neville",
                sex: "male",
                age: 9,
            },
            {
                name: "Lloyd",
                sex: "male",
                age: 8,
            },
            {
                name: "Mercedes",
                sex: "female",
                age: 9,
            },
            {
                name: "Margherita",
                sex: "female",
                age: 10,
            },
        ],
    },
    {
        id: "89be95b3-47e4-4c5b-b687-1fabf2afa274",
        name: "frogs",
        popularity: 2,
        location: "SW",
        residents: [
            {
                name: "Cathey",
                sex: "female",
                age: 3,
            },
            {
                name: "Annice",
                sex: "female",
                age: 2,
            },
        ],
    },
    {
        id: "78460a91-f4da-4dea-a469-86fd2b8ccc84",
        name: "snakes",
        popularity: 3,
        location: "SW",
        residents: [
            {
                name: "Paulette",
                sex: "female",
                age: 5,
            },
            {
                name: "Bill",
                sex: "male",
                age: 6,
            },
        ],
    },
    {
        id: "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
        name: "elephants",
        popularity: 5,
        location: "NW",
        residents: [
            {
                name: "Ilana",
                sex: "female",
                age: 11,
            },
            {
                name: "Orval",
                sex: "male",
                age: 15,
            },
            {
                name: "Bea",
                sex: "female",
                age: 12,
            },
            {
                name: "Jefferson",
                sex: "male",
                age: 4,
            },
        ],
    },
    {
        id: "01422318-ca2d-46b8-b66c-3e9e188244ed",
        name: "giraffes",
        popularity: 4,
        location: "NE",
        residents: [
            {
                name: "Gracia",
                sex: "female",
                age: 11,
            },
            {
                name: "Antone",
                sex: "male",
                age: 9,
            },
            {
                name: "Vicky",
                sex: "female",
                age: 12,
            },
            {
                name: "Clay",
                sex: "male",
                age: 4,
            },
            {
                name: "Arron",
                sex: "male",
                age: 7,
            },
            {
                name: "Bernard",
                sex: "male",
                age: 6,
            },
        ],
    },
]

//а. испечатете ги имињата на животните кои имаат популарност поголема од 4

let popularityName = zooAnimals.filter((element) => element.popularity > 4);
for (name1 of popularityName)
    console.log([name1.name])


// б. отпечатете го името на најстариот слон

let olderElephant = zooAnimals
    .filter((olderObject) => olderObject.name === "elephants")[0]
    .residents.sort((a, b) => b.age - a.age)[0].name
console.log([olderElephant])


// в. испечатете ги сите имиња на пингвини кои се помали од 10 години и се женки

let penguins = zooAnimals
    .find((animal) => animal.name === "penguins")
    .residents
    .filter(penguin => penguin.sex === "female" && penguin.age < 10)

console.log([penguins[0].name])


// г. најдете ја групата животни чие име има најмногу букви и потоа испечатете го збирот на возраста на жителите
let animalWithLongestName = zooAnimals
    .sort((a, b) => b.name.length - a.name.length)
[0].residents.reduce((acc, curr) => acc + curr.age, 0)
console.log([animalWithLongestName])


// д. најдете која група на животни има најмал број жители и најголем број жители, потоа направете нова низа која ги содржи сите имиња на жителите

let lowestNumofResidents = zooAnimals
    .sort((a, b) => a.residents.length - b.residents.length)
[0].residents.map((a) => a.name)
console.log(lowestNumofResidents)


let bigesttNumofResidents = zooAnimals
    .sort((a, b) => b.residents.length - a.residents.length)
[0].residents.map((a) => a.name)
console.log(bigesttNumofResidents)

let allNamesArray = [...lowestNumofResidents, ...bigesttNumofResidents]
console.log(allNamesArray)

// Задача 5.
// Напишете функција наречена checkGrade која зема нумеричка оценка како аргумент и враќа соодветна оценка за букви. Оценките на буквите треба да се засноваат на следната скала:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59
// Да се искористи тернарниот оператор(ternary operator) во функцијата.

function checkGrade(grade) {
    return grade >= 90 ? "A" :
        grade >= 80 ? "B" :
            grade >= 70 ? "C" :
                grade >= 60 ? "D" :
                    "F"
}

let numericGrade = 65
let letterGrade = checkGrade(numericGrade)
console.log('The letter grade for', (numericGrade), 'is', (letterGrade))