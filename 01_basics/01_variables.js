const accountId = 144553
let accountEmail = "aditya.gmail.com"
var accountPassword = "12345"   // try not to use var
accountCity = "Bhopal"  // this is also possible, but try not to use this method of variable declaration
let accountState;   // this variable will be undefined

// accountId = 2    // not allowed

accountEmail = "giri@google.com"
accountPassword = "254287532"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
