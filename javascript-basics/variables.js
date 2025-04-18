const accountId = 123456;
let accountEmail;
// always use let.
// var accountPassword = "12345";
// var ek number ka harami hota h kyuki scope mei problems le aata h never use var
let city;

// accountId = 123;
// console.log(accountId); not allowed to change const variables
accountEmail= "arjun@gmail.com";
// accountPassword = "123"
city = "chennai";
console.log(accountEmail);
console.table([accountEmail,accountId,city]);