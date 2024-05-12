const score = 100;

const anotherScore = new Number(10023);
// console.log(anotherScore);

// console.log(anotherScore.toString().length);
// console.log(anotherScore.toFixed(2));

let num = 318.2632;
// console.log(num.toPrecision(4))

let hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));



// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

// console.log(Math.abs(100)) // negative to positive
// console.log(Math.round(44.33))
// console.log(Math.ceil(88.3))
// console.log(Math.floor(88.3))
// console.log(Math.min(1,2,3,4,5,6))
// console.log(Math.max(1,2,3,4,5))
console.log(Math.floor((Math.random() * 10) + 1))

const min = 100;
const max = 200;

const randomValue = Math.floor((Math.random() * (max - min + 1)) + min);
console.log(randomValue)