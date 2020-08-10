// const p = Promise.resolve({ id: 1, name: "om" });
// p.then((result) => console.log(result));

// const q = Promise.reject(new Error("error for rejection...."));
const q = Promise.reject("Reason for rejection");
q.catch((error) => console.log(error));
