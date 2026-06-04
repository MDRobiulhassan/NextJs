let sum = 0;

let i = 0;

while (i < 10) {
  sum += i;
  i++;
}

console.log(sum);

// 2
let count = 5;
let countdown = [];
while (count > 0) {
  countdown.push(count);
  count--;
}
console.log(countdown);

// 3
let teaCollections = [];

let tea;
do {
  tea = prompt("What is your favorite tea?");
  if (tea !== "stop") teaCollections.push(tea);
} while (tea !== "stop");

// 4
let total = 0;
i = 0;
do {
  total += i;
  i++;
} while (i < 4);
console.log(total);

// 5
let numbers = [2, 4, 6];
let multipliedNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  multipliedNumbers.push(numbers[i] * 2);
}
console.log(multipliedNumbers);

// 6
let cities = ["Berlin", "Madrid", "Rome", "Paris"];
let cityList = [];

for (let i = 0; i < cities.length; i++) {
  cityList.push(cities[i].toUpperCase());
}
console.log(cityList);
