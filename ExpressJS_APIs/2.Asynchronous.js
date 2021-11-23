//Asynchronous Functioning

console.log("First");

setTimeout(() => {
  console.log("Second");
}, 2000);

console.log("Third");

let a = 10;
let b = 0;

setTimeout(() => {
  b = 20;
}, 2000);

console.log(a + b); //10

//Handle Asynchronous data
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    b = 20;
    resolve(b);
    reject(b);
  }, 3000);
});
promise
  .then((value) => {
    console.log(a + b); //30
  })
  .catch((value) => {
    console.log(a + b);
  })
  .finally(() => {
    console.log("Finally");
  });
