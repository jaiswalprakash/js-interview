/*
    find  :-return only first match
*/

let users = [
  { name: "praksh" },
  { name: "sahil" },
  { name: "mayank" },
  { name: "ritika" },
];

// let user;

// for (let index = 0; index < users.length; index++) {
//   if (users[index].name === "mayank") {
//     user = users[index];
//     break;
//   }
// }
// console.log(user);

let user = users.find(function (user) {
  return user.name === "mayank";
});
console.log(user);
