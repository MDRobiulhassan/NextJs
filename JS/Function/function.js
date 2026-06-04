function greet(name) {
  console.log("Hello " + name);
}

greet("Alice");

// 1
function makeTea(teaType) {
  return "Making " + teaType;
}

let teaOrder = makeTea("green tea");
console.log(teaOrder);

// 2
function orderTea(teaType) {
  function confirmOrder() {
    return "Order confirmed: " + teaType;
  }
  return confirmOrder();
}

let order = orderTea("black tea");
console.log(order);

// 3 Arrow function
const CalculateTotal = (price, quantity) => {
  return price * quantity;
};

let total = CalculateTotal(10, 5);
console.log("Total: " + total);

// 4
function makeTea(teaType) {
  return `makeTea:${teaType}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

console.log(processTeaOrder(makeTea));

// 5
function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

let teaMaker = createTeaMaker();
console.log(teaMaker("green Tea"));
