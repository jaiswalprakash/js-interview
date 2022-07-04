// simple for loop

let colors = ["red", "blue", "black", "orange"];

for (let index = 0; index < colors.length; index++) {
  console.log(colors[index]);
}

/* 
        1.foreach method
*/

colors.forEach((e, i) => console.log(`color=> ${e} at index ${i}`));

console.log(colors);

// create an array of number.
let numbers = [1, 2, 3, 4, 5];
// create a varaibale to hold the sum
let sum = 0;

//loop over the array , increamenting the sum variable
numbers.forEach((number) => (sum += number));

// print the sum varible
console.log(sum);
