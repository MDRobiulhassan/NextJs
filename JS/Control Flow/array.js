let teaFlavors = ["green tea", "black tea", "oolong tea"];
let teaF = new Array("green tea", "black tea", "oolong tea");

let firstTea = teaFlavors[0];
const firstT = teaF[0];

console.log(firstTea);
console.log(firstT);

let cities = ["London", "Tokyo", "Paris", "New York"];
const favouriteCity = cities[2];

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[2] = "jasmine tea";
console.log(teaTypes[2]);

let citiesVisited = ["Mumbai", "Sydney"];
console.log(citiesVisited);
citiesVisited.push("Berlin");
console.log(citiesVisited);

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
teaOrders.pop();
console.log(teaOrders);

let popularTeas = ["green tea", "black tea", "oolong tea"];
let softCopyTeas = popularTeas;

let topCities = ["Berlin", "Tokyo", "Paris"];
let hardCopyCities = [...topCities];
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);
hardCopyCities = topCities.slice;

let europeanCities = ["Berlin", "Madrid", "Rome", "Paris"];
let asianCities = ["Tokyo", "Seoul", "Bangkok", "Beijing"];
// let worldCities = europeanCities+asianCities;
let worldCities = europeanCities.concat(asianCities);
console.log(typeof worldCities);
console.log(worldCities);

let teaMenu = ["green tea", "black tea", "oolong tea"];
let menuLength = teaMenu.length;
console.log(menuLength);

let cityBucketList = ["Kyoto", "Prague", "Barcelona", "London"];
let isLondonBucketList = cityBucketList.includes("London");
console.log(isLondonBucketList);
