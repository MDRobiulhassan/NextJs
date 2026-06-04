// operations.js

console.log("===== Arithmetic Operators =====");

let a = 10;
let b = 3;

console.log("a =", a);
console.log("b =", b);

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

a++;
console.log("Increment a:", a);

b--;
console.log("Decrement b:", b);

console.log("\n===== Assignment Operators =====");

let score = 10;

console.log("Initial score:", score);

score += 5;
console.log("score += 5:", score);

score -= 3;
console.log("score -= 3:", score);

score *= 2;
console.log("score *= 2:", score);

score /= 4;
console.log("score /= 4:", score);

score %= 3;
console.log("score %= 3:", score);

console.log("\n===== Comparison Operators =====");

let x = 5;
let y = "5";

console.log("x == y:", x == y); // true (value equal)
console.log("x === y:", x === y); // false (type different)
console.log("x != y:", x != y);
console.log("x !== y:", x !== y);
console.log("x > 3:", x > 3);
console.log("x < 10:", x < 10);
console.log("x >= 5:", x >= 5);
console.log("x <= 4:", x <= 4);

console.log("\n===== Logical Operators =====");

let age = 20;

console.log("age > 18 && age < 30:", age > 18 && age < 30);
console.log("age > 30 || age < 25:", age > 30 || age < 25);
console.log("!(age > 18):", !(age > 18));

console.log("\n===== String Operations =====");

let firstName = "Robiul";
let lastName = "Islam";

let fullName = firstName + " " + lastName;

console.log("Full Name:", fullName);

console.log("\n===== Type Coercion Examples =====");

console.log('"5" + 3 =', "5" + 3);
console.log('"5" - 3 =', "5" - 3);
console.log("true + 1 =", true + 1);

console.log("\n===== Operator Precedence =====");

let result1 = 10 + 5 * 2;
console.log("10 + 5 * 2 =", result1);

let result2 = (10 + 5) * 2;
console.log("(10 + 5) * 2 =", result2);
