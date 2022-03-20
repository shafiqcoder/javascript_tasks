const array = ["freeCodeCamp", "W3school", "stackoverflow"];
const newarray = array.map(function (value, index, arr) {
    return index + ": " + value + this.name;
}, {
    name: "Web Developement",
});