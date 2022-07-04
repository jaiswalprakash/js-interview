// function detail(callback) {
//   console.log("This the the detail");
//   callback("prakash", address);
// }

// function name(str, callback) {
//   console.log("my name is ", str);
//   callback("kalaiya");
// }

// function address(str) {
//   console.log("my addrss is ", str);
// }

// detail(name);
var a = 5;
const hello = () => {
  const data = 5;
  //fetch is not a standard nodejs method - you need node-fetch
  data = fetch("https://reqres.in/api/users");
  console.log(data);
};
hello();
console.log("hello");
