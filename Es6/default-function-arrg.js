// function makeAjaxReq(url, method) {
//   if (!method) {
//     method = "Get";
//   }
//   return method;
// }

function makeAjaxReq(url, method = "GET") {
  return method;
}

console.log(makeAjaxReq("google.com"));
console.log(makeAjaxReq("google.com", null));
console.log(makeAjaxReq("google.com", undefined));
console.log(makeAjaxReq("google.com", "POST"));
