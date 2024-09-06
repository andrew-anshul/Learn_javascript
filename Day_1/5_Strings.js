const name = "ansh"
const repoCount = 50

//bad practice
//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//oject
const gameName = new String('Shenlong')
console.log(gameName);
console.log(gameName[5]);
console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.indexOf('l'))

console.log(gameName.substring(0,4))

const gName = new String('     Shenlong    ')
console.log(gName);
console.log(gName.trim());

const url = "https://abc.com/ansh%20gupta"
console.log(url);

console.log(url.replace('%20','_'));
console.log(url.includes('ansh'));


