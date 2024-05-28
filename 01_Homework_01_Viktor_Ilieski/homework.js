// ZADACHA 1//

let hasCoffe = true;
let hasTea = false;
let hasMilk = true;

// 1. Does the student have either tea or milk?
let result1 = hasTea || hasMilk;
console.log("Result-1", result1);

//2. Does the student have both coffe and tea?
let result2 = hasCoffe && hasTea;
console.log("Result-2", result2);

//3. Is it true that the student doesent have tea?
let result3 = !hasTea;
console.log("Result-3", result3);

//4. Does the student have either coffe or milk, but not both?
let result4 = (hasCoffe || hasMilk) && !(hasCoffe && hasMilk);
console.log("Result-4", result4);

//5. Is it true that the student has either tea and milg, or coffee and tea?
let result5 = (hasTea && hasMilk) || (hasCoffe && hasTea);
console.log("Result-5", result5);

//6. Does the student have neither coffe nor tea?
let result6 = !hasCoffe && !hasTea;
console.log("Result-6", result6);

//ZADACHA 2//
const num1 = 10;
const num2 = 5;
const num3 = 8;
const num4 = 2;
const num5 = 12;
const num6 = 4;
const num7 = 3;

const result7 = num1 + num2 + num3 / num4 + num5 * num6 + num7;
console.log("Result-7", result7);

const result8 = (num1 / num2) * (num3 * num4) + num5 + num6 * num7;
console.log("Result-8", result8);

const result9 = num1 * num2 * num3 + num4 * num5 * num6 + num7;
console.log("Result-9", result9);

const result10 =
  (num1 * num2 * num3) / (num4 * num1 * num4) + num5 + num6 + num7;
console.log("Result-10", result10);

const result11 = (num1 / num4) * (num2 * num6) + num5 * num7 + num3;
console.log("Result-11", result11);

//ZADACHA 3//
let number1 = 12;
let number2 = 4;

let sum = number1 + number2;
let diff = number1 - number2;
let mult = number1 * number2;
let div = number1 / number2;
let rem = number1 % number2;

console.log(
  "Собирање",
  sum,
  "Одземање",
  diff,
  "Множење",
  mult,
  "Делење",
  div,
  "Остаток",
  rem
);
