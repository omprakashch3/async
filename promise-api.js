// const p = Promise.resolve({ id: 1, name: "om" });
// p.then((result) => console.log(result));

// const q = Promise.reject(new Error("error for rejection...."));
// // const q = Promise.reject("Reason for rejection");
// q.catch((error) => console.log(error));

// running parrallel promises
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("RUNNING ASYNCHRONOUS 1...");
    // reject(new Error("something went wrong"));
    resolve(1);
  }, 3000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("RUNNING ASYNCHRONOUS 2...");
    resolve(3);
  }, 4000);
});

// Promise.all([p1, p2])
//   .then((result) => console.log(result))
//   .catch((err) => console.log("Error", err.message));

//   as soon as one promise fullfilled return it
Promise.race([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log("Error", err.message));
