console.log("Hello, World!");

process.stdout.write("This is a message without a newline.");
process.stdout.write(" This is on the same line.");

console.table({name:"Alice", age: 30, city: "New York"});
console.warn({city: "Los Angeles", population: 4000000});