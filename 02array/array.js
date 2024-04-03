// array

const myArr = [1, 2, 3, 4, 5, 6,];
const arr2 = ["Iron-Man", "Thor", "Spidy"];
const arr3 = new Array(1,2,3,4,5);
// console.log(arr2[1]);

// Array methods:

// myArr.pop(); // remove last element
// myArr.push(1,2,3,4) // adding new elements in to the last
// myArr.shift() // remove first element
// myArr.unshift(5000,2000) // adding new elements to the first

// console.log(myArr)

// console.log(myArr.includes(4))
// console.log(myArr.indexOf(10209))

const newArr = myArr.join();
// console.log(myArr)
// console.log(typeof newArr);

// slice / splice

// slice
console.log("A: ", myArr);

const myN1 = myArr.slice(1,4);
console.log("B: ", myArr);
console.log(myN1);

// splice
const myN2 = myArr.splice(1,4);
console.log("C: ", myArr);
console.log(myN2);
