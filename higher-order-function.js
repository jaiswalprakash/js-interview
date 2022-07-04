/*
# what is higher order function.
==> A function that takes other function as an arrugment or returns functions are called higher order function
*/

// write a functions to calculate area ,Circumference and dimeter of circle given radius[1,2,3,4];

//1. normal way;

const radius1 = [1, 2, 3, 4];

const calculateArea = function (radius) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log("Area 1", calculateArea(radius1));

const calculateCircumference = function (radius) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

console.log("Circumference 1", calculateCircumference(radius1));

const calculateDimeter = function (radius) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};

console.log("calculateDimeter 1", calculateDimeter(radius1));

//2. using higher order function

const radius2 = [1, 2, 3, 4];

const area2 = function (radius) {
  return Math.PI * radius * radius;
};
const circumference2 = function (radius) {
  return 2 * Math.PI * radius;
};

const dimeter2 = function (radius) {
  return 2 * radius;
};

const calculate = function (array, logic) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(logic(array[i]));
  }
  return output;
};
console.log("Area 2", calculate(radius2, area2));
console.log("Circumference 2", calculate(radius2, circumference2));
console.log("calculateDimeter 2", calculate(radius2, dimeter2));

// 3. using Array.proptype

const radius = [1, 2, 3, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const dimeter = function (radius) {
  return 2 * radius;
};

Array.prototype.calculate = function (logic) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};
console.log("Area3", radius.calculate(area));
console.log("Circumference3", radius.calculate(circumference));
console.log("calculateDimeter3", radius.calculate(dimeter));

// let payload = {
//   date: "",
//   data: [
//     {
//       studentId: "objectId(1111)",
//       attendenceStatus: "PRESENT",
//     },
//     {
//       studentId: "objectId(1111)",
//       attendenceStatus: "PRESENT",
//     },
//     {
//       studentId: "objectId(1111)",
//       attendenceStatus: "ABSENT",
//     },
//   ],
// };
// payload.data.map((e) => {
//   e["attendenceDate"] = payload.date;
// });
// console.log("payload=>", payload);
