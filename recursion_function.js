/*It is like a loop
#function calls itself
#it can be infinte if no stopping condition is passed.
Example:
Calculate factorial of a number using recursive function*/
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(6)); //720