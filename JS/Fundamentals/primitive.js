// primitives.js

console.log("===== Primitive Data Types =====");

// String
let name = "Robiul";
console.log("Value:", name);
console.log("Type:", typeof name);

// Number
let score = 102;
console.log("Value:", score);
console.log("Type:", typeof score);

// Boolean
let isActive = true;
console.log("Value:", isActive);
console.log("Type:", typeof isActive);

// Undefined
let temperature;
console.log("Value:", temperature);
console.log("Type:", typeof temperature);

// Null
let selectedUser = null;
console.log("Value:", selectedUser);
console.log("Type:", typeof selectedUser); // special JS behavior (returns object)

// Symbol
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log("Symbols equal?", id1 === id2);

// BigInt
let bigNumber = 123456789012345678901234567890n;
console.log("BigInt value:", bigNumber);
console.log("Type:", typeof bigNumber);

console.log("\n===== Primitive Copy Behavior =====");

let a = 10;
let b = a;

b = 20;

console.log("a:", a);
console.log("b:", b);

console.log("\n===== Using 'new' Keyword =====");

/*
JavaScript has object wrappers for primitives.
These are rarely used in practice.
*/

let strObj = new String("Hello");
let numObj = new Number(100);
let boolObj = new Boolean(true);

console.log(strObj);
console.log(numObj);
console.log(boolObj);

console.log(typeof strObj); // object
console.log(typeof numObj); // object
console.log(typeof boolObj); // object

console.log("\n===== Primitive vs Object Wrapper =====");

let primitiveString = "Hello";
let objectString = new String("Hello");

console.log(typeof primitiveString); // string
console.log(typeof objectString); // object

console.log(primitiveString == objectString); // true
console.log(primitiveString === objectString); // false
