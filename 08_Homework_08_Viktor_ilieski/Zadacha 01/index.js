// Задача 1.
// Во продолжение е даден следниот API endpoint: https://jsonplaceholder.typicode.com/users коj што враќа податоци за корисници. Потребно е да се прикажат следниве информации во пребарувачот за секој од корисниците:

// Име
// Телефонски број
// Името на компанијата на корисникот
// Да се искористи:

// async/await
// try и catch блокови
// екстерен CSS фајл за стилизирање. 

let url = "https://jsonplaceholder.typicode.com/users"

const fetchUserData = async () => {
    try {
        const response = await fetch(url);
        const userData = await response.json();
        // console.log(userData);

        const userName = document.getElementById("name-container");
        const userPhone = document.getElementById("phone-container");
        const userCompanyName = document.getElementById("company-name-container");

        userData.forEach((user) => {

            const name = document.createElement("p");
            name.textContent = user.name;
            userName.appendChild(name);

            const phone = document.createElement("p");
            phone.textContent = user.phone;
            userPhone.appendChild(phone);

            const companyName = document.createElement("p");
            companyName.textContent = user.company.name;
            userCompanyName.appendChild(companyName);
        });
        console.log('yea')

    }

    catch (error) {
        console.log(error);
    }
}

fetchUserData();



// Задача 2.
// Во продолжение е даден следниот API endpoint: https://rickandmortyapi.com/api/character кој што враќа податоци за карактерите од цртаниот филм Rick and Morty. Ваша задача е да ги прикажете следниве податоци за секој карактер во форма на картичка:

// Слика
// Име
// Пол
// Статус
// Бројот на епизоди во кој се појавил
// Дополнително:

// Еден ред да содржи 5 картички.
// Доколку статусот на карактерот е “Alive” текстот да биде во зелена боја, доколку е “Dead” текстот да биде во црвена боја, доколку е “Unknown” да биде во сива боја.
// За стилизирање да се искористи екстерен CSS фајл.