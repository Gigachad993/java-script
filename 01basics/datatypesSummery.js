
// memory: Stack(Primitive), heap(reference)

let myLinkedIn = "gouravmalviya"
let anotherAcc = myLinkedIn;
anotherAcc = "GouravMalviya445"

// console.log(myLinkedIn)
// console.log(anotherAcc)

let myObj = {
    name: "Gourav",
    upi: "gourav@ybl"
}

let anotherObj = myObj
anotherObj.name = "kunal"
anotherObj.upi = "kunal@ybl"

console.log(myObj)
console.log(anotherObj)