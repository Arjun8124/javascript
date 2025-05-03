// console.log(2>1)
// console.log(2<=1)
// console.log(3 == 1)
// console.log(1 == 1)
// console.log(5 >= 3)

//never do this type of code, as it is never recommended!

console.log(null == 0)
console.log(null > 0)
console.log(null <= 0)

//console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined <= 0)

//this is because js treats comparison operators < <= > >= different than ==
//in comparison null is converted to 0, and then it is compared to all the values of 0
//in JAVASCRIPT equality AND COMPARISON CHECK ARE DIFFERENT
//<,<=,>,>= is different than ==

//=== this is different from == because it checks the datatypes of the variables as well.

//console.log("25" === 25); //false
console.log(25 === 25) //because value as well as datatype is being checked(strict checking).