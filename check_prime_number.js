/*Prime numbers are 2, 3, 5 and 7,. And so is the whole number 11. They have no other factors on the shelf,. Except for 1 and the number itself*/
// How to check whether a number is prime or not in javascript?
// Hardcoded Method
var num = 47;
var isprime = true;
for (var i = 2; i < num; i++) {
    // i < num because on i=num it is completely divisible.we want to check before i=num,
    var result = num % i;
    if (result == 0) {
        console.log("NOT a Prime number = " + num + " divisible by =" + i)
        isprime = false;
        break;
    }

}
if (isprime) {
    console.log("Yes! Number is Prime = " + num);
}