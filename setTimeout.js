console.log("start");

setTimeout(() => {
  console.log("callback");
}, 5000);
// this will take 10 sec to execute
let startTime = new Date().getTime();
let endTime = startTime;
while (endTime < startTime + 10000) {
  endTime = new Date().getTime();
}
//
console.log("end");

/* 
why this happen ?
because we block the main thread for 10 sec 
and eventloop didnt come to action until callstack is empty
*/
