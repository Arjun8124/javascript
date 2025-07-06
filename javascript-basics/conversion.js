let a = undefined
console.log(typeof a)

let b = Number(a)
console.log(typeof b)
console.log(b)

//"30" => 30 easy
//"30abc" => NaN(not a number)
//"" => 0
//null => 0
//undefined => NaN

let c = undefined
let string = '30'
let d = Boolean(c)
console.log(d)

//anything except 0, "", null, undefined, NaN is true
