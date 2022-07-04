/*
#Array
    -In JavaScript, array is a single variable that is used to store different elements. 
    It is often used when we want to store list of elements 
    and access them by a single variable. 

*/
let number = [1, 2, 3, 4, 5];
let strings = ["apple", "mango", "banana"];
let mixed = [
  1,
  "apple",
  3,
  { a: 1 },
  function () {
    alert("hello");
  },
];

//mixed[3](); // hello

//******************** Array method 8************************

let marks = [1, 2, 3, 4, 5, 6, 7];

console.log(marks.length);
console.log(Array.isArray(marks));

// Print the last element;
console.log(marks[marks.length - 1]);
console.log(marks.at(-1));

// ***************Array modification method************************.

// ********* push,unshift  pop,shift
// console.log("pushed", marks.push(8)); //returned the pushed element
// marks.pop();

// console.log(marks.shift());
// console.log(marks);
// console.log("unshift", marks.unshift(9)); // return
// console.log(marks);
// marks.push(8);
// marks.push(...[9, 10]);
// console.log(marks);

// copy by reference

// let fruits = ["Banana"];

// let arr = fruits; // copy by reference (two variables reference the same array)

// console.log(arr === fruits); // true

// arr.push("Pear"); // modify the array by reference

// console.log(fruits); // Banana, Pear - 2 items now

// splice method

//let a1 = ["i", "am", "software", "developer"];

// a1.splice(2, 1);
// a1.splice(0, 2, ...["we", "are", "the"]);
//a1.splice(-2, 2, "heart", "doctor");
//console.log(a1);

// slice method
/*
        -it returns a new array copying to it all items from index start to 
        end (not including end). Both start and end can be negative, 
        in that case position from array end is assumed.
    */
// let a1 = ["i", "am", "software", "developer"];

// console.log(a1.slice(0, 2));

// console.log(a1);

// We can also call it without arguments: arr.slice() creates a copy of arr.
// That’s often used to obtain a copy for further
// transformations that should not affect the original array.

// let first = [1, 2, 3];

// let second = first.slice();

// second.push(4);

// console.log("second", second); //[1,2,3,4]
// console.log("first", first); //[1,2,3]

let users = [
  { id: 1, name: "John" },
  { id: 1, name: "Pete" },
  { id: 3, name: "Mary" },
];
// returns the first element it found
// let user = users.find((item) => item.id == 1);

// console.log(user); // John
// let address = ["Bilbo", "Gandalf", "Nazgul"];
// let lengths = address.map((item) => item + " " + " apple");
// console.log(lengths); // 5,7,6
// console.log(address);

let names = "Bilbo,  Gandalf, Nazgul";

let arr = names.split("");

console.log(arr);

let string = "-webkit-transition";

// let newstring = string.split("-").map((e, i) => {
//   i ? return (e[0].toUpperCase() + e.slice(1)) : e;
// });

let newstring = string
  .split("-")
  .map((word, i) => {
    if (i) return word[0].toUpperCase() + word.slice(1);
  })
  .join("");

console.log("newstring=>", newstring);

let usersdata = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(usersdata);
console.log("usersById", usersById);

/*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */

function groupById(data) {
  let iddata = {};
  data.forEach((element) => {
    iddata[element.id] = { ...element };
  });
  return iddata;
}

function duplicates(array) {
  array.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      count++;
      i++;
    }
  }

  return count;
}

console.log(duplicates([1, 2, 5, 6, 5, 2]));

var solution = function (firstArray = [1, 2, 3], secondArray = [4, 5, 6]) {
  let sum = 0;
  for (let i = 0; i < firstArray.length; i++) {
    sum = sum + Math.pow(Math.abs(firstArray[i] - secondArray[i]), 2);
    console.log("sum", sum);
  }
  return sum / firstArray.length;
};
console.log("solution", solution());

let result = function dontGiveMeFive(start = 4, end = 17) {
  let array = [];
  for (i = start; i <= end; i++) {
    if (!i.toString().includes("5")) {
      array.push(i);
    }
  }
  return array.length;
};

console.log("result", result());

// function bingo(a) {
//   let bingo = [2, 9, 14, 7, 15];
//   for (i of a) {
//     console.log("1", i);
//     if (!bingo.includes(i)) {
//       return "LOSE";
//     }
//   }
//   return "WIN";
// }

// console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]));

function bitMarch(n) {
  var array = [0, 0, 0, 0, 0, 0, 0, 0];
  let ans = [];
  for (i = 8 - n; i >= 0; i--) {
    let test = [...array];
    for (j = 0; j < n; j++) {
      test[i + j] = 1;
    }
    ans.push(test);
  }
  return ans;
}

console.log(bitMarch(1));

function dropCap(n) {
  return n
    .split(" ")
    .map((e, i) => {
      if (e.length > 1) return e[0].toUpperCase() + e.slice(1);
    })
    .join(" ");
}

console.log(dropCap("more  than    one space between words"));

function isAllPossibilities(x) {
  start = 0;
  let end = x.length - 1;
  let poss = [];
  for (let i = start; i <= end; i++) {
    poss.push(i);
  }
  console.log("poss", poss);
  for (let i = start; i <= end; i++) {
    if (!x.includes(poss[i])) {
      return false;
    }
  }
  return true;
}

console.log(isAllPossibilities([1, 2, 3, 4]));

function insertDash(num) {
  let array = num.toString().split("");
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] != 0 && array[i + 1] != 0) {
      if (+array[i] % 2 != 0 && +array[i + 1] % 2 != 0) {
        array[i] = array[i] + "-";
      }
    }
  }

  return array.join("");
}

console.log(insertDash(1003567));
function sayHiBye(firstName, lastName) {
  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  console.log("Hello, " + getFullName());
  console.log("Bye, " + getFullName());
}
sayHiBye("prakash", "jaiswal");

let x = 220;
let y = "hello";
let z;

console.log("or1=>", x || y);
console.log("or2=>", z || z);
console.log("and1=>", x && y);
console.log("and2=>", z && x);
console.log("and3=>", x && z);
console.log("and3=>", z && z);
