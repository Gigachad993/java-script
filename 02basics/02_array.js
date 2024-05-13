const marvelHeros = ["Captain America", "Thor", "Iron Man", "Hulk"];
const dcHeros = ["Batman", "Spider Man", "Flash", "Superman"]

// marvelHeros.push(dcHeors);

// const all_heros = marvelHeros.concat(dcHeros) // it does not modify the existing array

// marvelHeros.push(...dcHeros)

const allHeros = [...marvelHeros, ...dcHeros];
// console.log(allHeros)

// const anotherArr = [1, 2, 3, [4, 5, 7], 7, [8, 9, 7, [2, 3, 4, [2, 3, 4, 5], 3, 4], 2, 4, 5], 3, 5, 3];
const realAnotherArr = anotherArr.flat(Infinity);
// console.log(realAnotherArr);



console.log(Array.isArray("Gourav"))
console.log(Array.from("Gourav"))
console.log(Array.from({name: "Gourav"})) // always return an empty array
console.log(Array.from(Object.keys({name: "Gourav", age: 20})));
console.log(Array.of(marvelHeros,dcHeros,allHeros).flat())