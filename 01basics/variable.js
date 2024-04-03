
var age = 19; // prefer not to use var because it is global scope variable

// instead of var you should use let and const bcz they are block scope variable.

let name = "Gourav";
name = "Kunal";
// console.log(name);

const gmail = "gouravmalviya445@gmail.com"; 
// gmail = "developergourav99@gmail.com"; // error: we can't update value of const variable
// console.log(gmail);

const arr = [1, 2, 3, 4];
arr[1] = 40;
arr[0] = 1000;
// console.log(arr);

const obj = {
    name: "Gourav",
    age: 19,
    sub: "BCA"
}
// obj.name = "karan";
// obj.age = 20;
// obj.sub = "MBA";

// obj = {
//     day: "one",   // error
//     name: "josaf"
// }
console.log(obj);