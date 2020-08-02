/*
switch statement executes a block of code depending on different cases.
It is a part of conditional statements.
it works for equality check, You cannot use range, greater than or less than checks etc.
It has one or more blocks and an optional "default".
example:
Use switch statement to check for weekend.
*/
var day = 3;
switch (day) {
    case 6:
        console.log("Today is Saturday!!");
        break;
    case 0:
        console.log("Today is Sunday!!");
        break;
    default:
        console.log("Looking forward to the Weekend!");
}
//example 2: Grouping of case 
var day = 3;
switch (day) {
    case 6:
        console.log("Today is Saturday!!");
    case 0:
        console.log("Today is Sunday!!");
        break;
    default:
        console.log("Looking forward to the Weekend!");
}
//example 3: Grouping of case- same output for more than one case 
var day = 3;
switch (day) {
    case 6:
    case 0:
        console.log("Today is Sunday!!");
        break;
    default:
        console.log("Looking forward to the Weekend!");
}