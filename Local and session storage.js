console.log("This is Local and Session Storage Introduction")
//Note: Local storage always stores in browser and specific for each website,
//session storage expires when we close browser.

//LOCAL STORAGE

//Add a key-value pair inside local storage
localStorage.setItem("firstName", "Shafiq");
localStorage.setItem("lastName", "ur Rehman");

// Clears the entire local storage
localStorage.clear();
//Clear a particular key-value pair
localStorage.removeItem("firstName");//pass a key

//How to retrieve an item from local storage?
const getItem = localStorage.getItem("lastName");
console.log(getItem);

// How to save array in local storage.
let myArray = ["freecodecamp", "w3school", "twitter"];
localStorage.setItem("websites", JSON.stringify(myArray)); //JSON.stringify takes object and returns string
// How to retrieve array from local storage?
let getarray = JSON.parse(localStorage.getItem("websites"));//JSON.parse takes string and returns object.

//SESSION STORAGE

//same as local storage methods
sessionStorage.setItem("sessionName", "mySESSION")
sessionStorage.setItem("websites", JSON.stringify(myArray));