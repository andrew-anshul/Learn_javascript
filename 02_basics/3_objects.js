// object literals
const mySym = Symbol("key")

const user = {
 name: "Ansh",
 "full name": "Anshul Gupta",
 [mySym]: "mykey",
 age: 12,
 location : "Jhansi",
 lastLogin:["Monday","Friday"]
}

console.log(user["full name"]);
console.log(typeof user[mySym]);

Object.freeze(user)
user.age = 19
console.log(user);


