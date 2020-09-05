/* How to make promises??
Example 1:
Apply promises to division function.
*/
function divide(a, b) {
    return new Promise(function (resolve, reject) {
        if (b === 0) {
            reject('You cannot divide by Zero!');
            return; //Code will not procede to next block.
        }
        resolve(a / b);
    });
}
//Call the division function
divide(90, 45).then(function (result) {
    console.log(`Division Success: ${result}`);
}).catch(function (error) {
    console.log("There was an error with division!");
    console.log(error);
});

/*Example 2:
Apply promises to wait function.
*/

function wait(ms) {
    return new Promise(function (resolve, reject) {
        if (ms <= 0) {
            reject(new Error('Cannot wait 0 seconds or less than 0 number'));
            return;
        }
        setTimeout(function () {
            resolve();
        }, ms);

    });
}
//Call the wait function.
wait(1000).then(function () {
    console.log(`We have waited ${1000} milliseconds!`);
}).catch(function (error) {
    console.log(`There was an error: ${error.message}`);
})
