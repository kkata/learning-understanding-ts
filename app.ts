// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum
enum Role {
  ADMIN = 5,
  READ_ONLY = "",
  AUTHOR = 1,
}

console.table(Role);

const person = {
  name: "yota",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// not error
// person.role.push("admin");

// error
// person.role[1] = 10;
// person.role = [0, "admin", 100];

console.table(person);

if (person.role === Role.ADMIN) {
  console.log("管理者ユーザ");
}
