

// Задача 1.

// Да се креира класа Animal која што ќе има барем две својства и два методи. Потоа да се направи класа Dog која што ќе наследува од класата Animal. Дополнително, класата Dog да има барем плус 
// уште едно својство и уште еден метод. Да се направат инстанци од двете класи и да се повикаат соодветните методи. Својствата и методите ги дефинирате вие сами.

class Animal {
    constructor(type, colour) {
        this.type = type
        this.colour = colour
    }

    presentation() {
        console.log(`I am a ${this.type} animal, and i have ${this.colour} colour on me.`)
    }
}


class Dog extends Animal {
    constructor(type, colour, fur) {
        super(type, colour)
        this.fur = fur
    }

    dogFur() {
        console.log(`I am a ${this.type} animal, and i have ${this.colour} colour on me. Also my fur is ${this.fur}.`)
    }
}

const animal = new Animal("Pinguin", "black and white")
const animalDog = new Dog("Dog", "brown", "fluffy")

animal.presentation()
animalDog.dogFur()


// Задача 2.

// Да се дефинира класа Rectangle со следните атрибути и методи:

// - color
// - width - приватна променлива
// - height - приватна променлива
// - Статичен метод getShapeType() кој што ќе враќа “Rectangle”
// - Гетери и сетери за атрибутите width и height
// - Метод getArea() кој што ќе ја пресметува плоштината
// - Метод describe() koj што ќе ги принта бојата, ширината и висината на правоаголникот.

// Да се направат неколку инстанци од оваа класа и да се употребат соодветните методи.

class Rectangle {
    #width
    #hight

    constructor(colour, width, hight) {
        this.colour = colour
        this.#width = width
        this.#hight = hight
    }

    static getShapeType() {
        return "Rectangle"
    }

    get dim1() {
        return this.#width
    }
    set dim1(dimensionOne) {
        return this.#width = dimensionOne
    }

    get dim2() {
        return this.#hight
    }
    set dim2(dimensionTwo) {
        return this.#hight = dimensionTwo
    }

    getArea() {
        return console.log(this.#width * this.#hight);
    }

    describe() {
        console.log(`Colour is ${this.colour}. Width is ${this.#width}. Hight is ${this.#hight}.`)
    }

}

const rectangle = new Rectangle("Red", 6, 10)

rectangle.describe()
rectangle.getArea()
console.log(Rectangle.getShapeType())
console.log(rectangle.dim1)
console.log(rectangle.dim2)

rectangle.dim1 = 50
rectangle.dim2 = 100
rectangle.getArea()



// Задача 3.

// Дефинирајте класа на банкарска сметка(BankAccount) со следните атрибути и методи:

// - Атрибути: accountNumber, accountHolder, balance
// - Методи: deposit(amount), withdraw(amount), getBalance()

// Спроведете валидација во методот на повлекување(withdraw) за да се осигурате дека износот за повлекување не го надминува тековното салдо(balance).

// Креирајте два примероци од класата BankAccount и извршете некои трансакции (депозити и повлекувања).


class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber
        this.accountHolder = accountHolder
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount
        console.log(`Amount ${amount} deposited into account ${this.accountNumber}`)
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount
            console.log(`Amount of ${amount} was withdrawn from your account ${this.accountNumber}`);
        } else {
            console.log(` Insufficient balance in account ${this.accountNumber}`);
        }
    }

    getBalance() {
        console.log(`Acoount: ${this.accountNumber}, Balance: ${this.balance} EUR `);
    }

}

const bankAccount1 = new BankAccount("ShparkaseBank-1000000004587", "Viktor Ilieski", 5000)
const bankAccount2 = new BankAccount("ShparkaseBank-1000000003698", "Aleksandra Ruvcheska Ilieska", 4000)

//Controling classes of BankAccounts
bankAccount1.getBalance()
bankAccount2.getBalance()

//Adding deposit on the bank accounts
bankAccount1.deposit(450)
bankAccount2.deposit(550)

bankAccount1.getBalance()
bankAccount2.getBalance()


//Withdraw amount from the bank accounts
bankAccount1.withdraw(1000)
bankAccount2.withdraw(1500)

bankAccount1.getBalance()
bankAccount2.getBalance()

