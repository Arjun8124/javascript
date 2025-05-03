//primitive

//primitive datatypes are called as primitive because in JavaScript we treat these datatypes as call by value, which means that changes only occur in the copy of these variables and not the actual original variable.
console.log(typeof 10) // number
console.log(typeof "Arjun") // string
console.log(typeof true) // boolean
console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof Symbol()) //symbol
console.log(typeof 123234n) //bigint

//Non-Primitive

//Non-primitive datatypes are those which are always accessed by reference, which means any change to these also happens in the original values.

//array //type of is an object
let arr = ["Arjun",1,2,3,"Potato"]
console.log(arr)
arr[2] = "Kaveesh"
console.log(arr)
console.log(typeof arr)

//object //type of is also object
let obj = {
    name: "Arjun",
    age: 20,
    hobbies: ["Reading","Playing"]
}
console.log(obj.name)
console.log(obj.hobbies[0])
console.log(typeof obj)

//function //type of is a functional object//or function
let func = function(){
    return 2+5
}
console.log(func())
console.log(typeof func)