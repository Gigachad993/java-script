// singleton: when we create an object using singleton
// Object.create

// Object literals

const mySym = Symbol('key1')

const data = {
    name: "gourav",
    "full name": "Gourav Malviya",
    [mySym]: "myKey1",
    age: 19,
    email: "gouravmalviya@gmail.com",
    address: "Kota",
    isLogedIn: false,
    logedInDays: ["Monday", "Saturday"],
}

// console.log('name:', data.name)
// console.log('name:', data["name"])
// console.log('full name:', data["full name"])
// console.log(data[mySym])

data.email = "gourv@gmail.com"
data.address = "Delhi"

// Object.freeze(data) // when we use this freeze method to any object we can not change the objects value 
data.address = "USA"
console.log(data)  

data.greeting = function () {
    console.log("Hello JS Users...")
}
data.greetingTwo = function () {
    console.log(`Hello JS Users..., my name is ${this["full name"]}`)
}

// () => {}: in arrow func this refers to global object
// function () {}: in simple function when we created that in out object the this keyword refers to the same object.

data.greeting()
data.greetingTwo()
