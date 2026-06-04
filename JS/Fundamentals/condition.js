let a = 12,
  b = 23;

if (a > b) console.log(a + " is greater than " + b);
else if (a < b) console.log(a + " is less than " + b);
else console.log(a + " is equal to " + b);

let username = "admin";
let name = "admin1";

if (username == name) console.log("Welcome " + name);
else console.log("Invalid username");

let number = 44;

if (typeof number === "number") console.log(number + " is a Number");
else console.log(number + " is not a number");

let score = [44];

if (typeof score === "object") console.log("object");
else console.log(" not object");

let isActive = true;

if (isActive) console.log("true");
else console.log("false");

if (score.length === 0) console.log("Empty");
else console.log(score.length);
