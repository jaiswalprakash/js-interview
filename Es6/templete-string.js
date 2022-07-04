/* with Es5 */

function getMessage() {
  const year = new Date().getFullYear();

  return "The year is " + year;
}
/* with Es5 */
function getMessage() {
  const year = new Date().getFullYear();

  return `The year is ${year} and we welome you`;
}

console.log(getMessage());
