// Search-Logic
// To check userInput value exist in array/database
var array = [23, 4, 456, 7, 10, 22, 34, 56, 87, 40, 10]
var input = 10;
// Hardcoded(prompt can also be used here)
var found = false;
for (var i = 0; i < array.length; i++) {
    if (array[i] == input) {
        console.log("Found " + input + " on index = " + i);
        found = true;
        break;
    }
}
if (!found) {
    console.log("Not Found");
}