var expense = {
  type: "business",
  amount: "$45 USD",
};

// var type = expense.type;
// var amount = expense.amount;

// with ES6

const { type } = expense;
const { amount } = expense;

// OR const { type, amount } = expense;

console.log("type", type);
console.log("amount", amount);

/* Example -2 */

let savedFile = {
  extension: "jpg",
  name: "repost",
  size: 166,
};
// with ES5

// function fileSummary(file) {
//   return `The file ${file.name}.${file.extension} is of size ${file.size}`;
// }

//with ES5 distructing
function fileSummary({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}`;
}

console.log(fileSummary(savedFile));

const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];

// [
//   { x: 4, y: 5 },
//   { x: 10, y: 1 },
//   { x: 0, y: 40 },
// ];

const spoints = points.map(([x, y]) => {
  return { x, y };
});
console.log(spoints);

const classes = [
  ["Chemistry", "9AM", "Mr. Darnick"],
  ["Physics", "10:15AM", "Mrs. Lithun"],
  ["Math", "11:30AM", "Mrs. Vitalis"],
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
  return { subject, time, teacher };
});
console.log(classesAsObject);
