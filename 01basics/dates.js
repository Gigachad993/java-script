// Dates:

const myDates = new Date();
// console.log(myDates)
// console.log(myDates.toString())      // toString() returns the string formate 
// console.log(myDates.toDateString())  // toDateString() returns current day month date year formate 
// console.log(myDates.toISOString())   // toISOString() returns ISO formate 

// console.log(myDates.toLocaleString('en-IN')) // toLocaleString() returns date and time

// console.log(myDates.toTimeString())  // toTimeString() returns universal time

// console.log(myDates.toLocaleTimeString('en-IN')) // toLocaleTimeString() returns time
// console.log(myDates.toLocaleDateString('en-IN')) // toLocaleDateString() returns current m/d/yyyy formate

// const myNewDate = new Date('2005-01-21');
const myNewDate = new Date("08-21-2005");
// console.log(myNewDate.toLocaleString());

const myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myNewDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // milisecon in seconds;

const date = new Date();
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMonth() + 1);
console.log(date.toLocaleString('default',{
    weekday: "long", // short: wed , long: wednesday, narrow: w
}))