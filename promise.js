const p = new Promise((resolve, reject) => {
  // some async work
  setTimeout(() => {
    // resolve(1); //if successfull,then resolved or fullfilled
    reject(new Error("message"));
  }, 2000);
});

p.then((result) => console.log("Result", result)).catch((err) =>
  console.log("Error", err.message)
);
