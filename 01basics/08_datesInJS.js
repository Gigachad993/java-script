// Dates 
const myDate = new Date();
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString()) // mm/dd/yyyy, ('en-IN') => dd/mm/yyyy
// console.log(myDate.toLocaleString()) // date and time
// console.log(myDate.toLocaleTimeString()) // 12:01:43 pm

// const myNewDate = new Date(2005, 7, 21);
// const myNewDate = new Date(2005, 7, 21, 4, 5);
// const myNewDate = new Date("2005-8-21");
const myNewDate = new Date("2005-08-21");

// console.log(myNewDate.toLocaleString('en-IN'))
// console.log(myNewDate.toDateString())
// console.log(myNewDate.toLocaleDateString('en-IN'))

let timeStamp = Date.now();
// console.log(timeStamp)
// console.log(myNewDate.getTime())

// console.log(Math.floor(Date.now() / 1000))

const newDate = new Date();
// console.log(newDate.getMonth() + 1)
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getTime())
