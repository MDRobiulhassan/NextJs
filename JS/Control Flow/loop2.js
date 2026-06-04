// 1
let tea = ["green", "black", "oolong", "white", "chai"];
let selectedTea = [];

for (let i = 0; i < tea.length; i++) {
  if (tea[i] == "chai") break;
  selectedTea.push(tea[i]);
}

console.log(selectedTea);

// 2
let cities = ["Berlin", "Madrid", "Rome", "Paris"];
let cityList = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] == "Rome") continue;
  cityList.push(cities[i]);
}
console.log(cityList);

// 3
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (let number of numbers) {
  if (number == 4) continue;
  smallNumbers.push(number);
}
console.log(smallNumbers);

// 4
tea = ["green", "black", "oolong", "white", "chai"];
let preferredTea = [];

for (let teaType of tea) {
  if (teaType == "oolong") continue;
  preferredTea.push(teaType);
}

console.log(preferredTea);

// 5
let poulation = {
  Berlin: 3644826,
  Madrid: 3223334,
  Rome: 2872800,
  Paris: 2140526,
};

let cityPopulation = {};

for (let city in poulation) {
  if (city == "Rome") break;
  cityPopulation[city] = poulation[city];
}

console.log(cityPopulation);

// 6
let population = {
  Berlin: 3644826,
  Madrid: 3223334,
  Rome: 2872800,
  Paris: 2140526,
};

let largeCities = {};

for (let city in population) {
  if (population[city] < 3000000) continue;
  largeCities[city] = population[city];
}
console.log(largeCities);

// 7
tea = ["green", "black", "oolong", "white", "chai"];
let availableTea = [];

tea.forEach((element) => {
  if (element == "white") return;
  availableTea.push(element);
});

console.log(availableTea);

tea.forEach(function (element) {
  if (element == "white") return;
  availableTea.push(element);
});

console.log(availableTea);

//8
cities = ["Berlin", "Madrid", "Rome", "Paris"];
let travelledCities = [];

cities.forEach((city) => {
  if (city == "Madrid") return;
  travelledCities.push(city);
});

console.log(travelledCities);

// 9
numbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == 3) continue;
  doubledNumbers.push(numbers[i] * 2);
}
console.log(doubledNumbers);

// 10
let teas = ["green tea", "black tea", "oolong tea", "white tea", "chai tea"];
let shortTeas = [];

for (let tea of teas) {
  if (tea.length > 10) break;
  shortTeas.push(tea);
}
console.log(shortTeas);
