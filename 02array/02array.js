const marvleHeros = ["Thor", "IronMan", "Hulk"];
const dcHeros = ["Superman", "Batman", "Spidy"];

// marvleHeros.push(dcHeros) // this method changes the exixting array
// console.log(marvleHeros[3])

// const allHeros = marvleHeros.concat(dcHeros) // this method return a new array
// console.log(allHeros)

// const allNewHeros = [...marvleHeros, ...dcHeros]; // ... => spred operator
// console.log(allNewHeros);

const realArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [4, 5]]]
const realAnotherArray = realArray.flat(Infinity);
// console.log(realAnotherArray)

console.log(Array.isArray("Gourav"))
console.log(Array.from("Gourav"))
console.log(Array.from({name: "Gourav"})) // return empty array! Object.keys({name: "Gourav"})

const s1 = 300;
const s2 = 400;
const s3 = 500;
console.log(Array.of(s1, s2, s3)); 