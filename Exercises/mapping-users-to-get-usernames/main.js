// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending
const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

// Task 1:
// Solution 1 (Most Preferred)
const names1 = users.map((user) => user.name);
console.log(names1);
// Solution 2
const names2 = [];
users.forEach((user) => {
  names2.push(user.name);
});
console.log(names2);
// Solution 3 (Beginner Level)
const names3 = [];
for (let i = 0; i < users.length; i++) {
  names3.push(users[i].name);
}
console.log(names3);

// Task 2:

// Solution 1

// const names3 = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].isActive) {
    names3.push(users[i].name);
  }
}
console.log(names3);

// Solution 2
const active_users = users
  .filter((user) => user.isActive)
  .map((user) => user.name);

console.log(active_users);

// Task 3

//First we need to sort the array
const sorted_members = users.sort((user1, user2) =>
  user1.age < user2.age ? -1 : 1
);
console.log(sorted_members);
