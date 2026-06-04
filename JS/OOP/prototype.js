let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer,
};

console.log(`lenovo `, lenovo.__proto__);

let genericCar = { tyre: 4 };
let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);
console.log(`tesla `, tesla);
console.log(`tesla tyre `, tesla.tyre);
console.log(Object.getPrototypeOf(tesla));