// synchronous blocking
console.log("Before");
// getUser();
const user = getUser(1);
console.log(user);
// setTimeout(() => {
//   //this function is an example of async or non blocking function
//   console.log("waiting for user to response");
// }, 2000);
console.log("After");

function getUser(id) {
  setTimeout(() => {
    console.log("waiting for user to response");
    return { id: id, gitHubUser: "om" };
  }, 3000);
  //   return 1;
}
// callback
// promise
// async/await
