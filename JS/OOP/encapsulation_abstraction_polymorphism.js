// Encapsulation
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$${this.#balance}`;
  }
}

let account = new BankAccount();
console.log(account.getBalance());

// Abstraction
class Coffee {
  start() {
    return `Starting the machine...`;
  }

  brewCoffe() {
    return `Brewing Coffee`;
  }

  pressStartButton() {
    let msg1 = this.start();
    let msg2 = this.brewCoffe();
    return `${msg1}${msg2}`;
  }
}

let coffee = new Coffee();
console.log(coffee.pressStartButton());

// Polymorphism
class Bird {
  fly() {
    return `flying`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

// Static
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(6, 3));

// Getters and Setters
class Employee {
  #salary;

  constructor(name, salary) {
    if (salary < 0) {
      console.log("Salary cannot be negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see the salary`;
  }

  set salary(newSalary) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative");
    }
    this.#salary = newSalary;
  }
}

let employee = new Employee("John", -50000);
console.log(employee.salary);
employee.salary = 60000;
console.log(employee.salary);
