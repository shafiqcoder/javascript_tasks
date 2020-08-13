/**
 * for..in loop is used for enumerables (Objects in javascript are enumerables)
 * for..of loop is used for iterables (Arrays in javascript are iterables)
 *
 * @source https://medium.com/better-programming/what-is-the-difference-between-for-in-and-for-of-in-javascript-650952654e97
 */
let userOne = {
  name: "shafiq",
  age: 26,
  email: "shafiq@mail.com",
  street: 9,
};

for (let key in userOne) {
  console.log(key);
  console.log(userOne[key]);
  console.log(key + ": " + userOne[key]);
}

console.log(userOne.age);
console.log(userOne["age"]);

let nums = [1, 2, 3, 4, 5];

for (let val of nums) {
  console.log(val);
}

// Object.entries returns us an array with key value pairs in it. like thie [key, value]
for (let [key, value] of Object.entries(userOne)) {
  console.log(key);
  console.log(value);
}

// Object.keys() returns us only the keys of object
for (let key of Object.keys(userOne)) {
  console.log(key);
}

// Object.values() returns us only the values of object
for (let value of Object.values(userOne)) {
  console.log(value);
}
