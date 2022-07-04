/*
Question 1. What functions in node std library use OS's async features?
answer=> Almost everythings around networking for all OS's .some other stuff is OS specific

Question 2. How does this os Async stuff fit into the event loop?
answer=>  Tasks using the underlaying OS are Refleected in our 'pendingOsTasks' array
*/

const https = require("https");

const start = Date.now();
// NOTE:- NODE https /http ( networking ) do not use threadpool
function doRequest() {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
