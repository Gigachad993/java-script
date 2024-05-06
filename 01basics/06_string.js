const username = "gouravmalviua99";
const repoCount = 20;

// console.log("username: " + username + " repos: " + repoCount)

// String interpolation
console.log(`github username: ${username} and repos: ${repoCount}`)

// const name = new String("Gourav");
// console.log(name);
// console.log(name.__proto__);

// console.log(name.toUpperCase());
// console.log(name.trim());
// console.log(name.charAt(2));
// console.log(name.indexOf('G'))

// console.log(name.slice(0, 5)) // last index exclude

const gameName = new String("cricket")
const newString = gameName.substring(0, 4)
// console.log(newString);
// console.log(gameName)

const str2 = gameName.slice(0,4)
// console.log(gameName)
// console.log(str2)

const giturl = 'https://www.github.com/Gourav%20Malviya'
console.log(giturl.replace("%20", "-"))