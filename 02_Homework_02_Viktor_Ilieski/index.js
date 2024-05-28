//Zadacha Br. 1

// let globalNum=10
// function checkScope(){
//     let localNum = 10
//     console.log(globalNum);
// }
// // checkScope()
// console.log(globalNum === localNum);

if(true){
    let blockNum = 10;
    }

console.log(typeof blockNum)


//Zadacha br. 2a
let score = 90

if (score <= 100 && score >= 90) {
    console.log("Grade: A")
} else if (score <= 89 && score >= 80){
    console.log("Grade: B");
} else if (score <=79 && score >=70) {
    console.log("Grade: C");
} else if (score <=69 && score >=60){
    console.log("Grade: D");
} else if (score <=59 && score >=0){
    console.log("Grade: E");
} else {
    console.log("Invalid score! Please enter a score between 0 and 100");
}

//Zadacha br. 2b
let dayNumber = 5

switch (dayNumber){
    case 1:
        console.log("It's Monday");
        break
    case 2:
        console.log("It's Tuesday");
        break
    case 3:
        console.log("It's Wednesday");
        break
    case 4:
        console.log("It's Thursday")
        break
    case 5:
        console.log("It's Friday");
        break
    case 6:
        console.log("It's Saturday");
        break
    case 7:
        console.log("It's Sunday");
        break
    default:
        console.log(" Invalid day number. Please enter a number between 1 and 7")
}

//Zadacha br. 3

function additionNumbers(number1, number2, number3){
    let sum= number1+number2+number3
    return sum
}
console.log(additionNumbers(5, 25, 15));


function printMyNameClass(ClassName){
    return ClassName
}
console.log(printMyNameClass("Java Script"));



function comparation(num1, num2){
    if (num1 === num2) {
        return "These numbers are equal"
    }else{
        return "These numbers are not equal"
    }
}
console.log(comparation(10, 15));

//Zadaca br.4a

let age = 20
if (age >=18 && age <21){
    console.log("You can vote but not to buy alchohol");
} else if (age >=21){
    console.log("You can vote and to buy alchohol");
}else {
    console.log("You are under 18, please be patient to grow up :)");
}

//Zadaca br.4b

function myMonth(month){
    switch(month){
        case "January":
            console.log(31);
            break
        case "February":
            console.log(28);
            break
        case "March":
            console.log(31);
            break
        case "April":
            console.log(30);
            break
        case "May":
            console.log(31);
            break
        case "June":
            console.log(30);
            break
        case "July":
            console.log(31);
            break
        case "August":
            console.log(31);
            break
        case "September":
            console.log(30);
            break
        case "October":
            console.log(31);
            break
        case "November":
            console.log(30);
            break
        case "December":
            console.log(31);
            break
        default:
            console.log("Invalid input")
    }
}
myMonth("June");


//Zadaca br.4c

let temperature = 10

if (temperature >30) {
    console.log("The weather is HOT");
} else if (temperature >20 && temperature <=30) {
    console.log ("The weather is WARM")
} else if (temperature <=20 && temperature >=15) {
    console.log("The weather is NORMAL");
} else if (temperature <15) {
    console.log("The weather is COLD");
}



//Zadaca br.5

function myFizz(numberFizz){
    if (numberFizz%5===0 && numberFizz%3===0) {
        console.log("FIZZBUZZ");
    } else if (numberFizz%5===0 && numberFizz%3!==0){
        console.log("BUZZ")
    } else if (numberFizz%3===0){
        console.log("FIZZ")
    }else {
        console.log(numberFizz);
    }
}
myFizz(150)

