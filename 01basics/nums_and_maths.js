const score = 200;

const balance = new Number(400);
// console.log(balance)
// console.log(balance.toExponential())
// console.log(balance.toFixed(2));

const currency = 40000000;
// console.log(currency.toLocaleString("en-IN"));

const number = 43.852;
// console.log(number.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')) 

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.NaN)

// +++++++++++++++++++++++++++  Maths  +++++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-3000000)); // absolute() => nagative value changed to positive;
// console.log(Math.round(2.92)); // round() => round off the value of nearest number
// console.log(Math.ceil(2.2));   // ceil() => round off the value to upper number
// console.log(Math.floor(2.9));   // floor() => round off the value to lower number
// console.log(Math.min(9,1,2,4,));
// console.log(Math.max(9,1,2,4,));


// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10 + 1))

const min = 100;
const max = 200;


console.log(Math.floor(Math.random() * (max - min + 1) + min));