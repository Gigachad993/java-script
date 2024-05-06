// Primitive
// 7 types : String, Number, bigInt, Boolean, null, undefined, Symbol

let score = 300;  // number
let scoreValue = 300.5; // number
let instaUsers = 2309402834024059082309583024n; // bigInt

let isLoggedIn = true; // boolean
let outsideTemp = null; // null
let uerrEmai; // undefined

let id1 = Symbol('123'); // symbol
// let id2 = Symbol('123');
// console.log(id1 === id2); // always unique even we pass the same value

// Reference (Non - Primitive)
// Array, Object, Function

let heros = ["Thor", "Captain america", "Miss Marvel", "Iron Man"]; // array

let studentInfo = { 
    name: "gourav",
    age: 19,
    email: "gouravmalviya445@gmail.com",
    address: "Kota"
} // object


// function:-
function helloworld(name){
    return `Hello ${name}`;
} // function

const greeting = () => {
    return "Hello world";
} // arrow function

// console.log(greeting())
// console.log(helloworld("Gourav"));

// console.log(typeof helloworld); // function
// console.log(typeof greeting)

console.log(typeof studentInfo); // object

console.log(typeof heros)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack 
// primitives are stored in stack
let num = 10;
let name = 20;

// heap 
// references are stored in heap
let obj1 = {
    name: "gourav",
    age: 19,
    email: "gouravmalviya@gmail.com"
}

let obj2 = obj1;

obj2.email = "kunal@kunal.com";

console.log(obj1.email);
console.log(obj2.email);
