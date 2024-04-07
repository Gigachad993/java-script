// const tinderUser = new Object(); // singleton object
const tinderUser = {};

tinderUser.id = Date.now();
tinderUser.name = "Gam"
tinderUser.isLoggedIn = false 

// console.log(tinderUser)

const regularUser = {
    email: "gourav@ai.com",
    fullName: {
        userFullName: {
            firstName: "Gourav",
            lastName: "Malviya"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName)
// console.log(regularUser.fullName.userFullName.lastName)

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = { obj1, obj2 }; //  XXX

const mergerObj1 = Object.assign({}, obj1, obj2, {"name": "Gourav", "age": 19}) // with assign() method
// const mergerObj1 = Object.assign(obj1, obj2, {"name": "Gourav", "age": 19}) // prefer not to use this syntax;
const mergerObj2 = {...obj1, ...obj2}; // (...) => spread operator

// console.log("Obj 1: ", obj1)
// console.log("mergeObj1: ", mergerObj1)
// console.log("mergeObj2: ", mergerObj2)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // returns an arr of key/values

// Object.entries(tinderUser).map(arr => console.log(`${arr[0]}: ${arr[1]}`))

console.log(tinderUser.hasOwnProperty('name'))