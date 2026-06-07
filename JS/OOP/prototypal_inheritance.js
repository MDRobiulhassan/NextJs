function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`hello from ${this.name}`);
};

let robiul = new Person("robiul");
robiul.greet();
