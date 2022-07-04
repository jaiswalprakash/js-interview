/* 
Reduce
*/

let numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let index = 0; index < numbers.length; index++) {
//   sum += numbers[index];
// }
// console.log(sum);

let sum = numbers.reduce(function (sum, number) {
  return sum + number;
}, 0);
console.log(sum);

let cars = [
  { color: "red", price: 100, brand: "honda" },
  { color: "yellow", price: 1100, brand: "tata" },
  { color: "blue", price: 1900, brand: "mahindara" },
];

// get an array of colors available in cars.
let color = cars.reduce(function (previous, cars) {
  previous.push(cars.color);
  return previous;
}, []);

console.log(color); //[ 'red', 'yellow', 'blue' ]

/* 
Reduce example
*/

function balancedParans(string) {
  return !string.split("").reduce(function (previous, char) {
    if (char == "(") previous++;
    if (char == ")") previous--;
    return previous;
  }, 0);
}

console.log(balancedParans("(((("));
/* get only unique element from that given array  */
function unique(array) {
  return array.reduce(function (pre, curr) {
    if (
      !pre.find((e) => {
        return e == curr;
      })
    ) {
      pre.push(curr);
    }
    return pre;
  }, []);
}
let uni = unique([1, 1, 2, 3, 4, 4]);
console.log("uni", uni);
