let user = {
  name: "Alice",
  age: 30,
  isActive: true,
};

console.log(user);
console.log(typeof user);
console.log(user.name);

const user2 = {
  "first name": "Bob",
  age: 25,
  isActive: false,
};

user2["first name"] = "Charlie";
console.log(user2["first name"]);

today = new Date();
console.log(today);
console.log(typeof today);
console.log(today.getDate());

let arr = ["robiul", 25, false];
console.log(arr);
console.log(typeof arr);
console.log(arr[0]);

console.log("1" + 1);
console.log(Number("1") + 1);

let isActive = true;
console.log(isActive + 1);


let number = "2abc";
console.log(Number(number));
console.log(typeof Number);


console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Symbol("id"));
console.log(typeof NaN);