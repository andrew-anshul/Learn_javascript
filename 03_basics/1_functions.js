// function name(){
// console.log("ansh")
// }
// name();

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

//  console.log("Result:", result);

function loginUserMessage(username){
    if(!username){
     //   console.log("PLease enter a username");
        return `PLease enter a username`
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){

    return num1
}
// console.log(calculateCartPrice(123,345,654,3123));

const user = {
name:"ansh",
price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
    
}
// handleObject(user);
handleObject({
    name:"Sam",
    price: 399
});

const myArray = [200,300,500,600]

function valOfArray(getarray){
return getarray[2]
}

console.log(valOfArray(myArray));
