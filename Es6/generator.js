/* Generators are a special type of function in JavaScript that can pause and resume state. A Generator function returns an iterator, which can be used to stop the function in the middle, do something, and then resume it whenever*/

function* numbersGen() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const gen = numbersGen();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
