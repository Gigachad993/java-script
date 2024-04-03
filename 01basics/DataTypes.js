// In javaScript there is two types of Data type: 

// 1st is: primitive:- number, string, boolean, bigInt, null, undefined, symbol;
// 2nd is: non primitive / reference type:- function, object, array;

// primitive: in premitive type you cannot access the actual value you got a copy of that value
const num = 10;
const str = "Gourav";
const learning = true;
const bigInt = 999988839838;
const temperature = null;
const countDown = undefined;
const idOne = Symbol('123')
const idtwo = Symbol('123')
// console.log(idOne === idtwo);

// reference type: in reference you got the reference of that value. so if any one the variable changes the value the value will changed for all the refference variable who are pointing to that value
const obj = {
    name: "gourav",
    age: 19
}

const arr = ["Gourav", 20, "alot"]

function sayHello(name){
    console.log(`Hello ${name}`);
}
sayHello("Gourav")