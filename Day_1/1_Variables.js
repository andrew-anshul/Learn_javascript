
const accountId = 123456 
let accountEmail = "abc@gmail.com"
var accountPassword = "abc@123"
let accountState;   //undefined

console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountState])