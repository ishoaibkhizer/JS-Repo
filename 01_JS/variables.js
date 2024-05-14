const accountId = 144553;
let accountEmail = "shoaib@gmail.com";
var accountPassword = "12345";
accountCity = "lahore";
let accountState;

// accountId = 2 // not allowed


accountEmail = "msk@gmail.com";
accountPassword = "21212121";
accountCity = "Faislabad";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])