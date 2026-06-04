class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Vehicle extends Car {
  drive() {
    return `This is an inheritance`;
  }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start());

let vehicle = new Vehicle("Tesla","TS1");
console.log(vehicle.model);
console.log(vehicle.make);
console.log(vehicle.drive());

