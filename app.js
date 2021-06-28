"use strict";
var person = {
    name: "yota",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
// not error
// person.role.push("admin");
// error
// person.role[1] = 10;
// person.role = [0, "admin", 100];
console.table(person);
