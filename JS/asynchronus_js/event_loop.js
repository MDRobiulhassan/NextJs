function sayHello() {
  console.log("I would like to say Hello");
}

setTimeout(() => {
  sayHello();
}, 4000);

console.log("I am waiting for the timeout to finish");

for (let i = 0; i < 10; i++) {
  console.log(i);
}
