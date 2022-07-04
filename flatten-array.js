// Flatten an array

let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10, [11, 12]],
];

// expected output: [1,2,3,4,5,6,7,8,9,10,11,12]

// flatten 1 layer

// let flantedArray = [];
// array.forEach((element) => flantedArray.push(...element));
// console.log(flantedArray);

// OR

//let flantedArray = [].concat(...array);

// An Inbuild method
//let arrayInbild = array.flat(2);
//console.log("arrayInbild", arrayInbild);

// write a custom flat method

const customFlat = (array, depth = 1) => {
  let result = [];
  array.forEach((element) => {
    if (Array.isArray(element) && depth > 0) {
      result.push(...customFlat(element, depth - 1));
    } else result.push(element);
  });
  return result;
};

console.log("custom", customFlat(array, 2));

// OR

Array.prototype.customFlat = function (depth = 1) {
  let result = [];
  this.forEach((element) => {
    if (Array.isArray(element) && depth > 0) {
      result.push(...element.customFlat(depth - 1));
    } else result.push(element);
  });
  return result;
};

console.log("custom", array.customFlat(1));

const a = [
  [1, 2, 3],
  [4, 5, 5],
  [6, 7, 8, [9, 10]],
];

Array.prototype.m1 = (array, depth = 1) => {
  let result = [];
  this.forEach((element) => {
    if (Array.isArray(element) && depth > 0) {
      result.push(m1(element), depth - 1);
    } else {
      result.push(element);
    }
  });

  return result;
};

console.log("m1", a.m1(2));
