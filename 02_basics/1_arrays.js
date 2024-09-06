// const arr = [0, 1, 2, 3, 4, 5]
// console.log(arr)

// const heros = ["spoder", 'baty', 'soper']
// console.log(heros)

const newArray= new Array(1,2,3,4)
// console.log(newArray.length);
// newArray.push(5);// add element in back
// newArray.pop(); // remove element in back
// newArray.unshift(21) // add element in front
// console.log(newArray)

// const myarr = newArray.join()
// console.log(myarr) // convert array to string

console.log("A ", newArray);

const myn1 = newArray.slice(1, 3)

console.log(myn1);
console.log("B ", newArray);


const myn2 = newArray.splice(1, 3)
console.log("C ", newArray);
console.log(myn2);

