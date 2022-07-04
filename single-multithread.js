// this prove thats javascript is simple thread
///*

const start = Date.now();

function exa(time) {
  let startTime = new Date().getTime();
  let endTime = startTime;
  while (endTime < startTime + 5000) {
    endTime = new Date().getTime();
  }

  console.log(time, Date.now() - start);
}
//exa("1:"); // 5000
//exa("2:"); // double the time

//*/

// this show that new models in node.js are didnt work single thread ,
// so we can say that node.js is not single thread all the time
// THE REASON FOR THIS IS THE ACTION OF LIBUV AND NODE TO DESIDE THAT THIS FUNCTION TO EXECUTE OUTSIDE OF THE EVENTLOOP
// AND THERE COME THE THREAD POOL.

/* 
WE HAVE 4 THREAD BY DEFAULT AND WE CAN CHANGE THAT

Question1  Can we use threadpool for javascript code or can only nodejs functions use it??
answer=>   we can write custom js that uses that thread pool.

question2 what function in node std library use the threadpool.
Answer=>  All 'fs' module functions.some crypto stuff. depends on os (windows vs unix based).

question 3 how does this threadpool stuff fit into the event loop?
answer=> Tasks running in the threadpool are the 'pendingOperations' in our code example.
*/

process.env.UV_THREADPOOL_SIZE = 2;

const crypto = require("crypto");

const starttime = Date.now();

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1:", Date.now() - starttime);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("2:", Date.now() - starttime);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("3:", Date.now() - starttime);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("4:", Date.now() - starttime);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("5:", Date.now() - starttime);
});

// 625
//645 almost same time
