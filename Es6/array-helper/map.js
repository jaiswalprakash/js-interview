/* 
        1.map method
*/

let numbers = [1, 2, 3, 4, 5];

// let doubleNumber = numbers.map(function (number) {
//   return number * 2;
// });
// with array function
let doubleNumber = numbers.map((number) => number * 2);
console.log(doubleNumber);

// example

let cars = [
  { model: "buick", price: "Cheap" },
  { model: "camaro", price: "expensive" },
];

let prices = cars.map((car) => car.price);

console.log(prices);
