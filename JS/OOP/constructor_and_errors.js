// Constructor
function Car(name, model) {
  this.name = name;
  this.model = model;
}

let myCar = new Car("Toyota", "Corolla");
console.log(`myCar `, myCar);

let newCar = new Car("Honda", "Civic");
console.log(`newCar `, newCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a ${this.type} tea.`;
  };
}

let greenTea = new Tea("Green");
console.log(greenTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.makeSound = function () {
  return `${this.species} makes a sound.`;
};

// Error handling in constructor
let dog = new Animal("Dog");
console.log(dog.makeSound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with 'new'");
  }
  this.name = name;
}

let coffee = Drink("Coffee");
console.log(coffee);
