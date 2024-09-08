// Immediately Invoked Function Expreesion (IIFE)

(function fun1(){
    //named IIFE
console.log(`DB CONNECTED`);

})(); //; important for 2 IIFE

( (name) => {
    //unamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
    
}) ("Anshul");