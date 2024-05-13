// arrays

const myArr = [1, 2, 4, 5, 6, 8];
const heros = ["Shaktiman", "Superhero", "Spider men"];

const newArr = new Array(1,2,3,4,5,6);
// const anotherArr = newArr;

// anotherArr = myArr;
// anotherArr[0] = 99;
// console.log(myArr);

// myArr.push(100); // add an element at the last 
// myArr.pop() // remove last element array
// myArr.unshift(10) // add an element at the first 
// myArr.shift(); // remove first element of array

// console.log(myArr.includes(5))
// console.log(myArr.indexOf(4))

// console.log(myArr)
// console.log(typeof myArr.join()) 


// Slice() and Splice()
// slice
console.log("A " , myArr);
const ans = myArr.slice(1, 5); // end index exclude
console.log(ans);
console.log("B " , myArr); // slice does not do any changes to main array it returns sliced copy of that array

console.log();
// splice
console.log("C ", myArr);
const ans2 = myArr.splice(1, 5); // end index include
console.log(ans2);
console.log("D ", myArr); // splice changes the main array and returns the deleted element of that array



